## Usecase:

**Use case 1:** Người dùng có thể kéo và thả một mục (menu-item) trong phần tử div có class "ungroup" để sắp xếp lại vị trí của nó trong phần tử div có class "ungroup".

Các bước thực hiện:

1.  Xác định phần tử được kéo và thả:
    
    *   Lắng nghe sự kiện "mousedown" trên phần tử được kéo và lưu trữ nó vào biến global "draggedItem".
    *   Lắng nghe sự kiện "mouseup" trên toàn bộ tài liệu (document) và gọi hàm handleDrop() để xử lý việc thả phần tử.
2.  Xử lý việc kéo và thả phần tử:
    
    *   Lắng nghe sự kiện "mousemove" trên toàn bộ tài liệu (document) và gọi hàm handleDrag() để xử lý việc kéo phần tử.
    *   Trong hàm handleDrag(), tính toán vị trí mới của phần tử dựa trên vị trí của chuột và vị trí ban đầu của phần tử.
    *   Di chuyển phần tử tới vị trí mới bằng cách thay đổi thuộc tính "top" và "left" của phần tử.
3.  Xử lý việc thả phần tử:
    
    *   Trong hàm handleDrop(), tính toán vị trí của phần tử được thả vào bằng cách tìm phần tử đang được hover (mouseover) trong phần tử div có class "ungroup".
    *   Nếu phần tử được thả vào là khác với phần tử ban đầu, xóa phần tử ban đầu và chèn phần tử được kéo và thả vào vị trí mới bằng cách sử dụng phương thức insertBefore().
4.  Lắng nghe sự kiện load để gắn các sự kiện kéo và thả cho các phần tử có class "draggable":
    
    *   Lắng nghe sự kiện load trên toàn bộ tài liệu (window) và sử dụng phương thức addEventListener() để lắng nghe sự kiện load.
    *   Trong hàm handleLoad(), lặp lại các phần tử có class "draggable" và gắn sự kiện kéo và thả cho chúng bằng cách sử dụng phương thức addEventListener().

**Use case 2:** Sắp xếp lại các mục trong phần tử ul có class "draggable" khi kéo thả.

Mô tả: Người dùng muốn sắp xếp lại các mục trong phần tử ul có class "draggable" bằng cách kéo và thả (drag and drop) chúng để thay đổi vị trí của chúng trong danh sách.

Các bước thực hiện:

1.  Người dùng nhấn và giữ chuột trái trên phần tử muốn di chuyển trong phần tử ul có class "draggable".
2.  Khi chuột được giữ, phần tử đó sẽ được tạo ra một phiên bản sao chép (clone) và được chèn vào trang web tại vị trí chuột đang giữ.
3.  Khi người dùng di chuyển chuột, phiên bản sao chép của phần tử đó sẽ di chuyển theo.
4.  Khi người dùng thả chuột, phần tử đó sẽ được chèn vào vị trí mới trong phần tử ul có class "draggable".
5.  Các phần tử khác trong phần tử ul có class "draggable" sẽ tự động thay đổi vị trí của mình để phù hợp với vị trí mới của phần tử được di chuyển.

Kết quả: Các mục trong phần tử ul có class "draggable" được sắp xếp lại và cập nhật vị trí mới của chúng khi người dùng kéo và thả.

**Use case 3:** Hiển thị dropdown menu khi click vào phần tử h3 trong phần tử div có class "menu-group"

Mô tả:

*   Khi người dùng click vào phần tử h3 trong phần tử div có class "menu-group" thì sẽ hiển thị dropdown menu chứa các phần tử li với các thẻ a bên trong.
*   Nếu dropdown menu đã được hiển thị thì khi người dùng click vào phần tử h3 lần nữa thì dropdown menu sẽ bị ẩn đi.

Luồng sự kiện:

1.  Lắng nghe sự kiện click vào phần tử h3 trong phần tử div có class "menu-group".
2.  Kiểm tra xem dropdown menu của phần tử đó đã được hiển thị chưa.
3.  Nếu dropdown menu đã được hiển thị thì ẩn đi.
4.  Nếu dropdown menu chưa được hiển thị thì hiển thị dropdown menu.

