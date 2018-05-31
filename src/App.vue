<template>
<div id="app">
    <app-boot></app-boot>
    <app-header></app-header>

    <div class="side-menu" v-bind:class="{ active: sideMenu.isOpen }">
        <app-sidemenu></app-sidemenu>
    </div>
    <main class="mTop">

        <router-view/>
        <app-footer></app-footer>

    </main>

</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Boot from '@/components/Boot'

import store from '@/tools/store'

export default {
    name: 'App',
    data() {
        return {
            sideMenu: store.sideMenu
        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-boot': Boot,

    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.side-menu {
    position: fixed;
    top: 52px;
    bottom: 0;
    width: 256px;
    left: -256px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 10;
    background-color: #6c757d;
    color: white;

    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;

}

.side-menu.active {
    left: 0;
}

.mTop {
    margin-top: 55px;
}
</style>
