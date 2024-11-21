// Connect to Ethereum via public RPC
web3.setProvider(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Check balance
async function getBalance(address) {
    const balance = await web3.eth.getBalance(address);
    console.log(“Balance:”, web3.utils.fromWei(balance, 'ether'), “ETH”);
}

// Example call
getBalance('0xYourEthereumAddress');

async function sendTransaction(fromAddress, privateKey, toAddress, amount) {
    const tx = {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount.toString(), 'ether'),
        gas: 21000,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("Transaction completed, hash:", receipt.transactionHash);
}

// Example call
sendTransaction('0xYourAddress', '0xYourPrivateKey', '0xRecipientAddress', 0.01);

// MetaMask-like connection
if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
    console.log(“Connected to:”, web3.currentProvider);
}

import React, { useState } from 'react';

const Wallet = () => {
    const [wallet, setWallet] = useState(null);

    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        setWallet(newWallet);
    };

    return (
        <div>
            <button onClick={createWallet}>Создать кошелек</button>
            {wallet && (
                <div>
                    <p>Address: {wallet.address}</p>
                    <p>Private Key: {wallet.privateKey}</p>
                </div>
            )}
        </div>
    );
};

export default Wallet;
