
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        //create new Node
        let node = new Node(element);
        //if the head is null add the element and make it head
        if (this.head == null) {
            this.head = node;
            this.size++;
        } else {
            let current = this.head;
            //iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            //add Node
            current.next = node;
        }
        this.size++;
    }
}

let linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
console.log(linkedList);