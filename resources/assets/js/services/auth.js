export default {

    storageKey: 'token',

    getToken() {

        return localStorage.getItem(this.storageKey)

    },

    setToken(token) {

        return localStorage.setItem(this.storageKey, token)

    },

    isAuthenticated() {

        return localStorage.getItem(this.storageKey) !== null;

    }

}