public class Mamal {
    private int energyLevel;

    public int displayEnergy() {
        // show animal energy
        System.out.println("Animal Energy: " + getEnergyLevel());
        // return energyLevel
        return energyLevel;
    }

    public int getEnergyLevel() {
        return energyLevel;
    }

    public void setEnergyLevel(int energyLevel) {
        this.energyLevel = energyLevel;
    }

}
