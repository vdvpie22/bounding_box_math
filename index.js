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

exports.convertForCompare = function (a) {
	a.x = a.left
	a.y = a.top
	a.x1 = a.x + a.width
	a.y1 = a.y + a.height
	return a
}

exports.intersectArea = function (a, b) {
	a = exports.convertForCompare(a);
	b = exports.convertForCompare(b);
	let area = {}
	area.x = (a.x > b.x) ? a.x : b.x
	area.y = (a.y < b.y) ? a.y : b.y
	area.x1 = (a.x1 < b.x1) ? a.x1 : b.x1
	area.y1 = (a.y1 > b.y1) ? a.y1 : b.y1
	if (area.x1 - area.x < 0 || area.y1 - area.y < 0) {
		return 0
	}
	return ((area.x1 - area.x) * (area.y1 - area.y))
}

exports.intersects = function (a, b) {
	a = exports.convertForCompare(a);
	b = exports.convertForCompare(b);
	return (
		(
			(
				(a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
			) && (
				(a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
			)
		) || (
			(
				(b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
			) && (
				(b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
			)
		)
	) || (
		(
			(
				(a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
			) && (
				(b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
			)
		) || (
			(
				(b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
			) && (
				(a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
			)
		)
	);
}
