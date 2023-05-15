"use strict";
// javascript this

// 누가 말을 하냐에 따라서 "내"라는 단어의 의미가 달라진다.
// 지성 => 내가 => 지성을 의미함
// 다른사람 => 내가 => 다른사람을 의미함.
{
  const car = {
    name: "KIA",
    getName: function () {
      console.log("car >> ", this); // 이 객체를 의미한다.
      // 즉, 함수를 누가 호출하는지!
    },
  };

  car.getName();

  const gCar = car.getName;
  console.log(gCar()); // window
}
