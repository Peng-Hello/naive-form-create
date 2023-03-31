import prettier from "prettier/esm/standalone.mjs";
import htmlParser from "prettier/esm/parser-html.mjs";
import javascriptParser from "prettier/esm/parser-babel.mjs";
import typescriptParser from "prettier/esm/parser-typescript.mjs";
export function formatHTML(str: string): string {
  return prettier.format(str, {
    parser: "html",
    plugins: [htmlParser],
  });
}

export function formatJavascript(str: string): string {
  return prettier.format(str, {
    parser: "babel",
    plugins: [javascriptParser],
  });
}
