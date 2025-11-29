import { Beer, Flame, Sparkles, Zap } from "lucide-react";

const Menu = () => {
  // NOTE: This menu data is currently hardcoded. In a real application,
  // this data would typically be fetched from a backend API or a content management system.
  const drinks = [
    {
      name: "Flaming Moe",
      description: "O lendário drink roxo e fumegante que fez Moe's Tavern famoso. Explosivo, misterioso e delicioso.",
      price: "R$ 28",
      icon: Flame,
      color: "text-neon-purple",
    },
    {
      name: "Duff Beer",
      description: "A cerveja oficial de Springfield! Servida gelada em caneca especial. Woo-hoo!",
      price: "R$ 18",
      icon: Beer,
      color: "text-primary",
    },
    {
      name: "Marge's Blue Hair Shake",
      description: "Milkshake azul com topo cremoso alto como o cabelo da Marge. Doce e irresistível.",
      price: "R$ 22",
      icon: Sparkles,
      color: "text-brasil-blue",
    },
    {
      name: "Krusty's Chaos Cocktail",
      description: "Mistura caótica de frutas tropicais, rum e muito gelo. Servido em balde de tinta!",
      price: "R$ 35",
      icon: Zap,
      color: "text-accent",
    },
    {
      name: "Homer's D'ohnut Shot",
      description: "Shot doce de licor de baunilha com bordas de açúcar colorido. Rápido e viciante!",
      price: "R$ 15",
      icon: Sparkles,
      color: "text-secondary",
    },
    {
      name: "Barney's Bucket",
      description: "Para os corajosos: 2L de cerveja mista com energético. Compartilhe... ou não.",
      price: "R$ 65",
      icon: Beer,
      color: "text-accent",
    },
  ];

  const food = [
    {
      name: "Krusty Burger",
      description: "Hambúrguer suculento com bacon, queijo cheddar, alface, tomate e molho especial da casa.",
      price: "R$ 32",
    },
    {
      name: "D'ohnut Burger",
      description: "A loucura definitiva: hambúrguer servido entre dois donuts glaceados. Doce, salgado, perfeito.",
      price: "R$ 38",
    },
    {
      name: "Springfield Nachos",
      description: "Nachos crocantes com queijo derretido, jalapeños, guacamole e creme azedo.",
      price: "R$ 28",
    },
    {
      name: "Bart's Hot Wings",
      description: "Asinhas picantes que fariam até Bart gritar 'Ay caramba!' Servidas com molho ranch.",
      price: "R$ 35",
    },
    {
      name: "Lisa's Veggie Plate",
      description: "Para nossos amigos vegetarianos: mix de legumes grelhados, hummus e pão pita.",
      price: "R$ 26",
    },
    {
      name: "Rosquinhas do Homer",
      description: "3 donuts fresquinhos com coberturas variadas. Perfeito pra compartilhar... se você conseguir.",
      price: "R$ 18",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            NOSSO MENU
          </h1>
          <p className="font-body text-xl text-foreground max-w-3xl mx-auto">
            Drinks e comidas que fariam até o Homer babar (e ele baba fácil). 
            <br />
            <span className="text-secondary">Mmm... bebidas temáticas... 🤤</span>
          </p>
        </div>

        {/* Drinks Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Beer className="h-12 w-12 text-secondary" />
            <h2 className="font-display text-5xl text-secondary">Drinks Épicos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink, index) => (
              <div 
                key={drink.name}
                className="p-6 border-4 border-primary rounded-lg graffiti-border bg-card hover-float animate-spray-paint"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <drink.icon className={`h-10 w-10 ${drink.color}`} />
                  <span className="font-display text-2xl text-accent">{drink.price}</span>
                </div>
                <h3 className="font-display text-3xl text-primary mb-3">{drink.name}</h3>
                <p className="font-body text-muted-foreground">{drink.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Zap className="h-12 w-12 text-accent" />
            <h2 className="font-display text-5xl text-accent">Comidas Insanas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {food.map((item, index) => (
              <div 
                key={item.name}
                className="p-6 border-4 border-secondary rounded-lg graffiti-border bg-card hover-float animate-spray-paint"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-2xl text-accent">{item.price}</span>
                </div>
                <h3 className="font-display text-3xl text-secondary mb-3">{item.name}</h3>
                <p className="font-body text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 text-center p-6 border-4 border-accent rounded-lg bg-card">
          <p className="font-body text-lg text-foreground">
            <span className="text-primary font-bold">Aviso do Moe:</span> "O chão pode estar pegajoso, 
            mas as bebidas são perfeitas. Confie em mim... ou não." 🍺
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;