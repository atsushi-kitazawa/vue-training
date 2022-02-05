<template>
    <h1>Read page</h1>
    <h1>{{ myVar }}</h1>
</template>

<script>
export default {
    data() {
        return {
            myVar: this.inMemoryDB
        }
    },
}
</script>