//변수와 상수

// 동작 자체는 let과 var은 차이가 없다. const는 절대 변경되지 않을 확신이 있으면 쓴다.

// 초기 자바스크립트 구현 방식 
// var에는 블록 스코프가 없다. -> 함수 스코프거나 전역 스코프이다. -> 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근이 가능하다.

//if (true) {
//    var test = true;
//}
//alert(test);

// var으로 선언해서 코드 블록을 무시하고 test는 전역변수가 되어버린다.
// 만약 let test 로 했으면 test는 if 문 안에서만 접근 가능하다.

// 코드 블록이 함수 안에 있따면, var은 함수 레벨 변수가 된다.
function sayHi() {
    if (true) {
        var phrase = "hello";
    }

    alert(phrase); // 출력됨
}
sayHi();
alert(phrase); // Error: phrase is not defined

// var는 변수의 중복 선언을 허용한다.
var user = "peter";
var user = "jain"; // 이건 아무것도 하지는 않음. 에러도 안생김
// let이었으면 두번째에서 // SyntaxError: 'user' has already been declared

// 여기까지 정리 -> var로 선언한 변수는 if, for은 관통하지만, function에서는 레벨 변수가 된다.

// 변수가 끌어 올려지는 현상을 호이스팅(hoisting)이라 한다.
// var로 선언한 모든 변수는 함수의 최상위로 끌어 올려지기 때문이다.

// 선언은 호이스팅 되지만 할당은 호이스팅 되지 않는 코드
function sayHi() {
    phrase = "hello";

    if (false) {
        var phrase;
    }

    alert(phrase);
}
sayHi();
// 모든 var 선언은 함수 시작 시 처리된다.
// var로 선언한 변수는 어디서든 참조 가능하다.
// 하지만 변수에 무언가 할당하기 전까지는 undefined 이다.


// var로 선언한 변수는 블록 스코프가 아닌 함수 수준 스코프를 갖는다.
// var 선언은 함수가 시작되는 시점에서 처리된다.