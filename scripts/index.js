var users = [
  {id: 1, name:"Rohan Bhangui", age: 18},
  {id: 2, name:"Karan Bhangui", age: 23},
  {id: 3, name:"Greg Methvin", age: 23},
  {id: 4, name:"Harvey Multani", age: 26},
  {id: 5, name:"Safa Tarik", age: 23},
  {id: 6, name:"Jack Attack", age: 19},
  {id: 7, name:"Ikea Summer", age: 45}
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

function categoryUpdate() {
  categories = [];
  $(".column .cell.category").each(function(index) {
    categories[index] = $(this).text();
  });
  console.log(categories);
  console.log("executed");
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

$(document).ready(function () {
  tableCreate();
  tableUpdate();

  $(".table").sortable({
    axis: "x",
    cursor: "move",
    cancel: ".column .cell:not(:first-child)",
    activate: function(event, ui) {
      //event.currentTarget.toElement = $(".row .cell:nth-child(" + ($(event.currentTarget.toElement).index() + 1) + ")");
    }
  });

  $(".table").disableSelection();

  console.log(users);

  $(".cell.category").on("dblclick", function() {
    categoryUpdate();
    users = sortByKey(users, $(this).text());
    tableUpdate();
  });

});