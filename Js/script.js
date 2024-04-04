import {contacts} from './data.js';

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            msgText: '',
            searchText: '',
        }
    },
    methods:{
        selectContact(id) {
            this.activeContactId = id;
        },
        sendMessage() {
            const newMsg = {
                date: new Date().toLocaleString(),
                message: this.msgText,
                status: 'sent'
            }
            this.activeContact.messages.push(newMsg);
            this.msgText = '';
            setTimeout(() => {const newMsg = {
                date: new Date().toLocaleString(),
                message: 'ok',
                status: 'received'
            }
            this.activeContact.messages.push(newMsg);
            },1000);
        },
    },
    computed:{
        activeContact() {
            return this.contacts.find((contact) => contact.id === this.activeContactId)
        },
        filteredContacts() {
            return this.contacts.filter((el) => el.name.toLowerCase().includes(this.searchText.toLowerCase()));
        }
    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app');