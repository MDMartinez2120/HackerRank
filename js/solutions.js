'use strict';

//stepCounter
const counter = (
    function counter() {
        let value = 0;
        return {
            getValue: function() {
                return value;
            },
            changeBy: function (k) {
                value += k;
            }
        }
    }
)();

function getFixedCounter(k) {
    let myCounter = counter;
    return {
        increment: () => {
            myCounter.changeBy(k);
        },
        decrement: () => {
            myCounter.changeBy(-k);
        },
        getValue: () => {
            return myCounter.getValue();
        }
    }
}


// hackerRank user warning data.

class User {
    constructor(userName) {
        this.userName = userName;
    }
    getUsername() {
        return this.userName;
    }
    setUsername(username){
        this.userName = username;
    }
}

class ChatUser extends User {
    constructor(userName) {
        super(User);
        this.userName = userName;
        this.warning = 0;
    }
    giveWarning(){
        return this.warning++;
    }
    getWarningCount(){
        return this.warning;
    }
}

//PARKING LOT\\

class ParkingLot {
    spaces = [];

    constructor(slots){
        this.spaces = new Array(slots).fill(null);
    }

    park(carId){
        if (this.spaces.every((space) => space !== null)){
            return false;
        }

        for (let i = 0; i < this.spaces.length; i++){
            const space = this.spaces[i];

            if (space === null){
                this.spaces[i] = carId;
                return true;
            }
        }
    }

    getSlots(){
        return this.spaces;
    }

    remove(carId){
        if (this.spaces.every((space) => space !== carId)){
            return false;
        }

        for (let i = 0; i <= this.spaces.length; i++){
            const space = this.spaces[i];

            if (space === carId){
                this.spaces[i] = null;
                return true;
            }
        }
    }
}

//ACTIVITY LIST\\

function Activity(amount) {
    this.amount = amount;
    this.setAmount = (theAmount) => {
        if (theAmount <= 0){
            return false;
        }
        this.amount = theAmount;
        return true;
    }
    this.getAmount = ()=>{
        return this.amount;
    }
}

function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
    this.setReceiver = (newReceiver) => {
        this.receiver = newReceiver;
    }
    this.getReceiver = function(){
        return this.receiver;
    }
}

Payment.prototype.setReceiver = (newReceiver)=> {
    this.receiver = newReceiver
};

Payment.prototype.getReceiver = () =>{
    return this.receiver;
}

function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
    this.setSender = function(newSender){
        this.sender = newSender;
    }
    this.getSender = function(){
        return this.sender;
    }
}

Refund.prototype.setSender = (newReceiver) =>{
    this.sender = newReceiver;
}

Refund.prototype.getSender = () => {
    return this.sender;
}