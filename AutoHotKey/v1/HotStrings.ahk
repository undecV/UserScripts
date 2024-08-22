:*:\td::
FormatTime, CurrentDate,, yyyy-MM-dd
SendInput, %CurrentDate%
return

:*:\now::
FormatTime, CurrentTime,, HH:mm
SendInput, %CurrentTime%
return
