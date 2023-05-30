(() => {
  const cartItems = [];
  const cartButton = document.querySelector("img.cart-icon");
  const closeCartButton = document.querySelector("span.close-icon");
  const closeCartButton1 = document.querySelector("a.produt");
  const addButtons = document.querySelectorAll("[data-add-product]");
  const cartProducts = document.querySelector(".cart__products");

  const createCartItem = (
    item = {
      color: "white",
      size: "XS",
      title: "Cotton dress",
      price: 50.0,
      quantity: 1,
    }
  ) => {
    // Cria todas as divs
    const cartProduct = document.createElement("div");
    const productRemove = document.createElement("div");
    const productImage = document.createElement("div");
    const quantitySelector = document.createElement("div");
    const productDetails = document.createElement("div");
    const productPrice = document.createElement("div");
    const productOptions = document.createElement("div");
    const colorOption = document.createElement("div");
    const sizeOption = document.createElement("div");
    const productTitle = document.createElement("div");

    // Adicionas as respectivas classes as divs
    cartProduct.classList.add("cart__product");
    productRemove.classList.add("product__remove");
    productImage.classList.add("cart__product-image");
    quantitySelector.classList.add("quantity-selector");
    productDetails.classList.add("cart__product-details");
    productPrice.classList.add("cart__product-price");
    productOptions.classList.add("cart__product-options");
    colorOption.classList.add("cart__product-option");
    sizeOption.classList.add("cart__product-option");
    productTitle.classList.add("cart__product-title");

    // Cria todos os spans
    const closeIcon = document.createElement("span");
    const removeIcon = document.createElement("span");
    const quantity = document.createElement("span");
    const addIcon = document.createElement("span");
    const colorOptionName = document.createElement("span");
    const colorOptionValue = document.createElement("span");
    const sizeOptionName = document.createElement("span");
    const sizeOptionValue = document.createElement("span");

    closeIcon.classList.add("close-icon");
    removeIcon.classList.add("remove-icon");
    quantity.classList.add("quantity");
    addIcon.classList.add("add-icon");
    colorOptionName.classList.add("option__name");
    sizeOptionName.classList.add("option__name");
    colorOptionValue.classList.add("option__value");
    sizeOptionValue.classList.add("option__value");
    const image = document.createElement("img");

    image.classList.add("cart__product-image");
    image.src = "assets/images/product-image.webp";

    sizeOptionName.innerText = "Size:";
    sizeOptionValue.innerText = item.size;

    colorOptionName.innerText = "Color:";
    colorOptionValue.innerText = item.color;

    removeIcon.innerText = "remove";
    addIcon.innerText = "add";
    closeIcon.innerText = "close";
    quantity.innerText = item.quantity;

    productTitle.innerHTML = item.title;
    productPrice.innerHTML = `$${item.price.toFixed(2)}`;

    colorOption.appendChild(colorOptionName);
    colorOption.appendChild(colorOptionValue);

    sizeOption.appendChild(sizeOptionName);
    sizeOption.appendChild(sizeOptionValue);

    productOptions.appendChild(sizeOption);
    productOptions.appendChild(colorOption);

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productOptions);

    productRemove.appendChild(closeIcon);

    quantitySelector.appendChild(removeIcon);
    quantitySelector.appendChild(quantity);
    quantitySelector.appendChild(addIcon);

    cartProduct.appendChild(productRemove);

    productImage.appendChild(image);
    productImage.appendChild(quantitySelector);

    cartProduct.appendChild(productImage);
    cartProduct.appendChild(productDetails);

    const removeItem = (e) => {
      const element = e.target;
      const parentProduct = element.closest(".cart__product");
      const cartProducts = document.querySelector(".cart__products");
      const itemIndex = cartItems.findIndex(
        (element) => element === parentProduct
      );

      cartProducts.removeChild(parentProduct);
      cartItems.splice(itemIndex, 1);
      updateTotals(cartItems, item, "remove");
      toggleItems(cartItems);
    };

    closeIcon.addEventListener("click", removeItem);

    removeIcon.addEventListener("click", (e) => {
      const target = e.target;
      const quantityElement = target.parentElement.querySelector(".quantity");

      item.quantity = item.quantity - 1;

      quantityElement.innerText = item.quantity;

      if (item.quantity === 0) {
        item.quantity = 1;
        removeItem(e);
      } else {
        updateTotals(cartItems, item, "decrement");
      }
    });

    addIcon.addEventListener("click", (e) => {
      const target = e.target;
      const quantityElement = target.parentElement.querySelector(".quantity");

      item.quantity = item.quantity + 1;

      quantityElement.innerText = item.quantity;
      updateTotals(cartItems, item, "increment");
    });

    return cartProduct;
  };

  const toggleItems = (cartItems) => {
    const emptyCartElements = document.querySelectorAll("[data-empty-cart]");
    const notEmptyCartElements = document.querySelectorAll(
      "[data-not-empty-cart]"
    );

    if (cartItems.length === 0) {
      emptyCartElements.forEach((element) => {
        element.style.display = "block";
      });
      notEmptyCartElements.forEach((element) => {
        element.style.display = "none";
      });
      // Se tiver algum item, esconder os elementos
    } else {
      emptyCartElements.forEach((element) => {
        element.style.display = "none";
      });
      notEmptyCartElements.forEach((element) => {
        element.style.display = "flex";
      });
    }
  };

  const openCart = () => {
    const cart = document.querySelector(".cart");

    cart.style.display = "block";
  };

  const extractMoneyValue = (string) => {
    return Number(string.split("$")[1]);
  };

  const updateTotals = (cartItems, item, action = "add") => {
    const totalItems = document.querySelector(".cart__total-value");
    const subTotal = document.querySelector("[data-subtotal]");
    const grandTotal = document.querySelector("[data-grand-total]");
    const subTotalValue = extractMoneyValue(subTotal.innerText);
    const grandTotalValue = extractMoneyValue(subTotal.innerText);
    const quantityActions = ["increment", "decrement"];
    const remove = ["remove", "decrement"].includes(action);
    const itemTotalValue = quantityActions.includes(action)
      ? item.price
      : item.quantity * item.price;
    const newSubTotalValue = remove
      ? subTotalValue - itemTotalValue
      : subTotalValue + itemTotalValue;
    const newGrandTotalValue = remove
      ? grandTotalValue - itemTotalValue
      : grandTotalValue + itemTotalValue;

    totalItems.innerHTML = cartItems.length;

    subTotal.innerText = `$${newSubTotalValue.toFixed(2)}`;
    grandTotal.innerText = `$${newGrandTotalValue.toFixed(2)}`;
  };

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = {
        color: "white",
        size: "XS",
        title: "Cotton dress",
        price: 50.0,
        quantity: 1,
      };
      const newCartItem = createCartItem(item);

      cartItems.push(newCartItem);
      cartProducts.appendChild(newCartItem);
      toggleItems(cartItems);
      openCart();
      updateTotals(cartItems, item);
    });
  });

  toggleItems(cartItems);

  // Ao clicar no cartButton a gente abre o carrinho
  cartButton.addEventListener("click", openCart);

  // Ao clicar no closeCartButton a gente esconde o carrinho
  closeCartButton.onclick = () => {
    const cart = document.querySelector(".cart");

    cart.style.display = "none";
  }; 

  closeCartButton1.onclick = () => {
    const cart = document.querySelector(".cart");

    cart.style.display = "none";
  }; 

  const checkoutBtns = document.querySelectorAll(".checkout-btn");

