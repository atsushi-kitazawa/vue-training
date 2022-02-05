<template>
    <h1>data created</h1>
</template>

<script>
export default {
  data() {
    return {
      myVar: this.inMemoryDB,
      id: "",
      name: "",
    };
  },
  methods: {
    createData() {
      this.myVar.push({ id: this.id, name: this.name });
    },
  },
};
</script>