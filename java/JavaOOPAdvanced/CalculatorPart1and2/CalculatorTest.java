package JavaOOPAdvanced.CalculatorPart1and2;

public class CalculatorTest {
        public static void main(String[] args) {
                Calculator calc = new Calculator();
                // 1:test case 0+0
                // calc.setResult(0);// FIXME did not fix anything
                calc.performOperation(0);
                calc.performOperation("+");
                calc.performOperation(0);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 0+0=0 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == 0.0 ? "pass" : "fail"));
                // 2:test case 0+1
                // calc.setResult(0);// FIXME did not fix anything
                calc.performOperation(0);
                calc.performOperation("+");
                calc.performOperation(1);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 0+1=1 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == 1.0 ? "pass" : "fail"));
                // test case 2+3
                // calc.setResult(0);// FIXME did not fix anything
                calc.performOperation(2);
                calc.performOperation("+");
                calc.performOperation(3);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 2+3=5 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == 5.0 ? "pass" : "fail"));
                // test case 2-3
                // calc.setResult(0);// FIXME did not fix anything
                calc.performOperation(2);
                calc.performOperation("-");
                calc.performOperation(3);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 2-3=-1 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == -1.0 ? "pass" : "fail"));
                // 3:test case 0*5
                // calc.setResult(0);// FIXME did not fix anything
                calc.performOperation(0);
                calc.performOperation("*");
                calc.performOperation(5);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 0*5=0 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == 0.0 ? "pass" : "fail"));

                // 4:test case 3*5
                // calc.setResult(0);// FIXME manually reseting result fixed issues
                calc.performOperation(3);
                calc.performOperation("*");
                calc.performOperation(5);
                calc.performOperation("=");// resets operands
                System.out.println("test case : expected => 3*5=0 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == 15.0 ? "pass" : "fail"));
                // 5:test case division by 0
                try {
                        System.out.print("test case : expected => ArithmeticException" );
                        calc.performOperation(3);
                        calc.performOperation("/");
                        calc.performOperation(0);
                        calc.performOperation("=");// resets operands
                        System.out.println("-> got => "+calc.getResult()+"-> pass");
                } catch (ArithmeticException e) {
                        System.out.println( " -> got => ArithmeticException -> pass");
                }

                // test case continous operations
                calc.performOperation(1);
                calc.performOperation("+");
                calc.performOperation(2);
                calc.performOperation("-");
                calc.performOperation(5);
                calc.performOperation("*");
                calc.performOperation(5);
                calc.performOperation("/");
                calc.performOperation(2);
                calc.performOperation("=");// resets everything
                System.out.println("test case : expected => -5 -> got => " +
                                calc.getResult() + " -> "
                                + (calc.getResult() == -5.0 ? "pass" : "fail"));

        }
}
