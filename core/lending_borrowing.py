class LendingBorrowing:
    def __init__(self, blockchain, contract_address, abi_file="lending_contract.abi.json"):
        self.blockchain = blockchain
        self.contract = blockchain.load_contract(contract_address, abi_file)

    def lend_tokens(self, token_address, amount, user_address, private_key):
        """Lend tokens to the lending pool."""
        tx = self.contract.functions.lend(token_address, amount).buildTransaction({
            'from': user_address,
            'nonce': self.blockchain.web3.eth.getTransactionCount(user_address),
        })
        signed_tx = self.blockchain.web3.eth.account.sign_transaction(tx, private_key)
        return self.blockchain.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

    def borrow_tokens(self, collateral_address, amount, user_address, private_key):
        """Borrow tokens by providing collateral."""
        tx = self.contract.functions.borrow(collateral_address, amount).buildTransaction({
            'from': user_address,
            'nonce': self.blockchain.web3.eth.getTransactionCount(user_address),
        })
        signed_tx = self.blockchain.web3.eth.account.sign_transaction(tx, private_key)
        return self.blockchain.web3.eth.sendRawTransaction(signed_tx.rawTransaction)
