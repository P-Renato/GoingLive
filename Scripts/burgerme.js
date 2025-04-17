import {cart} from './cart.js';

const products = [{
    name: 'bun',
    image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2021-08/beautiful-burger-buns-alt.jpg?itok=RynCVcYt",
    option1: {
        id: 'sesame',
        priceInCents: 100,
    }, 
    option2: {
        id: 'brioche',
        priceInCents: 150,
    },
    option3: {
        id: 'kaiser_roll',
        priceInCents: 120,
    }
}, {
    name: 'meat',
    image: 'https://www.thespruceeats.com/thmb/y7grc2sKh9azv1poueHYuEMdKOM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/groundbeefpatty2500-5af0d11f04d1cf0037094dcd.jpg',
    option1: {
        id: 'beef',
        priceInCents: 450,
    }, 
    option2: {
        id: 'brisket',
        priceInCents: 500,
    },
    option3: {
        id: 'sirloin',
        priceInCents: 525,
    }
}, {
    name: 'salad',
    image: 'https://i0.wp.com/blog.blueapron.com/wp-content/uploads/2020/10/types-of-lettuce-for-salad.png?resize=770%2C566&ssl=1',
    option1: {
        id: 'lettuce',
        priceInCents: 50,
    }, 
    option2: {
        id: 'tomato',
        priceInCents: 60,
    },
    option3: {
        id: 'onion',
        priceInCents: 40,
    }
}, {
    name: 'sauce',
    image: 'https://www.browneyedbaker.com/wp-content/uploads/2016/04/burger-sauce-9-600.jpg',
    option1: {
        id: 'ketchup',
        priceInCents: 0,
    }, 
    option2: {
        id: 'mustard',
        priceInCents: 0,
    },
    option3: {
        id: 'mayo',
        priceInCents: 25,
    }
}];

let productsHTML = '<table class="menu">';


// for (i starts at 0 and adds 2 till the last i)
for (let i = 0; i < products.length; i += 2) {
  const product1 = products[i];
  const product2 = products[i + 1];

  productsHTML += `
    <tr>
      <td>
        ${renderProductFieldset(product1)}
      </td>
      <td>
        ${product2 ? renderProductFieldset(product2) : ''}
      </td>
    </tr>
  `;
}

productsHTML += '</table>';

function renderProductFieldset(product) {
    return `
      <fieldset class="product-fieldset choose-your-${product.name}" 
        style="background-image: url('${product.image}'); background-position: center; background-size: 100%; height: 42vh;">
        <legend>Choose your ${product.name}:</legend>
  
        <section>
          <label>
            <input class="js-input-add-product" id="${product.option1.id}" name="${product.name}" type="checkbox" value="${product.option1.id}" />
            <span class="label-content">
              <span class="item-name">${formatLabel(product.option1.id)}</span>
              <span class="item-price">${formatPrice(product.option1.priceInCents)}</span>
            </span>
          </label>
        </section>
  
        <section>
          <label>
            <input class="js-input-add-product" id="${product.option2.id}" name="${product.name}" type="checkbox" value="${product.option2.id}" />
            <span class="label-content">
            <span class="item-name">${formatLabel(product.option2.id)}</span>

              <span class="item-price">${formatPrice(product.option2.priceInCents)}</span>
            </span>
          </label>
        </section>
  
        <section>
          <label>
            <input class="js-input-add-product" id="${product.option3.id}" name="${product.name}" type="checkbox" value="${product.option3.id}" />
            <span class="label-content">
             <span class="item-name">${formatLabel(product.option3.id)}</span>
              <span class="item-price">${formatPrice(product.option3.priceInCents)}</span>
            </span>
          </label>
        </section>
      </fieldset>
    `;
}

function formatPrice(priceInCents) {
    return priceInCents === 0 ? 'Free' : `$${(priceInCents / 100).toFixed(2)}`;
}
  
function formatLabel(str) {
    return str
      .split('_') // split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
      .join(' '); // join with spaces
}
  
console.log(productsHTML);


document.querySelector("#products-container").innerHTML = productsHTML;


document.querySelectorAll('.js-input-add-product').forEach((input) => {
    input.addEventListener('click', () => {
        const productId = input.dataset.product.option1.id;
        console.log(productId)
    });
});

function updateCartQuantity () {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += ca
    })
}
updateCartQuantity()

const exclamation = document.querySelector(".exclamation");

const showTime = 2000; // ms
const hideTime = 600;  // ms

const toggleVisibility = () => {
    if (exclamation.style.visibility === "hidden") {
        exclamation.style.visibility = "visible";
        setTimeout(toggleVisibility, showTime); 
    } else {
        exclamation.style.visibility = "hidden";
        setTimeout(toggleVisibility, hideTime); 
    }
};

toggleVisibility(); // start the loop