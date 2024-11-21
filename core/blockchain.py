from web3 import Web3

class Blockchain:
    def __init__(self, rpc_url):
        self.web3 = Web3(Web3.HTTPProvider(rpc_url))
        if not self.web3.isConnected():
            raise Exception("Failed to connect to the blockchain.")

    def get_balance(self, address):
        """Get the ETH balance of an address."""
        balance = self.web3.eth.get_balance(address)
        return self.web3.fromWei(balance, 'ether')

    def load_contract(self, address, abi_file):
        """Load a contract using its address and ABI."""
        with open(f'contracts/{abi_file}', 'r') as file:
            abi = file.read()
        return self.web3.eth.contract(address=Web3.toChecksumAddress(address), abi=abi)
