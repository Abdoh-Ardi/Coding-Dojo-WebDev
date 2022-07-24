package week7.day4;

public class LListTest {
    public static void main(String[] args) {
        // single linked list test
        LList list = new LList();
        System.out.println("\n<---- Single Linked list test ---->");
        list.add(new Node("value1"));
        list.add(new Node("value2"));
        list.add(new Node("value3"));
        list.add(new Node("value4"));
        list.addFirst(new Node("value0"));
        list.removeFirst();
        list.removeAt(3);// remove the value3
        list.displayAll();
        System.out.println("get value at index 1: " + list.get(1).getValue());

        // double linkedlist test
        System.out.println("\n<---- Double Linked list test ---->\n");
        DoubleLList dlist = new DoubleLList();
        System.out.println("list size is : "+ dlist.Size());
        dlist.add(new Node("value1"));
        dlist.add(new Node("value2"));
        dlist.removeFirst();
        dlist.add(new Node("value3"));
        dlist.addFirst(new Node("value1"));
        dlist.addFirst(new Node("value0"));
        dlist.pop();// FIXME when you have one element it should remove it
        System.out.println("print Values:");
        dlist.displayAll();
        System.out.println("Last Node is : " + dlist.getLastNode().getValue());
        System.out.println("get Node At index 1: " + dlist.get(1).getValue());
        System.out.println("\nprint Values backwards: ");
        dlist.printValuesBackward();
        System.out.println("list size is : "+ dlist.Size());

    }
}
