<script setup lang="ts">
import { usePageData } from "@vuepress/client"
import { computed } from 'vue'

const pageData = usePageData()
const isChinese = computed(() => {
  return pageData.value.path.startsWith("/zh/")
})
const backgroundImage = computed(() => isChinese.value ? '/img/ss/new_bgc_zh.png' : '/img/ss/new_bgc_en.png')
const jumpUrl = computed(() =>
  isChinese.value
    ? 'https://zh.okaapps.com/vidhub-alist'
    : 'https://okaapps.com/vidhub-alist'
)

console.log('当前图片:', backgroundImage.value)
</script>

<template>
  <div class="ads-container">
    <div class="vidhub-new-bgc">
      <a :href="jumpUrl" target="_blank" rel="noopener">
        <img :src="backgroundImage" :alt="isChinese ? 'VidHub 背景' : 'VidHub Background'" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new_site {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: larger;
  font-weight: bold;
  border: 1px solid #aaaaaa50;
  border-radius: 10px;
  padding: 10px 0;
  color: #007bff;
  text-decoration: none;
}
.vidhub {
  width: 100%;
  height: 150px;
  background-image: url(/img/ss/vidhub-bg.png);
  background-size: cover;
  background-position: right;
  border-radius: 14px;
  display: block;
  padding-right: 4px;
  @media screen and (max-width: 700px) {
    height: 160px;
  }
  div {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;

    img {
      height: 60%;
      width: auto;
      @media screen and (max-width: 700px) {
        height: 40%;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      .title {
        color: white;
        font-weight: bold;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        padding-bottom: 5px;
        @media screen and (max-width: 700px) {
          font-size: medium;
          word-break: break-all;
        }
        .tag {
          background-color: green;
          display: inline;
          border-radius: 40px;
          padding: 6px;
          padding-left: 14px;
          padding-right: 14px;
          margin-left: 4px;
          white-space: nowrap;
        }
      }
      .hero {
        height: auto;
        color: rgb(194, 193, 193);
        @media screen and (max-width: 700px) {
          font-size: small;
        }
      }
    }
  }
}
.ss {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: large;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .mingdao {
    display: flex;
    justify-content: center;

    a {
      max-width: min(500px, 100%);

      img {
        width: 100%;
      }
    }
  }
}

.ads-container {
  display: flex;
  justify-content: center;
}

.wwads-container {
  padding-top: 10px !important;
  padding-bottom: 0 !important;
  :deep(img) {
    display: unset;
    max-width: unset;
    max-height: unset;
    margin: unset;
  }
  max-width: var(--home-page-width);
}

.vidhub-new-bgc {
  // width: 100%;
  // max-width: 100%;
  // 以上为展示图片圆角，暂时先注释
  margin: 10px auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  height: auto;
  border-radius: 10px;
}
.vidhub-new-bgc img {
  width: 100%;
  max-height: 200px;
  height: auto;
  display: block;
  object-fit: contain;//cover 为正常宽展示，但是图片宽高过大会被拉伸，先用contain
}
.vidhub-new-bgc a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
