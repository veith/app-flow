import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";
import "./app-flow-router"
import "../app-flow"

/**
 * `test-helper`
 *
 *
 * @summary
 * @customElement
 * @polymer
 * @mixes FBP
 */
class Test_helper extends FBP(PolymerElement) {
    static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: block;
          background-color: greenyellow;
          height: 100px;
          width: 100px;
        }
      </style>

      <app-flow-router current="{{current}}" config="[[conf]]" ƒ-check="--app-flow" data="{{qp}}"></app-flow-router>
      <button @-click="--tapped">X</button>

      <div data-x="22">
        <app-flow event-name="button-tapped" ƒ-emit="--tapped" @-app-flow="--app-flow"></app-flow>
        <app-flow event-name="other-button-tapped" ƒ-emit="--tapped" @-app-flow="--app-flow"></app-flow>

      </div>

      <button id="wiredButton" @-click="--wiredData(wiredData)">X</button>
      <app-flow id="wiredDataFlow" event-name="wired-button-tapped" ƒ-emit="--wiredData" @-app-flow="--app-flow"></app-flow>
    `;
  }

  static get properties() {
    return  {
      wiredData: {
        type: String,
        value: 'some data to pass'
      },
      a: {
        type: String,
        value: 'a string'
      },
      barray: {
        type: Array,
        value: [1, 2, 3, 4]
      },
      _privateProp: {
        type: String,
        value: "secret"
      },
      conf: {
        type: Array,
        value: [
          ['view-main', 'button-tapped', 'detail-view', 'a => aufgabe, barray => mixx'],
          ['detail-view', 'no-button-tapped', 'detail-view'],
          ['detail-view', 'other-button-tapped', 'detail-view', false]]
      },
      current: {
        type: String,
        value: 'view-main'
      },
      qp: {
        type: Object
      }
    };
  }

}

window.customElements.define('test-helper', Test_helper);
