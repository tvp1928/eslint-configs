from PyQt5.QtWidgets import QApplication
from gui.dashboard import Dashboard

def main():
    app = QApplication([])
    dashboard = Dashboard()
    dashboard.show()
    app.exec_()

if __name__ == "__main__":
    main()
