/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement, window, CustomEvent */
import render from './render';

class GreenRecos extends HTMLElement {
	static get observedAttributes() {
      return ['sku'];
    }
    connectedCallback() {
      const sku = this.getAttribute('sku');
      this.log('connected', sku);
	  if(sku) {
		window.green.state.variant = sku;
	  }
      this.render();
	  window.addEventListener('red:sku:changed', this.refresh.bind(this));
    }
	
	refresh(skuChangedEvent) {
	  if(skuChangedEvent) {
		window.green.state.variant = skuChangedEvent.detail.sku;
	  }
      this.log('event recieved "red:sku:changed"');
      this.render();  
    };
	
    attributeChangedCallback(attr, oldValue, newValue) {
      this.log('attributeChanged', attr, newValue);
      this.render();
    }
    render() {
      const sku = window.green.state.variant;
      const reco = window.green.recos[sku] || [];
      this.innerHTML = render(reco, this.getAttribute('base_url'));
    }
    disconnectedCallback() {
	  window.removeEventListener('red:sku:changed', this.refresh.bind(this));
      const sku = this.getAttribute('sku');
      this.log('disconnected', sku);
    }
    log(...args) {
      console.log('ðŸ–¼ï¸ green-recos', ...args);
    }
  }

export default GreenRecos;
