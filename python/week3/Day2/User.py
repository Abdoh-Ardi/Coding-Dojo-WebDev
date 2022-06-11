class User:  # here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    # adding the deposit method
    def make_deposit(self, amount):  # takes an argument that is the amount of the deposit
        self.account_balance += amount  # the specific user's account increases by the amount of the value received

    def make_withdrawl(self, amount):
        self.account_balance -= amount
    
    def display_user_balance(self):
        print("User:",self.name,"Balance:",self.account_balance)

    

abdohAccount = User("Abdoh","Abdoh@email.com")
abdohAccount.make_deposit(100)
abdohAccount.make_deposit(100)
abdohAccount.make_deposit(100)

abdohAccount.make_withdrawl(100)

abdohAccount.display_user_balance()

khaledAccount = User("Khaled","Khaled@email.com")
khaledAccount.make_deposit(100)
khaledAccount.make_deposit(100)
khaledAccount.make_withdrawl(100)
khaledAccount.make_withdrawl(100)
khaledAccount.display_user_balance()

ahmedAccount = User("Ahmed","Ahmed@email.com")
ahmedAccount.make_deposit(200)
ahmedAccount.make_withdrawl(100)
ahmedAccount.make_withdrawl(100)
ahmedAccount.make_withdrawl(100)
ahmedAccount.display_user_balance()