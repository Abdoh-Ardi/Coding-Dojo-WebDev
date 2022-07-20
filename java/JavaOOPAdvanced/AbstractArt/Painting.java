package JavaOOPAdvanced.AbstractArt;

public class Painting extends Art {
   

    private String paintType;

    public void viewArt() {
        System.out.println("this is a great painting of type " + getPaintType());
    }

    public String getPaintType() {
        return paintType;
    }

    public void setPaintType(String paintType) {
        this.paintType = paintType;
    }

}
