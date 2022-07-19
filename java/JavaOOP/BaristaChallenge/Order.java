package JavaOOP.BaristaChallenge;

import java.util.ArrayList;

public class Order {
    private String name;
    // private double total; not needed
    private boolean ready;
    private ArrayList<Item> items;

    public Order() {
        this("Guest");
    }

    public Order(String name) {
        this.name = name;
        this.items = new ArrayList<>();
    }

    // methods
    /**
     * adds item to the order list
     * 
     * @param item
     */
    public void addItem(Item item) {
        this.items.add(item);
    }

    /**
     * 
     * @return order status message
     */
    public String getStatusMessage() {
        if (this.ready) {
            return "Your order is ready.";
        } else {
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    /**
     * 
     * @return sum of items price
     */
    public double getOrderTotal() {
        double total = 0;

        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }

    /**
     * prints order details
     */
    public void display() {
        String displayString = "";
        for (Item item : this.items) {
            displayString += item.getName() + " - " + item.getPrice() + "\n";
        }
        displayString = "Customer Name: " + getName() + "\n" + displayString + "\nTotal: $" + getOrderTotal() + "\n";
        System.out.println(displayString);
    }

    // getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getItems() {
        return this.items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

}
