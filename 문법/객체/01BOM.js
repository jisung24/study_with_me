'use strict';
// Javascript에서 원시값을 제외한 모든 값(함수, 배열, 정규식 등등)은 ❗️객체❗️ 이다
// ❗️자바스크립트를 이루고있는 대부분이 객체이다❗️
// 즉, 자바스크립트는 브라우져를 제어하기 위한 언어이다!!!!!!!!!  (객체로 이루어져있어서 객체로 제어한다.)

// BOM(Browser Object Model) 
// - 웹 브라우져 전체를 javascript에서 제어할 수 있도록 브라우져 전체를 객체화 시킨 모델. 
// - 자바스크립트에서 BOM을 이용하여 새 탭 열기, 창 닫기 등등 브라우져에서 일어나는 모든 기능을 실행시킬 수 있다 
// - 브라우져 console창에서!

// ✨ BOM 종류 ✨
// ⭐️ 1.window ⭐️
    // - 브라우져 전체의 창을 의미하며, 모든 객체(배열, 함수)가 속해있는 자바스크립트 최상위 객체이다. 
    // - ❗️브라우져 창 전체, 브라우져에서 제공하는 전역객체❗️
    // - 따라서 어차피 뒤에오는 프로퍼티들은 당연히 window안에 속해있기 때문에 생략이 가능하다. 
    // - 즉 그냥 브라우져의 전체를 포함하는 객체라고 생각하면 돼! 
    // ex) 새 탭 열기 - window.open('https://google.com') 
    // ex) browser 알림창 - window.alert('')❗️함수도 객체니까 포함하는거 맞아❗️

// ⭐️ 2.document ⭐️
// html문서를 표현하는 객체 
// 위에 검색부분 창 부분을 제외하고 밑에 웹 문서가 띄워지는 그 부분만을 의미한다. 
// 역시 document도 window객체에 속해있다. 
// 윗 부분은 document부분은 아니지만 window부분이다.

// ⭐️ 3.history ⭐️
// - 브라우져가 지금까지 접속했던 url의 history를 볼 수 있는 객체. 
// - history.back() : 뒤로가기 
// - history.forward() : 앞으로가기

// ⭐️ 4.location ⭐️
// - 플젝할 때 redirection했을 때 window.location.href = "url" 기억하지? 
// - url과 관련한 객체이다. 
// ex) location.host => 현재 사이트 url 
// ex) location.href => url변경 

// ⭐️ 5.screen ⭐️ 
// - 화면에 대한 정보 => 핸드폰 화면, 노트북, 데스크탑 등등... 
// ex) 현재 화면에 대한 사이즈 등등을 알 수 있다. 

// ⭐️ 6.navigator ⭐️
// - 실행중인 application에 대한 정보 