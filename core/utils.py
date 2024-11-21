import json

def load_abi(file_path):
    """Load a JSON ABI file."""
    with open(file_path, 'r') as file:
        return json.load(file)

def format_token_balance(balance, decimals=18):
    """Format a token balance to human-readable form."""
    return balance / (10 ** decimals)
