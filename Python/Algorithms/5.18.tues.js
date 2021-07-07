class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }


    // add a given value to your stack
    push(value){
        var newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }
    // remove and return the top value
    pop(){
        var pull = null
        if(!this.top){
            return "nothing here"
        }
        else{
            pull = this.top
            this.top = this.top.next
            pull.next = null
            return pull
        }
    }

    // return (don't remove) the top value of a stack
    returntop() {
        if(!this.top){
            return "nothing here"
        }
        else{
            return this.top.value
        }
        }
}
const sll = new SLStack();
sll.push(10)
console.log(sll)
console.log(sll.returntop())
sll.pop()
console.log(sll)