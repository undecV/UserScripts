# 將台灣電子發票交易記錄匯出為 CSV

[安裝 🔱 UserScript][EInvoiceCSV.user.js]

這個 UserScript 不會向 電子發票整合服務平臺 發出任何請求。

這個 UserScript 在網頁載入後讀取畫面上的內容，並將其轉換成 CSV 格式。

使用方法：

1. 進入發票查詢及捐贈頁面；
2. 輸入查詢規則，按下「查詢」按鈕；
3. 調整表格：排序、換頁和每頁顯示筆數；
4. 按下「轉換」按鈕，文本框將會顯示轉換後的 CSV 內容。
5. 按下「下載」按鈕，將會下載 CSV 檔案。

注意事項：

僅轉換 **當前頁面** 表格的內容（所見即所得）。
若需要轉換更多內容，請 修改每頁顯示筆數 或 換頁。

[EInvoiceCSV.user.js]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserScripts/EInvoiceCSV/EInvoiceCSV.user.js

## Version History

### 1.2

- 修正存在 已作廢發票 無法轉換的問題。
