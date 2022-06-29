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