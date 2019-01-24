<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="(s, idx) in samples" :key="`li-${idx}`">
          {{ s.name }} - {{ s.age }}
        </li>
      </ul>
      <div>
        <span>{{ countedString }}</span>
        <button @click="add">add</button>
        <button @click="subtract">subtract</button>
      </div>
      <div>
        <button @click="greet">greet</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sample from '~/models/Sample'
import Card from '~/components/Card'
import AppLogo from '~/components/AppLogo'

@Component({
  components: { Card, AppLogo }
})
export default class App extends Vue {
  
  private samples: Sample[] = []
  private msg: string = 'Hello world'
  private count: number = 0

  created(): void {
    this.msg = 'Hello world'
  }

  mounted(): void {
    this.samples.push(new Sample({ name: 'samuel', age: 19 }))
    this.samples.push(new Sample({ name: 'kimchi', age: 34 }))
    this.samples.push(new Sample({ name: 'jake', age: 27 }))
    this.samples.push(new Sample({ name: 'jason', age: 12 }))
    this.samples.push(new Sample({ name: 'ilbangbang', age: 19 })) 
    console.log('Hi')
  }

  // computed
  get countedString() {
    return `computed ${this.count}`
  }

  // method
  greet() {
    alert(`greeting: ${this.msg}`)
  }

  add() {
    this.count++
  }

  subtract() {
    this.count--
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
</style>

