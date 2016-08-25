<template>

</template>

<style>

</style>

<script>
    import Auth from '../services/auth'
    import { router } from '../app'

    export default {

        created() {

            this.storeToken()

        },

        methods: {

            storeToken() {
                debugger;

                const token = this.$route.params.token;

                Auth.setToken(token);

                this.$router.go('/');
            }

        }

    }
</script>
