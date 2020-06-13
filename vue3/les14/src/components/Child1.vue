<template>
  <div>
    {{cntName}}
    <table>
      <tr v-for="country in countries" :key="country.name">
        <td>{{country.name}}</td>
        <td>{{country.alpha3Code}}</td>
        <td>{{country.capital}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["http", "getCntName"],
  data() {
    return {
      countries: [],
      certDataFromHttp: this.http.certainData
    };
  },
  computed: {
    cntName() {
      return this.getCntName();
    }
  },
  watch: {
    cntName() {
      this.loadCountries();
    }
  },
  methods: {
    firstLoadCountries() {
      this.http
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => (this.countries = response.data));
    },
    loadCountries() {
      this.http
        .get(`https://restcountries.eu/rest/v2/name/${this.cntName}`)
        .then(response => (this.countries = response.data));
    }
  },
  mounted() {
    console.log(this.certDataFromHttp);
    this.firstLoadCountries();
  }
};
</script>