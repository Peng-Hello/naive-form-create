# Naive Form Create
<p>
<img src="https://img.shields.io/badge/build-passing-brightgreen">
<img src="https://img.shields.io/github/license/Peng-Hello/naive-form-create">
<img src="https://img.shields.io/badge/version-v1.0-blue">
</p>

[简体中文](../README.md)


Naive UI form generator, you can generate the corresponding form code using JSON configuration!

## Features

- Generate code using JSON configuration

- Supports the generation of verification code

- Easy to expand


## Playground

https://naive-form-create.netlify.app/



## How to use ?

In general, in the original format. You can probably figure out the general usage for yourself.



It doesn't matter if I don't know how to use it.



### About the general structure



The generator has three Windows: `Structure`, `Rules`, and `Preview`



`Structure` : Determines the generated code structure



`Rules` : Determines the check rules



`Preview` : Automatically generates preview code based on the content of `Structure` and `Rules` in real time



### Structure Indicates the configuration content

#### n-form Indicates the configuration field description



`el` : indicates the target of the current object generation. If the value is form_group, it will generate n-form (necessary).



`model` : Indicates what value the current form needs to bind. Is it an object



`model_name` : indicates the name of the variable that the current form needs to bind



`ref` : The ref name of the binding



`check_btn` : indicates whether the check is enabled. If so, the generator automatically adds a check button and associated code



`btn_name` : Name of the check button (default: check)



` fun_name ` : check function name (default: handleValidateButtonClick)



`rules` : Whether to add parity rules



optionsList: If one or more selectors are used, this is the array for their options. (not necessary)



The format of the values in the array is as follows:

```json
{

"name": "select1", // Give this selector a name
"options": [
    {
     "label": "Wait",
     "value": "song12"
    }
 ] // See the Naive UI official notation
}
```

`children` : indicates the children of `n-form`



#### n-input Indicates the configuration field description

`el` : The value is` input `



`model_field` : Specifies which field of `model` it is bound to



`label` : Indicates the label name of the form item



`path` : Specifies the check path. Refer to the configuration in the `Rules` window



#### n-select Indicates the configuration field description

`el` : The value is` select `



`model_field` : Specifies which field of `model` it is bound to



`label` : Indicates the label name of the form item



`path` : Specifies the check path. Refer to the configuration in the `Rules` window



`optionName` : indicates what value of optionsList is bound to (just fill in the corresponding `name` field)



### Rules Configure the content

It is written in accordance with the official verification rules.



[Naive UI official Form document](https://www.naiveui.com/zh-CN/light/components/form#custom-rule.vue)



## Currently supported

- n-input generation

- n-select generation

## Technology stack

- Vue 3.0