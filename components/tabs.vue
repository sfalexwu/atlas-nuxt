<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/build">Build</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/plan">Plan</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/innovate">Innovate</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/interact">Interact</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/scale">Scale</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/service">Service</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/enhance">Enhance</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/general">General</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .nav-tabs {
        margin-bottom: 40px;
        color: #7A869A;
        font-weight: bold;
    }

    .nav-link {
        color:#7A869A;
        border-color: #dee2e6;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        background-color:#f2f2f2;
    }
    a.nuxt-link-active {
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff!important;
        color: #989898;
    }

</style>