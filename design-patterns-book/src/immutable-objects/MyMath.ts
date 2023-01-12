/*
  MyMath je zaroven KNIHOVNI TRIDOU (Library Class) - navrhovy vzor tridy, kde jsou seskupene
  staticke metody, ktere maji dohromady neco spolecneho. V Jave, nebo .NET byla trida jeste
  oznacena jako 'final' nebo 'sealed' aby nebyla moznost vytvorit potomka tridy.
  Navic by jeste musel byt definovany private construktor bez parametru a tela ABY NEBYLO MOZNE
  VYTVORIT INSTANCI
* */
export class MyMath {

  /*
  * Vrati nejvestiho spolecneho delitele dvou zadanych cisel.
  * Vracene cislo je vzdy kladne nezavisle na znamenku parametru.
  * */
  public static lowestCommonDivisor(n1: number, n2: number): number {
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);
    while (n2 > 0) {
      const tmp: number = n1 % n2;
      n1 = n2;
      n2 = tmp;
    }
    return n1;
  }

  /*
  * Vrati nejmensi spolecny nasobek zadanych cisel.
  * Vracene cislo je vzdy kladne nezavisle na znamenku parametru.
  * */
  public static lowestCommonMultiple(n1: number, n2: number): number {
    if ((n1 == 0) || (n2 == 0)) {
      return 0;
    }
    return n2 * Math.abs(n1) / this.lowestCommonDivisor(n1, n2);
  }
}
