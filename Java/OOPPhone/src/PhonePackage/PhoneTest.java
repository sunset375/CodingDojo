package PhonePackage;

public class PhoneTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Iphone mjPhone = new Iphone("11", 100, "T-Mobile", "Ring Ring");
		mjPhone.displayInfo();
		System.out.println(mjPhone.ring());
		System.out.println(mjPhone.unlock());
		
		System.out.println("********************************************************");
		Galaxy gal = new Galaxy("s20", 100, "Verizon", "DADADADA RARARA");
		
		gal.displayInfo();
		System.out.println(gal.ring());
		System.out.println(gal.unlock());
		
		
		
	}

}
