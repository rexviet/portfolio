---
phase: 2
plan: 2
wave: 2
---

# Plan 2.2: Hero Section & Typewriter Effect

## Objective
Tạo ấn tượng đầu tiên cực mạnh cho portfolio bằng phần Hero giới thiệu Phùng Quốc Việt (Backend Leader & DevOps Engineer) với hiệu ứng gõ chữ (Typewriter effect) và hiển thị các kỹ năng chính từ CV.

## Context
- `CV-Phung-Quoc-Viet-Backend.jpg/1.jpg` (Tài liệu nguồn cho nội dung)
- `src/components/sections/Hero.tsx`
- `src/components/sections/Hero.css`

## Tasks

<task type="auto">
  <name>Create Hero Section Component</name>
  <files>src/components/sections/Hero.tsx, src/components/sections/Hero.css</files>
  <action>
    - Xây dựng component Hero hiển thị Tên, Job Title, Objective từ CV.
    - Title chính: 'Phùng Quốc Việt'.
    - Job Titles: 'Backend Leader', 'DevOps Engineer', 'System Architect'.
    - Áp dụng hiệu ứng **Typewriter** cho các Job Titles sử dụng `framer-motion`.
    - Thêm các nút liên kết nhanh (Contact Me, View Projects).
  </action>
  <verify>Hero.tsx chứa các thông tin chính xác từ CV và hiệu ứng chuyển động của Framer Motion.</verify>
  <done>Phần Hero hiển thị đúng với các tiêu đề được gõ lần lượt.</done>
</task>

<task type="auto">
  <name>Add Stats/Quick Skills Badges</name>
  <files>src/components/sections/Hero.tsx</files>
  <action>
    - Thêm các Badge hiển thị số năm kinh nghiệm hoặc tech stack tiêu biểu (NodeJS, Microservices, DevOps, CQRS...).
    - Sử dụng các icon từ `lucide-react` để minh họa cho từng badge.
    - Áp dụng hiệu ứng Hover tinh tế (neon glow).
  </action>
  <verify>Kiểm tra giao diện Hero có đầy đủ các badge và icon không.</verify>
  <done>Các badge tech stack nổi bật và có hiệu ứng hover chuyên nghiệp.</done>
</task>

## Success Criteria
- [ ] Phần Hero giới thiệu đầy đủ thông tin cá nhân từ CV.
- [ ] Hiệu ứng Typewriter hoạt động mượt mà.
- [ ] Giao diện hiện đại, Sleek Dark Mode với Neon accents.
