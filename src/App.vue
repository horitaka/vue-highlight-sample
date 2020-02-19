<template>
  <div id="app" class="container">
    <div class="buttons">
      <button class="button is-primary" @click="onPythonClicked">Python</button>
      <button class="button is-primary" @click="onVsClicked">Visual Basic</button>
      <button class="button is-primary" @click="onJsClicked">JavaScript</button>
    </div>
    <CodeHighlight :code="code" :lang="lang"/>
  </div>
</template>

<script>
import CodeHighlight from './components/CodeHighlight.vue'

const javaScriptCode = `
function helloWorld() {
  let message = 'Hello world';
  console.log(message);
}

helloWorld();
`

const pythonCode = `
def helloworld():
    name = input('input your name: ')
    message = 'Hello ' + name + ' !'
    print(message)

helloworld()
`

const vsCode = `
static void Main(string[] args)
{
  Console.WriteLine("Hello World!");
}
`

export default {
  name: 'App',
  components: {
    CodeHighlight
  },
  data: function() {
    return {
      code: javaScriptCode,
      lang: 'javascript'
    }
  },
  methods: {
    onPythonClicked () {
      this.code = pythonCode
      this.lang = 'python'
    },
    onVsClicked () {
      this.code = vsCode
      this.lang = 'cs'
    },
    onJsClicked () {
      this.code = javaScriptCode
      this.lang = 'javascript'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
