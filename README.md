# tank-platformer
A simple platformer made in JavaScript, using Phaser, for a JavaScript class. Very much not yet finished (currently only has movement, with some other mechanics coming in later). 

Distributed 
under ISC.


# Installation
You will either need your own web server config, or you can use Python's SimpleHTTPServer in the repo's directory. (using the  "python -m SimpleHTTPServer" command)
After that you can run "127.0.0.1:[port]" from your browser. (at least if you're going with the Python server, the actual address might vary if you're using a different webserver.)

(The comments in the .html file are in Polish but given this is a "babby's first Phaser game" (or really first "real" game in general), there's not much that shouldn't be self-explanatory.)

# Known issues
Collision between player and platforms isn't working. 
You can jump infinitely in mid-air (mostly done as a test to see if it works at all by removing the need for the player to be on the ground, otherwise it doesn't work even if you're touching the bottom boundary of the stage).
