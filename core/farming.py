class Farming:
    def __init__(self, blockchain, contract_address, abi_file="farming_contract.abi.json"):
        self.blockchain = blockchain
        self.contract = blockchain.load_contract(contract_address, abi_file)

    def stake_tokens(self, pool_address, amount, user_address, private_key):
        """Stake tokens in a farming pool."""
        tx = self.contract.functions.stake(pool_address, amount).buildTransaction({
            'from': user_address,
            'nonce': self.blockchain.web3.eth.getTransactionCount(user_address),
        })
        signed_tx = self.blockchain.web3.eth.account.sign_transaction(tx, private_key)
        return self.blockchain.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

    def get_yield_info(self, pool_address):
        """Retrieve yield information for a specific pool."""
        return self.contract.functions.getYield(pool_address).call()

    def withdraw_rewards(self, user_address, private_key):
        """Withdraw farming rewards."""
        tx = self.contract.functions.withdrawRewards().buildTransaction({
            'from': user_address,
            'nonce': self.blockchain.web3.eth.getTransactionCount(user_address),
        })
        signed_tx = self.blockchain.web3.eth.account.sign_transaction(tx, private_key)
        return self.blockchain.web3.eth.sendRawTransaction(signed_tx.rawTransaction)
