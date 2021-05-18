<template>
  <input
    v-model="newTaskName"
    placeholder="Things To Do"
    @keyup.enter="addTask"
  />
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="task"
      :class="{ 'strike-out': task.isCompleted }"
    >
      {{ task.name }}
      <span class="click-able" @click="removeTask(index)">✖</span
      ><span class="click-able" @click="completed(index)">✔</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

interface Task {
  name: string;
  isCompleted: boolean;
}

export default class Todo extends Vue {
  newTaskName = "";
  tasks: Task[] = [];

  addTask(): void {
    this.tasks.push({ name: this.newTaskName, isCompleted: false });
    this.newTaskName = "";
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  completed(index: number): void {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }
}
</script>

<style scoped>
.strike-out {
  text-decoration: line-through;
}
.click-able {
  padding: 4px;
}
.click-able:hover {
  cursor: pointer;
}
</style>
