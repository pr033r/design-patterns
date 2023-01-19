/*
* Instance is created just right in definition of the static attribute,
* where the reference will be stored.
* Other implementation: there won't be any getInstance() method and the
* instance property will be defined as a 'public'. This will prevent
* calling 'getter' method many times (performance) - use it only in
* an emergency cases - tell that using 'global readonly' property is good
* for the performance if we call it only 3-times in the rest of the code
* is a nonsense.
* */
class BasicSingleton {
  private static readonly instance: BasicSingleton = new BasicSingleton();

  // the private constructor will defend creating new instances
  private constructor(private testString = 'Tester attribute') {
  }

  // basic Factory method returning a singleton instance
  public static getInstance(): BasicSingleton {
    return this.instance;
  }

  public toString(): string {
    return this.testString;
  }
}
