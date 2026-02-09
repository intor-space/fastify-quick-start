import { defineIntorConfig } from "intor";
import EN from "../messages/en/index.json";
import FR from "../messages/fr/index.json";

export const intorConfig = defineIntorConfig({
  defaultLocale: "en",
  supportedLocales: ["en", "fr"],
  messages: {
    en: EN,
    fr: FR,
  },
});
