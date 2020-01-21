// radio component
class radioButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // let shadow = this.attachShadow({mode:'open'});

        let $input = document.createElement('input');
        $input.type = 'radio';

        let $props = [];

        for (let property in this.dataset) {
            if (property != 'name' && property != 'id' && property != 'value') {
                let $attr = ` data-${property}="${this.dataset[property]}"`;
                $props.push($attr);
            }
        }

        this.innerHTML = `
			<input ${this.dataset.name ? 'name="'+this.dataset.name+'"' : ''} ${this.dataset.id ? 'id="'+this.dataset.id+'"' : ''} type="radio" ${$props.join(' ')}>
			<label ${this.dataset.id ? 'for="'+this.dataset.id+'"' : ''} type="radio">${this.dataset.value ? this.dataset.value : ''}</label>
		`;

        this.removeAttribute('id');
        this.removeAttribute('data-value');
    }
}

window.customElements.define('form-radio', radioButton);

// checobx component
class checkButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // let shadow = this.attachShadow({mode:'open'});

        let $input = document.createElement('input');
        $input.type = 'checkbox';

        let $props = [];

        for (let property in this.dataset) {
            if (property != 'name' && property != 'id' && property != 'value') {
                let $attr = ` data-${property}="${this.dataset[property]}"`;
                $props.push($attr);
            }
        }

        this.innerHTML = `
			<input ${this.dataset.name ? 'name="'+this.dataset.name+'"' : ''} ${this.dataset.id ? 'id="'+this.dataset.id+'"' : ''} type="checkbox" ${$props.join(' ')}>
			<label ${this.dataset.id ? 'for="'+this.dataset.id+'"' : ''} type="checkbox">${this.dataset.value ? this.dataset.value : ''}</label>
		`;

        this.removeAttribute('id');
        this.removeAttribute('data-value');
    }
}

window.customElements.define('form-check', checkButton);