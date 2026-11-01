# TP MERCH · THPT Trần Phú (HCM) — MERCHANDISE V2.0

Bản dựng lại từ web MERCHANDISE V2.0 của THPT Châu Văn Liêm cho **THPT Trần Phú**, tông **trắng + cyan**.
Giữ nguyên toàn bộ chức năng (đặt hàng, QR chuyển khoản, mã giảm giá, mã đặc biệt, người bán `?ref=`, trang quản trị `#admin`, thiết kế móc khóa tên 3D + xuất STL), làm lại giao diện và chuyển động:

- **Một tông duy nhất trắng + cyan**, tối giản kiểu Apple: chữ lớn, nhiều khoảng trắng, đường kẻ mảnh, không chữ gradient, không đổ bóng phát sáng.
- **Liquid glass** cho thanh trên và thanh công cụ 3D (mờ kính, nội dung trôi bên dưới); viên chọn của nút gạt **trôi như giọt nước**; lớp nước cyan rất nhạt trôi chậm ở đầu trang chọn.
- **Vật liệu 3D mới** (`assets/tp-shade.js`), dùng chung cho cả 3 trang:
  - **Nhựa PETG**: bóng satin, ánh sáng thấm vào mép nhựa (màu cyan trong và sâu), **vân lớp in 0,2 mm** hiện trên thành móc khóa khi phóng to.
  - **Kim loại** (khoen, khóa, 9 mắt xích): phản chiếu phòng chụp có dải đèn, đọc ra ngay là kim loại bóng gương.
- **Phần "Chất liệu" mới** ở trang móc khóa trường và trang móc khóa tên: 2 khung 3D soi cận (miếng nhựa mẫu 3 lớp, khoen + xích), kéo để xoay, nút **Soi cận**.
- **Mô hình móc khóa trường mới**: viền trắng · mặt cyan · chữ **TRẦN PHÚ** nổi (mặt sau **TP · HIGH SCHOOL**), cùng khổ 4,9 × 4,7 × 1,34 cm và cùng bộ khoen + xích như bản cũ.
- Chuyển động theo chuẩn: ease-out mạnh, nút co lại khi bấm (0,97), hover chỉ bật trên máy có chuột (điện thoại không bị "dính" hover), ô nhập ≥ 16 px (iPhone không tự phóng to), tôn trọng chế độ **Giảm chuyển động**.

## Các file

```
index.html            trang mở đầu: 2 thẻ sáng, móc khóa 3D xoay bên trong, bấm để chọn loại
truong.html           móc khóa của trường I'M A TPER + trang quản trị (#admin)   (thay cho cvler.html)
custom.html           thiết kế + đặt móc khóa tên CUSTOM
huong-dan.html        hướng dẫn tự ghi link vào móc khóa (gửi kèm mail xác nhận)
config.js             cấu hình dự phòng dùng chung cho cả 3 trang
assets/tp.css         lớp thiết kế chung (màu, nút, khung sáng, phần Chất liệu)
assets/tp-shade.js    vật liệu 3D: nhựa PETG + kim loại (đổi MÀU sản phẩm ở đây: TPShade.COLORS)
assets/tp-material.js khung soi cận chất liệu
assets/tp-fluid.js    chuyển động "chất lỏng" (viên chọn trôi, hiện dần khi cuộn)
preview.html          XEM TRƯỚC: mở 1 file này là xem được cả 4 trang (máy tính / điện thoại), không cần đưa lên GitHub
qr/vib.jpg            ảnh mã QR VIB (chỉ phần mã), dùng khi máy khách không tạo được mã có sẵn số tiền
og.jpg                ảnh khi chia sẻ link (đã làm mới theo tông Trần Phú)
apps-script/Code.gs   mã cho Google Sheet (đã đổi tên trường, màu, mã đơn TPH…)
```

Đưa tất cả file (trừ thư mục `apps-script` và `preview.html`, file này chỉ để xem trước) lên repo GitHub Pages, **giữ nguyên thư mục `assets/` và `qr/`**.

## 1. Cài đặt lần đầu (bắt buộc làm trước khi bán)

