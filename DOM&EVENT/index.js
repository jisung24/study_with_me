"use strict";
// javascript
// BOM을 이용하여 javascript는 웹 브라우져 전체를 제어할 수 있다.
// 그래서 BOM안에 속하는 DOM으로 html문서를 제어할 수 있다.

// 브라우져가 화면에 html을 띄울 때 dom tree를 생성해서 화면에 띄운다.
// 모든 브라우져를 객체화 시킨 모형이 BOM인데,
// 역시 그 안에 있는 html태그들도 싹 다 객체야.
// li { style : { color : blue, } } 이런 식...

// 01. 각 dom요소에 접근!
let html = document.documentElement; // html에 접근
let body = document.body; // body에 접근
let head = document.head; // head에 접근

// ❗️css여러 개 추가❗️
// 각 태그 객체의 style property안으로 들어가면 여러개의 css가 나옴.

body.style.cssText = `
    background-color : black;
    border : 5px solid white;
    color : white;
    overflow : hidden;
    padding : 10px 10px;
`;

// body안에 있는 요소에 접근

// ⭐️태그 하나에 접근⭐️
// 1. id로 접근하기 : ❗️무조건 1개만 return해준다❗️
let title = document.getElementById("main__title");
title.style.cssText = `
            font-size : 1.5rem;
            font-weight : 900;
            font-style : italic;
        `;

// 2. querySelector로 접근하기
let subTitle = document.querySelector(".sub__title");
subTitle.style.cssText = `
                font-size : 3rem;
                color : gray;
            `;

// ⭐️태그 여러개를 접근 => ❗️배열과 비슷한❗️ 타입으로 return⭐️
// what is HTMLCollection && nodeList
// - 여러개의 html노드들을 return할 때 사용되는 객체이다.
// - ❗️유 사 배 열 객 체❗️ => 자바스크립트에서 제공되는 배열함수를 사용할 순 없다.(유 사 이니까.)
// - 편하게 사용하기 위해서는 그냥 배열로 만들어주는게 최고야...
// - 둘 다 이터러블 (반복문을 돌 수 있다.. for of나 spread도 사용가능)
let list = document.querySelectorAll(".list");
let listArr = [...list]; // array로 만들어줌.
let map = listArr.map((value) => (value.innerHTML = "hello")); // 전체를 이렇게 만들어줌!
// 0 : li.list
// 1 : li.list
// 2 : li.list
// length : 3 ==> 이런식의 값을 찾는 객체이다.

// 02 부모 형제 노드.
let ul = document.querySelector("ul");
let childs = [...ul.childNodes];
childs.map((value) => (value.innerHTML = "지성!"));
