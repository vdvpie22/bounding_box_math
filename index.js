exports.compareAreas = function (a, b) {
	if (!a.boundingBox || !b.boundingBox || !a.boundingBox.height || !a.boundingBox.width
		|| !b.boundingBox.height || !b.boundingBox.width)  {
		return 0
	}
	if (a.boundingBox.height * a.boundingBox.width > b.boundingBox.height * b.boundingBox.width) {
		return -1
	}
	if (a.boundingBox.height * a.boundingBox.width < b.boundingBox.height * b.boundingBox.width) {
		return 1
	}
	return 0
}

exports.getArea =function(a) {
	return a.height * a.width
}
