const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const { createLegacyWallet } = require("./Wallet");

console.log(createLegacyWallet(testnet));