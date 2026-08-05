export type AppointmentRow = {
  id: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  note: string | null;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
};

export type SiteSettings = {
  name: string;
  shortName: string;
  slogan: string;
  hotline: string;
  hotlineRaw: string;
  email: string;
  website: string;
  address: string;
  hours: string;
  facebook: string;
  zalo: string;
  messenger: string;
  youtube: string;
  tiktok: string;
};

export type BlogPostAdmin = {
  id: number;
  slug: string;
  href: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  sourceUrl?: string;
  status?: "published" | "draft";
};

export type DoctorAdmin = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience?: string;
  cases: string;
  rating: number;
  phone: string;
  email: string;
  tags: string[];
  avatar: string;
  available: boolean;
};

export type TestimonialAdmin = {
  id: number;
  name: string;
  service: string;
  quote: string;
  rating: number;
  avatar: string;
};
