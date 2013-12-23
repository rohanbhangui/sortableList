var users = [
	{id: 1, name:"rohan", last: "bhangui", age: 18},
	{id: 2, name:"karan", last: "bhangui", age: 23},
	{id: 3, name:"greg", last: "methvin", age: 23},
	{id: 4, name:"harvey", last: "multani", age: 26},
	{id: 5, name:"safa", last: "tarik", age: 23},
	{id: 6, name:"jack", last: "attack", age: 19},
	{id: 7, name:"ikea", last: "summer", age: 45}
];

var categories = [];

for(category in users[0]) {
	categories.push(category);
}

function tableCreate() {

	$(".table").html("");

	for(var i = 0; i < categories.length; i++) {
		$(".table").append("<div class=\"column\"></div>");
	}

	for(var i = 0; i <= users.length; i++) {
		if(i == 0) {
			$(".column").append("<div class=\"cell category\"></div>");
		}
		else {
			$(".column").append("<div class=\"cell\"></div>");
		}
	}

	$(".column").each(function(index) {
		$(this).children(".cell:nth-child(1)").html(categories[index]);
	});

}

function tableUpdate() {
	for(var i = 0; i < users.length; i++) {
		for(var j = 0; j < categories.length; j++) {
			$(".column:nth-child(" + (j+1) + ") .cell:nth-child(" + (i+2) + ")").html(users[i][categories[j]]);
		}
	}
}

$(document).ready(function () {
	tableCreate();
	tableUpdate();

	$(".table").sortable({
		axis: "x",
		cursor: "move",
		cancel: ".row:not(:first-child) .cell",
		activate: function(event, ui) {
			console.log(event);
			console.log($(this));
			//event.currentTarget.toElement = $(".row .cell:nth-child(" + ($(event.currentTarget.toElement).index() + 1) + ")");
		}
	});

	$(".table").disableSelection();
});