//연산이 매개변수에 따라 반복을 한다. N번 반복
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i < n + 1; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo1(100));

//연산이 *,+,/ 총 3번 실행된다.
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// O(n)이 총 2번 실행된다고 해서 2*O(n) 이 아니다. 큰 그림만 봐야한다. 결국 O(n)연산임.
function countUpAndDown(n) {
  console.log("Going Up!");
  //O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log(`At the top!\nGoing down...`);
  //O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log(`Back down. Bye!`);
}

//루프가 한번돌때 그안에서 새로운 O(n)루프가 발생한다. 중첩된 구조임. 이는 O(n^2) 이다.
function printAllPairs(n) {
  //O(n)
  for (let i = 0; i < n; i++) {
    //중첩된 O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
