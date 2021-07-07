class BankAccount:
	def __init__(self, int_rate, balance):
		self.account_balance = balance
		self.int_rate = int_rate

	def deposit(self, amount):
		self.account_balance += amount
		return self

	def withdraw(self, amount):
		if self.account_balance > amount:
			self.account_balance -= amount
			return self
		else:
			print("Insufficient funds: Charging a $5 fee")
			self.account_balance -= 5
			return self
			
	def display_account_info(self):
		print(f"Balance: ${self.account_balance}")
	
	def yield_interest(self):
		if self.account_balance > 0:
			self.account_balance *= self.int_rate
			return self


user1 = BankAccount(1.01, 0)
user2 = BankAccount(1.02, 1000)

user1.deposit(100).deposit(200).deposit(700).withdraw(1050).yield_interest().display_account_info()
user2.deposit(1000).deposit(100).withdraw(200).withdraw(300).withdraw(200).withdraw(200).yield_interest().display_account_info()

user1
user2