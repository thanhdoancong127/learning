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

**Usecase 4:**  Thêm phần tử mới vào div "ungroup":

*   Khi người dùng click vào nút "Add Item" trong div "ungroup", chúng ta sẽ tạo một phần tử mới có class "menu-item" và chèn nó vào đầu div "ungroup".

**Usecase 5:**  Thêm phần tử mới vào phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Add Group" trong phần tử div "menu-group", chúng ta sẽ tạo một phần tử mới có class "menu-group" và chèn nó vào đầu ul "draggable".

**Usecase 6:**  Xóa phần tử trong div "ungroup":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-item" trong div "ungroup", chúng ta sẽ xóa phần tử đó khỏi div "ungroup".

**Usecase 7:**  Xóa phần tử trong phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-group" hoặc "menu-item" trong ul "draggable", chúng ta sẽ xóa phần tử đó
