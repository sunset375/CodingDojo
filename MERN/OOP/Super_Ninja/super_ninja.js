class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Ninja name is ${this.name}`);
        // 'ninja name is ' + this.name
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



class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        const drink = super.drinkSake();
        drink;
        // super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }


    showStats() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
    }
}

console.log('--------------------------------------------------------');
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();