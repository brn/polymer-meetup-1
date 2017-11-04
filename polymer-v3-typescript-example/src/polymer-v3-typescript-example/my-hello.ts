/**
 * @fileoverview
 * @author Taketoshi Aono
 */

import { Element } from "../../node_modules/@polymer/polymer/polymer-element.js";

/**
 * @customElement
 * @polymer
 */
export class MyHello extends Element {
  private name: string;

  public static get template() {
    return `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[name]]!</h2>
    `;
  }

  public static get properties() {
    return {
      name: {
        type: String,
        observer: "handleName"
      }
    };
  }

  constructor() {
    super();
  }

  private handleName(newName: string) {
    console.log(newName);
    this.name = newName;
  }
}

customElements.define("my-hello", MyHello);
