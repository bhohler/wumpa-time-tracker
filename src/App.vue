<template>
  <div id="app">
    <WumpaTimeTracker />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueMaskDirective } from "v-mask";
import WumpaTimeTracker from "./components/WumpaTimeTracker.vue";

Vue.directive("mask", VueMaskDirective);

export default Vue.extend({
  name: "app",
  components: {
    WumpaTimeTracker
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #f8f9fa;
  text-align: left;
  background-color: #282828;
}

p {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

button {
  color: #fff;
  background-color: #007bff;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.3rem;
  margin: 0;
  font-family: inherit;
  overflow: visible;

  &::moz-focus-inner,
  &:focus-within {
    padding: 0;
    border: 0;
  }

  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    outline: 0;
    text-decoration: none;
  }
}

input[type="text"] {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  display: block;
  width: 100%;
  color: #f8f9fa;
  background-color: #353535;
  background-clip: padding-box;
  border: 1px solid #657a8e;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  border-radius: 0.3rem;

  &:focus {
    color: #f8f9fa;
    background-color: #353535;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}
</style>
