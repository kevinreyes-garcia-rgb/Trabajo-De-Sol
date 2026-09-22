const translations = {
    es: {
        headerTagline: "Clases de English",
        mainTitle: "Unidos Somos Mas",
        mainSubtitle: "Explora la gastronomía, arte, tradiciones y figuras destacadas de cada país.",
        searchPlaceholder: "Buscar por país, comida, danza...",
        btnToggleTable: "Ver Tabla",
        btnToggleCards: "Ver Tarjetas",
        thCountry: "País",
        thDish: "Platillo Típico",
        thDance: "Danza",
        thMusic: "Música",
        thSport: "Deporte",
        thPerson: "Figura Destacada",
        lblDish: "Gastronomía",
        lblDance: "Danza Tradicional",
        lblMusic: "Género Musical",
        lblSport: "Deporte Popular",
        lblPerson: "Figura Destacada",
        noResultsTitle: "Sin coincidencias",
        noResultsText: "Prueba con otros términos de búsqueda.",
        lblFooterCreated: "Diseñado y desarrollado por",
        lblFooterHosted: "Optimizado",
        countries: [
            { id: "pais1", country: "Argentina", flag: "🇦🇷", dish: "Asado", dishDesc: "Carne asada a la parrilla", dance: "Tango", music: "Tango", sport: "Fútbol", person: "Lionel Messi", personRole: "Futbolista" },
            { id: "pais2", country: "Bolivia", flag: "🇧🇴", dish: "Salteña", dishDesc: "Empanada jugosa rellena de carne o pollo", dance: "Morenada", music: "Andina", sport: "Fútbol", person: "Evo Morales", personRole: "Político" },
            { id: "pais3", country: "Chile", flag: "🇨🇱", dish: "Empanada de Pino", dishDesc: "Empanada al horno con carne picada y cebolla", dance: "Cueca", music: "Cueca", sport: "Fútbol", person: "Pablo Neruda", personRole: "Poeta" },
            { id: "pais4", country: "Colombia", flag: "🇨🇴", dish: "Bandeja Paisa", dishDesc: "Plato abundante con frijoles, arroz, carne y huevo", dance: "Cumbia", music: "Vallenato", sport: "Fútbol", person: "Gabriel García Márquez", personRole: "Escritor" },
            { id: "pais5", country: "Costa Rica", flag: "🇨🇷", dish: "Gallo Pinto", dishDesc: "Mezcla tradicional de arroz y frijoles", dance: "Punto Guanacasteco", music: "Calipso", sport: "Fútbol", person: "Franklin Chang-Díaz", personRole: "Astronauta" },
            { id: "pais6", country: "Cuba", flag: "🇨🇺", dish: "Ropa Vieja", dishDesc: "Carne deshebrada en salsa de tomate", dance: "Salsa / Son", music: "Son Cubano", sport: "Béisbol", person: "Celia Cruz", personRole: "Cantante" },
            { id: "pais7", country: "Ecuador", flag: "🇪🇨", dish: "Ceviche de Camarón", dishDesc: "Camarones marinados en cítricos y jugo de naranja", dance: "Pasacalle", music: "Pasillo", sport: "Fútbol", person: "Jefferson Pérez", personRole: "Atleta" },
            { id: "pais8", country: "El Salvador", flag: "🇸🇻", dish: "Pupusas", dishDesc: "Tortillas gruesas rellenas de queso, chicharrón o frijoles", dance: "Xuc", music: "Cumbia salvadoreña", sport: "Fútbol", person: "Mágico González", personRole: "Futbolista" },
            { id: "pais9", country: "España", flag: "🇪🇸", dish: "Paella", dishDesc: "Arroz cocinado con mariscos o carnes y azafrán", dance: "Flamenco", music: "Flamenco", sport: "Fútbol", person: "Rafael Nadal", personRole: "Tenista" },
            { id: "pais10", country: "Guatemala", flag: "🇬🇹", dish: "Pepián", dishDesc: "Recado/receta tradicional a base de especias y carne", dance: "Son Guatemalteco", music: "Marimba", sport: "Fútbol", person: "Rigoberta Menchú", personRole: "Activista" },
            { id: "pais11", country: "Guinea Ecuatorial", flag: "🇬🇶", dish: "Succotash", dishDesc: "Sopa o guiso con pescado, plátano y salsa de maní", dance: "Balele", music: "Makossa", sport: "Fútbol", person: "Eric Moussambani", personRole: "Nadador" },
            { id: "pais12", country: "Honduras", flag: "🇭🇳", dish: "Baleada", dishDesc: "Tortilla de harina con frijoles, queso y mantequilla", dance: "Punta", music: "Punta", sport: "Fútbol", person: "Salvador Moncada", personRole: "Científico" },
            { id: "pais13", country: "México", flag: "🇲🇽", dish: "Tacos", dishDesc: "Tortillas de maíz con diversos rellenos y salsas", dance: "Jarabe Tapatío", music: "Mariachi", sport: "Fútbol", person: "Frida Kahlo", personRole: "Pintora" },
            { id: "pais14", country: "Nicaragua", flag: "🇳🇮", dish: "Nacatamal", dishDesc: "Masa de maíz rellena de carne, verduras y arroz", dance: "Palo de Mayo", music: "Chontaleña", sport: "Béisbol", person: "Rubén Darío", personRole: "Poeta" },
            { id: "pais15", country: "Panamá", flag: "🇵🇦", dish: "Sancocho", dishDesc: "Sopa de pollo con ñame y verduras", dance: "Tamborito", music: "Tipico / Reggaeton", sport: "Béisbol", person: "Roberto Durán", personRole: "Boxeador" },
            { id: "pais16", country: "Paraguay", flag: "🇵🇾", dish: "Sopa Paraguaya", dishDesc: "Bizcocho salado de harina de maíz y queso", dance: "Danza de la Botella", music: "Polca Paraguaya", sport: "Fútbol", person: "Augusto Roa Bastos", personRole: "Escritor" },
            { id: "pais17", country: "Perú", flag: "🇵🇪", dish: "Ceviche", dishDesc: "Pescado crudo marinado en jugo de limón y ají", dance: "Marinera", music: "Música Criolla", sport: "Fútbol", person: "Mario Vargas Llosa", personRole: "Escritor" },
            { id: "pais18", country: "Puerto Rico", flag: "🇵🇷", dish: "Mofongo", dishDesc: "Plátano verde frito majado con ajo y chicharrón", dance: "Bomba y Plena", music: "Salsa / Reggaeton", sport: "Béisbol", person: "Roberto Clemente", personRole: "Beisbolista" },
            { id: "pais19", country: "República Dominicana", flag: "🇩🇴", dish: "La Bandera", dishDesc: "Arroz, habichuelas y carne guisada", dance: "Merengue", music: "Bachata / Merengue", sport: "Béisbol", person: "Juan Luis Guerra", personRole: "Músico" },
            { id: "pais20", country: "Uruguay", flag: "🇺🇾", dish: "Chivito", dishDesc: "Sándwich de carne de lomo con diversos acompañamientos", dance: "Candombe", music: "Candombe", sport: "Fútbol", person: "Mario Benedetti", personRole: "Escritor" },
            { id: "pais21", country: "Venezuela", flag: "🇻🇪", dish: "Pabellón Criollo", dishDesc: "Arroz, caraotas negras, carne deshebrada y tajadas", dance: "Joropo", music: "Joropo", sport: "Béisbol", person: "Simón Bolívar", personRole: "Líder Político" }
        ]
    },
    en: {
        headerTagline: "English Class",
        mainTitle: "United we are stronger",
        mainSubtitle: "Explore gastronomy, arts, traditions, and prominent figures from each country.",
        searchPlaceholder: "Search country, food, dance...",
        btnToggleTable: "View Table",
        btnToggleCards: "View Cards",
        thCountry: "Country",
        thDish: "Typical Dish",
        thDance: "Dance",
        thMusic: "Music",
        thSport: "Sport",
        thPerson: "Prominent Figure",
        lblDish: "Gastronomy",
        lblDance: "Traditional Dance",
        lblMusic: "Music Genre",
        lblSport: "Popular Sport",
        lblPerson: "Prominent Figure",
        noResultsTitle: "No matches found",
        noResultsText: "Try searching for a different term.",
        lblFooterCreated: "Designed and developed by",
        lblFooterHosted: "Optimized",
        countries: [
            { id: "country1", country: "Argentina", flag: "🇦🇷", dish: "Asado", dishDesc: "Traditional grilled barbecue meat", dance: "Tango", music: "Tango", sport: "Soccer", person: "Lionel Messi", personRole: "Soccer Player" },
            { id: "country2", country: "Bolivia", flag: "🇧🇴", dish: "Salteña", dishDesc: "Juicy savory pastry filled with meat or chicken", dance: "Morenada", music: "Andean", sport: "Soccer", person: "Evo Morales", personRole: "Politician" },
            { id: "country3", country: "Chile", flag: "🇨🇱", dish: "Empanada de Pino", dishDesc: "Baked pastry stuffed with minced meat and onions", dance: "Cueca", music: "Cueca", sport: "Soccer", person: "Pablo Neruda", personRole: "Poet" },
            { id: "country4", country: "Colombia", flag: "🇨🇴", dish: "Bandeja Paisa", dishDesc: "Hearty platter with beans, rice, meat, and egg", dance: "Cumbia", music: "Vallenato", sport: "Soccer", person: "Gabriel García Márquez", personRole: "Writer" },
            { id: "country5", country: "Costa Rica", flag: "🇨🇷", dish: "Gallo Pinto", dishDesc: "Traditional rice and beans dish", dance: "Punto Guanacasteco", music: "Calypso", sport: "Soccer", person: "Franklin Chang-Díaz", personRole: "Astronaut" },
            { id: "country6", country: "Cuba", flag: "🇨🇺", dish: "Ropa Vieja", dishDesc: "Shredded beef in tomato sauce", dance: "Salsa / Son", music: "Son Cubano", sport: "Baseball", person: "Celia Cruz", personRole: "Singer" },
            { id: "country7", country: "Ecuador", flag: "🇪🇨", dish: "Shrimp Ceviche", dishDesc: "Shrimp marinated in citrus and orange juice", dance: "Pasacalle", music: "Pasillo", sport: "Soccer", person: "Jefferson Pérez", personRole: "Athlete" },
            { id: "country8", country: "El Salvador", flag: "🇸🇻", dish: "Pupusas", dishDesc: "Thick corn tortillas filled with cheese, pork, or beans", dance: "Xuc", music: "Salvadoran Cumbia", sport: "Soccer", person: "Mágico González", personRole: "Soccer Player" },
            { id: "country9", country: "Spain", flag: "🇪🇸", dish: "Paella", dishDesc: "Rice dish cooked with seafood or meats and saffron", dance: "Flamenco", music: "Flamenco", sport: "Soccer", person: "Rafael Nadal", personRole: "Tennis Player" },
            { id: "country10", country: "Guatemala", flag: "🇬🇹", dish: "Pepián", dishDesc: "Traditional meat and spice stew", dance: "Guatemalan Son", music: "Marimba", sport: "Soccer", person: "Rigoberta Menchú", personRole: "Activist" },
            { id: "country11", country: "Equatorial Guinea", flag: "🇬🇶", dish: "Succotash", dishDesc: "Fish and plantain stew with peanut sauce", dance: "Balele", music: "Makossa", sport: "Soccer", person: "Eric Moussambani", personRole: "Swimmer" },
            { id: "country12", country: "Honduras", flag: "🇭🇳", dish: "Baleada", dishDesc: "Flour tortilla with beans, cheese, and sour cream", dance: "Punta", music: "Punta", sport: "Soccer", person: "Salvador Moncada", personRole: "Scientist" },
            { id: "country13", country: "Mexico", flag: "🇲🇽", dish: "Tacos", dishDesc: "Corn tortillas filled with various meats and salsas", dance: "Jarabe Tapatío", music: "Mariachi", sport: "Soccer", person: "Frida Kahlo", personRole: "Painter" },
            { id: "country14", country: "Nicaragua", flag: "🇳🇮", dish: "Nacatamal", dishDesc: "Corn dough dumpling filled with meat, vegetables, and rice", dance: "Palo de Mayo", music: "Chontaleña", sport: "Baseball", person: "Rubén Darío", personRole: "Poet" },
            { id: "country15", country: "Panama", flag: "🇵🇦", dish: "Sancocho", dishDesc: "Chicken soup with yam and vegetables", dance: "Tamborito", music: "Tipico / Reggaeton", sport: "Baseball", person: "Roberto Durán", personRole: "Boxer" },
            { id: "country16", country: "Paraguay", flag: "🇵🇾", dish: "Sopa Paraguaya", dishDesc: "Savory cornbread with cheese and onions", dance: "Bottle Dance", music: "Paraguayan Polka", sport: "Soccer", person: "Augusto Roa Bastos", personRole: "Writer" },
            { id: "country17", country: "Peru", flag: "🇵🇪", dish: "Ceviche", dishDesc: "Raw fish marinated in lime juice and chili peppers", dance: "Marinera", music: "Criollo Music", sport: "Soccer", person: "Mario Vargas Llosa", personRole: "Writer" },
            { id: "country18", country: "Puerto Rico", flag: "🇵🇷", dish: "Mofongo", dishDesc: "Mashed fried green plantains with garlic and pork rinds", dance: "Bomba y Plena", music: "Salsa / Reggaeton", sport: "Baseball", person: "Roberto Clemente", personRole: "Baseball Player" },
            { id: "country19", country: "Dominican Republic", flag: "🇩🇴", dish: "La Bandera", dishDesc: "Rice, red beans, and stewed meat", dance: "Merengue", music: "Bachata / Merengue", sport: "Baseball", person: "Juan Luis Guerra", personRole: "Musician" },
            { id: "country20", country: "Uruguay", flag: "🇺🇾", dish: "Chivito", dishDesc: "Steak sandwich served with various toppings", dance: "Candombe", music: "Candombe", sport: "Soccer", person: "Mario Benedetti", personRole: "Writer" },
            { id: "country21", country: "Venezuela", flag: "🇻🇪", dish: "Pabellón Criollo", dishDesc: "Rice, black beans, shredded beef, and fried plantains", dance: "Joropo", music: "Joropo", sport: "Baseball", person: "Simón Bolívar", personRole: "Political Leader" }
        ]
    },
    fr: {
        headerTagline: "Clases de ingles",
        mainTitle: "Unidos Somos Mas",
        mainSubtitle: "Découvrez la gastronomie, les arts, les traditions et les personnalités de chaque pays.",
        searchPlaceholder: "Rechercher un pays, plat, danse...",
        btnToggleTable: "Voir Tableau",
        btnToggleCards: "Voir Cartes",
        thCountry: "Pays",
        thDish: "Plat Typique",
        thDance: "Danse",
        thMusic: "Musique",
        thSport: "Sport",
        thPerson: "Personnalité",
        lblDish: "Gastronomie",
        lblDance: "Danse Traditionnelle",
        lblMusic: "Genre Musical",
        lblSport: "Sport Populaire",
        lblPerson: "Personnalité Marquante",
        noResultsTitle: "Aucun résultat",
        noResultsText: "Essayez avec d'autres termes.",
        lblFooterCreated: "Conçu et développé par",
        lblFooterHosted: "Optimisé",
        countries: [
            { id: "pays1", country: "Argentine", flag: "🇦🇷", dish: "Asado", dishDesc: "Viande grillée au barbecue", dance: "Tango", music: "Tango", sport: "Football", person: "Lionel Messi", personRole: "Footballeur" },
            { id: "pays2", country: "Bolivie", flag: "🇧🇴", dish: "Salteña", dishDesc: "Chaussons juteux farcis à la viande ou au poulet", dance: "Morenada", music: "Andine", sport: "Football", person: "Evo Morales", personRole: "Homme politique" },
            { id: "pays3", country: "Chili", flag: "🇨🇱", dish: "Empanada de Pino", dishDesc: "Chausson cuit au four avec viande hachée et oignons", dance: "Cueca", music: "Cueca", sport: "Football", person: "Pablo Neruda", personRole: "Poète" },
            { id: "pays4", country: "Colombie", flag: "🇨🇴", dish: "Bandeja Paisa", dishDesc: "Plat copieux avec haricots, riz, viande et œuf", dance: "Cumbia", music: "Vallenato", sport: "Football", person: "Gabriel García Márquez", personRole: "Écrivain" },
            { id: "pays5", country: "Costa Rica", flag: "🇨🇷", dish: "Gallo Pinto", dishDesc: "Mélange traditionnel de riz et de haricots", dance: "Punto Guanacasteco", music: "Calypso", sport: "Football", person: "Franklin Chang-Díaz", personRole: "Astronaute" },
            { id: "pays6", country: "Cuba", flag: "🇨🇺", dish: "Ropa Vieja", dishDesc: "Effiloché de bœuf dans une sauce tomate", dance: "Salsa / Son", music: "Son Cubano", sport: "Baseball", person: "Celia Cruz", personRole: "Chanteuse" },
            { id: "pays7", country: "Équateur", flag: "🇪🇨", dish: "Ceviche de Crevettes", dishDesc: "Crevettes marinées dans le citron et le jus d'orange", dance: "Pasacalle", music: "Pasillo", sport: "Football", person: "Jefferson Pérez", personRole: "Athlète" },
            { id: "pays8", country: "El Salvador", flag: "🇸🇻", dish: "Pupusas", dishDesc: "Galettes de maïs épaisses farcies au fromage ou haricots", dance: "Xuc", music: "Cumbia salvadorienne", sport: "Football", person: "Mágico González", personRole: "Footballeur" },
            { id: "pays9", country: "Espagne", flag: "🇪🇸", dish: "Paella", dishDesc: "Plat de riz cuisiné avec fruits de mer ou viandes et safran", dance: "Flamenco", music: "Flamenco", sport: "Football", person: "Rafael Nadal", personRole: "Joueur de tennis" },
            { id: "pays10", country: "Guatemala", flag: "🇬🇹", dish: "Pepián", dishDesc: "Ragoût traditionnel de viande et d'épices", dance: "Son Guatemaltèque", music: "Marimba", sport: "Football", person: "Rigoberta Menchú", personRole: "Militante" },
            { id: "pays11", country: "Guinée Équatoriale", flag: "🇬🇶", dish: "Succotash", dishDesc: "Ragoût de poisson et banane avec sauce aux arachides", dance: "Balele", music: "Makossa", sport: "Football", person: "Eric Moussambani", personRole: "Nageur" },
            { id: "pays12", country: "Honduras", flag: "🇭🇳", dish: "Baleada", dishDesc: "Tortilla de farine avec haricots, fromage et crème", dance: "Punta", music: "Punta", sport: "Football", person: "Salvador Moncada", personRole: "Scientifique" },
            { id: "pays13", country: "Mexique", flag: "🇲🇽", dish: "Tacos", dishDesc: "Tortillas de maïs garnies de viande et sauces", dance: "Jarabe Tapatío", music: "Mariachi", sport: "Football", person: "Frida Kahlo", personRole: "Peintre" },
            { id: "pays14", country: "Nicaragua", flag: "🇳🇮", dish: "Nacatamal", dishDesc: "Pâte de maïs farcie de viande, légumes et riz", dance: "Palo de Mayo", music: "Chontaleña", sport: "Baseball", person: "Rubén Darío", personRole: "Poète" },
            { id: "pays15", country: "Panama", flag: "🇵🇦", dish: "Sancocho", dishDesc: "Soupe de poulet avec igname et légumes", dance: "Tamborito", music: "Tipico / Reggaeton", sport: "Baseball", person: "Roberto Durán", personRole: "Boxeur" },
            { id: "pays16", country: "Paraguay", flag: "🇵🇾", dish: "Sopa Paraguaya", dishDesc: "Gâteau salé à la farine de maïs et au fromage", dance: "Danse de la Bouteille", music: "Polka Paraguayenne", sport: "Football", person: "Augusto Roa Bastos", personRole: "Écrivain" },
            { id: "pays17", country: "Pérou", flag: "🇵🇪", dish: "Ceviche", dishDesc: "Poisson cru mariné dans du jus de citron vert et piment", dance: "Marinera", music: "Musique Créole", sport: "Football", person: "Mario Vargas Llosa", personRole: "Écrivain" },
            { id: "pays18", country: "Porto Rico", flag: "🇵🇷", dish: "Mofongo", dishDesc: "Bananes vertes frites écrasées avec de l'ail et du porc", dance: "Bomba y Plena", music: "Salsa / Reggaeton", sport: "Baseball", person: "Roberto Clemente", personRole: "Joueur de baseball" },
            { id: "pays19", country: "République Dominicaine", flag: "🇩🇴", dish: "La Bandera", dishDesc: "Riz, haricots rouges et viande mijotée", dance: "Merengue", music: "Bachata / Merengue", sport: "Baseball", person: "Juan Luis Guerra", personRole: "Musitien" },
            { id: "pays20", country: "Uruguay", flag: "🇺🇾", dish: "Chivito", dishDesc: "Sandwich au bœuf servi con divers accompagnements", dance: "Candombe", music: "Candombe", sport: "Football", person: "Mario Benedetti", personRole: "Écrivain" },
            { id: "pays21", country: "Venezuela", flag: "🇻🇪", dish: "Pabellón Criollo", dishDesc: "Riz, haricots noirs, effiloché de bœuf et bananes frites", dance: "Joropo", music: "Joropo", sport: "Baseball", person: "Simón Bolívar", personRole: "Dirigeant politique" }
        ]
    }
};

