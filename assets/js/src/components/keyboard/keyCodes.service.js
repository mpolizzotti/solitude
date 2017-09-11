/**
 * Service houses a common set of utilities for
 * managing keyboard events and their keycodes.
 */

export const BACKSPACE = 8;
export const TAB = 9;

export const NUM_ZERO = 48;
export const NUM_ONE = 49;
export const NUM_TWO = 50;
export const NUM_THREE = 51;
export const NUM_FOUR = 52;
export const NUM_FIVE = 53;
export const NUM_SIX = 54;
export const NUM_SEVEN = 55;
export const NUM_EIGHT = 56;
export const NUM_NINE = 57;

/**
 * Determines if a keycode belongs to a number key.
 * @param keyCode {number} the code of the key pressed, generally pulled from event.which
 * @returns {boolean} whether or not it's a number key
 */
export function isNumberKey(keyCode) {
    'use strict';
    return keyCode >= NUM_ZERO && keyCode <= NUM_NINE;
}
