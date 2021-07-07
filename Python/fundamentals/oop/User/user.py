class User:
    def __init__(self, username):
        self.name = username
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        if self.account_balance > amount:
            self.account_balance -= amount
        else:
            print("Insufficient Balance")
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")

    def make_transfer(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

user1 = User("Guido")
user2 = User("Justin")
user3 = User("Jenny")

user1.make_deposit(100)
user1.make_deposit(400)
user1.make_deposit(200)
user1.make_withdrawal(250)

user2.make_deposit(300)
user2.make_deposit(150)
user2.make_withdrawal(70)
user2.make_withdrawal(110)

user3.make_deposit(2000)
user3.make_withdrawal(250)
user3.make_withdrawal(500)
user3.make_withdrawal(700)

user1.make_transfer(user3,100)
print(user1.display_user_balance())
print(user2.display_user_balance())
print(user3.display_user_balance())