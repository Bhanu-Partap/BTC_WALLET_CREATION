const { PrivateKey } = require("bitcore-lib");
const { mainnet, testnet } = require("bitcore-lib/lib/networks");

const createLegacyWallet = (network = testnet) => {
  let privateKey = new PrivateKey();
  let address = privateKey.toAddress(network);

  return {
    privateKey: privateKey.toString(),
    address: address.toString()
  }
}

module.exports = {
  createLegacyWallet
}