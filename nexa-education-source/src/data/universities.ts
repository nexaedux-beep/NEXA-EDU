import { universityLogos } from "./university-logos";

const localLogo = (domain: string): string | undefined => universityLogos[domain];

export type Region = "Istanbul" | "Ankara" | "Izmir" | "Antalya" | "Northern Cyprus";

export interface University {
  name: string;
  city: string;
  region: Region;
  regionAr: string;
  discount: string;
  domain: string;
}

const u = (
  name: string,
  city: string,
  region: Region,
  regionAr: string,
  discount: string,
  domain: string,
): University => ({ name, city, region, regionAr, discount, domain });

export const universities: University[] = [
  // ── Istanbul ──────────────────────────────────────────────
  u("Altınbaş University", "Istanbul", "Istanbul", "إسطنبول", "50%", "altinbas.edu.tr"),
  u("Atlas University", "Istanbul", "Istanbul", "إسطنبول", "45%", "atlas.edu.tr"),
  u("Arel University", "Istanbul", "Istanbul", "إسطنبول", "60%", "arel.edu.tr"),
  u("Ataşehir Adıgüzel University", "Istanbul", "Istanbul", "إسطنبول", "50%", "adiguzel.edu.tr"),
  u("Bahçeşehir University", "Istanbul", "Istanbul", "إسطنبول", "50%", "bau.edu.tr"),
  u("Beykent University", "Istanbul", "Istanbul", "إسطنبول", "55%", "beykent.edu.tr"),
  u("Bezmialem Vakıf University", "Istanbul", "Istanbul", "إسطنبول", "40%", "bezmialem.edu.tr"),
  u("Biruni University", "Istanbul", "Istanbul", "إسطنبول", "50%", "biruni.edu.tr"),
  u("Doğuş University", "Istanbul", "Istanbul", "إسطنبول", "60%", "dogus.edu.tr"),
  u("Fenerbahçe University", "Istanbul", "Istanbul", "إسطنبول", "45%", "fbu.edu.tr"),
  u("Fatih Sultan Mehmet Vakıf University", "Istanbul", "Istanbul", "إسطنبول", "50%", "fsm.edu.tr"),
  u("Galata University", "Istanbul", "Istanbul", "إسطنبول", "55%", "galata.edu.tr"),
  u("Gelişim University", "Istanbul", "Istanbul", "إسطنبول", "70%", "gelisim.edu.tr"),
  u("Haliç University", "Istanbul", "Istanbul", "إسطنبول", "60%", "halic.edu.tr"),
  u("Işık University", "Istanbul", "Istanbul", "إسطنبول", "50%", "isikun.edu.tr"),
  u("İbn Haldun University", "Istanbul", "Istanbul", "إسطنبول", "45%", "ihu.edu.tr"),
  u("İstanbul Aydın University", "Istanbul", "Istanbul", "إسطنبول", "55%", "aydin.edu.tr"),
  u("İstanbul Esenyurt University", "Istanbul", "Istanbul", "إسطنبول", "60%", "esenyurt.edu.tr"),
  u("İstanbul Gedik University", "Istanbul", "Istanbul", "إسطنبول", "50%", "gedik.edu.tr"),
  u("İstanbul Kent University", "Istanbul", "Istanbul", "إسطنبول", "50%", "kent.edu.tr"),
  u("İstanbul Kültür University", "Istanbul", "Istanbul", "إسطنبول", "45%", "iku.edu.tr"),
  u("İstanbul Medipol University", "Istanbul", "Istanbul", "إسطنبول", "50%", "medipol.edu.tr"),
  u("İstanbul Nişantaşı University", "Istanbul", "Istanbul", "إسطنبول", "70%", "nisantasi.edu.tr"),
  u("İstanbul Okan University", "Istanbul", "Istanbul", "إسطنبول", "55%", "okan.edu.tr"),
  u("İstanbul Rumeli University", "Istanbul", "Istanbul", "إسطنبول", "60%", "rumeli.edu.tr"),
  u("İstanbul Sabahattin Zaim University", "Istanbul", "Istanbul", "إسطنبول", "50%", "izu.edu.tr"),
  u("İstanbul Ticaret University", "Istanbul", "Istanbul", "إسطنبول", "45%", "ticaret.edu.tr"),
  u("İstanbul Topkapı University", "Istanbul", "Istanbul", "إسطنبول", "55%", "topkapi.edu.tr"),
  u("İstinye University", "Istanbul", "Istanbul", "إسطنبول", "50%", "istinye.edu.tr"),
  u("Kadir Has University", "Istanbul", "Istanbul", "إسطنبول", "40%", "khas.edu.tr"),
  u("Koç University", "Istanbul", "Istanbul", "إسطنبول", "30%", "ku.edu.tr"),
  u("Maltepe University", "Istanbul", "Istanbul", "إسطنبول", "60%", "maltepe.edu.tr"),
  u("MEF University", "Istanbul", "Istanbul", "إسطنبول", "50%", "mef.edu.tr"),
  u("Özyeğin University", "Istanbul", "Istanbul", "إسطنبول", "45%", "ozyegin.edu.tr"),
  u("Piri Reis University", "Istanbul", "Istanbul", "إسطنبول", "50%", "pirireis.edu.tr"),
  u("Sağlık ve Teknoloji University", "Istanbul", "Istanbul", "إسطنبول", "55%", "istun.edu.tr"),
  u("Üsküdar University", "Istanbul", "Istanbul", "إسطنبول", "50%", "uskudar.edu.tr"),
  u("Yeni Yüzyıl University", "Istanbul", "Istanbul", "إسطنبول", "60%", "yeniyuzyil.edu.tr"),
  u("Yeditepe University", "Istanbul", "Istanbul", "إسطنبول", "40%", "yeditepe.edu.tr"),

  // ── Ankara ────────────────────────────────────────────────
  u("Atılım University", "Ankara", "Ankara", "أنقرة", "50%", "atilim.edu.tr"),
  u("Başkent University", "Ankara", "Ankara", "أنقرة", "45%", "baskent.edu.tr"),
  u("Çankaya University", "Ankara", "Ankara", "أنقرة", "50%", "cankaya.edu.tr"),
  u("Lokman Hekim University", "Ankara", "Ankara", "أنقرة", "55%", "lokmanhekim.edu.tr"),
  u("TED University", "Ankara", "Ankara", "أنقرة", "40%", "tedu.edu.tr"),
  u("TOBB University of Economics and Technology", "Ankara", "Ankara", "أنقرة", "35%", "etu.edu.tr"),
  u("Turkish Aeronautical Association University", "Ankara", "Ankara", "أنقرة", "50%", "thk.edu.tr"),
  u("Ufuk University", "Ankara", "Ankara", "أنقرة", "60%", "ufuk.edu.tr"),

  // ── Izmir ─────────────────────────────────────────────────
  u("İzmir University of Economics", "Izmir", "Izmir", "إزمير", "50%", "ieu.edu.tr"),
  u("İzmir Tınaztepe University", "Izmir", "Izmir", "إزمير", "55%", "tinaztepe.edu.tr"),
  u("Yaşar University", "Izmir", "Izmir", "إزمير", "45%", "yasar.edu.tr"),

  // ── Antalya ───────────────────────────────────────────────
  u("Antalya Belek University", "Antalya", "Antalya", "أنطاليا", "60%", "belek.edu.tr"),
  u("Antalya Bilim University", "Antalya", "Antalya", "أنطاليا", "50%", "antalya.edu.tr"),

  // ── Northern Cyprus ───────────────────────────────────────
  u("Near East University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "70%", "neu.edu.tr"),
  u("Eastern Mediterranean University", "Famagusta", "Northern Cyprus", "قبرص الشمالية", "60%", "emu.edu.tr"),
  u("Cyprus International University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "65%", "ciu.edu.tr"),
  u("Girne American University", "Kyrenia", "Northern Cyprus", "قبرص الشمالية", "50%", "gau.edu.tr"),
  u("European University of Lefke", "Lefke", "Northern Cyprus", "قبرص الشمالية", "70%", "eul.edu.tr"),
  u("Final International University", "Kyrenia", "Northern Cyprus", "قبرص الشمالية", "75%", "final.edu.tr"),
  u("University of Kyrenia", "Kyrenia", "Northern Cyprus", "قبرص الشمالية", "60%", "kyrenia.edu.tr"),
  u("Bahçeşehir Cyprus University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "50%", "baucyprus.edu.tr"),
  u("Arkın University of Creative Arts and Design", "Kyrenia", "Northern Cyprus", "قبرص الشمالية", "55%", "arucad.edu.tr"),
  u("American University of Cyprus", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "60%", "auc.edu.tr"),
  u("Cyprus Health and Social Sciences University", "Morphou", "Northern Cyprus", "قبرص الشمالية", "70%", "kstu.edu.tr"),
  u("Ada Kent University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "65%", "adakent.edu.tr"),
  u("Mediterranean Karpasia University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "60%", "akun.edu.tr"),
  u("British University of Nicosia", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "55%", "bun.edu.tr"),
  u("Rauf Denktaş University", "Nicosia", "Northern Cyprus", "قبرص الشمالية", "60%", "rdu.edu.tr"),
];

export const regionTabs = [
  { id: "All", label: "الكل" },
  { id: "Istanbul", label: "إسطنبول" },
  { id: "Ankara", label: "أنقرة" },
  { id: "Izmir", label: "إزمير" },
  { id: "Antalya", label: "أنطاليا" },
  { id: "Northern Cyprus", label: "قبرص الشمالية" },
] as const;

export const countByRegion = (id: string) =>
  id === "All" ? universities.length : universities.filter((x) => x.region === id).length;

export const logoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Ordered logo sources — the UI falls through them until one loads. */
export const logoSources = (domain: string) => [
  ...(localLogo(domain) ? [localLogo(domain)!] : []),
  `https://logo.clearbit.com/${domain}?size=512&format=png`,
  `https://unavatar.io/${domain}?fallback=false`,
  `https://icon.horse/icon/${domain}`,
  `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
  `https://icons.duckduckgo.com/ip3/${domain}.ico`,
];

