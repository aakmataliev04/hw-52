import './App.css';
import Card from "./components/Card/Card.tsx";
import CardDeck, {CardType} from "./lib/CardDeck.ts";
import {useState} from "react";
import PokerHand from "./lib/PokerHand.ts";


const App = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const [combination, setCombination] = useState<string>('');
    const getCards = () => {
        const cardDeck = new CardDeck();
        const gotCards = cardDeck.getCards(5);
        setCombination(new PokerHand(gotCards).getOutcome());
        setCards(gotCards);

    };

    if (!cards) {
        return (
            <>
                <button type={'button'} className={'button-85'} onClick={getCards}>Раздать карты</button>
            </>
        );
    } else {
        return (
            <>
                <h3>
                     {combination}
                </h3>
                <button type={'button'} className={'button-85'} onClick={getCards}>Раздать карты</button>
                <div className="playingCards faceImages">
                    {
                        cards.map((card, index) => {
                            return (
                                    <Card key={index} rank={card.rank} suit={card.suit} />
                            );
                        })
                    }
                </div>
            </>
        );
    }
};


export default App;
