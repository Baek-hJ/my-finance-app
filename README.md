# 🍓 my-finance-app

**지출 관리도 즐겁게, 따뜻하고 친근한 재정 다이어리**

이 앱은 무겁고 딱딱한 기존 가계부 스타일에서 벗어나,  
**밝고 아기자기한 디자인**과 **직관적인 사용성**을 통해  
사용자가 **부담 없이 지출을 기록하고 꾸준히 소비 습관을 관리할 수 있도록** 돕습니다.

---

## ✨ 주요 기능

- **간편한 지출 입력**  
  날짜, 항목, 내용, 금액만 입력하면 OK. 필수만 최소한으로!

- **월별 지출 내역 정리**  
  원하는 월을 클릭하면 해당 월의 지출 내역만 한눈에 확인 가능.

- **지출 수정 & 삭제**  
  상세 페이지에서 개별 지출 항목을 자유롭게 수정하거나 삭제할 수 있음.

- **배경 음악 + 사운드 효과**  
  재정 관리에 따뜻한 분위기를 더해주는 🎵 BGM과 시작 효과음 지원

---

## 🛠 기술 스택

| 구분 | 내용 |
|------|------|
| **Frontend** | React, TypeScript, Tailwind CSS |
| **State 관리** | React Context API |
| **Routing** | React Router |
| **Database** | Supabase (PostgreSQL 기반 백엔드) |
| **Audio** | HTML5 Audio API |

---

## 🧩 폴더 구조

```
my-finance-app/
├── components/         # 입력 폼, 지출 리스트, 네비게이션 컴포넌트
├── context/            # ExpensesContext, AudioContext
├── layout/             # Layout UI (오디오 제어 포함)
├── pages/              # Start, Home, Detail 등 페이지 구성
├── utils/              # 날짜 필터링 및 Supabase 클라이언트 설정
├── App.tsx             # 라우팅 및 Provider 설정
```

---

## 🐛 트러블 슈팅

### 1. 날짜 필드에서 빈 문자열로 인한 파싱 에러
- 현상: 수정 시 일부 필드를 건드리지 않으면 `""`이 전달되어 Supabase에서 `"invalid input syntax for type date"` 오류 발생
- 해결:
  - `update` 시 각 필드를 `undefined`로 분기 처리
  - 값이 빈 문자열이면 해당 필드는 전달하지 않도록 조건 분기

### 2. `useParams`로 받은 `id`의 타입 오류
- 현상: `useParams<{ id: string }>()` 사용 시 타입이 `string | undefined`로 추론됨
- 해결:
  - `if (!id) return null;` 조건 추가
  - 혹은 `id as string` 단언 처리로 명시적 타입 지정

### 3. 오디오 자동 재생 실패
- 현상: 브라우저 정책으로 인해 사용자 상호작용 없이 오디오 재생이 차단됨
- 해결:
  - 오디오 재생은 반드시 클릭 이벤트 이후 `.play()` 호출
  - `.play().catch(() => {})` 형태로 예외 처리 추가

---

## 📦 실행 방법

```bash
npm install
npm run dev
```

> `.env` 파일에 Supabase 관련 환경 변수 필요 시 별도 설정

---

## ☁️ 디자인 컨셉

- 단순한 UI + 부드러운 컬러톤
- 따뜻한 음악과 함께 소비를 일상처럼 기록할 수 있도록  
- “돈 관리”를 “감정 관리”처럼 느끼게 하는 감성 중심 디자인

---

## 📌 향후 개선 아이디어

- 월별 총 지출 금액 요약
- 다크모드 지원
- 반응형 디자인 지원

---

## 🖼️ 앱 화면 구성 (Figma)

![앱 화면 기획 (Figma)](./피그마.png)

- **Start Page**: 폴더 이미지를 클릭하여 홈 화면으로 진입
- **Home Page**: 지출 목록, 월별 네비게이션, 입력 폼 표시
- **Detail Page**: 지출 상세 정보 확인 및 수정 가능

---

## 🗂 Supabase 테이블 스키마

![Supabase 스키마](./데이터 테이블.png)

- `id`: UUID (Primary Key)
- `date`: 날짜 (date 형식)
- `item`: 항목명 (text)
- `amount`: 금액 (정수형)
- `description`: 설명 (text)

---

> 만든 이:Baek-hJ