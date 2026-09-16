// ============================================================
// Image & Category Configuration – Mob Atidol
// All image paths relative to /public
// ============================================================

export interface GalleryImage {
  src: string
  alt: string
  aspectRatio?: 'square' | 'portrait' | 'landscape'
}

export interface Category {
  slug: string
  name: string
  shortName: string
  heading: string
  description: string
  longDescription: string
  galleryTitle: string
  cardImage: string        // image shown on product card
  images: GalleryImage[]
}

// ── Kitchen ──────────────────────────────────────────────────
const kitchenImages: GalleryImage[] = [
  { src: './images/kitchen/Proiect_2_1.jpg',      alt: 'Bucătărie modernă albă cu blat negru', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_2_2.jpg',      alt: 'Detaliu bucătărie – uși clasice albe', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_4_1.jpg',      alt: 'Bucătărie la comandă – proiect 4', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_4_2.jpg',      alt: 'Detaliu bucătărie personalizată', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_7_1.jpg',      alt: 'Bucătărie modernă – proiect 7', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_8_1.jpg',      alt: 'Bucătărie la comandă – proiect 8', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_8_2.jpg',      alt: 'Detaliu bucătărie – proiect 8', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_9_1.jpg',      alt: 'Bucătărie personalizată – proiect 9', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_10_1.jpg',     alt: 'Bucătărie la comandă – proiect 10', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_10_2.jpg',     alt: 'Detaliu bucătărie – proiect 10', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_11_1.jpg',     alt: 'Bucătărie modernă – proiect 11', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_11_2.jpg',     alt: 'Detaliu bucătărie – proiect 11', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_11_3.jpg',     alt: 'Vedere bucătărie – proiect 11', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_12_1.jpg',     alt: 'Bucătărie personalizată – proiect 12', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_13_1jpg.jpg',  alt: 'Bucătărie la comandă – proiect 13', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_15_1.jpg',     alt: 'Bucătărie modernă – proiect 15', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_16_1.jpg',     alt: 'Bucătărie personalizată – proiect 16', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_17_1.jpg',     alt: 'Bucătărie la comandă – proiect 17', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_18_1.jpg',     alt: 'Bucătărie modernă – proiect 18', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_20_1.jpg',     alt: 'Bucătărie personalizată – proiect 20', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_21_1.jpg',     alt: 'Bucătărie la comandă – proiect 21', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_21_2.jpg',     alt: 'Detaliu bucătărie – proiect 21', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_23_1.jpg',     alt: 'Bucătărie modernă – proiect 23', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_23_2.jpg',     alt: 'Detaliu bucătărie – proiect 23', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_24_1.jpg',     alt: 'Bucătărie personalizată – proiect 24', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_25_1.jpg',     alt: 'Bucătărie la comandă – proiect 25', aspectRatio: 'landscape' },
]

// ── Bedroom ──────────────────────────────────────────────────
const bedroomImages: GalleryImage[] = [
  { src: './images/bedroom/Proiect_6_1.jpg',      alt: 'Pat tapițat cu tăblie capitonată', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_6_2jpg.jpg',   alt: 'Dormitor la comandă – detaliu', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_6_3.jpg',      alt: 'Dormitor personalizat – proiect 6', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_6_4.jpg',      alt: 'Mobilier dormitor – proiect 6', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_3_1.jpg',      alt: 'Dormitor la comandă – proiect 3', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_5_1.jpg',      alt: 'Mobilier dormitor personalizat – proiect 5', aspectRatio: 'portrait' },
  { src: './images/bedroom/Proiect_14_1.jpg',     alt: 'Dormitor modern – proiect 14', aspectRatio: 'portrait' },
]

// ── Living Room ───────────────────────────────────────────────
const livingRoomImages: GalleryImage[] = [
  { src: './images/living-room/Proiect_22_1.jpg', alt: 'Mobilier cameră de zi – proiect 22', aspectRatio: 'landscape' },
  { src: './images/living-room/Proiect_17_2.jpg', alt: 'Living modern la comandă – proiect 17', aspectRatio: 'landscape' },
  { src: './images/living-room/Proiect_19_1.jpg', alt: 'Cameră de zi personalizată – proiect 19', aspectRatio: 'landscape' },
  { src: './images/living-room/Proiect_13_1.jpg', alt: 'Living la comandă – proiect 13', aspectRatio: 'landscape' },
  { src: './images/living-room/Proiect_15_2.jpg', alt: 'Mobilier living modern – proiect 15', aspectRatio: 'landscape' },
]

// ── Business ─────────────────────────────────────────────────
const businessImages: GalleryImage[] = [
  { src: './images/business/Proiect_1_1.jpg',     alt: 'Mobilier salon cosmetică – birou la comandă', aspectRatio: 'landscape' },
  { src: './images/business/Proiect_1_2.jpg',     alt: 'Detaliu mobilier profesional – proiect 1', aspectRatio: 'landscape' },
  { src: './images/business/Proiect_1_3.jpg',     alt: 'Mobilier pentru afaceri – proiect 1', aspectRatio: 'landscape' },
]

// ── Others ────────────────────────────────────────────────────
const othersImages: GalleryImage[] = [
  { src: './images/others/Proiect_1_1.jpg',       alt: 'Cuier cu dulap – mobilier hol', aspectRatio: 'portrait' },
  { src: './images/others/Proiect_1_2.jpg',       alt: 'Mobilier hol la comandă – detaliu', aspectRatio: 'portrait' },
  { src: './images/others/Proiect_1_3.jpg',       alt: 'Mobilier personalizat pentru hol', aspectRatio: 'portrait' },
]

// ── Categories ────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  {
    slug: 'bucatarie',
    name: 'Bucătărie',
    shortName: 'Bucătărie',
    heading: 'Bucătărie – exact cum o dorești tu',
    description: 'Mobilier personalizat care îmbină funcționalitatea, ergonomia și designul modern.',
    longDescription:
      'Realizăm mobilier de bucătărie la comandă, adaptat dimensiunilor și stilului fiecărui spațiu. Punem accent pe funcționalitate, materiale de calitate și soluții moderne de organizare, pentru a crea un mediu practic și estetic.',
    galleryTitle: 'Proiecte realizate',
    cardImage: './images/kitchen/Proiect_8_1.jpg',
    images: kitchenImages,
  },
  {
    slug: 'dormitor',
    name: 'Dormitor',
    shortName: 'Dormitor',
    heading: 'Dormitor – confort și eleganță',
    description: 'Soluții de mobilier concepute pentru confort, organizare și un ambient relaxant.',
    longDescription:
      'Creăm mobilier de dormitor personalizat, de la paturi tapițate și dulapuri la noptiere și comode, toate adaptate spațiului și preferințelor clientului. Fiecare piesă este realizată pentru a aduce confort și armonie în dormitorul tău.',
    galleryTitle: 'Proiecte realizate',
    cardImage: './images/bedroom/Proiect_6_1.jpg',
    images: bedroomImages,
  },
  {
    slug: 'living',
    name: 'Cameră de zi (Living)',
    shortName: 'Living',
    heading: 'Living – spațiu pentru viață',
    description: 'Piese de mobilier elegante și practice, adaptate stilului fiecărei locuințe.',
    longDescription:
      'Mobilierul de cameră de zi realizat la comandă îmbină estetica și funcționalitatea pentru a crea un spațiu primitor și personalizat. Fiecare proiect este adaptat la dimensiunile și stilul specific al locuinței tale.',
    galleryTitle: 'Proiecte realizate',
    cardImage: './images/living-room/Proiect_17_2.jpg',
    images: livingRoomImages,
  },
  {
    slug: 'afaceri',
    name: 'Pentru Afaceri',
    shortName: 'Afaceri',
    heading: 'Mobilier pentru spații profesionale',
    description: 'Mobilier personalizat pentru birouri, spații comerciale, restaurante și alte medii profesionale.',
    longDescription:
      'Proiectăm și realizăm mobilier la comandă pentru diverse spații profesionale: birouri, saloane, cabinete, spații comerciale și altele. Fiecare soluție este adaptată cerințelor specifice ale activității și ale spațiului.',
    galleryTitle: 'Proiecte realizate',
    cardImage: './images/business/Proiect_1_1.jpg',
    images: businessImages,
  },
  {
    slug: 'altele',
    name: 'Altele',
    shortName: 'Altele',
    heading: 'Proiecte speciale la comandă',
    description: 'Proiecte realizate la comandă pentru diverse spații și cerințe speciale, de mici sau mari dimensiuni.',
    longDescription:
      'Realizăm orice tip de mobilier personalizat care nu se încadrează în categoriile standard – de la mobilier de hol, cuiere și dulapuri de intrare, până la piese unice adaptate unor spații neconvenționale.',
    galleryTitle: 'Proiecte realizate',
    cardImage: './images/others/Proiect_1_1.jpg',
    images: othersImages,
  },
]

