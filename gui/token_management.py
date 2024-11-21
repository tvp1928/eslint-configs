from PyQt5.QtWidgets import QMainWindow, QVBoxLayout, QLabel, QPushButton, QLineEdit, QWidget, QHBoxLayout
from PyQt5.QtCore import Qt

class TokenManagement(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Token Management")
        self.setGeometry(150, 150, 600, 400)

        # Main layout
        self.layout = QVBoxLayout()

        # Add token section
        self.add_token_label = QLabel("Add a New Token")
        self.add_token_label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.add_token_label)

        self.add_token_input = QLineEdit()
        self.add_token_input.setPlaceholderText("Enter Token Contract Address")
        self.layout.addWidget(self.add_token_input)

        self.add_token_button = QPushButton("Add Token")
        self.add_token_button.clicked.connect(self.add_token)
        self.layout.addWidget(self.add_token_button)

        # Token list
        self.token_list_label = QLabel("Your Tokens:")
        self.token_list_label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.token_list_label)

        self.token_list_display = QLabel("No tokens added yet.")
        self.token_list_display.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.token_list_display)

        # Set main container
        container = QWidget()
        container.setLayout(self.layout)
        self.setCentralWidget(container)

    def add_token(self):
        token_address = self.add_token_input.text()
        if token_address:
            # For simplicity, just display the added token
            current_text = self.token_list_display.text()
            if current_text == "No tokens added yet.":
                self.token_list_display.setText(token_address)
            else:
                self.token_list_display.setText(f"{current_text}\n{token_address}")
            self.add_token_input.clear()
