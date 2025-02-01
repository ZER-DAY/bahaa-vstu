import YandexMapWithPoints from "@/sections/YandexMapWithPoints";
import PostsList from "@/sections/PostsList";
import SwiperSection from "@/sections/SwiperSection";
import About from "@/sections/about";
export default function HomePage() {
  return (
    <>
      <SwiperSection />
      <PostsList />
      <About />
      <YandexMapWithPoints />
    </>
  );
}
