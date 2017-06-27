#include <iostream>
#include <string>

using namespace std;

class Building {

private:
    string roof, floor, wall;

public:
    Building(string roof, string floor, string wall)
    :roof(roof), floor(floor), wall(wall)
    {}

    Building(){
        Building("null", "null", "null");
    }

    void setRoof(string roof){ this->roof = roof; }
    void setFloor(string floor){ this->floor = floor; }
    void setWall(string wall){ this->wall = wall; }

    string getRoof(void) const { return this->roof; }
    string getFloor(void) const { return this->floor; }
    string getWall(void) const { return this->wall; }

    void print(void){
        cout << "\t" << this->floor << "; " << this->wall << "; " << this->roof << endl;
    }

};

class Builder {

public:
    virtual void startNew(void) = 0;
    virtual void buildRoof(void) = 0;
    virtual void buildFloor(void) = 0;
    virtual void buildWall(void) = 0;
    virtual Building *getResult(void) = 0;

};

class CheapBuilder : public Builder {

private:
    Building *result;

public:
    void startNew(void) final {
        this->result = new Building();
    }

    CheapBuilder(){
        startNew();
    }

    void buildRoof(void) final {
        this->result->setRoof("cheap roof");
    }

    void buildFloor(void) final {
        this->result->setFloor("cheap floor");
    }

    void buildWall(void) final {
        this->result->setWall("cheap wall");
    }

    Building *getResult(void) final {
        return this->result;
    }
};


class ExpensiveBuilder : public Builder {

private:
    Building *result;

public:
    void startNew(void) final {
        this->result = new Building();
    }

    ExpensiveBuilder(){
        startNew();
    }

    void buildRoof(void) final {
        this->result->setRoof("expensive roof");
    }

    void buildFloor(void) final {
        this->result->setFloor("expensive floor");
    }

    void buildWall(void) final {
        this->result->setWall("expensive wall");
    }

    Building *getResult(void) final {
        return this->result;
    }
};

class Director {

public:
    Building *build(Builder *builder){
        builder->startNew();
        builder->buildFloor();
        builder->buildWall();
        builder->buildRoof();
        return builder->getResult();
    }

};

int main()
{
    Director *director = new Director();

    cout << "Director created." << endl;

    Building *cheapBuilding = director->build(new CheapBuilder());

    cout << "Cheap building created." << endl;

    cheapBuilding->print();

    Building *expensiveBuilding = director->build(new ExpensiveBuilder());

    cout << "Expensive building created." << endl;

    expensiveBuilding->print();

    return 0;
}
