> Bản THPT Trần Phú: tấm nổi màu **cyan**, dòng trường `TRAN PHU HIGHSCHOOL`; mọi số đo dựng hình giữ nguyên như bên dưới.

# MERCHANDISE V2.0 · Móc khóa tên (bản thử nghiệm 4)

Đây là bản thử nghiệm riêng của móc khóa in tên, chưa ghép vào trang V2.0. Khi bạn duyệt, phần này sẽ được ghép vào web cũ.

## Có gì mới ở bản 4

**Cỡ thật chuyển sang 3D:** móc khóa nằm trên bàn tay 3D bạn gửi (`RIGGEDHAND.glb`, đã đặt dáng, có vân da), đúng tỉ lệ thật, máy ảnh lượn chậm quanh bàn tay. Chi tiết ở mục 7.

## Có gì mới ở bản 3

| Yêu cầu | Đã làm |
|---|---|
| Thêm nút chọn 1 dòng / 2 dòng | Dưới ô nhập tên có nút **Bố cục: 1 dòng · 2 dòng** cho mọi tên 2 từ. Tắt bong bóng thông báo rồi vẫn đổi được. |
| Tấm cyan của tên hơi hẹp | Lề trên/dưới quanh tên tăng từ 2,4 lên **3,2 mm**, lề hai bên từ 3,0 lên 3,2 mm cho cân. Chữ tên ngắn được phép to tới 17 mm. |
| Tên 2 dòng thừa nhựa | Tấm cyan 2 dòng giờ **thu hẹp theo từng dòng** (bậc thang, căn giữa, có bo lõm ở chỗ nối). Vì đối xứng trái/phải nên 2 mặt vẫn trùng khít. |
| Dòng 2 ngắn hơn dòng 1 (Mạnh An, Khuyên Hà) | **Luôn 1 dòng.** Nút 2 dòng bị khóa, kèm dòng giải thích. |
| Lỗ xỏ lệch xuống | Khoen hạ xuống ngang **trọng tâm** cả móc khóa (thấp hơn tâm chữ khoảng 3–6 mm), nên khi treo móc khóa buông thẳng. |
| Ghi rõ giá ký hiệu | Nhãn in đậm **+1.000 VND**, bỏ chữ "tiền nhựa". |
| Mô phỏng kích thước | Nút **Cỡ thật** trong khung 3D: móc khóa đặt cạnh bàn tay người lớn (dài 20 cm, ngang 10,5 cm), cùng tỉ lệ, có ghi số đo. Trên điện thoại vẫn hiện đủ chữ. |
| Font nữ | Pacifico → **Dancing Script** (viết tay, được làm đậm nét để in được). Gluten → **Grandstander** (phồng nhẹ, đỡ mập). |
| Font nam | Sigmar, Black Ops One → **Josefin Sans** (thanh lịch) và **Barlow Condensed** (hẹp, tinh gọn). |
| "Thiết kế của bạn" chưa trang trọng | Mô hình **lơ lửng**, nghiêng 45°, nhìn từ dưới lên, có bóng đổ nhấp nhô. |
| Ưu tiên 1 dòng | Tên dài vừa (Anh Quân, Công Minh, Bảo Nguyên…) giữ 1 dòng. Chỉ tên thật sự dài như Thiên Thanh mới tự xuống dòng. |

## Có gì mới ở bản 2

| Yêu cầu | Đã làm |
|---|---|
| Viền ôm theo chữ trông kỳ | Tấm cyan giờ là **hình chữ nhật bo tròn góc** (bán kính 5 mm). Dòng trường vẫn nằm trong viên thuốc riêng bên dưới. |
| Dòng `TRAN PHU HIGHSCHOOL` một mặt trên, một mặt dưới | Mặt sau giờ **lật như lật thẻ** (quanh trục đứng). Cả hai mặt: tên ở trên, dòng trường ở dưới. Chỉ có khoen đổi bên. |
| Tên dài làm móc khóa dài và hẹp | Tự xếp **2 dòng** khi cần, kèm bong bóng nhỏ báo lý do và nút **Giữ 1 dòng** để quay về thiết kế dài. |
| Tên tiếng Trung, Thái, Nhật, Hàn | Hỗ trợ cả bốn, mỗi thứ tiếng có 4 kiểu chữ riêng. |
| Bỏ hàng tên thử | Đã bỏ. Tên mẫu là **MERCH V2**. |
| Font nam lạ hơn | Bỏ Montserrat, Kanit, Saira Expanded. Thêm **Sigmar, Tektur, Black Ops One**. Giữ Unbounded. |
| Font nữ lạ hơn | Thay Baloo 2 và Coiny bằng **Cherry Bomb One** và **Agbalumo**. |
| Ký tự đặc biệt trên bàn phím | Gõ được số và mọi ký tự `! @ # $ % & * ( ) - _ + = ? ~ …`. |
| Ký hiệu cuối tên +1.000đ | 6 ký hiệu: ngôi sao, trái tim, mặt cười `=)`, bông hoa, tia sét, nốt nhạc. |
| Số chạy khi tăng số lượng | Tổng tiền và giá chạy số mượt khi đổi. |
| "Thiết kế của bạn" tự xoay | Ô này giờ là mô hình 3D tự xoay vòng, kéo tay để xem. Ảnh tĩnh chỉ còn dùng cho mail. |

