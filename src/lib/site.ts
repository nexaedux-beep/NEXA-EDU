export const site = {
  name: "NEXA Education",
  nameAr: "نيكسا التعليمية",
  phone: "+905356298751",
  whatsapp: "https://wa.me/905356298751",
  address: "Concepta Plaza — Esenyurt, Istanbul",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Concepta+Plaza+Esenyurt+Istanbul",
  email: "info@nexa-education.com",
  social: {
    facebook: "https://www.facebook.com/NEXAEd",
    instagram: "https://www.instagram.com/nexa_ed",
    telegram: "https://t.me/NEXA_Edu",
    x: "https://x.com/nexaedu",
  },
};

export const waLink = (topic: string) =>
  `${site.whatsapp}?text=${encodeURIComponent(`مرحباً نيكسا، أريد الاستفسار عن ${topic}`)}`;
