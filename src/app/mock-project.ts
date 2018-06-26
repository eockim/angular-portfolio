import {
  Project
} from './project';

export const PROJECTS: Project[] = [{
    id: 1,
    name: "헬스케어",
    desc: "LG U+에서 발주한 프로젝트로 심방 측정기를 활용해 병원에서 재활환자들의 재활을 지원해주는 시스템입니다.운동법 소개, 식단 관리, 심박수에 기반한 운동 추천, 심박수 체크, 환자관리 기능이 있습니다.   이 프로젝트는 개발 완료후 테스트 단계에서 투입되었으며 시스템의 통합테스트에 참여하여, 통합시험 절차서 작성   minor한 bug들을 수정하였습니다. 주로 front쪽이며 예를들어 css 변경, javascript 수정 이였습니다. ",
    period: "2015.03.02 ~ 2015.04.30",
    skill: ["java", "eGov", "altibase", "javascript", "jquery"],
    images : []
  }, {
    id: 2,
    name: "대구 헬스케어 플랫폼 구축",
    desc: "KT 에서 발주한 프로젝트로 hl7 표준 기반한 플랫폼입니다. 스마트 디바이스 등록 관리, 헬스케어 오픈 api 관리, 회원계측 관리,로그관리, 게시판등 관리 페이지 개발에 참여하였습니다. 기본적인 crud 기반의 관리자 화면이였으며, angular js를 활용해 한화면에 crud를 모두 구현하였습니다.read 에 대한 화면은 gq-grid library를 사용해 구현하였습니다.",
    period: "2015.07.01 ~ 2015.12.31",
    skill: ["java", "spring", "postgresql", "javascript", "angular"],
    images : []
  },
  {
    id: 3,
    name: "070망 이용댓가 보안 취약점 개선",
    desc: "SK 브로드밴드 발주 프로젝트로 070 망 관리 시스템 입니다. 프로젝트 보안 취약점 개선에 참여하였습니다. XSS 방어코드 작성, http 취약 method 제한,parameter 변조로 로그인시 타 사용자가 회원정보 변경이 가능한 로직을 수정 개발 하였습니다. Struts의 filter에 html 주요 구문을 치환하는 코드를 작성해 xss를 방지하였습니다. javascript 로만 회원 정보에 대한 validation 체크 하던 로직을 Java validaton으로 변경 개발 하였습니다.",
    period: "2016.02.01 ~ 2016.03.31",
    skill: ["java", "struts", "oracle", "javascript", "jquery"],
    images : []
  },
  {
    id: 4,
    name: "M2MS",
    desc: "LG U+ 발주 프로젝트로 M2M 서비스를 관리 플랫폼 입니다. 프로비저닝 시에 새로 추가된 프로토콜 규격으로 인해 생긴 로직 및 ui 개발을 하였습니다.",
    period: "2016.06.01 ~ 2016.09.02",
    skill: ["java", "struts", "altibase", "javascript", "jquery"],
    images : []
  },
  {
    id: 5,
    name: "서울대학교 모바일앱 개선",
    desc: "서울대학교 모바일 앱개선 프로젝트 입니다.기존에 서울대학교에서 사용하던 공식앱의 디자인, 프레임워크 마이그레이션을 진행한 프로젝트입니다. MVC 모델 패턴2로 되어있던 기존 앱을 스프링 프레임워크로 마이그레이션 작업에 참여하였으며, 스프링 프로젝트 마이그레이션에서의 MVC 디자인 패턴 설계 및 AOP 를 활용한 loggin 및 세션 처리 작업을 수행했습니다.서울대 내부 인트라넷에서 사용하는 SSO 연동 개발, 서울대 식단 API 개발, 교직원 검색 개발, WEB WAS 구성, jenkins 서버 구성에 참여하였습니다.",  period: "2016.11.01 ~ 2017.05.08",
    skill: ["java", "spring", "oracle", "javascript", "jquery"],
    images : []
  },
  {
    id: 6,
    name: "온라인창업교육 시스템 구축",
    desc: "changgo.or.kr 에서 운영 중인 온라인 창업교육 플랫폼을 개발하였습니다. 온라인 창업교육 플랫폼은 대학생들이 창업 아이디어를 가지고 전문가에게 평가를 받고 서로 배틀을 하며 창업을 촉진 시키는 플랫폼입니다. eGov 를 활용해 개발하였으며 창업교육 플랫폼의 메인화면,  온라인성장 프로그램 개발, 배틀, 창업실무 로드맵(사업계획서, 손익계산서 등), 회원관리 기능 및 각각의 관리자 화면을 개발하였습니다.",   period: "2017.05.15 ~ 2017.11.30",
    skill: ["java", "spring", "mariadb", "javascript", "jquery"],
    images : []
  },
  {
    id: 7,
    name: "M2MS SUB POS 중복 관리",
    desc: "M2MS 프로비저닝 개선 프로젝트에서 POS CODE 하위 코드인 SUB POS 코드의 중복 코드를 허용을 위한 프로젝트입니다. SUB PO 코드의 중복을 허용하는 로직을 추가 개발하였습니다.",    period: "2017.11.30 ~ 2017.12.15",
    skill: ["java", "struts", "altibase", "javascript", "jquery"],
    images : []
  },
  {
    id: 8,
    name: "개인화설정 관리웹 부문 개발",
    desc: "현대 자동차의 bluelink, 기아 자동차의 evo 앱에서 자동차의 개인화 설정 기능을 추가하는 프로젝트입니다. 차량 서버에서 전달받는,  3가지 규격의 프로토콜 기능을 개발 하였습니다. 차량설정변경, 메타데이터 조회,  최신설정조회  프로토콜을 수신 후 client 로 전달하는 기능을 개발, 서버 환경 구성에 참여하였습니다.",
    period: "2017.12.01 ~ 2018.03.21",
    skill: ["java", "spring", "postgresql", "javascript","jquery"],
    images : []
  }

]
