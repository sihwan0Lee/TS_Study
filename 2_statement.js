// 한줄 주석 cmd + /
/*
여러줄 주석~~~     cmd + option + /
HTML 문서에 넣은 자바스크립트 주석은 소스보기를 하면 다 보입니다. 따라서 개발 과정에서 작성했지만 공개되면 안되는 주석들이 있다면 삭제하는 게 좋습니다.
*/
// 02. 코드 블럭 만들기
// 문(statement)은 어떤 작업을 수행하는 문법 구조와 명령어를 의미한다.
// 이떄 서로 다른 문은 세미콜론으로 구분한다.
alert('Hello'); 
alert('world');

// 줄 바꿈이 있다면 세미콜론은 생략할 수 있다.
// js는 줄 바꿈이 있다면 암시적으로 세미콜론으로 해석한다. (automatic semicolon insertion)
// 자동으로 세미콜론을 삽입해주지 못하는 상황
//alert("에러가 발생한다.")
//[1, 2].forEach(alert)

alert("에러가 발생한다.");
[1, 2].forEach(alert)

// 줄 바꿈으로 문을 나눴더라도, 문 사이엔 세미콜론을 넣는 것이 좋다.

