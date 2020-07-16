<template>
  <div>
    <h1>bot</h1>
    <br /><br />
    <div v-for="(item, index) in bot" :key="index" class="bot">
      <span v-text="item"></span>
    </div>
    <br /><br />
    <div v-for="(item, index) in marco" :key="index" class="marco">
      <span v-text="item.offer"></span><br />
      <span v-text="item.attention"></span><br />
      <span v-text="item.program"></span><br />
    </div>
    <br /><br />
    <div v-for="(item, index) in user" :key="index" class="user">
      <span v-text="item.offer"></span><br />
      <span v-text="item.attention"></span><br />
      <span v-text="item.program"></span><br />
    </div>
    <br /><br />
    <div v-for="(item, index) in help" :key="index" class="help">
      <span v-text="item.question"></span><br />
      <span v-text="item.yes"></span><br />
      <span v-text="item.no"></span><br />
    </div>
    <br /><br />
  </div>
</template>

<script>
import bot from "@/assets/json/bot.json";
import help from "@/assets/json/help.json";
import marco from "@/assets/json/marco.json";
import user from "@/assets/json/user.json";
export default {
  data() {
    return {
      bot: bot,
      help: help,
      marco: marco,
      user: user,
    };
  },
};
</script>
