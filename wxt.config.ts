import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: ["activeTab", "scripting", "storage"],
  },

  modules: ["@wxt-dev/module-react"],
});
