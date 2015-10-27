[](http://techliveinfo.com/wp-content/uploads/2015/04/Few-Available-Dash-Button-Products-in-Amazon-Online-Retailer.jpg)

# node-amazon-dash-button-windows
cap -based windows node project to trigger event on press of amazon dash button

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


 