> ⚠️ `config.js` đang để **`sheetApi: ""`**. Bản Trần Phú **không** dùng lại link Apps Script của Châu Văn Liêm, nếu không đơn của 2 trường sẽ ghi chung một Sheet, mail báo đơn và nơi nhận bị lẫn.
> Khi `sheetApi` còn trống, web vẫn chạy ở chế độ dự phòng (xem mục 6).

1. Tạo **Google Sheet mới** (bằng Gmail sẽ nhận đơn) → **Tiện ích mở rộng → Apps Script** → dán toàn bộ `apps-script/Code.gs` → **Lưu**.
2. Chạy hàm **setup** (hoặc menu **MERCH → Sắp xếp lại các tab**). Hàm tự tạo các tab Cài đặt, Đơn hàng, Người bán, Giao nhận, Mã đặc biệt, Mã giảm giá.
3. Ở tab **Cài đặt**: sửa **Link trang web** thành link GitHub Pages của bạn (đang để mẫu `https://ten-cua-ban.github.io/tranphu/`), đặt **mật khẩu quản trị**, giá, mã QR chuyển khoản, ngân hàng, chủ tài khoản.
4. **Triển khai → Triển khai mới → Ứng dụng web**: *Thực thi với tư cách: Tôi*, *Ai có quyền truy cập: Bất kỳ ai* → chép link kết thúc bằng `/exec`.
5. Dán link đó vào `sheetApi` trong **`config.js`** → đưa lên GitHub → **Commit changes**.
6. Kiểm tra: mở link web + `#admin`, đăng nhập. Dưới trạng thái có dòng **Máy chủ bản … · Sheet chạy bằng …**. Sau này sửa `Code.gs` thì chọn **Quản lý triển khai → bút chì → Phiên bản mới** để giữ nguyên link `/exec`.

Mã đơn của bản này bắt đầu bằng **`TPH`** (ví dụ `TPH7K2Q`), web và `Code.gs` đã khớp nhau. Nếu dùng `Code.gs` cũ của CVL, đơn sẽ bị từ chối vì sai mã.

## Cần bạn kiểm tra / tự đổi

| Nội dung | Ở đâu |
|---|---|
| Tên sản phẩm **I'M A TPER** (đặt theo kiểu I'M A CVLER, vì chưa rõ học sinh Trần Phú tự gọi mình là gì) | `index.html`, `truong.html` (tiêu đề, mô tả), `apps-script/Code.gs` (tìm `I'M A TPER`) |
| Thông số kim loại: web chỉ mô tả "kim loại sáng bóng, bóng gương", không ghi loại thép / lớp mạ. Muốn ghi rõ thì sửa phần **Chất liệu** | `truong.html`, `custom.html` (tìm `tp-mcard`) |
| Màu nhựa trên mô hình 3D (cyan đang là `#00a6c8`) cho khớp cuộn nhựa thật | `assets/tp-shade.js` → `COLORS` |
| Tài khoản nhận tiền (đang giữ VIB · LE ANH QUAN của bản cũ) | `config.js` và tab Cài đặt |
| Dòng chữ in trên móc khóa tên: `TRAN PHU HIGHSCHOOL` | đã đổi sẵn trong `custom.html` (thư viện KCGeo, `schoolText`) |

Mặt trước / mặt sau của móc khóa trường (TRẦN PHÚ · TP HIGH SCHOOL) là mô hình dựng sẵn, nhúng trong `truong.html` và `index.html`. Muốn đổi chữ trên mô hình thì nhờ Claude dựng lại (dùng lại đúng công cụ đã tạo bản này).

## 2. Điều khiển ở đâu

