"use strict";
/*
* Existuji dva druhy implementace:
*   1.  Uzivatel sluzebnika zna (obsluhovane instance jej pak znat nemusi) a zpravy se svymi
*       pozadavky zasila primo jeho instancim, pricemz obsluhovane instance jim predava jako
*       parametry.
*   2.  Sluzebnika znaji obsluhovane instance a uzivatel posila zpravy se svymi pozadavky
*       primo jim (uzivatel pak sluzebnika znat nemusi). Obsluhovane instance pak samy poslou
*       instancim sluzebnika zpravy, v nichz je pozadaji o svoji obsluhu.
* */
// Implementace I
// Servant class, offering its functionality to classes implementing
// Movable Interface
class MoveServant {
    // Method, which will move Movable implementing class to position where
    moveTo(serviced, where) {
        // Do some other stuff to ensure it moves smoothly and nicely, this is
        // the place to offer the functionality
        serviced.setPosition(where);
    }
    // Method, which will move Movable implementing class by dx and dy
    moveBy(serviced, dx, dy) {
        // this is the place to offer the functionality
        dx += serviced.getPosition().xPosition;
        dy += serviced.getPosition().yPosition;
        serviced.setPosition(new Position(dx, dy));
    }
}
// One of geometric classes
class Triangle {
    // Position of the geometric object on some canvas
    constructor(p) {
        this.p = p;
    }
    // Method, which sets position of geometric object
    setPosition(p) {
        this.p = p;
    }
    // Method, which returns position of geometric object
    getPosition() {
        return this.p;
    }
}
// One of geometric classes
class Ellipse {
    // Position of the geometric object on some canvas
    constructor(p) {
        this.p = p;
    }
    // Method, which sets position of geometric object
    setPosition(p) {
        this.p = p;
    }
    // Method, which returns position of geometric object
    getPosition() {
        return this.p;
    }
}
// One of geometric classes
class Rectangle {
    // Position of the geometric object on some canvas
    constructor(p) {
        this.p = p;
    }
    // Method, which sets position of geometric object
    setPosition(p) {
        this.p = p;
    }
    // Method, which returns position of geometric object
    getPosition() {
        return this.p;
    }
}
// Just a very simple container class for position.
class Position {
    constructor(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }
}
