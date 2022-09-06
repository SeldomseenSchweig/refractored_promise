



class Deck{
    constructor(){
        async function deck(){
            let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')   
        }
        let res = deck()
        this.id = res.data.deckid
         
        this.url = 'https://deckofcardsapi.com/api/deck/'
        }

    async shuffle(){
        await axios(`${url}/${this.id}/shuffle`)
        $('#deck').append("<img src='https://pixabay.com/get/g5f22bef9ad56027f6bfd55f1c71854b335ca763261e67023414c5a6b093b8b326c2d71c61dabdcd66b3cfb89319aec04_1280.png'> </img>")

    }
    async draw(){
       let card =  await axios.get(`${url}${this.id}/draw/?count=1`)
        if (card.data.remaining !== 0){
            $('#deck').html(`<img src=${card.data.cards[0].image}> </img>`)
        }else{
            alert('Deck is Empty!')
            $("button").prop("disabled",true)
        }
        }

    async newDeck(){
        this.deck()
        $('#deck').append("<img src='https://pixabay.com/get/g5f22bef9ad56027f6bfd55f1c71854b335ca763261e67023414c5a6b093b8b326c2d71c61dabdcd66b3cfb89319aec04_1280.png'> </img>")
    }

    }





