<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>

    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Касса зоомагазина</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4><strong>Введите вашу информацию</strong></h4>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-6">
                <strong>Имя:</strong>
                <input v-model.trim="order.firstName" class="form-control" />
              </div>
              <div class="col-md-6">
                <strong>Фамилия:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12"><strong>Адрес:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.address" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12"><strong>Город:</strong></div>
              <div class="col-md-12">
                <input v-model.trim="order.city" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-2">
                <strong>регион:</strong>
                <select v-model="order.region" class="form-control">
                  <option disabled value="">Регион</option>
                  <option v-for="(region, key) in regions" v-bind:value="region">
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Индекс:</strong>
                <input
                  v-model.number="order.code"
                  class="form-control"
                  type="number"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  type="checkbox"
                  id="gift"
                  value="true"
                  v-bind:true-value="order.sendGift"
                  v-bind:false-value="order.dontSendGift"
                  v-model="order.gift"
                />
                <label for="gift">Упаковка ввиде подарка</label>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  type="radio"
                  id="home"
                  v-bind:value="order.home"
                  v-model="order.method"
                />
                <label for="home">Самовызов</label>
                <input
                  type="radio"
                  id="business"
                  v-bind:value="order.business"
                  v-model="order.method"
                />
                <label for="business">Доставка</label>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-6">
                <button
                  type="submit"
                  class="btn btn-primary submit"
                  v-on:click="submitForm"
                >
                  Place Order
                </button>
              </div>
            </div>

            <div class="col-md-12 verify">
              <pre>
                        First Name: {{ order.firstName }}
                        Last Name: {{ order.lastName }}
                        Address: {{ order.address }}
                        City: {{ order.city }}
                        code: {{ order.code }}
                        Region: {{ order.region }}
                        Method: {{ order.method }}
                        Gift: {{ order.gift }}
              </pre>
            </div>
            <!-- end of col-md-12 verify-->
          </div>
          <!--end of panel-body-->
        </div>
        <!--end of panel panel-info-->
      </div>
      <!--end of col-md-10 col-md-offset-1-->
    </div>
    <!--end of row-->
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
export default {
  name: "Form",
  props: ["cartItemCount"],
  data() {
    return {
      regions: {
        Chel: "Челябинска",
        Mos: "Московская",
        YaAO: "Ямало-немецкий АО"
      },
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        code: "",
        region: "",
        method: "Самовызов",
        business: "Доставка",
        home: "Домашний адрес",
        gift: "",
        sendGift: "Как подарок",
        dontSendGift: "Без подарка"
      }
    };
  },
  components: { MyHeader },
  methods: {
    submitForm() {
      alert("Submitted");
    }
  }
};
</script>

<style ограниченный></style>
