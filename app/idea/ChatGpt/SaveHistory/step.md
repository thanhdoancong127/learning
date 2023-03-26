Để chỉnh sửa các bước của extension dựa trên yêu cầu của bạn, bạn có thể làm theo các bước sau:

1.  Tạo một form đầu tiên với các input sau:

*   TextBox: name ="historyUrl", để nhập đường dẫn URL
*   TextBox: name= "historyName", để đặt tên cho đường dẫn URL (optional)
*   Button: name="updateIntoHead", để lưu đường dẫn URL và tên vào danh sách lưu trữ (historySaver) trong file "historydb.json"

2.  Tạo một form thứ hai với các input sau:

*   SelectBox: name="historySaver", chứa danh sách các đường dẫn URL và tên đã lưu trữ
*   SelectBox: name="HistoryMethod", để chọn phương thức gửi yêu cầu (get, post, put...)
*   Button: name="sent", để gửi yêu cầu đến đường dẫn URL đã chọn

3.  Viết mã JavaScript để thực hiện các bước yêu cầu của bạn. Bạn cần tạo một XMLHttpRequest để gửi yêu cầu đến đường dẫn URL đã chọn, với phương thức gửi yêu cầu được chọn từ SelectBox "HistoryMethod". Sau đó, bạn cần lấy danh sách đường dẫn URL và tên đã lưu trữ từ file "historydb.json", và hiển thị chúng trong SelectBox "historySaver". Nếu đường dẫn URL và tên mới chưa có trong danh sách đã lưu trữ, bạn cần thêm chúng vào danh sách và lưu lại vào file "historydb.json". Sau đó, bạn cần reload lại SelectBox "HistoryMethod" để cập nhật danh sách phương thức gửi yêu cầu.

Lưu ý: Trong trường hợp được đăng nhập vào url hoặc không tìm kiếm đượt token trong header thì sẽ hiện thị sẽ hiện thị ra 2 form như trên.
