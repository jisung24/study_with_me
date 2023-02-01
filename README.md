# study_with_jisung

## 2023-01-25(수)

- ### 리엑트 중 객체 state값 일부 변경에 대한 어려움 겪음.
  - `객체 문법 총 정리`
    - `객체 복사에 대한 이해`
    - `우선 복사하고싶은 객체를 spread연산자로 복사를 해 놓고 그 뒤에 추가, 수정하고 싶은 값을 적어준다.(이해 끝남.)`
    - `setObj((prev) => ({...prev, name : "변경할 값"}))` 이런식으로!!
  - `useReducer`
    - 역할 : state값을 변경하는데 사용되는 hook
    - 왜 사용되나?
      - useState를 사용해서 하면 당장 컴포넌트 안에서 밖에 쓸 수 없어.
      - 만약 이 바꾸는 로직을 여러군데에서 사용하고 싶다면, useReduce를 사용하자 => 파일 분리로도 가능.

## 2023-01-26(목)

- ### 자바스크립트에서 객체가 왜 중요할까? 왜 대다수일까?

  - 자바스크립트는 브라우져를 제어하는 언어인데, `BOM`이란 모델이 있기 때문이다.

- ### BOM이란?

  - 브라우져 전체를 의미하는 모델이라고 생각하면 편함.
  - 즉, 브라우져 전체를 javascript가 접근하고 제어할 수 있게 모델로 바꾼 것.
  - window, document, location, history, screen, navigator가 있다.
  - dom도 BOM의 일종임 => 브라우져 전체는 BOM이고, BOM안에서 document띄우는 부분이 DOM임.

- ### 브라우져 렌더링과정

## 2023-01-31

- `앞으로 readme매일매일 써야지!!`
- `testCase를 포함해서 배열로 넣는 경우 있는데, 그럴경우 shift()로 앞에 있는 testCase count빼버린다.`
- `str.indexOf("반환하고싶은 문자 => 문제같은 경우 각 알파벳의 index니까 반복하면서 모든 알파벳을 여기다가 넣어준다.")`
- `str.repeat(반복 횟수) => "A".repeat(2) === "AA"`
