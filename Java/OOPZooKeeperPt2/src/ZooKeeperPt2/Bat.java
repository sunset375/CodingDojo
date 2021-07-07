package ZooKeeperPt2;

public class Bat extends Mammal {
	
	public Bat() {
		this.setEnergyLevel(300);
	}
	
	
	
	public void fly() {
		System.out.println("Bat Ffffffflllllllllllyyyyyying");
		this.setEnergyLevel(this.getEnergyLevel() - 50);
	}
	
	
	public void eatHumans() {
		System.out.println("Bat eating Humans");
		this.setEnergyLevel(this.getEnergyLevel() + 25);
	}
	
	//Print the sound of a town on fire and decrease its energy by 100:
	public void attackTown() {
		System.out.println("Bat attacking Town");
		this.setEnergyLevel(this.getEnergyLevel() - 100);
	}

	
	
	
}
