import serum from "@/assets/product-serum.jpg";
import cream from "@/assets/product-cream.jpg";
import tonic from "@/assets/product-tonic.jpg";
import eye from "@/assets/product-eye.jpg";
import cleanser from "@/assets/product-cleanser.jpg";
import spf from "@/assets/product-spf.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import roundLabAsset from "@/assets/round-lab.jpg.asset.json";
import anuaOilAsset from "@/assets/anua-oil.jpg.asset.json";
import anuaFoamAsset from "@/assets/anua-foam.jpg.asset.json";
import medicubeZeroPoreAsset from "@/assets/medicube-zero-pore.jpg.asset.json";
import medicubeFoamAsset from "@/assets/medicube-foam.jpg.asset.json";
import medicubePdrnAsset from "@/assets/medicube-pdrn.jpg.asset.json";
import ordinaryAsset from "@/assets/ordinary.jpg.asset.json";
import medicubePadAsset from "@/assets/medicube-pad.jpg.asset.json";
import haruharuAsset from "@/assets/haruharu.jpg.asset.json";
import imfromAsset from "@/assets/imfrom.jpg.asset.json";

const roundLab = roundLabAsset.url;
const anuaOil = anuaOilAsset.url;
const anuaFoam = anuaFoamAsset.url;
const medicubeZeroPore = medicubeZeroPoreAsset.url;
const medicubeFoam = medicubeFoamAsset.url;
const medicubePdrn = medicubePdrnAsset.url;
const ordinary = ordinaryAsset.url;
const medicubePad = medicubePadAsset.url;
const haruharu = haruharuAsset.url;
const imfrom = imfromAsset.url;

export type Product = {
  id: string;
  name: string;
  category: "Serum" | "Crema" | "Tónico" | "Limpiador" | "Protector" | "Contorno" | "Esencia";
  description: string;
  price: number;
  image: string;
  images: string[];
  stock: number;
};

