 // تعريف كلاسات الصفحات
 class Page {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.element = document.getElementById(`${id}-page`);
    }
    
    show() {
        document.title = this.title + " - الموقع الرئيسي";
        // إخفاء جميع الصفحات أولاً
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        // إظهار الصفحة الحالية
        this.element.classList.add('active');
    }
}

// تعريف الصفحات
const pages = {
    home: new Page('home', 'الرئيسية'),
    courses: new Page('courses', 'الكورسات'),
    about: new Page('about', 'من نحن'),
    services: new Page('services', 'الخدمات'),
    createstud: new Page('createstud', 'تسجيل حساب جديد'),
    login: new Page('login', 'تسجيل الدخول'),
    contact: new Page('contact', 'اتصل بنا')
};

// عناصر DOM
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const footerlinks = document.getElementById('footer-links');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// فتح القائمة الجانبية
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
});

// إغلاق القائمة الجانبية
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// إغلاق القائمة عند النقر خارجها
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// تغيير الصفحات عند النقر على الروابط
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        pages[pageId].show();
        
        // إغلاق القائمة بعد اختيار الصفحة
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
});

// عرض الصفحة الرئيسية عند تحميل الموقع
window.addEventListener('DOMContentLoaded', () => {
    pages.home.show();
});

// الكورسات الشائعة
const popularCourses = [
    {
        id: 1,
        title: "تعلم برمجة الويب",
        description: "تعلم أساسيات تطوير الويب باستخدام HTML, CSS و JavaScript",
        image: "images/course1.jpg",
        instructor: "أحمد محمد",
        duration: "6 أسابيع",
        price: "مجاني"
    },
    {
        id: 2,
        title: "تحليل البيانات",
        description: "أساسيات تحليل البيانات باستخدام Python و Pandas",
        image: "images/course2.jpg",
        instructor: "سارة عبدالله",
        duration: "8 أسابيع",
        price: "199 ر.س"
    },
    {
        id: 3,
        title: "التسويق الرقمي",
        description: "استراتيجيات التسويق الرقمي الفعال لزيادة المبيعات",
        image: "images/course3.jpg",
        instructor: "خالد سالم",
        duration: "4 أسابيع",
        price: "149 ر.س"
    }
];

// عرض الكورسات الشائعة في الصفحة الرئيسية
function displayPopularCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    const coursesGridAll = document.querySelector('.courses-gridAll');
    
    if (coursesGrid ||coursesGridAll) {
        let coursesHTML = '';
        
        popularCourses.forEach(course => {
            coursesHTML += `
                <div class="course-card">
                    <div class="course-image">
                        <img src="${course.image}" alt="${course.title}">
                    </div>
                    <div class="course-info">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <div class="course-meta">
                            <span><i class="fas fa-user"></i> ${course.instructor}</span>
                            <span><i class="fas fa-clock"></i> ${course.duration}</span>
                        </div>
                        <div class="course-price">${course.price}</div>
                    </div>
                </div>
            `;
        });
        
        coursesGrid.innerHTML = coursesHTML;
        coursesGridAll.innerHTML=coursesHTML;
    }
}

// تنفيذ الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayPopularCourses();
    handleLogin();
    handleRegister();
    
    // إضافة تأثيرات للتنقل بين الأقسام في صفحة تفاصيل الكورس
    const courseTabs = document.querySelectorAll('.course-tab');
    
    if (courseTabs.length > 0) {
        courseTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                courseTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // هنا يمكنك إضافة كود لعرض المحتوى المناسب لكل قسم
            });
        });
    }
});
