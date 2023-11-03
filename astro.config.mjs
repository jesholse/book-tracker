import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import fuse from "astro-fuse";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), fuse()],
  output: "hybrid",
});
