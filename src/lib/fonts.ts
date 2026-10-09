import { Plus_Jakarta_Sans, Source_Sans_3, Bebas_Neue } from "next/font/google";

// Jakarta and Source Sans 3 are variable fonts: omitting `weight` loads one file per family.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const fontVariables = `${jakarta.variable} ${sourceSans.variable} ${bebasNeue.variable}`;
