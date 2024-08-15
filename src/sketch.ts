const validatedCircles = [];
// const testCircle1 = {
// 	x: 100,
// 	y: 100,
// 	diameter: 100
// }
// const testCircle2 = {
// 	x: 150,
// 	y: 100,
// 	diameter: 100
// }

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	// console.log("testing is an overlap", isAnOverlap(testCircle1, testCircle2))
	generateValidCircles()
	noLoop();
}

function draw() {
	drawValidatedCircles();
}

function drawValidatedCircles() {
	for (let vCircle of validatedCircles) {
		circle(vCircle.x, vCircle.y, vCircle.diameter);
	}
}

function generateValidCircles() {
	for (let i = 0; i < 20; i++) {
		const candidateCircle = {
			x: random(0, width),
			y: random(0, height),
			diameter: random(50, 200)
		}
		
		if (noOverlap(candidateCircle)){
			validatedCircles.push(candidateCircle)
		}
	}
}

function noOverlap(candidateCircle){
	for (let vCircle of validatedCircles){
		if (isAnOverlap(vCircle, candidateCircle)){
			// console.log("overlap")
			return false;
		}
	}
	// console.log("condition not met")
	return true;
}

function getCircleDistances(circle1, circle2){
	return dist(circle1.x, circle1.y, circle2.x, circle2.y)
}

function isAnOverlap(circle1, circle2){
	return getCircleDistances(circle1, circle2) < (circle1.diameter / 2) + (circle2.diameter / 2)
}

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     noLoop();
// }

// function draw() {
//     background("white");
//     drawRings(mouseX, mouseY);
//     drawRings(100, 300);
// }

// function drawRings(x: number, y: number): void {
//     noFill();
//     for (let i = 0; i < 10; i++) {
//         circle(x, y, random(10, 300));
//     }
// }

// function mousePressed() {
//     redraw();
// }
