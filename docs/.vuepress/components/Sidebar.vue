<template>
  <Sidebar>
    <template #top>
      <div class="ss">
        <div class="sidebar-ad-placeholder">
          <a href="https://doc.hutool.cn/" target="_blank" @click="handleAdClick">
            <img src="/img/ss/hutool.pic.jpg" alt="Hutool" style="max-width: 80%; height: auto; margin-left: 20px;" />
          </a>
        </div>
        <!-- <div class="sidebar-ad-placeholder">
          广告 2
        </div>
        <div class="sidebar-ad-placeholder">
          广告 3
        </div> -->
        <div class="mingdao" v-if="showMingdao">
          <a href="https://www.mingdao.com?s=utm_51=utm_source=alist&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
            target="_blank"><img src="/img/ss/mingdao.png" alt="" /></a>
          <span>{{ spStr }}</span>
        </div>
        <div style="padding: 8px; padding-bottom: 0; margin-bottom: -16px;" v-if="isDrivers">
          <ApiSelect />
        </div>
      </div>
    </template>
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "vuepress-theme-hope/modules/sidebar/components/Sidebar";
import { usePageData } from "@vuepress/client";
import { computed } from "vue";
import ApiSelect from "./api/ApiSelect.vue";

const pageData = usePageData();
const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "赞助商";
  }
  return "Sponsorship";
});
const isDrivers = computed(() => {
  return pageData.value.path.includes("/drivers/");
});

const showMingdao = false;

const handleAdClick = async () => {
  try {
    await fetch('https://api.hutool.cn/blade-adv/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "alist-hutool"
      })
    });
  } catch (error) {
    console.error('广告统计请求失败:', error);
  }
};
</script>

<style scoped lang="scss">
.sidebar-ad-placeholder {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 35px 0 16px 0;
  border-radius: 5px;
}

.mingdao {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  a {
    max-width: 70%;

    img {
      width: 100%;
    }
  }

  span {
    width: 70%;
    text-align: right;
    font-size: small;
    color: #999;
  }
}
</style>
