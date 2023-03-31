import { Lang } from "../config";
import { context } from "@/logic/transform";
export function createCodePart(
  model_name: string,
  model: JSON,
  ref: string,
  optionsList: {
    name: string;
    options: {
      label: string;
      value: string;
    }[];
  }[],
  rules: string = ""
) {
  let options = "";
  if (optionsList) {
    optionsList.forEach((i) => {
      options = options + `const ${i.name} =${JSON.stringify(i.options)}`;
    });
  }
  return `import {ref,onMounted} from "vue"
  const ${ref} =ref();
  const ${model_name}=ref(${JSON.stringify(model)});
  ${options}
  const rules=${rules}
  `;
}

export function createVueScript(slot: string) {
  return `<script setup lang="${Lang}">
${slot}
  </script>
  `;
}
export function createVueTemplate(slot: string) {
  return `<template>
  ${slot}
  </template>`;
}

export function createFormGroup(ref: string, modelName: string, solt: string) {
  const temp = context.rules ? `:rules="rules"` : "";
  return `<n-form ref="${ref}" :model="${modelName}" ${temp}>
    ${solt}
    </n-form>
    `;
}

export function createFormItem(label: string, solt: string, path?: string) {
  return `<n-form-item path="${path}" label="${label}" >
  ${solt}
    </n-form-item>
`;
}

export function createInputItem(
  modelName: string,
  modelField: string,
  type?: string
) {
  const temp = type ? `type="${type}"` : "";
  return `<n-input v-model:value="${modelName}.${modelField}" ${temp} 
  />`;
}

export function createSelectItem(
  modelName: string,
  modelField: string,
  optionName: string
) {
  return `<n-select v-model:value="${modelName}.${modelField}" :options="${optionName}" 
  />`;
}
