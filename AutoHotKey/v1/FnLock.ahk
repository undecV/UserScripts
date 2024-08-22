title := "fnLock"

#esc::
    if toggle := !toggle {
        TrayTip %title%, The toggle is turned off., , 16
    }
    else {
        TrayTip %title%, The toggle is turned on., , 16
    }
    Hotkey, F1, Toggle
    Hotkey, F2, Toggle
    Hotkey, F3, Toggle
    Hotkey, F4, Toggle
return

F1:: send {Volume_Mute}
F2:: send {Media_Prev}
F3:: send {Media_Play_Pause}
F4:: send {Media_Next}
