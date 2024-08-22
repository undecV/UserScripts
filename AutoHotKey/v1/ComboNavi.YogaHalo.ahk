; ComboNavi for
;     YogaBook HaloKeyboard

Title = ComboNavi
PgUpDnHit = -1

; Disable {PgUp} and {PgDn},
; and Replace them with combo keys.

PgUp::
PgDn::
PgUpDnHit++
TrayTipText = %Title% is ON, You Hit {PgUp} & {PgDn} %PgUpDnHit% time(s).
if (mod(PgUpDnHit, 10) == 0)
    TrayTip, %Title%, %TrayTipText%, 1
Return

^Up::PgUp
^Down::PgDn
^Left::Home
^Right::End
