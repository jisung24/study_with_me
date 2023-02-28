function solution(bridge_length, weight, truck_weights) {
  // n이 10000까지니까... n제곱으로 풀면 안 돼...!
  // nlogn이나 n으로 풀어야해서 반복문 쓸 떄 신중하자.!!!
  // ❗️제발 n을 먼저 보는 습관을 들이자❗️
  class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }

    enqueue(value) {
      this.queue[this.rear++] = value;
    }

    dequeue() {
      let value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
    }

    peek() {
      return this.queue[this.front];
    }

    size() {
      return this.rear - this.front;
    }
  }
  let waitQueue = new Queue(); // 얘가 건너갈 떄 마다 sum에서 값을 더해줘야돼!
  let crossing = new Queue(); // 건너는 큐...! => 들어갈 때 마다 합을 구해줘야 돼!
  let crossed = []; // 이미 다 건넌 원소들은 배열로...!
  // 기다리는 큐 초기화!
  for (let i = 0; i < truck_weights.length; i++) {
    // O(N)
    waitQueue.enqueue(truck_weights[i]);
  }

  let sum = 0;
  let i = 0;
  while (true) {
    console.log("==========<<시작>>==========");
    crossing.enqueue(waitQueue.dequeue());
    console.log("⭐️대기⭐️ 건너가자~", waitQueue);
    console.log("❗️건너옴❗️", crossing);
    console.log("❗️가장 윗 숫자❗️", crossing.peek());
    sum += crossing.peek(); // 계속 더해진다..!
    console.log(`🔴 합 >>`, sum);
    // 일단 넣는다...!
    if (sum >= weight) {
      // 조금이라도 넘을 경우...!
      crossed.push(crossing.dequeue());
      sum -= crossed[crossed.length - 1]; // 계속 빼준다..!
      console.log(`🔴다리가 못 버텨서 빼줬어.. >> `, sum);
      console.log(`🎇 다 건넌 트럭 >> `, crossed);
    }
    i++;
    if (i === 5) {
      break;
    }
  }
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

solution(bridge_length, weight, truck_weights);
