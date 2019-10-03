function calcWordFrequencies() {
   var string = window.prompt("enter a group of words.");
    var words = string.split(' ');
    var wordCount = {};
    for (var item of words) {
        if (item in wordCount) {
            wordCount[item++];
        }
            else {
                wordCount[item] = 1;
            }
        }
        wordCount[String(0)];
        wordCount["this"]++;
    console.log(wordCount);
}