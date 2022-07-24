package week7.day4;

public class DoubleLList extends LList {
    private Node tail;
    private int size;

    @Override
    public void add(Node node) {
        // if its the only element
        if (head == null) {
            head = node;
            tail = node;
            size = 1;
        } else {
            getLastNode().setNext(node);// lastNode -n> newNode
            getLastNode().getNext().setPrevious(getLastNode());// lastNode <p- newNode
            tail = getLastNode().getNext();// tail -> newNode
            size++;
        }
    }

    // public void push(Node node) {
    // addFirst(node);
    // }

    @Override
    public void addFirst(Node node) {
        head.setPrevious(node);// current head should point to this node
        super.addFirst(node);
        size++;
    }

    @Override
    public void removeLast() {
        // super.removeLast();
        // if this is the only element remove it
        if (head.getNext() == null && head.getPrevious() == null) {
            head = null;
            tail = null;
            size = 0;
        }
        tail = tail.getPrevious();
        tail.setNext(null);
        size--;
    }

    @Override
    public void removeFirst() {
        // if this is the only element remove it
        if (head.getNext() == null && head.getPrevious() == null) {
            head = null;
            tail = null;
            size = 0;
        }
        super.removeFirst();
        head.setPrevious(null);
        size--;
    }

    public Node pop() {
        Node tempPtr = null;
        if (head.getNext() == null && head.getPrevious() == null) {
            tempPtr = head;
            head = null;
            tail = null;
            size = 0;
            return tempPtr;
        }
        tempPtr = tail;
        tail = tail.getPrevious();
        tail.setNext(null);
        size--;
        return tempPtr;
    }

    // TODO confirm this : remove At can be the same as single linkedlist(parent)
    @Override
    public void removeAt(int index) {
        if (index < 0 || index > Size()) {
            throw new IndexOutOfBoundsException();
        }
        if (index == 0) {
            removeFirst();
        } else {
            Node tempPtr = get(index);
            // the next node is pointing to previous node
            tempPtr.getNext().setPrevious(tempPtr.getPrevious());
            // the previous node is pointing to next node
            tempPtr.getPrevious().setNext(tempPtr.getNext());
            // tempPtr=null;no need
            size--;
        }
    }

    // TODO confirm this : get can be the same as single linkedlist(parent)
    @Override
    public Node getLastNode() {
        return tail;
    }

    public void printValuesBackward() {
        String text = "";
        System.out.println(printValuesBackward(tail, text));
    }

    private String printValuesBackward(Node node, String text) {
        text += node.getValue() + "\n";
        if (node.getPrevious() == null) {
            return text;
        } else {
            // text += node.getValue() + "\n";
            return printValuesBackward(node.getPrevious(), text);
        }
    }

    public boolean contains(String value) {// have been using a string for a value
        return contains(head, value);
    }

    private boolean contains(Node node, String value) {
        Node helpPtr = node;
        while (node.getNext() != null) {
            if (helpPtr.getValue().contains(value)) {
                return true;
            }
        }
        return false;
    }

    public int Size() {
        return size;
    }

}
