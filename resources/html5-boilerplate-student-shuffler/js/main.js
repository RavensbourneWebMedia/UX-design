// this function takes in an array of student objects
// shuffles them
// and then displays them as <li> (HTML list items)
// inside the <ul id="students">
function listStudents(array)
{
	// every time we refresh the page, we want  a different, randomly ordered list of students
	// we can achieve that by shuffling the order in which students are sorted in the array
	// we do that with the shuffle function (see plugins.js)
	array.shuffle()

	// we store a jQuery reference to the <ul id="students"> from index.html
	// like in CSS, jQuery uses the # as a shortcut for HTML id
	var $ul = $('ul#students')

	// loop through the array of students
	// for each student in the array, execute this function..
	array.forEach(function(object)
	{
		// use the function studentTemplate (see bottom of this file) to get an HTML <li>
		var li = studentTemplate(object)

		// inject the <li> (list item) into the <ul> (unordered list)
		// using jQuery's append function
		// http://api.jquery.com/append
		$ul.append(li)
	})
	// note that the block of code above will execute as many times as there are students in the array
	// for instance, if there are 10 students
	// then we'll end up with 10 <li> elements injected into the <ul>
}

// this function takes in a student data object
// something like
/*
	{
		name: 'Matteo',
		surname: 'Menapace',
		imageId: '8173465'
	}
*/
// and returns that student data wrapped in a <li>
// ready to be injected in our HTML document
function studentTemplate(object)
{
	var li = '<li>'
	li += '<img src="http://learn.rave.ac.uk/moodle/pluginfile.php/' + object.imageId + '/user/icon/ravebootstrap/f3">'
	li += '<h3 contenteditable>' + object.name + '</h3>'
	li += '<a class="button remove">Not here?</a>'
	li += '</li>'
	return li
}