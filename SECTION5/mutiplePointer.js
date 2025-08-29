//배열이 주어졌을때 배열의 요소들이 몇가지 종류로 이루어 졌는지 반환하라
function countUniqueValues(arr) {
  //배열의 요소들이 몇개나 중복되어 있던 상관없이 요소들이 몇가지로 이루어 졌는지만 확인 하면 된다.
  //1. 이때 카운터 객체를 새로 만든다. -> 배열을 순회하면서 현재 값의 존재 유무를 알려주는 객체이다.
  const counterObj = {};
  //2. 전체 배열을 순회한다.
  for (const item of arr) {
    //3. 현재 요소가 카운터 객체에 존재하면 넘어가고, 존재하지 않으면 1을 추가한다.
    counterObj[item] = (counterObj[item] || 0) + 1;
  }
  //4. 루프가 끝나면 카운터 객체의 키 갯수를 반환한다.
  return console.log(Object.keys(counterObj).length);
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
