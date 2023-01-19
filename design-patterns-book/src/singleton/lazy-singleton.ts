/*
* Lazy Load Singleton - means, that the instance of the class is created
* when we first call the getInstance() method. So it's not initialized
* right in the declaration (because if initiate class, but we actually won't
* need it at all in the program). Then we'll use lazy singleton. It's also
* useful for cases where creating the instance has performance issues. So we'll
* create it, only when we need it.
* Lazy Singleton works only for one thread application.
* */
class LazySingleton {
  private static lazy: LazySingleton;

  // private for preventing crating a new instance
  private constructor() {
    console.log('Creating a new instance of the LazySingleton');
  }

  public static getInstance(): LazySingleton {
    console.log('Request for getting LazySingleton instance.');
    if (this.lazy === undefined) {
      console.log('%c Instance does not exist, let\'s create a new one', 'color: red');
      this.lazy = new LazySingleton();
    }
    console.log('-> Returning created instance.');
    return this.lazy;
  }

  public static isInstanceExist(): boolean {
    return this.lazy !== undefined;
  }

  public static test() {
    console.log(`LazySingleton exists: ${this.isInstanceExist()}`);
    const newLazy1 = this.getInstance();
    console.log(`LazySingleton exists: ${this.isInstanceExist()}`);
    const newLazy2 = this.getInstance();
    console.log(`Fetched LazySingletons are ${(newLazy1 == newLazy2) ? 'same' : 'different'}`);
  }
}