Các bước thực hiện chi tiết:

1.  Lắng nghe sự kiện click vào phần tử h3 trong phần tử div có class "menu-group".
2.  Lấy phần tử ul chứa các phần tử li với các thẻ a bên trong trong phần tử div cha của phần tử h3 đó.
3.  Kiểm tra xem dropdown menu của phần tử đó đã được hiển thị chưa.
4.  Nếu dropdown menu đã được hiển thị thì ẩn đi bằng cách: a. Đổi class của phần tử div cha của phần tử h3 thành "menu-group". b. Đổi class của phần tử ul chứa các phần tử li với các thẻ a bên trong trong phần tử div cha của phần tử h3 thành "draggable". c. Đổi giá trị của thuộc tính aria-expanded của phần tử h3 thành "false".
5.  Nếu dropdown menu chưa được hiển thị thì hiển thị dropdown menu bằng cách: a. Đổi class của phần tử div cha của phần tử h3 thành "menu-group active". b. Đổi class của phần tử ul chứa các phần tử li với các thẻ a bên trong trong phần tử div cha của phần tử h3 thành "draggable active". c. Đổi giá trị của thuộc tính aria-expanded của phần tử h3 thành "true".

**Use case 4:** Thêm phần tử mới vào div "ungroup"

*   Mô tả:
    *   Người dùng muốn thêm một phần tử mới vào phần tử div có class "ungroup".
    *   Người dùng click vào nút "Thêm mới" trên thanh công cụ.
    *   Một hộp thoại hiện ra yêu cầu người dùng nhập nội dung cho phần tử mới.
    *   Người dùng nhập nội dung và click nút "Thêm" để thêm phần tử mới vào phần tử div "ungroup".
    *   Phần tử mới sẽ được tạo ra với class "menu-item draggable" và một thẻ a bên trong, có thể kéo và thả để sắp xếp lại.
*   Luồng sự kiện:
    1.  Người dùng click vào nút "Thêm mới" trên thanh công cụ.
    2.  Hiển thị hộp thoại yêu cầu nhập nội dung cho phần tử mới.
    3.  Người dùng nhập nội dung và click nút "Thêm".
    4.  Phần tử mới được tạo ra với class "menu-item draggable" và một thẻ a bên trong.
*   Điều kiện tiên quyết:
    *   Phải có phần tử div có class "ungroup" trong phần tử div có class "menu".
*   Điều kiện sau:
    *   Phần tử mới được thêm vào phần tử div có class "ungroup".
*   Ngoại lệ:
    *   Nếu người dùng không nhập nội dung khi yêu cầu, hiển thị thông báo lỗi và yêu cầu nhập lại.
    *   Nếu có lỗi trong quá trình thêm phần tử mới, hiển thị thông báo lỗi cho người dùng.

**Usecase 5:** Thêm phần tử mới vào phần tử ul có class "draggable"

1.  Người dùng thực hiện hành động click vào nút "Add Item" nằm bên trên phần tử ul có class "draggable".
2.  Hệ thống tạo ra một phần tử li mới với thẻ a bên trong và thêm vào phần tử ul có class "draggable".
3.  Phần tử li mới này có thể được kéo và thả để sắp xếp lại vị trí trong phần tử ul.

**Usecase 6:** Xóa phần tử trong div "ungroup"

1.  Người dùng thực hiện hành động click vào biểu tượng xóa bên cạnh phần tử div có class "menu-item" trong div "ungroup".
2.  Hệ thống xác nhận việc xóa phần tử và xóa nó khỏi div "ungroup".

**Usecase 7:** Xóa phần tử trong phần tử ul có class "draggable"

1.  Người dùng thực hiện hành động click vào biểu tượng xóa bên cạnh phần tử li trong phần tử ul có class "draggable".
2.  Hệ thống xác nhận việc xóa phần tử và xóa nó khỏi phần tử ul có class "draggable".
