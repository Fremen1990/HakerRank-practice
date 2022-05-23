/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
	let area;
	// Write your code here

	area=length*width

	console.log(area)
	return area;
}

getArea(3,4.5)

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
	let perimeter;
	// Write your code here

	perimeter=(length*2) + (width*2)

	console.log(perimeter)

	return perimeter;
}

getPerimeter(3,4.5)
