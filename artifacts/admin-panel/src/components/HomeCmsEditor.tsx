import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HeroSlideshowEditor from "@/components/HeroSlideshowEditor";
import MediaPicker from "@/components/MediaPicker";
import type { HomeCmsData } from "@website/lib/home-cms-defaults";
import { WHY_CHOOSE_ICON_OPTIONS } from "@website/lib/why-choose-icons";

type Props = {
  data: HomeCmsData;
  onChange: (data: HomeCmsData) => void;
};

export default function HomeCmsEditor({ data, onChange }: Props) {
  const [tab, setTab] = useState("slideshow");

  const patch = (partial: Partial<HomeCmsData>) => onChange({ ...data, ...partial });

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList className="flex flex-wrap h-auto mb-4 gap-1">
        <TabsTrigger value="slideshow">Slideshow</TabsTrigger>
        <TabsTrigger value="about">Giới thiệu</TabsTrigger>
        <TabsTrigger value="why">Tại sao chọn</TabsTrigger>
        <TabsTrigger value="doctors">Bác sĩ</TabsTrigger>
        <TabsTrigger value="smile">Dáng răng</TabsTrigger>
        <TabsTrigger value="tech">Công nghệ</TabsTrigger>
        <TabsTrigger value="services">Dịch vụ nổi bật</TabsTrigger>
        <TabsTrigger value="testimonials">Cảm nhận KH</TabsTrigger>
        <TabsTrigger value="commitments">5 cam kết</TabsTrigger>
        <TabsTrigger value="stats">Thống kê</TabsTrigger>
      </TabsList>

      <TabsContent value="slideshow">
        <HeroSlideshowEditor slides={data.heroSlides} onChange={(heroSlides) => patch({ heroSlides })} />
      </TabsContent>

      <TabsContent value="about" className="bg-white rounded-2xl border p-5 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <Label>Nhãn nhỏ (eyebrow)</Label>
            <Input
              value={data.aboutSection.eyebrow}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ aboutSection: { ...data.aboutSection, eyebrow: e.target.value } })}
            />
          </div>
          <div>
            <Label>Dòng tiêu đề 1</Label>
            <Input
              value={data.aboutSection.titleLine1}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ aboutSection: { ...data.aboutSection, titleLine1: e.target.value } })}
            />
          </div>
          <div>
            <Label>Dòng tiêu đề highlight (vàng)</Label>
            <Input
              value={data.aboutSection.titleHighlight}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ aboutSection: { ...data.aboutSection, titleHighlight: e.target.value } })}
            />
          </div>
          <div>
            <Label>Nút CTA — chữ</Label>
            <Input
              value={data.aboutSection.ctaLabel}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ aboutSection: { ...data.aboutSection, ctaLabel: e.target.value } })}
            />
          </div>
          <div className="md:col-span-2">
            <Label>Link nút CTA</Label>
            <Input
              value={data.aboutSection.ctaHref}
              className="mt-1 rounded-xl font-mono text-sm"
              onChange={(e) => patch({ aboutSection: { ...data.aboutSection, ctaHref: e.target.value } })}
            />
          </div>
        </div>
        <div>
          <Label>Đoạn mô tả</Label>
          <Textarea
            value={data.aboutSection.body}
            className="mt-1 rounded-xl"
            rows={3}
            onChange={(e) => patch({ aboutSection: { ...data.aboutSection, body: e.target.value } })}
          />
        </div>
        <div>
          <Label>Tags (mỗi tag một dòng)</Label>
          <Textarea
            value={data.aboutSection.tags.join("\n")}
            className="mt-1 rounded-xl"
            rows={3}
            onChange={(e) =>
              patch({
                aboutSection: {
                  ...data.aboutSection,
                  tags: e.target.value.split("\n").map((t) => t.trim()).filter(Boolean),
                },
              })
            }
          />
        </div>
        <MediaPicker label="Ảnh section Giới thiệu" value={data.aboutImage} onChange={(aboutImage) => patch({ aboutImage })} />
      </TabsContent>

      <TabsContent value="why" className="bg-white rounded-2xl border p-5 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <Label>Nhãn nhỏ</Label>
            <Input
              value={data.whyChooseSection.eyebrow}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ whyChooseSection: { ...data.whyChooseSection, eyebrow: e.target.value } })}
            />
          </div>
          <div>
            <Label>Tiêu đề dòng 1</Label>
            <Input
              value={data.whyChooseSection.titleLine1}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ whyChooseSection: { ...data.whyChooseSection, titleLine1: e.target.value } })}
            />
          </div>
          <div className="md:col-span-2">
            <Label>Tiêu đề dòng 2</Label>
            <Input
              value={data.whyChooseSection.titleLine2}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ whyChooseSection: { ...data.whyChooseSection, titleLine2: e.target.value } })}
            />
          </div>
        </div>
        <div className="space-y-3">
          <Label>6 lý do (icon + nhãn)</Label>
          {data.whyChooseSection.items.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_140px] gap-2">
              <Input
                value={item.label}
                placeholder="Nhãn"
                className="rounded-xl"
                onChange={(e) => {
                  const items = [...data.whyChooseSection.items];
                  items[i] = { ...item, label: e.target.value };
                  patch({ whyChooseSection: { ...data.whyChooseSection, items } });
                }}
              />
              <select
                className="h-10 rounded-xl border px-2 text-sm"
                value={item.icon}
                onChange={(e) => {
                  const items = [...data.whyChooseSection.items];
                  items[i] = { ...item, icon: e.target.value };
                  patch({ whyChooseSection: { ...data.whyChooseSection, items } });
                }}
              >
                {WHY_CHOOSE_ICON_OPTIONS.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <MediaPicker label="Ảnh section Tại sao chọn" value={data.whyChooseImage} onChange={(whyChooseImage) => patch({ whyChooseImage })} />
      </TabsContent>

      <TabsContent value="doctors" className="bg-white rounded-2xl border p-5 space-y-4">
        {data.homeDoctors.map((d, i) => (
          <div key={d.id} className="grid md:grid-cols-2 gap-3 pt-3 border-t first:border-0">
            <div>
              <Label>Tên bác sĩ</Label>
              <Input
                value={d.name}
                className="mt-1 rounded-xl"
                onChange={(e) => {
                  const homeDoctors = [...data.homeDoctors];
                  homeDoctors[i] = { ...d, name: e.target.value };
                  patch({ homeDoctors });
                }}
              />
            </div>
            <MediaPicker label="Ảnh bác sĩ" compact value={d.image} onChange={(image) => {
              const homeDoctors = [...data.homeDoctors];
              homeDoctors[i] = { ...d, image };
              patch({ homeDoctors });
            }} />
          </div>
        ))}
      </TabsContent>

      <TabsContent value="smile" className="space-y-4">
        {data.smileModels.map((m, i) => (
          <div key={m.id} className="bg-white rounded-2xl border p-4 grid md:grid-cols-2 gap-3">
            <div>
              <Label>Tag</Label>
              <Input value={m.tag} className="mt-1 rounded-xl" onChange={(e) => {
                const smileModels = [...data.smileModels];
                smileModels[i] = { ...m, tag: e.target.value };
                patch({ smileModels });
              }} />
            </div>
            <div>
              <Label>Tiêu đề</Label>
              <Input value={m.title} className="mt-1 rounded-xl" onChange={(e) => {
                const smileModels = [...data.smileModels];
                smileModels[i] = { ...m, title: e.target.value };
                patch({ smileModels });
              }} />
            </div>
            <div className="md:col-span-2">
              <MediaPicker label="Ảnh mẫu" compact value={m.image} onChange={(image) => {
                const smileModels = [...data.smileModels];
                smileModels[i] = { ...m, image };
                patch({ smileModels });
              }} />
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="tech" className="space-y-4">
        {data.technologyItems.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl border p-4 space-y-3">
            <Input placeholder="Tên thiết bị" value={t.title} className="rounded-xl" onChange={(e) => {
              const technologyItems = [...data.technologyItems];
              technologyItems[i] = { ...t, title: e.target.value };
              patch({ technologyItems });
            }} />
            <Textarea placeholder="Mô tả" value={t.desc} className="rounded-xl" rows={2} onChange={(e) => {
              const technologyItems = [...data.technologyItems];
              technologyItems[i] = { ...t, desc: e.target.value };
              patch({ technologyItems });
            }} />
            <MediaPicker label="Ảnh thiết bị" compact value={t.image} onChange={(image) => {
              const technologyItems = [...data.technologyItems];
              technologyItems[i] = { ...t, image };
              patch({ technologyItems });
            }} />
          </div>
        ))}
      </TabsContent>

      <TabsContent value="services" className="space-y-4">
        {data.featuredServices.map((s, i) => (
          <div key={s.id} className="bg-white rounded-2xl border p-4 space-y-3">
            <Input value={s.displayName} className="rounded-xl" onChange={(e) => {
              const featuredServices = [...data.featuredServices];
              featuredServices[i] = { ...s, displayName: e.target.value };
              patch({ featuredServices });
            }} />
            <Input value={s.href} placeholder="Link /dich-vu/..." className="rounded-xl font-mono text-sm" onChange={(e) => {
              const featuredServices = [...data.featuredServices];
              featuredServices[i] = { ...s, href: e.target.value };
              patch({ featuredServices });
            }} />
            <MediaPicker label="Ảnh dịch vụ" compact value={s.image} onChange={(image) => {
              const featuredServices = [...data.featuredServices];
              featuredServices[i] = { ...s, image };
              patch({ featuredServices });
            }} />
          </div>
        ))}
      </TabsContent>

      <TabsContent value="testimonials" className="space-y-6">
        {data.testimonialTabs.map((cat, ci) => (
          <div key={cat.id} className="bg-white rounded-2xl border p-4">
            <Input value={cat.label} className="rounded-xl font-bold mb-3" onChange={(e) => {
              const testimonialTabs = [...data.testimonialTabs];
              testimonialTabs[ci] = { ...cat, label: e.target.value };
              patch({ testimonialTabs });
            }} />
            <div className="space-y-4">
              {cat.items.map((item, ii) => (
                <div key={item.id} className="border rounded-xl p-3 space-y-2">
                  <div className="grid md:grid-cols-2 gap-2">
                    <Input value={item.name} placeholder="Tên KH" onChange={(e) => {
                      const testimonialTabs = [...data.testimonialTabs];
                      const items = [...cat.items];
                      items[ii] = { ...item, name: e.target.value };
                      testimonialTabs[ci] = { ...cat, items };
                      patch({ testimonialTabs });
                    }} />
                    <Input value={item.ratingLabel} placeholder="Nhãn đánh giá" onChange={(e) => {
                      const testimonialTabs = [...data.testimonialTabs];
                      const items = [...cat.items];
                      items[ii] = { ...item, ratingLabel: e.target.value };
                      testimonialTabs[ci] = { ...cat, items };
                      patch({ testimonialTabs });
                    }} />
                  </div>
                  <Textarea value={item.quote} placeholder="Lời nhận xét" rows={2} onChange={(e) => {
                    const testimonialTabs = [...data.testimonialTabs];
                    const items = [...cat.items];
                    items[ii] = { ...item, quote: e.target.value };
                    testimonialTabs[ci] = { ...cat, items };
                    patch({ testimonialTabs });
                  }} />
                  <MediaPicker label="Ảnh khách hàng" compact value={item.image} onChange={(image) => {
                    const testimonialTabs = [...data.testimonialTabs];
                    const items = [...cat.items];
                    items[ii] = { ...item, image };
                    testimonialTabs[ci] = { ...cat, items };
                    patch({ testimonialTabs });
                  }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="commitments" className="bg-white rounded-2xl border p-5 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <Label>Nhãn section</Label>
            <Input
              value={data.commitments.label}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ commitments: { ...data.commitments, label: e.target.value } })}
            />
          </div>
          <div>
            <Label>Phụ đề</Label>
            <Input
              value={data.commitments.subtitle}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ commitments: { ...data.commitments, subtitle: e.target.value } })}
            />
          </div>
          <div className="md:col-span-2">
            <Label>Tiêu đề chính</Label>
            <Input
              value={data.commitments.heading}
              className="mt-1 rounded-xl"
              onChange={(e) => patch({ commitments: { ...data.commitments, heading: e.target.value } })}
            />
          </div>
        </div>
        {data.commitments.items.map((item, i) => (
          <div key={i} className="border rounded-xl p-3 space-y-2">
            <Label>Cam kết {i + 1}</Label>
            <Input
              value={item.title}
              placeholder="Tiêu đề"
              className="rounded-xl"
              onChange={(e) => {
                const items = [...data.commitments.items];
                items[i] = { ...item, title: e.target.value };
                patch({ commitments: { ...data.commitments, items } });
              }}
            />
            <Textarea
              value={item.desc}
              placeholder="Mô tả ngắn"
              className="rounded-xl"
              rows={2}
              onChange={(e) => {
                const items = [...data.commitments.items];
                items[i] = { ...item, desc: e.target.value };
                patch({ commitments: { ...data.commitments, items } });
              }}
            />
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="rounded-xl"
          onClick={() =>
            patch({
              commitments: {
                ...data.commitments,
                items: [...data.commitments.items, { title: "", desc: "" }],
              },
            })
          }
        >
          + Thêm cam kết
        </Button>
      </TabsContent>

      <TabsContent value="stats" className="bg-white rounded-2xl border p-5 space-y-3">
        {data.clinicStats.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3">
            <div>
              <Label>Giá trị</Label>
              <Input value={stat.value} onChange={(e) => {
                const clinicStats = [...data.clinicStats];
                clinicStats[i] = { ...stat, value: e.target.value };
                patch({ clinicStats });
              }} />
            </div>
            <div>
              <Label>Nhãn</Label>
              <Input value={stat.label} onChange={(e) => {
                const clinicStats = [...data.clinicStats];
                clinicStats[i] = { ...stat, label: e.target.value };
                patch({ clinicStats });
              }} />
            </div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}
