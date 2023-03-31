<script lang="ts" setup>
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

function createEditor(el: HTMLElement, lang: string, value: any) {
  return monaco.editor.create(el, {
    value,
    language: lang,
  });
}

const props = defineProps<{
  value: string;
  type: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string): void;
  (e: "textChange", newValue: string): string;
}>();

onMounted(() => {
  const editor = createEditor(editorRef.value, props.type, props.value);
  watch(
    () => props.value,
    (newVal) => {
      const position = editor.getPosition();
      editor.setValue(newVal); // 会刷新鼠标位置
      if (position) {
        editor.setPosition(position); // 还原编辑位置
      }
    }
  );
  editor.getModel()?.onDidChangeContent(() => {
    emit("update:value", editor.getValue());
    emit("textChange", editor.getValue());
  });
});
const editorRef = ref();
</script>
<template>
  <div ref="editorRef" class="h-full w-full max-h-full"></div>
</template>
