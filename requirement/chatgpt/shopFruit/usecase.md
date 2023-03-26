Có thể thêm các use case sau:

## Use Case 1: Tìm kiếm sản phẩm

### Mô tả:

*   Người dùng muốn tìm kiếm sản phẩm trong cửa hàng.
*   Người dùng nhập từ khóa tìm kiếm vào ô tìm kiếm trên trang chủ.
*   Ứng dụng hiển thị danh sách kết quả tìm kiếm (sử dụng custom view) dựa trên từ khóa tìm kiếm.
*   Người dùng có thể chọn sản phẩm từ danh sách kết quả tìm kiếm để thêm vào giỏ hàng hoặc xem chi tiết sản phẩm.

### Tác nhân:

*   Người dùng
*   Ứng dụng

### Tiền điều kiện:

*   Cửa hàng có ít nhất 1 sản phẩm.

### Hậu điều kiện:

*   Người dùng đã tìm được sản phẩm mình cần.
*   Nếu người dùng chọn sản phẩm, sản phẩm sẽ được thêm vào giỏ hàng hoặc xem chi tiết sản phẩm.

### Luồng sự kiện chính:

1.  Người dùng mở ứng dụng cửa hàng.
2.  Ứng dụng hiển thị trang chủ với ô tìm kiếm trên cùng.
3.  Người dùng nhập từ khóa tìm kiếm vào ô tìm kiếm.
4.  Người dùng nhấn nút tìm kiếm hoặc nhấn Enter trên bàn phím.
5.  Ứng dụng hiển thị danh sách kết quả tìm kiếm (sử dụng custom view) dựa trên từ khóa tìm kiếm.
6.  Người dùng chọn sản phẩm từ danh sách kết quả tìm kiếm.
7.  Ứng dụng hiển thị thông tin chi tiết sản phẩm hoặc thêm sản phẩm vào giỏ hàng.

### Luồng sự kiện thay thế:

*   4a. Người dùng không nhập từ khóa tìm kiếm. Ứng dụng không hiển thị danh sách kết quả tìm kiếm.

Use case 2: Tìm kiếm sản phẩm Mô tả: Người dùng nhập từ khóa vào ô tìm kiếm và nhấn nút tìm kiếm, sau đó danh sách sản phẩm gợi ý được hiển thị trên CustomView. Điều kiện tiên quyết: Trang chủ được hiển thị. Hành động:

*   Người dùng nhập từ khóa vào ô tìm kiếm.
*   Người dùng nhấn nút tìm kiếm. Kết quả:
*   Danh sách sản phẩm gợi ý được hiển thị trên CustomView.

Use case 3: Chọn sản phẩm Mô tả: Người dùng nhấn vào kết quả tìm kiếm trên CustomView và sản phẩm được đưa xuống danh sách sản phẩm đã chọn bên dưới. Điều kiện tiên quyết: Danh sách sản phẩm gợi ý được hiển thị trên CustomView. Hành động:

*   Người dùng nhấn vào kết quả tìm kiếm trên CustomView. Kết quả:
*   Sản phẩm được đưa xuống danh sách sản phẩm đã chọn bên dưới.

## Use case 4: Xóa sản phẩm khỏi danh sách

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
