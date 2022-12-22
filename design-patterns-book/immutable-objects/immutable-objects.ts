/*
Fraction je zlomek - spravne pouziti zlomku. Bez pouziti readonly klicoveho slova
by se promenne prepisovaly! Parametry musi byt immutable - ten se musi pouzivat vzdy,
jen ve zvlastnich pripadech kdy je to opravdu nutne pouzijeme klasicky mutable.
Zabranime tak errorum v budoucnu kdy se pracuje s .equals(..), hashCode(..) atp.

const a = [1, 2, 3]
a.push(4) // OK
a.pop() // OK

readonly b = [1, 2, 3]
b.push(4) // Error
*/

import {MyMath} from "./MyMath";

/*
* Trida zlomek (Fraction) definuje zlomky a potrebne operace, aby se zlomky bylo mozno
* pocitat obdobne jako s cisly. Definuje proto operace pro scitani, odcitani, nasobeni
* a deleni dvou zlomku a zlomku a cisla, jakoz i operace pro prevod celeho cisla na
* zlomek a zlomku na cislo.
* */
class Fraction {

    private readonly numerator: number = 0;
    private readonly denominator: number = 0;

    /*
    * Vytvori novou instanci tridy Fraction s hodnotou danou citatelem a jmenovatelem
    * dodanymi jako parametry. Hodnota citatele a jmenovatele ulozena v atributech
    * vsak bude jiz zkracena a jmenovatel bude kladny.
    * */
    public constructor(fraction: Fraction); // kopirovaci konstruktor
    public constructor(fraction: Fraction, numerator?: number, denominator?: number) {
        if (fraction) {
            this.numerator = fraction.numerator;
            this.denominator = fraction.denominator;
            return;
        }
        if (numerator == undefined || denominator == undefined) {
            return;
        }
        if (denominator == 0) {
            throw new Error('Denominator could not be zero!');
        }
        const divisor: number = MyMath.lowestCommonDivisor(numerator, denominator);
        if (denominator < 0) {
            numerator = -numerator;
            denominator = -denominator;
        }
        this.numerator = numerator / divisor;
        this.denominator = denominator / divisor;
    }
}