## Các file trong gói

| File | Dùng để làm gì |
|---|---|
| `custom.html` | Trang thiết kế tên: xem 3D theo thời gian thực, đặt hàng, tự tạo và gửi file STL. Chạy độc lập. |
| `Code.gs` | Mã Google Sheet bản mới. Nhận cả đơn thường lẫn đơn móc khóa tên, tính tiền ký hiệu, lưu STL vào Drive, gửi kèm mail cho chủ shop. Dùng thay `Code.gs` cũ. |
| `stl-mau/*.stl` | 7 file STL mẫu: có 1 dòng, 2 dòng, ký hiệu, ký tự đặc biệt và một tên tiếng Nhật. |
| `font-list.png` | Bảng 12 kiểu chữ Latin và 4 thứ tiếng trên móc khóa thật. |

**Công cụ chủ shop:** thêm `#dev` vào cuối link trang để hiện nút **Tải STL in (2 nửa)**. Nút này tải file của bất kỳ tên nào mà không cần đặt hàng.

---

## 1. Hình dáng và các lớp

| Lớp (tính từ mặt cắt giữa, mỗi nửa) | Màu | Độ cao | Ghi chú |
|---|---|---|---|
| Đế, tức viền | Trắng | 0 → 2,8 mm | Cạnh trên bo tròn 0,8 mm |
| Tấm nổi | Cyan (3D: `#00a6c8`) | 2,8 → 5,2 mm | Cạnh trên bo tròn 0,6 mm |
| Chữ | Trắng | 5,2 → 6,8 mm | Nổi cao hơn tấm cyan |

- **Tổng dày** 13,6 mm, giống bản trước.
- **Tấm cyan** là hình chữ nhật bo góc quanh tên:
  - cách chữ 3,2 mm mỗi phía;
  - luôn rộng ít nhất bằng viên thuốc, nên thân móc khóa luôn gọn một khối;
  - tên 2 dòng mà dòng trên ngắn hơn dòng dưới từ 8 mm trở lên: tấm thu hẹp theo dòng trên thành hình bậc thang, chỗ nối bo lõm 2,5 mm. Hai dòng gần bằng nhau thì vẫn là một chữ nhật.
- **Viên thuốc** chứa dòng trường, cách tấm cyan 1,5 mm. Dòng trường cùng một cỡ cho mọi móc khóa: Montserrat Black, chữ hoa cao 2,7 mm.
- **Đế trắng** rộng hơn tấm cyan 2 mm, ôm cả khoen treo; chỗ nối được bo mượt.
- **Khoen treo** nằm bên trái tên ở mặt trước (bên phải ở mặt sau), lỗ Ø4,2 mm. Độ cao của khoen = trọng tâm cả móc khóa (tính cả đế, tấm cyan, chữ, viên thuốc và dòng trường), nên khi treo thân buông thẳng thay vì chúi xuống.
- **Kích thước:** 1 dòng khoảng 8–10 × 2,7–4 cm; 2 dòng khoảng 8–9 × 4,3–5,1 cm.

## 2. Hai mặt: lật như lật thẻ

Mọi khối (tên, tấm cyan, viên thuốc) đều căn giữa trên cùng một trục đứng. Mặt sau lấy đúng bố cục mặt trước, chỉ có đường bao lật gương theo trục đứng. Vì vậy:

- Cả hai mặt đều có tên ở trên, dòng trường ở dưới, đọc thuận.
- Hai nửa có chung đường bao, nên khi dán lại mép viền trùng khít.
- Trên trang, nút **Mặt sau** và thao tác kéo ngang lật móc khóa quanh trục đứng, đúng như lật trên tay.

