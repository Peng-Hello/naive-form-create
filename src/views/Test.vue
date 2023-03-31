<script setup lang="ts">
import { ref, onMounted } from "vue";
const formRef = ref();
const model_name = ref({ model1: 0 });
const select1 = [{ label: "Wait", value: "song12" }];
const rules = {
  test: { required: true, message: "请输入姓名", trigger: "blur" },
  test1: { required: true, message: "请输入姓名", trigger: "blur" },
};
</script>
<template>
  <n-form ref="formRef" :model="model_name" :rules="rules">
    <n-form-item path="test" label="inputLabel">
      <n-input v-model:value="model_name.model1" />
    </n-form-item>
    <n-form-item path="test1" label="select1">
      <n-select v-model:value="model_name.model1" :options="select1" />
    </n-form-item>
  </n-form>
</template>
