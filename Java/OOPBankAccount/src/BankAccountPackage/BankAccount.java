package BankAccountPackage;
import java.util.Random;


public class BankAccount {
	
	//member variables
	private String accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	


	public static int totalNumAccountsCreated;
	public static double totalAmountMoneyStored;
	
	//constructor

	public BankAccount(double checkingBalanceInput, double savingsBalanceInput) {
		this.checkingBalance = checkingBalanceInput;
		this.savingsBalance = savingsBalanceInput;
		this.generateAccountNumber();
		
		totalNumAccountsCreated++;
		totalAmountMoneyStored += checkingBalanceInput + savingsBalanceInput;

		
	}
	
	
	public String generateAccountNumber() {
		Random rand = new Random();
		int rand_int;
		String result = "";
		
		for(int i = 0; i<10; i++) {
			rand_int = rand.nextInt(10);
			result += rand_int;
					
		}
		System.out.println("Account number: " + result);
		
		accountNumber = result;
		
		return result;
	}

	
	public void depositMoneyToAccount(double depositAmount, String accountType) {
		if (accountType == "checking") {
			this.checkingBalance += depositAmount;
			totalAmountMoneyStored += depositAmount;
			System.out.println(depositAmount + " was deposited into your checking account");
			
		}
		else if (accountType == "savings"){
			this.savingsBalance += depositAmount;
			this.checkingBalance += depositAmount;
			totalAmountMoneyStored += depositAmount;
			System.out.println(depositAmount + " was deposited into your savings account");
		}
		
		
		
		
	}
	
	

	public void withdrawMoney(double withdrawAmount, String accountType) {
		if(accountType == "checking") {
			if(withdrawAmount <= this.checkingBalance) {
				this.checkingBalance -= withdrawAmount;
				totalAmountMoneyStored -= withdrawAmount;
				System.out.println(withdrawAmount + " was withdrawn from checking account: " + this.getAccountNumber());
			}
			else {
				System.out.println("You do not have enough balance to withdraw");
				System.out.println("Checking Account Balance: " + this.getCheckingBalance());
			}
			
		}
		
		else if(accountType == "savings") {
			if(withdrawAmount <= this.savingsBalance) {
				this.savingsBalance -= withdrawAmount;
				totalAmountMoneyStored -= withdrawAmount;
				System.out.println(withdrawAmount + " was withdrawn from savings account: " + this.getAccountNumber());
			}
			else {
				System.out.println("You do not have enough balance to withdraw");
				System.out.println("Savings Account Balance: " + this.getSavingsBalance());
			}
		}
			
	}
	
	

	public void accountBalance() {
		System.out.println("Checking Account Balance: " + this.getCheckingBalance());
		System.out.println("Savings Account Balance: " + this.getSavingsBalance());
		System.out.println("Total Account Balance: " + (this.getCheckingBalance() + this.getSavingsBalance()));
	}
	
	
	
	public String getAccountNumber() {
		return accountNumber;
	}


	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}


	public double getCheckingBalance() {
		return checkingBalance;
	}


	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}


	public double getSavingsBalance() {
		return savingsBalance;
	}


	public void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}


	public static int getTotalNumAccountsCreated() {
		return totalNumAccountsCreated;
	}


	public static void setTotalNumAccountsCreated(int totalNumAccountsCreated) {
		BankAccount.totalNumAccountsCreated = totalNumAccountsCreated;
	}


	public static double getTotalAmountMoneyStored() {
		return totalAmountMoneyStored;
	}


	public static void setTotalAmountMoneyStored(double totalAmountMoneyStored) {
		BankAccount.totalAmountMoneyStored = totalAmountMoneyStored;
	}

	
	

}
