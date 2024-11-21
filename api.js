import axios from 'axios';

const fetchStakingRewards = async () => {
    const response = await axios.get('https://stake.lido.fi/api/stats');
    console.log('staking stats:', response.data);
};

fetchStakingRewards();
const crypto = require('crypto');

const encryptPrivateKey = (privateKey, password) => {
    const cipher = crypto.createCipher('aes-256-cbc', password);
    let encrypted = cipher.update(privateKey, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

const decryptPrivateKey = (encryptedKey, password) => {
    const decipher = crypto.createDecipher('aes-256-cbc', password);
    let decrypted = decipher.update(encryptedKey, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

// Example
const encryptedKey = encryptPrivateKey('0xYourPrivateKey', 'password123');
console.log('Encrypted Key:', encryptedKey);

const decryptedKey = decryptPrivateKey(encryptedKey, 'password123');
console.log('Decrypted Key:', decryptedKey);
npm install axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NFTViewer = ({ walletAddress }) => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const response = await axios.get(
                    `https://api.opensea.io/api/v1/assets?owner=${walletAddress}`
                );
                setNfts(response.data.assets);
            } catch (error) {
                console.error("NFT download error:", error);
            }
        };

        if (walletAddress) fetchNFTs();
    }, [walletAddress]);

    return (
        <div>
            <h3>NFT Collection:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {nfts.map((nft) => (
                    <div key={nft.id} style={{ margin: '10px', textAlign: 'center' }}>
                        <img src={nft.image_url} alt={nft.name} style={{ width: '150px' }} />
                        <p>{nft.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NFTViewer;
npm install axios
import axios from 'axios';

const fetchMarketData = async (symbol) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
        console.log(`Цена ${symbol.toUpperCase()}: $${response.data[symbol].usd}`);
    } catch (error) {
        console.error('Data retrieval error:', error);
    }
};

// Call example
fetchMarketData('ethereum');
npm install @uniswap/sdk web3
import { Token, WETH, TradeType, Fetcher, Route, Trade } from '@uniswap/sdk';
import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const swapTokens = async (tokenAddress, amountIn, slippageTolerance, recipientAddress) => {
    const DAI = new Token(1, tokenAddress, 18);
    const weth = WETH[1];

    // We get a couple WETH/DAI
    const pair = await Fetcher.fetchPairData(DAI, weth);

    // Create a route and a transaction
    const route = new Route([pair], weth);
    const trade = new Trade(route, amountIn, TradeType.EXACT_INPUT);

    console.log('Calculated:', trade.executionPrice.toSignificant(6), 'DAI per WETH');
    console.log('Recipient:', recipientAddress);
};

// Call example
swapTokens('0x6B175474E89094C44Da98b954EedeAC495271d0F', 1, 0.5, '0xRecipientAddress');
import axios from 'axios';

const fetchStakingData = async () => {
    try {
        const response = await axios.get('https://stake.lido.fi/api/stats');
        console.log('Total bid in ETH:', response.data.totalPooledEther);
        console.log('Average annual yield:', response.data.apr);
    } catch (error) {
        console.error('Error receiving steaking data:', error);
    }
};

// Call example
fetchStakingData();
import axios from 'axios';

const fetchUserNFTs = async (walletAddress) => {
    try {
        const response = await axios.get(`https://api.opensea.io/api/v1/assets`, {
            params: {
                owner: walletAddress,
                order_direction: 'desc',
                offset: 0,
                limit: 10,
            },
        });

        response.data.assets.forEach((nft) => {
            console.log('NFT Title:', nft.name);
            console.log('Image:', nft.image_url);
        });
    } catch (error) {
        console.error('NFT Receipt Error:', error);
    }
};

// Call example
fetchUserNFTs('0xWalletAddress');
npm install axios
import axios from 'axios';

const fetchTransactionHistory = async (address) => {
    const apiKey = 'YOUR_ETHERSCAN_API_KEY';
    try {
        const response = await axios.get(
            `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
        );
        response.data.result.forEach((tx) => {
            console.log('Transaction:', tx.hash);
            console.log('From:', tx.from, 'Кому:', tx.to);
            console.log('Summation:', Web3.utils.fromWei(tx.value, 'ether'), 'ETH');
        });
    } catch (error) {
        console.error('Transaction Receipt Error:', error);
    }
};

// Call example
fetchTransactionHistory('0xWalletAddress');
import axios from 'axios';

const fetchCryptoRates = async (symbols) => {
    try {
        const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti`, {
            params: {
                fsyms: symbols.join(','),
                tsyms: 'USD',
            },
        });

        console.log('Cryptocurrency rates:');
        Object.entries(response.data).forEach(([symbol, rates]) => {
            console.log(`${symbol}: $${rates.USD}`);
        });
    } catch (error) {
        console.error('Course Retrieval Error:', error);
    }
};

// Call example
fetchCryptoRates(['BTC', 'ETH', 'SOL']);


