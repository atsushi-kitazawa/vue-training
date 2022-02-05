<template>
  <h1>Create page</h1>
  <form novalidate class="ui form" @submit.prevent="createData">
    <div class="id">
      <input v-model="newId" type="text" placeholder="111" />
    </div>
    <div class="name">
      <input v-model="newName" type="text" placeholder="aaa" />
    </div>
    <button type="submit" class="ui button">Create</button>
  </form>
  <div>
    <h4>items</h4>
    <ul>
      <li v-for="item in items" :key="item" class="data">
        {{ item.id }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newId: "",
      newName: "",
      items: [],
    };
  },
  methods: {
    createData() {
      this.items.push({ id: this.newId, name: this.newName });
    },
  },
};
</script>