Viền ôm theo chữ của bản 1 không còn cần nữa, nên bài toán lệch chữ giữa hai mặt cũng biến mất.

## 3. 1 dòng hay 2 dòng

Ưu tiên 1 dòng. Chỉ tên có 2 từ mới xếp được 2 dòng, và phải thỏa **cả hai** điều kiện:

1. **Dòng dưới không ngắn hơn dòng trên.** Mạnh An, Khuyên Hà, Phương Thảo, Trường Giang… luôn 1 dòng, nút 2 dòng bị khóa.
2. **Bản 1 dòng thật sự dài:** tỉ lệ dài/cao cả móc khóa lớn hơn 3,46, hoặc chữ phải thu nhỏ dưới 8,3 mm mới vừa.

Kết quả với 12 font Latin:

- Công Minh, Hoàng Long: luôn 1 dòng.
- Anh Quân, Bảo Nguyên: 1 dòng ở 11/12 font. Chỉ xuống dòng ở Unbounded, vì font này rất rộng.
- Thiên Thanh: tự xếp 2 dòng ở 10/12 font. Barlow Condensed và Dancing Script là 2 font hẹp, nên Thiên Thanh vẫn vừa 1 dòng.

Ví dụ: "Thiên Thanh" Be Vietnam Pro từ 10,0 × 2,7 cm thành 8,0 × 4,9 cm.

**Nút Bố cục** (1 dòng · 2 dòng) luôn có dưới ô nhập tên khi tên có 2 từ. Khách có thể chủ động xếp 2 dòng cho tên vừa như Anh Quân.

Khi tự xếp 2 dòng, trang hiện bong bóng *"Tên hơi dài nên mình xếp thành 2 dòng cho móc khóa cân đối hơn"* kèm nút **Giữ 1 dòng**:

- Trên máy tính, bong bóng nằm trong khung 3D.
- Trên điện thoại, bong bóng nằm ngay dưới ô nhập tên để không che mô hình.

Bấm **Giữ 1 dòng** thì về lại thiết kế dài; bong bóng đổi thành nút **Xếp lại 2 dòng**. Khi khách đổi tên khác, trang tự về chế độ tự xếp. Nếu bản 1 dòng dài quá 11,8 cm, trang khóa nút đặt và gợi ý xếp 2 dòng. Hai dòng cách nhau 1,32 lần cao chữ, tự nới thêm nếu dấu dòng dưới chạm chân chữ dòng trên.

## 4. Kiểu chữ Latin: 6 cứng cáp và 6 mềm mại

Font nào cũng đủ 134 chữ cái tiếng Việt có dấu và toàn bộ ký tự trên bàn phím. Tất cả dùng giấy phép mở OFL, được dùng thương mại.

Độ in được đo trên chữ hoa cao 11 mm với đầu phun 0,4 mm:

- **Nét < 0,9 mm:** phần diện tích chữ mảnh hơn 2 đường đùn.
- **Chi tiết nhỏ nhất:** mảnh nhỏ nhất, thường là dấu chấm hoặc dấu sắc.

| Nhóm | Font | Tính cách | Nét < 0,9 mm | Chi tiết nhỏ nhất |
|---|---|---|---|---|
| Cứng cáp | Be Vietnam Pro Black | Thiết kế cho tiếng Việt, dấu rõ | 0,59 % | 1,60 mm |
| Cứng cáp | Unbounded Black | Bản rộng, hiện đại | 0,45 % | 2,47 mm |
| Cứng cáp | **Josefin Sans Bold** (mới) | Hình học, thanh lịch, nét mảnh hơn | 0,89 % | 1,35 mm |
| Cứng cáp | **Barlow Condensed Bold** (mới) | Hẹp, tinh gọn; tên dài vẫn vừa 1 dòng | 0,64 % | 1,21 mm |
| Cứng cáp | Tektur Black | Góc cạnh, công nghệ | 0,49 % | 1,29 mm |
| Cứng cáp | Bungee | Khối, luôn in hoa | 0,05 % | 2,21 mm |
| Mềm mại | Nunito Black | Bo tròn, dễ đọc | 0,03 % | 1,79 mm |
| Mềm mại | **Cherry Bomb One** (mới) | Tròn như kẹo, rất dễ thương | 0,03 % | 1,71 mm |
| Mềm mại | **Grandstander ExtraBold** (mới) | Phồng nhẹ, tinh nghịch, gọn hơn Gluten | 0,39 % | 2,04 mm |
| Mềm mại | **Agbalumo** (mới) | Mềm, uốn lượn, hơi cổ điển | 1,07 % | 1,57 mm |
| Mềm mại | Playpen Sans ExtraBold | Viết tay nhưng nét dày | 0,04 % | 2,03 mm |
| Mềm mại | **Dancing Script Bold** (mới) | Viết tay bay bổng | 0,82 %* | 1,40 mm |

