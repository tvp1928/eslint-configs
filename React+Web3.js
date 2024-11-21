npm install web3 react-bootstrap
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const BalanceChecker = ({ address }) => {
    const [balance, setBalance] = useState(0);
    const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

    useEffect(() => {
        const fetchBalance = async () => {
            const weiBalance = await web3.eth.getBalance(address);
            setBalance(web3.utils.fromWei(weiBalance, 'ether'));
        };

        if (address) {
            fetchBalance();
        }
    }, [address]);

    return (
        <div>
            <h3>Balance: {balance} ETH</h3>
        </div>
    );
};

export default BalanceChecker;

import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const sendTransaction = async (fromAddress, privateKey, toAddress, amount) => {
    try {
        const tx = {
            to: toAddress,
            value: web3.utils.toWei(amount.toString(), 'ether'),
            gas: 21000,
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Транзакция успешно выполнена:', receipt);
    } catch (error) {
        console.error('Transaction sending error:', error);
    }
};

// Call example
sendTransaction(
    '0xSenderAddress',
    '0xPrivateKey',
    '0xRecipientAddress',
    0.01
);
