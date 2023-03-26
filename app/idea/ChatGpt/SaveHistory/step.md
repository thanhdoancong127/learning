## Step


### Tab Requestion (Tab 1)

*   Form named RequestionForm gồm các input sau:
    *   InputFile: name="fileStore", import tệp có đuôi .json, định dạng trong file sẽ có dạng:
    ```javascript
        data: {
            account: "",
            historySaver: [
                {urlHistory: "", nameHistory:""},
                {urlHistory: "", nameHistory:""},
                {urlHistory: "", nameHistory:""}
            ]}
    ```

     
    *   SelectBox: name="historySaver", chứa danh sách history trước đó đã được gởi. Trong trường hợp historyUrl sau khi submit mà chưa tồn lại trong danh sách này thì sẽ được thêm vào danh sách này.
    *   SelectBox: name="HistoryMethod", trong đó có thể chọn method (get, post, put,... )
    *   Button: name="sent" submit
*   Khi người dùng bấm nút "sent", extension sẽ thực hiện các bước sau:
    *   Tạo một tab mới.
    *   Tạo request với Url đã được chọn và method đã chọn.
    *   Set cookie của trang web hiện tại vào request.
    *   Set header của trang web hiện tại vào request.
    *   Gởi request đi và trả kết quả về ở tab mới đó.

### Tab Creation (Tab 2)

*   Form named CreationForm gồm các input sau:
    *   Textbox: name ="historyUrl", nơi mà url sẽ được nhập.
    *   TextBox: name= "historyName", Định nghĩa tên cho "historyUrl".
    *   Button: name="updateIntoHead"
*   Sau khi người dùng nhập dữ liệu cho "historyUrl", "historyName" và chọn "HistoryMethod" thì sẽ kiểm tra trong file ở "historySaver" đã có object chứa "historyUrl" và "historyName" chưa. Nếu chưa có, sẽ được thêm vào "historySaver" và cập nhật lại file "historydb.json". Sau đó reload lại combobox "HistoryMethod" ở form 2.
*   Nếu danh sách ở form 2 trống, sẽ hiển thị nút để mở đến Tab 1.