\* Dancing Script gốc có nét rất mảnh (22,7 % nét dưới 0,9 mm, không in được). Mình làm đậm mọi nét thêm 0,25 mm mỗi bên (tỉ lệ theo cỡ chữ) ngay khi dựng hình, nên con số này đo sau khi làm đậm. Ô xem trước font cũng hiển thị nét đã làm đậm.

Bản 3 đã thử thêm khoảng 60 font. Các font bị loại:

- **Thiếu chữ tiếng Việt:** Outfit, Sora, Urbanist, Red Hat Display, Bebas Neue, Teko, Kalam, Courgette, Kaushan Script, Lobster Two, Sour Gummy.
- **Nét quá mảnh, kể cả khi làm đậm:** Playwrite VN, Grape Nuts, Charmonman, Srisakdi.
- **Không hợp phong cách:** Oswald, Fjalla One, Big Shoulders (giống Anton); Sriracha, Charm (kém đẹp hơn Dancing Script khi làm đậm).

**Cách viết:**

- Tên giữ nguyên kiểu chữ hoa/thường như khách gõ (`MERCH V2` vẫn là `MERCH V2`). Nút **AA · IN HOA** đổi tất cả thành chữ hoa.
- Bungee luôn in hoa; Pacifico không in hoa vì chữ ký viết hoa toàn bộ trông xấu.
- Tối đa 2 từ, mỗi từ tối đa 10 ký tự.
- Gõ được chữ có dấu, số và mọi ký tự trên bàn phím. Emoji không in được nên bị bỏ, trang gợi ý dùng phần **Ký hiệu cuối tên**.

## 5. Tên tiếng Trung, Nhật, Hàn, Thái

Trang tự nhận thứ tiếng khi khách gõ. Phần **Phong cách chữ** đổi thành danh sách kiểu chữ của thứ tiếng đó:

| Thứ tiếng | Kiểu chữ |
|---|---|
| Trung | Noto Sans SC (giản thể), Noto Sans TC (phồn thể), ZCOOL QingKe HuangYou, ZCOOL KuaiLe |
| Nhật | Dela Gothic One, M PLUS Rounded 1c, Zen Maru Gothic, Mochiy Pop One |
| Hàn | Black Han Sans, Do Hyeon, Noto Sans KR, Jua |
| Thái | Kanit, Prompt, Chonburi, Mitr |

**Cách làm:** font chữ Trung, Nhật, Hàn nặng hàng chục MB nên không nhúng sẵn vào trang.

1. Trang tải font từ Google Fonts, và chỉ tải đúng phần chứa các chữ của tên.
2. Trang vẽ tên lên một canvas ẩn ở độ phân giải 14 điểm ảnh/mm.
3. Trang dò đường biên chữ (marching squares, có nội suy), rồi rút gọn điểm và đổi sang mm.
4. Phần dựng 3D phía sau giống hệt tên Latin.

**Giới hạn:**

- Mỗi từ tối đa 6 chữ (Trung, Nhật, Hàn) hoặc 10 ký tự (Thái).
- Chữ cao tối đa 14 mm, vì chữ vuông và dày nét hơn chữ Latin.
- Phần này cần mạng để tải font. Lần đầu có thể mất vài giây. Nếu không tải được, trang báo lỗi và khóa nút đặt.

## 6. Ký hiệu cuối tên (+1.000đ)

Ký hiệu đứng sau chữ cuối cùng (ở dòng 2 nếu tên xếp 2 dòng), cùng chiều cao chữ hoa và in cùng lớp với chữ.

| Ký hiệu | Cách dựng |
|---|---|
| Ngôi sao, trái tim, bông hoa (có nhụy rỗng), tia sét, nốt nhạc | Vẽ bằng toán, bo góc để không có mũi nhọn quá mảnh |
| Mặt cười `=)` | Dùng chính font của tên, giống gõ trên bàn phím |

Nhãn trên trang in đậm **+1.000 VND**. Giá cộng thêm 1.000đ mỗi cái. Sheet ghi cột **Tên in** kiểu `MERCH V2 + ngôi sao`. `Code.gs` tính lại tiền phía máy chủ, nên web có gửi sai giá thì Sheet vẫn đúng và ghi chú lại.

