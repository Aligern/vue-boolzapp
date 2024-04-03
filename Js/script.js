import {contacts} from './data.js';

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1
        }
    },
    methods:{
        selectContact(id) {
            this.activeContactId = id;
        }
    },
    computed:{
        activeContact() {
            return this.contacts.find((contact) => contact.id === this.activeContactId)
        }

    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app');