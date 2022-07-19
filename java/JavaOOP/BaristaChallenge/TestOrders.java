package JavaOOP.BaristaChallenge;

public class TestOrders {
    public static void main(String[] args) {
        // create orders
        Order order1 = new Order();
        Order order2 = new Order();
        Order orderNamed1 = new Order("Abdoh");
        Order orderNamed2 = new Order("Mohammed");
        Order orderNamed3 = new Order("Ahmed");
        // create items
        Item item1 = new Item("Latte", 2.5);
        Item item2 = new Item("Coffe", 5.2);
        // add items to orders
        orderNamed1.addItem(item1);
        orderNamed1.addItem(item2);
        orderNamed2.addItem(item2);
        orderNamed2.addItem(item2);
        orderNamed3.addItem(item1);
        orderNamed3.addItem(item1);
        orderNamed1.setReady(true);
        // display status message
        System.out.println(orderNamed1.getStatusMessage());
        System.out.println(orderNamed2.getStatusMessage());
        // total for Mohammed
        System.out.println(orderNamed2.getOrderTotal());
        // display all orders
        order1.display();
        order2.display();
        orderNamed1.display();
        orderNamed2.display();
        orderNamed3.display();

        CoffeeKiosk kiosk = new CoffeeKiosk();
        kiosk.addMenuItem("Latte", 4.50);
        kiosk.addMenuItem("Muffen", 4);
        kiosk.addMenuItem("Coffee", 1.50);
        kiosk.addMenuItem("capuccino", 3.50);
        kiosk.addMenuItem("Banana", 2.30);
        kiosk.displayMenu();
        kiosk.newOrder();
        
        // 0 banana -- $2.00
        // 1 coffee -- $1.50
        // 2 latte -- $4.50
        // 3 capuccino -- $3.00
        // 4 muffin -- $4.00

    }
}
