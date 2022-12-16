#include <iostream>

using namespace std;

template <class T>
class Operations {

public:
    virtual T addition(T x, T y) = 0;
    virtual T subtraction(T x, T y) = 0;
    virtual T multiplication(T x, T y) = 0;
    virtual T division(T x, T y) = 0;

};


class IntNumbers : public Operations<int> {

public:
    IntNumbers(){}
    ~IntNumbers(){}

    int addition(int x, int y) final { return x + y; }

    int subtraction(int x, int y) final { return x - y; }

    int multiplication(int x, int y) final { return x * y; }

    int division(int x, int y) final {
        if (y != 0){
            return x / y;
        } else return 0;
    }

};

class FloatNumbers : public Operations<float> {

public:
    FloatNumbers(){}
    ~FloatNumbers(){}

    float addition(float x, float y) final { return x + y; }

    float subtraction(float x, float y) final { return x - y; }

    float multiplication(float x, float y) final { return x * y; }

    float division(float x, float y) final {
        if (y != 0.0){
            return x / y;
        } else return 0.0;
    }

};

template <class T>
class Math {

private:
    Operations<T> *operations;

public:
    Math(Operations<T> *operations){
        this->operations = operations;
    }

    T addition(T x, T y){ return this->operations->addition(x, y); }
    T subtraction(T x, T y){ return this->operations->subtraction(x, y); }
    T multiplication(T x, T y){ return this->operations->multiplication(x, y); }
    T division(T x, T y){ return this->operations->division(x, y); }

};


int main(){

    int xInt(5), yInt(2);
    float xFloat(3.0), yFloat(5.2);

    Math<int> *intMath = new Math<int>( new IntNumbers() );
    Math<float> *floatMath = new Math<float>( new FloatNumbers() );

    cout << xInt << " + " << yInt << " = " << intMath->addition(xInt, yInt) << endl;
    cout << xInt << " - " << yInt << " = " << intMath->subtraction(xInt, yInt) << endl;
    cout << xInt << " * " << yInt << " = " << intMath->multiplication(xInt, yInt) << endl;
    cout << xInt << " / " << yInt << " = " << intMath->division(xInt, yInt) << endl;
    cout << "------------------------------------------------------" << endl;
    cout << xFloat << " + " << yFloat << " = " << floatMath->addition(xFloat, yFloat) << endl;
    cout << xFloat << " - " << yFloat << " = " << floatMath->subtraction(xFloat, yFloat) << endl;
    cout << xFloat << " * " << yFloat << " = " << floatMath->multiplication(xFloat, yFloat) << endl;
    cout << xFloat << " / " << yFloat << " = " << floatMath->division(xFloat, yFloat) << endl;

    return 0;

}
