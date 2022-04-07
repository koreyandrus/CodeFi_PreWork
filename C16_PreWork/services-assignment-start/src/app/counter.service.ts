import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    inactiveToActiveCounter: number = 0;
    activeToInactiveCounter: number = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log(`Active to Inactive: ${this.activeToInactiveCounter}`); 
    }

    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log(`Inactive to Active: ${this.inactiveToActiveCounter}`); 
    }
}