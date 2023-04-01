## Usecase:

1.  Sắp xếp lại các mục trong phần tử div có class "ungroup" khi kéo thả:

*   Khi người dùng bắt đầu kéo thả một phần tử có class "menu-item" trong div "ungroup", chúng ta sẽ gán thuộc tính "dragging" cho phần tử đó để đánh dấu rằng đang được kéo thả.
*   Khi người dùng kéo phần tử này, chúng ta sẽ di chuyển phần tử đó đến vị trí mới và cập nhật lại vị trí các phần tử khác trong div "ungroup".
*   Khi người dùng thả phần tử đó, chúng ta sẽ xóa thuộc tính "dragging" và cập nhật lại vị trí các phần tử trong div "ungroup".

2.  Sắp xếp lại các mục trong phần tử ul có class "draggable" khi kéo thả:

*   Tương tự như use case 1, khi người dùng kéo thả một phần tử có class "menu-group" hoặc "menu-item" trong ul "draggable", chúng ta sẽ cập nhật lại vị trí các phần tử trong ul này.

3.  Hiển thị dropdown menu khi click vào phần tử h3 trong phần tử div có class "menu-group":

*   Khi người dùng click vào phần tử h3 trong phần tử div "menu-group", chúng ta sẽ thêm hoặc xóa class "active" cho phần tử ul con của nó để hiển thị hoặc ẩn đi dropdown menu tương ứng.

4.  Thêm phần tử mới vào div "ungroup":

*   Khi người dùng click vào nút "Add Item" trong div "ungroup", chúng ta sẽ tạo một phần tử mới có class "menu-item" và chèn nó vào đầu div "ungroup".

5.  Thêm phần tử mới vào phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Add Group" trong phần tử div "menu-group", chúng ta sẽ tạo một phần tử mới có class "menu-group" và chèn nó vào đầu ul "draggable".

6.  Xóa phần tử trong div "ungroup":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-item" trong div "ungroup", chúng ta sẽ xóa phần tử đó khỏi div "ungroup".

7.  Xóa phần tử trong phần tử ul có class "draggable":

*   Khi người dùng click vào nút "Xóa" trong một phần tử có class "menu-group" hoặc "menu-item" trong ul "draggable", chúng ta sẽ xóa phần tử đó
