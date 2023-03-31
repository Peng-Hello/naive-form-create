import { Lang } from "@/config";
export const structureInitData = `{
  "el": "form_group",
  "model": {
    "model1": 0
  },
  "model_name": "model_name",
  "ref": "formRef",
  "check_btn": false,
  "btn_name":"校验",
  "fun_name":"handleValidateButtonClick",
  "rules": true,
  "optionsList": [
    {
      "name": "select1",
      "options": [
        {
          "label": "Wait",
          "value": "song12"
        }
      ]
    }
  ],
  "children": [
    {
      "el": "input",
      "model_field": "model1",
      "label": "inputLabel",
      "path": "test"
    },
    {
      "el": "select",
      "model_field": "model1",
      "label": "select1",
      "path": "test1",
      "optionName": "select1"
    }
  ]
}
`;

export const rulesInitData = `{
  "test": {
    "required": true,
    "message": "请输入姓名",
    "trigger": "blur"
  },
  "test1": {
    "required": true,
    "message": "请输入姓名",
    "trigger": "blur"
  }
}`;
