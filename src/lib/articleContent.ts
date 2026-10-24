import type { ComponentType } from "react";

import CepalEs from "@/content/es/cepal-derechos-sexuales-reproductivos";
import MinervaEs from "@/content/es/taller-minerva-university";
import NewsletterEs from "@/content/es/newsletter-actividades-2024";
import Encrucijadas from "@/content/es/encrucijadas-libertad-expresion";
import FinanciamientoEs from "@/content/es/financiamiento-politica";
import CapacitacionEs from "@/content/es/capacitacion-ndi";
import AperturaEs from "@/content/es/apertura-polarizacion";
import PolarizacionEs from "@/content/es/polarizacion-toma-decisiones";
import DialogoEs from "@/content/es/dialogo-politico-mejores-politicas";
import AntagonismoEs from "@/content/es/antagonismo-desacuerdo-conflicto";
import LegislacionEs from "@/content/es/legislacion-simbolica";
import GironaEs from "@/content/es/evidencia-creacion-derecho-girona";

import AntagonismoEn from "@/content/en/antagonismo-desacuerdo-conflicto";
import LegislacionEn from "@/content/en/legislacion-simbolica";
import DialogoEn from "@/content/en/dialogo-politico-mejores-politicas";
import CapacitacionEn from "@/content/en/capacitacion-ndi";
import GironaEn from "@/content/en/evidencia-creacion-derecho-girona";

export const esBodies: Record<string, ComponentType> = {
  "cepal-derechos-sexuales-reproductivos": CepalEs,
  "taller-minerva-university": MinervaEs,
  "newsletter-actividades-2024": NewsletterEs,
  "encrucijadas-libertad-expresion": Encrucijadas,
  "financiamiento-politica": FinanciamientoEs,
  "capacitacion-ndi": CapacitacionEs,
  "apertura-polarizacion": AperturaEs,
  "polarizacion-toma-decisiones": PolarizacionEs,
  "dialogo-politico-mejores-politicas": DialogoEs,
  "antagonismo-desacuerdo-conflicto": AntagonismoEs,
  "legislacion-simbolica": LegislacionEs,
  "evidencia-creacion-derecho-girona": GironaEs,
};

export const enBodies: Record<string, ComponentType> = {
  "antagonismo-desacuerdo-conflicto": AntagonismoEn,
  "legislacion-simbolica": LegislacionEn,
  "dialogo-politico-mejores-politicas": DialogoEn,
  "capacitacion-ndi": CapacitacionEn,
  "evidencia-creacion-derecho-girona": GironaEn,
};
