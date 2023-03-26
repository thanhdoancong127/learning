## Step

### Tab Requestion (Tab 1)

*   Form named RequestionForm gồm các input sau:
    *   InputFile: name="fileStore", import tệp có đuôi .json, sau khi import thành công sẽ tạo LocalStorage có tên "historiesStorage" và gán dữ liệu được lấy từ file đã được import vào historiesStorage, định dạng trong file sẽ có dạng:
    ```javascript
        "Account1": [
            {urlHistory: "", nameHistory:""},
            {urlHistory: "", nameHistory:""},
            {urlHistory: "", nameHistory:""}
        ], "Account2": [
            {urlHistory: "", nameHistory:""},
            {urlHistory: "", nameHistory:""},
            {urlHistory: "", nameHistory:""}
        ]
    ```
    *   SelectBox: name="historySaver", chứa danh sách history trước đó đã được gởi. Trong trường hợp historyUrl sau khi submit mà chưa tồn lại trong danh sách này thì sẽ được thêm vào danh sách này.
    *   SelectBox: name="HistoryMethod", trong đó có thể chọn method (get, post, put,... )
    *   Button: name="sent" submit
*   Khi người dùng bấm nút "sent", extension sẽ thực hiện các bước sau:
    *   Tạo một tab mới.
    *   Tạo request action với Url và method đã chọn.
    *   Set cookie của trang web hiện tại vào request.
    *   Set header của trang web hiện tại vào request.
    *   Gởi request đi và trả kết quả về ở tab mới đó.
*   Nếu danh sách ở form RequestionForm trống, thì chỉ hiển thị **InputFile: name="fileStore"**.

### Tab Creation (Tab 2)

*   Form named CreationForm gồm các input sau:
    *   Textbox: name ="historyUrl", nơi mà url sẽ được nhập.
    *   TextBox: name= "historyName", Định nghĩa tên cho "historyUrl".
    *   Button: name="updateIntoHead"
*   Sau khi người dùng nhập dữ liệu cho "historyUrl" và "historyName" thì sẽ kiểm tra trong localStorage với tên "historiesStorage" theo account hiện tại trên trang web. Nếu chưa có, sẽ thêm vào "historiesStorage". Sau đó reload lại combobox "HistoryMethod" ở form teen RequestionForm.

