// ============================================================
// Contact Configuration – AttilaMobDesign
// Update these values to change contact information site-wide
// ============================================================

const whatsappBase = 'https://wa.me/40746085700'
const whatsappMessage = 'Bună ziua! Aș dori informații despre mobilier la comandă.'

export const CONTACT = {
  // Phone (from business banner)
  phone: '0746 085 700',
  phoneTel: 'tel:+40746085700',

  // Email (from business banner)
  email: 'csegoldiatila1969@gmail.com',
  emailMailto: 'mailto:csegoldiatila1969@gmail.com',

  // Address (from business banner)
  address: 'str. M. Eminescu, nr 21',
  city: 'Ocna Mureș',
  county: 'Alba',
  country: 'România',
  fullAddress: 'str. M. Eminescu, nr 21, Ocna Mureș, Alba, România',

  // Social media – UPDATE THESE when real URLs are available
  facebook: 'https://www.facebook.com/share/1E1DRsb8xn/',
  whatsapp: whatsappBase,

  // WhatsApp deep link with preset message
  whatsappLink: `${whatsappBase}?text=${encodeURIComponent(whatsappMessage)}`,
}
