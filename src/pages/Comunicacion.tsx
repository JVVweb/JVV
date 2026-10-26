import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BrandPR {
  id: string;
  name: string;
  subtitle?: { es: string; en: string };
  paragraphs: { es: string[]; en: string[] };
  images: string[];
  links: { label: string; url: string }[];
}

const PR_BRANDS: BrandPR[] = [
  {
    id: 'oblicuo',
    name: 'OBLICUO',
    paragraphs: {
      es: [
        'Oblicuo es un bar Hi-Fi innovador en Barcelona, donde la alta fidelidad del sonido se fusiona con una experiencia sensorial única. Su nombre representa apertura y transversalidad, reflejando un lugar donde se rompen las convenciones.',
        'El diseño del espacio desafía lo convencional, con una disposición estrecha y dinámica que rompe las barreras entre clientes, profesionales y creativos. La barra, dividida en tres fragmentos, simboliza esta mezcla de roles y experiencias, creando un ambiente acogedor y urbano con tonos cálidos y detalles en madera.',
        'El sistema de sonido diseñado a medida garantiza una calidad auditiva excepcional, combinado con una insonorización total y aislamiento acústico, lo que permite disfrutar de la música en su máxima expresión.',
        'Además del sonido, Oblicuo ofrece una carta de cócteles y vinos naturales creativa y original, mezclando lo clásico con toques sorprendentes. Su ecléctica programación musical, con DJs que pinchan vinilos y eventos especiales, promete experiencias únicas en el corazón de Barcelona.'
      ],
      en: [
        'Oblicuo is an innovative Hi-Fi bar in Barcelona, where the high definition of sound merges with a unique sensory experience. Its name represents openness and transversality, reflecting a place where conventions are broken.',
        'The design of the space defies convention, with a narrow and dynamic layout that breaks down the barriers between clients, professionals and creatives. The bar, divided into three fragments, symbolises this mix of roles and experiences, creating a cosy and urban atmosphere with warm tones and wooden details.',
        'The custom-designed sound system ensures exceptional listening quality, combined with total soundproofing and sound insulation, allowing you to enjoy music at its best.',
        'In addition to sound, Oblicuo offers a creative and original cocktail and natural wine menu, mixing the classic with surprising touches. Its eclectic music line-up, with DJs playing vinyl and special events, promises unique experiences in the heart of Barcelona.'
      ]
    },
    images: [
      '/wp-content/uploads/2024/04/IMGL1560-scaled.jpg',
      '/wp-content/uploads/2024/04/IMGL1564-scaled.jpg',
      '/wp-content/uploads/2024/04/IMGL1566-scaled.jpg',
      '/wp-content/uploads/2024/04/IMGL1568-scaled.jpg',
      '/wp-content/uploads/2024/04/IMGL1576-scaled.jpg',
      '/wp-content/uploads/2024/04/logo.jpg'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/oblicuohifibar/?hl=es' }
    ]
  },
  {
    id: 'joolrie8',
    name: 'JOOLRIE8',
    paragraphs: {
      es: [
        'JOOLRIE8 es una marca de joyería que redefine la autoexpresión a través de diseños únicos y artísticos. Más que simples accesorios, cada pieza cuenta una historia, celebrando la individualidad, la creatividad y una profunda conexión con la naturaleza y la tranquilidad. Diseñadas para perdurar, estas joyas están hechas para ser atesoradas y transmitidas de generación en generación.',
        'La fundadora de JOOLRIE8 tiene una amplia trayectoria en la industria del diseño, con experiencia en diseño de moda, diseño de interiores y, más recientemente, diseño de joyería. Su incursión en este mundo comenzó con una búsqueda personal de aretes únicos y poco convencionales. Al no encontrar en el mercado juegos asimétricos y desparejados, identificó una oportunidad para crear piezas artísticas y originales que desafían las normas tradicionales de la joyería.',
        'Hoy en día, JOOLRIE8 se ha consolidado como un referente en joyería que va más allá de la estética, empoderando a quienes la usan con confianza y autenticidad.'
      ],
      en: [
        'JOOLRIE8 is a jewellery brand that redefines self-expression through unique and artistic designs. More than just accessories, each piece tells a story, celebrating individuality, creativity, and a deep connection to nature and tranquillity. Designed to endure, these jewellery pieces are meant to be cherished and passed down through generations.',
        'The founder of JOOLRIE8 has an extensive background in the design industry, spanning fashion design, interior design, and, most recently, jewellery design. Her journey into jewellery began with a personal quest for unique and unconventional earrings. Struggling to find mismatched and asymmetric sets in the market, she recognized a gap for one-of-a-kind, artistic pieces that defy traditional jewellery norms.',
        'Today, JOOLRIE8 stands as a symbol of jewellery that goes beyond aesthetics, empowering those who wear it with confidence and authenticity.'
      ]
    },
    images: [
      '/wp-content/uploads/2025/03/20231027_084625-scaled.jpg',
      '/wp-content/uploads/2025/03/20240526_141533-scaled.jpg',
      '/wp-content/uploads/2025/03/do-ame-bgle.jpg',
      '/wp-content/uploads/2025/03/DSC01668-scaled.jpeg',
      '/wp-content/uploads/2025/03/DSC04118-scaled.jpeg',
      '/wp-content/uploads/2025/03/DSC04180-1-scaled.jpeg'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/joolrie8/' }
    ]
  },
  {
    id: 'sirocomag',
    name: 'SIROCOMAG',
    paragraphs: {
      es: [
        'Sirocomag constituye un proyecto editorial interdisciplinar. Nace a finales de 2020 con la vocación de divulgar y enriquecer aquello que llamamos arte contemporáneo. Ansía experimentar con modos y formas, acercar creadores y disciplinas artísticas entre sí y revertir este valor en nuestra sociedad.',
        'Como revista, Sirocomag se vertebra en una dimensión online y una correspondencia en papel. En formato físico se han impreso hasta la fecha cuatro números (La libertad artística y los circuitos del arte, La memoria y la huella, Vigilia, sueño y poesía, Folklore y soledad).',
        'A lo largo de estas ediciones, Sirocomag ha trabajado con artistas nacionales e internacionales, emergentes y consagrados, aportando estos, además de su impronta conceptual y personal, su material visual y escrito. Cada número impreso es un recorrido independiente en sí mismo, con una identidad y organicidad propios.',
        'Siroco Magazine es un proyecto vivo, que crece y se desarrolla con autonomía; es una herramienta de divulgación, es un medio editorial, es una revista. Camina en busca de intervenciones artísticas y culturales, creaciones multidisciplinares, voces propias y, sobre todo, se erige como grito que reclama la importancia de recuperar lo propio y lo sensorial, el contacto con nuestra tierra y nuestra esencia, a través del tacto del papel y la reflexión paciente, en medio de la feroz digitalización del mundo abstracto y deshumanizado en el que vivimos.'
      ],
      en: [
        'Sirocomag constitutes an interdisciplinary editorial project. It was born at the end of 2020 aiming to spread and enrich what we call contemporary art. It longs to experiment with methods and forms, bring creators and artistic disciplines closer to each other and reverse this value in our society.',
        'As a magazine, Sirocomag is structured in an online dimension and its paper equivalent. Four issues have been printed physically to date (Artistic freedom and art circuits, Memory and traces, Vigil, dream and poetry, Folklore and solitude). Throughout these editions, Sirocomag has worked with national and international artists, both emerging and consecrated, who have contributed with their visual and written material, in addition to their conceptual and personal imprint.',
        "Each printed issue is an independent journey in itself, with its own identity and organization. Siroco Magazine is a living project that grows and develops autonomously; it is a dissemination tool, an editorial medium, a magazine. It walks in search of artistic and cultural interventions, multidisciplinary creations, voices of their own and, above all, it stands as a cry that claims the importance of recovering what is one's own and what is sensory, the contact with our land and our essence through the touch of paper and the patient reflection in the midst of the fierce digitization of the abstract and dehumanized world we live in."
      ]
    },
    images: [
      '/wp-content/uploads/2022/04/portada_-1-scaled.jpg',
      '/wp-content/uploads/2022/04/portada_-2-1536x2048.png',
      '/wp-content/uploads/2022/04/SirocoMag4-interior-2048x1026.png'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/sirocomag/?hl=es' }
    ]
  },
  {
    id: 'caoticx',
    name: 'CAOTICX',
    paragraphs: {
      es: [
        'Caoticx nace del sentimiento en el cual la vida está en absoluto desorden y/o confusión. En ese lugar, Caoticx busca una expresión creativa, donde le da “sentido” al “caos”, construyendo un vínculo de estabilidad en una nueva forma de pensar. Caoticx, no es solo una marca, es eco-cuero reciclado y libre de plástico.',
        'Caoticx nace el 16 de diciembre del 2020 tras su búsqueda de supervivencia en plena pandemia mundial. Con el fin de encontrar un lugar en el mundo, se crea Caoticx 100% Español. Trabajamos con fabricantes locales que nos dan la máxima calidad del producto en piel reciclada y ecológica, certificados por Oeko-Tex Leather Standard y Global Recycled Standard.',
        'Nuestros productos representan nuestra filosofía y estilo en un mundo más sostenible. Por ello, todos nuestros productos tienen la capacidad de poder ser usados en más de una forma, y así Caoticx se adapta al estilo individual de cada unx de nosotrxs. Nos gusta que nuestrxs consumidorexs sean parte del diseño, y por ello dejamos que escojan el color del broche de su Caoticx, dándole un toque personal. Siendo una marca que apunta al Slow Fashion, buscamos la expresión artística como un medio de comunicación y fomentamos las mejoras de los productos para alcanzar su máxima calidad, y no la producción en serie y explotación de diseños.',
        'Creemos en la igualdad y amamos lo absurdo. Caoticx, el estilo es lo que importa.'
      ],
      en: [
        'Caoticx is born from the feeling in which life is in absolute disorder and / or confusion. In that place, Caoticx seeks a creative expression, where it gives "meaning" to "chaos", building a bond of stability in a new way of thinking. Caoticx is not just a brand, it is recycled eco-leather and plastic free.',
        'Caoticx was born on December 16, 2020 after its search for survival in the midst of a global pandemic. In order to find a place in the world, Caoticx 100% Spanish is created. We work with local manufacturers who give us the highest quality of the product in recycled and ecological leather, certified by Oeko-Tex Leather Standard and Global Recycled Standard.',
        'Our products represent our philosophy and style in a more sustainable world. Therefore, all our products have the ability to be used in more than one way, and thus Caoticx adapts to the individual style of each one of us. We like our consumers to be part of the design, and for this reason we let them choose the color of their Caoticx clasp, giving it a personal touch.',
        'Being a brand that aims at Slow Fashion, we seek artistic expression as a means of communication and we promote product improvements to achieve their highest quality, and not mass production and exploitation of designs. We believe in equality and we love the absurd.',
        'Caoticx, style is what matters.'
      ]
    },
    images: [
      '/wp-content/uploads/2021/10/caoticx-mochila-mini-rame-navy-plateado-lateral-scaled.jpg',
      '/wp-content/uploads/2021/10/caoticx-mochila-grande-rame-vino-rosa-interior-scaled.jpg',
      '/wp-content/uploads/2021/10/Captura-de-Pantalla-2021-11-15-a-les-12.08.14.png'
    ],
    links: [
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/caoticx.caoticx/' }
    ]
  },
  {
    id: 'linda',
    name: 'LINDA',
    subtitle: {
      es: 'Lo natural sin etiquetas',
      en: 'Natural with no Labels'
    },
    paragraphs: {
      es: [
        'Linda comenzó siendo una marca de limonada, hecha a partir de una receta que había pasado de generación en generación y llegó desde la India a España.',
        'La primera botella Linda se vendió el 15 mayo 2014, hoy está en más de 800 puntos de venta gracias a haber respetado la pureza de nuestros ingredientes, mezclas y valores de marca.',
        'Ha nacido una marca que persigue la utilización de ingredientes naturales sin añadidos para que puedas olvidarte de las etiquetas. Porque cuando te muestras transparente ante el mundo no es necesario sobre explicar quién eres y de dónde vienes. Actualmente son 4 las frutas que dan sabor a las distintas mezclas, pero se sumarán más en breve.'
      ],
      en: [
        'Linda began as a lemon juice brand, made from an original recipe from India that traveled to Spain a long time ago.',
        'The first Linda bottle was sold in May 2014 and today, it is sold in more than 800 retailers. The ingredients are as pure as can be, the same as the mixers and the brand values.',
        "This juice is 100% natural ingredients without additives. So, you can say goodbye to having to double check the nutrition label. When you're transparent to the world, there is no need to explain who you are and where you're from. For now, there are four-star fruits that give a powerful, savory explosion to each bottle but stay tuned, there will be new flavors coming soon!"
      ]
    },
    images: [
      '/wp-content/uploads/2016/06/linda_bodegon.jpg'
    ],
    links: [
      { label: 'WEBSITE', url: 'http://lindalimon.com/' },
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/linda_limon/' },
      { label: 'FACEBOOK', url: 'https://www.facebook.com/tomalindalimon' }
    ]
  },
  {
    id: 'la-perla',
    name: 'LA PERLA',
    subtitle: {
      es: 'Luxury made in Italy',
      en: 'Luxury Made In Italy'
    },
    paragraphs: {
      es: [
        'La Perla siempre se ha caracterizado por sus lujosas piezas de lencería y baño. Una marca histórica italiana que nunca ha tenido competidores dentro de su campo y ha sabido rejuvenecerse con el paso del tiempo.',
        'Sus diseños están creados para una mujer sofisticada y con mucha personalidad que no quiere perder femineidad en ningún momento del día y de la noche. El hombre es un hombre también con las ideas claras que le gusta la moda y la calidad en las prendas.',
        'La renovación de sus boutiques, sus desfiles en la pasarela de Nueva York y las grandes modelos con las que cuenta en sus últimas campañas como Adriana Lima o Kendall Jenner son buena muestra de que este Made In Italy tiene más fuerza que nunca.'
      ],
      en: [
        'La Perla has always been characterised by its luxurious pieces of lingerie and bath. A historical Italian brand that has never had competitors within its field and has known how to rejuvenate itself with the passage of time.',
        'Their designs are created for a sophisticated woman with a lot of personality who does not want to lose femininity at any time. La Perla’s man is also a man with clear ideas who likes fashion and quality in his clothes.',
        'The renovation of its boutiques, its fashion shows on the New York Runway and the great models they work with (such as Adriana Lima or Kendall Jenner) are good proof that this Made In Italy has more strength than ever.'
      ]
    },
    images: [
      '/wp-content/uploads/2016/06/foto_perla.jpeg'
    ],
    links: [
      { label: 'WEBSITE', url: 'https://www.laperla.com/' },
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/laperlalingerie/' },
      { label: 'YOUTUBE', url: 'https://www.youtube.com/laperlalingerie' }
    ]
  },
  {
    id: 'mazza',
    name: 'MAZZA',
    subtitle: {
      es: 'Luxury Lifestyle',
      en: 'Luxury Lifestyle'
    },
    paragraphs: {
      es: [
        'Con más de 10 años en la industria de la moda, Luciana, ha sido Directora Creativa y Editora en varias publicaciones de moda y estilo de vida y colabora habitualmente como Directora Creativa con reconocidos diseñadores y firmas de moda. Inspirándose también en el diseño industrial y el diseño de interiores, MAZZA es una extensión más de su personalidad.',
        'Nace MAZZA, una marca Premium de estilo de vida que con sus colecciones de “investment pieces” se orienta hacia un tipo de consumo y de vida inteligente, combinando la fabricación tradicional con artesanos, los materiales nobles y los diseños atemporales.',
        'Sombreros realizados a mano con la maestría de los artesanos españoles. Piezas joya, atemporales y exclusivas, pensados para ambos sexos, en lana 100%, coronados por una piedra de mármol pulido a mano y chapado en oro de 18 Kilates, distintivo de la marca y símbolo de claridad y creatividad.',
        'La primera colección MAZZA la forman tres modelos de sombreros que reinterpretan estilos clásicos y los convierten en piezas joya de diseño. Los tres modelos se fabrican en beige, gris y negro y se combinan con tres tonos de mármol: blanco, gris o el impactante verde.'
      ],
      en: [
        'Luciana has over ten years experience in the fashion industry. She has been Creative Director and Editor of several designers and brands. Inspired by industrial and interior design, MAZZA is yet another extension of her personality.',
        'MAZZA was born as a Premium lifestyle brand whose “investment pieces” collections are oriented towards an intelligent way of consuming and living, combining traditional craftsmanship with quality materials and timeless designs.',
        'Handmade hats made by Spanish masters. True gems, timeless and exclusive, unisex, made with 100% wool, crowned with a marble stone and plated in 18 carat gold, which is the brand’s distinction, a symbol of clarity and creativity.',
        'MAZZA’s first collection is made with three different hat models that reinterpret classical styles and turn them into exclusive pieces of design. You can find them in beige, grey or black, combined with three tones of marble: white, grey and a shocking green.'
      ]
    },
    images: [
      '/wp-content/uploads/2016/06/Captura-de-pantalla-2016-06-14-a-las-12.24.46.png'
    ],
    links: [
      { label: 'WEBSITE', url: 'http://www.lucianamazza.com/' },
      { label: 'INSTAGRAM', url: 'https://www.instagram.com/luciana_mazza/' },
      { label: 'FACEBOOK', url: 'https://www.instagram.com/luciana_mazza/' }
    ]
  }
];

