// src/app/page.tsx

import PostsList from "@/sections/PostsList";
import SwiperSection from "@/sections/SwiperSection";
export default function HomePage() {
  return (
    <>
      <SwiperSection />
      <PostsList />
    </>
  );
}
