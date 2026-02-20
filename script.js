const events = [
    {
        yearsAgo: 13800000000,
        title: "El Big Bang",
        desc: "La aparición del universo. Una explosión de espacio y tiempo que da origen a todo el cosmos en expansión.",
        icon: "🌌", color: "#ff007f", humanDate: "Hace ~13.800 millones de años"
    },
    {
        yearsAgo: 13799700000,
        title: "Hidrógeno y Helio",
        desc: "El universo se enfría lo suficiente (Recombinación) para que se formen los primeros y más abundantes elementos: Hidrógeno y Helio.",
        icon: "✨", color: "#ffff00", humanDate: "Hace ~13.799 millones de años"
    },
    {
        yearsAgo: 13600000000,
        title: "Forja de Elementos Pesados",
        desc: "Las primeras estrellas masivas mueren en gigantescas supernovas, sembrando el incipiente universo del carbono, oxígeno y hierro necesarios para la vida.",
        icon: "💥", color: "#ff4500", humanDate: "Hace ~13.600 millones de años"
    },
    {
        yearsAgo: 13500000000,
        title: "Formación de la Vía Láctea",
        desc: "Nuestra galaxia hogar comienza a ensamblarse en un gigantesco disco espiral a partir del colapso gravitatorio de inmensas nubes de gas primigenio.",
        icon: "🌌", color: "#dda0dd", humanDate: "Hace ~13.500 millones de años"
    },
    {
        yearsAgo: 4600000000,
        title: "Formación del Sistema Solar",
        desc: "Una densa nebulosa solar colapsa, posiblemente desencadenada por una supernova cercana, formando nuestro ardiente Sol naciente y el disco protoplanetario.",
        icon: "☀️", color: "#ffd700", humanDate: "Hace ~4.600 millones de años"
    },
    {
        yearsAgo: 4500000000,
        title: "Formación de la Tierra",
        desc: "Nuestro planeta toma forma a base de violentas colisiones. Nace la Luna producto de un impacto titánico entre la joven Tierra y el protoplaneta Theia.",
        icon: "🌍", color: "#00d4ff", humanDate: "Hace ~4.500 millones de años"
    },
    {
        yearsAgo: 3800000000,
        title: "El Origen de la Vida (LUCA)",
        desc: "En aguas primordiales termales surge el Último Ancestro Común Universal (LUCA). Aparece la magia de la vida unicelular.",
        icon: "🦠", color: "#00ff7f", humanDate: "Hace ~3.800 millones de años"
    },
    {
        yearsAgo: 2400000000,
        title: "La Gran Oxidación",
        desc: "Las cianobacterias revolucionan el planeta exhalando oxígeno libre, causando un evento de extinción global pero posibilitando la respiración futura.",
        icon: "💨", color: "#87ceeb", humanDate: "Hace ~2.400 millones de años"
    },
    {
        yearsAgo: 2000000000,
        title: "Célula Eucariota",
        desc: "Increíble salto evolutivo por endosimbiosis: células complejas con un blindado núcleo y orgánulos mitocondriales que generan bioenergía.",
        icon: "🧫", color: "#9370db", humanDate: "Hace ~2.000 millones de años"
    },
    {
        yearsAgo: 1200000000,
        title: "Reproducción Sexual",
        desc: "La vida descubre una fenomenal forma de barajar su ADN entre dos individuos de la misma especie, multiplicando radicalmente la diversidad biológica.",
        icon: "🧬", color: "#ff1493", humanDate: "Hace ~1.200 millones de años"
    },
    {
        yearsAgo: 600000000,
        title: "Vida Multicelular",
        desc: "Las células deciden que unidas son más fuertes. Comienzan a cooperar en vastas comunas conformando organismos enteros y diferenciados.",
        icon: "🌿", color: "#32cd32", humanDate: "Hace ~600 millones de años"
    },
    {
        yearsAgo: 541000000,
        title: "Explosión Cámbrica",
        desc: "Un brutal estallido de innovación morfológica marina. Aparecen caparazones, espinas dorsales y los rudimentarios antepasados de los animales modernos.",
        icon: "🦐", color: "#ffa500", humanDate: "Hace ~541 millones de años"
    },
    {
        yearsAgo: 480000000,
        title: "Primeras Plantas y Peces",
        desc: "La vida continental da sus primeros pasos con plantas terrestres primitivas (musgos). En los océanos, los peces desarrollan verdaderas mandíbulas.",
        icon: "🐟", color: "#00ced1", humanDate: "Hace ~480 millones de años"
    },
    {
        yearsAgo: 375000000,
        title: "Anfibios y Bosques",
        desc: "¡Saliendo del agua! Peces como el Tiktaalik evolucionan aletas como patas para arrastrarse. La Tierra se cubre de colosales e inmensos bosques de helechos.",
        icon: "🐸", color: "#228b22", humanDate: "Hace ~375 millones de años"
    },
    {
        yearsAgo: 252000000,
        title: "La Gran Mortandad",
        desc: "La extinción masiva del Pérmico-Triásico. Eventos volcánicos apocalípticos aniquilan al ~90% de la vida en la Tierra. A partir de allí surgen los primeros mamíferos y dinosaurios.",
        icon: "🌋", color: "#b22222", humanDate: "Hace ~252 millones de años"
    },
    {
        yearsAgo: 150000000,
        title: "Era del Estegosaurio",
        desc: "El período Jurásico pleno es dominado por inmensos saurópodos de cuellos largos y herbívoros con enormes placas como el icónico Stegosaurus.",
        icon: "🦕", color: "#8fbc8f", humanDate: "Hace ~150 millones de años"
    },
    {
        yearsAgo: 66000000,
        title: "Tiranosaurio Rex y Asteroide",
        desc: "Dominio cumbre del T-Rex a finales del período Cretácico, el cual es súbitamente truncado por el violento impacto del asteroide en Chicxulub.",
        icon: "🦖", color: "#d2691e", humanDate: "Hace ~66 millones de años"
    },
    {
        yearsAgo: 3200000,
        title: "Australopithecus (Lucy)",
        desc: "Uno de nuestros muy primeros ancestros homínidos deja los árboles bajando a la sabana africana y se adapta definitivamente a caminar erguido sobre dos pies.",
        icon: "🦴", color: "#deb887", humanDate: "Hace ~3.2 millones de años"
    },
    {
        yearsAgo: 2800000,
        title: "Homo Habilis",
        desc: "Ganan el apodo de 'El hombre hábil'. Es la primera especie humana sistemática en modelar rudimentarias herramientas líticas rompiendo piedras inteligentemente.",
        icon: "🪨", color: "#a9a9a9", humanDate: "Hace ~2.8 millones de años"
    },
    {
        yearsAgo: 1900000,
        title: "Homo Erectus",
        desc: "Primer homínido con proporciones muy similares a las nuestras. Dominaron el uso del fuego y fueron la primera rama que se expandió de África a Eurasia.",
        icon: "🔥", color: "#ff4500", humanDate: "Hace ~1.9 millones de años"
    },
    {
        yearsAgo: 500000,
        title: "Diversificación (Neandertales)",
        desc: "Aparición de subramas altamente capacitadas como el Homo Heidelbergensis y posteriormente los Neandertales. Los Sapiens coexistirían y se cruzarían con ellos.",
        icon: "�", color: "#cd853f", humanDate: "Hace ~500.000 años"
    },
    {
        yearsAgo: 300000,
        title: "Homo Sapiens",
        desc: "Aparición de nuestra propia especie, los humanos anatómicamente modernos. Evolucionamos un gran lóbulo frontal, lenguaje enrevesado, arte rupestre simbólico y un implacable deseo de explorar.",
        icon: "🧠", color: "#ff6347", humanDate: "Hace ~300.000 años"
    },
    {
        yearsAgo: 10000,
        title: "La Agricultura",
        desc: "Revolución cultural del Neolítico. El ser humano descifra la domesticación masiva de plantas y rebaños animales, fundando el concepto de aldeas perennes.",
        icon: "🌾", color: "#ffd700", humanDate: "Hace ~10.000 años"
    },
    {
        yearsAgo: 5000,
        title: "Principales Civilizaciones",
        desc: "Florecen reinos dinásticos espectaculares en Sumeria, Egipto imperial y el lejano Valle del Indo. Nace la abstracta invención de la escritura silábica, la burocracia, y las matemáticas.",
        icon: "🏛️", color: "#daa520", humanDate: "Hace ~5.000 años"
    },
    {
        yearsAgo: 85,
        title: "El Computador",
        desc: "Nacen calculadoras electrónicas experimentales pioneras que ocupaban cuartos enteros (ENIAC). La humanidad desvela el poder de automatizar su pensamiento mediante tubos de vacío y semiconductores oscilantes.",
        icon: "💻", color: "#4682b4", humanDate: "Hace ~85 años (Años 1940)"
    },
    {
        yearsAgo: 40,
        title: "El Internet",
        desc: "TCP/IP se asienta en la naciente World Wide Web militar-académica. La raza transita radicalmente de una fragmentada cultura física hacia una esfera omni-informacional o ciberespacio.",
        icon: "🌐", color: "#1e90ff", humanDate: "Años 1980 - 1990"
    },
    {
        yearsAgo: 19,
        title: "iPhone y Era Móvil",
        desc: "La computadora se engulle todo otro medio existente y colapsa en nuestro bolsillo. Interfaz multitáctil, hiperconexión humana instantánea reescribiendo la interacción sociológica.",
        icon: "📱", color: "#c0c0c0", humanDate: "Año 2007"
    },
    {
        yearsAgo: 0,
        title: "La Actualidad",
        desc: "Redes neuronales emulando inteligencia analítica (IA generativa), revolución verde para mitigar daños climáticos y viajes orbitales comerciales para una latente civilización pluri-planetaria.",
        icon: "🚀", color: "#ffffff", humanDate: "El Presente"
    }
];

