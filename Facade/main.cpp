#include <iostream>

using namespace std;

template <class T>
class Adder {

public:
    T add(T x, T y){
        return x + y;
    }

    T substract(T x, T y){
        return x - y;
    }

};

template <class T>
class Multiplier {

public:
    T multiply(T x, T y){
        return x * y;
    }

    T devide(T x, T y){
        if (y != 0)
            return x / y;
        else return 0;
    }

};

template <class T>
class Facade {

private:
    Adder<T> *adder;
    Multiplier<T> *multiplier;

public:
    Facade(){
        this->adder = new Adder<T>();
        this->multiplier = new Multiplier<T>();
    }
    ~Facade(){
        delete this->adder;
        delete this->multiplier;
    }

    T negative(T x){
        return this->adder->substract(0, x);
    }

    T square(T x){
        return this->multiplier->multiply(x, x);
    }

    T mean(T x, T y){
        return this->multiplier->devide(this->adder->add(x, y), 2);
    }

};

int main()
{
    Facade<float> *facade = new Facade<float>();
    float xFloat = 2.5, yFloat = 3.8;

    cout << xFloat << " ^ 2 = " << facade->square( xFloat ) << endl;
    cout << "neg " << xFloat << " = " << facade->negative( xFloat ) << endl;

    delete facade;
    return 0;
}
