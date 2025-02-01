// src/lib/data.ts

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "15 Work From Home Part-Time Jobs You Can Do Now",
    excerpt: "This is a brief description of the post content.",
    content: "This is the full content for the post.",
    date: "1/19/2025",
    category: "Culture",
    author: {
      name: "Cameron Williamson",
      avatar: "/post-landscape-1.jpg",
    },
    image: "/post-landscape-1.jpg",
  },
  {
    id: "7",
    title: "15 Work From Home Part-Time Jobs You Can Do Now",
    excerpt: "This is a brief description of the post content.",
    content: "This is the full content for the post.",
    date: "1/19/2025",
    category: "Culture",
    author: {
      name: "Cameron Williamson",
      avatar: "/post-landscape-1.jpg",
    },
    image: "/post-landscape-1.jpg",
  },
  {
    id: "2",
    title: "Let’s Get Back to Work, Brisbane",
    excerpt: "A short description about getting back to work.",
    content: "Detailed information about getting back to work.",
    date: "3/8/2024",
    category: "Sport",
    author: {
      name: "Jenny Wilson",
      avatar: "/assets/img/person-2.jpg",
    },
    image: "/post-landscape-1.jpg",
  },

  {
    id: "3",
    title:
      "Why Craigslist Tampa Is One of The Most Interesting Places On the Web?",
    excerpt: "Discover why Craigslist Tampa is so unique.",
    content: "Detailed content about Craigslist Tampa.",
    date: "3/8/2024",
    category: "Design",
    author: {
      name: "Esther Howard",
      avatar: "/assets/img/person-3.jpg",
    },
    image: "/post-landscape-1.jpg",
  },

  {
    id: "4",
    title: "10 Life-Changing Hacks Every Working Mom Should Know",
    excerpt: "Tips and tricks for working moms.",
    content: "Full list of hacks for working moms.",
    date: "3/8/2024",
    category: "Tech",
    author: {
      name: "Jane Cooper",
      avatar: "/assets/img/person-4.jpg",
    },
    image: "/post-landscape-1.jpg",
  },
  {
    id: "5",
    title: "How to Avoid Distraction and Stay Focused During Video Calls?",
    excerpt: "Learn how to stay productive during video calls.",
    content: "Full guide on avoiding distractions.",
    date: "1/19/2025",
    category: "Food",
    author: {
      name: "Wade Warren",
      avatar: "/assets/img/person-5.jpg",
    },
    image: "/post-landscape-1.jpg",
  },

  {
    id: "6",
    title: "10 Life-Changing Hacks Every Working Mom Should Know",
    excerpt: "Tips and tricks for working moms.",
    content: "Full list of hacks for working moms.",
    date: "3/8/2024",
    category: "Tech",
    author: {
      name: "Jane Cooper",
      avatar: "/assets/img/person-4.jpg",
    },
    image: "/post-landscape-1.jpg",
  },
];

export const trendingPosts = [
  {
    id: "6",
    title:
      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    author: "Wade Warren",
  },
  {
    id: "7",
    title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
    author: "Jenny Wilson",
  },
  {
    id: "8",
    title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
    author: "Cameron Williamson",
  },
  {
    id: "9",
    title: "The Best Homemade Masks for Face (keep the Pimples Away)",
    author: "Jane Cooper",
  },
  {
    id: "10",
    title: "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
    author: "Esther Howard",
  },
];

export const heroSlides = [
  {
    id: 1,
    bgImg: "/post-slide-1.jpg",
    title: "Волгоградский технический университет ВолгГТУ",
    brief: ``,
  },
  {
    id: 2,
    bgImg: "assets/img/post-slide-2.jpg",
    title: "Поздравление ректора ВолгГТУ с Днем знаний",
    brief: ``,
  },
  {
    id: 3,
    bgImg: "assets/img/post-slide-3.jpg",
    title: "Национальный проект «Наука и университеты»",
    brief: ``,
  },
  {
    id: 4,
    bgImg: "assets/img/post-slide-4.jpg",
    title: "VSTu",
    brief: ``,
  },
];
