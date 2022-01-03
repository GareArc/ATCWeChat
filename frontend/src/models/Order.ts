import {Item} from "../models/Item";

export class Order{
    ThreePeople: Item[];
    Target1: Item[];
    Target2: Item[];
    Target1Info: string;
    Target2Info: string;
    Target1Total: number;
    Target2Total: number;
    Fees: {
        electricityFee: number;
        amazonFee: number;
        internetFee: number;
        otherFee: number;
    }

    constructor(ThreePeople: Item[] = [],
                Target1: Item[] = [],
                Target2: Item[] = [],
                Target1Info = "Gareth",
                Target2Info = "Charlie",
                Fees: { electricityFee: number; amazonFee: number; internetFee: number; otherFee: number } = {electricityFee: 0, amazonFee: 0, internetFee: 0, otherFee: 0}) {
        this.Target1Total = -1;
        this.Target2Total = -1;
        this.ThreePeople = ThreePeople;
        this.Target1 = Target1;
        this.Target2 = Target2;
        this.Target1Info = Target1Info;
        this.Target2Info = Target2Info;
        this.Fees = Fees;
    }

    delFromThreePeople(targetItem: Item, index=-1): void {
        if(index !== -1){
            this.ThreePeople.splice(index, 1);
        }
        else {
            this.ThreePeople.splice(this.ThreePeople.findIndex(
                item => {return targetItem === item}),
              1);
        }
    }
    delFromTarget1(targetItem: Item, index=-1): void {
        if(index !== -1){
            this.Target1.splice(index, 1);
        }
        else{
            this.Target1.splice(this.Target1.findIndex(
                item => {return targetItem === item}),
              1);
        }
    }
    delFromTarget2(targetItem: Item, index=-1): void {
        if(index !== -1){
            this.Target2.splice(index, 1);
        }
        else{
            this.Target2.splice(this.Target2.findIndex(
                item => {return targetItem === item}),
              1);
        }
    }

    addToThreePeople(item: Item): void {
        this.ThreePeople.push(item);
    }
    addToTarget1(item: Item): void {
        this.Target1.push(item);
    }
    addToTarget2(item: Item): void {
        this.Target2.push(item);
    }
    setElectricityFee(fee: number): void {
        this.Fees.electricityFee = fee;
    }
    setAmazonFee(fee: number): void {
        this.Fees.amazonFee = fee;
    }
    setInternetFee(fee: number): void {
        this.Fees.internetFee = fee;
    }
    setOtherFee(fee: number): void {
        this.Fees.otherFee = fee;
    }
}
