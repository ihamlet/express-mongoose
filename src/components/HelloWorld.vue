<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <button @click="Post">提交</button>
    <button @click="Delete">删除</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    axios.get('http://localhost:3000/api/hero')
      .then(response => {
          console.log(response,'获取成功')
      })
      .catch(error => {
          console.log(error)
      })
  },
  methods: {
      Post(){
        axios.post('http://localhost:3000/api/hero',{
              name :'德玛西亚',
              age : 22,
              sex : 'man',
              address : 'sdfsdfs',
              dowhat : '中单、刺客',
              imgArr: ["http://ossweb-img.qq.com/images/lol/web201310/skin/big157000.jpg", "http://ossweb-img.qq.com/images/lol/web201310/skin/big157001.jpg", "http://ossweb-img.qq.com/images/lol/web201310/skin/big157002.jpg"],
              favourite:'dfsadf',
              explain:'sdfsdf'
          })
          .then(response => {
              console.log(response,'添加成功')
          })
          .catch(error => {
              console.log(error)
          })
      },
      Delete(){
          axios.delete('http://localhost:3000/api/hero/5b6277c87113c6dfd5bdfc42')
          .then(response => {
              console.log('删除成功')
          })
          .catch(error => {
              console.log(error)
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
