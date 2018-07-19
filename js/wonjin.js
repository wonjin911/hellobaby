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
});
//baby.fullySelected = true;

var bottom1 = view.center + new Point(50, 100);
var bottom2 = view.center + new Point(20, 120);
//baby.insert(0, bottom1);
baby.insert(0, bottom2);
baby.smooth();

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = group.children[i] //project.activeLayer.children[i];
		
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.x += item.bounds.width / 50;

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
}

function onMouseDown(event) {
	baby.fillColor = 'white';
	baby.strokeColor = 'black';
}

function onMouseUp(event) {
	baby.fillColor = 'black';
	baby.strokeColor = 'white';
}