import { Injectable } from '@angular/core';

const countryList = ['Malaysia', 'Thailand', 'Vietnam', 'Others'];
const myCityList = ['Kuala Lumpur', 'Penang', 'Johor baru'];
const thaiCityList = ['Bangkok', 'Phuket', 'Krabi Island'];
const vietnamCityList = ['Ho Chi Minh', 'Hanoi'];


@Injectable()
export class LocationService{

    constructor(){

    }

    public getCountryList(): string[]{
        return countryList;
    }

    public getCityList(country: string): string[] {
        switch(country){
            case 'Malaysia': return myCityList;
            case 'Thailand': return thaiCityList;
            case 'Vietname': return vietnamCityList;

            default: return myCityList;
        }
    }

}

