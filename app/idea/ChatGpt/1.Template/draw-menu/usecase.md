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

Mục đích: Thêm một phần tử mới vào phần tử ul có class "draggable" trong một phần tử li đã có sẵn.

Người dùng: Người dùng muốn thêm một phần tử mới vào phần tử ul có class "draggable" để sắp xếp các mục.

Điều kiện tiên quyết: Phải có một phần tử li đã có sẵn và chứa phần tử ul có class "draggable".

Bước thực hiện:

1.  Tìm phần tử li chứa phần tử ul có class "draggable" cần thêm phần tử mới.
2.  Tạo một phần tử li mới chứa phần tử div với class "menu-group".
3.  Thêm một tiêu đề h3 cho phần tử div với nội dung mong muốn.
4.  Tạo một phần tử ul mới với class "draggable" và thêm vào phần tử div.
5.  Tạo một hoặc nhiều phần tử li mới cho phần tử ul mới với thẻ a bên trong.
6.  Thêm sự kiện kéo và thả vào phần tử li mới và phần tử ul mới để có thể sắp xếp lại các mục.

Kết quả: Phần tử mới được thêm vào phần tử ul có class "draggable" và có thể được sắp xếp lại bằng cách kéo và thả.

**Use case 6:** Xóa phần tử trong div "ungroup"

Mô tả:

*   Người dùng muốn xóa một phần tử có class "menu-item" trong div có class "ungroup".
*   Khi người dùng click vào nút xóa của phần tử đó, phần tử sẽ bị xóa khỏi div "ungroup".

Luồng sự kiện:

1.  Người dùng click vào nút xóa của phần tử "menu-item" trong div "ungroup".
2.  Xác nhận xóa phần tử.
3.  Nếu người dùng đồng ý xóa, phần tử đó sẽ bị xóa khỏi div "ungroup".
4.  Nếu người dùng không đồng ý xóa, thì không có hành động nào được thực hiện.

Điều kiện tiên quyết:

*   Phần tử muốn xóa phải có class "menu-item" và nằm trong div có class "ungroup".

Kết quả mong đợi:

*   Phần tử bị xóa khỏi div "ungroup" và không còn xuất hiện trên trang web.

**Usecase 7:** Xóa phần tử trong phần tử ul có class "draggable"


Mô tả:

*   Khi người dùng click vào biểu tượng xóa trên phần tử có class "menu-item" trong phần tử ul có class "draggable", phần tử đó sẽ bị xóa khỏi danh sách.
*   Nếu phần tử bị xóa là phần tử cuối cùng trong danh sách, phần tử trước đó sẽ trở thành phần tử cuối cùng.
*   Nếu danh sách chỉ còn lại một phần tử, thì phần tử đó sẽ không thể bị xóa.
*   Sau khi phần tử được xóa khỏi danh sách, sẽ có một sự kiện được kích hoạt để thông báo cho các module khác biết về việc này.

Các bước thực hiện:

1.  Lấy tất cả các phần tử có class "menu-item" trong phần tử ul có class "draggable".
2.  Gắn sự kiện "click" cho biểu tượng xóa trên mỗi phần tử đó.
3.  Khi xảy ra sự kiện "click", lấy phần tử cha của biểu tượng xóa (phần tử li), sau đó xóa phần tử đó khỏi danh sách.
4.  Kiểm tra xem danh sách có còn ít nhất một phần tử không, nếu không thì disable sự kiện xóa cho phần tử cuối cùng.
5.  Khi phần tử được xóa khỏi danh sách, gửi một sự kiện để thông báo cho các module khác.
