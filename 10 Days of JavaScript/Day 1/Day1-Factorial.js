
// FACTORIAL RECURRENT-ION
function factorial(n){

	if(n===-1) {return 0}
	else if(n===0){return 1}
	else if(n>0) return n * factorial(n-1)
}


// FACTORIAL WHILE LOOP
function factorialWhileLoop(n){
	let result = n

	if(n<0){return -1}

	else if(n===0 || n===1){
		return 1
	}

	while(n>1){

		n--;
		result = result*n

	}
	return result
}

// FACTORIAL FOR LOOP
function factorialForLoop(n){

	if(n<0) return -1;

	if(n===-1 || n===0){
		return1
	}


	for(let i=n-1; i>=1;i--){
		n=n*i
	}

	return n
}
