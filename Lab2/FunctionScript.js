
function toPascalCase(fullName) {

return fullName.split(' ').map(syn => syn.charAt(0).toUpperCase() + syn.slice(1).toLowerCase()).join(' ');

}


function LongestWord(sentence) {

    let words = sentence.split(' ');
    let longest = '';

    for (let word of words) {

        if (word.length > longest.length) {

            longest = word;
        }
    }

    return longest;
}


function alphapeticSorting(syntax) {

    return syntax.split('').sort().join('');
}


function commonElements(arr1, arr2) {
    return arr1.filter(elem => arr2.includes(elem));
}


function duplicates(arr) {
    return [...new Set(arr)];
}