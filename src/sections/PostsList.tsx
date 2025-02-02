import { posts, trendingPosts } from "@/lib/data";
import Link from "next/link"; // ✅ استيراد Link من Next.js
import Image from "next/image";

export default function PostsList() {
  return (
    <div className="container mx-auto p-6">
      {/* شبكة الأعمدة */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* العمود الأول (كبير نسبياً) */}
        <div className="lg:col-span-4 pr-6 border-r-2 border-gray-400">
          <div className="post-entry-1 lg">
            <Link href={`/posts/${posts[0].id}`} passHref>
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                width={500}
                height={300}
                className="w-full h-auto rounded cursor-pointer"
              />
            </Link>
            <div className="post-meta mt-3">
              <span className="text-sm font-bold text-gray-500">
                {posts[0].category}
              </span>
              <span className="mx-1 text-gray-500">•</span>
              <span className="text-sm text-gray-500">{posts[0].date}</span>
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              <Link href={`/posts/${posts[0].id}`} className="hover:underline">
                {posts[0].title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2">{posts[0].excerpt}</p>
            <div className="flex items-center mt-4">
              <Image
                src={posts[0].author.avatar}
                alt={posts[0].author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold">
                  {posts[0].author.name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* العمود الثاني والثالث (مساحة جيدة) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-6">
          {posts.slice(1, 8).map((post) => (
            <div key={post.id} className="post-entry-1">
              <Link href={`/posts/${post.id}`} passHref>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={250}
                  height={159}
                  className="w-[250px] h-[159px] object-cover rounded block mx-auto cursor-pointer"
                />
              </Link>
              <div className="post-meta mt-3">
                <span className="text-sm font-bold text-gray-500">
                  {post.category}
                </span>
                <span className="mx-1 text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold mt-2">
                <Link href={`/posts/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
            </div>
          ))}
        </div>

        {/* العمود الأخير (Trending مع مساحة أكبر) */}
        <div className="lg:col-span-3">
          <div className="trending border p-4 rounded">
            <h3 className="text-xl font-semibold mb-4">Trending</h3>
            <ul className="space-y-4">
              {trendingPosts.map((post, index) => (
                <li key={post.id} className="flex items-center">
                  <span className="text-5xl font-bold text-gray-300 mr-2">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-5">
                      <Link
                        href={`/posts/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <span className="text-xs text-gray-500">{post.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
