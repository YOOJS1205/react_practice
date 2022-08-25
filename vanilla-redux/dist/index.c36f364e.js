// DOM 레퍼런스
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
// 액션 이름 정의
// 액션 이름은 주로 대문자로 작성하며, 고유해야 한다.
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
// 액션 생성 함수 정의
// type 필드는 필수
// 업데이트 시 참고하고 싶은 값은 선택
const toggleSwitch = ()=>({
        type: TOGGLE_SWITCH
    });
const increase = (difference)=>({
        type: INCREASE,
        difference
    });
const decrease = ()=>({
        type: DECREASE
    });
// 초기 상태 설정
const initialState = {
    toggle: false,
    counter: 0
};

//# sourceMappingURL=index.c36f364e.js.map
