require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");


const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
      },
      {
        version: "0.8.0",
        settings: {},
      },
      
    ]
  },
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};