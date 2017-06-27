#include <iostream>

using namespace std;


/**
 * Rozhraní specifikující požadovanou funkcionalitu.
 */

class Target {

public:
    virtual void newRequest() = 0;

};


/**
 * Vnořená třída, která má zpravidla zastaralé, nekompatibilní, nebo jinak
 * nevyhovujícím rozhraní. Proto k ní bude vytvořen odpovídající adaptér.
 */
class Adaptee {

public:
    void oldRequest(){
        cout << "Old request" << endl;
    }

};

/**
 * Adaptér, který implementuje funkcionalitu požadovanou rozhraním "Target" a to
 * tak, že přeposílá (deleguje) požadavky třídě vnořené. K tomu může přidat
 * nějakou řídící logiku. Okolí nemusí vědět ani o instanci vnořené třídy, ani o
 * způsobu, jakým se požadavky převádí.
 */
class Adapter : public Target {

private:
    Adaptee *adaptee;

public:
    Adapter(){
        this->adaptee = new Adaptee();
    }

    void newRequest() {
        cout << "New request" << endl;
        this->adaptee->oldRequest();
    }
};

int main()
{
    Target *adapter = new Adapter();
    adapter->newRequest();
    return 0;
}
