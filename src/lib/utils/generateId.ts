/**
 * https://gist.github.com/fiznool/73ee9c7a11d1ff80b81c
 *
 */

const ids: string[] = [];

const ALPHABET = "23456789abdegjkmnpqrvwxyz";

const ALPHABET_LENGTH = ALPHABET.length;

const ID_LENGTH = 8;

const UNIQUE_RETRIES = 9999;

const generate = () => {
    let rtn = "";
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH));
    }
    return rtn;
};

export const generateId = () => {
    const previous: string[] = ids;
    let retries: number = 0;
    let id: string;

    while (!id && retries < UNIQUE_RETRIES) {
        id = generate();
        if (previous.indexOf(id) !== -1) {
            id = null;
            retries++;
        }
    }

    return id;
};
