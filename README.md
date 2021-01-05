컴포넌트 템플릿 모듈화

> 주요 개발 환경
- node : 12.18.0
- npm : 6.14.5
- react : 16.13.1
- typescript : 3.8.3
- styled-components : 5.1.0
- react-router-dom : 6.14.5

### component
- item carousel
- calendar
- item checkbox list
- modal

> 폴더 구조

```sh
src
 ├─ router
 │     ├─ RootRouter
 │     └─ UtilRouter
 ├─ main
 │     └─ carousel : 캐로셀 모듈 
 ├─ util
 │     ├─ calendar : 달력 모듈 
 │     ├─ detailsToggle : 아코니언 모듈
 │     ├─ itemCheckbox : 아이템 체크 및 수량 조절 모듈
 │     ├─ mobileHeader : 모바일 헤더 모듈
 │     ├─ mobileNav : 모바일 네비게이션 바 모듈
 │     ├─ modal : 모달 알럿 모듈
 │     └─ tab : 탭 모듈
 └─ style
       ├─ index
       └─ GlobalStyle
```


> module 구조 

```sh
module
 ├─ component
 │     ├─ organisms : 컴포넌트
 │     └─ img
 └─ page : 컴포넌트 적용 페이지 
```