 # HSU MARKET🛒

학생들이 학교 내에서 물품을 사고팔 수 있는 **학교 기반 커뮤니티 마켓 웹 애플리케이션**입니다. 학교 이메일 인증을 통해 낯선 사람과의 거래에서 발생하는 **신뢰 문제와 불안감을 해소**할 수 있도록 설계되었으며, 품목별 검색과 가격 비교의 어려움을 해결하여 **직관적이고 안전한 거래 환경**을 제공합니다.

## 목차
1. [개발 환경](#1-개발-환경) 
2. [실행 환경](#2-실행-환경)
3. [설치 방법](#3-설치-방법) 
4. [주요 기능](#4-주요-기능)
5. [👥조원](#-조원) 

## 1. 개발 환경  
- **Front-end** : React, React Router, CSS Modules, Axios, Fetch API
- **Back-end** : Express.js, Node.js, Socket.IO, AWS Lambda, API Gateway, AWS DynamoDB

## 2. 실행 환경
### 필수 도구
- **Node.js**: v14.x 이상 (최소 v14.0.0)
- **npm**: v6.x 이상 (Node.js 설치 시 함께 설치)

## 3. 설치 방법 
### 1. 프로젝트 클론
```bash
git clone https://github.com/H-Web-Market/HSU-Market_1130.git](https://github.com/H-Web-Market/HSU_Market.git
```

### 2. 디렉토리 이동
```bash
cd HSU_Market
```

### 3. 의존성 설치
```bash
npm install
```

### 4. 프로젝트 실행
```bash
npm start
```

## 3. 주요 기능

<details><summary>사용자 인증 및 보안
</summary>

- 학교 이메일 인증을 통한 **신뢰할 수 있는 사용자 인증** 시스템 구현
</details>
<details><summary>상품 등록 및 검색 기능
</summary>

- **사용자**는 상품을 이름, 가격, 설명, 카테고리 등을 입력하여 **상품 등록**
- **검색 기능**: 사용자들은 등록된 상품을 이름, 카테고리 등을 기준으로 검색
</details>
<details><summary>실시간 채팅 기능
</summary>

- 구매자와 판매자는 **실시간 채팅**을 통해 상품에 대한 질문과 응답을 주고 받기 가능
- **Socket.IO**를 사용하여 채팅 메시지가 실시간으로 전달
</details>
<details><summary>리뷰 및 평판 관리 기능
</summary>

- 거래 완료 후 **상품에 대한 리뷰 및 평점**을 작성
- 구매자와 판매자는 평점을 매기고, 리뷰를 남길 수 있음
- **리뷰 및 평판 시스템**을 통해 안전하고 신뢰할 수 있는 거래 환경을 제공
</details>


## 👥 조원   
- **김준호** (조장) 
- **김가영** 
- **윤현도** 
- **이선빈** 
   
