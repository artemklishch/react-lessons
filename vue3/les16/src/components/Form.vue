<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <div class="form-group">
        <label for="disabledTextInput">Name</label>
        <input
          v-model="form.name"
          type="text"
          id="disabledTextInput"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label for="disabledTextInput">Lastname</label>
        <input
          v-model="form.lastName"
          type="text"
          id="disabledTextInput"
          class="form-control"
          placeholder="Lastname"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  initForm: {
    name: "",
    lastName: ""
  },
  data() {
    return {
      form: {}
    };
  },
  watch: {
    form: {
      handler() {
        this.updateStorage();
      },
      deep: true
    }
  },
  created() {
    let storedForm = this.getStorage();
    this.form = { ...this.$options.initForm, ...storedForm };
  },
  methods: {
    onSubmit() {
      this.form = { ...this.$options.initForm };
    },
    getStorage() {
      return JSON.parse(localStorage.getItem("myform"));
    },
    setStorage(val) {
      localStorage.setItem("myform", JSON.stringify(val));
    },
    updateStorage() {
      let storedForm = this.getStorage();
      if (!storedForm) storedForm = {};
      storedForm = JSON.parse(JSON.stringify(this.form));
      this.setStorage(storedForm);
    }
  }
};
</script>