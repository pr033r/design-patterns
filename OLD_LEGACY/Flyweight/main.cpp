#include <iostream>
#include <string>
#include <random>

using namespace std;

class TileType {

private:
    string textureName;
    float speed;
    bool isWater;

public:
    TileType(string textureName, float speed, bool isWater)
    :textureName(textureName), speed(speed), isWater(isWater)
    {}

    void setTextureName(string textureName){
        this->textureName = textureName;
    }

    void setSpeed(float speed){
        this->speed = speed;
    }

    void setIsWater(bool isWater){
        this->isWater = isWater;
    }

    string getTextureName(void) const { return this->textureName; }
    float getSpeed(void) const { return this->speed; }
    bool getIsWater(void) const { return this->isWater; }

};

class Tile {

private:
    TileType *tileType;
    bool isOccupied;

public:
    Tile(TileType *tileType)
    :tileType(tileType)
    {}

    void setIsOccupied(bool isOccupied){
        this->isOccupied = isOccupied;
    }

    bool getIsOccupied(void) const { return this->isOccupied; }
    TileType *getTileType(void) const { return this->tileType; }

};

class Map {

private:
    TileType *grass, *hill, *water;
    Tile **tiles; int sizeOfArray, oneSideSize;

    int getRandomNumber(void) const {
        random_device rd;
        mt19937 rng(rd());
        uniform_int_distribution<int> uni(0, this->oneSideSize);
        return uni(rng);
    }

public:
    Map(unsigned int size){
        this->grass = new TileType("grass.jpg", 2.0, false);
        this->hill = new TileType("hill.jpg", 1.0, false);
        this->water = new TileType("water.jpg", 0.0, true);
        this->oneSideSize = size;
        this->sizeOfArray = size * size;
        this->tiles = new Tile*[this->sizeOfArray];
    }
    ~Map(){
        delete tiles;
        delete grass;
        delete hill;
        delete water;
    }

    void clear(void){
        for (register int i = 0; i < this->sizeOfArray; i++){
            tiles[i] = new Tile(this->grass);
        }
    }

    void addSomeHill(int p){
        for (register int i = 0; i < this->sizeOfArray; i++){
            if(this->getRandomNumber() < p){
                this->tiles[i] = new Tile(this->hill);
            }
        }
    }

    void addSomeWater(int p){
        for (register int i = 0; i < this->sizeOfArray; i++){
            if(this->getRandomNumber() < p){
                this->tiles[i] = new Tile(this->water);
            }
        }
    }

    void printMap(void) const {

        TileType *tileType = NULL;
        for (register int i = 0, j = 0; i < this->sizeOfArray; i++, j++){

            tileType = this->tiles[i]->getTileType();
            if (j >= this->oneSideSize){
                j = 0;
                cout << endl;
            }
            if (tileType->getSpeed() == 2.0){
                cout << " G ";
            } else if (tileType->getSpeed() == 1.0){
                cout << " H ";
            } else {
                cout << " W ";
            }

        }
        tileType = NULL;

    }

};

int main()
{
    const int SIZE = 15, DENSITY = 3;

    Map *map = new Map(SIZE);
    map->clear();
    map->addSomeHill(DENSITY);
    map->addSomeWater(DENSITY);
    map->printMap();

    return 0;
}
