const isprimeNuber= (number)=>{
	return number > 7 ? higherNumber(number): smallerNumber(number)
};
const higherNumber=(number)=>{
	const bal= (number %2!==0 && number %5 !== 0 && number %3!==0 && number %7!==0)? "is a prime" : "not a prime";
	console.log(number,bal);
};
const smallerNumber= (number)=>{
	console.log("numbrt",number);
};
isprimeNuber(11);
