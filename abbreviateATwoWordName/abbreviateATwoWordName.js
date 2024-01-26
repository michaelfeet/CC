// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = (name) => {
    name = name.split(' ');
    let first = (name[0][0]).toUpperCase();
    let last = (name[1][0]).toUpperCase();
    return `${first}.${last}`;
}

console.log(abbrevName('michael feet'))