class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Ninja name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

const John = new Ninja("John");

John.sayName();
John.showStats();
John.drinkSake();
John.showStats();