const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const { createLegacyWallet, getBalance } = require("./Wallet");
require('dotenv').config()


getBalance()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(createLegacyWallet(testnet));