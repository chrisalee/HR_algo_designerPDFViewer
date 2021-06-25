/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

const designerPdfViewer = (h, word) => {
    // console.log(`The character code ${word.charCodeAt(0)} is equal to ${word.charAt(0)}`);
    
    let maxHeight = 0;
    let wordSplit = word.toUpperCase().split('');  
    
    for(let letter of wordSplit) {
        let letterHeight = h[letter.charCodeAt(0) - 65];  
        // console.log(letterHeight);
        if(letterHeight > maxHeight) {
            maxHeight = letterHeight;
        }
    }
    
    return word.length * maxHeight;
}

