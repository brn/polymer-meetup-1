/**
 * @fileoverview
 * @author Taketoshi Aono
 */
namespace myhello {
  const {
    customElement,
    property,
    query,
    queryAll,
    observe
  } = Polymer.decorators;

  /**
   * @customElement
   * @polymer
   */
  @customElement("my-hello")
  class MyHello extends Polymer.Element {
    @query("h2") private element: HTMLHeadingElement;

    constructor() {
      super();
    }

    @property({ type: String, notify: true })
    private name: string = "";

    @observe("name")
    private handleName(newName: string) {
      console.log(newName, this.element);
      this.name = newName;
    }
  }
}
