
new Vue({
	el:'#root',
	data:{
		contacts: [ 
			{
				name: 'Michele',
				avatar: 'img 1/avatar_1.jpg',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di stendere i panni',
						status: 'sent',
						menuVisibility:false,
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received',
						menuVisibility:false,
					} 
				],
			},
			{
				name: 'Samuele',
				avatar: 'img 1/avatar_3.jpg',
				visible: true,
				messages: 
				[
					{
						date: '28/03/2020 10:10:40',
						message: 'La Marianna va in campagna',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received',
						menuVisibility:false,
			
					} 
				],
			}, 
			{
				name: 'Alessandro B.',
				avatar: 'img 1/avatar_4.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received',
						menuVisibility:false,		
					} 
				],
			}, 
			{
				name: 'Alessandro L.',
				avatar: 'img 1/avatar_5.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ricordati di chiamare la nonna',
						status: 'sent',
						menuVisibility:false,	
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Va bene, stasera la sento',
						status: 'received',
						menuVisibility:false,
			
					}
				],
			}, 
			{
				name: 'Claudia',
				avatar: 'img 1/avatar_6.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao Claudia, hai novità?',
						status: 'sent',
						menuVisibility:false,	
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Non ancora',
						status: 'received',
						menuVisibility:false,		
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'Nessuna nuova, buona nuova',
						status: 'sent',
						menuVisibility:false,			
					}, 
				],
			}, 
			{
				name: 'Federica',
				avatar: 'img 1/avatar_7.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Fai gli auguri a Martina che è il suo compleanno!',
						status: 'sent',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'Grazie per avermelo ricordato, le scrivo subito!',
						status: 'received',
						menuVisibility:false,			
					}
				],
			}, 
			{
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            {
				name: 'Davide',
				avatar: 'img 1/avatar_8.jpg',
				visible: true,
				messages: 
				[
					{
						date: '10/01/2020 15:30:55',
						message: 'Ciao, andiamo a mangiare la pizza stasera?',
						status: 'received',
						menuVisibility:false,
					}, 
					{
						date: '10/01/2020 15:50:00',
						message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
						status: 'sent',
						menuVisibility:false,
			
					}, 
					{
						date: '10/01/2020 15:51:00',
						message: 'OK!!',
						status: 'received',
						menuVisibility:false,
					}
				],
			},
            
		],
		selectIndex:0,
		newMex:'',
		newName:'',
		nIndex:0,
		menu:{
			text:'Delete message',

		},
		del:'delete message',
		
		
	},
	methods:{
		selectedChat(index){
			this.selectIndex=index;
		},
		addMex(){
			const receiverIndex=this.selectIndex;
			if(this.newMex){
				this.contacts[receiverIndex].messages.push({
					date:'9.35',
					message:this.newMex,
					status:'sent',
					menuVisibility:false,
				});
				this.newMex='';	
				
				risposta={
						date:'9.35',
						message:'OK',
						status:'received',
						menuVisibility:false,
					}
				setTimeout(() => this.contacts[receiverIndex].messages.push(risposta), 1000);			
			}
			
		},
		comparaNomi(){
			this.contacts.forEach((ele,i)=>{
					if (this.newName !== this.contacts[i].name.toLowerCase().slice(0, this.newName.length)) {
						this.contacts[i].visible = false;
					} else {
						this.contacts[i].visible = true;
					}
			});
		},
		deleteMessage() {
            this.contacts[this.selectedIndex].messages.splice(index, 1);
        },
	},	
		
		
	

	});
	
	





