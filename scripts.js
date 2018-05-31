

var list = document.getElementById('list');
var add = document.getElementById('addElem');
var rm = document.getElementById('rmElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var number = document.getElementsByTagName('li').length;
  element.innerHTML = 'item ' + number ;
  list.appendChild(element)
});

rm.addEventListener('click', function() {
	var element = document.getElementsByTagName('li')
	list.removeChild(element[element.length-1])
});
