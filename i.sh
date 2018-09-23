#!/bin/sh

echo '
on run argv
    tell application "Terminal"
        activate
        set newTab to do script("cd /Users/jfernandezcorral/svg; yarn demo")
    end tell
    tell application "Terminal"
        activate
        set newTab to do script("cd /Users/jfernandezcorral/svg; yarn build-dev-watch")
    end tell
end run

' | osascript - "$@" > /dev/null