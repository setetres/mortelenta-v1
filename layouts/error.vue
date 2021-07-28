<template>
  <ul
    class="
      flex flex-col
      lg:flex-row
      font-mono font-bold
      uppercase
      space-x-0
      lg:space-x-6
      relative
      bg-black
      text-white text-2xl
      z-10
    "
  >
    <li>ERROR</li>
  </ul>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    next()
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼 — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
