package se.journer.journer.models.transportation;

import java.util.ArrayList;
import java.util.List;

public class Station {
    private final int airplanePrice = 15000;
    private final int trainPrice = 12000;
    private final int busPrice = 10000 ;
    private final int energyToGainAirplane = 100;
    private final int energyToGainTrain= 70;
    private final int energyToGainBus = 40;
    List<Transportation> transportList;

    public Station() {
        this.transportList = new ArrayList<>();
        openStation();
    }

    public void openStation(){
        transportList.add(new Airplane("Airplane", airplanePrice, energyToGainAirplane));
        transportList.add(new Train("Train", trainPrice, energyToGainTrain));
        transportList.add(new Bus("Bus", busPrice, energyToGainBus));
    }

    public int getAirplanePrice() {
        return airplanePrice;
    }

    public int getTrainPrice() {
        return trainPrice;
    }

    public int getBusPrice() {
        return busPrice;
    }

    public int getEnergyToGainAirplane() {
        return energyToGainAirplane;
    }

    public int getEnergyToGainTrain() {
        return energyToGainTrain;
    }

    public int getEnergyToGainBus() {
        return energyToGainBus;
    }

    public List<Transportation> getTransportList() {
        return transportList;
    }
}
