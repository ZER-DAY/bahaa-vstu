// src/components/FooterContent.tsx
export default function FooterContent() {
  const recentPosts = [
    {
      id: 1,
      image: "/assets/img/post-landscape-3.jpg",
      category: "Culture",
      date: "1/19/2025",
      title:
        "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
      link: "/postitems/678ccc1a85bb8fd3470551fb",
    },
    {
      id: 2,
      image: "/assets/img/post-portrait-1.jpg",
      category: "Fashion",
      date: "1/19/2025",
      title:
        "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
      link: "/postitems/678cce8585bb8fd347055c3f",
    },
    {
      id: 3,
      image: "/assets/img/post-portrait-2.jpg",
      category: "Fashion",
      date: "1/19/2025",
      title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
      link: "/postitems/678cce8b85bb8fd347055ca8",
    },
    {
      id: 4,
      image: "/assets/img/post-landscape-2.jpg",
      category: "XCXC",
      date: "1/20/2025",
      title: "fdf",
      link: "/postitems/678ddca32b11e69696109597",
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Digital News */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital News</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ab, perspiciatis beatae autem deleniti voluptate nulla a dolores,
              exercitationem eveniet libero laudantium recusandae officiis qui
              aliquid blanditiis omnis quae. Explicabo?
            </p>
            <a href="/about" className="text-blue-400 hover:underline text-sm">
              Learn More
            </a>
          </div>

          {/* Section 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Blog", "News", "Post", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center text-sm hover:underline"
                    >
                      <i className="bi bi-chevron-right mr-2"></i> {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Section 3: Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "Business",
                "Culture",
                "Sport",
                "Food",
                "Politics",
                "Celebrity",
                "Startups",
                "Travel",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center text-sm hover:underline"
                  >
                    <i className="bi bi-chevron-right mr-2"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <a
                    href={post.link}
                    className="flex items-center hover:underline"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <div className="text-xs text-gray-400">
                        <span>{post.category}</span>
                        <span className="mx-1">•</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-sm">{post.title}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
