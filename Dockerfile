# Node.js 공식 이미지를 베이스로 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드 시점에 환경변수 설정
ARG NEXT_PUBLIC_GITHUB_USERNAME
ENV NEXT_PUBLIC_GITHUB_USERNAME=$NEXT_PUBLIC_GITHUB_USERNAME


# Next.js 애플리케이션 빌드
RUN npm run build

# 포트 3000 노출
EXPOSE 3000

# 애플리케이션 시작
CMD ["npm", "start"]