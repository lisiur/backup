package main

import "fmt"

// Node .
type Node struct {
	value string
	next  *Node
}

// Reverse .
func (node *Node) Reverse() *Node {
	var prevNode, nextNode *Node
	if node.next == nil {
		return node
	}
	prevNode = node
	nextNode = node.next
	prevNode.next = nil
	for nextNode != nil {
		node = nextNode
		nextNode = node.next
		node.next = prevNode
		prevNode = node
	}
	return node
}

func buildList(values []string) *Node {
	if len(values) == 0 {
		return &Node{}
	}

	var head = &Node{
		value: values[0],
	}
	var curr = head
	for i := 1; i < len(values); i++ {
		node := &Node{
			value: values[i],
		}
		curr.next = node
		curr = node
	}
	return head
}

func (node *Node) String() string {
	return node.value
}

func (node *Node) show() {
	for node != nil {
		fmt.Println(node)
		node = node.next
	}
}

func main() {
	var head = buildList([]string{})
	head.show()
	var reversed = head.Reverse()
	reversed.show()
}
