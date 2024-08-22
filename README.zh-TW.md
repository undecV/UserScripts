# undecV / UserScripts

> UserScripts and UserStyles by undecV.

[English](./README.md) | 正體中文

## UserScripts

- 將悠遊卡交易歷史記錄匯出為 CSV：[介紹][EasyCardCSV]，[安裝 🔱 UserScript][EasyCardCSV.user.js]
- 將台灣電子發票交易記錄匯出為 CSV：[介紹][EInvoiceCSV]，[安裝 🔱 UserScript][EInvoiceCSV.user.js]

## UserStyles

- Anime1.me 劇院模式：[安裝 🎨 UserStyle][Anime1Theater.user.css]
- 隱藏 IEEE Xplore 側邊欄：[安裝 🎨 UserStyle][HideIEEEXploreSidebar.user.css]

## AutoHotKey

- Skip Warning Window For Changing File Extension

[EasyCardCSV]: ./UserScripts/EasyCardCSV/
[EasyCardCSV.user.js]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserScripts/EasyCardCSV/EasyCardCSV.user.js
[EInvoiceCSV]: ./UserScripts/EInvoiceCSV/
[EInvoiceCSV.user.js]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserScripts/EInvoiceCSV/EInvoiceCSV.user.js
[Anime1Theater.user.css]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserStyles/Anime1Theater/Anime1Theater.user.css
[HideIEEEXploreSidebar.user.css]: https://raw.githubusercontent.com/undecV/UserScripts/main/UserStyles/Miscellaneous/HideIEEEXploreSidebar.user.css

## Preliminaries

UserScripts 和 UserStyles 是兩種用來修改網頁外觀和功能的工具。UserScripts 是 JavaScript 程式，可以在網頁上執行，以修改其行為或添加新功能。另一方面，UserStyles 是使用 CSS 撰寫的樣式表，可以改變網頁的外觀和佈局。

### Intro to UserScripts

[Violentmonkey][] 是一個用來管理 UserScripts 的瀏覽器擴充功能。它支援在瀏覽器中執行 JavaScript 程式碼，以修改網頁的行為。要安裝 UserScripts，首先需要安裝 Violentmonkey 擴充功能，然後添加所需的 UserScript 連結或直接將 UserScript 程式碼貼入其管理介面。或者，也可以直接在支持的網站上安裝 UserScripts。

安裝 🐵 Violentmonkey 擴充功能：🦊 [Firefox][Violentmonkey:Firefox]、🌐 [Chrome][Violentmonkey:Chrome]、🌊 [Edge][Violentmonkey:Edge]。

### Intro to UserStyles

[Stylus][] 是一個用來管理 UserStyles 的擴充功能。它允許使用者輕鬆地將自定義的 CSS 樣式應用到網頁上。要安裝 UserStyles，需要安裝 Stylus 擴充功能，然後添加所需的 UserStyle 連結或直接將 CSS 程式碼貼入其管理介面。同樣地，也可以直接在支持的網站上安裝 UserStyles。

安裝 🎨 Stylus 擴充功能：🦊 [Firefox][Stylus:Firefox]、🌐 [Chrome][Stylus:Chrome]。

### Intro to AutoHotKey

[AutoHotKey](https://www.autohotkey.com/) 是一種強大的 Windows 腳本語言，允許使用者創建自定義腳本來自動化重複性任務、創建鍵盤快捷鍵以及控制視窗和進程。通過 AutoHotKey，使用者可以透過自定義計算環境來提升生產力，滿足個人需求。它特別適用於需要頻繁操作的任務，如輸入常用短語或調整視窗位置。

通過這些擴充功能和工具，您可以輕鬆自定義網頁的外觀、功能，甚至是系統中的自動化任務，以更好地符合您的個人偏好或需求。

[Violentmonkey]: https://violentmonkey.github.io/
[Violentmonkey:Firefox]: https://addons.mozilla.org/firefox/addon/violentmonkey/
[Violentmonkey:Chrome]: https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag
[Violentmonkey:Edge]: https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao
[Stylus]: https://add0n.com/stylus.html
[Stylus:Firefox]: https://addons.mozilla.org/firefox/addon/styl-us/
[Stylus:Chrome]: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne
