var webstore = new Vue({
  el: "#app",

  data: {
    sitename: "Vue.js Pet Depot",
    showProduct: true,
    order: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: "",
      region: "",
      method: "Самовызов",
      business: "Доставка",
      home: "Домашний адрес",
      gift: "",
      sendGift: "Как подарок",
      dontSendGift: "Без подарка"
    },
    region: {
      CH: "Челябинска",
      MS: "Московская",
      HB: "Ямало-немецкий АО"
    },

    products: [],
    cart: []
  },

  methods: {
    addToCart(product) {
      this.cart.push(product.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert("Submitted");
    },
    checkRating(n, product) {
      return product.rating - n >= 0;
    },
    canAddToCart(product) {
      return product.availableInventory > this.cartCount(product.id);
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },

  computed: {
    cartItemCount: function() {
      return this.cart.length || "";
    },
    sortedProducts() {
      if (this.products.length > 0) {
        let productsArray = this.products.slice(0);
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        }
        return productsArray.sort(compare);
      }
    }
  },

  filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return "";
      }

      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;

        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }

        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },

  created() {
    axios.get("./products.json").then(response => {
      this.products = response.data.products;
      console.log(this.products);
    });
  }
});
