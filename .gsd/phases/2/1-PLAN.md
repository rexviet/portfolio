---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Navigation & Layout Shell

## Objective
Xây dựng khung giao diện chính cho Portfolio, bao gồm thanh điều hướng (Navbar) với hiệu ứng Glassmorphism và thành phần Layout để bọc các trang/phần nội dung.

## Context
- `.gsd/SPEC.md`
- `src/styles/index.css`
- `src/App.tsx`

## Tasks

<task type="auto">
  <name>Create Navbar Component</name>
  <files>src/components/common/Navbar.tsx, src/components/common/Navbar.css</files>
  <action>
    - Tạo component Navbar với các link điều hướng chính (Home, Experience, Projects, System Design, Contact).
    - Sử dụng hiệu ứng Glassmorphism đã định nghĩa trong `index.css` (.glass).
    - Đảm bảo Navbar có tính năng Sticky (dính ở trên cùng) khi cuộn trang.
    - Sử dụng Lucide React icons cho các link nếu cần.
  </action>
  <verify>Kiểm tra file Navbar.tsx và Navbar.css được tạo và không có lỗi syntax.</verify>
  <done>Navbar hiển thị đúng với hiệu ứng Glassmorphism và dính ở top.</done>
</task>

<task type="auto">
  <name>Create Layout Shell</name>
  <files>src/components/Layout.tsx, src/App.tsx</files>
  <action>
    - Tạo component `Layout` bọc `Navbar` và nội dung trang (`children`).
    - Cập nhật `src/App.tsx` để sử dụng `Layout` thay vì render trực tiếp nội dung placeholder.
    - Đảm bảo layout có padding và margin phù hợp theo biến CSS đã thiết lập.
  </action>
  <verify>Chạy build hoặc kiểm tra trực quan App.tsx được cập nhật.</verify>
  <done>Nội dung website được bọc bởi Layout và Navbar luôn xuất hiện.</done>
</task>

## Success Criteria
- [ ] Navbar hỗ trợ Sticky & Glassmorphism.
- [ ] Cấu trúc Layout hoàn chỉnh cho các Phase tiếp theo.
