package week7.day4;

public class LList {
    protected Node head;// first node
    // private int size;//not needed

    public void add(Node node) {
        if (head == null) {
            head = node;
        } else {
            getLastNode().setNext(node);
        }
    }

    public void addFirst(Node node) {
        node.setNext(head);
        head = node;// removing the old value from head
    }

    public void removeLast() {
        removeLast(head);
    }

    private void removeLast(Node node) {
        if (node.getNext().getNext() == null) {
            node.setNext(null);// removed from chain
            return;
        } else {
            removeLast(node.getNext());
        }
    }

    public void removeFirst() {
        head = head.getNext();
    }

    public void removeAt(int index) {
        // if first element
        if (index == 0) {
            removeFirst();
            // otherwise
        } else {
            Node tempPtr = get(index - 1);// element right before it
            tempPtr.setNext(tempPtr.getNext().getNext());// point to the next one
        }

    }

    public Node get(int index) {
        return get(head, index);
    }

    private Node get(Node node, int index) {
        if (index == 0) {
            return node;
            // if indexoutofbound
        } else if (index != 0 && node.getNext() == null) {
            throw new IndexOutOfBoundsException();
        } else {
            return get(node.getNext(), index - 1);
        }

    }

    public Node getLastNode() {
        return getLastNode(head);
    }

    private Node getLastNode(Node node) {
        if (node.getNext() == null) {
            return node;
        }
        return getLastNode(node.getNext());
    }

    public void displayAll() {
        String text = "";
        System.out.println(displayAll(head, text));
    }

    private String displayAll(Node node, String text) {
        text += node.getValue() + "\n";
        if (node.getNext() == null) {
            return text;
        } else {
            // text += node.getValue() + "\n";
            return displayAll(node.getNext(), text);
        }
    }
}
