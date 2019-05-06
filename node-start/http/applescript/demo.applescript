-- tell application "Finder" to close every window
-- tell application "Finder" to open the startup disk
-- tell application "Finder" to get the name of front Finder window
-- tell application "Finder" to close Finder window "Macintosh HD"
-- tell application "Finder" to get the index of Finder window "Macintosh HD"
tell application "Finder" to open home
-- tell application "Finder" to set the index of the last Finder window to 1
tell application "Finder" to get the target of the front Finder window

tell application "Finder"
  set the target of the front Finder window to the startup disk
end tell

tell application "Finder"
  set the target of the last Finder window to home
end tell