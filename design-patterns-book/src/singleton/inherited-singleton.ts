
const SystemConf = {
  Labyrinth: 'bomb'
};

abstract class Labyrinth {
  private static instance: Labyrinth;

  // constructor is here only because we have to set it up as private
  private constructor() {
  }

  public static getInstance(): Labyrinth {
    if (this.instance === undefined){
      let labyrinthName = SystemConf.Labyrinth;
      if (!labyrinthName) {
        labyrinthName = '';
      }
      this.instance = this.selectLabyrinth(labyrinthName);
    }
    return this.instance;
  }

  private static selectLabyrinth(name: string): Labyrinth {
    name = name.trim().toLocaleLowerCase();
    if (name === 'bomb') {
      return new this.BombLabyrinth();
    } else if (name === 'magic') {
      return new this.MagicLabyrinth();
    } else if (name === 'fun') {
      return new this.FunLabyrinth();
    } else {
      return new this.ImplicitLabyrinth();
    }
  }

  private static BombLabyrinth = class extends Labyrinth {}
  private static MagicLabyrinth = class extends Labyrinth {}
  private static FunLabyrinth = class extends Labyrinth {}
  private static ImplicitLabyrinth = class extends Labyrinth {}

  public static test() {
    const labyrinth: Labyrinth = this.getInstance();
    console.log(labyrinth);
  }
}
