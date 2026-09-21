function makeid(l) {
  // write your code here
	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	let res="";
	for(let i=0; i<l; i++){
		let random =  Math.floor(Math.random()*res.length);
		res = res + char_list.charAt(random);
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
