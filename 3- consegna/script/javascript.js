var app = new Vue({
  el: '#app',
  data: {
    counter : 0, 
    miMensaje : "",
    respuesta:"ma si lascia stare",
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          },
        ],
      },
      
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          },
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          },
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          },
        ],
      },
    ]
  },
  
  methods: {
   clickChat(index) {
    this.counter = index
    console.log(index)
   },
   
   checkClass(index) {
    if(index === this.counter){
      return "chat-active"
    }
   },

  
   pushText(){
      this.contacts[this.counter].messages.push({
        date : "11-05-2021",
        text : this.miMensaje,
        status :"sent"
      })
      this.miMensaje=""

      setTimeout(()=>{
        this.contacts[this.counter].messages.push({
          date :"11-05-2021",
          text : this.respuesta,
          status : "received"
        })
      },1000);
      
      
      

    },

   
     
   
   
   
   
    
    
    

  
  }
})