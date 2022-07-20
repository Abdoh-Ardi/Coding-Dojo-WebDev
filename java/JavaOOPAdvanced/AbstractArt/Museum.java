package JavaOOPAdvanced.AbstractArt;

import java.util.ArrayList;
import java.util.Collections;

public class Museum {
    public static void main(String[] args) {
        
        ArrayList<Art> museum = new ArrayList<>();

        museum.add(new Sculpture());
        ((Sculpture) museum.get(museum.size() - 1)).setMaterial("Wood");// casting to type scultpure to use sculpture
        museum.add(new Sculpture());
        ((Sculpture) museum.get(museum.size() - 1)).setMaterial("Stone");
        museum.add(new Painting());
        ((Painting) museum.get(museum.size() - 1)).setPaintType("Acrylic");
        museum.add(new Painting());
        ((Painting) museum.get(museum.size() - 1)).setPaintType("oil");
        museum.add(new Painting());
        ((Painting) museum.get(museum.size() - 1)).setPaintType("Water Colors");

        Collections.shuffle(museum);// shuffle list content
        for (Art art : museum) {
            art.viewArt();
        }
    }
}
