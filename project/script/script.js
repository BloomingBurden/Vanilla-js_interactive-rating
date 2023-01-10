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
        this._elem.innerHTML = `
        <h2 class="rating--new__title">
          Thank you!
        </h2>
        <p class="rating__result"><span>You selected <span class="rating__change">5</span> out of 5</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur nisi modi mollitia quis earum at culpa corporis obcaecati eligendi natus molestias similique, aliquid qui alias voluptatem delectus quia suscipit?</p>`
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