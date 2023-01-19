"use strict";
const SystemConf = {
    Labyrinth: 'bomb'
};
class Labyrinth {
    // constructor is here only because we have to set it up as private
    constructor() {
    }
    static getInstance() {
        if (this.instance === undefined) {
            let labyrinthName = SystemConf.Labyrinth;
            if (!labyrinthName) {
                labyrinthName = '';
            }
            this.instance = this.selectLabyrinth(labyrinthName);
        }
        return this.instance;
    }
    static selectLabyrinth(name) {
        name = name.trim().toLocaleLowerCase();
        if (name === 'bomb') {
            return new this.BombLabyrinth();
        }
        else if (name === 'magic') {
            return new this.MagicLabyrinth();
        }
        else if (name === 'fun') {
            return new this.FunLabyrinth();
        }
        else {
            return new this.ImplicitLabyrinth();
        }
    }
    static test() {
        const labyrinth = this.getInstance();
        console.log(labyrinth);
    }
}
Labyrinth.BombLabyrinth = class extends Labyrinth {
};
Labyrinth.MagicLabyrinth = class extends Labyrinth {
};
Labyrinth.FunLabyrinth = class extends Labyrinth {
};
Labyrinth.ImplicitLabyrinth = class extends Labyrinth {
};
