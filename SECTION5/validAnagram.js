function validAnagram(str1, str2) {
  //각 문자열의 캐릭터의 빈도수를 담아줄 객체를 선언
  const strToObj1 = {};
  const strToObj2 = {};

  //각 문자열을 순환하면서 각 캐릭터의 빈도수를 객체에 기록한다.
  for (const char of [...str1]) {
    strToObj1[char] = (strToObj1[char] || 0) + 1;
  }
  for (const char of [...str2]) {
    strToObj2[char] = (strToObj2[char] || 0) + 1;
  }

  //각 빈도 수가 기록된 객체를 비교하여 동일한지 확인한다.
  for (const char in strToObj1) {
    if (!(char in strToObj2)) return console.log(false);
    if (strToObj1[char] !== strToObj2[char]) return console.log(false);
  }
  return console.log(true);
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
