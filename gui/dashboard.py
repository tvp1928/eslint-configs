from PyQt5.QtWidgets import QMainWindow, QVBoxLayout, QLabel, QPushButton, QWidget
from PyQt5.QtCore import Qt

class Dashboard(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Crypto Desktop Wallet")
        self.setGeometry(100, 100, 800, 600)

        # Create main layout
        self.layout = QVBoxLayout()

        # Wallet balance label
        self.balance_label = QLabel("Balance: Loading...")
        self.balance_label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.balance_label)

        # Button to open token management
        self.token_button = QPushButton("Manage Tokens")
        self.token_button.clicked.connect(self.open_token_management)
        self.layout.addWidget(self.token_button)

        # Button to open strategies
        self.strategies_button = QPushButton("View Strategies")
        self.strategies_button.clicked.connect(self.open_strategies)
        self.layout.addWidget(self.strategies_button)

        # Set the main container
        container = QWidget()
        container.setLayout(self.layout)
        self.setCentralWidget(container)

    def open_token_management(self):
        from gui.token_management import TokenManagement
        self.token_management_window = TokenManagement()
        self.token_management_window.show()

    def open_strategies(self):
        from gui.strategies import Strategies
        self.strategies_window = Strategies()
        self.strategies_window.show()
