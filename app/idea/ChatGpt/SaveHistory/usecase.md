 ### Use case 1: Thêm mới một địa chỉ URL vào danh sách lưu trữ

**Mô tả:** Người dùng muốn thêm mới một địa chỉ URL vào danh sách lưu trữ trong extension.

**Các bước:**

1.  Người dùng truy cập vào tab "Create New" trên giao diện extension.
2.  Người dùng nhập địa chỉ URL vào trường "historyUrl".
3.  Người dùng nhập tên cho địa chỉ URL vào trường "historyName".
4.  Người dùng chọn method của địa chỉ URL trong SelectBox "HistoryMethod".
5.  Extension kiểm tra nếu địa chỉ URL đã tồn tại trong danh sách lưu trữ, thì hiển thị thông báo lỗi và yêu cầu người dùng nhập lại.
6.  Nếu địa chỉ URL chưa tồn tại trong danh sách, extension sẽ thêm địa chỉ URL và tên của nó vào danh sách lưu trữ và cập nhật vào file "historydb.json".
7.  Extension sẽ reload lại SelectBox "HistoryMethod" để hiển thị method mới được thêm vào.

### Use case 2: Gửi request tới địa chỉ URL được lưu trữ

**Mô tả:** Người dùng muốn gửi request tới địa chỉ URL được lưu trữ.

**Các bước:**

1.  Người dùng truy cập vào tab "Request" trên giao diện extension.
2.  Người dùng chọn địa chỉ URL trong SelectBox "historySaver".
3.  Người dùng chọn method của địa chỉ URL trong SelectBox "HistoryMethod".
4.  Extension tạo mới một tab và gởi request tới địa chỉ URL được chọn với method tương ứng.
5.  Extension set cookie của trang web hiện tại vào request và set header của trang web hiện tại vào request.
6.  Extension hiển thị kết quả trả về từ request trong tab mới được tạo.
