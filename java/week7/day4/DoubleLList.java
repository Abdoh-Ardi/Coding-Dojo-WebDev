package week7.day4;

public class DoubleLList extends LList {
    private Node tail;

    @Override
    public void add(Node node) {
        // if its the only element
        if (head == null) {
            head = node;
            tail = node;
        } else {
            getLastNode().setNext(node);// Node1 -n> newNode
            // Node1 -n> <- newNode 
            getLastNode().getNext().setPrevious(getLastNode());
            tail = getLastNode().getNext();// update tail;
        }
    }

    @Override
    public void addFirst(Node node) {
        super.addFirst(node);

        // node.setPrevious();
    }

    @Override
    public Node getLastNode() {
        return tail;
    }
}
