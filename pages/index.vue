<template>
  <ul
    class="
      flex flex-col
      md:flex-row
      space-y-2
      md:space-y-0 md:space-x-8
      items-center
      justify-center
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
