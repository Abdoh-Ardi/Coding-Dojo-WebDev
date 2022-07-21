package JavaOOPAdvanced.CalculatorPart1and2;

public class Calculator implements java.io.Serializable {
    private boolean resultUsed;
    private boolean operationUsed;
    private String operation = "";// because its a non primitive datatype
    private double operand;
    private double result;

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
    public void performOperation() {
        // FIXME consider local variable
        switch (getOperation()) {
            case "+":
                result += operand;

                break;
            case "-":
                result -= operand;
                break;
            case "*":
                result *= operand;
                break;
            case "/":
                if (operand == 0) {
                    // result /= 1;
                    resetValues();//reset values then throw exception
                    throw new ArithmeticException("Dividing by zero is not possible.");
                }
                result /= operand;
                break;
            case "=":

                break;

        }

    }

    public void performOperation(double operand) {
        if (!resultUsed) {
            result = operand;
            resultUsed = true;
        } else {
            this.operand = operand;
            if (operationUsed) {
                performOperation();
            }

        }

    }

    public void performOperation(String operation) {
        setOperation(operation);
        operationUsed = true;
        // reset everything when =;
        if (operation.equals("=")) {
            resetValues();
        }

    }

    private void resetValues() {
        // resetting all other values
        // setOperand(0);// can be removed
        setOperandUsed(false);
        setResultUsed(false);
        // setOperation("");// can be removed
        setOperationUsed(false);
    }

    /**
     * prints {@link #performOperation()} result
     */
    public void getResults() {
        System.out.println(this.result);
    }

    public double getResult() {
        return this.result;
    }

    private void setOperation(String operation) {
        operationUsed = true;
        this.operation = operation;
    }

    public String getOperation() {
        return operation;
    }

    public double getOperand() {
        return operand;
    }

    private void setOperandUsed(boolean operandUsed) {
    }

    private void setOperationUsed(boolean operationUsed) {
        this.operationUsed = operationUsed;
    }

    private void setResultUsed(boolean resultUsed) {
        this.resultUsed = resultUsed;
    }
}
