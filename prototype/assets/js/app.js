/**
 * Digital Syria Vision — Prototype Application
 * Core JavaScript Module
 * MOCK DATA ONLY — No real citizen data
 */

'use strict';

// ============================================================
// MOCK DATA — All data is fictional for demonstration only
// ============================================================

const MOCK_USER = {
  name: 'محمد أحمد العلي',
  nameEn: 'Mohammed Al-Ali',
  // Mock NIN format: SY-NIN-XXXX-XXXX (no birth year, no governorate, no gender)
  // See docs/canonical-metrics-and-assumptions.md §4
  nin: 'SY-NIN-8F3A-92KQ',
  role: 'مواطن',
  roleEn: 'Citizen',
  initials: 'م.أ',
  email: 'citizen@example.sy',
  phone: '+963 11 XXX XXXX',
  governorate: 'دمشق'
};

const MOCK_MINISTRY_USER = {
  name: 'م. سارة الأحمد',
  nameEn: 'Eng. Sara Al-Ahmad',
  nin: 'SY-NIN-4D7C-15PR',
  role: 'مدير الخدمات الرقمية',
  roleEn: 'Digital Services Director',
  ministry: 'وزارة الداخلية',
  ministryEn: 'Ministry of Interior',
  initials: 'س.أ'
};

const MOCK_SERVICES = [
  { id: 'ID-001', name: 'تجديد بطاقة الهوية الوطنية', nameEn: 'National ID Renewal', category: 'الهوية', ministry: 'الداخلية', fee: 5000, feeUsd: 0.38, time: '3 أيام', icon: '🪪', status: 'متاح', online: true },
  { id: 'PS-001', name: 'استخراج جواز السفر', nameEn: 'Passport Issuance', category: 'الهوية', ministry: 'الداخلية', fee: 50000, feeUsd: 3.8, time: '7 أيام', icon: '📘', status: 'متاح', online: true },
  { id: 'BC-001', name: 'شهادة الميلاد', nameEn: 'Birth Certificate', category: 'السجل المدني', ministry: 'الداخلية', fee: 2000, feeUsd: 0.15, time: 'فوري', icon: '📜', status: 'متاح', online: true },
  { id: 'DR-001', name: 'رخصة القيادة', nameEn: 'Driver\'s License Renewal', category: 'المرور', ministry: 'الداخلية', fee: 15000, feeUsd: 1.15, time: '5 أيام', icon: '🚗', status: 'متاح', online: true },
  { id: 'BZ-001', name: 'تسجيل نشاط تجاري', nameEn: 'Business Registration', category: 'الأعمال', ministry: 'الاقتصاد', fee: 100000, feeUsd: 7.6, time: '10 أيام', icon: '🏢', status: 'متاح', online: true },
  { id: 'TX-001', name: 'دفع الضريبة السنوية', nameEn: 'Annual Tax Payment', category: 'المالية', ministry: 'المالية', fee: 0, feeUsd: 0, time: 'فوري', icon: '💰', status: 'متاح', online: true },
  { id: 'HC-001', name: 'بطاقة التأمين الصحي', nameEn: 'Health Insurance Card', category: 'الصحة', ministry: 'الصحة', fee: 0, feeUsd: 0, time: '7 أيام', icon: '🏥', status: 'متاح', online: true },
  { id: 'ED-001', name: 'تصديق الشهادة الدراسية', nameEn: 'Educational Certificate Authentication', category: 'التعليم', ministry: 'التعليم', fee: 10000, feeUsd: 0.76, time: '3 أيام', icon: '🎓', status: 'متاح', online: true },
  { id: 'VR-001', name: 'تسجيل المركبة', nameEn: 'Vehicle Registration', category: 'المرور', ministry: 'النقل', fee: 25000, feeUsd: 1.9, time: '5 أيام', icon: '🚙', status: 'متاح', online: true },
  { id: 'PR-001', name: 'استعلام التسجيل العقاري', nameEn: 'Property Registration Inquiry', category: 'العقارات', ministry: 'العدل', fee: 5000, feeUsd: 0.38, time: 'فوري', icon: '🏠', status: 'متاح', online: true },
  { id: 'EL-001', name: 'طلب توصيل الكهرباء', nameEn: 'Electricity Connection Request', category: 'الخدمات', ministry: 'الكهرباء', fee: 50000, feeUsd: 3.8, time: '14 يوم', icon: '⚡', status: 'قريباً', online: false },
  { id: 'WT-001', name: 'طلب توصيل المياه', nameEn: 'Water Connection Request', category: 'الخدمات', ministry: 'الري', fee: 30000, feeUsd: 2.28, time: '14 يوم', icon: '💧', status: 'قريباً', online: false }
];

