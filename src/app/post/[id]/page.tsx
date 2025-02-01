// src/app/post/[id]/page.tsx
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm">🗓 {post.date}</p>
      <article className="mt-4">{post.content}</article>
      <a href="/" className="text-blue-500 mt-6 block">
        ← الرجوع إلى الصفحة الرئيسية
      </a>
    </main>
  );
}
