export default function Home() {
  const features = [
    {
      title: '로그 모니터링',
      description: '실시간으로 방화벽 로그를 조회하고 필터링할 수 있습니다.',
      icon: '📊',
      link: '/logs',
    },
    {
      title: '로그 분석',
      description: '로그 데이터를 분석하여 통계와 시각화를 제공합니다.',
      icon: '📈',
      link: '/analytics',
    },
    {
      title: '알림 설정',
      description: '특정 이벤트 발생 시 알림을 받을 수 있습니다.',
      icon: '🔔',
      link: '/alerts',
    },
    {
      title: '사용자 관리',
      description: '관리자 계정과 권한을 관리할 수 있습니다.',
      icon: '👥',
      link: '/users',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            방화벽 로그 모니터링
          </h1>
          <p className="mt-2 text-gray-600">
            실시간 로그 모니터링 및 분석 시스템
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card cursor-pointer">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                바로가기 →
              </a>
            </div>
          ))}
        </div>

        {/* Status Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">시스템 상태</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-semibold">API 서버</div>
              <div className="text-green-600 text-sm mt-1">정상 작동 중</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-semibold">데이터베이스</div>
              <div className="text-green-600 text-sm mt-1">연결됨</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-semibold">로그 수집</div>
              <div className="text-blue-600 text-sm mt-1">대기 중</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 방화벽 로그 모니터링 시스템. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
