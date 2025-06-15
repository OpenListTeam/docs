<script lang="ts" setup>
import { NH2, NH3, NDivider, NText } from 'naive-ui'

const isZh = location.pathname.startsWith('/zh/')

const content = isZh
  ? {
      title: '隐私政策',
      description: 'Policies of {COMPANYNAME} - Privacy Policy',
      intro:
        '我们非常重视您的隐私。我们<strong>不收集任何您的个人信息</strong>。但请注意，您的IP地址等信息可能会被您的互联网服务提供商（ISP）或网络中转节点收集，这超出我们的控制范围。',
      sectionTitle: '声明',
      statements: [
        '我们不会收集、存储、处理或分析您的任何个人信息。',
        '我们不会使用任何追踪技术（如Cookies、指纹识别、Web Beacon等）来收集您的信息。',
        '我们不会与任何第三方共享您的任何信息。',
        '您在本服务中的所有操作均不会被我们记录。',
        '但您的IP地址、访问时间等信息可能会被您的ISP或网络中转节点收集，这属于互联网基础设施的正常行为，我们无法控制。',
        '如有任何隐私相关疑问，欢迎随时联系我们。'
      ]
      lastUpdated: '最后更新：2025年6月14日'
    }
  : {
      title: 'Privacy Policy',
      description: 'Policies of {COMPANYNAME} - Privacy Policy',
      intro:
        'We highly value your privacy. We <strong>do not collect any of your personal information</strong>. However, please be aware that your IP address and other metadata might be collected by your ISP or intermediate network nodes beyond our control.',
      sectionTitle: 'Notice',
      statements: [
        'We do not collect, store, process, or analyze any of your personal data.',
        'We do not use any tracking technologies (such as cookies, fingerprinting, web beacons, etc.) to gather your data.',
        'We do not share your information with any third parties.',
        'Your actions within this service are not recorded by us.',
        'However, your IP address and visit time may be collected by your ISP or transit nodes as part of normal Internet infrastructure behavior, which is beyond our control.',
        'If you have any privacy-related concerns, please feel free to contact us.'
      ]
      lastUpdated: 'Last Updated: June 14, 2025'
    }
</script>

<template>
  <Policies>
    <SEO
      :title="content.title"
      :description="content.description"
      keywords="政策,Policies,隐私政策,Privacy Policy"
    />
    <NH2>{{ content.title }}</NH2>
    <NText depth="3" style="display: block; margin-bottom: 1rem;" v-html="content.intro" />

    <NH3>{{ content.sectionTitle }}</NH3>
    <NDivider />

    <ul style="padding-left: 1.5rem;">
      <li v-for="(item, index) in content.statements" :key="index">
        <NText depth="3" style="display: block; margin: 0.5rem 0;">{{ item }}</NText>
      </li>
    </ul>
  </Policies>
</template>

<style scoped>
ul {
  list-style-type: disc;
  margin-top: 1rem;
}
</style>
