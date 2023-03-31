# Naive Form Create
Naive UI 表单生成器, 使用 JSON 配置即可生成对应的表单代码！

## 特点
- 使用 JSON 配置生成代码
- 支持生成校验代码
- 易扩展

## 怎么使用？
通常来说，按照初始化好的格式。你大概可以自己推测出它的大致用法的。

还是不会用没关系,我简单说一下吧。

### 关于大体结构

生成器一共有三个窗口：Structure , Rules , Preview

`Structure` : 确定生成的代码结构

`Rules` : 确定校验规则

`Preview` : 实时根据 `Structure` , `Rules` 内容自动生成预览代码

### Structure 配置内容
#### n-form 配置字段说明

`el` : 表示当前对象生成的目标是什么。如: 值是 `form_group` 它就会生成 `n-form`  (必要)

`model` : 表示当前表单需要绑定的值是什么,它是个对象

`model_name` : 表示当前表单需要绑定的变量名称

`ref` : 绑定的 ref 名称

`check_btn` : 是否开启校验。 如果是，生成器会自动添加校验按钮和相关代码

`btn_name` : 校验按钮的名称 (默认：校验)

`fun_name` : 校验函数名称 (默认：handleValidateButtonClick)

`rules` : 是否加入校验规则

`optionsList` : 如果用到了一个或者多个选择器,这个就是存放它们的选项的数组。(非必要)

数组里面的值格式如下：
```json
 {
      "name": "select1", // 给这个选择器起一个名字
      "options": [
        {
          "label": "Wait",
          "value": "song12"
        }
      ] // 选项数组,参考 Naive UI 官方的写法
 }
```
`children` : 表示 `n-fomr` 里面的子元素

#### n-input 配置字段说明
`el` : 值为 `input`

`model_field` : 指定它绑定在 `model` 的哪一个字段

`label` : 表示表单项目的标签名称

`path` : 指定校验路径, 参考 `Rules` 窗口的配置

#### n-select 配置字段说明
`el` : 值为 `select`

`model_field` : 指定它绑定在 `model` 的哪一个字段

`label` : 表示表单项目的标签名称

`path` : 指定校验路径, 参考 `Rules` 窗口的配置

`optionName` : 表示绑定了 `n-form` 里 `optionsList` 的哪一个值 (只需要填写对应 `name` 字段的值即可)

### Rules 配置内容
同官方的校验规则写法一致。

[Naive UI 官方 Form 文档](https://www.naiveui.com/zh-CN/light/components/form#custom-rule.vue)

## 目前支持
-  n-input 的生成
-  n-select 的生成
## 技术栈
- Vue 3.0