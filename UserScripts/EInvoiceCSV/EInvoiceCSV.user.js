// ==UserScript==
// @name         Export Taiwan E-Invoice Transaction History to CSV
// @name:zh-TW   將台灣電子發票交易記錄匯出為 CSV
// @description  Convert and download Taiwan E-Invoice table to CSV format
// @namespace    Violentmonkey Scripts
// @author       undecV (https://github.com/undecV)
// @homepageURL  https://github.com/undecV
// @icon         https://www.einvoice.nat.gov.tw/favicon.ico
// @version      1.0
// @author       undecV
// @match        https://www.einvoice.nat.gov.tw/portal/btc/mobile*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';

    function injectUI() {
        const convertButton = document.createElement('button');
        convertButton.textContent = '轉換';
        convertButton.className = "button_style blue_btn";
        convertButton.style.float = "right";
        convertButton.addEventListener("click", onConvertButtonClick)

        const downloadButton = document.createElement('button');
        downloadButton.textContent = '下載';
        downloadButton.className = "button_style blue_btn";
        downloadButton.style.float = "right";
        downloadButton.addEventListener("click", onDownloadButtonClick)

        const textarea = document.createElement('textarea');
        textarea.id = "eInvoiceCsvTextarea";
        textarea.style.width = '100%';
        textarea.style.height = '200px';

        const eInvoiceCsvUiDiv = document.createElement('div');
        const eInvoiceCsvUiButtonsBoxDiv = document.createElement('div');
        eInvoiceCsvUiButtonsBoxDiv.style.display = "flex";
        eInvoiceCsvUiButtonsBoxDiv.style.width = "100%";
        const eInvoiceCsvUiButtonsDiv = document.createElement('div');
        eInvoiceCsvUiButtonsDiv.style.width = "100%";
        
        eInvoiceCsvUiDiv.appendChild(textarea);
        eInvoiceCsvUiDiv.appendChild(eInvoiceCsvUiButtonsBoxDiv);
        eInvoiceCsvUiButtonsBoxDiv.appendChild(document.createElement("div"));
        eInvoiceCsvUiButtonsBoxDiv.appendChild(eInvoiceCsvUiButtonsDiv);
        eInvoiceCsvUiButtonsDiv.appendChild(convertButton);
        eInvoiceCsvUiButtonsDiv.appendChild(downloadButton);
    
        const dstDiv = document.querySelector(".subject_box .container");
        dstDiv.prepend(eInvoiceCsvUiDiv);
    }

    function onConvertButtonClick() {
        const csvText = ConvertCSV();
        const textarea = document.getElementById('eInvoiceCsvTextarea');
        textarea.textContent = csvText;
    }

    function onDownloadButtonClick() {
        const csvText = ConvertCSV();
        const blob = new Blob([csvText], {type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `EInvoice-${new Date().toISOString().replace(/[:-]/g, '').replace(/\..+/, '')}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function formatCSVCell(input) {
        if (input.includes(',') || input.includes('"') || input.includes('\n')) {
            input = input.replace(/"/g, '""');
            input = `"${input}"`;
        }
        return input;
    }

    function ConvertCSV() {
        const table = document.querySelector('.no-more-tables table');
        if (!table) { console.error('No invoice table found.'); return; }

        const rows = table.querySelectorAll('tbody > tr');
        let csvRows = [["載具自訂名稱", "發票號碼", "發票金額", "發票日期", "捐贈日期", "買方統編", "賣方名稱"],];

        for (let i = 0; i < rows.length; i += 2) {
            const row1 = rows[i];
            const row2 = rows[i+1];
            let csvRow = [
                formatCSVCell(row1.querySelector('td[data-title="載具自訂名稱"]').textContent.trim()),
                formatCSVCell(row1.querySelector('td[data-title="發票號碼"] > a[title]').textContent.trim()),
                formatCSVCell(row1.querySelector('td[data-title="發票金額"]').textContent.trim()),
                formatCSVCell(row1.querySelector('td[data-title="發票日期"]').textContent.trim()),
                formatCSVCell(row1.querySelector('td[date-title="捐贈日期"]').textContent.trim()),
                formatCSVCell(row1.querySelector('td[data-title="買方統編"]').textContent.trim()),
                formatCSVCell(row2 ? row2.textContent.trim() : '')
            ];
            csvRows.push(csvRow);
        }
        let csvText = csvRows.map(row => row.join(',')).join('\n');
        return csvText;
    }

    // Lazy load from https://stackoverflow.com/a/47406751
    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

    function check(changes, observer) {
        if(document.querySelector('.subject_box .container')) {
            observer.disconnect();
            // actions to perform after #mySelector is found
            injectUI();
        }
    }
    
}, false);
