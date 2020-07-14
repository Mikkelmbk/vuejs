<template>
  <div>
    <app-server-status v-for="(server, index) in 5" :key="index"></app-server-status> <!-- comming from locally registered component in ServerStatus.vue -->
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus"; // locally registered component
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>