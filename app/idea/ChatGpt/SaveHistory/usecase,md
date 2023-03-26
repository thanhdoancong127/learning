Use case: Lưu trữ lịch sử request và phản hồi từ một API

Mô tả:

Người dùng muốn lưu trữ lịch sử của các request và phản hồi từ một API. Họ muốn có thể thêm các request mới vào danh sách lịch sử và có thể xem lại lịch sử đã lưu trữ bất cứ lúc nào.

Để sử dụng tính năng lưu trữ này, người dùng thực hiện các bước sau:

1.  Mở extension trên trình duyệt.
    
2.  Tại giao diện extension, người dùng điền các thông tin cần thiết vào form thứ nhất bao gồm "historyUrl", "historyName", "HistoryMethod".
    
3.  Người dùng bấm nút "updateIntoHead" để cập nhật thông tin của request mới vào form thứ hai.
    
4.  Nếu request mới chưa được lưu trữ trong danh sách "historySaver" thì nó sẽ được thêm vào danh sách này cùng với tên đã định nghĩa và method được chọn và lưu vào file "historydb.json".
    
5.  Combobox "HistoryMethod" sẽ được reload lại với các giá trị mới nhất.
    
6.  Người dùng chọn một trong các request đã được lưu trong danh sách "historySaver" từ form thứ hai, chọn method và bấm nút "sent".
    
7.  Extension sẽ tạo ra một tab mới và gửi request tới API với các thông tin đã chọn từ form thứ hai. Cookie và header của trang web hiện tại sẽ được set vào request.
    
8.  Kết quả trả về từ API sẽ được hiển thị trên tab mới được tạo ra.
    
9.  Người dùng có thể xem lại lịch sử của các request và phản hồi từ API bằng cách chọn lại request đã lưu từ form thứ hai.
