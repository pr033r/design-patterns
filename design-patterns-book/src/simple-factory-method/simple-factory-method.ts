abstract class APerson {
    private static index = 0;

    public static getPerson() {
        switch (this.index++ % 3) {
            case 0: return new this.LazyGuy();
            case 1: return new this.WorkingGuy();
            case 2: return new this.FreshGuy();
            default: throw new Error('Wrongly defined max number');
        }
    }

    public abstract alarm(): void;

    public abstract work(): void;

    public abstract freeTime(): void;

    public abstract sleep(): void;

    private static LazyGuy = class extends APerson {
        alarm(): void {
            console.log('Slowly wake up.');
        }

        freeTime(): void {
            console.log('Sleeping.');
        }

        sleep(): void {
            console.log('Long sleep.');
        }

        work(): void {
            console.log('Lazy working.');
        }
    }
    private static WorkingGuy = class extends APerson {
        alarm(): void {
            console.log('Waking up early.');
        }

        freeTime(): void {
            console.log('Working.');
        }

        sleep(): void {
            console.log('Short sleep.');
        }

        work(): void {
            console.log('Hard working.');
        }
    }
    private static FreshGuy = class extends APerson {
        alarm(): void {
            console.log('Slowly and freshly wake up.');
        }

        freeTime(): void {
            console.log('Relaxing.');
        }

        sleep(): void {
            console.log('Relaxing sleep.');
        }

        work(): void {
            console.log('Relaxing work.');
        }
    }

    public static test(): void {
        for (let i = 1; i <= 3; i++) {
            const person: APerson = APerson.getPerson();
            person.alarm();
            person.work();
            person.freeTime();
            person.sleep();
        }
    }
}