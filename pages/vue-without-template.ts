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
    return `Hi ${this.selectedPerson.first_name} ${
      this.selectedPerson.last_name
    }`
  }
  get countedString() {
    return `selected person is ${this.count}`
  }

  // method
  greet(msg: string) {
    return () => {
      alert(`greeting: ${msg}`)
    }
  }

  add() {
    this.count += 1
  }

  subtract() {
    this.count -= 1
  }

  render(h) {
    return h('section', { attrs: { class: 'container' } }, [
      h('div', [
        h('h2', 'welcome to Typescript without template'),
        h('h4', 'Say Hello to someone'),
        h('h4', `you select ${this.selectedPersonName}`),
        h('section', { attrs: { class: 'mx-4' } }, this.people
          .map((person, idx) => h('card', {
            key: `cards-${idx}`,
            props: {
              person: person,
            },
            style: { backgroundColor: person.id === this.selected ? 'rgba(100, 100, 100, .3)' : 'transparent' },
          }))),
        h('div', [
          h('span', this.count),
          h('button', { on: { click: this.add } },'add'),
          h('button', { on: { click: this.subtract } },'subtract'),
        ]),
        h('div', [
          h('button', { on: { click: this.greet(this.selectedPersonName) } }, 'greet'),
        ]),
        h('nuxt-link', { props: { to: '/' } }, 'go to home'),
      ]),
    ])
  }
}
