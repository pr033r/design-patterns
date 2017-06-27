#include <iostream>
#include <string>
#include <vector>
#include <list>
#include <thread>
#include <chrono>

using namespace std;

class Object {

private:
public:
    Object(){}
    ~Object(){}

};

template <class T>
class Factory {

public:
    T *newInstance(void){
        return new T();
    }

};

template <class T>
class Pool {

private:
    Factory<T> *factory;
    vector<T> free;
    int maxInstances, usedInstances;

public:
    Pool(Factory<T> *factory, int maxInstances){
        this->factory = factory;
        this->maxInstances = maxInstances;
        usedInstances = 0;
    }

    T acquireFreeInstance(){

        if (this->free.empty()){

            if (this->usedInstances < this->maxInstances){
                T *freshInstance = this->factory->newInstance();
                this->free.push_back( *freshInstance );
                cout << "Fresh instance pushed" << endl;
            }

        } else {

            if (this->free.empty()){
                cout << "Waiting for free instance" << endl;
            }

        }

        cout << "Returning free instance" << endl;
        this->usedInstances++;
        return this->free.back();

    }

    void giveBackInstance(T unusedInstance){

        cout << "Unused instance given back" << endl;
        this->usedInstances--;
        this->free.push_back(unusedInstance);
        return;

    }

};

class Runnable {

private:
public:
    static void run(int maxLoops, Pool<Object> *pool){

        int actualLoop = 1;

        while(actualLoop++ <= maxLoops){

            Object myInstance = pool->acquireFreeInstance();
            this_thread::sleep_for (chrono::seconds(1));
            cout << "pause of 1 second ended\n" << endl;
            pool->giveBackInstance(myInstance);

        }

    }

};

int main(){

    int poolSize = 3, threadCount = 10, maxThreadLoops = 3;

    Factory<Object> *factory = new Factory<Object>();
    Pool<Object> *pool = new Pool<Object>(factory, poolSize);

    list<thread*> threads;

    for (int i = 0; i < threadCount; i++){

        thread* newThread = new thread(Runnable::run, maxThreadLoops, pool);
        threads.push_back(newThread);
        newThread->join();

        cout << "Thread T" << i << " join" << endl;

    }

    threads.clear();
    delete factory;
    delete pool;

    return 0;

}
