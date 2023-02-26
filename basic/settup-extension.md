# Cài đặt Visual Studio Code và các extension
#### Visual Studio Code (hay VSCode) là một trình soạn thảo mã nguồn mở và miễn phí của Microsoft. Nó hỗ trợ nhiều ngôn ngữ lập trình, bao gồm cả React, và có nhiều extension hữu ích giúp bạn làm việc hiệu quả hơn. Trong bài viết này, chúng ta sẽ tìm hiểu cách cài đặt VSCode và các extension cần thiết để làm việc với React.

## Cài đặt Visual Studio Code
Để cài đặt VSCode, bạn có thể truy cập trang web https://code.visualstudio.com/ và tải xuống phiên bản phù hợp với hệ điều hành của bạn.

Nếu bạn đang sử dụng Ubuntu, bạn có thể cài đặt VSCode bằng cách mở Terminal và nhập các lệnh sau:
````
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
````
#### Nếu bạn đang sử dụng macOS, bạn có thể tải xuống file .dmg của VSCode từ trang web của Microsoft, sau đó kéo và thả file vào thư mục Applications trên máy tính của bạn.

## Các extension cần thiết để làm việc với React

Visual Studio Code (VS Code) là một trong những trình soạn thảo mã nguồn phổ biến nhất hiện nay. Với tính năng mở rộng (extension) phong phú, VS Code trở thành một công cụ hỗ trợ tuyệt vời cho các nhà phát triển làm việc với React.

Dưới đây là danh sách các extension cần thiết cho một dự án React:

1. ESLint và Prettier:
- ESLint và Prettier là hai công cụ quan trọng để đảm bảo mã của bạn đúng cú pháp và có định dạng đẹp.
- ESLint là công cụ phân tích mã nguồn để tìm kiếm lỗi cú pháp, sai sót và phong cách viết mã không đồng nhất trong dự án React của bạn.
- Prettier là công cụ định dạng mã nguồn tự động để giúp mã nguồn của bạn có định dạng đẹp và dễ đọc hơn.
- Để cài đặt hai công cụ này, bạn có thể tìm kiếm và cài đặt extension ESLint và Prettier - Code formatter trên trang web chính thức của VS Code.
2. Reactjs code snippets:
- Extension Reactjs code snippets cung cấp các đoạn mã ngắn để giúp bạn nhanh chóng tạo ra các thành phần React như class components, functional components, props, state, và hooks. Đây là một extension hữu ích để giúp bạn tiết kiệm thời gian viết mã.
3. Bracket Pair Colorizer:
- Extension Bracket Pair Colorizer giúp tăng khả năng đọc mã nguồn của bạn bằng cách hiển thị các cặp dấu ngoặc với màu sắc khác nhau.
- Khi bạn làm việc với React, bạn sẽ thường xuyên sử dụng các dấu ngoặc như (), {}, []. Với Bracket Pair Colorizer, bạn có thể dễ dàng nhận ra các cặp dấu ngoặc tương ứng và tránh việc đóng một cặp dấu ngoặc sai.
4. Debugger for Chrome:
- Extension Debugger for Chrome cho phép bạn debug ứng dụng React của bạn trên trình duyệt Chrome, giúp bạn dễ dàng tìm ra lỗi và khắc phục chúng.
5. Live Server:
- Một extension hỗ trợ cung cấp tính năng reload tự động khi có sự thay đổi trong mã nguồn.
6. GitLens:
- Một extension giúp theo dõi và quản lý Git trong VSCode. Nó cho phép xem các lịch sử thay đổi, commit, thay đổi branch và nhiều tính năng khác.
7. Code Spell Checker: 
- Một extension giúp kiểm tra lỗi chính tả trong code. Nó giúp cho code của bạn chính xác hơn và giảm thiểu sự cố gây ra bởi lỗi chính tả.
8. Import Cost: 
- Extension này giúp tính toán tổng kích thước của các module được import vào dự án của bạn. Điều này giúp cho bạn có thể tối ưu hóa dự án của mình và giảm thiểu thời gian tải trang.
9. Color Highlight:
- Một extension giúp tô màu cho các giá trị mã màu trong code, giúp dễ dàng phân biệt các giá trị màu.
10. ES7 React/Redux/GraphQL/React-Native snippets: 
- Cung cấp các snippet để viết code nhanh hơn.
11. Npm Intellisense: Tự động hoàn thành tên package và phương thức trong file package.json.
12. Path Intellisense: Tự động hoàn thành đường dẫn file và thư mục.
13. Prettier - Code formatter: Giúp định dạng code tự động và thống nhất trong dự án.
14. vscode-icons: Cung cấp biểu tượng cho các file và thư mục trong VS Code để phân biệt dễ dàng hơn.
15. Better Comments: Định dạng comment theo màu sắc để tăng tính trực quan và dễ hiểu.
16. Code Spell Checker: Kiểm tra lỗi chính tả trong code.
17. Import Cost: Hiển thị dung lượng của package khi import vào file.
18. REST Client: Cho phép kiểm tra và gửi các request HTTP trong VS Code.
19. indent-rainbow: giúp highlight các phần tử có cùng indentation level trong code.
20. Markdown All in One: hỗ trợ viết markdown.

Lưu ý: Việc sử dụng extension phụ thuộc vào nhu cầu và thói quen của từng lập trình viên, vì vậy không phải tất cả các extension trên đều phù hợp với mọi người.
