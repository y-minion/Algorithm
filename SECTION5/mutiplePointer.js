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

// countUniqueValues([1, 1, 1, 1, 1, 2]);

function betterCountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  //1. 포인터 두개를 생성한다.
  let pointer1 = 0;
  let pointer2 = 0;
  //2. 두개의 포인터는 0 인덱스부터 시작하여 오른쪽으로 전진한다.
  //5. 포인터 2가 가르키는 인덱스가 배열의 길이보다 클 경우 종료
  while (pointer2 < arr.length) {
    //3. 포인터 1과 2가 가르키는 값이 같을 경우 포인터 2를 전진한다.
    if (arr[pointer1] === arr[pointer2]) {
      pointer2++;
    }
    //4-1. 포인터 1과 2가 가르키는 값이 다를경우에 포인터 1을 한칸 오른쪽으로 이동시킨다.
    if (arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      //4-2. 이동시킨 공간에 포인터 2의 값을 삽입한다.
      arr[pointer1] = arr[pointer2];
      pointer2++;
    }
  }
  //6. 포인터 1이 가르키는 인덱스의 위치+1을 반환한다.
  console.log(pointer1 + 1);
}
betterCountUniqueValues([1]);

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let pointer = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[pointer] !== arr[i]) {
      pointer++;
      arr[pointer] = arr[i];
    }
  }
  return pointer + 1;
}
