package JavaOOPAdvanced.CareSoft.src.com.caresoft.clinicapp;
public interface HIPAACompliantUser {
    abstract boolean assignPin(int pin);
    abstract boolean accessAuthorized(Integer confirmedAuthID);
}
