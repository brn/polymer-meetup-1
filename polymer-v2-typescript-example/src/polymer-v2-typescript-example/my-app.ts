/**
 * @fileoverview
 * @author Taketoshi Aono
 */
namespace myapp {
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
  @customElement("my-app")
  class MyApp extends Polymer.Element {
    private myHello: HTMLElement;

    constructor() {
      super();
    }

    @property({ type: String, notify: true })
    private appName: string = "MyApp";
  }
}
