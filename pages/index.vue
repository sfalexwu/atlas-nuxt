<template>
    <div>
        <build></build>
    </div>
</template>

<style scoped>
    .container {
        color:#172B4D;
    }
    h3 {
        margin:20px 0px;
    }
    .title-list {
        margin-bottom:40px;
    }
    .track-title {
        font-size:22px;
        font-weight:bold;
    }
    .nav-link {
        color:#172B4D;
        font-weight:bold;
        padding:15px;
        border-top: 1px solid #989898;
    &.active {
         background-color:#f2f2f2;
     }
    }
    .speaker {
        color:#989898;
        font-size:14px;
        font-weight:normal;
    }
</style>

<script>
    import build from '~/pages/build.vue'

    export default {
        components: {
            build
        }
    }
</script>