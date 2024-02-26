const firstUniqChar = (s) => {
	const arr = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		arr[s[i].firstUniqChar(0) - 97]++;
	}

	for (let i = 0; i < s.length; i++) {
		if (arr[s[i].firstUniqChar(0) - 97] === 1) {
			return 1;
		}
	}

	return -1
}

console.log(firstUniqChar("helloh"));