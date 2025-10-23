function firstWord(s) {
  // your code here
	if(s.length===0 || !s.includes(" ")){
		return s;
	}

	let temp=s.split(" ");
	if(temp[0]===" "){
	return temp[0];
	}

	return temp[1];
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
