<template>
  <div>
    <span>{{ person.first_name }} {{ person.last_name }}</span>
    <button @click="select(person.id)">select</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as people from '~/store/people'

const People = namespace(people.name)

@Component
export default class Card extends Vue {
  @Prop() person
  @People.Action select
}
</script>
