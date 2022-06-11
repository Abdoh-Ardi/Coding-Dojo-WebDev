class User:  # here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    # adding the deposit method
    def make_deposit(self, amount):  # takes an argument that is the amount of the deposit
        self.account_balance += amount  # the specific user's account increases by the amount of the value received
        return self

    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self
    
    def display_user_balance(self):
        print("User:",self.name,"Balance:",self.account_balance)

    

abdohAccount = User("Abdoh","Abdoh@email.com")
abdohAccount.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawl(100).display_user_balance()

khaledAccount = User("Khaled","Khaled@email.com").make_deposit(100).make_deposit(100).make_withdrawl(100).make_withdrawl(100).display_user_balance()

ahmedAccount = User("Ahmed","Ahmed@email.com").make_deposit(200).make_withdrawl(100).make_withdrawl(100).make_withdrawl(100).display_user_balance()