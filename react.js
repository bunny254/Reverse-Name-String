function makePerson(first, last) {
    return {
        first: first,
        last: last
    };
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');

console.log(personFullNameReversed(s));
