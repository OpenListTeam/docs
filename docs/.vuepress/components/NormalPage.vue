<template>
  <NormalPage>
    <template #contentBefore>

    </template>
    <template #contentAfter>

    </template>
  </NormalPage>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
import { usePageFrontmatter } from "vuepress/client";
import { computed } from "vue";
import { usePageData } from 'vuepress/client'
import NaiveClient from './NaiveClient.vue'
import ApiSelect from "./api/ApiSelect.vue";

const pageData = usePageData()

// get is enable sidebar from frontmatter
const frontmatter = usePageFrontmatter();
const isTool = computed(() => {
  if (pageData.value.path.startsWith("/tool/")) {
    return true;
  }
  const sidebar = frontmatter.value.sidebar;
  return sidebar === false;
})
const showMingdao = false

const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "赞助商";
  }
  return "Sponsorship";
})
</script>

<style lang="scss" scoped>
.mingdao {
  display: flex;
  gap: 4px;
  justify-content: center;

  a {
    max-width: min(500px, 100%);
    position: relative;

    img {
      width: 100%;
    }

    span {
      font-size: small;
      color: #999;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>