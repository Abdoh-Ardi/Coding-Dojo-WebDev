package JavaOOPAdvanced.ZooKeeper;
public class Gorilla extends Mamal {
    public void throwSomthing() {
        System.out.println("Gorilla has thrown something...");
        setEnergyLevel(getEnergyLevel() - 5);
    }

    public void eatBananas() {
        System.out.println("Gorilla enjoys the Banana");
        setEnergyLevel(getEnergyLevel()+10);
    }

    public void climb() {
        System.out.println("Gorilla has climbed a tree");
        setEnergyLevel(getEnergyLevel()-10);
    }

}
