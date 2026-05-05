/**
 * Shared Sidebar HTML Component
 * Used across all prototype pages.
 *
 * Iteration 3: emoji nav-icons replaced with inline SVG icons for a more
 * "government-grade" look. The icons are intentionally simple and
 * monochromatic (currentColor) so they inherit the active/hover styles.
 */

/* ---- Inline SVG icon set (24x24 viewBox, currentColor fill) ---- */
const SIDEBAR_ICONS = {
  home:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3z"/></svg>',
  services: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3h11l3 3v15H5zm2 2v14h10V7h-3V5zm2 6h6v2H9zm0 4h6v2H9z"/></svg>',
  track:    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 2a8 8 0 1 0 5.3 14L21 21.7 22.7 20 17 14.3A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/></svg>',
  pay:      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6h18v3H3zm0 5h18v7H3zm3 3v2h6v-2z"/></svg>',
  bell:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a2 2 0 0 0-2 2v.6A6 6 0 0 0 6 10v4l-2 3h16l-2-3v-4a6 6 0 0 0-4-5.4V4a2 2 0 0 0-2-2zm-2 18a2 2 0 0 0 4 0z"/></svg>',
  user:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-8 1.7-8 5v3h16v-3c0-3.3-4.7-5-8-5z"/></svg>',
  shield:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/></svg>',
  log:      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3h14v18H5zm2 2v14h10V5zm2 3h6v2H9zm0 4h6v2H9zm0 4h4v2H9z"/></svg>',
  consent:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z"/></svg>',
  logout:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 17v-2H4V9h6V7l5 5zm5-15h6v20h-6v-2h4V4h-4z"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 21V7l9-4 9 4v14h-7v-5h-4v5zm5-9h2v-2H8zm0 4h2v-2H8zm6-4h2v-2h-2zm0 4h2v-2h-2z"/></svg>',
  map:      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m9 3-6 2v16l6-2 6 2 6-2V3l-6 2zm0 2.2 6 2v11.6l-6-2z"/></svg>',
  flag:     '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3h2v18H5zm2 1h12l-2 4 2 4H7z"/></svg>'
};

function navIcon(key) {
  return `<span class="nav-icon" aria-hidden="true">${SIDEBAR_ICONS[key] || ''}</span>`;
}

function renderSidebar(userType = 'citizen') {
  const citizenNav = `
    <span class="nav-section-label">الخدمات | Services</span>
    <a href="dashboard.html" class="nav-item">${navIcon('home')} لوحة التحكم</a>
    <a href="services.html" class="nav-item">${navIcon('services')} الخدمات الحكومية</a>
    <a href="tracking.html" class="nav-item">${navIcon('track')} متابعة الطلبات</a>
    <a href="payment.html" class="nav-item">${navIcon('pay')} المدفوعات</a>
    <a href="notifications.html" class="nav-item">${navIcon('bell')} الإشعارات</a>

    <span class="nav-section-label">الحساب | Account</span>
    <a href="profile.html" class="nav-item">${navIcon('user')} ملفي الشخصي</a>
    <a href="data-access-log.html" class="nav-item">${navIcon('log')} سجل الوصول للبيانات</a>
    <a href="consent-management.html" class="nav-item">${navIcon('consent')} إدارة الموافقات</a>
    <a href="index.html" class="nav-item">${navIcon('logout')} تسجيل الخروج</a>
  `;

  const ministryNav = `
    <span class="nav-section-label">الإدارة | Management</span>
    <a href="ministry-dashboard.html" class="nav-item">${navIcon('building')} لوحة الوزارة</a>
    <a href="national-command.html" class="nav-item">${navIcon('map')} مركز القيادة الوطني</a>
    <a href="cybersecurity-alerts.html" class="nav-item">${navIcon('shield')} تنبيهات الأمن السيبراني</a>

    <span class="nav-section-label">الخدمات | Services</span>
    <a href="services.html" class="nav-item">${navIcon('services')} إدارة الخدمات</a>
    <a href="tracking.html" class="nav-item">${navIcon('track')} متابعة الطلبات</a>

    <span class="nav-section-label">النظام | System</span>
    <a href="index.html" class="nav-item">${navIcon('logout')} تسجيل الخروج</a>
  `;

  const user = userType === 'ministry' ? MOCK_MINISTRY_USER : MOCK_USER;
  const nav = userType === 'ministry' ? ministryNav : citizenNav;
  const roleDisplay = userType === 'ministry' ? user.ministry : user.governorate;

  return `
    <aside class="sidebar" role="navigation" aria-label="القائمة الرئيسية">
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-logo">
          <div class="sidebar-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:22px;height:22px;color:var(--color-primary);"><path d="M12 2 2 7l10 5 10-5zm0 7L2 14l10 5 10-5zm0 7L2 21l10 5 10-5z"/></svg>
          </div>
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
