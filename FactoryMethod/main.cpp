#include <iostream>

using namespace std;

template <class T>
class Rectangle {

private:
    T sideA, sideB;

public:
    Rectangle(T sideA, T sideB)
    :sideA (sideA), sideB (sideB)
    {}

    Rectangle *setSideA(T sideA){
        return new Rectangle(sideA, this->sideB);
    }

    Rectangle *setSideB(T sideB){
        return new Rectangle(this->sideA, sideB);
    }

    Rectangle *grow(int factor){
        return new Rectangle(this->sideA * factor, this->sideB * factor);
    }

};

int main()
{
    Rectangle<float> *rect1 = new Rectangle<float>(2.5, 3.0);
    rect1 = rect1->setSideA(3.0);
    Rectangle<float> *rect2 = rect1->setSideB(13.0);

    return 0;
}
