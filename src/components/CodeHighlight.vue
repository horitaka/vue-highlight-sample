<template>
  <div>
    <!-- <highlight-code lang="javascript" class="code-block">
			let str = 'Hello, World!';
			console.log(str);
		</highlight-code>

		<highlight-code lang="javascript" inline>alert('Hello, World!');</highlight-code> -->

    <highlight-code :lang="lang" :code="code" class="code-block"></highlight-code>

    <!-- <div v-highlight >
      <pre class="language-javascript">
       <code>
         let str = 'Hello, World!';
         console.log(str);
       </code>
     </pre>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'CodeHighlight',
  props: {
    code: String,
    lang: String,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.code-block{
  text-align: left;
}
</style>
