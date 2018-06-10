<template>
<div class="hello fixed-top">
    <div>
        <b-navbar toggleable="md" type="light" variant="light" class="border-bottom">
            <b-button @click="toggleSideMenuShow()" variant="primary">☰</b-button>
            <b-navbar-brand tag="h1" class="mb-0 ml-2" to="/">Brandi</b-navbar-brand>
            <b-nav-form class="ml-auto">
                <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
                <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-navbar-nav class="ml-auto">
                <b-button right variant="outline-primary" class="my-2 my-sm-0" to="/login" type="submit" v-if="!auth.logged && this.$route.path != '/login'">LogIn</b-button>
                <b-nav-item-dropdown text="Lang" right v-if="auth.logged">
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#" v-on:click="logout">LogOut</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</div>
</template>

<script>
import store from '../tools/store'

export default {
    name: 'Header',
    data() {
        return {
            auth: store.auth,
            sideMenu: store.sideMenu
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('keyo')
            this.auth.logged = false
        },
        toggleSideMenuShow() {
            this.sideMenu.isOpen = !this.sideMenu.isOpen
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
