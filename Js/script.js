import {contacts} from './data.js';

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            msgText: '',
            searchText: '',
            currentMsg: -1,
        }
    },
    methods:{
        selectContact(id) {
            this.activeContactId = id;
        },
        sendMessage() {
            if (this.msgText.trim() === "") {
            } else {
                const newMsg = {
                    date: new Date().toLocaleString(),
                    message: this.msgText,
                    status: 'sent'
                }
                this.activeContact.messages.push(newMsg);
                this.msgText = '';
                setTimeout(() => {
                    const newMsg = {
                    date: new Date().toLocaleString(),
                    message: 'ok',
                    status: 'received'
                }
                this.activeContact.messages.push(newMsg);
                },1000);
            }
        },
        openDropdown(index) {
           if (this.currentMsg !== index) {
            this.currentMsg = index;
           } else {
            this.currentMsg = -1;
           }
        },
        deleteMsg(index) {
            this.activeContact.messages.splice(index, 1);
        }
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