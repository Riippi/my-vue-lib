import Vue from "vue";
import MyButton from "./MyButton.vue";
import SecondButton from "./SecondButton.vue";

const Components = {
  MyButton,
  SecondButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
