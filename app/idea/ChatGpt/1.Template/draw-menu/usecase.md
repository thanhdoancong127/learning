## Tổng quát Usecase:

Dựa vào mô tả, ta có thể phân tích các use case như sau:

1.  User kéo và thả menu item trong div có class "ungroup": User có thể kéo và thả một phần tử menu item có class "menu-item draggable" để sắp xếp lại vị trí của nó trong phần tử div có class "ungroup".
    
2.  User kéo và thả menu item trong phần tử ul: User có thể kéo và thả một phần tử menu item có class "menu-item" để sắp xếp lại vị trí của nó trong phần tử ul.
    
3.  User kéo và thả menu group: User có thể kéo và thả một phần tử menu group có class "menu-group draggable" để sắp xếp lại vị trí của nó trong phần tử ul.
    
4.  User click vào một menu item: Khi user click vào một phần tử menu item có class "menu-item", trang web sẽ chuyển tới địa chỉ được đặt trong thẻ a bên trong.
    
5.  User click vào một menu group: Khi user click vào một phần tử menu group có class "menu-group", sẽ xảy ra toggle (mở/rút) của các phần tử menu item con nằm trong nó.
    
6.  User thêm một menu item mới: User có thể thêm một phần tử menu item mới vào phần tử ul bằng cách click vào nút "Thêm".
    
7.  User thêm một menu group mới: User có thể thêm một phần tử menu group mới vào phần tử ul bằng cách click vào nút "Thêm nhóm".
