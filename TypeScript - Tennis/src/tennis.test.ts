import {describe, expect, test} from '@jest/globals';
import {score} from './tennis';

describe('Tennis scoring Kata', () => {
 
  test.each([
    [4, 0, 'player 1 wins'],
    [0, 4, 'player 2 wins'],
    [4, 1, 'player 1 wins'],
    [2, 4, 'player 2 wins'],
    [0, 0, 'love all'],

    [1, 0, '15 - love'],
    [2, 0, '30 - love'],
    [3, 0, '40 - love'],
    
    [2, 1, '30 - 15'],
    [3, 1, '40 - 15'],

    [4, 4, 'deuce'],
    [5, 5, 'deuce'],

    [4, 5, 'advantage player 2'],
    [5, 4, 'advantage player 1'],    
    [10, 11, 'advantage player 2'],
    [11, 10, 'advantage player 1'],
])(
    'score(%i, %i) as a result of %s',
    (a, b, expected) => {
      expect(score(a,b)).toBe(expected);
    },
  ); 
});