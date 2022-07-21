package week7.day4;



public class LListTest {
    public static void main(String[] args) {
        //single linked list test
        LList list = new LList();
        list.add(new Node("value1"));
        list.add(new Node("value2"));
        list.add(new Node("value3"));
        list.add(new Node("value4"));
        list.addFirst(new Node("value0"));
        // list.removeFirst();
        list.removeAt(3);//remove the value3
        list.displayAll();
        System.out.println("get value at index 1: "+list.get(1).getValue());


        //double linkedlist test
    }
}