checkoutBtns.forEach((btn, index) => {
  const checkoutTL = new gsap.timeline({
    paused: true
  });

  const btnText = btn.querySelector(".checkout-btn__text");
  const btnIcon = btn.querySelector(".checkout-btn__icon");
  const btnSuccess = btn.querySelector(".checkout-btn__success");
  const btnFailure = btn.querySelector(".checkout-btn__failure");

  checkoutTL
    .to(btnText, {
      opacity: 0,
      duration: 0.75,
      ease: "power4.in"
    })
    .to(
      btnIcon,
      {
        x: 150,
        delay: 0.25,
        duration: 0.75,
        opacity: 0,
        ease: "back.in(1.7)"
      },
      "<"
    );
  btn.addEventListener("click", () => {
    if (index === 0) {
      checkoutTL
        .to(btn, {
          background: "#27ae60",
          ease: "power4.out",
          width: 500
        })
        .to(
          btnSuccess,
          {
            opacity: 1,
            ease: "power4.out",
            delay: 0.55,
            onComplete: () => {
              window.location.href = "https://github.com/samuel10752";
            }
          },
          "<"
        );
    } else {
      checkoutTL
        .to(btn, {
          background: "#c0392b",
          ease: "power4.out",
          width: 300
        })
        .to(
          btnFailure,
          {
            opacity: 1,
            ease: "power4.out",
            delay: 0.25
          },
          "<"
        );
    }

    checkoutTL.play();

    setTimeout(() => {
      checkoutTL.restart();
      checkoutTL.pause();
    }, 6000);
  });
});

})();
