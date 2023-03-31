import { createFormGroup } from "./creater";
import type { Ref } from "vue";
import { getJson } from "./getStructureJson";

export const context = {
  optionsList: [] as any[] | null,
  rules: false as boolean | null,
  check_btn: false as boolean | null,
  model_name: "" as string | null,
};
type StructureJson = {
  el: string | null;
  model: { [key: string]: string } | null;
  model_name: string | null;
  ref: string | null;
  check_btn: boolean | null;
  btn_name: string | null;
  fun_name: string | null;
  rules: boolean | null;
  optionsList: any[] | null;
  children: any[] | null;
};
export function transform(structureJson: StructureJson, rulesRef: Ref<any>) {
  context.rules = structureJson.rules ? structureJson.rules : null;
  context.optionsList = structureJson.optionsList
    ? structureJson.optionsList
    : null;
  context.model_name = structureJson.model_name
    ? structureJson.model_name
    : null;
  context.check_btn = structureJson.check_btn ? true : false;
  let scriptPart = "";
  let templatePart = "";
  if (structureJson.children) {
    let childrenTemp = "";
    structureJson.children.forEach((i) => {
      const el = i.el;
      if (el === "input") {
        const inputStr = createInputItem(context.model_name!, i.model_field);
        childrenTemp = childrenTemp + createFormItem(i.label, inputStr, i.path);
      } else if (el === "select") {
        const selectStr = createSelectItem(
          context.model_name!,
          i.model_field,
          i.optionName
        );
        childrenTemp =
          childrenTemp + createFormItem(i.label, selectStr, i.path);
      }
    });
    const formGroup = createFormGroup(
      structureJson.ref!,
      context.model_name!,
      childrenTemp
    );
    const template =
      formGroup +
      createValidateBtn(
        context.check_btn,
        structureJson.btn_name!,
        structureJson.fun_name!
      );
    templatePart = createVueTemplate(template);
  } else {
    // 错误格式
  }
  let rule = "";
  if (context.rules) {
    const rulesJson = getJson(rulesRef.value);
    if (rulesJson) {
      rule = JSON.stringify(rulesJson);
    }
  }

  scriptPart =
    scriptPart +
    createCodePart(
      context.model_name!,
      structureJson.model as any,
      structureJson.ref!,
      context.optionsList!,
      rule
    ) +
    createUseMessage(context.check_btn) +
    createValidateFunction(
      structureJson.ref!,
      structureJson.fun_name!,
      context.check_btn
    );

  return (
    createVueScript(formatJavascript(scriptPart)) + formatHTML(templatePart)
  );
}
