# 將悠遊卡歷史交易匯出為 CSV

[安裝 🔱 UserScript][EasyCardCSV.user.js]

這個 UserScript 不會向 悠遊卡歷史交易查詢系統 發出任何請求。

這個 UserScript 在網頁載入後讀取畫面上的內容，並將其轉換成 CSV 格式。


使用方法：

1. 進入 [悠遊卡歷史交易查詢] 頁面；
2. 輸入卡號和查詢規則，按下「送出」按鈕；
3. 文本框將會直接顯示轉換後的 CSV 內容。
4. 按下「下載」按鈕，將會下載 CSV 檔案。

注意事項：

將會轉換 **每一頁** 表格的內容，包括不可見的頁面的表格。

[EasyCardCSV.user.js]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserScripts/EasyCardCSV/EasyCardCSV.user.js
[悠遊卡歷史交易查詢]: https://ezweb.easycard.com.tw/search/CardSearch.php
