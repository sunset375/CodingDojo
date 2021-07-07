class User:
    def __init__(self, username):
        self.name = username
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        if self.account_balance > amount:
            self.account_balance -= amount
            return self
        else:
            print("Insufficient Balance")
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")

    def make_transfer(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

user1 = User("Guido")
user2 = User("Justin")
user3 = User("Jenny")

user1.make_deposit(100).make_deposit(400).make_deposit(200).make_withdrawal(250).make_transfer(user3,100).display_user_balance()

user2.make_deposit(300).make_deposit(150).make_withdrawal(70).make_withdrawal(110).display_user_balance()

user3.make_deposit(2000).make_withdrawal(250).make_withdrawal(500).make_withdrawal(700).display_user_balance()

# (user1.display_user_balance())
# (user2.display_user_balance())
# (user3.display_user_balance())