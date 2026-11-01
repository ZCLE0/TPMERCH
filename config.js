/* =====================================================================
   CẤU HÌNH CHUNG — TP MERCH · THPT Trần Phú
   Dùng cho cả 3 trang: index.html (chọn loại), truong.html (móc khóa I'M A TPER), custom.html (móc khóa tên)
   ---------------------------------------------------------------------
   Khi đã nối Google Sheet (sheetApi), mọi thông số điều khiển ở Sheet hoặc trang quản trị (link web + #admin):
   - tab "Cài đặt": giá từng loại, giá ký hiệu, số lượng tối đa, đóng/mở, giới hạn, mã QR chuyển khoản, ẩn QR, thông báo.
   - tab "Người bán": link riêng (?ref=MÃ), nơi giao hàng, SĐT, Gmail nhận báo đơn, % hoa hồng.
   - tab "Giao nhận": nơi nhận dự phòng.  - tab "Mã đặc biệt": mã bỏ qua chuyển khoản.
   Các giá trị bên dưới chỉ là DỰ PHÒNG khi chưa nối Sheet hoặc mất mạng.
   ===================================================================== */
window.MERCH_CONFIG = {
  // Link Ứng dụng web của Apps Script (kết thúc bằng /exec) — xem README.md mục 1.
  // ĐỂ TRỐNG cho tới khi bạn tạo Google Sheet + Apps Script RIÊNG cho Trần Phú
  // (không dùng lại link của Châu Văn Liêm, nếu không đơn 2 trường sẽ ghi chung một Sheet).
  sheetApi: "",

  // Dự phòng khi chưa có sheetApi: đơn móc khóa trường gửi về email qua FormSubmit.
  orderEmail: "email-cua-ban@gmail.com",

  contact: "",                   // link fanpage / Messenger của shop (không bắt buộc)
  guideUrl: "huong-dan.html",    // trang hướng dẫn ghi link vào móc khóa

  // Giá dự phòng (đồng) — khi đã nối Sheet thì giá ở tab Cài đặt được dùng
  prices: { 1: 49000, 2: 89000, 3: 135000 },
  customPrice: 59000,
  symbolPrice: 1000,
  maxQty: 10,

  // Nơi nhận dự phòng (khi đã nối Sheet: nơi giao hàng của người bán theo link)
  pickup: { place: "lớp X", person: "X", phone: "X" },
  owner: "",

  // Mã QR chuyển khoản dự phòng (khi đã nối Sheet: tab Cài đặt → "Mã QR chuyển khoản (dữ liệu)")
  qrPayload: "00020101021138530010A0000007270123000697044101093488145460208QRIBFTTA53037045802VN63044275",
  bankBin: "970441", accountNo: "", bankName: "VIB", accountName: "LE ANH QUAN", accountDisplay: "",
  showAccount: false,            // false = không hiện số tài khoản, khách chỉ quét QR
  qrImage: "qr/vib.jpg"          // ảnh QR gốc (chỉ phần mã), dùng khi máy khách không tạo được mã có sẵn số tiền
};
