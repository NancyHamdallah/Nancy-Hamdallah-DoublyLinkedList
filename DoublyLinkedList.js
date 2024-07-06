const Node = require('./Node')

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = this.tail.next
        }
        this.length++
    }
    //The pop method removes the tail of the list
    pop(){
        if(!this.head){
            throw console.error('List is Empty');
        }
        else{
            const currentNode = this.tail
            if(!this.head.next){
                this.head = null
                this.tail = null
                this.length --
                return currentNode.value
            }
            
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
            return currentNode.value
        }
    }

    // The shift method removes the head of the list
    shift(){
        if(!this.head){
            return
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length --;
    }

    // The unshift method takes a value as a parameter and assigns it as the head of the list
    unshift(value){
        let currentNode = new Node(value)
        currentNode.next = this.head
        this.head.prev = currentNode
        this.head = currentNode
        this.length++

    }

    // The get method takes an index number as a parameter and returns the value
    // of the node at that index
    get(index){
        if(index<= this.length && index>=0){
            let currentNode = this.head;
            for(let i=1;i<=index;i++){
                
                if(i===index){
                    return currentNode.value
                }
                currentNode = currentNode.next
            }
        }
        else{
            console.log('Index is invalid')
        }
    }

    // The set method takes an index number and a value as parameters
    //and modifies the node value at the given index in the list
    set(index, val){
        if(index <= 0 )
            return false
        
        let current = this.head
        for(let i=1;i<index;i++){
            current = current.next
        }
        current.value = val
        return true

    }

    //The insert method takes an index number and a value as parameters, and inserts
    insert(index, val){

        if(index <= 0 )
            return false
        let newNode = new Node(val)
        let current = this.head
        if(index === 1){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.length ++
            return
        }
        for(let i=1;i<index;i++){
            current = current.next
        }
        let prevNode = current.prev
        newNode.next = current
        newNode.prev= current.prev
        current.prev = newNode
        prevNode.next = newNode
        this.length++
        return true
    }

    // The remove method takes an index number as a parameter 
    //and removes the node at the given index in the list
    remove(index){
        if(index <= 0 )
            return false

        let current = this.head
        let i=1
        while(i<index){
            i++
            current = current.next
        }
        let prevNode = current.prev
        let nextNode = current.next
        prevNode.next = nextNode
        nextNode.prev= prevNode
        this.length --
        return true

    }

    print(){
        if(!this.head)
            console.log('Empty List')
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
        console.log('------')

    }

}

module.exports = DoublyLinkedList