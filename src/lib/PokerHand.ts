import {CardType} from "./CardDeck.ts";

class PokerHand {
    private allRanks = {
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        'J': 0,
        'Q': 0,
        'K': 0,
        'A': 0
    };
    private allSuits = {
        'diams': 0,
        'hearts': 0,
        'clubs': 0,
        'spades': 0,
    };
    private readonly threeOfAKind: boolean;
    private readonly onePair: number;
    private readonly flush: boolean;
    public combination: string;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    constructor(private cards: CardType[]) {
        this.flush = false;
        this.threeOfAKind = false;
        this.onePair = 0;
        this.combination = '';

        cards.map(card => {
            switch (card.suit) {
                case 'diams':
                    this.allSuits.diams += 1;
                    break;
                case 'hearts':
                    this.allSuits.hearts += 1;
                    break;
                case 'clubs':
                    this.allSuits.clubs += 1;
                    break;
                case 'spades':
                    this.allSuits.spades += 1;
                    break;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.allRanks[`${card.rank}`] += 1;
        });
        for (const suit in this.allSuits) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (this.allSuits[`${suit}`] === 5) {
                this.flush = true;
            }
        }
        for (const rank in this.allRanks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (this.allRanks[`${rank}`] === 3) {
                this.threeOfAKind = true;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (this.allRanks[`${rank}`] === 2) {
                this.onePair += 1;
            }
        }
        if (this.flush) {
            this.combination = 'Флэш - пять карт одной масти';
        } else if (this.threeOfAKind) {
            this.combination = 'Тройка - три карты одного достоинства';
        } else if (this.onePair === 2) {
            this.combination = 'Две пары - две пары карт';
        } else if (this.onePair === 1) {
            this.combination = 'Одна пара - две карты одного достоинства';
        } else {
            this.combination = 'Старшая карта';
        }
    }
    getOutcome() {
        return this.combination;
    }
}
export default PokerHand;