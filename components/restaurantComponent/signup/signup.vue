<template>
    <div class="content">
      <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">To-do List</h1>
          <p>Make yourself Productive</p>
        </div>
          <form>
              
            <input type="text" placeholder="Email or Phone Number" required />
            <input type="password" placeholder="Password" required>
            <button class="login" @click="signup()">Log In</button>
            <a href="#">Forgot Password ?</a>
            <hr>
            <button class="create-account">Create New Account</button>
          </form>
      </div>
    </div>
</template>
<script>
import {signup} from './signup'
export default signup
</script>
<style lang="less" src="./signup.less" scoped>

</style>