const MOCK_APPLICATIONS = [
  { id: 'APP-2026-001234', service: 'تجديد بطاقة الهوية', serviceId: 'ID-001', submitDate: '2026-04-28', updateDate: '2026-04-30', status: 'قيد المراجعة', statusEn: 'under_review', step: 2, totalSteps: 4, fee: 5000, paid: true },
  { id: 'APP-2026-001189', service: 'شهادة الميلاد', serviceId: 'BC-001', submitDate: '2026-04-20', updateDate: '2026-04-20', status: 'مكتمل', statusEn: 'completed', step: 4, totalSteps: 4, fee: 2000, paid: true },
  { id: 'APP-2026-001156', service: 'تصديق الشهادة الدراسية', serviceId: 'ED-001', submitDate: '2026-04-15', updateDate: '2026-04-22', status: 'بانتظار المستندات', statusEn: 'pending_docs', step: 1, totalSteps: 3, fee: 10000, paid: false },
  { id: 'APP-2026-001099', service: 'رخصة القيادة', serviceId: 'DR-001', submitDate: '2026-04-05', updateDate: '2026-04-10', status: 'مرفوض', statusEn: 'rejected', step: 0, totalSteps: 4, fee: 15000, paid: true },
];

const MOCK_TRANSACTIONS = [
  { id: 'PAY-2026-789012', date: '2026-04-28', service: 'تجديد بطاقة الهوية', amount: 5000, method: 'بطاقة مصرفية', status: 'مكتمل', ref: 'APP-2026-001234' },
  { id: 'PAY-2026-788901', date: '2026-04-20', service: 'شهادة الميلاد', amount: 2000, method: 'محفظة رقمية', status: 'مكتمل', ref: 'APP-2026-001189' },
  { id: 'PAY-2026-788756', date: '2026-04-05', service: 'رخصة القيادة', amount: 15000, method: 'تحويل بنكي', status: 'مكتمل', ref: 'APP-2026-001099' },
];

const MOCK_DATA_ACCESS_LOG = [
  { id: 'LOG-001', date: '2026-05-04 09:23', accessor: 'وزارة الصحة', accessorEn: 'Ministry of Health', purpose: 'التحقق من أهلية التأمين الصحي', fields: ['الاسم', 'تاريخ الميلاد', 'المحافظة'], legalBasis: 'طلب المواطن', consent: true },
  { id: 'LOG-002', date: '2026-05-02 14:45', accessor: 'وزارة التعليم', accessorEn: 'Ministry of Education', purpose: 'التحقق من بيانات التسجيل الجامعي', fields: ['الاسم', 'رقم الهوية'], legalBasis: 'طلب المواطن', consent: true },
  { id: 'LOG-003', date: '2026-04-28 11:10', accessor: 'بوابة الدفع الحكومي', accessorEn: 'Gov. Payment Gateway', purpose: 'التحقق من الهوية قبل الدفع', fields: ['رقم الهوية'], legalBasis: 'متطلبات قانونية', consent: false },
  { id: 'LOG-004', date: '2026-04-25 16:30', accessor: 'وزارة الداخلية', accessorEn: 'Ministry of Interior', purpose: 'تجديد بطاقة الهوية', fields: ['جميع البيانات الشخصية'], legalBasis: 'خدمة حكومية', consent: true },
];

const MOCK_MINISTRY_STATS = {
  totalApplications: 142850,
  pendingApplications: 8234,
  completedToday: 1456,
  rejectedToday: 87,
  avgProcessingDays: 2.3,
  citizenSatisfaction: 84,
  onlineVsTotal: 78,
  pendingByService: [
    { service: 'تجديد الهوية', count: 3241, pct: 39 },
    { service: 'جواز السفر', count: 2105, pct: 26 },
    { service: 'رخصة القيادة', count: 1654, pct: 20 },
    { service: 'أخرى', count: 1234, pct: 15 }
  ]
};

