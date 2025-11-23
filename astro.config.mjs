// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "The Grand Archives of Sacro Elcarion",
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
