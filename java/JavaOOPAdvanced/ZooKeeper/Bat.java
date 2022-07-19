public class Bat extends Mamal{
    public Bat(){
        setEnergyLevel(300);
    }
    public void fly() {
        System.out.println("taking off bat Noises~");
        setEnergyLevel(getEnergyLevel()-50);
    }

    public void eatHumans() {
        setEnergyLevel(getEnergyLevel()+25);
    }

    public void attackTown() {
        System.out.println("insert burning sound effect");
        setEnergyLevel(getEnergyLevel()-100);
    }
}
