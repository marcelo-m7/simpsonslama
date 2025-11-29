export type Locale = "pt" | "en";

type NavigationItem = {
  to: string;
  label: string;
};

type FeatureCard = {
  title: string;
  description: string;
  cta: string;
};

type EventCard = {
  title: string;
  date: string;
  description: string;
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type TranslationContent = {
  localeName: string;
  navigation: {
    brand: string;
    items: NavigationItem[];
    toggleLabel: string;
    ariaToggle: string;
  };
  footer: {
    description: string;
    contactTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    phoneDisplay: string;
    email: string;
    socialTitle: string;
    socialDescription: string;
    copyright: string;
    crafted: string;
    craftedPt: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroTagline: string;
    primaryCta: string;
    secondaryCta: string;
    features: FeatureCard[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    chapters: { title: string; content: string }[];
    quote: string;
    quoteAuthor: string;
  };
  menu: {
    heroTitle: string;
    heroSubtitle: string;
    drinksTitle: string;
    foodTitle: string;
    drinkItems: MenuItem[];
    foodItems: MenuItem[];
    moeNote: string;
  };
  events: {
    heroTitle: string;
    heroSubtitle: string;
    regularTitle: string;
    specialTitle: string;
    privateTitle: string;
    privateDescription: string;
    privateCta: string;
    instagramTip: string;
    regular: EventCard[];
    special: EventCard[];
  };
  gallery: {
    heroTitle: string;
    heroSubtitle: string;
    categories: { title: string; description: string; images: number }[];
    moreTitle: string;
    moreDescription: string;
    moreButton: string;
    homerTip: string;
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    whereTitle: string;
    addressLabel: string;
    addressTitle?: string;
    addressNote: string;
    hoursTitle: string;
    hoursValue: string;
    hoursNote: string;
    phoneTitle: string;
    phoneValue: string;
    phoneNote: string;
    emailTitle: string;
    emailValue: string;
    socialsTitle: string;
    socials: { label: string; handle: string; href: string }[];
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formPhonePlaceholder: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formResponse: string;
    mapNotice: string;
    mapTitle: string;
    mapAria: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    hint: string;
    backHome: string;
    goBack: string;
    bartTip: string;
  };
};

export const translations: Record<Locale, TranslationContent> = {
  pt: {
    localeName: "PT",
    navigation: {
      brand: "SIMPSONS NA LAMA",
      items: [
        { to: "/", label: "Home" },
        { to: "/about", label: "Sobre" },
        { to: "/menu", label: "Menu" },
        { to: "/events", label: "Eventos" },
        { to: "/gallery", label: "Galeria" },
        { to: "/contact", label: "Contato" },
      ],
      toggleLabel: "EN",
      ariaToggle: "Mudar idioma para inglês",
    },
    footer: {
      description: "O bar mais caótico, divertido e cheio de graffiti de Vitória, ES. Ay caramba!",
      contactTitle: "Contato",
      addressLabel: "Av. Anísio Fernandes Coelho, 1730\nLoja 03 – Jardim da Penha\nVitória – ES, 29060-670 – Brasil",
      phoneLabel: "Telefone",
      emailLabel: "Email",
      phoneDisplay: "(27) 99999-9999",
      email: "contato@simpsonsnalama.com.br",
      socialTitle: "Redes Sociais",
      socialDescription:
        "Tag suas fotos com #SimpsonsNaLama – amamos ver nossos humanos se divertindo!",
      copyright: "© 2024 Simpsons na Lama. Todos os direitos reservados. D'oh! 🍩",
      crafted: "Website crafted with love by Monynha Softwares — inclusive, human-centered & experimental Brazilian technology.",
      craftedPt:
        "Site desenvolvido com carinho pela Monynha Softwares — tecnologia brasileira experimental, humana e acessível.",
    },
    home: {
      heroTitle: "BEM-VINDO AO SPRINGFIELD DA VIDA REAL",
      heroSubtitle:
        "O bar mais caótico, divertido e Simpsons-obsessivo de Vitória. Drinks neon, graffiti por todos os lados e vibes de rua.",
      heroTagline: "Ay caramba! Prepara o coração (e o fígado) pra experiência mais maluca do ES.",
      primaryCta: "Ver o Menu",
      secondaryCta: "Próximos Eventos",
      features: [
        {
          title: "Drinks Épicos",
          description: "Flaming Moe, Duff gelada e poções que fariam o Barney chorar de alegria.",
          cta: "Explorar Menu →",
        },
        {
          title: "Eventos Insanos",
          description: "Cosplay, karaokê, trivia e festas que viram madrugada na capital capixaba.",
          cta: "Ver Eventos →",
        },
        {
          title: "Arte de Rua",
          description: "Murais gigantes, neon pulsando e Easter eggs dos Simpsons em cada canto.",
          cta: "Ver Galeria →",
        },
      ],
      ctaTitle: "VENHA FAZER PARTE DA FAMÍLIA!",
      ctaDescription:
        "Seja springfieldiano por uma noite (ou madrugada). Garanta sua mesa no bar mais lendário de Vitória, ES.",
      ctaButton: "Entre em Contato",
    },
    about: {
      heroTitle: "NOSSA HISTÓRIA",
      heroSubtitle:
        "Como um sofá, uma lata de Duff e muito graffiti criaram o bar mais caótico de Vitória, ES.",
      chapters: [
        {
          title: "Episódio 1: O Começo",
          content:
            "A ideia parecia impossível: transformar um bar comum em uma experiência 100% Simpsons. Não só referências – um mergulho amarelo completo, com humor ácido e coração brasileiro. Era arriscado, era caótico, era exatamente o que Vitória pedia.",
        },
        {
          title: "Episódio 2: Moe's na Praia",
          content:
            "As paredes viraram tela pra artistas de rua capixabas. Homer bebendo Duff, Bart rabiscando tudo, Blinky aparecendo nas esquinas. Neon rosa, verde ácido, amarelo Simpson – um mural vivo onde cada mesa tem Easter egg escondido.",
        },
        {
          title: "Episódio 3: A Comunidade",
          content:
            "Viramos ponto de encontro de Simpsoníacos: cosplayers, nerds de trivia, amantes de drinks malucos e quem só quer rir das próprias trapalhadas. Woo-hoo! Construímos uma família tão caótica quanto a original.",
        },
        {
          title: "Episódio 4: O Presente",
          content:
            "Hoje somos mais que um bar: somos uma declaração de amor aos Simpsons com sotaque capixaba. Flaming Moe real, paredes que falam e noites que viram histórias. É Springfield tropicalizada, com areia e muita lama criativa.",
        },
      ],
      quote: "Venha escrever seu próprio episódio com a gente!",
      quoteAuthor: "- Os criadores malucos desse bar aí 🍩🍺",
    },
    menu: {
      heroTitle: "NOSSO MENU",
      heroSubtitle:
        "Drinks e comidas que fariam até o Homer babar (e ele baba fácil). Tudo com um toque de caos urbano capixaba.",
      drinksTitle: "Drinks Épicos",
      foodTitle: "Comidas Insanas",
      drinkItems: [
        {
          name: "Flaming Moe",
          description:
            "O lendário drink roxo e fumegante que deu fama à Moe's Tavern. Explosivo, misterioso e delicioso.",
          price: "R$ 28",
        },
        {
          name: "Duff Beer",
          description: "A cerveja oficial de Springfield! Servida gelada em caneca especial. Woo-hoo!",
          price: "R$ 18",
        },
        {
          name: "Marge's Blue Hair Shake",
          description: "Milkshake azul alto como o cabelo da Marge. Doce, fotogênico e impossível de ignorar.",
          price: "R$ 22",
        },
        {
          name: "Krusty's Chaos Cocktail",
          description: "Mistura caótica de frutas tropicais, rum e gelo. Servido em balde de tinta pra completar o clima street.",
          price: "R$ 35",
        },
        {
          name: "Homer's D'ohnut Shot",
          description: "Shot doce de baunilha com bordas de açúcar colorido. Rápido, divertido e viciante!",
          price: "R$ 15",
        },
        {
          name: "Barney's Bucket",
          description: "Para os corajosos: 2L de cerveja mista com energético. Compartilhe... ou não.",
          price: "R$ 65",
        },
      ],
      foodItems: [
        {
          name: "Krusty Burger",
          description: "Hambúrguer suculento com bacon, cheddar, alface, tomate e molho especial da casa.",
          price: "R$ 32",
        },
        {
          name: "D'ohnut Burger",
          description: "A loucura definitiva: hambúrguer entre dois donuts glaceados. Doce, salgado, perfeito.",
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
          description: "Para os vegetarianos: mix de legumes grelhados, hummus e pão pita.",
          price: "R$ 26",
        },
        {
          name: "Rosquinhas do Homer",
          description: "3 donuts fresquinhos com coberturas variadas. Perfeito pra compartilhar... se você conseguir.",
          price: "R$ 18",
        },
      ],
      moeNote:
        "Aviso do Moe: \"O chão pode estar pegajoso, mas as bebidas são perfeitas. Confie em mim... ou não.\" 🍺",
    },
    events: {
      heroTitle: "EVENTOS",
      heroSubtitle:
        "Prepare-se pra festas que vão até o amanhecer na Ilha de Vitória. Don't have a cow, man - cola com a gente!",
      regularTitle: "Eventos Regulares",
      specialTitle: "Eventos Especiais",
      privateTitle: "Eventos Privados",
      privateDescription:
        "Aniversário, despedida de solteiro(a) ou evento corporativo no bar mais insano do ES? Woo-hoo! Fala com a gente.",
      privateCta: "Solicitar Orçamento",
      instagramTip:
        "Dica do Bart: segue a gente no Instagram @simpsonsnalama pra ver as melhores fotos e não perder nenhuma bagunça! 📸",
      regular: [
        {
          title: "Krustyland Karaokê Night",
          date: "Toda Sexta-feira, 21h",
          description: "Cante seus hits favoritos dos Simpsons (e outras loucuras). Krusty estaria orgulhoso!",
        },
        {
          title: "Cosplay Contest Mensal",
          date: "Primeiro Sábado do Mês, 22h",
          description: "Vista-se como seu personagem favorito! Prêmios insanos pros melhores cosplays. Ay caramba!",
        },
        {
          title: "Springfield Trivia Night",
          date: "Toda Quarta-feira, 20h",
          description: "Teste seu conhecimento das 34+ temporadas! Cerveja gelada pros vencedores.",
        },
        {
          title: "Live Music Sundays",
          date: "Domingos, 19h",
          description: "Bandas cover de rock e alternativo. Até o Bart tocaria bateria!",
        },
      ],
      special: [
        {
          title: "Treehouse of Horror Party",
          date: "Outubro - Data a anunciar",
          description:
            "A festa mais assustadora do ano! Fantasias, drinks temáticos e maratona de episódios de Halloween.",
        },
        {
          title: "Homer's Birthday Bash",
          date: "12 de Maio",
          description:
            "Celebre o aniversário do amarelo mais amado com drinks especiais e muitos donuts artesanais!",
        },
      ],
    },
    gallery: {
      heroTitle: "GALERIA",
      heroSubtitle: "Um tour visual pelo bar mais maluco de Vitória, ES. Cada foto é um Easter egg vivo!",
      categories: [
        {
          title: "Arte & Decoração",
          description: "Murais insanos e graffiti que cobrem cada canto do bar",
          images: 9,
        },
        {
          title: "Drinks & Comidas",
          description: "Os pratos e bebidas mais loucos que você já viu",
          images: 9,
        },
        {
          title: "Eventos & Festas",
          description: "A galera se divertindo até o amanhecer",
          images: 9,
        },
      ],
      moreTitle: "Quer Ver Mais?",
      moreDescription:
        "Nosso Instagram está lotado de fotos e vídeos insanos! Tag suas fotos com #SimpsonsNaLama – adoramos ver vocês se divertindo!",
      moreButton: "Seguir no Instagram",
      homerTip:
        "Dica do Homer: Tire mil fotos! Quanto mais absurda, melhor. Mmm... fotografia... 📸",
    },
    contact: {
      heroTitle: "CONTATO",
      heroSubtitle: "Vem pro Springfield capixaba! Estamos te esperando com um Duff gelado. 🍺",
      whereTitle: "Onde Estamos",
      addressTitle: "Endereço",
      addressLabel:
        "Av. Anísio Fernandes Coelho, 1730\nLoja 03 – Jardim da Penha\nVitória – ES, 29060-670 – Brasil",
      addressNote: "Procure pelo prédio coberto de graffiti dos Simpsons - impossível errar!",
      hoursTitle: "Horário",
      hoursValue: "Segunda a Domingo: 18h - 6h",
      hoursNote: "Sim, ficamos abertos até o sol nascer!",
      phoneTitle: "Telefone",
      phoneValue: "(27) 99999-9999",
      phoneNote: "WhatsApp disponível!",
      emailTitle: "Email",
      emailValue: "contato@simpsonsnalama.com.br",
      socialsTitle: "Redes Sociais",
      socials: [
        { label: "Instagram", handle: "@simpsonsnalama", href: "https://www.instagram.com/simpsonsnalama/" },
        { label: "X (Twitter)", handle: "@simpsonslama", href: "https://x.com/simpsonslama" },
      ],
      formTitle: "Manda uma Mensagem!",
      formName: "Nome",
      formEmail: "Email",
      formPhone: "Telefone",
      formMessage: "Mensagem",
      formNamePlaceholder: "Homer Simpson",
      formEmailPlaceholder: "homer@simpson.com",
      formPhonePlaceholder: "(27) 99999-9999",
      formMessagePlaceholder:
        "Conta pra gente: quer reservar uma mesa? Fazer um evento? Só dizer oi?",
      formSubmit: "Enviar Mensagem",
      formResponse: "Respondemos em até 24h. Ou no tempo que o Homer leva pra comer um donut. 🍩",
      mapNotice:
        "Atenção: para o mapa funcionar, substitua 'YOUR_GOOGLE_MAPS_API_KEY' por uma chave válida do Google Maps. Use uma variável de ambiente (ex: import.meta.env.VITE_GOOGLE_MAPS_API_KEY).",
      mapTitle: "Localização do Simpsons na Lama",
      mapAria: "Google Map mostrando a localização do Simpsons na Lama",
    },
    notFound: {
      title: "Ay caramba!",
      subtitle: "Essa página tá mais perdida que o Homer no supermercado.",
      description: "Ou ela simplesmente não existe... como a dieta do Homer.",
      hint: "Dica do Bart: tenta a home page ou qualquer coisa menos clicar em links quebrados.",
      backHome: "Voltar pra Home",
      goBack: "Voltar",
      bartTip: "D'oh! 🍩",
    },
  },
  en: {
    localeName: "EN",
    navigation: {
      brand: "SIMPSONS NA LAMA",
      items: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/menu", label: "Menu" },
        { to: "/events", label: "Events" },
        { to: "/gallery", label: "Gallery" },
        { to: "/contact", label: "Contact" },
      ],
      toggleLabel: "PT",
      ariaToggle: "Switch language to Portuguese",
    },
    footer: {
      description:
        "The most chaotic, graffiti-soaked Simpsons bar in Vitória, Brazil. Ay caramba!",
      contactTitle: "Contact",
      addressLabel: "Av. Anísio Fernandes Coelho, 1730\nStore 03 – Jardim da Penha\nVitória – ES, 29060-670 – Brazil",
      phoneLabel: "Phone",
      emailLabel: "Email",
      phoneDisplay: "+55 (27) 99999-9999",
      email: "contato@simpsonsnalama.com.br",
      socialTitle: "Social Media",
      socialDescription: "Tag your shots with #SimpsonsNaLama – we love seeing our humans having fun!",
      copyright: "© 2024 Simpsons na Lama. All rights reserved. D'oh! 🍩",
      crafted: "Website crafted with love by Monynha Softwares — inclusive, human-centered & experimental Brazilian technology.",
      craftedPt:
        "Website crafted with love by Monynha Softwares — inclusive, human-centered & experimental Brazilian technology.",
    },
    home: {
      heroTitle: "WELCOME TO REAL-LIFE SPRINGFIELD",
      heroSubtitle:
        "The most chaotic, neon-drenched Simpsons bar in Vitória. Street vibes, graffiti everywhere and drinks that glow.",
      heroTagline: "Ay caramba! Get ready for the wildest experience in Espírito Santo.",
      primaryCta: "See the Menu",
      secondaryCta: "Upcoming Events",
      features: [
        {
          title: "Epic Drinks",
          description: "Flaming Moe, icy Duff and potions that would make Barney cry happy tears.",
          cta: "Explore Menu →",
        },
        {
          title: "Insane Events",
          description: "Cosplay, karaoke, trivia and parties that run until sunrise in Vitória's city vibes.",
          cta: "View Events →",
        },
        {
          title: "Street Art",
          description: "Huge murals, pulsing neon and Simpsons Easter eggs hidden in every corner.",
          cta: "See Gallery →",
        },
      ],
      ctaTitle: "JOIN THE FAMILY!",
      ctaDescription:
        "Be a Springfieldian for a night (or dawn). Book your table at the most legendary bar in Vitória, Brazil.",
      ctaButton: "Get in Touch",
    },
    about: {
      heroTitle: "OUR STORY",
      heroSubtitle:
        "How a couch, a Duff can and tons of graffiti created the wildest Simpsons bar in Vitória, Brazil.",
      chapters: [
        {
          title: "Episode 1: The Start",
          content:
            "The idea sounded impossible: turn an ordinary bar into a 100% Simpsons dive. Not just references – a full yellow plunge with sharp humor and Brazilian soul. Risky, chaotic and exactly what Vitória was craving.",
        },
        {
          title: "Episode 2: Moe's by the Sea",
          content:
            "Walls became canvases for local street artists. Homer chugging Duff, Bart tagging everything, Blinky peeking around. Pink neon, acid green, Simpson yellow – a living mural packed with hidden Easter eggs at every table.",
        },
        {
          title: "Episode 3: The Community",
          content:
            "We turned into a meeting point for every Simpsoniac: cosplayers, trivia nerds, cocktail lovers and anyone who just wants to laugh at their own chaos. Woo-hoo! We built a family as delightfully messy as the original.",
        },
        {
          title: "Episode 4: The Present",
          content:
            "Today we're more than a bar: we're a love letter to The Simpsons with a coastal Brazilian accent. Real Flaming Moe, talking walls and nights that become stories. It's Springfield tropicalized with sand and plenty of creative mud.",
        },
      ],
      quote: "Come write your own episode with us!",
      quoteAuthor: "- The crazy creators of this bar 🍩🍺",
    },
    menu: {
      heroTitle: "OUR MENU",
      heroSubtitle:
        "Drinks and bites that would make Homer drool (he drools easily). All with a street-chaos twist from Vitória.",
      drinksTitle: "Epic Drinks",
      foodTitle: "Insane Bites",
      drinkItems: [
        {
          name: "Flaming Moe",
          description:
            "The legendary purple, smoky drink that made Moe's Tavern famous. Explosive, mysterious and delicious.",
          price: "R$ 28",
        },
        {
          name: "Duff Beer",
          description: "Springfield's official beer! Served icy cold in a special mug. Woo-hoo!",
          price: "R$ 18",
        },
        {
          name: "Marge's Blue Hair Shake",
          description: "A blue milkshake as tall as Marge's hair. Sweet, photogenic and impossible to ignore.",
          price: "R$ 22",
        },
        {
          name: "Krusty's Chaos Cocktail",
          description: "Chaotic mix of tropical fruits, rum and ice. Served in a paint bucket to keep the street vibe alive.",
          price: "R$ 35",
        },
        {
          name: "Homer's D'ohnut Shot",
          description: "Sweet vanilla shot with colorful sugar rim. Quick, fun and addictive!",
          price: "R$ 15",
        },
        {
          name: "Barney's Bucket",
          description: "For the brave: 2L of mixed beer with energy drink. Share it... or not.",
          price: "R$ 65",
        },
      ],
      foodItems: [
        {
          name: "Krusty Burger",
          description: "Juicy burger with bacon, cheddar, lettuce, tomato and house special sauce.",
          price: "R$ 32",
        },
        {
          name: "D'ohnut Burger",
          description: "The ultimate madness: burger sandwiched between two glazed donuts. Sweet, salty, perfect.",
          price: "R$ 38",
        },
        {
          name: "Springfield Nachos",
          description: "Crispy nachos with melted cheese, jalapeños, guacamole and sour cream.",
          price: "R$ 28",
        },
        {
          name: "Bart's Hot Wings",
          description: "Spicy wings that'd make Bart yell 'Ay caramba!' Served with ranch dip.",
          price: "R$ 35",
        },
        {
          name: "Lisa's Veggie Plate",
          description: "For our veggie friends: grilled veggies, hummus and pita bread.",
          price: "R$ 26",
        },
        {
          name: "Homer's Donuts",
          description: "3 fresh donuts with assorted toppings. Perfect for sharing... if you can resist.",
          price: "R$ 18",
        },
      ],
      moeNote:
        "Moe's note: \"The floor might be sticky, but the drinks are perfect. Trust me... or don't.\" 🍺",
    },
    events: {
      heroTitle: "EVENTS",
      heroSubtitle:
        "Get ready for parties that run until sunrise on Vitória's coast. Don't have a cow, man – join the madness!",
      regularTitle: "Regular Events",
      specialTitle: "Special Events",
      privateTitle: "Private Events",
      privateDescription:
        "Birthday, bachelor(ette) or corporate party at the wildest bar in Espírito Santo? Woo-hoo! Talk to us.",
      privateCta: "Request a Quote",
      instagramTip:
        "Bart's tip: follow us on Instagram @simpsonsnalama to catch the best pics and never miss the chaos! 📸",
      regular: [
        {
          title: "Krustyland Karaoke Night",
          date: "Every Friday, 9 PM",
          description: "Sing your favorite Simpsons hits (and other wild jams). Krusty would be proud!",
        },
        {
          title: "Monthly Cosplay Contest",
          date: "First Saturday of the Month, 10 PM",
          description: "Dress as your favorite character! Insane prizes for the best cosplays. Ay caramba!",
        },
        {
          title: "Springfield Trivia Night",
          date: "Every Wednesday, 8 PM",
          description: "Test your knowledge of 34+ seasons! Cold beer for the winners.",
        },
        {
          title: "Live Music Sundays",
          date: "Sundays, 7 PM",
          description: "Cover bands playing rock and alt tunes. Even Bart would hop on the drums!",
        },
      ],
      special: [
        {
          title: "Treehouse of Horror Party",
          date: "October - Date TBA",
          description:
            "The scariest party of the year! Costumes, themed drinks and a Halloween episode marathon.",
        },
        {
          title: "Homer's Birthday Bash",
          date: "May 12th",
          description:
            "Celebrate the most beloved yellow dad with special drinks and tons of artisan donuts!",
        },
      ],
    },
    gallery: {
      heroTitle: "GALLERY",
      heroSubtitle: "A visual tour of the craziest bar in Vitória, Brazil. Every photo is a living Easter egg!",
      categories: [
        {
          title: "Art & Decor",
          description: "Insane murals and graffiti covering every inch of the bar",
          images: 9,
        },
        {
          title: "Drinks & Bites",
          description: "The wildest dishes and cocktails you've ever seen",
          images: 9,
        },
        {
          title: "Events & Parties",
          description: "Crowds having fun until sunrise",
          images: 9,
        },
      ],
      moreTitle: "Want More?",
      moreDescription:
        "Our Instagram is packed with crazy photos and videos! Tag your shots with #SimpsonsNaLama – we love seeing you have fun!",
      moreButton: "Follow on Instagram",
      homerTip:
        "Homer's tip: snap a thousand pics! The more absurd, the better. Mmm... photography... 📸",
    },
    contact: {
      heroTitle: "CONTACT",
      heroSubtitle: "Come to the Brazilian Springfield! We're waiting with an icy Duff. 🍺",
      whereTitle: "Where to Find Us",
      addressTitle: "Address",
      addressLabel:
        "Av. Anísio Fernandes Coelho, 1730\nStore 03 – Jardim da Penha\nVitória – ES, 29060-670 – Brazil",
      addressNote: "Look for the building covered in Simpsons graffiti – you can't miss it!",
      hoursTitle: "Hours",
      hoursValue: "Monday to Sunday: 6 PM - 6 AM",
      hoursNote: "Yep, we stay open until sunrise!",
      phoneTitle: "Phone",
      phoneValue: "+55 (27) 99999-9999",
      phoneNote: "WhatsApp available!",
      emailTitle: "Email",
      emailValue: "contato@simpsonsnalama.com.br",
      socialsTitle: "Social Media",
      socials: [
        { label: "Instagram", handle: "@simpsonsnalama", href: "https://www.instagram.com/simpsonsnalama/" },
        { label: "X (Twitter)", handle: "@simpsonslama", href: "https://x.com/simpsonslama" },
      ],
      formTitle: "Drop a Message!",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Message",
      formNamePlaceholder: "Homer Simpson",
      formEmailPlaceholder: "homer@simpson.com",
      formPhonePlaceholder: "+55 (27) 99999-9999",
      formMessagePlaceholder:
        "Tell us: want to book a table? Host an event? Just say hi?",
      formSubmit: "Send Message",
      formResponse: "We reply within 24h. Or in the time it takes Homer to eat a donut. 🍩",
      mapNotice:
        "Heads up: for the map to work, replace 'YOUR_GOOGLE_MAPS_API_KEY' with a valid key. Use an env var (e.g. import.meta.env.VITE_GOOGLE_MAPS_API_KEY).",
      mapTitle: "Simpsons na Lama location",
      mapAria: "Google Map showing Simpsons na Lama location",
    },
    notFound: {
      title: "Ay caramba!",
      subtitle: "This page is more lost than Homer in the supermarket.",
      description: "Or it simply doesn't exist... like Homer's diet.",
      hint: "Bart's tip: try the home page or anything but broken links.",
      backHome: "Back to Home",
      goBack: "Go Back",
      bartTip: "D'oh! 🍩",
    },
  },
};

export const defaultLocale: Locale = "pt";
