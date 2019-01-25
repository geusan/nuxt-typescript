<template>
  <section class="container">
    <div>
      <h2>welcome</h2>

      <h4>Say Hello to someone</h4>

      <section class="mx-4">
        <card v-for="(person, idx) in people" 
              :key="`card-${idx}`"
              :style="{ backgroundColor: person.id === selected ? 'rgba(100, 100, 100, .3)' : 'transparent'}"
              :person="person">
        </card>
      </section>

      {{selectedPersonName}}

    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '~/components/Card'
import { namespace } from 'vuex-class'

import * as people from '~/store/people'

const People = namespace(people.name)

@Component({
  components: {
    Card,
  },
  // fetch
  async fetch() {
    console.log('fetch')
  },
  // asyncData
  async asyncData() {
    console.log('asyncData')
    return {
      newData: 'new Data from async Data!',
    }
  },
})
export default class App extends Vue {
  // store binding
  @People.State
  selected
  @People.State
  people
  @People.Getter
  selectedPerson

  // data
  private msg: string = 'Hello world'
  private count: number = 0
  private newData: string = ''

  // created
  created(): void {
    console.log('created', `(newData: ${this.newData})`)
  }

  // beforeMount
  beforeMount(): void {
    console.log('beforeMount', `(newData: ${this.newData})`)
  }

  // mounted
  mounted(): void {
    console.log('mounted', `(newData: ${this.newData})`)
  }

  // updated
  updated(): void {
    console.log('updated', `(updated person: ${this.selectedPersonName})`)
  }

  // beforeDestroy
  beforeDestroy(): void {
    console.log('beforeDestroy', `(newData: ${this.newData})`)
  }

  // destroyed
  destroyed(): void {
    console.log('destroyed', `(newData: ${this.newData})`)
  }

  // computed
  get selectedPersonName() {
    return `Hi ${this.selectedPerson.first_name} ${this.selectedPerson.last_name}`
  }
  get countedString() {
    return `selected person is ${this.count}`
  }

  // method
  greet() {
    alert(`greeting: ${this.msg}`)
  }

  add() {
    this.count += 1
  }

  subtract() {
    this.count -= 1
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.mx-4 {
  margin: 2em 0;
}
</style>

