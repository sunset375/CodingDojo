public class BankAccountTest {
    
    public static void main(String[] args){
        BankAccount jeffBezosAccount = new BankAccount("Jeff", "Bezos");
        BankAccount lilWayneAccount = new BankAccount("Wayne", "Carter");
        BankAccount jColeAccount = new BankAccount("Jermaine", "Cole");


        System.out.println(jeffBezosAccount.getAccountBalance());
        jeffBezosAccount.deposit(100000.00);
        System.out.println(jeffBezosAccount.getAccountBalance());
        jColeAccount.deposit();
        System.out.println(jColeAccount.getAccountBalance());
        jColeAccount.deposit(500.00);
        System.out.println(jColeAccount.getAccountBalance());


        jeffBezosAccount.transferMoney(jColeAccount, 5000.00);
        System.out.println("J cole has this much after jeff bezos transferred mula" +  jColeAccount.getAccountBalance());


    }
}
