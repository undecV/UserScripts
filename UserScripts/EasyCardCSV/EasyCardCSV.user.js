// ==UserScript==
// @name         Export EasyCard Transaction History to CSV
// @name:zh-TW   將悠遊卡交易歷史記錄匯出為 CSV
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Export EasyCard transaction history tables to CSV format and download it.
// @author       undecV (https://github.com/undecV)
// @contributor  ChatGPT4 (https://chat.openai.com/)
// @homepageURL  https://github.com/undecV
// @icon         https://ezweb.easycard.com.tw/search/images2/favicon.ico
// @match        https://ezweb.easycard.com.tw/search/CardSearch.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to convert table data to CSV
    function tableToCSV() {
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

    // Create a textarea to display the CSV
    const textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = '200px';
    document.body.insertBefore(textarea, document.body.firstChild);

    // Create a download button
    const button = document.createElement('button');
    button.textContent = 'Download CSV';
    document.body.insertBefore(button, textarea.nextSibling);

    // Add a click event to the button for downloading the CSV
    button.addEventListener('click', function() {
        const csv = tableToCSV();
        const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EasyCard-${new Date().toISOString().replace(/[:-]/g, '').replace('T', '-').replace(/\..+/, '')}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Display CSV in textarea
    textarea.value = tableToCSV();
})();
