const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/XuJCg6EP6vpiOWxz9aaDR4ja03SVQ6Lx";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [
    /* "0xb443", // block 46147
    false  // retrieve the full transaction object in transactions array */
    "0x405106A221020a471836f18a07D7611677F4F0a1", "latest"
  ]
}).then((response) => {
  console.log(response.data.result);
});