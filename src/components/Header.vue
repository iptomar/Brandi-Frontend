<template>
<div class="hello">
    <div>
        <b-navbar type="light" variant="light">
            <b-navbar-brand tag="h1" class="mb-0" to="/">Brandi</b-navbar-brand>
            <b-nav-form>
                <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
                <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-button variant="outline-primary" class="my-2 my-sm-0" to="/login" type="submit" v-if="!auth.logged && this.$route.path != '/login'">LogIn</b-button>
            <b-nav-item-dropdown right v-if="auth.logged">
                <!-- Using button-content slot -->
                <template slot="button-content">
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#" v-on:click="logout">LogOut</b-dropdown-item>
            </b-nav-item-dropdown>
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
            auth: store.auth
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('keyo')
            this.auth.logged = false
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
