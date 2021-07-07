class User:
	def __init__(self, username, email):
		self.name = username
		self.email = email
		self.account = BankAccount(1.02, 0)

	def deposit(self, amount):
		self.account.balance += amount
		return self

	def withdraw(self, amount):
		if self.account.balance >= amount:
			self.account.balance -= amount
			return self
		else:
			print("Insufficient funds: Charging a $5 fee")
			self.account.balance -= 5
			return self

	def display_user_balance(self):
		print(f"User: {self.name}, Balance: ${self.account.balance}")
	
	def yield_interest(self):
		if self.account.balance > 0:
			self.account.balance *= self.account.intrate
			return self

	def transfer(self, other_user, amount):
		self.account.balance -= amount
		other_user.account.balance += amount
		return self

class BankAccount:
	def __init__(self, int_rate, balance):
		self.balance = balance
		self.intrate = int_rate

	def deposit(self, amount):
		self.balance += amount
		return self

	def withdraw(self, amount):
		if self.balance >= amount:
			self.balance -= amount
			return self
		else:
			print("Insufficient funds: Charging a $5 fee")
			self.balance -= 5
			return self
			
	def display_account_info(self):
		print(f"Balance: ${self.balance}")
	
	def yield_interest(self):
		if self.balance > 0:
			self.balance  *= self.intrate
			return self


user1 = User("Lebron James", "lbj@nba.com")
user2 = User("Kobe Bryant", "kb@nba.com")



user1.deposit(100).deposit(200).deposit(700).withdraw(1050).yield_interest().display_user_balance()
user2.deposit(1000).deposit(100).withdraw(200).withdraw(300).withdraw(200).withdraw(200).yield_interest().display_user_balance()

user1
user2