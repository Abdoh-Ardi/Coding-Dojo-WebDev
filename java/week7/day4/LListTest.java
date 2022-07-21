package week7.day4;



public class LListTest {
    public static void main(String[] args) {
        LList list = new LList();

        list.add(new Node("value1"));
        list.add(new Node("value2"));
        list.add(new Node("value3"));
        list.add(new Node("value4"));
        list.addFirst(new Node("value0"));
        // list.removeFirst();
        list.removeAt(3);
        System.out.println(list.get(1).getValue());
        list.displayAll();
    }
}
