<template>
  <div class="content">
    <div class="flex-div">
      <div class="name-content">
        <h1 class="logo">To-do List</h1>
        <p>Make yourself Productive</p>
      </div>
      <form>
       

          <ul>
          <li v-for="err in error" v-bind:key="err">{{err}}</li>
          </ul>
          
      
        <input
          type="text"
         
          class="classname"
         
          v-model="user.email"
          placeholder="Email"
        />
        <input
          type="text"
          v-model="user.password"
         
           placeholder="Password"
        />
        <button class="login" @click="signup($event)">Log In</button>
     
      </form>
    </div>
  </div>
</template>
<script>
import { signup } from "./signup";
export default signup;
</script>
<style lang="less" src="./signup.less" scoped>
</style>


