import Card from "./Card.ts";

export interface CardType {
    rank: string;
    suit: string;
}

class CardDeck {

    public Cards: CardType[] = [];

    constructor() {
        const rankList = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitList = ['diams','hearts','clubs','spades'];
        rankList.map(rank=> {
            suitList.map((suit) => {
                this.Cards.push(new Card(rank, suit));
            });
        });
    }
    getCard() {
        const randomCardIndex = Math.floor(Math.random() * this.Cards.length);
        return this.Cards.splice(randomCardIndex, 1);
    }
    getCards(howMany: number) {
        const randomCards: CardType[] = [];
        for (let i = 0; i < howMany; i++) {
            const randomCard = this.getCard();
            randomCards.push(randomCard[0]);
        }
        return randomCards;
    }
}

export default CardDeck;