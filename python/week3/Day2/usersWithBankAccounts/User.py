from BankAccount import BankAccount


class User: 
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.2,balance=0)

    
    def make_deposit(self, amount):  
        self.account.deposit(amount) 
        return self

    def make_withdrawl(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display_user_balance(self):
        print("User:",self.name,"Balance:",self.account.balance)


abdohAccount = User("Abdoh","Abdoh@email.com").make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawl(100).display_user_balance()
khaledAccount = User("Khaled","Khaled@email.com").make_deposit(100).make_deposit(100).make_withdrawl(100).make_withdrawl(100).display_user_balance()
ahmedAccount = User("Ahmed","Ahmed@email.com").make_deposit(200).make_withdrawl(100).make_withdrawl(100).make_withdrawl(100).display_user_balance()