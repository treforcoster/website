<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>

<style>

</style>

<script>
    import Auth from '../services/auth'
    import { router } from '../app'

    export default {

        ready() {

            this.storeToken()

        },

        methods: {

            storeToken() {
                const token = this.$route.params.token;

                Auth.setToken(token);

                debugger;

                router.go('/');
            }

        }

    }
</script>
