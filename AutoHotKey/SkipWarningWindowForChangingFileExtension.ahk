; Skip warning window for changing file extension.
;
; Reference: https://superuser.com/a/401576
;
; Applies to "en-US" only.
;

while true {
    WinWaitActive("Rename ahk_class #32770")
    Send("y")
}