// ── Homepage gallery (mixed best-of images) ───────────────────
export const HOME_GALLERY_IMAGES: GalleryImage[] = [
  { src: './images/kitchen/Proiect_25_1.jpg',     alt: 'Bucătărie la comandă', aspectRatio: 'landscape' },
  { src: './images/bedroom/Proiect_6_1.jpg',      alt: 'Dormitor tapițat la comandă', aspectRatio: 'portrait' },
  { src: './images/living-room/Proiect_17_2.jpg', alt: 'Living la comandă', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_11_1.jpg',     alt: 'Bucătărie modernă', aspectRatio: 'landscape' },
  { src: './images/bedroom/Proiect_5_1.jpg',      alt: 'Mobilier dormitor', aspectRatio: 'portrait' },
  { src: './images/living-room/Proiect_22_1.jpg', alt: 'Cameră de zi personalizată', aspectRatio: 'landscape' },
  { src: './images/kitchen/Proiect_8_1.jpg',      alt: 'Bucătărie elegantă', aspectRatio: 'landscape' },
  { src: './images/others/Proiect_1_1.jpg',       alt: 'Mobilier hol la comandă', aspectRatio: 'portrait' },
]

// Hero background image
export const HERO_IMAGE = './images/kitchen/Proiect_25_1.jpg'
