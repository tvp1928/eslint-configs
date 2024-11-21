class Shield:
    def __init__(self):
        self.strategies = {}

    def create_shield(self, shield_name, tokens, risk_level):
        """Create a new shield strategy."""
        self.strategies[shield_name] = {
            "tokens": tokens,
            "risk_level": risk_level,
        }
        return f"Shield {shield_name} created successfully."

    def get_shield(self, shield_name):
        """Retrieve shield details."""
        return self.strategies.get(shield_name, "Shield not found.")

    def delete_shield(self, shield_name):
        """Delete an existing shield."""
        if shield_name in self.strategies:
            del self.strategies[shield_name]
            return f"Shield {shield_name} deleted successfully."
        return "Shield not found."
