/* globals window */
import GreenRecos from './green-recos/custom-element';

window.green = {
    recos: {
      t_porsche: ['5', '6', '7'],
      t_fendt: ['3', '6', '2'],
      t_eicher: ['1', '2', '8']
    },
    state: {
      variant: 't_porsche'
    }
};

window.customElements.define('green-recos', GreenRecos);
