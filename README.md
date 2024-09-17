# Love_Gifts
## 1. Specification
### Đăng nhập (Login):
  **Mục đích:** Tạo tài khoản cá nhân cho người dùng, quản lý dữ liệu cá nhân và truy cập các tính năng riêng tư.
  **Specification:**
  **User Interface (UI):**
  - Form đăng nhập với các trường: email/username và mật khẩu.
  - Tùy chọn đăng nhập bằng tài khoản mạng xã hội (Google, Facebook).
  - Tính năng quên mật khẩu, gửi email khôi phục.
  **Backend:**
  - Kiểm tra và xác thực thông tin người dùng từ cơ sở dữ liệu.
  - Sử dụng JWT (JSON Web Token) để duy trì phiên đăng nhập.
  - Lưu trữ thông tin đăng nhập và bảo mật mật khẩu (hash mật khẩu bằng các phương pháp như bcrypt).
  - Lưu trữ thông tin đăng nhập của người dùng (cookie hoặc session).
### Ghép đôi (Matchmaking):
  **Mục đích:** Ghép đôi người dùng với người yêu hoặc đối tác để có thể tương tác và trao đổi quà tặng.
  **User Interface (UI):**
  - Tùy chọn nhập email của đối phương để yêu cầu ghép đôi.
  - Gửi thông báo hoặc email yêu cầu chấp nhận ghép đôi.
  - Hiển thị trạng thái ghép đôi: đã ghép hoặc đang chờ phản hồi.
  **Backend:**  
  - Cơ sở dữ liệu để quản lý thông tin ghép đôi, bao gồm user_id của cả hai người.
  - Hệ thống xác nhận hoặc từ chối yêu cầu ghép đôi.
  - Đồng bộ hóa dữ liệu giữa hai người dùng khi ghép đôi thành công (chia sẻ danh sách Wishlist, điểm thưởng, tasks, v.v.).
### Wishlist:
  **Mục đích:** Danh sách quà tặng mà người dùng muốn nhận từ đối phương.
  **User Interface (UI):**
  - Giao diện cho phép người dùng thêm sản phẩm vào wishlist.
  - Hiển thị danh sách wishlist của cả hai người dùng sau khi ghép đôi.
  - Tính năng chia sẻ wishlist qua email hoặc mạng xã hội.
  **Backend:**
  - Cơ sở dữ liệu lưu trữ danh sách wishlist của từng người dùng.
  - Cập nhật và xóa món quà trong wishlist khi người dùng thêm hoặc xóa.
  - Đồng bộ hóa wishlist với tính năng điểm thưởng và gợi ý quà tặng.
### Tasks đối phương cần làm để đổi điểm:
  **Mục đích:** Đối phương hoàn thành các nhiệm vụ để tích điểm đổi quà.
  **User Interface (UI):**
  - Hiển thị danh sách nhiệm vụ (tasks) cần làm để kiếm điểm (ví dụ: làm việc nhà, viết thư tình, nấu ăn, v.v.).
  - Người dùng có thể tự tạo tasks hoặc sử dụng danh sách gợi ý tasks từ hệ thống.
  - Hiển thị điểm thưởng và số điểm cần thiết để đổi quà trong wishlist.
  **Backend:**
  - Cơ sở dữ liệu quản lý các tasks và điểm tương ứng với từng nhiệm vụ.
  - Cơ chế xác thực nhiệm vụ đã hoàn thành (có thể yêu cầu người yêu xác nhận).
  - Hệ thống cộng điểm khi hoàn thành nhiệm vụ và trừ điểm khi đổi quà.
  - Tích hợp với hệ thống quà tặng để hiển thị các món quà có thể đổi bằng số điểm đã tích lũy.
### Gợi ý quà tặng (Gift Suggestions):
  **Mục đích:** Đưa ra các gợi ý quà tặng dựa trên sở thích của người yêu hoặc sự kiện.
  **User Interface (UI):**
  - Form nhập sở thích, tính cách của người yêu hoặc chọn các dịp đặc biệt (sinh nhật, lễ tình nhân, kỷ niệm, v.v.).
  - Hiển thị danh sách các món quà được gợi ý theo từng tiêu chí (sở thích, sự kiện, mức giá, v.v.).
  - Tích hợp nút "Thêm vào wishlist" hoặc "Mua ngay".
  **Backend:**
  Thu thập dữ liệu về sở thích của người nhận quà và sử dụng các thuật toán đề xuất (recommendation algorithms) để gợi ý quà tặng.
  Kết nối với các nhà cung cấp hoặc cửa hàng để hiển thị quà tặng khả dụng và liên kết đặt hàng.
  Lưu trữ thông tin các quà tặng gợi ý và cá nhân hóa các đề xuất dựa trên hành vi của người dùng (mua hàng, wishlist, tasks).
## 2. Technology
Backend: SQL,  Database PostgresSQL  and NestJS, Prisma
## 3. Framework
