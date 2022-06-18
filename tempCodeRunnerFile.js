function weightedRandom(base, numDivs) {
	var weights = [];
	var lookupTable = [];
	for (let p = 0; p < numDivs; p++) {
		weights.push(Math.pow(base, p));
	}
	console.log(weights);
		/*
	0: 1
	1: 1
	2: 2
	3: 3
	4: 5
	5: 7
	6: 11
	7: 17
	8: 25
	9: 38
	 */

	weights.forEach(function(weight, index){
		weight = Math.floor(weight);
		for (let i = 0; i < weight; i++) {
			lookupTable.push(index);
		}
	});

  console.log(lookupTable);
	//let a = ["cat", "dog", "antelope"];
	//a[Math.floor(Math.random() * a.length)];
	//a = ["cat", "cat", "dog", "antelope"];
	//a = [0, 1, 2, 1, 1]

	//return lookupTable[Math.floor(Math.random() * lookupTable.length)];
	return function() {
		return lookupTable[Math.floor(Math.random() * lookupTable.length)];
	}
}


let x = weightedRandom(10, 1.5);
x();
