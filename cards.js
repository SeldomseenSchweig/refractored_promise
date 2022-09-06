const url = 'https://deckofcardsapi.com/api/deck/'


1.


async function draw1(){
    let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    id = res.data.deck_id
    let card =  await axios.get(`${url}${id}/draw/?count=1`)
    // console.log(card[0].value + "of" + card[0].suit)
    value = card.data.cards[0].value.charAt(0) + card.data.cards[0].value.substring(1).toLowerCase();
    suit = card.data.cards[0].suit.charAt(0) + card.data.cards[0].suit.substring(1).toLowerCase();
    console.log(value + " of " + suit)

}

2.


async function draw2(){
    let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    id = res.data.deck_id
    let card1 =   axios.get(`${url}${id}/draw/?count=1`)
    let card2 =  axios.get(`${url}${id}/draw/?count=1`)

    let newCard1 = await card1
    let newCard2 = await card2


    value = newCard1.data.cards[0].value.charAt(0) + newCard1.data.cards[0].value.substring(1).toLowerCase();
    suit = newCard1.data.cards[0].suit.charAt(0) + newCard1.data.cards[0].suit.substring(1).toLowerCase();
    value2 = newCard2.data.cards[0].value.charAt(0) + newCard2.data.cards[0].value.substring(1).toLowerCase();
    suit2 = newCard2.data.cards[0].suit.charAt(0) + newCard2.data.cards[0].suit.substring(1).toLowerCase();
    console.log(value + " of " + suit + " and the " + value2 + " of " + suit2 )

}









3.
  
        $('#deck').append("<img src='https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png'> </img>")
        let id
        deck()
        
        
         $('#draw').click(draw)






    async function deck(){
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        id = res.data.deck_id
            
        }

    async function draw(){
       let card =  await axios.get(`${url}${id}/draw/?count=1`)
        if (card.data.remaining !== 0){
            $('#deck').html(`<img src=${card.data.cards[0].image}> </img>`)
        }else{
            alert('Deck is Empty!')
            $("button").prop("disabled",true)
  
        }
        }



    





