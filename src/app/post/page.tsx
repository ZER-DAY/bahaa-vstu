import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data"; // ✅ استيراد البيانات

export default function PostsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Последние публикации
      </h1>

      {/* شبكة البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition bg-white cursor-pointer">
              <div className="flex justify-center mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-center mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 text-center mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Категория:</strong> {post.category}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Дата публикации:</strong> {post.date}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-gray-700">{post.author.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
