<template>
  <div>
    <b-navbar type="dark" variant="success">
      <b-container>
        <b-navbar-nav>
          <b-nav-item href="#">Главная</b-nav-item>

          <!-- Navbar dropdowns -->

          <b-nav-item-dropdown text="Пользователь" left>
            <b-dropdown-item href="#">Профиль</b-dropdown-item>
            <b-dropdown-item href="#">Настройки</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
