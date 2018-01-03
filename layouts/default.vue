<template>
  <div>
    <Masthead></Masthead>
    <Logo></Logo>
    <Tabs></Tabs>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color:#172B4D;
}
a {
    color:#0052CC;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
    import Masthead from '~/components/Masthead.vue'
    import Logo from '~/components/Logo.vue'
    import Tabs from '~/components/Tabs.vue'

    export default {
        components: {
            Masthead,
            Logo,
            Tabs
        }
    }
</script>