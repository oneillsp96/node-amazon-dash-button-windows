var Cap = require('cap').Cap,
  decoders = require('cap').decoders,
  PROTOCOL = decoders.PROTOCOL;

var c = new Cap(),
  device = Cap.findDevice(),
  filter = 'arp',
  bufSize = 10 * 1024 * 1024,
  buffer = new Buffer(65535);

var linkType = c.open(device, filter, bufSize, buffer);

c.setMinBytes && c.setMinBytes(0);

var just_emitted = {};
just_emitted = false;

c.on('packet', function (nbytes, trunc) {
  console.log('packet: length ' + nbytes + ' bytes, truncated? '
    + (trunc ? 'yes' : 'no'));

  if (linkType === 'ETHERNET') {
    var ret = decoders.Ethernet(buffer);
    // console.log("protocol: " + PROTOCOL.ETHERNET[ret.info.type]);

    if (ret.info.type === PROTOCOL.ETHERNET.ARP) {
      // console.log('Decoding ARP ...');
      // console.log("srcmac " + ret.info.srcmac);
    }

    if (ret.info.srcmac === "74:75:48:b8:55:23") {

      if (!just_emitted) {
        console.log("amazon dash button pressed")
        var open = require('open');
        open('http://www.netflix.com/browse/');

        just_emitted = true;
        setTimeout(function () { just_emitted = false; }, 3000); //sometimes one click triggers 2 or more ARP requests, this prevents multiple actions taking placep
      }


    }

  }
});