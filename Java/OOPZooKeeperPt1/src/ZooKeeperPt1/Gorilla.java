package ZooKeeperPt1;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println("The gorilla threw something.");
		this.setEnergyLevel(this.getEnergyLevel() - 5);
	}
	

	public void eatBanana() {
		System.out.println("The gorilla ate a banana.");
		this.setEnergyLevel(this.getEnergyLevel() + 10);
	}
	

	public void climb() {
		System.out.println("The gorilla climbed a tree.");
		this.setEnergyLevel(this.getEnergyLevel() - 10);
	}
}
