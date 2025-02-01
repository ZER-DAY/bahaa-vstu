import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-14 mb-14">
      <div className="post-content">
        {/* الفئة والتاريخ */}
        <div className="post-meta flex items-center text-gray-600 text-sm mb-4 font-medium">
          <span className="font-semibold text-blue-600">{post.category}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span>{post.date}</span>
        </div>

        {/* العنوان */}
        <h1 className="text-5xl font-extrabold mb-6 leading-snug text-gray-800">
          {post.title}
        </h1>

        {/* المحتوى */}
        <article className="text-gray-700 text-lg leading-relaxed space-y-6">
          {/* أول فقرة مع الحرف الأول */}
          <p>
            <span className="firstcharacter text-6xl font-bold text-blue-600 float-left mr-4">
              {post.content.charAt(0)}
            </span>
            {post.content.slice(1, 200)}
          </p>

          {/* الصورة بعد الفقرة الأولى */}
          <figure className="my-8">
            <Image
              src={post.image}
              alt="Post Illustration"
              width={1200}
              height={800}
              className="w-full h-auto rounded-md shadow-md"
            />
          </figure>

          {/* بقية الفقرات */}
          {post.content
            .split(". ")
            .slice(1)
            .map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-base leading-7">
                {paragraph}.
              </p>
            ))}
        </article>
      </div>
    </section>
  );
}
