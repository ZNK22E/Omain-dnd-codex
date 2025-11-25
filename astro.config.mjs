// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://omaincodex.co.uk",
  base: "/",
  output: "static",
  integrations: [
    starlight({
      title: "The Grand Archives of Sacro Elcarion",
      favicon: "/favicon.svg",
      logo: {
        src: "/src/assets/images/logo.svg",
      },
      sidebar: [
        {
          label: "Sessions",
          autogenerate: { directory: "sessions" },
        },
        {
          label: "Lore",
          autogenerate: { directory: "lore" },
        },
        {
          label: "Characters",
          autogenerate: { directory: "characters" },
        },
        {
          label: "Locations",
          autogenerate: { directory: "locations" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
