const { PrivateKey } = require("bitcore-lib");
const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const axios =  require("axios")

const createLegacyWallet = (network = testnet) => {
  let privateKey = new PrivateKey();
  let address = privateKey.toAddress(network);

  return {
    privateKey: privateKey.toString(),
    address: address.toString()
  }
}

const getBalance = async () => {
    let totalAmountAvailable = 0;
  
    const response = await axios.get(
      `${process.env.UTXO_API}/${process.env.WALLET_ADDRESS}?includeScript=true&unspentOnly=true`
    );
  
    for (const element of response.data.txrefs) {
      totalAmountAvailable += element.value;
    }
  
    return totalAmountAvailable;
  }
  

module.exports = {
  createLegacyWallet,
  getBalance
}