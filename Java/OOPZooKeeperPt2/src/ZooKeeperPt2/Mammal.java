package ZooKeeperPt2;

public class Mammal {
	//member variable
	private int energyLevel = 100;
	
	//Empty constructor
	public Mammal() {}
	
	public int displayEnergy() {
		System.out.println(this.energyLevel);
		return energyLevel;
	}
	
	// Getter and setter
	public int getEnergyLevel() {
		return this.energyLevel;
	}
	
	public void setEnergyLevel(int energy) {
		this.energyLevel = energy;
	}
}
