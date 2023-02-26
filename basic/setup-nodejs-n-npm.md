# Cài đặt Node.js và npm

### Tất cả các bước cài đặt dưới đây đều được thực hiện trên hệ điều hành Windows.

#### Để cài đặt Node.js và npm, bạn có thể làm theo các bước sau:
1. Tải xuống bộ cài đặt Node.js từ trang web chính thức (https://nodejs.org/en/). Tại thời điểm viết bài này, phiên bản mới nhất là Node.js 16.8.0 LTS. Bạn nên tải phiên bản LTS (Long-Term Support) để đảm bảo tính ổn định và hỗ trợ dài hạn.
2. Sau khi tải xuống, mở tệp tin bộ cài đặt và cài đặt Node.js bằng cách nhấn Next cho đến khi quá trình cài đặt hoàn tất.
3. Kiểm tra phiên bản Node.js và npm đã được cài đặt bằng cách mở Command Prompt và chạy lệnh sau:

````
 node -v
 npm -v
````

#### Nếu các lệnh trên trả về phiên bản tương ứng của Node.js và npm, thì bạn đã cài đặt thành công.

### Mặc dù cài đặt Node.js là một quá trình đơn giản, nhưng bạn vẫn có thể gặp phải một số lỗi. Dưới đây là một số lỗi thường gặp khi cài đặt Node.js và cách khắc phục chúng:

1. Lỗi không thể tải xuống tệp cài đặt Node.js: Nếu bạn gặp phải lỗi này, hãy thử tải xuống tệp cài đặt Node.js từ một nguồn khác hoặc kiểm tra xem kết nối mạng của bạn có vấn đề gì không.
2. Lỗi không thể chạy tệp cài đặt Node.js: Nếu bạn gặp phải lỗi này, hãy thử khởi động lại máy tính của bạn và thử cài đặt lại Node.js.
3. Lỗi không thể cài đặt Node.js vì thiếu quyền truy cập: Nếu bạn gặp phải lỗi này, hãy chạy trình cài đặt Node.js với quyền quản trị viên bằng cách nhấn chuột phải vào tệp cài đặt và chọn "Run as administrator".
4. Lỗi không thể cập nhật npm: Nếu bạn gặp phải lỗi này, hãy thử chạy Command Prompt hoặc PowerShell với quyền quản trị viên và chạy lệnh sau để cập nhật npm:
````
 npm install -g npm@latest
 ````
5. Lỗi không thể tìm thấy Node.js trong PATH: Nếu bạn gặp phải lỗi này, hãy kiểm tra xem biến môi trường PATH của bạn đã được cấu hình đúng chưa. Nếu không, hãy thêm đường dẫn đến thư mục chứa tệp thực thi của Node.js vào biến PATH.
````
1. Kiểm tra Node.js đã được cài đặt trên máy tính của bạn hay chưa bằng cách mở Command Prompt hoặc PowerShell và nhập lệnh sau:

> node -v

Nếu Node.js đã được cài đặt, phiên bản của nó sẽ được hiển thị. Nếu không, bạn cần phải tải xuống và cài đặt Node.js từ trang web chính thức.

2. Mở Command Prompt hoặc PowerShell với quyền quản trị viên bằng cách nhấn chuột phải vào biểu tượng và chọn "Run as administrator".
3. Nhập lệnh sau để kiểm tra biến môi trường PATH của bạn:

> echo %PATH%

Nếu đường dẫn đến thư mục chứa tệp thực thi của Node.js không được liệt kê trong danh sách PATH, bạn cần phải thêm nó vào.

4. Tìm đường dẫn đến thư mục chứa tệp thực thi của Node.js.
Thường thì tệp thực thi này sẽ nằm trong thư mục "C:\Program Files\nodejs" hoặc "C:\Program Files (x86)\nodejs".
Nếu bạn đã cài đặt Node.js ở một vị trí khác, bạn cần phải tìm đường dẫn đến thư mục chứa tệp thực thi của Node.js theo đường dẫn của bạn.
5. Mở Control Panel và chọn "System and Security" > "System" > "Advanced system settings".
6. Trong cửa sổ System Properties, chọn tab "Advanced" và nhấp vào nút "Environment Variables".
7. Tìm biến môi trường PATH trong danh sách System Variables và nhấp vào nút "Edit".
8. Trong cửa sổ Edit environment variable, nhấp vào nút "New" và thêm đường dẫn đến thư mục chứa tệp thực thi của Node.js vào danh sách.
9. Nhấp vào "OK" để lưu các thay đổi và đóng tất cả các cửa sổ.
10. Khởi động lại Command Prompt hoặc PowerShell và nhập lệnh sau để kiểm tra xem Node.js có hoạt động hay không:

> node -v

Nếu Node.js đã được cấu hình đúng, phiên bản của nó sẽ được hiển thị.
````
