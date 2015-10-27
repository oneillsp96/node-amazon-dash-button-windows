![pic](http://learnbonds.com/wp-content/uploads/AmazonDash.jpg)

# node-amazon-dash-button-windows
node app that triggers event on press of amazon dash button.  Built on top of [cap](https://github.com/mscdex/cap).

Description
===========

ARP packet capturing with [node.js](http://nodejs.org/) to trigger event on the press of an Amazon Dash button

Requirements
============

* [node.js](http://nodejs.org/) -- v0.10.0 or newer

* For Windows: [WinPcap](http://www.winpcap.org/install/default.htm)


Install
============

    git clone
    node app.js
    
Setup 
============
  * Follow Amazon's setup instructions until the last step. When prompted to choose a product simply close the amazon app        without finishing
  * Use [Wireshark](https://www.wireshark.org/#download) or a similar packet sniffer to find your Dash Button's MAC address
  * Replace MAC address in this line:  if (ret.info.srcmac === "74:75:48:b8:55:23") with your own

Notes 
============

* Node Modules were checked in due to a problem with cap's node-gyp rebuild script not installing properly through npm
* On button press, I use [opne](https://github.com/pwnall/node-open) to open a new Netflix window when the dash button is pressed, but you can use this event to do any number of things such as POSTing to a Google Sheet, interacting with Philips Hue bulbs, etc.  Have fun!


 

