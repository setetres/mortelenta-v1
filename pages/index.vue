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
      mt-8
    "
  >
    <li>
      <a
        href="https://twitch.tv/Conceived_in_Fire"
        class="hover:text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conceived_in_Fire
      </a>
    </li>
    <li>
      <a
        href="https://twitch.tv/CreepyCrappyShow"
        class="hover:text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        CreepyCrappyShow
      </a>
    </li>
    <li>
      <a
        href="https://twitch.tv/pedroleitin"
        class="hover:text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        pedroleitin
      </a>
    </li>
    <li>
      <a
        href="https://twitch.tv/quietsurvivor"
        class="hover:text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        quietsurvivor
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  head() {},
  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
