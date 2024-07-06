const Node = require('./Node.js')
const DoublyLinkedList = require('./DoublyLinkedList')



const newList = new DoublyLinkedList();
newList.push(5)
newList.push(7)
newList.push(9)
newList.print()
console.log('index2:'+newList.get(2))
console.log('Insertion at index2, value -17 is '+ newList.insert(2,-17))
console.log('Insertion at index-1, value -17 is '+ newList.insert (-1,-5))
newList.print()

newList.pop()

newList.shift()

newList.unshift(15)
newList.print()
newList.set(3,4)
newList.print()
newList.insert(1,-9)
newList.print()
console.log(newList.length)


