package JavaOOP.Bank;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts;
    private static double totalAmountStored;

    public BankAccount() {
        numberOfAccounts++;
    }

    /**
     * deposit money in the users balance
     * 
     * @param deposit     a double value for the balance to deposit
     * @param depositType can either be "checking" or "saving"
     */
    public void deposit(double deposit, String depositType) {
        switch (depositType.toLowerCase()) {
            case "checking":
                this.checkingBalance += deposit;
                totalAmountStored += deposit;
                break;
            case "saving":
                this.savingsBalance += deposit;
                totalAmountStored += deposit;
                break;
        }
    }

    /**
     * 
     * @param withdrawAmount
     * @param withdrawType   specify the balance to withdraw from, can be "checking"
     *                       or "saving"
     * @return False when no suffceint funds are avaliable, true otherwise
     */
    public boolean withdraw(double withdrawAmount, String withdrawType) {
        double remainingBalance = 0;
        switch (withdrawType.toLowerCase()) {
            case "checking":
                remainingBalance = getBalance() - withdrawAmount;
                if (remainingBalance > -1) {
                    this.checkingBalance = remainingBalance;
                    // TODO not required but consider decrementing the totalAmount stored
                    // totalAmountStored -=withdrawAmount;
                    return true;
                }
                break;
            case "saving":
                remainingBalance = getSavingsBalance() - withdrawAmount;
                if (remainingBalance > -1) {
                    this.savingsBalance = remainingBalance;
                    // TODO not required but consider decrementing the totalAmount stored
                    // totalAmountStored -=withdrawAmount;
                    return true;
                }
                break;
        }
        return false;// withdrawl failed/insuffecint funds
    }

    // getters
    public double getBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

}
