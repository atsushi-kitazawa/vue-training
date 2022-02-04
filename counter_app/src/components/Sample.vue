<template>
  <div class="sample">
    <h1>{{ msg1 }}</h1>
    <h1>{{ msg2 }}</h1>
    <ul>
      <li v-for="(item, key) in items" :key="key">
        {{ item.key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  props: {
    msg1: String,
    msg2: String,
    items: {
      key: String,
      value: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
