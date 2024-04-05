const { createApp } = Vue;

createApp({
  data() {
    return {
      currentContact: 0, //creo una proprietà che mi faccia da partenza per l'indice dell'array contacts
      newMessage: "", //creo unaa proprietà che mi faccia da partenza per il messaggio da inviare
      search: "", //creo una proprietà di partenza per salvare il valore inserito nell'input di testo
      isShow: [], //creo un array vuoto in cui inserire i valori booleani isShow
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  mounted() {

    //mappo l'array inserendo i valori su cui la funzione [showMenu(i)] deve basarsi 
    this.isShow = this.contacts.map(() => {
      return {
        isShowItem: true,
      };
    });
  },

  methods: {
    //creo una funzione per indicare che se l'input (richiamato col v-model) NON è vuoto,
    //allora deve inviare (al press dell'enter) il messaggio digitato,
    //inserendogli un orario (date) e applicargli la classe .sent (status)
    addMessage() {
      if (this.newMessage !== "") {
        const sendMessage = {
          date: "xx/xx/xxxx 17:00:55",
          message: this.newMessage,
          status: "sent",
        };

        const sent = this.contacts[this.currentContact].messages;

        sent.push(sendMessage);

        this.newMessage = "";

        //imposto la funzione per rispondere dopo 2 secondi dall'invio del messaggio
        setTimeout(() => {
          const replyMessage = {
            message: "Ehi, merdina!",
            date: "xx/xx/xxxx 17:02:55",
            status: "received",
          };

          sent.push(replyMessage);
          this.newMessage = "";
        }, 2000);
      }
    },


    //creo una funzione in cui dichiaro che se l'array del menù a tendina (isShow)
    //del messaggio corrispondente [i] è uguale a false (quindi non aperto)
    //allora deve restare chiuso, altrimenti deve aprirsi
    showMenu(i) {
      if (this.isShow[i] === false) {
        this.isShow[i] = true;
      } else {
        this.isShow[i] = false;
      }
    },

    //creo una funzione in cui dichiaro che il messeggio corrispondente deve essere eliminato
    //indicando che il menù a tendina non deve aprirsi per gli altri messaggi
    //nel momento in cui il messaggio corrente è stato eliminato
    deleteMessage(i) {
      this.contacts[this.currentContact].messages.splice(i, 1);

      this.showMenu(i);
    },
  },
}).mount("#app");
