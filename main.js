/**
 * Task & Assignment

For this exercise, our goal is to create a telephone package. The telephone class should expose 3 different methods.

    AddPhoneNumber - For adding a new phone number
    RemovePhoneNumber - For removing a phone number
    DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled)

The telephone class should also maintain a list of observers and notify them whenever a phone number is dialled. 



Requirements

    Create a telephone class. It should expose 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
    Update the telephone class, so it uses the observer pattern (have methods to add, remove and notify observers)
    Create a class for the observer, it should have a method that can be called by the telephone class to notify it. 
    Have the telephone class notify the observers any time a phone number is dialed. 
    Add two observers to the telephone class


         The first one should print the phone number
          The second one should print `Now Dialling 2347023232`



 */

// Creational pattern
/**
 * Constructor Pattern
 */
// Structural pattern
// Behaviourial pattern


class Telephone{
    constructor(){
        this.numbers = new Set();
        this.observers = new Set();

    }

    addPhoneNumber(number){
        this.numbers.add(number);
    }

    removePhoneNumber(number){
        this.numbers.delete(number);
    }

    dialPhoneNumber(number){
        this.numbers.has(number) ? this.notify(number) : console.log(`Number does not Exist.`);
    }

    notify(number){
        for(let obs of this.observers){
            obs.respond(number);
        }
    }

    addObserver(observer){
        this.observers.add(observer);
    }
    removeObserver(observer){
        this.observers.delete(observer);
    }

}


class Observer{
    constructor(phrase = ``){
        this.phrase = phrase;
    }

    respond(number){
        console.log(`${this.phrase} ${number}`);
    }
}

// Have the telephone class notify the observers any time a phone number is dialed. 
// Add two observers to the telephone class


//      The first one should print the phone number
//       The second one should print `Now Dialling 2347023232`

const callerService = new Telephone();
let showNumber = new Observer();
let showDetail = new Observer(`Now Dialling`);

callerService.addObserver(showDetail);
callerService.addObserver(showNumber);

callerService.addPhoneNumber(`09065787856`);
callerService.addPhoneNumber(`07061187856`);
callerService.addPhoneNumber(`08065789956`);
callerService.addPhoneNumber(`08011111111`);

callerService.dialPhoneNumber(`09065787856`);
callerService.removePhoneNumber(`08011111111`);
console.log(callerService.observers);