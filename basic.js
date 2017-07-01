module.exports = BasicCard;

var BasicCard = function(front, back){
	this.front = front;
	this.back = back
}

var first = new BasicCard("Who was the first president of the United States", "George Washington");


console.log(first.front);
console.log(first.back);