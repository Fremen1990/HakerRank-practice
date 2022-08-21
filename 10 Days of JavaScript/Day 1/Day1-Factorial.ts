// FACTORIAL RECURRENT-ION
const factorial = (n:number): number | any =>{
	if(n===-1) {return 0}
	else if(n===0){return 1}
	else if(n>0) return n * factorial(n-1)
}


// FACTORIAL WHILE LOOP
const  factorialWhileLoop = (n:number):number =>{
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
const  factorialForLoop = (n:number)=>{

	if(n<0) return -1;

	if(n===-1 || n===0){
		return 1
	}
	for(let i=n-1; i>=1;i--){
		n=n*i
	}
	return n
}
