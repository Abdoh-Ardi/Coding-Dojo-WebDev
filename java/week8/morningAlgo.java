public class morningAlgo {
    public static void main(String[] args) {
        String strA1 = "Hello World";
        String strB1 = "lloeh wordl";
        boolean expected1 = true;

        String strA2 = "Hey";
        String strB2 = "hello";
        boolean expected2 = false;
        // Explanation: second string is missing a "y"

        String strA3 = "hello";
        String strB3 = "helo";
        boolean expected3 = false;
        // Explanation: second string doesn't have enough "l" letters

        String strA4 = "hello";
        String strB4 = "lllheo";
        boolean expected4 = true;

        String strA5 = "hello";
        String strB5 = "heloxyz";
        boolean expected5 = false;
        // Explanation: strB5 does not have enough "l" chars.
        System.out.println(finder(strA1, strB1) == expected1);
        System.out.println(finder(strA2, strB2) == expected2);
        System.out.println(finder(strA3, strB3) == expected3);
        System.out.println(finder(strA4, strB4) == expected4);
        System.out.println(finder(strA5, strB5) == expected5);
        System.out.println();
    }

    public static boolean finder(String patternText, String text) {
        // if it can contain it it has to be == or > than it
        if (!(text.length() >= patternText.length())) {
            return false;
        }

        patternText = patternText.toLowerCase();
        text = text.toLowerCase();
        for (int i = 0; !patternText.isEmpty() && i < text.length(); i++) {
            for (int j = 0; j < patternText.length(); j++) {
                if (text.charAt(i) == patternText.charAt(j)) {
                    // remove char from string
                    patternText = patternText.substring(0, j) + patternText.substring(j + 1);
                    break;// making sure 1 character is removed
                }
            }

        }
        return patternText.isEmpty();
    }

}
