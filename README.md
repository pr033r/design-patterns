
## Creational design patterns ##

### FACTORY ###
Zkracuje práci při vytváření objektů, např. pro vytvoření kompletní instance třídy Auto potřebujeme 10 řádků kódů, a vytvořit potřebujeme 20 typů aut. Což je 10x20 řádků. Namísto rutinního vytváření plnohodnotné instance, vytvoříme pro tuto příležitost metodu, která může reagovat i na vstupy a podle toho vrátit konkrétní instanci.

### BUILDER ###
Builder (stavitel) je návrhový vzor popisující způsob jak přistupovat k tvorbě různých instancí s podobným konstrukčním procesem. Ve skutečném světě by se to dalo přirovnat například k přípravě pizzy - všechny druhy mají stejný základ, liší se jen na povrchu.

### FACTORY METHOD ###
Jako tovární metoda (factory method) se označuje metoda, jejíž účel je vytvořit novou instanci nějakého objektu a vytvořenou instanci vrátit. Druh objektu i jeho počáteční vlastnosti jsou dané přijatými parametry, případně i stavem objektu, který tovární metodu poskytuje. Instanční tovární metoda se používá tam, kde je vytvářený objekt nějakým způsobem odvozený od aktuální instance třídy, která tovární metodu poskytuje. Tyto metody se používají hlavně u tzv. konstantních tříd (immutable classes), jejichž stav nelze po vytvoření měnit a pro změnu některého z parametrů je třeba vytvořit instanci novou. 

### POOL ###
V systému existuje nějaký objekt, jehož vytvoření je náročné (na paměť nebo na čas) a zároveň je vyžadován více klienty na více místech.
V řadě situací není žádoucí, aby vzniklo a najednou v paměti existovalo příliš mnoho instancí nějaké třídy (přesná kvantifikace tohoto počtu se liší případ od případu, záleží na velikosti instance a náročnosti jejího vytvoření). Typickým příkladem jsou různá spojení, jejichž navázání trvá až několik sekund a není jich zároveň potřeba tolik.

### PROTOTYPE ###
V systému se nachází třída, jejíž instance je přijatelnější či efektivnější nějakým způsobem replikovat než vytvářet nové. Důvody mohou být různé. Objekt například může při vytváření provádět zbytečné výpočty, alokovat nadbytečné duplikáty již existujících objektů, apod.
Zbytečné výpočty či instance v paměti jsou vždy něco, čeho je lepší se vyvarovat. Při vytváření nové instance je výhodné maximálně využít již existující objekty za předpokladu, že se nebudou měnit. Dalším omezením může být i nutnost znát přesný název třídy při vytváření její nové instance (například operátorem new).


## Structural design patterns ##

### ADAPTER ###
V systému existuje nevyhovující třída se zastaralým, nekompatibilním, nebo jinak neuspokojivým rozhraním. Funkcionalita existující třídy má být zachována a pouze s minimálním úsilím převedena pod rozhraní nové. Může se objevit i požadavek, aby se stávající třída již neměnila (a někdy to ani není možné, například při použití knihovny).

### BRIDGE ###
Bridge je návrhový vzor pro strukturu objektů. Používá se, když chceme oddělit abstrakci od její implementace tak, aby se obě mohly měnit nezávisle. Klient posléze využije některou z implementací nepřímo prostřednictvím abstrakce. Prvním krokem je návrh rozhraní abstrakce (AbstractionApi), které bude využívat klient. Tento návrh by tedy měl být klientem specifikován. Druhým krokem je návrh rozhraní implementace (ImplementationApi), které bude abstrakce využívat pro přístup k implementaci. Návrh bude omezený tím, jaké funkce jsou implementace schopny v průniku poskytnout. Třetím krokem je vytvoření vlastního "mostu", tedy kódu, který bude realizovat abstrakci pomocí implementace. Tento kód nesmí být závislý na žádné konkrétní implementaci, pouze na jejich rozhraní (ImplementationApi). Lze jej realizovat například jako abstraktní třídu, která v konstruktoru obdrží některou z konkrétních implementací (Implementation1 nebo Implementation2). Pokud jiní klienti vyžadují odlišné ozhraní, lze vytvořit potomka AbstractionApi a rozdíly implementovat v něm (RefinedAbstractionApi).

### COMPOSITE ###
Do systému je třeba zabudovat hierarchickou strukturu, která se skládá ze dvou typů objektu: primitivní (leaf) a složené (composite), které obsahují další vnořené objekty. Oba typy objektů mají společné rozhraní, ale každý z nich implementuje požadované funkce jinak. Oba typy jsou tedy vzájemně zaměnitelné. Příklady: Adresáře, ve kterých mohou být soubory i další adresáře. Výrobky, které se mohou skládat z materiálu i z dalších výrobků (polotovarů). Menu, jehož položky mohou být příkazy i další menu.

### DECORATOR ###
Návrhový vzor dekorátor se používá pro dynamické přidání či změnu funkčnosti nějakého objektu bez nutnosti jeho změny či použití dědičnosti (v Javě se jen implementuje rozhraní, v C++ však rozhraní nejsou tak se musí "dědit" abstraktní tříd. Jako dekorátor se označuje třída, která obdrží nějakou instanci, kterou obohatí o novou funkcionalitu. Dekorátor je speciálním druhem proxy, který přidává funkce. Adaptér je speciálním druhem dekorátoru, který pouze přizpůsobuje rozhraní dekorovaného objektu

### FACADE ###
Složitost systému je příliš vysoká vzhledem k nejčastěji využívaným funkcím nebo je z nějakých jiných důvodů vhodné vytvořit jednotné rozhraní k určité části jeho funkcionality. Řešení je mezi systémem a vnějším světem vytvořit další mezivrstvu, na níž se soustředí vnější požadavky a která odstíní klienty od systému. Mezivrstva bude tyto požadavky distribuovat dál mezi jednotlivé komponenty systému, které jsou pro splnění požadavku potřebné. Tato mezivrstva se nazývá fasáda a podobně jako skutečná fasáda u domů zakrývá detaily, které nemají být vidět (cihly). Klientovi odpadne nutnost znát systém do detailu a místo toho bude využívat fasádu s mnohem jednodušším rozhraním. Za nejjednodušší formu fasády lze považovat i návrhový vzor Proxy, ve kterém tvoří odstíněný systém jedna jediná třída.

### FLYWEIGHT ###
Návrhový vzor Flyweight (muší váha) umožňuje v některých případech ušetřit paměť zabranou velkým počtem podobných objektů. Principem je sdílení co největšího množství dat s ostatními podobnými objekty. Každý z mnoha objektů tak může obsahovat pouze odkaz na data sdílená mezi příbuznými objekty a navíc je jen o to, v čem se skutečně liší. Pokud máme například mapu skládající se z různých druhů políček, lze každý druh reprezentovat jednou instancí obsahující společné vlastnosti celého druhu.


