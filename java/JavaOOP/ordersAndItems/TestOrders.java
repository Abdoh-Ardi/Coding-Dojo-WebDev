package JavaOOP.ordersAndItems;

public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item();
        item1.name = "mocha";
        item1.price = 1;
        item2.name = "latte";
        item2.price = 2;
        item3.name = "drip coffe";
        item3.price = 3;
        item4.name = "capuccino";
        item4.price = 4;
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order();
        Order order4 = new Order();
        order1.name= "Cindhuri";
        order2.name= "Jimmy";
        order3.name="Noah";
        order4.name="Sam";
        //print order1 
        System.out.println(order1);
        //add item 1 to order2 
        order2.items.add(item1);
        order2.total+=item1.price;
        //order 3 ordered cappucino
        order3.items.add(item4);
        order3.total+=item4.price;
        //order 4 added a latte
        order4.items.add(item2);
        order4.total+=item2.price;
        //Cinduhri order is ready
        order1.ready= true;
        //Sam orderedd more drinks
        order4.items.add(item2);
        order4.items.add(item2);
        order4.total +=item2.price+item2.price;
        //jimmy order is ready
        order2.ready = true;

        // Application Simulations
        // Use this example code to test various orders' updates
        
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);//gets the default value for the variable if its not set to anything
        System.out.printf("Ready: %s\n", order4.ready);
    }
}
