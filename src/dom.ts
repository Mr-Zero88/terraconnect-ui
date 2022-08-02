import { Component } from "./jsx-runtime";

export function render(component: Component, element: HTMLElement) {
  console.log(JSON.stringify(component));
}