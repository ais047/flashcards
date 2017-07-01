module.exports = ClozeCard;

var ClozeCard = function(text, cloze){
	this.cloze = cloze;
	this.partial = text;
	this.fullText = text.replace(/who/i, cloze).replace(/where/i,cloze).replace(/when/i, cloze).replace(/what/i,cloze);
}

var first = new ClozeCard("Who was the first president of the United States", "George Washington");
console.log(first.fullText)
console.log(first.partial)
console.log(first.cloze)

