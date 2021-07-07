package BankAccountPackage;

public class BankAccountTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BankAccount acc1 = new BankAccount(50000, 20000);
		
		BankAccount acc2 = new BankAccount(20000, 10000);
		
		System.out.println(acc1.getAccountNumber());
		System.out.println(acc1.getCheckingBalance());
		System.out.println(acc1.getSavingsBalance());
		
		
		acc1.accountBalance();
		acc2.accountBalance();
		
		acc1.depositMoneyToAccount(700, "checking");
		acc1.depositMoneyToAccount(3000, "savings");

		acc2.depositMoneyToAccount(8000, "checking");
		acc2.depositMoneyToAccount(5000, "savings");

		
		acc1.withdrawMoney(30000, "checking");
		
		
		
		acc1.accountBalance();
		acc2.accountBalance();
		
		System.out.println("Number of Accounts created: " + BankAccount.totalNumAccountsCreated);
		System.out.println("Amount of money stored in the bank: " + BankAccount.totalAmountMoneyStored);
			

	}

}
