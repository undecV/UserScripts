table := [["", "1", "2"], ["a", "b"]]
x := 1
y := 1

sendtable(table, x, y) {
    send, ^a{BackSpace}
    send, % table[x][y]
}

#IfWinActive ahk_exe Bandizip.exe, This file is encrypted

Down::
^Down::
y += 1
if (y > table[x].Length()) {
    y := 1
}
sendtable(table, x, y)
return

Up::
^Up::
y -= 1
if (y < 1) {
    y := table[x].Length()
}
sendtable(table, x, y)
return

^Right::
x += 1
if (x > table.Length()) {
    x := 1
}
if (y > table[x].Length()) {
    y := 1
}
sendtable(table, x, y)
return

^Left::
x -= 1
if (x < 1) {
    x := 1table.Length()
}
if (y > table[x].Length()) {
    y := 1
}
sendtable(table, x, y)
return

!q:: MsgBox, Yes, AHK will take care of it.

