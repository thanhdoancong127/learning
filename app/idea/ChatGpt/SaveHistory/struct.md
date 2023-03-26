## Cấu trúc thư mục cho SaverHistory

Để phát triển extension cho Chrome, bạn cần tạo một thư mục mới và tạo các file và thư mục sau:

1.  `manifest.json`: File này sẽ chứa thông tin cơ bản về extension của bạn, bao gồm tên, phiên bản, mô tả và các quyền truy cập cần thiết.
    
2.  `popup.html`: File này sẽ chứa giao diện popup của extension của bạn.
    
3.  `popup.js`: File này sẽ chứa mã JavaScript để xử lý sự kiện và tương tác với DOM trong `popup.html`.
    
4.  `background.js`: File này sẽ chứa mã JavaScript để xử lý sự kiện và tương tác với các trang web.
    
5.  `historydb.json`: File này sẽ chứa thông tin lịch sử của người dùng.
    
6.  Thư mục `icons`: Thư mục này sẽ chứa các biểu tượng cho extension của bạn, bao gồm biểu tượng 16x16 và 128x128.
    
7.  Thư mục `css`: Thư mục này sẽ chứa các file CSS để định dạng giao diện của extension của bạn.
    
8.  Thư mục `js`: Thư mục này sẽ chứa các file JavaScript để xử lý logic của extension của bạn.
    

Sau khi tạo cấu trúc file, bạn có thể bắt đầu phát triển extension của mình bằng cách viết mã JavaScript để xử lý sự kiện và tương tác với các trang web, cũng như định dạng giao diện của extension của bạn bằng CSS.
