<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mixin as VueTimers } from "vue-timers";
export default {
  name: "Bot",
  mixins: [VueTimers],
  created() {
    // It looks OK for the first look
    // But imagine that you have more than one timer
    this.$options.interval = setInterval(this.log, 1000);
    // Ok? What about check if timer works?
    // And it's not reactive so you should create data option
    console.log(this.$options.interval !== null);
    // Still ok? So what about reusable timers?
    // New method for that? Rly?
  },
  // Did you forget that it should be destroyed?
  beforeDestroy() {
    clearInterval(this.$options.interval);
    console.log(this.$options);
  },
};
</script>
