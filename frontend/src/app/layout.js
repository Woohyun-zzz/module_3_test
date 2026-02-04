import './globals.css';

export const metadata = {
  title: '방화벽 로그 모니터링',
  description: '방화벽 로그를 실시간으로 모니터링하고 분석하는 웹 어드민 페이지',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