| Việc | Tab Cài đặt | Trang quản trị (`…/#admin`) |
|---|---|---|
| Đóng / mở đặt hàng (cả 2 loại) | Mở đặt hàng | Đóng đặt hàng ngay / Mở lại |
| Giá 1 cái, combo 2, combo 3 | Giá … (móc khóa trường (I'M A TPER)) | Giá bán → Lưu giá |
| Giá móc khóa tên, **giá cộng thêm khi có ký hiệu** | Giá móc khóa tên · Giá thêm ký hiệu cuối tên | Giá bán → Lưu giá |
| Số lượng tối đa mỗi đơn | Số lượng tối đa mỗi đơn | Giá bán → Lưu giá |
| Giới hạn móc khóa trường (I'M A TPER) / móc khóa tên | 2 dòng Giới hạn | 2 ô Giới hạn |
| Mã QR chuyển khoản | Mã QR chuyển khoản (dữ liệu) · Ngân hàng · Chủ tài khoản | — |
| Tạm ẩn mã QR | Hiện mã QR chuyển khoản | Tạm ẩn mã QR / Hiện lại |
| Thông báo khi đóng / hết suất / ẩn QR | 3 dòng Thông báo | Lưu thông báo |
| Mã đặc biệt (bỏ qua chuyển khoản) | tab Mã đặc biệt | Mã đặc biệt → Thêm mã |
| Mã giảm giá (ai nhập trước được dùng) | tab Mã giảm giá | Mã giảm giá → Tạo mã / Thêm mã giảm giá |

Trang web và máy chủ cùng tính tiền theo giá ở Sheet. Dù ai sửa giá trên trình duyệt thì Sheet vẫn ghi đúng, và đơn bị tính lại có ghi chú ở cột Ghi chú.

## 3. Mã QR chuyển khoản

- Mọi đơn của cả 2 loại đều chuyển vào **mã QR chung ở tab Cài đặt**, đang để VIB · LE ANH QUAN (giống bản cũ, đổi nếu cần).
- Trang tự thêm số tiền và nội dung chuyển khoản vào mã cho từng đơn.
- Trang chỉ hiện mã QR, tên chủ tài khoản và ngân hàng, **không hiện số tài khoản**.
- Có nút **Lưu ảnh mã QR** để khách mở ảnh đó trong app ngân hàng.
- Muốn đổi tài khoản: quét mã QR mới, dán chuỗi đọc được (bắt đầu bằng `000201`) vào ô *Mã QR chuyển khoản (dữ liệu)*, rồi sửa tên ngân hàng và chủ tài khoản.
- Tab Người bán có cột **QR riêng**, đang để trống. Chỉ điền khi muốn đơn qua link của người đó chuyển vào tài khoản riêng của họ.

## 4. Người bán và link riêng

- Link riêng là link web + `?ref=MÃ`, ví dụ `https://ten-cua-ban.github.io/tranphu/?ref=HHD`. Cột **Link riêng** trong tab Người bán tạo sẵn link này. Link cũ dạng `?nb=hhd` vẫn chạy.
- Mã người bán được giữ suốt hành trình của khách: trang chọn → móc khóa trường (I'M A TPER) hoặc móc khóa tên → chuyển khoản → mail xác nhận.
- Khách vào link của ai thì **nhận hàng ở Nơi giao hàng của người đó**, liên hệ bằng Họ tên + SĐT của người đó, không phải chọn. Người chưa điền Nơi giao hàng thì dùng tab Giao nhận (dự phòng).
- Mỗi đơn có một mail báo đơn duy nhất, gửi cùng lúc cho bạn và người bán.
- Cột **Kiểm tra** báo thiếu gì cho từng người bán (✓ / ⚠). Các cột tự tính: số đơn, số cái, doanh thu, đã nhận tiền, hoa hồng.

## 5. Mã giảm giá (ai nhập trước được dùng)

- Tạo ở trang quản trị (phần **Mã giảm giá**, nút **Tạo mã** tự nghĩ mã) hoặc tab **Mã giảm giá**. Mỗi mã ghi:
  - **Giảm**: số tiền (`10000`, `10k`) hoặc phần trăm (`10%`);
  - **Áp dụng cho**: cả 2 loại, chỉ móc khóa trường (I'M A TPER), hoặc chỉ móc khóa tên;
  - **Số lượt dùng**: mã dùng được cho bao nhiêu người (để trống = 1). Ghi `5` thì **5 người khác nhau** nhập sớm nhất được giảm, mỗi người 1 lần;
  - **Combo áp dụng**: đơn đặt bao nhiêu cái thì được giảm, để tránh giảm chồng lên giá combo. Chọn trong danh sách (Chỉ lẻ 1 cái, Chỉ combo 2, Chỉ combo 3, Lẻ 1 cái hoặc combo 2, Từ 2 cái trở lên) hoặc tự ghi: `1, 2` · `3` · `2+`. Để trống = mọi số lượng. Với móc khóa tên, số này là số cái đặt;
  - ghi chú (không bắt buộc, vd. "đăng story").
- Mã **không gán cho ai**. Bạn đăng mã lên story/nhóm; **ai nhập và áp dụng trước thì người đó được dùng**. Nút **Chép** ở trang quản trị chép sẵn câu để đăng (có ghi số lượt và combo).
- Khách điền họ tên, lớp, SĐT, Gmail rồi bấm **Áp dụng**. Mỗi khách bấm Áp dụng được **giữ 1 lượt trong 45 phút** để chuyển khoản. Hết lượt trống thì người sau thấy "Các lượt còn lại đang được bạn khác giữ" (mã 1 lượt: "Mã này vừa được một bạn khác áp dụng"). Đặt đơn xong thì cột **Đã dùng** tăng 1. Quá 45 phút không đặt thì lượt đó mở lại.
- Khách đổi số lượng sau khi áp mã mà không đúng combo áp dụng thì trang báo ngay, không trừ tiền, và không cho đi tiếp cho tới khi khách đổi lại số lượng hoặc bỏ mã.
- **Chống 1 người dùng nhiều mã hoặc 1 mã nhiều lần:** mỗi người chỉ dùng được **1 mã, 1 lần**, kể cả mã còn lượt. Máy chủ coi là cùng một người nếu trùng **bất kỳ** điều nào sau (không phân biệt hoa thường, có dấu hay không dấu):
  - cùng SĐT, hoặc
  - cùng Gmail, hoặc
  - cùng link Facebook, hoặc
  - cùng **họ tên + lớp** (trùng tên nhưng khác lớp là người khác, vẫn được dùng).
- Mỗi người cũng chỉ giữ 1 mã một lúc: áp mã khác thì lượt đang giữ được nhả ra.
- 3 cột tự động ở tab Mã giảm giá: **Đã dùng** (số lượt đã dùng), **Trạng thái** (còn trống bao nhiêu lượt, ai đang giữ, lần dùng gần nhất), **Đang giữ** (máy ghi, đừng sửa). Muốn thêm lượt thì tăng Số lượt dùng. Mã đã có lượt dùng hoặc đang có người giữ thì không xóa được.
- Mã QR tự trừ tiền giảm. Tab Đơn hàng ghi cột **Mã giảm giá** và **Tiền giảm**. Mail xác nhận và mail báo đơn đều có dòng giảm giá.
- Máy chủ kiểm tra lại mã ngay lúc nhận đơn (kể cả khi ai đó gửi đơn thẳng, bỏ qua trang): sai combo, hết lượt hay người đã dùng mã thì đơn tính đủ tiền và có ghi chú ở cột Ghi chú để bạn liên hệ khách.

## 5b. Mã đặc biệt (bỏ qua chuyển khoản)

- Tạo ở tab **Mã đặc biệt** hoặc trang quản trị: tên người nhận + mã + số lượng. Người nhận gõ **tên + mã** (vd. `Nguyễn Văn A QUA7K2`) vào ô họ tên thì form chỉ còn **SĐT + địa chỉ nhận hàng**.
- Dùng được ở **cả 2 trang**:
  - móc khóa trường (I'M A TPER): gõ vào ô **Họ và tên**;
  - móc khóa tên: thiết kế xong bấm **Sở hữu thiết kế này**, rồi gõ vào ô **Họ và tên người đặt**. Đơn ghi đủ tên in, kiểu chữ và file 3D như đơn thường, mail báo đơn có đính kèm file STL + hướng dẫn in.
- Số lượng của mã = số móc khóa được nhận (móc khóa tên: số cái cùng tên). Mỗi mã dùng 1 lần.

## 6. Chưa nối Google Sheet thì sao?

- Trang vẫn chạy với giá, nơi nhận và mã QR dự phòng trong `config.js`.
- Móc khóa thường gửi đơn qua FormSubmit (email `orderEmail`).
- Móc khóa tên ở chế độ xem thử: không gửi đơn, nhưng tải được file STL.



Chi tiết về dựng hình, font và file in của móc khóa tên nằm trong `README_moc-khoa-ten.md`.
