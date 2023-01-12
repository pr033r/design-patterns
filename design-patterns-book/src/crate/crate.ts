/*
* Interni pomocna prepravka slouzici k uchovani skupiny udaju,
* ktere je treba si o jednotlivych polozkach pamatovat.
* */
class Item {
  constructor(public start: number, public end: number, public item: string) {
  }
}

/*
* Crate - Prepravka. Jak na nazev napovida slouzi k preprave objektu uvnitr programu.
*
* Trida DailyPlan demonstruje pouziti interni prepravky na prikladu programu realizujiciho
* jednoduchy zaznamnik akci naplanovanych na dany den
* */
class DailyPlan {
  private readonly action: Array<Item> = new Array<Item>();

  public static test(): void {
    const dp = new DailyPlan();
    dp.testAdd(8, 0, 30, 'Wake Up');
    dp.testAdd(10, 30, 90, 'Relax');
    dp.testAdd(8, 30, 30, 'Breakfast');
    dp.testAdd(9, 30, 90, 'Work');
  }

  /*
  * Pokusi se pridat do casoveho planu polozku zadanou pocatecnim casem
  * a trvanim a vrati uspech tohoto pokusu. Ma-li se pridani polozky podarit,
  * nesmi polozka kolidovat s zadnou z drive zadanych polozek
  * */
  public add(hour: number, minute: number, delay: number, item: string): boolean {
    const start = hour * 60 + minute;
    const end = start + delay;
    this.action.forEach(value => {
      const item: Item = value;
      if (item.start <= end) {
        return false;
      }

    });
    this.action.push(new Item(start, end, item));
    return true;
  }

  public print(): void {
    console.log('List of actions:');
    this.action.forEach(value => {
      console.log(`${value.start / 60}:${value.start % 60} - ${value.end / 60}:${value.end % 60}, ${value.item}`);
    });
    console.log('------------------');
  }

  public testAdd(h: number, m: number, d: number, txt: string): void {
    console.log(`I'm adding ${d} minutes from ${h}:${m} for ${txt}`);
    const success = this.add(h, m, d, txt);
    console.log(`\t\t ${success ? 'Yes' : 'No'}`);
    this.print();
  }
}
