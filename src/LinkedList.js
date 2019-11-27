class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  add(element) {
  	var newNode = new Node(element);
  	var current;
	if (this.head === null) {
		this.head = newNode;
	} else {
		current = this.head;
		/**
			Loop till you reach the last element
		**/
		while(current.next) {
			current = current.next;
		}

		current.next = newNode;
	}

	this.size++;
  }

  insertAt(element, index) {

  	/*
  	*  If index is greater than 0 and it is greater than the size return false 
  	*/
  	if (index > 0 && index > this.size) {
  		return false;
  	} else {
  		let node = new Node(element);
  		var curr, prev;
  		curr = this.head;

  		// if index is 0, completely shift the head to the next of the existing node & mark the incoming node as head
  		if (index === 0) {
  			node.next = head;
  			this.head = node;
  		} else {

  			/*
  			* If the index is greater than 
  			*/
  			curr = this.head;
  			let it = 0;
  			/*
  			* Iterate over the list to find the position to insert
  			*/
  			while (it < index) {
  				it++;
  				prev = curr;
  				curr = curr.next;
  			}

  			node.next = curr;
  			prev.next = node;
  		}
  		this.size++;
  	}
  }
  /*
  * Remove an element from a specific index
  */
  removeFromIndex(index) {
  	if (index > 0 && index > this.size) {
  		return -1;
  	} else {
  		var curr, prev, it = 0;
  		curr = this.head;
  		prev = curr;

  		if (index === 0) {
  			this.head = curr.next;
  		} else {
  			/*
  			* iterate over the list to the postion
  				to remove an element
  			*/
  			while(it < index) {
  				it++;
  				prev = curr;
  				curr = curr.next;
  			}

  			//remove the element
  			prev.next = curr.next;
  		}
  	}
  }
}







