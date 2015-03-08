// from http://stackoverflow.com/a/24137301/4647178
Array.prototype.getRandomElement = function () 
{
	return this[Math.floor((Math.random()*this.length))]
}

// from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
Array.prototype.shuffle = function () 
{
	var currentIndex = this.length, 
		temporaryValue, 
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) 
	{

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = this[currentIndex]
		this[currentIndex] = this[randomIndex]
		this[randomIndex] = temporaryValue
	}

	return this
}

function studentTemplate(student)
{
	var html = '<li>'
	html += '<img src="http://learn.rave.ac.uk/moodle/pluginfile.php/' + student.imageId + '/user/icon/ravebootstrap/f3">'
	html += '<h3 contenteditable>' + student.name + '</h3>'
	html += '<a class="button remove">Not here?</a>'
	html += '</li>'
	return html
}

function listStudents(students)
{
	var randomStudents = $.extend(true, [], students).shuffle(), // clone the students array and then shuffle it
		$ul = $('ul#students')

	randomStudents.forEach(function(student)
	{
		var li = studentTemplate(student)
		$ul.append(li)
	})
}