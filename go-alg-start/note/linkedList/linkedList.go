package linkedlist

// Node .
type Node struct {
	value interface{}
	prev  *Node
	next  *Node
}

// First .
func (node *Node) First() *Node {
	return node.next
}

// Last .
func (node *Node) Last() *Node {
	var curr = node
	for curr.next != nil {
		curr = curr.next
	}
	return curr
}

// Append .
func (node *Node) Append(value interface{}) *Node {
	var appendNode = Node{
		value: value,
		prev:  node,
		next:  nil,
	}
	node.Last().next = &appendNode
	return &appendNode
}

// AddFirst creates a node and prepends it at the beginning of the list.
func AddFirst(value interface{}) *Node {
	var head = Node{
		value: nil,
		prev:  nil,
		next:  nil,
	}
	head.next = &Node{
		value: value,
		prev:  &head,
		next:  nil,
	}
	return &head
}

// Length .
func (node *Node) Length() int {
	var length = 0
	node = node.next
	for node.next != nil {
		length++
		node = node.next
	}
	return length
}
