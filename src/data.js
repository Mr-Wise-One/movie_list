import w_type from './img/w_type_font.png';
import w_type_mobile from './img/w_type_font_mobile.png';
import w from './img/wes_anderson.png';

import c_type from './img/c_type_font.png';
import c_type_mobile from './img/c_type_font_mobile.png';
import c from './img/coen_brothers.png';

import m_type from './img/m_type_font.png';
import m_type_mobile from './img/m_type_font_mobile.png';
import m from './img/mcdonagh_brothers.png';

import n_type from './img/n_type_font.png';
import n_type_mobile from './img/n_type_font_mobile.png';
import n from './img/nicolas_winding_refn.png';

import j_type from './img/j_type_font.png';
import j_type_mobile from './img/j_type_font_mobile.png';
import j from './img/jim_jarmusch.png';

import t_type from './img/t_type_font.png';
import t_type_mobile from './img/t_type_font_mobile.png';
import t from './img/terry_gilliam.png';

import k_type from './img/k_type_font.png';
import k_type_mobile from './img/k_type_font_mobile.png';
import k from './img/korean_cinema.png';

const data = [
  {
    id: 'd1W',
    name: 'Wes Anderson',
    img: { d: w, font: w_type },
    mobileImg: { d: w, font: w_type_mobile },
    list: [
      'The Darjeeling Limited',
      'The Life Aquatic with Steve Zissou',
      'Moonrise Kingdom',
      'The Grand Budapest Hotel',
      'The Royal Tenenbaums',
      'Fantastic Mr. Fox',
      'Isle of Dogs',
      'The French Dispatch',
      'Rushmore',
    ],
  },
  {
    id: 'd2C',
    name: 'Coen Brothers',
    img: { d: c, font: c_type },
    mobileImg: { d: c, font: c_type_mobile },
    list: [
      'A Serious Man',
      'Barton Fink',
      "The Man Who Wasn't There",
      'Fargo',
      'Burn After Reading',
      'The Big Lebowski',
      'O Brother, Where Art Thou?',
      'No Country for Old Men',
      'Blood Simple',
      'Raising Arizona',
      "Miller's Crossing",
    ],
  },
  {
    id: 'n3M',
    name: 'McDonagh Brothers',
    img: { d: m, font: m_type },
    mobileImg: { d: m, font: m_type_mobile },
    list: [
      'In Bruges',
      'The Banshees of Inisherin',
      'Seven Psychopaths',
      'The Guard',
      'Calvary',
      'Three Billboards Outside Ebbing, Missouri',
    ],
  },
  {
    id: 'n4N',
    name: 'Nicolas Winding Refn',
    img: { d: n, font: n_type },
    mobileImg: { d: n, font: n_type_mobile },
    list: [
      'Only God Forgives ',
      'The Neon Demon',
      'Drive',
      'Bronson',
      'Pusher',
      'Pusher II',
      'Pusher III',
    ],
  },
  {
    id: 'n5J',
    name: 'Jim Jarmusch',
    img: { d: j, font: j_type },
    mobileImg: { d: j, font: j_type_mobile },
    list: [
      'Broken Flowers',
      'Dead Man',
      'Only Lovers Left Alive',
      "The Dead Don't Die",
      'Ghost Dog: The Way of the Samurai',
      'Mystery Train',
      'Night on Earth',
    ],
  },
  {
    id: 'n6T',
    name: 'Terry Gilliam',
    img: { d: t, font: t_type },
    mobileImg: { d: t, font: t_type_mobile },
    list: [
      'Brazil',
      'Twelve Monkeys',
      'The Zero Theorem',
      'The Man Who Killed Don Quixote',
      'Tideland',
      'The Imaginarium of Doctor Parnassus',
    ],
  },
  {
    id: 'n7K',
    name: 'Korean cinematography',
    img: { d: k, font: k_type },
    mobileImg: { d: k, font: k_type_mobile },
    list: [
      'Memories of Murder',
      'Spring, Summer, Fall, Winter... and Spring',
      'Sympathy for Mr. Vengeance ',
      'Oldboy',
      'Barking Dogs Never Bite',
      'Parasite',
      'Burning',
      'Lady Vengeance',
      'Okja',
    ],
  },
];

export default data;
