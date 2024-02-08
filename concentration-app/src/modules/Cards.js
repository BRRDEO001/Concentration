import {useState} from 'react';
import Card from './Card';
import { useEffect } from 'react';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function Cards(){
    const [card, setCardState] = useState ([
       { id: 1, name: '2_of_clubs', status: '', img: '/cardImages/2_of_clubs.png' },
       { id: 1, name: '2_of_spades', status: '', img: '/cardImages/2_of_spades.png' },
       { id: 2, name: '3_of_clubs', status: '', img: '/cardImages/3_of_clubs.png' },
       { id: 2, name: '3_of_spades', status: '', img: '/cardImages/3_of_spades.png' },
       { id: 3, name: '4_of_clubs', status: '', img: '/cardImages/4_of_clubs.png' },
       { id: 3, name: '4_of_spades', status: '', img: '/cardImages/4_of_spades.png' },
       { id: 4, name: '5_of_clubs', status: '', img: '/cardImages/5_of_clubs.png' },
       { id: 4, name: '5_of_spades', status: '', img: '/cardImages/5_of_spades.png' },
       { id: 5, name: '6_of_clubs', status: '', img: '/cardImages/6_of_clubs.png' },
       { id: 5, name: '6_of_spades', status: '', img: '/cardImages/6_of_spades.png' },
       { id: 6, name: '7_of_clubs', status: '', img: '/cardImages/7_of_clubs.png' },
       { id: 6, name: '7_of_spades', status: '', img: '/cardImages/7_of_spades.png' },
       { id: 7, name: '8_of_clubs', status: '', img: '/cardImages/8_of_clubs.png' },
       { id: 7, name: '8_of_spades', status: '', img: '/cardImages/8_of_spades.png' },
       { id: 8, name: '9_of_clubs', status: '', img: '/cardImages/9_of_clubs.png' },
       { id: 8, name: '9_of_spades', status: '', img: '/cardImages/9_of_spades.png' },
       { id: 9, name: '10_of_clubs', status: '', img: '/cardImages/10_of_clubs.png' },
       { id: 9, name: '10_of_spades', status: '', img: '/cardImages/10_of_spades.png' },
       { id: 10, name: 'jack_of_clubs', status: '', img: '/cardImages/jack_of_clubs.png' },
       { id: 10, name: 'jack_of_spades', status: '', img: '/cardImages/jack_of_spades.png' },
       { id: 11, name: 'queen_of_clubs', status: '', img: '/cardImages/queen_of_clubs.png' },
       { id: 11, name: 'queen_of_spades', status: '', img: '/cardImages/queen_of_spades.png' },
       { id: 12, name: 'king_of_clubs', status: '', img: '/cardImages/king_of_clubs.png' },
       { id: 12, name: 'king_of_spades', status: '', img: '/cardImages/king_of_spades.png' },
       { id: 13, name: 'ace_of_clubs', status: '', img: '/cardImages/ace_of_clubs.png' },
       { id: 13, name: 'ace_of_spades', status: '', img: '/cardImages/ace_of_spades.png' },
       { id: 14, name: '2_of_diamonds', status: '', img: '/cardImages/2_of_diamonds.png' },
       { id: 14, name: '2_of_hearts', status: '', img: '/cardImages/2_of_hearts.png' },
       { id: 15, name: '3_of_diamonds', status: '', img: '/cardImages/3_of_diamonds.png' },
       { id: 15, name: '3_of_hearts', status: '', img: '/cardImages/3_of_hearts.png' },
       { id: 16, name: '4_of_diamonds', status: '', img: '/cardImages/4_of_diamonds.png' },
       { id: 16, name: '4_of_hearts', status: '', img: '/cardImages/4_of_hearts.png' },
       { id: 17, name: '5_of_diamonds', status: '', img: '/cardImages/5_of_diamonds.png' },
       { id: 17, name: '5_of_hearts', status: '', img: '/cardImages/5_of_hearts.png' },
       { id: 18, name: '6_of_diamonds', status: '', img: '/cardImages/6_of_diamonds.png' },
       { id: 18, name: '6_of_hearts', status: '', img: '/cardImages/6_of_hearts.png' },
       { id: 19, name: '7_of_diamonds', status: '', img: '/cardImages/7_of_diamonds.png' },
       { id: 19, name: '7_of_hearts', status: '', img: '/cardImages/7_of_hearts.png' },
       { id: 20, name: '8_of_diamonds', status: '', img: '/cardImages/8_of_diamonds.png' },
       { id: 20, name: '8_of_hearts', status: '', img: '/cardImages/8_of_hearts.png' },
       { id: 21, name: '9_of_diamonds', status: '', img: '/cardImages/9_of_diamonds.png' },
       { id: 21, name: '9_of_hearts', status: '', img: '/cardImages/9_of_hearts.png' },
       { id: 22, name: '10_of_diamonds', status: '', img: '/cardImages/10_of_diamonds.png' },
       { id: 22, name: '10_of_hearts', status: '', img: '/cardImages/10_of_hearts.png' },
       { id: 23, name: 'jack_of_diamonds', status: '', img: '/cardImages/jack_of_diamonds.png' },
       { id: 23, name: 'jack_of_hearts', status: '', img: '/cardImages/jack_of_hearts.png' },
       { id: 24, name: 'queen_of_diamonds', status: '', img: '/cardImages/queen_of_diamonds.png' },
       { id: 24, name: 'queen_of_hearts', status: '', img: '/cardImages/queen_of_hearts.png' },
       { id: 25, name: 'king_of_diamonds', status: '', img: '/cardImages/king_of_diamonds.png' },
       { id: 25, name: 'king_of_hearts', status: '', img: '/cardImages/king_of_hearts.png' },
       { id: 26, name: 'ace_of_diamonds', status: '', img: '/cardImages/ace_of_diamonds.png' },
       { id: 26, name: 'ace_of_hearts', status: '', img: '/cardImages/ace_of_hearts.png' },
       { id: 27, name: 'black_joker', status: '', img: '/cardImages/black_joker.png' },
       { id: 28, name: 'red_joker', status: '', img: '/cardImages/red_joker.png' }
    ]);
     useEffect(() => {
            setCardState(shuffle([...card]));
        }, []);

    return(
        <div className = "container">
            {
                card.map((card, index) => {
                    return <Card card = {card}/>

            })}
        </div>
    );


}