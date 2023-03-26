Có thể thêm các use case sau:

Use case 1: Hiển thị trang chủ Mô tả: Người dùng mở ứng dụng và trang chủ được hiển thị, bao gồm ô tìm kiếm và danh sách sản phẩm đã chọn. Điều kiện tiên quyết: Ứng dụng đã được cài đặt và được khởi chạy. Hành động:

*   Người dùng mở ứng dụng. Kết quả:
*   Trang chủ được hiển thị, bao gồm ô tìm kiếm và danh sách sản phẩm đã chọn.

Use case 2: Tìm kiếm sản phẩm Mô tả: Người dùng nhập từ khóa vào ô tìm kiếm và nhấn nút tìm kiếm, sau đó danh sách sản phẩm gợi ý được hiển thị trên CustomView. Điều kiện tiên quyết: Trang chủ được hiển thị. Hành động:

*   Người dùng nhập từ khóa vào ô tìm kiếm.
*   Người dùng nhấn nút tìm kiếm. Kết quả:
*   Danh sách sản phẩm gợi ý được hiển thị trên CustomView.

Use case 3: Chọn sản phẩm Mô tả: Người dùng nhấn vào kết quả tìm kiếm trên CustomView và sản phẩm được đưa xuống danh sách sản phẩm đã chọn bên dưới. Điều kiện tiên quyết: Danh sách sản phẩm gợi ý được hiển thị trên CustomView. Hành động:

*   Người dùng nhấn vào kết quả tìm kiếm trên CustomView. Kết quả:
*   Sản phẩm được đưa xuống danh sách sản phẩm đã chọn bên dưới.

Use case 4: Xóa sản phẩm khỏi danh sách

### Mô tả

Người dùng có thể xóa sản phẩm khỏi danh sách bằng cách thực hiện swipe sang trái trên item của sản phẩm đó. Hệ thống sẽ hiển thị một bảng thông báo để xác nhận việc xóa sản phẩm.

### Tác nhân

Người dùng

### Tiền điều kiện

Người dùng đã mở màn hình danh sách sản phẩm.

### Hậu điều kiện

Sản phẩm đã bị xóa khỏi danh sách.

### Luồng sự kiện chính

1.  Người dùng swipe sang trái trên item của sản phẩm cần xóa.
2.  Hệ thống hiển thị một bảng thông báo xác nhận việc xóa sản phẩm.
3.  Người dùng xác nhận việc xóa sản phẩm.
4.  Hệ thống xóa sản phẩm khỏi danh sách và cập nhật lại danh sách sản phẩm.

### Luồng sự kiện thay thế

3a. Người dùng không xác nhận việc xóa sản phẩm.

*   Hệ thống không xóa sản phẩm và giữ nguyên danh sách sản phẩm.

### Điều kiện sau

Sản phẩm đã bị xóa khỏi danh sách.
