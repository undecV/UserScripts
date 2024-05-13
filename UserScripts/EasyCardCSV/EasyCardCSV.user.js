// ==UserScript==
// @name         Export EasyCard Transaction History to CSV
// @name:zh-TW   將悠遊卡交易歷史記錄匯出為 CSV
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Export EasyCard transaction history tables to CSV format and download it.
// @author       undecV (https://github.com/undecV)
// @contributor  ChatGPT4 (https://chat.openai.com/)
// @homepageURL  https://github.com/undecV/UserScripts/tree/main/UserScripts/EasyCardCSV
// @icon         https://ezweb.easycard.com.tw/search/images2/favicon.ico
// @match        https://ezweb.easycard.com.tw/search/CardSearch.php*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';

    function injectUI() {
        // const convertButton = document.createElement('button');
        // convertButton.textContent = '轉換';
        // convertButton.className = "button_style blue_btn";
        // convertButton.style.float = "right";
        // convertButton.addEventListener("click", onConvertButtonClick)

        const downloadButton = document.createElement('button');
        downloadButton.textContent = '下載';
        downloadButton.style.float = "right";
        downloadButton.addEventListener("click", onDownloadButtonClick)

        const textarea = document.createElement('textarea');
        textarea.id = "easyCardCsvTextarea";
        textarea.style.width = '100%';
        textarea.style.height = '200px';

        const easyCardCsvUiDiv = document.createElement('div');
        const easyCardCsvUiButtonsBoxDiv = document.createElement('div');
        easyCardCsvUiButtonsBoxDiv.style.display = "flex";
        easyCardCsvUiButtonsBoxDiv.style.width = "100%";
        const easyCardCsvUiButtonsDiv = document.createElement('div');
        easyCardCsvUiButtonsDiv.style.width = "100%";
        
        easyCardCsvUiDiv.appendChild(textarea);
        easyCardCsvUiDiv.appendChild(easyCardCsvUiButtonsBoxDiv);
        easyCardCsvUiButtonsBoxDiv.appendChild(document.createElement("div"));
        easyCardCsvUiButtonsBoxDiv.appendChild(easyCardCsvUiButtonsDiv);
        // easyCardCsvUiButtonsDiv.appendChild(convertButton);
        easyCardCsvUiButtonsDiv.appendChild(downloadButton);
    
        const dstDiv = document.querySelector("p.csp008");
        
        dstDiv.parentNode.insertBefore(easyCardCsvUiDiv, dstDiv.nextSibling);
    }

    // Function to convert table data to CSV
    function ConvertCSV() {
        const tables = document.querySelectorAll('.tbl_product');
        let csv = [];
        tables.forEach((table) => {
            for (let row of table.rows) {
                let csvRow = [];
                for (let cell of row.cells) {
                    csvRow.push('"' + cell.textContent.replace(/"/g, '""') + '"'); // Handle quotes
                }
                csv.push(csvRow.join(','));
            }
        });
        return csv.join('\n');
    }

    // Add a click event to the button for downloading the CSV
    function onDownloadButtonClick() {
        const csvText = ConvertCSV();
        const blob = new Blob([csvText], {type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EasyCard-${new Date().toISOString().replace(/[:-]/g, '').replace('T', '-').replace(/\..+/, '')}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Lazy load from https://stackoverflow.com/a/47406751
    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

    function check(changes, observer) {
        if(document.querySelector('.tbl_product')) {
            observer.disconnect();
            // actions to perform after #mySelector is found
            injectUI();
            const csvText = ConvertCSV();
            const textarea = document.getElementById("easyCardCsvTextarea");
            textarea.textContent = csvText;
        }
    }

}, false);
