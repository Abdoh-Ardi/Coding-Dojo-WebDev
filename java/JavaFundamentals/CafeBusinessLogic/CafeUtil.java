package JavaFundamentals.CafeBusinessLogic;

import java.util.ArrayList;

public class CafeUtil {
    int numWeeks = 0;

    public int getStreakGoal() {
        int sum = 0;
        for (int i = 0; i <= this.numWeeks; i++) {
            sum += i;
        }
        return sum;
    }

    // Ninja Bonus 1
    public void setNumOfWeeks(int numWeeks) {
        this.numWeeks = numWeeks;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (double d : prices) {
            sum += d;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        String msg = "";// to store the texts
        for (int i = 0; i < menuItems.size(); i++) {
            msg += i + " " + menuItems.get(i) + "\n";
        }
        System.out.println(msg);
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName + "!");
        System.out.printf("There are %d people in front of you.\n",customers.size());
        customers.add(userName);
    }
}
