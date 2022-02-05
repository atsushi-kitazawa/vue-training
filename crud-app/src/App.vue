<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/read">Read</router-link> |
    <router-link to="/update">Update</router-link> |
    <router-link to="/delete">Delete</router-link>
  </div>
  <router-view />
</template>