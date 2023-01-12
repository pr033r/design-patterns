"use strict";
class APerson {
    static getPerson() {
        switch (this.index++ % 3) {
            case 0:
                return new this.LazyGuy();
            case 1:
                return new this.WorkingGuy();
            case 2:
                return new this.FreshGuy();
            default:
                throw new Error('Wrongly defined max number');
        }
    }
    static test() {
        for (let i = 1; i <= 3; i++) {
            const person = APerson.getPerson();
            person.alarm();
            person.work();
            person.freeTime();
            person.sleep();
        }
    }
}
APerson.index = 0;
APerson.LazyGuy = class extends APerson {
    alarm() {
        console.log('Slowly wake up.');
    }
    freeTime() {
        console.log('Sleeping.');
    }
    sleep() {
        console.log('Long sleep.');
    }
    work() {
        console.log('Lazy working.');
    }
};
APerson.WorkingGuy = class extends APerson {
    alarm() {
        console.log('Waking up early.');
    }
    freeTime() {
        console.log('Working.');
    }
    sleep() {
        console.log('Short sleep.');
    }
    work() {
        console.log('Hard working.');
    }
};
APerson.FreshGuy = class extends APerson {
    alarm() {
        console.log('Slowly and freshly wake up.');
    }
    freeTime() {
        console.log('Relaxing.');
    }
    sleep() {
        console.log('Relaxing sleep.');
    }
    work() {
        console.log('Relaxing work.');
    }
};