const MOCK_CYBER_ALERTS = [
  { id: 'CA-2026-089', date: '2026-05-04 03:17', level: 'critical', type: 'DDoS Attack', target: 'بوابة الخدمات الإلكترونية', source: 'IPs متعددة — مجهولة', status: 'تم التخفيف', details: 'بيانات محاكاة: نحو 850 ألف طلب/دقيقة تم حجبها بمرشح DDoS — للأغراض التوضيحية فقط' },
  { id: 'CA-2026-088', date: '2026-05-03 14:52', level: 'high', type: 'Brute Force Attempt', target: 'نظام المصادقة NDID', source: '185.220.x.x', status: 'محجوب', details: 'بيانات محاكاة: 4,200 محاولة تسجيل دخول فاشلة في 10 دقائق — تم الحجب — للأغراض التوضيحية فقط' },
  { id: 'CA-2026-087', date: '2026-05-03 09:30', level: 'medium', type: 'Phishing Campaign', target: 'موظفو الوزارات', source: 'بريد إلكتروني مزيف', status: 'قيد التحقيق', details: 'حملة تصيد تستهدف موظفي وزارة المالية — تم إخطار الوزارة' },
  { id: 'CA-2026-086', date: '2026-05-02 16:45', level: 'low', type: 'Vulnerability Scan', target: 'منافذ الشبكة الخارجية', source: 'Shodan crawler', status: 'مُراقب', details: 'فحص روتيني — لا توجد نقاط ضعف مكشوفة' },
  { id: 'CA-2026-085', date: '2026-05-01 11:20', level: 'high', type: 'Malware Detection', target: 'محطة عمل وزارة التعليم', source: 'داخلي', status: 'معالج', details: 'تم عزل الجهاز وإجراء التحليل الجنائي — تروجان مُزال' },
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Format a number with thousands separator
 */
function formatNumber(num) {
  return new Intl.NumberFormat('ar-SY').format(num);
}

/**
 * Format currency in Syrian Pounds
 */
function formatCurrency(amount) {
  return `${formatNumber(amount)} ل.س`;
}

/**
 * Get status badge HTML
 */
function getStatusBadge(status) {
  const statusMap = {
    'مكتمل': 'badge-success',
    'completed': 'badge-success',
    'قيد المراجعة': 'badge-info',
    'under_review': 'badge-info',
    'بانتظار المستندات': 'badge-warning',
    'pending_docs': 'badge-warning',
    'مرفوض': 'badge-danger',
    'rejected': 'badge-danger',
    'متاح': 'badge-success',
    'قريباً': 'badge-warning',
    'محجوب': 'badge-success',
    'تم التخفيف': 'badge-success',
    'قيد التحقيق': 'badge-warning',
    'مُراقب': 'badge-info',
    'معالج': 'badge-success',
  };
  const cls = statusMap[status] || 'badge-primary';
  return `<span class="badge ${cls}">${status}</span>`;
}

/**
 * Get cyber alert level class
 */
function getCyberLevelClass(level) {
  const map = {
    'critical': 'alert-level-critical',
    'high': 'alert-level-high',
    'medium': 'alert-level-medium',
    'low': 'alert-level-low'
  };
  return map[level] || '';
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const step = (target / duration) * 16;
  let current = start;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = formatNumber(Math.floor(current));
  }, 16);
}

/**
 * Show a toast notification
 */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  // Build DOM nodes so the message is treated as plain text, not HTML
  // (avoids any DOM-text-as-HTML reinterpretation).
  const iconSpan = document.createElement('span');
  iconSpan.className = 'toast-icon';
  iconSpan.textContent = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  const msgSpan = document.createElement('span');
  msgSpan.textContent = message;
  toast.appendChild(iconSpan);
  toast.appendChild(document.createTextNode(' '));
  toast.appendChild(msgSpan);

  const style = `
    position: fixed; bottom: 24px; right: 24px; z-index: 9999;
    background: ${type === 'success' ? '#388e3c' : type === 'error' ? '#c62828' : '#1565c0'};
    color: white; padding: 12px 20px; border-radius: 8px;
    display: flex; align-items: center; gap: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    font-size: 0.875rem; font-weight: 600;
    animation: slideIn 0.3s ease;
  `;
  toast.style.cssText = style;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// SIDEBAR NAVIGATION
// ============================================================

function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage) {
      item.classList.add('active');
    }
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', toggleSidebar);
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.remove('open');
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();

  // Animate stat counters on page load
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    animateCounter(el, target);
  });
});
