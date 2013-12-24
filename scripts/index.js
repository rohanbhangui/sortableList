var users = [
  {id: 1, name:"Rohan Bhangui", age: 18},
  {id: 2, name:"Karan Bhangui", age: 23},
  {id: 3, name:"Greg Methvin", age: 23},
  {id: 4, name:"Harvey Multani", age: 26},
  {id: 5, name:"Safa Tarik", age: 23},
  {id: 6, name:"Jack Attack", age: 19},
  {id: 7, name:"Ikea Summer", age: 45}
];


//generate the categories based on the first object in the array
var categories = [];

for(category in users[0]) {
  categories.push(category);
}

//create the table with the correct number of rows and columns (also create the category cells and label them)
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

//to update the table when changes are made to the users array
function tableUpdate() {
  for(var i = 0; i < users.length; i++) {
    for(var j = 0; j < categories.length; j++) {
      $(".column:nth-child(" + (j+1) + ") .cell:nth-child(" + (i+2) + ")").html(users[i][categories[j]]);
    }
  }
}

//updates made to the categories which is used for tableUpdate
function categoryUpdate() {
  categories = [];
  $(".column .cell.category").each(function(index) {
    categories[index] = $(this).text();
  });
}

//a small sorting function for the osrting functionality onDblclick
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = b[key]; var y = a[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

$(document).ready(function () {
  tableCreate();
  tableUpdate();


  //jquery sortables stuff
  $(".table").sortable({
    axis: "x",
    cursor: "move",
    cancel: ".column .cell:not(:first-child)"
  });

  $(".table").disableSelection();

  var oldSort = "id";

  $(".cell.category").on("click", function() {
    categoryUpdate();

    //determine if the same column that is being sorted as the previous column
    if(oldSort != $(this).text()) {
      users = sortByKey(users, $(this).text());
    }

    users = users.reverse();

    tableUpdate();
    oldSort = $(this).text();
  });

});