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
* Pouzivani immutable muze zabranit problemum v budoucnu. Radeji nastavit objekty jako
* readable (final v Jave) a pak vracet nove instance (nevyhoda znovu vytvareni pameti
* na Heapu - ale vesmes to umi uz prekladace optimalizovat) nez pak mit problemy
* s "uniky" dat, protoze nas objekt byl mutovany nekde jinde.
*
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
  public constructor(numerator?: number, denominator?: number, f?: Fraction) {
    if (f) {
      this.numerator = f.numerator;
      this.denominator = f.denominator;
      return;
    }
    if (numerator == undefined || denominator == undefined) {
      throw new Error('Parameters for fraction are not defined!');
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

  public get Numerator(): number {
    return this.numerator;
  }

  public get Denominator(): number {
    return this.denominator;
  }

  /*
  * Klasicky override f-ce toString v JS, napr.: console.log(f: Fraction);
  * */
  public toString(): string {
    return `[${this.numerator} / ${this.denominator}]`;
  }

  /*
  * Klasicky override f-ce valueOf v JS, napr.: console.log(f1: Fraction + f2: Fraction);
  * */
  public valueOf() {
    return this.numerator / this.denominator;
  }

  public intValue(): number {
    return Math.round(this.numerator / this.denominator);
  }

  public doubleValue(): number {
    return this.numerator / this.denominator;
  }

  public plus(n: number): Fraction;
  public plus(n: number, f?: Fraction): Fraction {
    if (f) {
      const firstOperation = this.numerator * f.denominator + f.numerator * this.denominator;
      const secondOperation = this.denominator * f.denominator;
      return new Fraction(firstOperation, secondOperation);
    }
    return new Fraction(this.numerator + n * this.denominator, this.denominator);
  }

  public minus(n: number): Fraction;
  public minus(n: number, f?: Fraction): Fraction {
    if (f) {
      const firstOperation = this.numerator * f.denominator - f.numerator * this.denominator;
      const secondOperation = this.denominator * f.denominator;
      return new Fraction(firstOperation, secondOperation);
    }
    return new Fraction(this.numerator - n * this.denominator, this.denominator);
  }

  public deductFrom(n: number): Fraction {
    return new Fraction(n * this.denominator - this.numerator, this.denominator);
  }

  public multiplication(n: number): Fraction;
  public multiplication(n: number, f?: Fraction): Fraction {
    if (f) {
      return new Fraction(this.numerator * f.numerator, this.denominator * f.denominator);
    }
    return new Fraction(this.numerator * n, this.denominator);
  }

  public divide(n: number): Fraction;
  public divide(n: number, f?: Fraction): Fraction {
    if (f) {
      return new Fraction(this.numerator * f.denominator, this.numerator * f.numerator);
    }
    return new Fraction(this.numerator, this.denominator * n);
  }

  public divideBy(n: number): Fraction {
    return new Fraction(this.denominator * n, this.numerator);
  }
}
