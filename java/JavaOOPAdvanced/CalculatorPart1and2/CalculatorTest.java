package JavaOOPAdvanced.CalculatorPart1and2;

public class CalculatorTest {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        calc.setOperandOne(1);
        calc.setOperandTwo(2);
        calc.setOperation("+");
        calc.performOperation();
        calc.getResult();

        // unsupported operation example
        calc.setOperation("/");
        try {
            calc.performOperation();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
