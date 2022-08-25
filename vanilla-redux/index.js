import { createStore } from 'redux';

// DOM 레퍼런스
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 정의
// 액션 이름은 주로 대문자로 작성하며, 고유해야 한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 정의
// type 필드는 필수
// 업데이트 시 참고하고 싶은 값은 선택
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 상태 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의 (변화를 일으키는 함수)
// 초기 state, action을 파라미터로 받는다.
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
// 구독하기
// react-redux 라이브러리에서는 자동으로 해줌
store.subscribe(render);

divToggle.addEventListener('click', () => {
  store.dispatch(toggleSwitch());
});

btnIncrease.addEventListener('click', () => {
  store.dispatch(increase(2));
});

btnDecrease.addEventListener('click', () => {
  store.dispatch(decrease());
});
