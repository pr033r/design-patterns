#include <iostream>
#include <string>

using namespace std;

class Printer {

public:
    virtual void printChar(char c) = 0;
    virtual void nextLine(void) = 0;

};

class SimplePrinter : public Printer {

public:
    void printChar(char c) final {
        cout << c;
    }

    void nextLine(void) final {
        cout << endl;
    }

};

class WrappingPrinter : public Printer {

private:
    Printer *printer;
    unsigned int maxChars, charsPerCurrentLine;

public:
    WrappingPrinter(Printer *printer, int maxChars)
    :printer(printer), maxChars(maxChars), charsPerCurrentLine(0)
    {}

    ~StringPrinter(){
        delete this->printer;
    }

    void printChar(char c) final {
        if (this->maxChars == this->charsPerCurrentLine){
            nextLine();
        }
        printer->printChar(c);
        this->charsPerCurrentLine++;
    }

    void nextLine(void) final {
        this->printer->nextLine();
        this->charsPerCurrentLine = 0;
    }

};

class StringPrinter : public Printer {

private:
    Printer *printer;

public:
    StringPrinter(Printer *printer)
    :printer(printer)
    {}

    ~StringPrinter(){
        delete this->printer;
    }

    void printChar(char c) final {
        this->printer->printChar(c);
    }

    void nextLine(void) final {
        this->printer->nextLine();
    }

    void printString(string text){
        for (register int i = 0; i < text.size(); i++){
            this->printer->printChar(text.at(i));
        }
        nextLine();
    }


};

int main()
{
    string text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit amet magna in magna gravida vehicula.";
    WrappingPrinter *wrappingPrinter = new WrappingPrinter(new SimplePrinter(), 10);
    StringPrinter *stringPrinter = new StringPrinter(new SimplePrinter());

    for (register int i = 0; i < text.size(); i++){
        wrappingPrinter->printChar(text.at(i));
    }

    cout << endl << "----------------------------------" << endl;

    stringPrinter->printString(text);

    return 0;
}
