package se.journer.journer.models.accommodation;

import java.util.ArrayList;
import java.util.List;

public class BookAccommodation {
    private final int streetPrice = 500;
    private final int hostelPrice = 1500;
    private final int hotelPrice = 2500;
    private final int energyToGainStreet = 10;
    private final int energyToGainHostel = 50;
    private final int energyToGainHotel = 100;
    List<Accommodation> accommodationList;

    public BookAccommodation() {
        this.accommodationList = new ArrayList<>();
        openAccommodation();
    }

    public void openAccommodation(){
        accommodationList.add(new Hotel("Hotell", hotelPrice, energyToGainHotel));
        accommodationList.add(new Hostel("Hostel", hostelPrice, energyToGainHostel));
        accommodationList.add(new Street("Gatan", streetPrice, energyToGainStreet));
    }

    public int getStreetPrice() {
        return streetPrice;
    }

    public int getHostelPrice() {
        return hostelPrice;
    }

    public int getHotelPrice() {
        return hotelPrice;
    }

    public int getEnergyToGainStreet() {
        return energyToGainStreet;
    }

    public int getEnergyToGainHostel() {
        return energyToGainHostel;
    }

    public int getEnergyToGainHotel() {
        return energyToGainHotel;
    }

    public List<Accommodation> getAccommodationList() {
        return accommodationList;
    }
}
