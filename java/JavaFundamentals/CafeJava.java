package JavaFundamentals;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double coffePrice = 3;
        double lattePrice = 1.50;
        double cappuccinoPrice = 4;

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "jimmy";
        String customer4 = "Noah";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        // ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + " ordered a coffe");
        System.out.println(generalGreeting + customer4);
        // System.out.println(customer4);// TODO
        System.out.println(customer4 + " ordered a cappuccino");
        if (isReadyOrder4) {
            System.out.println(customer4 + " order is ready \nTotal is " + cappuccinoPrice);
        } else {
            System.out.println(customer4 + " order is NOT ready");
        }

        System.out.println(generalGreeting + customer2);
        System.out.println(customer2 + " ordered 2 latte");
        if (isReadyOrder2) {
            System.out.println(customer2 + " order  is ready \nTotal is " + (lattePrice + lattePrice));
        } else {
            System.out.println(customer2 + " order is NOT ready");
        }
        System.out.println(generalGreeting + customer3);
        System.out.println(customer3 + " order Total is "+ (coffePrice-lattePrice));
    }
}