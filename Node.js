npm install bitcoinjs-lib ethereumjs-wallet web3
const bitcoin = require('bitcoinjs-lib');
const Wallet = require('ethereumjs-wallet').default;

// Bitcoin wallet generation
function generateBitcoinWallet() {
    const keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    console.log('Bitcoin Address:', address);
    console.log('Private Key:', keyPair.toWIF());
    return { address, privateKey: keyPair.toWIF() };
}

// Ethereum wallet generation
function generateEthereumWallet() {
    const ethWallet = Wallet.generate();
    console.log('Ethereum Address:', ethWallet.getAddressString());
    console.log('Private Key:', ethWallet.getPrivateKeyString());
    return {
        address: ethWallet.getAddressString(),
        privateKey: ethWallet.getPrivateKeyString(),
    };
}

// Function call
generateBitcoinWallet();
generateEthereumWallet();
