function firstWord(s) {
  // your code here
	if(s.length===0 || !s.includes(" ")){
		return s;
	}

	let temp=s.split(" ");

	return temp[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
