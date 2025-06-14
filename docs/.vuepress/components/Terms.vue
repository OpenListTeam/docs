<script lang="ts" setup>
import { NH2, NH3, NDivider, NText, NSpace } from 'naive-ui'

const isZh = location.pathname.startsWith('/zh/')

const content = isZh
  ? {
      title: '使用条款',
      description: 'Policies of {COMPANYNAME} - Terms of Service',
      terms: [
        '本服务仅供合法用途，用户不得利用本服务从事任何违法活动。',
        '用户应自行承担因使用本服务而产生的所有风险和责任。',
        '我们有权在不提前通知的情况下，随时修改、暂停或终止本服务。',
        '本服务按“现状”提供，不对其可用性、准确性或适用性作任何明示或暗示的保证。',
        '如有任何疑问，请随时联系我们。'
      ],
      agplTitle: 'AGPL 授权声明',
      agplNote:
        '本软件受 <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU Affero General Public License v3.0 (AGPL-3.0)</a> 许可协议保护。您可以自由使用、修改和分发本软件，但必须遵守 AGPL-3.0 的相关条款，包括在分发和提供服务时公开源代码。详情请参阅上述链接。'
    }
  : {
      title: 'Terms of Service',
      description: 'Policies of {COMPANYNAME} - Terms of Service',
      terms: [
        'This service is for lawful use only. Users must not engage in any illegal activity through this service.',
        'Users assume all risks and responsibilities resulting from the use of this service.',
        'We reserve the right to modify, suspend, or terminate the service at any time without prior notice.',
        'The service is provided "as is" without any express or implied warranties of availability, accuracy, or fitness for a particular purpose.',
        'If you have any questions, please contact us.'
      ],
      agplTitle: 'AGPL License Notice',
      agplNote:
        'This software is licensed under the <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU Affero General Public License v3.0 (AGPL-3.0)</a>. You are free to use, modify, and distribute the software, but must comply with AGPL-3.0 terms, including disclosing source code when distributing or offering as a service. See the link above for details.'
    }
</script>

<template>
  <Policies>
    <SEO
      :title="content.title"
      :description="content.description"
      keywords="政策,Policies,使用条款,Terms of Service"
    />
    <NH2>{{ content.title }}</NH2>
    <NText depth="3" style="display: block; margin-bottom: 1rem;">
      {{ isZh
        ? '欢迎使用本服务。请在使用前仔细阅读以下条款。使用本服务即表示您同意遵守本使用条款。'
        : 'Welcome to our service. Please read the following terms carefully before use. By using this service, you agree to be bound by these terms.' }}
    </NText>

    <NH3>{{ isZh ? '条款内容' : 'Terms' }}</NH3>
    <NDivider />

    <ul style="padding-left: 1.5rem;">
      <li v-for="(term, index) in content.terms" :key="index">
        <NText depth="3" style="display: block; margin: 0.5rem 0;">{{ term }}</NText>
      </li>
    </ul>

    <NH3 style="margin-top: 2rem;">{{ content.agplTitle }}</NH3>
    <NDivider />
    <Callout type="info">
      <NText depth="3" style="display: block;" v-html="content.agplNote" />
    </Callout>
  </Policies>
</template>

<style scoped>
ul {
  list-style-type: disc;
  margin-top: 1rem;
}
</style>