function BrandGallery({ images, name }: { images: string[]; name: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full relative overflow-hidden group aspect-[4/5] md:aspect-[4/4] bg-zinc-950 border border-white/5">
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            idx === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30"
          />
          <img
            src={img}
            alt={`${name} - ${idx + 1}`}
            className="relative max-w-full max-h-full object-contain transition-transform duration-[4s] hover:scale-105 z-10"
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2 bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === activeIdx ? 'bg-white w-3' : 'bg-white/30'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Comunicacion() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <SEO
        title={t('comunicacion.title')}
        description={`${t('comunicacion.title')}: ${t('comunicacion.subtitle')}`}
      />
      <header className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tighter uppercase">
            {t('comunicacion.title')}
          </h1>
          <p className="text-xl font-light opacity-50 max-w-xl">
            {t('comunicacion.subtitle')}
          </p>
        </motion.div>
      </header>

      <div className="space-y-24 md:space-y-36">
        {PR_BRANDS.map((brand, idx) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className={`md:col-span-6 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
              <BrandGallery images={brand.images} name={brand.name} />
            </div>

            <div className={`md:col-span-6 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
              <h2 className="text-3xl md:text-5xl font-serif mb-3 tracking-tight leading-tight">
                {brand.name}
              </h2>
              {brand.subtitle && (
                <p className="text-sm uppercase tracking-widest opacity-40 mb-6 font-display">
                  {brand.subtitle[language]}
                </p>
              )}
              <div className="space-y-4 text-base font-light opacity-65 leading-relaxed mb-8">
                {brand.paragraphs[language].map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {brand.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-48 border-t border-white/5 pt-24 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase">
            {language === 'es' ? 'Trabajemos juntos.' : "Let's collaborate."}
          </h2>
          <p className="text-lg font-light opacity-50 leading-relaxed">
            {language === 'es'
              ? 'Dirigimos las relaciones públicas y la estrategia de comunicación para marcas con identidad propia.'
              : 'We lead public relations and communication strategy for brands with a distinct identity.'}
          </p>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all"
          >
            {language === 'es' ? 'Contactar' : 'Inquire Now'}
          </Link>
        </div>
      </section>
    </div>
  );
}
