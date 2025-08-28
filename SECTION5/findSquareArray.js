/*
 * 매개변수로 2개의 배열 A,B가 주어진다. 이때 A배열의 각 요소에 대해 제곱한 값이 모두 B에 존재하면 true를 반환한다.
 * 이때 각 A의 요소에 대해 매치되는 B의 요소의 개수가 동일해야한다.
 */

// 두개의 배열을 입력받는다.
function same(a, b) {
  //4-1. 이때 해당 값의 인덱스가 중복되면 안된다.
  //4-2. 매치되는 배열의 인덱스를 저장하기 위해 SET 자료구조를 사용한다.
  const result = new Set();

  //1. a의 각 요소를 순환한다.
  for (const item of a) {
    //2. 각 루프의 요소에 제곱한다.
    const doubleItem = item ** 2;
    //3. 해당 값이 b의 요소에 존재하는지 찾는다.
    const targetIndex = b.indexOf(doubleItem);
    //5. 제곱한 값이  없으면 즉시 순환을 종료하고 false반환
    if (targetIndex === -1) {
      break;
    }
    //4. b의 인덱스가 존재하면 해당 인덱스를 기록한다.
    //6. 존재하면 SET 자료구조에 해당 인덱스를 삽입
    result.add(targetIndex);
  }
  //7. 루프가 성공적으로 완료되면 a배열의 길이와 SET자료구조 배열의 길이를 비교한다.
  return console.log(a.length === result.size);
}

same([1, 2, 3], [4, 1, 9]);
same([1, 2, 3], [4, 4, 9]);
