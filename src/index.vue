<template>
  <div @androidback="back">
    <router-view style="flex:1"/>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
