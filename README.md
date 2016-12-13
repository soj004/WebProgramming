# 웹프로그래밍 기말프로젝트


## 구현 기능
- 여행자 숙소 예약 및 호스트 숙소 등록
- 회원가입, 로그인
- 페이스북 로그인
- 관리자 및 관리페이지 (이메일: admin@localhost, 비밀번호: 960328)
- 호스트 숙소 기본정보 등록 가능
- 여행자 숙소 목록 열람 가능
- 호스트의 예약 취소 가능

## 2. Ajax Code: /public/javascripts/todos.js
- Load하면 /tasks에서 tasks를 GET으로 가져와서 rendering
- 사용자가 새 task를 저장하면, /tasks 에 POST하고 다시 rendering
- 사용자가 done을 누르면 변경하고 내용을 PUT으로 전송하고 다시 rendering
- 사용자가 delete버튼을 누르면 내용을 DELETE로 해당 Dom node 삭제
- side bar의 선택이 바뀌면 다시 rendering
