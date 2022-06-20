# Chapter 3 EVENT

### Event bubbling & capturing

- bubbling : 하위 -> 상위 요소로 이벤트 전파
- capturing : 상위 -> 하위 요소로 이벤트 전파
- event.stopPropageation() : 이벤트 전달 방지

ex) 부모 : div, 자식 : span 
span 클릭 시,
currentTarget : 이벤트 리스너가 달린 요소 (div)
target : 실제 이벤트가 발생하는 요소 (span)

### event.preventDefault();
: 브라우저 내 이벤트 행동 취소하기, 동작 방지하기

=> 행동 취소가 안되는 목록?
: ’Wheel’ event
=> wheel 이벤트 취소하는 방법?
: ‘passive : false’ option 추가하기 

.tagname : 항상 대문자로 값을 반환함

### Keydown & keyup

Keypress -> 점점 브라우저에서 지원하지 않아 사용 권장 x
Keydown : 사용자가 키보드를 눌렀을 때 바로 발생
keyup : 사용자가 키보드를 누르고 있다가 손을 뗄 때 발생

Keydown 한국어 입력 시 이슈 발생 (마지막 값이 두번 반복)
* 이슈 분석 - isComposing이 false 일 때 발생함
* 해결법 - if(event.isComposing){ return; }

### Form 사용

=> Html 안에 Input 요소를 form으로 감싸주면 키보드 이벤트를 주지 않아도 폼요소로 자동 인식됨

‘submit’ event
=> 목록이 자동 재로딩 됨  / 해결방법?
: event.preventDefault();
