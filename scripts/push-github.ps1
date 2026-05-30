# Push code len GitHub - tai khoan butphamarketing-png
# Cach dung: mo PowerShell, chay file nay, dan TOKEN khi duoc hoi

$remotePublic = "https://github.com/butphamarketing-png/nhakhoadangkhoa.git"

$root = $PSScriptRoot
while ($root -and -not (Test-Path (Join-Path $root ".git"))) {
  $parent = Split-Path -Parent $root
  if (-not $parent -or $parent -eq $root) { break }
  $root = $parent
}
if (-not (Test-Path (Join-Path $root ".git"))) {
  Write-Host "Khong tim thay .git" -ForegroundColor Red
  exit 1
}
Set-Location $root
Write-Host "Git root: $root" -ForegroundColor Gray

$token = $env:GITHUB_TOKEN
if (-not $token) {
  Write-Host ""
  Write-Host "Tao token: https://github.com/settings/tokens (classic, quyen repo)" -ForegroundColor Yellow
  Write-Host "Dang nhap GitHub bang tai khoan: butphamarketing-png" -ForegroundColor Yellow
  Write-Host ""
  $token = Read-Host "Dan GitHub token (ghp_...)"
}

if (-not $token) {
  Write-Host "Can token de push. Thu lai." -ForegroundColor Red
  exit 1
}

$remoteAuth = "https://${token}@github.com/butphamarketing-png/nhakhoadangkhoa.git"
git remote set-url origin $remoteAuth

Write-Host "Dang day code..." -ForegroundColor Cyan
git add -A
$status = git status --porcelain
if ($status) {
  git commit -m "Cap nhat website va cau hinh Vercel deploy"
}

git fetch origin 2>$null
if ($LASTEXITCODE -eq 0) {
  git pull origin main --allow-unrelated-histories --no-edit 2>$null
}

git push -u origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "Thu force-with-lease..." -ForegroundColor Yellow
  git push -u origin main --force-with-lease
}

git remote set-url origin $remotePublic

if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "THANH CONG!" -ForegroundColor Green
  Write-Host "https://github.com/butphamarketing-png/nhakhoadangkhoa" -ForegroundColor Green
  Write-Host "Vercel: Redeploy project nhakhoadangkhoa" -ForegroundColor Cyan
} else {
  Write-Host "That bai. Kiem tra token va tai khoan butphamarketing-png." -ForegroundColor Red
  exit 1
}
