'use strict';

class App {
    constructor() {
        this._elem = document.querySelector('.rating');
        this._elem.addEventListener('click', this.onClick.bind(this));
    }

    select(elem) {
        this._elem.querySelectorAll('[data-action]').forEach(item => item.classList.remove('rating__item--active'));
        elem.classList.toggle('rating__item--active');
        this.current = elem.innerHTML;
    }

    send(elem) {
        if (!this.current) {
            let tmp = elem.innerHTML;
            elem.innerHTML = 'Enter please one option!';
            setTimeout(() => elem.innerHTML = tmp, 3000);
        }
        
        this._elem.classList.add('rating--new');
        this.ratingHtml = this._elem.innerHTML;
        
        this._elem.innerHTML = `
        <h2 class="rating--new__title">
          Thank you!
        </h2>
        <p class="rating__result"><span>You selected <span class="rating__change">5</span> out of 5</span></p>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>`;

        document.querySelector('.rating__change').textContent = this.current;
    }

    onClick(e) {
        const target = e.target.closest('[data-action]');

        if (target) {
            this[target.dataset.action](target);
        }
    }
};

new App();