# DeepIELTS — Phase 0 Audit: Route & View Map

**Timestamp:** 2026-10-03  

## 1. Single-Page Application (SPA) Views

The application handles routing via state-based view switching (`switchView(viewId)` / `navigate(viewId)`):

| View ID | Role & Master Plan Mapping | Trigger / Entry | Primary Action |
|---|---|---|---|
| `view-public` | **Landing Page** (Master Plan Sec. 8) | Default for unauthenticated/new users, `/`, `btn-brand` | "Làm bài chẩn đoán" / "Vào học ngay" |
| `view-app-today` | **Today Learning Command Center** (Sec. 5 & 10) | Main App entry `/app`, Primary Nav "Hôm Nay" | "Tiếp tục bài đề xuất" (Next Best Action) |
| `view-app-learn` | **Learn & Skill Pages** (Sec. 7 & 10) | Primary Nav "Học Tập", Roadmap cards | Chọn Kỹ năng / Khởi chạy Strategy Card |
| `view-app-review` | **Review Queue** (Sec. 4 & 10) | Primary Nav "Ôn Tập", Due counter | Đánh giá lại thẻ (FSRS Spaced Repetition) |
| `view-app-test` | **Computer-First Mock** (Sec. 7 & 10) | Primary Nav "Thi Thử", Section test buttons | Làm bài thi thử tính giờ & nộp bài |
| `view-app-progress` | **Progress & Band Gap** (Sec. 8 & 10) | Primary Nav "Tiến Độ", Profile card | "Xử lý độ lệch Band lớn nhất" |
| `view-parent` | **Parent / Mentor Overview** (Sec. 8 & 10) | Link "Góc Phụ Huynh", `/parent` | Xem báo cáo tuần & gửi lời động viên |
| `view-diagnostic` | **Diagnostic Onboarding** (Sec. 4 & 10) | Hero CTA, Today CTA khi chưa có điểm | Hoàn tất 6 câu hỏi phân loại năng lực |
| `view-practice` | **Practice Drill Workspace** | Nút "Luyện tập vi mô" trong Strategy Card | Trả lời câu hỏi & nhận phản hồi |
| `view-analytics` | **Detailed Analytics & History** | Nút "Xem chi tiết" trong Tiến độ | Xem lịch sử bài thi và phân tích lỗi |

## 2. Modals & Sidebars

- `modal-strategy-card`: 6-step Academic Strategy Card (Tip → Why → Example → Try It → Feedback → Recall).
- `modal-breathing`: 1-minute Box Breathing (4-4-4-4) for stress reduction.
- `modal-donation-detail`: Coffee support modal with Techcombank & MoMo VietQR codes.
- `donation-sidebar-card`: Left floating support card with quick 1-click copy.
- `donation-collapsed-chip`: Floating edge pill for reopening the donation card.
