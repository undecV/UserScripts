table := ["", "⑨", "cangku.moe"]
y := 1

sendtable(table, x, y) {
    send, ^a{BackSpace}
    send, % table[y]
}

#IfWinActive ahk_exe Bandizip.exe, 請輸入密碼

Down::
^Down::
y += 1
if (y > table.Length()) {
    y := 1
}
sendtable(table, x, y)
return

Up::
^Up::
y -= 1
if (y < 1) {
    y := table.Length()
}
sendtable(table, x, y)
return

!q:: MsgBox, Yes, AHK will take care of it.
