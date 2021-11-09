class Basket {
    constructor(container) {
        this.container = container;
        this.products = Array.from(document.querySelectorAll('.product'));
        this.cartContainer = document.querySelector('.cart__products');
        this.cart = document.querySelector('.cart');
        this.productValue = document.querySelectorAll('.product__quantity-value');
        this.productsInCart = Array.from(this.cartContainer.children);

        // this.eventRegistration();
        this.arrProducts = [];
        this.fromLocalStorage();
        this.eventDecInc();
        this.addCart();
        this.showCart();   
    }

    eventDecInc() {
        this.products.forEach((product,idx) => {
            product.querySelector('.product__quantity-control_dec').addEventListener('click', ()=> {
                this.productValue[idx].textContent > 0 ? this.productValue[idx].textContent--
                :   this.productValue[idx].textContent = 0
            });
            product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
                this.productValue[idx].textContent++;
            });
        });
    }

    findInCart(product) {
        return Array.from(this.cartContainer.children).find(element => element.getAttribute('data-id') == product.dataset.id);
    }

    addCart() {
        this.products.forEach((product,idx) => {
            product.querySelector('.product__add').addEventListener('click', ()=> {
                if(this.productValue[idx].textContent === '0') {
                    return;
                }
                const cartValue = this.findInCart(product);
                if(cartValue !== undefined) {
                    const total = Number(cartValue.querySelector('.cart__product-count').textContent) + Number(this.productValue[idx].textContent);
                    cartValue.querySelector('.cart__product-count').textContent = total;
                    this.arrProducts = [...this.cartContainer.children].map(child => child.outerHTML);
                    this.addtoLocalStorage(this.arrProducts);
                    return;
                }
            this.arrProducts.push(`<div class="cart__product" data-id="${product.dataset.id}">
            <img class="cart__product-image" src="${product.querySelector('img').getAttribute('src')}"><div class="cart__product-count">${this.productValue[idx].textContent}</div><div class="cart__product-del">x</div></div> `);
            this.addtoLocalStorage(this.arrProducts);
            this.showCart();

            });
        });
    }

    addtoLocalStorage(obj) {
        localStorage.setItem('products', JSON.stringify(obj));
    }

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    showCart() {
        if (this.arrProducts.length > 0) {
            this.cart.setAttribute('style', 'display : block');
            this.cartContainer.innerHTML = Array.from(this.getLocalStorage('products')).join('');
            // this.arrProducts = this.cartContainer.innerHTML.split('<div class="cart__product');
            // this.arrProducts = [...this.cartContainer.children].map(child => child.outerHTML);
            // this.addtoLocalStorage(this.arrProducts);
            this.eventDelete();
        }
        if(this.arrProducts.length < 1) {
            this.cart.setAttribute('style', 'display : none');
        }
    }

    eventDelete () {
        Array.from(this.cartContainer.children).forEach((element,idx)=> {
            element.querySelector('.cart__product-del').addEventListener('click', () => {
                this.arrProducts.splice(idx,1);
                this.addtoLocalStorage(this.arrProducts);
                this.showCart();
            });
        });

    }

    fromLocalStorage() {
        if(this.getLocalStorage('products') != null) {
            this.arrProducts = this.getLocalStorage('products');
        }
    }
}

new Basket(document.querySelector('body'));


            