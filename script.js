function firstWord(s) {
  // your code here
	if(s.length===0 || !s.includes(" ")){
		return s;
	}

	let temp=s.split(" ");
	if(s.trim().length==0){
		return "";
	}

	for(let i=0;i<temp.length;i++)
	{
		if(temp[i]!==""){
			return temp[i];
		}
	}
   return "";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
