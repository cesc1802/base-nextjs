const headerNavLinks = [
  { href: "/", title: "Trang chủ" },
  { href: "/download", title: "Tải xuống" },
  { href: "/rank", title: "Bảng xếp hạng" },
  {
    href: "/important",
    title: "Quan trọng",
    children: [
      { href: "/question-answer", title: "Hỏi đáp" },
      { href: "/rules", title: "Quy định" },
      { href: "/guilde", title: "Hướng dẫn" },
      { href: "/events", title: "Sự kiện" },
    ],
  },
  { href: "/map", title: "Bản đồ" },
];

export const authLinks = [
  { href: "/login", title: "Đăng nhập" },
  { href: "/sign-up", title: "Đăng ký" },
];

export default headerNavLinks;
