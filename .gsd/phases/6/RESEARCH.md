# Phase 6 Research: Polish, SEO & Launch

## 1. Animations Strategy (Framer Motion)
- **Scroll Reveal**: Sử dụng `initial={{ opacity: 0, y: 20 }}` kết hợp `whileInView={{ opacity: 1, y: 0 }}` cho toàn bộ các section.
- **Stagger Effects**: Áp dụng cho danh sách các Project Cards và Experience Items để tạo cảm giác mượt mà khi người dùng cuộn xuống.
- **Hover Micro-interactions**: Tăng cường cảm giác "vật lý" cho Stats Cards và Social Links (Scale up + Shadow Glow).
- **Page Transitions**: Mặc dù là Single Page Application (SPA), cần tinh chỉnh cách các thành phần xuất hiện lần đầu (Entry animations).

## 2. SEO Optimization
- **Metadata**: 
  - Title: Phùng Quốc Việt | Backend Leader & DevOps Engineer
  - Description: Chuyên sâu về Microservices, System Design và Scalable architecture. Hơn 7 năm kinh nghiệm xây dựng hệ thống chịu tải cao.
- **Open Graph (OG)**: Cần thiết định cấu hình để hiển thị ảnh preview đẹp mắt khi chia sẻ Link trên LinkedIn/Facebook.
- **Semantic HTML**: Đảm bảo sử dụng đúng các thẻ `<section>`, `<article>`, `<header>`, `<footer>` để máy tìm kiếm dễ dàng index.

## 3. Performance & Best Practices
- **Lighthouse Goals**: Target >90 cho tất cả các chỉ số.
- **Image Optimization**: Chuyển các asset ảnh (nếu có) sang định dạng WebP hoặc AVIF.
- **Preloading**: Tối ưu hóa việc tải Fonts từ Google Fonts.
- **Bundle Size**: Kiểm tra `vite build` report để đảm bảo không có package nào quá lớn.

## 4. Deployment Strategy
- **Platform**: GitHub Pages (vì repository đã có sẵn trên GitHub).
- **Automation**: Setup GitHub Action để tự động build và deploy mỗi khi push lên nhánh `main`.
- **Domain**: rexviet.github.io/portfolio hoặc custom domain nếu user có.

## 5. Deployment Options Comparison
| Platform | Pros | Cons |
|----------|------|------|
| **GitHub Pages** | Miễn phí, tích hợp sâu với Git | Cần cấu hình base path cho Vite |
| **Vercel/Netlify** | CI/CD cực nhanh, tự động xử lý routing tốt hơn | Phụ thuộc bên thứ 3 |

**Quyết định**: Sử dụng **GitHub Pages via GitHub Actions** để giữ project tập trung toàn bộ trong hệ sinh thái GitHub hiện tại của user.
