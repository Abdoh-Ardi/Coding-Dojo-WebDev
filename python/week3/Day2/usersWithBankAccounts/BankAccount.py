class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.1, balance=0):
        # your code here! (remember, this is where we specify the attributes for our class)
        self.int_rate = int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        # your code here
        self.balance += amount
        return self

    def withdraw(self, amount):
        # your code here
        self.balance -= amount
        return self 

    def display_account_info(self):
        # your code here
        print("Balance",self.balance)

    def yield_interest(self):
        # your code here
        print("Yield interest:",self.int_rate)
        return self


khaledAccount = BankAccount().deposit(100).deposit(100).deposit(100).withdraw(100).yield_interest().display_account_info()

ahmedAccount = BankAccount().deposit(100).deposit(100).deposit(100).withdraw(200).yield_interest().display_account_info()