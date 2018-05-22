function fact (n) {
	fact = 1;
	for ( var i = 2; i<=n; i++) {
	fact *= i;
	console.log(fact);
	}
	console.log(fact);
}

fact (5);