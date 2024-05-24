import React from "react";

interface Props {
    rank: string,
    suit: string
}
const Card: React.FC<Props> = ({rank, suit}) => {
    const checkForSymbol = (suit:string) => {
        if (suit === 'diams') {
            return '♦';
        } else if (suit === 'hearts') {
            return '♥';
        } else if (suit === 'clubs') {
            return '♣';
        } else if (suit === 'spades') {
            return '♠';
        }
    };
    return (
        <>
            <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank.toUpperCase()}</span>
                <span className="suit">{checkForSymbol(suit)}</span>
            </span>
        </>
    );
};

export default Card;