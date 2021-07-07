package SportStarPackage;

public class AtheleteTest {

	public static void main(String[] args) {
		Athelete athelete1 = new Athelete("Lebron", "James");
//		System.out.println(lebron.getFirstName());
//		System.out.println(lebron.getSpeed());
		System.out.println(athelete1.displayStats());
		
		BasketballPlayer stephCurry = new BasketballPlayer("Stephen", "Curry", 100);
		BasketballPlayer shaq = new BasketballPlayer("Shaq", "O'neal", 15);
		
		System.out.println(stephCurry.displayStats());
		stephCurry.shootBall();
		shaq.shootBall();
		System.out.println(stephCurry.displayStats());
		
		
		Swimmer phelps = new Swimmer("Michael", "Phelps", 100);
		System.out.println(phelps.displayStats());
		
		Swimmer someoneWhoDidNOtWinGoldForUSA = new Swimmer("Somebody", "IDK");
		System.out.println(someoneWhoDidNOtWinGoldForUSA.displayStats());
		
		
	}

}