## 7. Cỡ thật (3D) và ô "Thiết kế của bạn"

**Cỡ thật** là nút thứ tư trong khung 3D. Móc khóa đang thiết kế nằm ngửa trên lòng bàn tay 3D.

- **Bàn tay:** lấy từ file `RIGGEDHAND.glb` bạn gửi (tay phải, đã đặt dáng, có vân da). Lưới gồm 1.360 đỉnh. Ảnh vân da được thu từ 2048 xuống 1024 px để trang nhẹ, phần tay nhúng vào trang chỉ khoảng 240 KB.
- **Cỡ tay suy ra từ file:** trong file, khối lưới được phóng to 11,06 lần để vừa cảnh Blender. Lưới gốc (trước khi phóng) đo bằng mét và ra đúng cỡ người thật:
  - dài **18,1 cm** từ nếp cổ tay tới đầu ngón giữa;
  - ngang **8,0 cm** ở khớp ngón, không tính ngón cái;
  - tức cỡ tay người lớn trung bình (nam khoảng 19 × 8,5 cm, nữ khoảng 17 × 7,5 cm).

  Mình giữ đúng tỉ lệ 1 : 1 này với móc khóa (đơn vị mm) rồi đặt chung một cảnh, nên tỉ lệ giữa tay và móc khóa trên màn hình là tỉ lệ thật. Nhãn trên khung ghi cả hai số đo, ví dụ "Móc khóa 10,0 × 3,0 cm · Tay mẫu dài 18,1 · ngang 8,0 cm".
- **Móc khóa nằm như vật thật:**
  - Mình đo trước bản đồ độ cao của lòng bàn tay (ô 2 mm).
  - Khi đổi tên, trang thử vài vị trí quanh giữa lòng bàn tay và các độ nghiêng tới khoảng 15°. Trang chọn tư thế có tâm thấp nhất mà không cắm vào tay, nên móc khóa tựa lên gò ngón cái và mép bàn tay, hơi nghiêng như khi đặt thật.
  - Bên dưới có bóng đổ mờ in lên da tay.
- **Chuyển động:**
  - Máy ảnh tự lượn qua lại khoảng ±30° và lên xuống nhẹ, để khách thấy độ dày và độ lớn so với ngón tay.
  - Kéo ngang để xoay quanh, kéo dọc để nhìn cao/thấp.
  - Khung hình tự canh vừa khít bàn tay và móc khóa ở mọi góc.
  - Trên điện thoại, khung 3D tự cao thêm khi bật Cỡ thật.

**Thiết kế của bạn** (phần thanh toán):

- Mô hình 3D lơ lửng nhấp nhô, xoay nghiêng 45°, máy ảnh đặt thấp nhìn hắt lên.
- Không có sàn phản chiếu; bóng đổ mờ bên dưới co giãn theo nhịp lơ lửng.
- Khách kéo để xoay thử, thả tay thì mô hình tự về tư thế trưng bày.

## 8. File STL gửi cho chủ shop và cách in

Khi khách bấm **Xác nhận đơn hàng**, trang tạo file STL, nén gzip, kèm ảnh xem trước rồi gửi về Google Sheet. `Code.gs` sẽ:

- lưu file vào thư mục Drive **"MERCH V2.0 · File in móc khóa tên"** và ghi link vào cột **File 3D**;
- gửi mail cho bạn, đính kèm file STL, ảnh xem trước và hướng dẫn in;
- gửi mail xác nhận cho khách, có ảnh thiết kế.

Tên file có dạng `MÃĐƠN-TÊN-kýhiệu-font.stl`. Tên không phải chữ Latin thì phần tên ghi `TEN`.

**Cấu trúc file STL:**

- Móc khóa được cắt đôi đúng mặt phẳng giữa.
- Hai nửa nằm cạnh nhau, mặt cắt úp xuống bàn in, chữ của cả hai mặt đều ngửa lên và đọc thuận.
- Nửa trên là mặt trước (khoen bên trái), nửa dưới là mặt sau (khoen bên phải).

**In trong Bambu Studio** (lớp 0,2 mm, đổi màu theo độ cao):

1. Kéo file STL vào rồi Slice.
2. Kéo thanh trượt lớp, chuột phải → *Thêm thay đổi màu* tại 2 mốc:
   - **2,8 mm (lớp 15):** đổi sang **cyan**.
   - **5,2 mm (lớp 27):** đổi lại **trắng**.
