package JavaOOPAdvanced.CalculatorPart1and2;

public class Calculator implements java.io.Serializable {
    private double operandOne;
    private double operandTwo;
    private String operation;

    public Calculator() {
    }

    /**
     * 
     * @return returns the result of {@link #getOperandOne() OperandOne} and
     *         {@link #setOperandTwo() getOperandTwo} depending on the operation
     *         used
     * @throws ArithmeticException if {@link #getOperation() operation} is invalid
     *                             or
     *                             unsupported
     */
    public double performOperation() {
        switch (operation) {
            case "+":
                return operandOne + operandTwo;
            case "-":
                return operandOne - operandTwo;
            default:
                throw new ArithmeticException("Operation symbol not found or unsupported");
        }
    }

    /**
     * prints {@link #performOperation()} result
     */
    public void getResult() {
        System.out.println(performOperation());
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public String getOperation() {
        return operation;
    }

    public double getOperandOne() {
        return operandOne;
    }

    public void setOperandOne(double operandOne) {
        this.operandOne = operandOne;
    }

    public double getOperandTwo() {
        return operandTwo;
    }

    public void setOperandTwo(double operandTwo) {
        this.operandTwo = operandTwo;
    }

}
