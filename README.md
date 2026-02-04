# 방화벽 로그 모니터링 웹 어드민

방화벽 로그를 실시간으로 모니터링하고 분석할 수 있는 웹 기반 관리 시스템입니다.

## 기술 스택

### 프론트엔드
- **Next.js 15**: React 기반 풀스택 프레임워크
- **React 19**: UI 컴포넌트 라이브러리
- **Tailwind CSS 3**: 유틸리티 우선 CSS 프레임워크
- **JavaScript**: 프로그래밍 언어

### 백엔드
- **FastAPI**: 고성능 Python 웹 프레임워크
- **SQLAlchemy**: SQL 툴킷 및 ORM
- **Pydantic**: 데이터 검증 라이브러리
- **Python 3.10+**: 프로그래밍 언어

### 데이터베이스
- **SQLite**: 경량 관계형 데이터베이스

## 프로젝트 구조

```
module3/
├── frontend/          # Next.js 프론트엔드
│   ├── src/
│   │   ├── app/      # Next.js App Router 페이지
│   │   ├── components/  # React 컴포넌트
│   │   └── lib/      # 유틸리티 및 API 클라이언트
│   └── public/       # 정적 파일
├── backend/          # FastAPI 백엔드
│   ├── app/
│   │   ├── api/      # API 라우트
│   │   ├── models/   # 데이터베이스 모델
│   │   ├── schemas/  # Pydantic 스키마
│   │   └── core/     # 설정 및 유틸리티
│   └── database/     # SQLite 데이터베이스
└── docs/             # 프로젝트 문서
```

## 주요 기능

1. **방화벽 로그 모니터링**: 실시간 로그 조회 및 필터링
2. **로그 분석**: 통계 및 시각화
3. **알림 설정**: 이벤트 기반 알림
4. **사용자 관리**: 관리자 계정 및 권한 관리

## 설치 및 실행

### 사전 요구사항
- Python 3.10 이상
- Node.js 18 이상
- npm 또는 yarn

### 백엔드 설정

```bash
# 백엔드 디렉토리로 이동
cd backend

# 가상환경 생성 (선택사항)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필요한 설정 수정

# 개발 서버 실행
uvicorn app.main:app --reload
```

백엔드 서버는 http://localhost:8000 에서 실행됩니다.
- API 문서: http://localhost:8000/docs
- 헬스 체크: http://localhost:8000/health

### 프론트엔드 설정

```bash
# 프론트엔드 디렉토리로 이동
cd frontend

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필요한 설정 수정

# 개발 서버 실행
npm run dev
```

프론트엔드 서버는 http://localhost:3000 에서 실행됩니다.

### 프로덕션 빌드

```bash
# 백엔드
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000

# 프론트엔드
cd frontend
npm run build
npm run start
```

## API 엔드포인트

모든 API는 `/api/v1` 경로를 통해 접근합니다:

- `GET /api/v1/logs` - 로그 목록 조회
- `POST /api/v1/logs` - 새 로그 생성
- `GET /api/v1/users` - 사용자 목록 조회
- `GET /api/v1/settings` - 설정 조회

자세한 API 문서는 FastAPI Swagger UI에서 확인하세요: http://localhost:8000/docs

## 개발 가이드

### 프론트엔드 개발
- Tailwind CSS 유틸리티 클래스 사용
- `src/lib/api.js`의 API 클라이언트로 백엔드 통신
- Next.js App Router 패턴 준수

### 백엔드 개발
- FastAPI의 비동기 처리 활용
- Pydantic 스키마로 데이터 검증
- SQLAlchemy ORM으로 데이터베이스 접근

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.
