<template>
  <section class="tasks">
    <h1 class="heading">Tasks</h1>
    <div>
      <input
        type="text"
        placeholder="New Task"
        class="input"
        v-model="newTask"
        @keyup.enter="addTask"
        id="title"
      />
      <span>
        <button @click="addTask()" class="add">Add</button>
      </span>
    </div>

    <div>
      <button class="completedtask" @click="edit()">Completed Task</button>
      <button @click="clearCompleted()" class="clearCompleted">
        Clear completed
      </button>
      <button @click="clearAll()" class="clearAll">Clear All</button>
    </div>

    <div>
      <!-- v-for="(id) in tasks" :key="id" -->
      <ul class="list">
        <li v-for="(task, index) in tasksList" :key="index">
          <button
            class="display"
            @click="task.completed = !task.completed"
            v-bind:class="[task.completed ? 'complete' : 'notcomplete']"
            v-on:click="display()"
          >
            {{ task.title }}
          </button>
          <button @click="deleteTask(index)" class="delete">Delete</button>
          <!-- <button @click="edit()" class="edit" >
                      Edit
                   </button> -->
          <!-- {{task.title}} -->
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default ToDo;
import { ToDo } from "./ToDo";
</script>

<style lang="less" src="./ToDo.less">
</style>