// Helper to convert years ago into Cosmic Calendar date
function getCosmicDate(yearsAgo) {
    if (yearsAgo === 0) return "31 de Diciembre, 23:59:59";

    const totalYears = 13800000000;
    // Exactly 365 days so it cleanly aligns with standard months array which totals 365 days
    const secondsInYear = 365 * 24 * 60 * 60;

    // Fraction of the universe timeline mapped to one standard year
    const secondsAgo = (yearsAgo / totalYears) * secondsInYear;

    // Seconds from beginning of the cosmic year
    let elapsedSeconds = secondsInYear - secondsAgo;

    // Safety bounds to strictly keep it between Jan 1 and Dec 31
    if (elapsedSeconds < 0) elapsedSeconds = 0;
    if (elapsedSeconds >= secondsInYear) elapsedSeconds = secondsInYear - 1;

    const days = Math.floor(elapsedSeconds / (24 * 3600));
    const remainderAfterDays = elapsedSeconds % (24 * 3600);
    const hours = Math.floor(remainderAfterDays / 3600);
    const remainderAfterHours = remainderAfterDays % 3600;
    const minutes = Math.floor(remainderAfterHours / 60);
    const seconds = remainderAfterHours % 60;

    const months = [
        { name: "Enero", days: 31 }, { name: "Febrero", days: 28 }, { name: "Marzo", days: 31 },
        { name: "Abril", days: 30 }, { name: "Mayo", days: 31 }, { name: "Junio", days: 30 },
        { name: "Julio", days: 31 }, { name: "Agosto", days: 31 }, { name: "Septiembre", days: 30 },
        { name: "Octubre", days: 31 }, { name: "Noviembre", days: 30 }, { name: "Diciembre", days: 31 }
    ];

    let currentDay = days + 1;
    let monthIdx = 0;
    while (currentDay > months[monthIdx].days && monthIdx < 11) {
        currentDay -= months[monthIdx].days;
        monthIdx++;
    }

    // Ensure we don't exceed December 31
    if (monthIdx >= 11 && currentDay > 31) {
        currentDay = 31;
    }

    const monthName = months[monthIdx].name;
    const s = Math.floor(seconds).toString().padStart(2, '0');

    // If it's the last day, show time accurately
    if (monthIdx === 11 && currentDay === 31) {
        return `31 de ${monthName}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${s}`;
    } else {
        return `${Math.floor(currentDay)} de ${monthName}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
    const calendarWidget = document.getElementById('calendar-widget');
    const widgetDate = document.getElementById('calendar-date');
    const widgetHumanDate = document.getElementById('calendar-human');

    // Precalculate cosmic dates into events
    events.forEach(ev => {
        ev.cosmicDateStr = getCosmicDate(ev.yearsAgo);
    });

    // Render Timeline 
    // Uses logarithmic scale mapping implicitly by distributing blocks evenly but labelling them specifically
    events.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        item.style.color = event.color;
        item.dataset.index = index;

        const content = document.createElement('div');
        content.className = 'content';

        content.innerHTML = `
            <h2><span style="font-size:2.5rem">${event.icon}</span> <span style="color: ${event.color}">${event.title}</span></h2>
            <div class="date-badge">
                <span class="date-cosmic">${event.cosmicDateStr}</span>
                <span class="date-real">${event.humanDate}</span>
            </div>
            <p style="color: var(--text-main)">${event.desc}</p>
        `;

        item.appendChild(content);
        timeline.appendChild(item);
    });

    // Scroll Animations for Timeline elements & Widget Update
    const items = document.querySelectorAll('.timeline-item');

    // Update top widget based on what element is most central on screen
    const updateWidget = () => {
        let bestMatch = null;
        let minDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const dist = Math.abs(viewportCenter - itemCenter);

            if (dist < minDistance) {
                minDistance = dist;
                bestMatch = item;
            }
        });

        if (bestMatch) {
            const dataIndex = bestMatch.dataset.index;
            const eventInfo = events[dataIndex];
            widgetDate.textContent = eventInfo.cosmicDateStr;

            // Reapply linear gradient with text clip property carefully
            widgetDate.style.background = `linear-gradient(90deg, ${eventInfo.color}, #00d4ff)`;
            widgetDate.style.webkitBackgroundClip = "text";
            widgetDate.style.backgroundClip = "text";
            widgetDate.style.webkitTextFillColor = "transparent";

            widgetHumanDate.textContent = eventInfo.humanDate;

            // Show widget if we've scrolled past the hero
            if (window.scrollY > window.innerHeight * 0.5) {
                calendarWidget.classList.add('visible');
            } else {
                calendarWidget.classList.remove('visible');
            }
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    items.forEach(item => {
        observer.observe(item);
    });

    // Progress Bar and Widget Updates
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = scrolled + "%";

        // Use requestAnimationFrame for smooth widget updates
        requestAnimationFrame(updateWidget);
    });

    // Trigger initial calculation
    updateWidget();

    // Initialize 3D Space / Particles Background
    initCanvas();
});

function initCanvas() {
    const canvas = document.getElementById('universe-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.3;
            // Background cosmic drift
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.z = Math.random() * 100;
        }

        update() {
            const scrollVelocity = window.scrollY > this.lastScroll ? (window.scrollY - this.lastScroll) : 0;
            this.lastScroll = window.scrollY;

            this.y -= this.speedY + (scrollVelocity * 0.05 * (100 / (this.z + 1)));
            this.x -= this.speedX;

            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / 100})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 300; i++) {
        const p = new Particle();
        p.lastScroll = window.scrollY;
        particles.push(p);
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Dynamic background colors as history advances
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const r = Math.floor(5 + scrollPercent * 10);
        const g = Math.floor(5 + scrollPercent * 20);
        const b = Math.floor(10 + scrollPercent * 40);

        canvas.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
