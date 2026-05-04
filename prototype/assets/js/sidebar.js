/**
 * Shared Sidebar HTML Component
 * Used across all prototype pages
 */

function renderSidebar(userType = 'citizen') {
  const citizenNav = `
    <span class="nav-section-label">الخدمات | Services</span>
    <a href="dashboard.html" class="nav-item"><span class="nav-icon">🏠</span> لوحة التحكم</a>
    <a href="services.html" class="nav-item"><span class="nav-icon">📋</span> الخدمات الحكومية</a>
    <a href="tracking.html" class="nav-item"><span class="nav-icon">🔍</span> متابعة الطلبات</a>
    <a href="payment.html" class="nav-item"><span class="nav-icon">💳</span> المدفوعات</a>

    <span class="nav-section-label">الحساب | Account</span>
    <a href="data-access-log.html" class="nav-item"><span class="nav-icon">🔐</span> سجل الوصول للبيانات</a>
    <a href="index.html" class="nav-item"><span class="nav-icon">🚪</span> تسجيل الخروج</a>
  `;

  const ministryNav = `
    <span class="nav-section-label">الإدارة | Management</span>
    <a href="ministry-dashboard.html" class="nav-item"><span class="nav-icon">🏛️</span> لوحة الوزارة</a>
    <a href="national-command.html" class="nav-item"><span class="nav-icon">🗺️</span> مركز القيادة الوطني</a>
    <a href="cybersecurity-alerts.html" class="nav-item"><span class="nav-icon">🛡️</span> تنبيهات الأمن السيبراني</a>

    <span class="nav-section-label">الخدمات | Services</span>
    <a href="services.html" class="nav-item"><span class="nav-icon">📋</span> إدارة الخدمات</a>
    <a href="tracking.html" class="nav-item"><span class="nav-icon">🔍</span> متابعة الطلبات</a>

    <span class="nav-section-label">النظام | System</span>
    <a href="index.html" class="nav-item"><span class="nav-icon">🚪</span> تسجيل الخروج</a>
  `;

  const user = userType === 'ministry' ? MOCK_MINISTRY_USER : MOCK_USER;
  const nav = userType === 'ministry' ? ministryNav : citizenNav;
  const roleDisplay = userType === 'ministry' ? user.ministry : user.governorate;

  return `
    <aside class="sidebar" role="navigation" aria-label="القائمة الرئيسية">
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-logo">
          <div class="sidebar-logo-icon">🇸🇾</div>
          <div class="sidebar-logo-text">
            <div class="logo-title">Digital Syria Vision</div>
            <div class="logo-sub">رؤية سوريا الرقمية</div>
          </div>
        </a>
      </div>
      <nav class="sidebar-nav">${nav}</nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">${user.initials}</div>
          <div class="user-details">
            <div class="user-name">${user.name}</div>
            <div class="user-role">${roleDisplay}</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}
