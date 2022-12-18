const $ = (selector) => document.querySelector(selector);
function parse_text_address(slice) {
  let tag = TonWeb.boc.CellParser.loadUint(slice, 2);
  if(tag == 0) {
    return "🕳️ Null address";
  }
  if(tag != 2) {
    return "Unsupported address type 1 " + tag;
  }
  tag = TonWeb.boc.CellParser.loadUint(slice, 1);
  if(tag != 0) {
    return "Unsupported address type 2";
  }
  let wc = TonWeb.boc.CellParser.loadInt(slice, 8);
  let hash_part = new Uint8Array(32);
  for(i=0 ; i<32; i++) {
    hash_part[i] = TonWeb.boc.CellParser.loadUint(slice, 8);
  }
  let addr = new TonWeb.utils.Address("0:0000000000000000000000000000000000000000000000000000000000000000");
  addr.wc = wc;
  addr.hashPart = hash_part;
  return addr.toString(true,true,true,false);
}

function formatAddr(s) {
        if (!s) return '';
        return s.substring(0, s.length / 2) + '<wbr>' + s.substring(s.length / 2);
    }

const makeAddressUrl = s => {
        if(!s) return "";
        return '<a target="_blank" href="https://testnet.ton.cx/address/' + s + '">' + formatAddr(s) + '</a>';
}

const showValue = (s, force) => {
    if((s == 0) && !force) return "";
    var label = `${s/1e9} TON 💎`;
    return label;
}
