<template>
  <Html :lang="locale" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>

      <Meta name="description" :content="description" />
      <Meta name="og:description" :content="description" />
      <Meta name="twitter:description" :content="description" />
      <Meta
        :name="meta.name"
        :content="meta.content"
        v-for="(meta, index) in metaList"
        :key="index"
      />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
    </Head>

    <Body class="dark:bg-gray-700 bg-gray-50">
      <Header></Header>
      <main>
        <div>
          <!-- <div class="md:basis-1/6 absolute lg:static" v-show="sidebar">
          <Sidebar />
        </div> -->
          <!-- <div :class="!sidebar ? 'md:flex-auto' : 'md:basis-5/6'"> -->
          <!-- Nuxt Pages -->
          <div class="container mx-auto px-4 lg:my-10 my-5">
            <slot />
          </div>
          <!-- Nuxt Pages -->
          <!-- </div> -->
        </div>
      </main>
      <Footer />
    </Body>
  </Html>
</template>
<script lang="ts" setup>
import sidebar from "../core/sidebar";
import { PropType } from "vue";

//route
const route = useRoute();

//i18n
const { locale, t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// meta tags for seo and social media  and more
// setup meta tags dynamically
const title = computed(() => t("meta.title", { title: route.meta.title }));
const description = computed(() => t("meta.description"));
const metaList = computed(() => [
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#ffffff" },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "black" },
  { name: "apple-mobile-web-app-title", content: "trader4" },
  { name: "msapplication-TileColor", content: "#ffffff" },
  { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
  { name: "msapplication-config", content: "/icons/browserconfig.xml" },
  { name: "format-detection", content: "telephone=+989166320277" },
  { name: "author", content: "trader4" },
  { name: "og:site_name", content: "trader4" },
  { name: "og:url", content: "https://trader4.net/" },
  { name: "og:type", content: "website" },
  { name: "og:title", content: "trader4" },
  {
    name: "og:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
  { name: "twitter:url", content: "trader4" },
  { name: "twitter:title", content: "trader4" },
  {
    name: "twitter:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
]);
</script>
<style lang="css">
.rtl {
  direction: rtl;
}
@media screen and (min-width: 2200px) {
  .app-container aside {
    margin-left: -10rem;
  }
}
</style>
