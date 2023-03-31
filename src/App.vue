<script setup lang="ts">
import prettier from "prettier/esm/standalone.mjs";
import htmlParser from "prettier/esm/parser-html.mjs";
const structure = ref(structureInitData);
const rules = ref(rulesInitData);
const preview = ref("");

function updateData(value: string) {
  const structureJson = getJson(value);
  if (structureJson) {
    const transformValue = transform(structureJson as any, rules as any);

    const formatValue = prettier.format(transformValue, {
      parser: "vue",
      plugins: [htmlParser],
    });

    preview.value = formatValue;
  } else {
    preview.value = "解析失败，有语法错误";
  }
}
updateData(structure.value);
function structureChange(value: string) {
  updateData(value);
}

function rulesChange(value: string) {}

function previewChange(value: string) {
  console.log(value);
}
</script>

<template>
  <div
    class="h-screen w-screen grid grid-cols-2 grid-rows-[100vh] overflow-hidden"
  >
    <div class="structure">
      <h2 class="sticky p-3">Structure</h2>
      <MonacoEditor
        type="json"
        v-model:value="structure"
        @text-change="structureChange"
      ></MonacoEditor>
    </div>
    <div class="grid grid-cols-1 grid-rows-2">
      <div class="rules">
        <h2 class="sticky p-3">Rules</h2>
        <MonacoEditor
          type="json"
          v-model:value="rules"
          @text-change="rulesChange"
        ></MonacoEditor>
      </div>
      <div class="preview">
        <h2 class="sticky p-3">Preview</h2>
        <MonacoEditor
          type="html"
          v-model:value="preview"
          @text-change="previewChange"
        ></MonacoEditor>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
