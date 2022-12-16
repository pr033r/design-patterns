#include <iostream>
#include <string>
#include <ctime>
#include <vector>

using namespace std;

class Component {

public:
    virtual void getDate(void) = 0;

};

class Leaf : public Component {

private:
    string actualDate;

public:

    Leaf(){
        time_t now = time(0);
        char* dt = ctime(&now);
        this->actualDate = string(dt);
    }

    void getDate(void) final {
        cout << this->actualDate << endl;
    }

};

class Composite : public Component {

private:
    vector<Component*> components;

public:

    Composite(){}
    ~Composite(){ this->components.clear(); }

    void add(Component *component){
        this->components.push_back( component );
    }

    void getDate(void) final {
        for (register int i = 0; i < this->components.size(); i++){
            cout << "[" << i << "] ";
            this->components[i]->getDate();
        }
    }

};

int main()
{
    const int COUNT_OF_COMPOSITES = 5, MAX_COUNT_CYCLE = 10;

    Composite *composite[COUNT_OF_COMPOSITES];

    for (register int i = 0; i < COUNT_OF_COMPOSITES; i++){
        composite[i] = new Composite();
        for (register int y = 0; y < MAX_COUNT_CYCLE; y++){
            composite[i]->add( new Leaf() );
        }
        composite[i]->getDate();
        cout << "---------------------------" << endl;
    }

    return 0;

}
