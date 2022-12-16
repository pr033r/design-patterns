#include <iostream>
#include <string>

using namespace std;

// In Windows we can use enum class, and call it with CarTypes::AUDI
enum CarTypes {AUDI, BMW, MERCEDES, VOLKSWAGEN};

class Car {

private:
    string name, type;
    int id;

public:
    Car(string name, string type, int id)
    :name(name), type(type), id(id)
    {}

    Car(){
        Car("null", "null", 0);
    }

    string getName(){ return this->name; }
    string getType(){ return this->type; }
    int getId(){ return this->id; }

};

class CarFactory {

public:
    Car *getCar(CarTypes type){
        if (type == AUDI){
            return new Car("AUDI 900", "Family", 1987161);
        } else if (type == BMW){
            return new Car("BMR x900", "Sport", 119561);
        } else if (type == MERCEDES){
            return new Car("MERCEDES A80", "Sport", 4895619);
        } else if (type == VOLKSWAGEN){
            return new Car("VOLKSWAGEN xx99", "Family", 11564);
        }
    }

};

int main(){

    CarFactory *factory = new CarFactory();

    cout << "Factory created." << endl;

    Car *audi = factory->getCar(AUDI);
    Car *bmw = factory->getCar(BMW);
    Car *mercedes = factory->getCar(MERCEDES);
    Car *volkswagen = factory->getCar(VOLKSWAGEN);

    cout << "Instances created." << endl << endl;

    cout << "\t" << audi->getId() << " " << audi->getName() << " " << audi->getType() << endl;
    cout << "\t" << bmw->getId() << " " << bmw->getName() << " " << bmw->getType() << endl;
    cout << "\t" << mercedes->getId() << " " << mercedes->getName() << " " << mercedes->getType() << endl;
    cout << "\t" << volkswagen->getId() << " " << volkswagen->getName() << " " << volkswagen->getType() << endl;

    delete factory;
    delete audi;
    delete bmw;
    delete mercedes;
    delete volkswagen;

    return 0;
}
