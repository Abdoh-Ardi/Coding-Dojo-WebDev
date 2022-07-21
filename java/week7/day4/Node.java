package week7.day4;

public class Node {

    private Node next;
    private Node previous;
    private String value;

    public Node(String value) {
        this.value = value;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node nextNode) {
        this.next = nextNode;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Node getPrevious() {
        return previous;
    }

    public void setPrevious(Node previous) {
        this.previous = previous;
    }

}
