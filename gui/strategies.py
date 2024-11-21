from PyQt5.QtWidgets import QMainWindow, QVBoxLayout, QLabel, QComboBox, QPushButton, QLineEdit, QWidget
from PyQt5.QtCore import Qt

class Strategies(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Farming & Lending Strategies")
        self.setGeometry(150, 150, 600, 400)

        # Main layout
        self.layout = QVBoxLayout()

        # Strategies title
        self.strategies_label = QLabel("Create or Manage Strategies")
        self.strategies_label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.strategies_label)

        # Choose a strategy type
        self.strategy_type_label = QLabel("Select Strategy Type:")
        self.strategy_type_label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.strategy_type_label)

        self.strategy_type_combo = QComboBox()
        self.strategy_type_combo.addItems(["Lending", "Farming"])
        self.layout.addWidget(self.strategy_type_combo)

        # Add strategy inputs
        self.token_input = QLineEdit()
        self.token_input.setPlaceholderText("Enter Token Address for Strategy")
        self.layout.addWidget(self.token_input)

        self.amount_input = QLineEdit()
        self.amount_input.setPlaceholderText("Enter Amount")
        self.layout.addWidget(self.amount_input)

        # Add strategy button
        self.add_strategy_button = QPushButton("Create Strategy")
        self.add_strategy_button.clicked.connect(self.create_strategy)
        self.layout.addWidget(self.add_strategy_button)

        # Set main container
        container = QWidget()
        container.setLayout(self.layout)
        self.setCentralWidget(container)

    def create_strategy(self):
        strategy_type = self.strategy_type_combo.currentText()
        token = self.token_input.text()
        amount = self.amount_input.text()
        if token and amount:
            print(f"Created {strategy_type} strategy for {amount} of token {token}")
            # Add actual blockchain interaction here