let currentLang = 'es';
let currentView = 'cards';

const langSelect = document.getElementById('langSelect');
const searchInput = document.getElementById('searchInput');
const btnToggleView = document.getElementById('btnToggleView');
const btnToggleText = document.getElementById('btnToggleText');
const toggleIcon = document.getElementById('toggleIcon');
const cardsContainer = document.getElementById('cardsContainer');
const tableView = document.getElementById('tableView');
const tableBody = document.getElementById('tableBody');
const noResults = document.getElementById('noResults');

function renderUI() {
    const langData = translations[currentLang];

    document.getElementById('headerTagline').textContent = langData.headerTagline;
    document.getElementById('mainTitle').textContent = langData.mainTitle;
    document.getElementById('mainSubtitle').textContent = langData.mainSubtitle;
    document.getElementById('searchInput').placeholder = langData.searchPlaceholder;
    document.getElementById('thCountry').textContent = langData.thCountry;
    document.getElementById('thDish').textContent = langData.thDish;
    document.getElementById('thDance').textContent = langData.thDance;
    document.getElementById('thMusic').textContent = langData.thMusic;
    document.getElementById('thSport').textContent = langData.thSport;
    document.getElementById('thPerson').textContent = langData.thPerson;
    document.getElementById('noResultsTitle').textContent = langData.noResultsTitle;
    document.getElementById('noResultsText').textContent = langData.noResultsText;
    document.getElementById('lblFooterCreated').textContent = langData.lblFooterCreated;
    document.getElementById('lblFooterHosted').textContent = langData.lblFooterHosted;

    btnToggleText.textContent = currentView === 'cards' ? langData.btnToggleTable : langData.btnToggleCards;

    const query = searchInput.value.trim().toLowerCase();
    const filteredCountries = langData.countries.filter(c => {
        return c.country.toLowerCase().includes(query) ||
               c.dish.toLowerCase().includes(query) ||
               c.dance.toLowerCase().includes(query) ||
               c.music.toLowerCase().includes(query) ||
               c.sport.toLowerCase().includes(query) ||
               c.person.toLowerCase().includes(query);
    });

    cardsContainer.innerHTML = '';
    tableBody.innerHTML = '';

    if (filteredCountries.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }

    filteredCountries.forEach((c) => {
        // Vista de Tarjetas
        const card = document.createElement('div');
        card.className = `glass-card-pink rounded-2xl p-6 flex flex-col justify-between transition-all duration-300`;
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-4 pb-3 border-b border-rose-900/40">
                    <h3 class="text-xl font-semibold text-rose-100 flex items-center gap-3">
                        <span class="text-3xl">${c.flag || '🚩'}</span>
                        <span>${c.country || 'Nombre del País'}</span>
                    </h3>
                </div>
                <ul class="space-y-3 text-sm text-rose-100/80">
                    <li class="flex items-start gap-2">
                        <i class="fa-solid fa-utensils text-rose-400 mt-1"></i>
                        <div><strong class="text-rose-300 block text-xs uppercase">${langData.lblDish}</strong> ${c.dish} <br><span class="text-xs text-rose-300/50">${c.dishDesc}</span></div>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-solid fa-fan text-rose-400 mt-1"></i>
                        <div><strong class="text-rose-300 block text-xs uppercase">${langData.lblDance}</strong> ${c.dance}</div>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-solid fa-music text-rose-400 mt-1"></i>
                        <div><strong class="text-rose-300 block text-xs uppercase">${langData.lblMusic}</strong> ${c.music}</div>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-solid fa-trophy text-rose-400 mt-1"></i>
                        <div><strong class="text-rose-300 block text-xs uppercase">${langData.lblSport}</strong> ${c.sport}</div>
                    </li>
                    <li class="flex items-start gap-2">
                        <i class="fa-solid fa-star text-rose-400 mt-1"></i>
                        <div><strong class="text-rose-300 block text-xs uppercase">${langData.lblPerson}</strong> ${c.person} <span class="text-xs text-rose-300/50">(${c.personRole})</span></div>
                    </li>
                </ul>
            </div>
        `;
        cardsContainer.appendChild(card);

        // Vista de Tabla
        const row = document.createElement('tr');
        row.className = "hover:bg-rose-900/20 border-b border-rose-900/30 transition-colors";
        row.innerHTML = `
            <td class="p-4 font-semibold text-rose-100 whitespace-nowrap"><span class="mr-2">${c.flag || '🚩'}</span> ${c.country}</td>
            <td class="p-4">${c.dish}<br><span class="text-xs text-rose-300/50">${c.dishDesc}</span></td>
            <td class="p-4">${c.dance}</td>
            <td class="p-4">${c.music}</td>
            <td class="p-4">${c.sport}</td>
            <td class="p-4">${c.person}<br><span class="text-xs text-rose-300/50">${c.personRole}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    renderUI();
});

searchInput.addEventListener('input', renderUI);

btnToggleView.addEventListener('click', () => {
    if (currentView === 'cards') {
        currentView = 'table';
        cardsContainer.classList.add('hidden');
        tableView.classList.remove('hidden');
        toggleIcon.className = "fa-solid fa-grip-vertical";
    } else {
        currentView = 'cards';
        tableView.classList.add('hidden');
        cardsContainer.classList.remove('hidden');
        toggleIcon.className = "fa-solid fa-table";
    }
    renderUI();
});

window.addEventListener('DOMContentLoaded', renderUI);
