// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function processData(input) {
    //Enter your code here

    // TO BE WRITE TO GITHUB REPO

    const inputf =/\r|\n/.exec(input) ;
    const splitInput = inputf.input.split('\r\n');

    for (let input of splitInput) {
        const action = input.charAt(0);
        const word = input.substring(4, input.length);
        const method = input.charAt(2);


        if (action === 'S') {
            if (method === 'M') {
                let indexOfCaps;
                word
                    .substring(0, word.length - 2)
                    .split('')
                    .map((e, index) => {
                        if (e.toUpperCase() === e) {
                            indexOfCaps = index;
                        }
                    });

                console.log(
                    word.substring(0, indexOfCaps) +
                    ' ' +
                    word.substring(indexOfCaps, indexOfCaps + 1).toLowerCase() +
                    word.substring(indexOfCaps + 1, word.length - 2)
                );
            }

            if (method === 'C' || method === 'V') {
                let splittedWord = '';
                word.split('').map((e) => {
                    if (e.toUpperCase() === e) {
                        splittedWord += ' ' + e.toLowerCase();
                    } else {
                        splittedWord += e;
                    }
                });

                console.log(splittedWord.trimStart());
            }
        }

        if (action === 'C') {
            if (method === 'V' || method === 'M') {
                let wordOut = '';
                word.split('').map((e, index) => {
                    if (word.charAt(index - 1) === ' ') {
                        wordOut += e.toUpperCase();
                    } else {
                        wordOut += e;
                    }
                });

                if (method === 'V') {
                    console.log(`${wordOut.replace(/ /g, '')}`);
                }
                if (method === 'M') {
                    console.log(`${wordOut.replace(/ /g, '')}()`);
                }
            }

            if (method === 'C') {
                let wordOut = '';
                word.split('').map((e, index) => {
                    if (index === 0) {
                        wordOut += e.toUpperCase();
                    }
                    if (index !== 0 && word.charAt(index - 1) === ' ') {
                        wordOut += e.toUpperCase();
                    } else if (index !== 0) {
                        wordOut += e;
                    }
                });

                console.log(wordOut.replace(/ /g, ''));
            }
        }
    }


}
