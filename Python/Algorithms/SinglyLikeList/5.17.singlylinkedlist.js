class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return this
    }
    }

    // remove and return the front value from the queue
    dequeue() {
        // your code here
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        // your code here
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        // your code here
    }

}