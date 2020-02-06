<template>
  <button
    class="btn"
    :disabled="disabled"
    :class="`${type} ${invert ? 'invert' : ''} ${size}`"
    @click="$emit('click', $event)"
  >
    <slot>Submit</slot>
  </button>
</template>
<script>
export default {
  props: {
    size: {
      default: "auto",
      type: String,
      validator(prop) {
        return ["auto", "full", "half"].indexOf(prop) > -1;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      default: "primary",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    invert: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="css" scoped>
.btn {
  border: 1px black solid;
  background-color: cadetblue;
}
</style>
