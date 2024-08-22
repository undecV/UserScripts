ScriptTitle := "VibraClick"
ClickTimes := 250
ClickInterval := 5

+LButton::
TrayTip, %ScriptTitle%, "Start."
Loop, %ClickTimes%
{
    Send, {LButton}
    Sleep, %ClickInterval%
}
TrayTip, %ScriptTitle%, "Done."
