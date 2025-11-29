const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-spray-paint">
          <h1 className="font-display text-6xl md:text-7xl text-primary mb-6 animate-neon-pulse">
            NOSSA HISTÓRIA
          </h1>
          <p className="font-body text-xl text-secondary">
            Como um couch, um bar e uma lata de Duff colidiram numa noite louca em Curitiba...
          </p>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          {/* Chapter 1 */}
          <div className="border-l-4 border-primary pl-6 animate-slide-graffiti">
            <h2 className="font-display text-4xl text-secondary mb-4">
              Episódio 1: O Começo
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Tudo começou com uma ideia maluca: e se a gente transformasse um bar comum 
              em uma experiência totalmente Simpsons? Não apenas algumas referências aqui e ali, 
              mas um mergulho completo no universo amarelo mais amado do mundo. 
              <span className="text-accent font-bold"> D'oh!</span> Era arriscado, era caótico, 
              era exatamente o que Curitiba precisava.
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="border-l-4 border-secondary pl-6 animate-slide-graffiti" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-display text-4xl text-accent mb-4">
              Episódio 2: A Construção do Moe's Brasileiro
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Paredes de tijolos viraram telas para artistas de rua locais. Homer bebendo Duff, 
              Bart fazendo graffiti, até o Blinky de três olhos apareceu! Neon rosa, verde ácido, 
              amarelo Simpson - transformamos o espaço em um mural vivo. Cada canto tem um Easter egg, 
              cada mesa conta uma história. É como se Moe's Tavern tivesse feito uma road trip 
              pro Brasil e resolvido ficar por aqui.
            </p>
          </div>

          {/* Chapter 3 */}
          <div className="border-l-4 border-accent pl-6 animate-slide-graffiti" style={{ animationDelay: '0.4s' }}>
            <h2 className="font-display text-4xl text-neon-purple mb-4">
              Episódio 3: A Comunidade
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed">
              O que começou como um bar temático virou um ponto de encontro para todo tipo de 
              Simpsoníaco. Cosplayers de Lisa e Marge, nerds de trivia, amantes de drinks malucos, 
              gente que só quer curtir uma noite diferente - todos são bem-vindos. 
              <span className="text-primary font-bold"> Woo-hoo!</span> Criamos eventos insanos, 
              noites que vão até o amanhecer, e construímos uma família tão caótica quanto 
              os próprios Simpsons.
            </p>
          </div>

          {/* Chapter 4 */}
          <div className="border-l-4 border-primary pl-6 animate-slide-graffiti" style={{ animationDelay: '0.6s' }}>
            <h2 className="font-display text-4xl text-secondary mb-4">
              Episódio 4: O Presente
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Hoje, Simpsons na Lama não é só um bar - é uma experiência, uma declaração de amor 
              à série que definiu gerações. É onde o absurdo vira realidade, onde você pode tomar 
              um Flaming Moe de verdade, onde as paredes falam (literalmente, cheias de frases 
              icônicas). É Springfield encontrando Curitiba, e o resultado é puro 
              <span className="text-accent font-bold"> ay caramba!</span>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 border-4 border-secondary rounded-lg graffiti-border bg-card">
          <p className="font-display text-3xl text-primary mb-4">
            "Venha escrever seu próprio episódio com a gente!"
          </p>
          <p className="font-body text-lg text-muted-foreground">
            - Os criadores malucos desse bar aí 🍩🍺
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
