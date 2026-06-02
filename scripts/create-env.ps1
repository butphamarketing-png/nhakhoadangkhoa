# Tao file .env tu .env.example
$root = $PSScriptRoot
while ($root -and -not (Test-Path (Join-Path $root ".env.example"))) {
  $parent = Split-Path -Parent $root
  if (-not $parent -or $parent -eq $root) { break }
  $root = $parent
}

$example = Join-Path $root ".env.example"
$envFile = Join-Path $root ".env"

if (-not (Test-Path $example)) {
  Write-Host "Khong tim thay .env.example" -ForegroundColor Red
  exit 1
}

if (Test-Path $envFile) {
  $ans = Read-Host "File .env da ton tai. Ghi de? (y/N)"
  if ($ans -ne "y" -and $ans -ne "Y") {
    Write-Host "Huy." -ForegroundColor Yellow
    exit 0
  }
}

Copy-Item $example $envFile -Force
Write-Host ""
Write-Host "Da tao: $envFile" -ForegroundColor Green
Write-Host ""
Write-Host "Sua cac gia tri sau trong file .env:" -ForegroundColor Cyan
Write-Host "  1. DATABASE_URL  (Supabase pooler port 6543)"
Write-Host "  2. ADMIN_PASSWORD / ADMIN_API_KEY"
Write-Host "  3. VITE_API_URL   (local: http://localhost:5000)"
Write-Host ""
Write-Host "Sau do chay: pnpm run db:push" -ForegroundColor Yellow
Write-Host "Huong dan chi tiet: docs/BIEN-MOI-TRUONG.md" -ForegroundColor Gray

$open = Read-Host "Mo file .env bang Notepad? (Y/n)"
if ($open -ne "n" -and $open -ne "N") {
  notepad $envFile
}