3. Ghép 2 nửa:
   - Nửa trước có vòng rãnh tròn mờ ở mặt cắt, đánh dấu chỗ đặt chip.
   - Đặt chip NFC Ø25 mm vào giữa vòng, bôi keo, ép 2 nửa sao cho mép viền khớp nhau.

## 9. Đã kiểm thử

- **924 lần dựng ở bản 3** (12 font mới × 55 tên, ký tự đặc biệt, đủ 6 ký hiệu, tự động / ép 1 dòng / ép 2 dòng, có tấm bậc thang):
  - mọi file STL kín, 0 cạnh hở, 0 cạnh trùng;
  - chip Ø25 mm vừa trong mọi trường hợp.
  - Lần chạy đầu bắt được một lỗi ở tấm bậc thang ("Thùy Dương =)", Unbounded): vai bậc quá sát dấu của dòng dưới. Lỗi đã sửa: vai bậc tự nâng lên trên phần chữ thò ra, kèm bước kiểm tra chữ cách mép tấm ít nhất 1,2 mm.
- **Cắt lớp** tên 2 dòng bậc thang ("Anh Quân ★"): diện tích ở độ cao 1, 4 và 6 mm khớp thiết kế ở cả hai nửa.
- **10 tên tiếng Trung, Nhật, Hàn, Thái** dựng trong Chromium với font thật: đều kín, đúng hình chữ.
- **Cắt lớp file STL** (tên 2 dòng): diện tích ở độ cao 1, 4 và 6 mm khớp thiết kế ở cả hai nửa.
- **Giao diện** trên máy tính và điện thoại:
  - tên mẫu MERCH V2 và danh sách font mới;
  - tự xếp 2 dòng, Giữ 1 dòng, Xếp lại 2 dòng;
  - nút Bố cục vẫn còn sau khi tắt thông báo; Anh Quân mặc định 1 dòng, bấm 2 dòng ra tấm bậc thang; Mạnh An bị khóa 2 dòng;
  - Cỡ thật 3D: bàn tay tải đủ vân da, móc khóa được đặt lên tay, cảnh tự chuyển động, nhãn số đo hiện trên máy tính và điện thoại;
  - nhãn **+1.000 VND** in đậm; ô "Thiết kế của bạn" nghiêng 45° và lơ lửng;
  - lật mặt sau theo trục đứng;
  - giá cộng ký hiệu; đổi sang danh sách font từng thứ tiếng rồi quay lại;
  - ô "Thiết kế của bạn" tự xoay; số chạy khi tăng số lượng;
  - không có lỗi JavaScript.
- **Chạy trọn quy trình:**
  1. Đặt tên tiếng Nhật có ngôi sao, số lượng 2, qua bản giả lập Google Sheet chạy đúng `Code.gs`.
  2. Sheet ghi 120.000đ và tên in `さくら + ngôi sao`.
  3. File STL trong mail chủ shop kín, cao đúng 6,8 mm.
- **Kiểm thử `Code.gs`:** 14 trường hợp mới cho ký hiệu, tên nhiều thứ tiếng, emoji, tên bắt đầu bằng `=`; tất cả đạt, cùng các trường hợp cũ.

## 10. Cần bạn quyết định / điền

- **Giá:** đang để **59.000đ** (tạm) và **+1.000đ** cho ký hiệu. Khi đổi, sửa cả hai nơi:
  - `CONFIG.customPrice` và `CONFIG.symbolPrice` trong `custom.html`;
  - `CUSTOM_PRICE` và `SYMBOL_PRICE` trong `Code.gs`.
- **Dán `Code.gs` mới** rồi chạy lại `setup()` một lần nếu chưa làm ở bản 1. Google sẽ hỏi quyền Drive để lưu file STL.
- **Tên dài mà dòng 2 ngắn hơn:** theo quy tắc mới, các tên này luôn 1 dòng. Một số ít tên rất dài ở font rộng có thể dài quá 11,8 cm. Ví dụ "Khuyến Nghiêm" ở Unbounded dài 12,1 cm. Khi đó trang khóa nút đặt và gợi ý chọn font gọn hơn, như Barlow Condensed.
- **Khi treo:** vì lật như lật thẻ, lúc móc khóa treo dọc thì mặt trước đọc từ trên xuống, mặt sau đọc từ dưới lên. Đây là cái giá để dòng trường luôn nằm dưới tên khi cầm ngang.
