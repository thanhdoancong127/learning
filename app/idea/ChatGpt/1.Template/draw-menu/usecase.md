## Usecase:

### Use case 1:

Mô tả: Người dùng có thể kéo và thả một mục (menu-item) trong phần tử div có class "ungroup" để sắp xếp lại vị trí của nó trong phần tử div có class "ungroup".

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
**Usecase2:**  Sắp xếp lại các mục trong phần tử ul có class "draggable" khi kéo thả:

*   Tương tự như use case 1, khi người dùng kéo thả một phần tử có class "menu-group" hoặc "menu-item" trong ul "draggable", chúng ta sẽ cập nhật lại vị trí các phần tử trong ul này.

**Usecase 3:**  Hiển thị dropdown menu khi click vào phần tử h3 trong phần tử div có class "menu-group":

*   Khi người dùng click vào phần tử h3 trong phần tử div "menu-group", chúng ta sẽ thêm hoặc xóa class "active" cho phần tử ul con của nó để hiển thị hoặc ẩn đi dropdown menu tương ứng.

**Usecase 4:**  Thêm phần tử mới vào div "ungroup":

*   Khi người dùng click vào nút "Add Item" trong div "ungroup", chúng ta sẽ tạo một phần tử mới có class "menu-item" và chèn nó vào đầu div "ungroup".

**Usecase 5:**  Thêm phần tử mới vào phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Add Group" trong phần tử div "menu-group", chúng ta sẽ tạo một phần tử mới có class "menu-group" và chèn nó vào đầu ul "draggable".

**Usecase 6:**  Xóa phần tử trong div "ungroup":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-item" trong div "ungroup", chúng ta sẽ xóa phần tử đó khỏi div "ungroup".

**Usecase 7:**  Xóa phần tử trong phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-group" hoặc "menu-item" trong ul "draggable", chúng ta sẽ xóa phần tử đó
