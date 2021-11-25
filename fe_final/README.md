# vue-board

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Comments

1. Booststrap 버전을 **4.5.3**으로 변경 후 npm install
2. @/components/board의 **BoardList.vue** 1 2를 바꿔가며 실행해 보세요. bootstrap table의 여러가지 사용법입니다.
3. BoardWrite.vue와 BoardModify.vue에서 공통으로 사용되는 form을 @/components/board/child의 **BoardWriteForm.vue**로 처리했습니다.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 진행상황

### 11/16

##### kakao map load (기능 구현은 아직)

##### html, css 큰 틀 구현

##### 공공데이터 아파트 구현(http - get)

##### 게시판 등록 수정 삭제 구현

### 11/17

##### 관심 지역을 검색했을 경우 관련 뉴스를 불러오기 위해 naver openapi 활용함

##### 로컬 서버에서 naver uri로 http 요청을 보낼 경우 cors 발생함

##### 이를 해결하기 위해 express로 임시 서버를 만들고(server.js) proxy 요청(vue.config.js)을 함

### 11/18

##### 메인페이지 css 보완

##### 게시판 html, css 구현

### 11/19

##### 뉴스 검색 지역별로 분류 및 select/option로 선택 가능하게 디자인

### 11/20

##### 로그인 기능 추가 및 로그인 여부에 따른 게시판 접근 가능 여부 설계

### 11/21

##### 전체적인 css 최종 틀 구현
