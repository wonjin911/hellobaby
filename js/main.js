var count = 30;

var path = new Path.Circle({
	center: [0, 0],
	radius: 5,
	fillColor: 'white',
	strokeColor: 'black'
});
var symbol = new Symbol(path);
var group = new Group([]);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
	group.addChild(placedSymbol)
}

var baby = new Path.Circle({
	center: view.center,
	radius: 50,
	fillColor: 'black',
	strokeColor: 'white'
});//baby.fullySelected = true;

//var bottom2 = view.center + new Point(20, 120);
//baby.insert(0, bottom2);
baby.smooth();

// Define Dialog and text
var rectangle = new Rectangle(baby.position + new Point(0, -25), baby.position + new Point(150, -100));
var cornerSize = new Size(20, 20);
var dialog = new Path.RoundRectangle(rectangle, cornerSize);
dialog.fillColor = 'white';
dialog.strokeColor = 'black';

var text_list = ['엄마 안녕!', '졸려요', '사랑해요', '엄마 힘내세요!', '고마워요 엄마'];
var text = new PointText(dialog.bounds.leftCenter + new Point(30, 0));
var rnum = Math.floor(Math.random() * (text_list.length));
text.content = text_list[rnum];
text.fillColor = 'black';

baby.onMouseDown = function(event) {
	this.fillColor = 'white';
	this.strokeColor = 'black';
	rnum = Math.floor(Math.random() * (text_list.length));
	text.content = text_list[rnum];
}
baby.onMouseUp = function(event) {
	this.fillColor = 'black';
	this.strokeColor = 'white';
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = group.children[i] //project.activeLayer.children[i];

		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.x += item.bounds.width / 50;
		item.position.y += item.bounds.width / 100;

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
		if (item.bounds.top > view.size.height) {
			item.position.y = -item.bounds.height;
		}
	}
}

function onMouseDown(event) {
	return
}

function onMouseUp(event) {
	return
}