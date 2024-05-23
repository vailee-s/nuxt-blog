<template>
    <div class="p-4">
        <p>局部</p>
      Counter: {{ counter }} CounterRef: {{ counterRef }}
      <div class="mt-2">
        <UButton @click="counter++; counterRef++;">+</UButton>
        <UButton @click="counter--; counterRef--;">-</UButton>
      </div>
    </div>
    <p>全局</p>
    <Counter></Counter>
    <p>使用全局数据时，上边组件修改数据，下边组件ref（count2）不更新</p>
    <Counter></Counter>
  </template>
  
  <script setup lang="ts">
import { useCounter } from '~/composable/counter';

  // 初始值不确定的情况下，ref() 无法保证服务端和客户端的状态一致性
  const counterRef = ref(Math.round(Math.random() * 1000));

  const counter = useState("counter", () => Math.round(Math.random() * 1000));

  const count = useCounter();
  </script>
  