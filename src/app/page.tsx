// src/app/page.tsx
import { Analytics } from "@vercel/analytics/react";

import PostsList from "@/sections/PostsList";
import SwiperSection from "@/sections/SwiperSection";
export default function HomePage() {
  return (
    <>
      <Analytics />
      <SwiperSection />
      <PostsList />
    </>
  );
}
