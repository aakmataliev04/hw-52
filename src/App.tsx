import './App.css';
import Card from "./components/Card/Card.tsx";
import CardDeck, {CardType} from "./lib/CardDeck.ts";
import {useState} from "react";


const App = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const getCards = () => {
        const cardDeck = new CardDeck();
        const gotCards = cardDeck.getCards(5);
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
                <button type={'button'} className={'button-85'} onClick={getCards}>Раздать карты</button>
                <div className="playingCards faceImages">
                    {
                        cards.map((card) => {
                            return (
                                    <Card rank={card.rank} suit={card.suit} />
                            );
                        })
                    }
                </div>
            </>
        );
    }
};


export default App;
