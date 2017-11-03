/**
 * @fileoverview
 * @author Taketoshi Aono
 */

import { Element } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "./my-hello";

/**
 * @customElement
 * @polymer
 */
class MyApp extends Element {
  private appName: string = "MyApp";

  public static get template() {
    return `
      <style>
        :host {
          display: block;
        }
      </style>
      <my-hello name="[[appName]]"/>
    `;
  }

  public static get properties() {
    return {
      appName: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }
}

customElements.define("my-app", MyApp);
