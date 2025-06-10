<script setup lang="ts">
import { NButtonGroup, NImage, NSpace, NButton, NDropdown } from "naive-ui"
import { computed, ref } from "vue"
// import { api } from "./api";

const proxy = "https://ghfast.top/"
const res = await fetch(`https://ad-api.nn.ci/v0/app/latest`)
const data = await res.json()
const version = data.version as string

const raw = [
  {
    key: "mac_arm64",
    label: "MacOS (Apple Silicon)",
    url: `https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_aarch64.dmg`,
  },
  {
    key: "mac_x64",
    label: "MacOS (Intel)",
    url: `https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64.dmg`,
  },
  {
    key: "win_x64",
    label: "Windows (X64)",
    url: `https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64-setup.exe`,
  },
  {
    key: "win_arm64",
    label: "Windows (ARM64)",
    url: `https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_arm64-setup.exe`,
  },
  {
    key: "linux",
    label: "Linux",
    url: `https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_amd64.deb`,
  },
] as const

type Plat = (typeof raw)[number]["key"]

const platform = navigator.platform.toLowerCase()
const plat = ref<Plat>("win_x64")
if (platform.includes("win")) {
  plat.value = "win_x64"
} else if (platform.includes("linux")) {
  plat.value = "linux"
} else if (platform.includes("mac")) {
  plat.value = "mac_arm64"
}

console.log(plat.value)

let text = {
  down: "Download",
  website: "Website",
}

const fullPlat = computed(() => {
  return raw.find((item) => item.key === plat.value)?.label
})

const options = computed(() => {
  return raw.map((item) => {
    return {
      ...item,
      label: `${item.label} ${plat.value === item.key ? "✅" : ""}`,
    }
  })
})

if (location.pathname.startsWith("/zh/")) {
  text = {
    down: "下载",
    website: "官网",
  }
}

function down() {
  const href = raw.find((item) => item.key === plat.value)?.url
  window.open(`${href}`, "_blank")
}

function handleSelect(key) {
  plat.value = key
}

function openWebsite() {
  window.open("https://desktop.alistgo.com/zh", "_blank")
}
</script>

<template>
  <NSpace align="center" vertical size="large">
    <NSpace class="btn">
      <NButton size="large" type="info" @click="openWebsite" tertiary>{{
        text.website
      }}</NButton>
      <NButtonGroup>
        <NDropdown
          trigger="hover"
          :options="options"
          @select="handleSelect"
          size="large"
        >
          <NButton size="large" type="primary" tertiary
            >💻{{ fullPlat }}</NButton
          >
        </NDropdown>
        <NButton size="large" @click="down" type="info" secondary>{{
          text.down
        }}</NButton>
      </NButtonGroup></NSpace
    >
    <NImage src="/img/guide/desktop.png"></NImage>
  </NSpace>
</template>

<style scoped>
.btn {
  transform: scale(125%);
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