export const PRODUCTS: Product[] = [
  {
    id: "vit-c-serum",
    name: "Sérum Vitamina C",
    category: "Serum",
    description: "Ilumina y unifica el tono de la piel con 15% de Vitamina C pura.",
    price: 28,
    image: serum,
    images: [serum, hero1, hero2],
    stock: 12,
  },
  {
    id: "hydra-cream",
    name: "Crema Hidratante Rosa",
    category: "Crema",
    description: "Hidratación profunda 24h con ácido hialurónico y agua de rosas.",
    price: 34,
    image: cream,
    images: [cream, hero2, hero3],
    stock: 9,
  },
  {
    id: "green-tonic",
    name: "Tónico Té Verde",
    category: "Tónico",
    description: "Equilibra el pH y refresca con antioxidantes naturales.",
    price: 18,
    image: tonic,
    images: [tonic, hero1, hero3],
    stock: 20,
  },
  {
    id: "eye-contour",
    name: "Contorno de Ojos Lavanda",
    category: "Contorno",
    description: "Reduce ojeras y bolsas con péptidos y extracto de lavanda.",
    price: 26,
    image: eye,
    images: [eye, hero2, hero1],
    stock: 7,
  },
  {
    id: "gentle-cleanser",
    name: "Limpiador Facial Suave",
    category: "Limpiador",
    description: "Limpieza profunda sin resecar, ideal para uso diario.",
    price: 22,
    image: cleanser,
    images: [cleanser, hero3, hero1],
    stock: 15,
  },
  {
    id: "spf-50",
    name: "Protector Solar SPF 50",
    category: "Protector",
    description: "Protección amplio espectro con acabado mate invisible.",
    price: 30,
    image: spf,
    images: [spf, hero2, hero3],
    stock: 11,
  },
  {
    id: "round-lab-cleanser",
    name: "Round Lab · Limpiador Facial",
    category: "Limpiador",
    description:
      "Espuma limpiadora suave y profunda que elimina maquillaje e impurezas sin resecar. Con agua de mar, ácido hialurónico y ceramidas equilibra el pH, calma la piel sensible y sella la hidratación todo el día. 150 ml.",
    price: 26,
    image: roundLab,
    images: [roundLab, hero1, hero2],
    stock: 10,
  },
  {
    id: "anua-heartleaf-oil",
    name: "Anua · Heartleaf Pore Control Cleansing Oil",
    category: "Limpiador",
    description:
      "Aceite limpiador ligero y no comedogénico que elimina eficazmente maquillaje e impurezas de los poros sin obstruirlos. Con extracto de planta camaleón y aceites de jojoba, oliva y uva calma y mantiene hidratada la piel propensa al acné. 200 ml.",
    price: 50,
    image: anuaOil,
    images: [anuaOil, hero2, hero3],
    stock: 8,
  },
  {
    id: "anua-heartleaf-foam",
    name: "Anua · Heartleaf 77 Cleansing Foam",
    category: "Limpiador",
    description:
      "Espuma limpiadora con polvo de Houttuynia Cordata que elimina células muertas, limpia los poros profundamente y controla el exceso de sebo. Su fórmula con quercetina calma la irritación, ideal para pieles con tendencia al acné. 150 ml.",
    price: 26,
    image: anuaFoam,
    images: [anuaFoam, hero3, hero1],
    stock: 10,
  },
  {
    id: "medicube-zero-pore",
    name: "Medicube · Limpiador Profundo Zero Pore",
    category: "Limpiador",
    description:
      "Espuma limpiadora de alta eficacia que desobstruye poros y elimina el 99,7 % de las impurezas con microcápsulas 500 veces más pequeñas que el poro. Con AHA, BHA, PHA y ácido salicílico exfolia y suaviza la textura sin irritar. 120 g.",
    price: 28,
    image: medicubeZeroPore,
    images: [medicubeZeroPore, hero1, hero2],
    stock: 9,
  },
  {
    id: "medicube-zero-foam",
    name: "Medicube · Zero Foam Cleanser",
    category: "Limpiador",
    description:
      "Espuma limpiadora que elimina el polvo microfino y los contaminantes ambientales en un solo uso gracias a la tecnología protectora Pollushield™. Limpia profundamente y reduce visiblemente los poros con extractos de membrillo, melisa y azahar. 120 g.",
    price: 28,
    image: medicubeFoam,
    images: [medicubeFoam, hero2, hero3],
    stock: 9,
  },
  {
    id: "medicube-pdrn-jelly",
    name: "Medicube · PDRN Jelly to Foam Cleanser",
    category: "Limpiador",
    description:
      "Limpiador en gel jalea que se transforma en una rica espuma para eliminar impurezas, exceso de grasa y puntos negros. Fórmula de bajo pH con LHA, PDRN puro al 99 % y colágeno; ceramidas y ácido hialurónico refuerzan la barrera de hidratación. 200 ml.",
    price: 33,
    image: medicubePdrn,
    images: [medicubePdrn, hero3, hero1],
    stock: 8,
  },
  {
    id: "ordinary-glycolic",
    name: "The Ordinary · Glycolic Acid 7% Toning Solution",
    category: "Tónico",
    description:
      "Elimina células muertas para revelar una piel más lisa, radiante y con menos signos de la edad. Incluye un derivado de pimienta de Tasmania para calmar la irritación; ideal tanto para el rostro como para suavizar zonas rugosas del cuerpo o equilibrar el cuero cabelludo.",
    price: 21,
    image: ordinary,
    images: [ordinary, hero1, hero2],
    stock: 14,
  },
  {
    id: "medicube-pore-pad",
    name: "Medicube · Almohadillas de Tóner Zero Pore Pad 2.0",
    category: "Tónico",
    description:
      "Discos faciales de doble textura impregnados con AHA, BHA (ácido salicílico) e ingredientes patentados para el cuidado de los poros. Exfolian, eliminan el exceso de sebo y minimizan visiblemente el tamaño de los poros para una piel más lisa. 70 pads.",
    price: 35,
    image: medicubePad,
    images: [medicubePad, hero2, hero3],
    stock: 7,
  },
  {
    id: "haruharu-black-rice",
    name: "Haruharu Wonder · Esencia Black Rice",
    category: "Esencia",
    description:
      "Esencia reafirmante e hidratante que fortalece la barrera cutánea gracias a su complejo de 5 ceramidas, ácidos grasos, fitoesteroles y colesterol. Textura cremosa tipo leche con fermento de galactomyces y arroz negro para mejorar la elasticidad y aportar antioxidantes. Sin siliconas ni alcoholes. 120 ml.",
    price: 32,
    image: haruharu,
    images: [haruharu, hero3, hero1],
    stock: 9,
  },
  {
    id: "imfrom-rice-toner",
    name: "I'm From · Tónico de Arroz Rice Toner",
    category: "Tónico",
    description:
      "Icónico tónico bifásico con 77,78 % de extracto de arroz de Yeoju y niacinamida para lograr una piel radiante efecto glass skin. Su fórmula lechosa y ligera ilumina el tono apagado, suaviza la textura, reduce manchas y crea una barrera protectora que retiene la hidratación. Apto para pieles sensibles. 150 ml.",
    price: 28,
    image: imfrom,
    images: [imfrom, hero1, hero2],
    stock: 11,
  },
];

export const CATEGORIES = ["Todos", "Serum", "Esencia", "Crema", "Tónico", "Limpiador", "Protector", "Contorno"] as const;