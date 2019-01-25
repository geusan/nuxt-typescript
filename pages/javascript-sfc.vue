<template>
  <section class="container">
    <div>
      <h2>welcome to Javascript SFC</h2>

      <h4>Say Hello to someone</h4>

      <h4>you select {{selectedPersonName}}</h4>

      <section class="mx-4">
        <card v-for="(person, idx) in people" 
              :key="`cards-${idx}`"
              :style="{ backgroundColor: person.id === selected ? 'rgba(100, 100, 100, .3)' : 'transparent'}"
              :person="person">
        </card>
      </section>
      <div>
        <span>{{ count }}</span>
        <button @click="add">add</button>
        <button @click="subtract">subtract</button>
      </div>
      <div>
        <button @click="greet(selectedPersonName)">greet</button>
      </div>
      <nuxt-link to="/">go to home</nuxt-link>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Card,
  },
  async fetch() {
    console.log('fetch')
  },
  async asyncData() {
    console.log('asyncData')
    return {
      newData: 'new Data from asyncData',
    }
  },
  data: () => ({
    count: 0,
    msg: 'hello world!',
  }),
  // created
  created() {
    console.log('created', `(newData: ${this.newData})`)
  },

  // beforeMount
  beforeMount() {
    console.log('beforeMount', `(newData: ${this.newData})`)
  },

  // mounted
  mounted() {
    console.log('mounted', `(newData: ${this.newData})`)
  },

  // updated
  updated() {
    console.log('updated', `(updated person: ${this.selectedPersonName})`)
  },

  // beforeDestroy
  beforeDestroy() {
    console.log('beforeDestroy', `(newData: ${this.newData})`)
  },

  // destroyed
  destroyed() {
    console.log('destroyed', `(newData: ${this.newData})`)
  },

  // computed
  computed: {
    ...mapState({
      people: state => state.people.people,
      selected: state => state.people.selected,
    }),
    ...mapGetters({
      selectedPerson: 'people/selectedPerson',
    }),
    selectedPersonName() {
      return `Hi ${this.selectedPerson.first_name} ${this.selectedPerson.last_name}`
    },
    countedString() {
      return `counted string is ${this.count}`
    },
  },
  // method
  methods: {
    greet(msg) {
      alert(`greeting: ${msg}`)
    },
    add() {
      this.count += 1
    },
    subtract() {
      this.count -= 1
    },
  },
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

