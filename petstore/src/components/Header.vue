<template>
  <div>
    <header>
      <div class="navbar navbar-default">
        <div class="navbar-header">
          <h1>
            <router-link :to="{ name: 'iMain' }">{{ sitename }}</router-link>
          </h1>
        </div>

        <div class="nav navbar-nav navbar-right cart">
          <router-link
            active-class="active"
            tag="button"
            class="btn btn-default btn-lg"
            :to="{ name: 'Form' }"
            >
              {{ cartItemCount }}
            <span class="glyphicon glyphicon-shopping-cart"></span>
            Корзина
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "Зоомагазин"
    };
  },
  props: ["cartItemCount"],
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    }
  }
};
</script>

<!--Добавьте атрибут «scoped», чтобы ограничить CSS только этим компонентом.-->
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: black;
}
</style>
