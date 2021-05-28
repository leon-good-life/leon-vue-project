<template>
  <button v-bind:type="type" class="primary-button" v-on:click="onClick">
    <span v-if="loading"><i class="fa fa-spinner fa-spin"></i> טוען </span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onClick() {
      this.click();
    }
  }
};
</script>

<style scoped lang="scss">
.primary-button {
  background-color: var(--action);
  color: var(--light);
  height: 56px;
  width: 228px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>