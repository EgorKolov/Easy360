#!/bin/bash
python3 ./src/server.py &
if which xdg-open > /dev/null
then
  xdg-open "http://127.0.0.1:8000/src/app.html"
elif which gnome-open > /dev/null
then
  gnome-open "http://127.0.0.1:8000/src/app.html"
fi
