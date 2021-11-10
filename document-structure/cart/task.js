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
                this.productValue[idx].textContent > 1 ? this.productValue[idx].textContent--
                :   this.productValue[idx].textContent = 1
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
                    this.arrProducts[idx].text = total;
                    this.addtoLocalStorage(this.arrProducts);
                    return;
                }
            this.arrProducts.push({id:product.dataset.id, src: product.querySelector('img').getAttribute('src'), text:this.productValue[idx].textContent});
            this.addtoLocalStorage(this.arrProducts);
            this.showCart();

            });
        });
    }
    covertToHtml(element) {
        return `<div class="cart__product" data-id="${element.id}">
        <img class="cart__product-image" src="${element.src}">
        <div class="cart__product-count">${element.text}</div>
        <div class="cart__product-del">x</div></div>`;
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
            let arr = this.getLocalStorage('products');
            this.cartContainer.innerHTML = arr.map(e => this.covertToHtml(e)).join('');
            this.eventDelete();
        }
        if(this.arrProducts.length < 1) {
            this.cart.setAttribute('style', 'display : none');
        }
    }

    eventDelete () {
        Array.from(this.cartContainer.children).forEach((element,idx)=> {
            element.querySelector('.cart__product-del').addEventListener('click', () => {
                element.remove();
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


            