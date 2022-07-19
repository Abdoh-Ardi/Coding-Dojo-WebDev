package JavaOOP.BaristaChallenge;

import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        this.menu = new ArrayList<>();
        this.orders = new ArrayList<>();
    }

    /**
     * adds an item with its price to the menu list
     * 
     * @param name  item name
     * @param price item price
     */
    public void addMenuItem(String name, double price) {
        //
        menu.add(new Item(name, price));// create the item
        menu.get(menu.size() - 1).setIndex(menu.size() - 1);// give the item an index

    }

    public void displayMenu() {
        String printString = "";
        for (Item item : menu) {
            printString += item.getIndex() + " " + item.getName() + " -- $" + item.getPrice() + "\n";
        }
        System.out.println(printString);
    }

    public void newOrder() {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        // Your code:
        // Create a new order with the given input string
        Order order = new Order(name);
        // Show the user the menu, so they can choose items to add.
        displayMenu();
        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items
        while (!itemNumber.equals("q")) {
            // Get the item object from the menu, and add the item to the order
            order.addItem(menu.get(Integer.parseInt(itemNumber)));
            // Ask them to enter a new item index or q again, and take their input
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details
        // as the example below. You may use the order's display method.
        order.display();

    }

}
