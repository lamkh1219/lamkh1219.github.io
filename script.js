// 翻譯資料物件
const translations = {
    'header-h1': {
        'zh-Hant': 'Project Portfolio',
        'en': 'Project Portfolio'
    },
    'header-p': {
        'zh-Hant': '探索我的開源專案與創新的網頁應用程式。每個作品皆用心打造，並注重細節與使用者體驗。',
        'en': 'Explore my open-source projects and innovative web applications. Each project is crafted with attention to detail and user experience.'
    },
    'lang-toggle-btn': {
        'zh-Hant': 'Switch to English',
        'en': '切換為中文' // 切換為中文時，按鈕顯示中文
    },
    // --- 專案 1 (QR Code Generator) ---
    'proj1-h2': {
        'zh-Hant': 'QR Code 生成器',
        'en': 'QR Code Generator'
    },
    'proj1-p': {
        'zh-Hant': '這是一個響應式網頁應用程式，能夠從文字、網址或任何內容生成 QR Code。生成器支援自訂 QR Code 顏色，並提供將生成的 QR Code 下載為圖片的功能。是分享聯絡資訊、網站或 Wi-Fi 憑證的完美工具。',
        'en': 'A responsive web application that generates QR codes from text, URLs, or other content. The generator allows customization of QR code colors and supports downloading the generated QR code as an image. Perfect for sharing contact information, websites, or Wi-Fi credentials.'
    },
    'tag-responsive': {
        'zh-Hant': '響應式設計',
        'en': 'Responsive Design'
    },
    // --- 專案 2 (MOVES Teaching Assistant) ---
    'proj2-h2': {
        'zh-Hant': 'MOVES 教學助手',
        'en': 'MOVES Teaching Assistant'
    },
    'proj2-p': {
        'zh-Hant': '這是一個 AI 驅動的教學平台，旨在協助教師根據 MOVES 教學理論框架，創建高效的課程規劃。此工具為開發引人入勝的學習體驗提供結構化指導，能為教育工作者節省大量備課時間。',
        'en': 'An AI-powered platform that helps teachers create effective lesson plans using the MOVES teaching theory framework. This tool provides structured guidance for developing engaging learning experiences, saving educators hours of preparation time.'
    },
    'tag-ai-integration': {
        'zh-Hant': 'AI 整合',
        'en': 'AI Integration'
    },
    'tag-edutech': {
        'zh-Hant': '教育科技',
        'en': 'Education Tech'
    },
    'tag-teaching-tools': {
        'zh-Hant': '教學工具',
        'en': 'Teaching Tools'
    },
    'tag-ux': {
        'zh-Hant': '使用者體驗 (UX)',
        'en': 'User Experience (UX)'
    },
    // --- 專案 3 (每日活動點名查詢系統 - 更新) ---
    'proj3-h2': {
        'zh-Hant': '每日活動點名查詢系統',
        'en': 'Course Roll-Call Inquiry System'
    },
    'proj3-p': {
        'zh-Hant': '這是一個專為學校設計的 **「每日活動點名查詢工具」**。使用者只需點選日期，系統會立刻顯示當天所有課後活動（如球隊、興趣班），以及每項活動的**學生名單**（包含姓名和班級）。它能幫助老師和管理員快速掌握當天所有留校學生的去向，讓點名和課務安排變得非常簡單。',
        'en': 'This is a **Daily Activity Roll-Call System** designed for schools. Users select a date, and the system instantly shows all after-school activities (like teams and clubs) scheduled for that day, along with the **student roster** (name and class) for each activity. It helps teachers and staff quickly track all students staying late, making roll-call and scheduling much simpler.'
    },
    'tag-project-management': { // 更改為新意思：課務管理
        'zh-Hant': '課務管理',
        'en': 'Course Management'
    },
    'tag-agile': { // 更改為新意思：學生點名
        'zh-Hant': '學生點名',
        'en': 'Student Roll-Call'
    },
    'tag-data-processing': { // 新增一個標籤
        'zh-Hant': '資料處理',
        'en': 'Data Processing'
    },
    // --- 專案 4 (GitHub Pages Deploy Instructions) ---
    'proj4-h2': {
        'zh-Hant': 'GitHub Pages 部署指南',
        'en': 'GitHub Pages Deploy Instructions'
    },
    'proj4-p': {
        'zh-Hant': '一個簡潔且結構化的指南，提供了使用 GitHub Pages 部署靜態網頁應用程式的逐步說明。這個資源簡化了部署過程，使初學者能夠輕鬆地從他們的 GitHub 儲存庫中將專案即時託管上線。',
        'en': 'A concise and structured guide providing step-by-step instructions on deploying static web applications using GitHub Pages. This resource simplifies the deployment process, making it easy for beginners to host their projects live directly from their GitHub repositories.'
    },
    'tag-tutorials': {
        'zh-Hant': '教學文件',
        'en': 'Tutorials'
    },
    'tag-deployment': {
        'zh-Hant': '部署技術',
        'en': 'Deployment'
    },
    // --- 專案 5 (Course Inquiry System) ---
    'proj5-h2': {
        'zh-Hant': '課程查詢系統',
        'en': 'Course Inquiry System'
    },
    'proj5-p': {
        'zh-Hant': '一個動態網頁應用程式，允許使用者透過老師的名字快速查詢當天的課堂安排。此系統對於行政人員和代課協調員至關重要，能為管理課程變動、安排代課和日常運營規劃提供高效工具。',
        'en': 'A dynamic web application allowing users to quickly look up daily class schedules based on a teacher\'s name. This system is crucial for administrators and substitute coordinators, providing efficient tools for managing class changes, scheduling substitutions, and daily operational planning.'
    },
    'tag-data-retrieval': {
        'zh-Hant': '資料檢索',
        'en': 'Data Retrieval'
    },
    'tag-scheduling': {
        'zh-Hant': '排課系統',
        'en': 'Scheduling'
    },
    'tag-admin-tool': {
        'zh-Hant': '行政工具',
        'en': 'Admin Tool'
    },
    // --- 底部/通用 ---
    'link-view-project': {
        'zh-Hant': '檢視專案演示',
        'en': 'View Project Demo'
    },
    'link-github': {
        'zh-Hant': '前往 GitHub 探索更多專案',
        'en': 'Explore more on GitHub'
    },
    'footer-copyright': {
        'zh-Hant': '&copy; 2025 專案作品集 | 用熱情與細節精心打造',
        'en': '&copy; 2025 Project Portfolio | Crafted with passion and attention to detail'
    }
};

// 設置預設語言為英文 (en)
let currentLang = 'en';

// 翻譯函式
function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });
    // 更新 html lang 屬性
    document.documentElement.lang = lang;
}

// 切換語言的事件處理函式
function toggleLanguage() {
    // 切換語言
    currentLang = (currentLang === 'zh-Hant') ? 'en' : 'zh-Hant';
    
    // 執行翻譯
    translatePage(currentLang);
    
    // 更新按鈕文字
    const toggleButton = document.getElementById('lang-toggle');
    if (currentLang === 'en') {
        // 如果當前是英文，按鈕顯示「切換為中文」
        toggleButton.innerHTML = translations['lang-toggle-btn']['en'];
    } else {
        // 如果當前是中文，按鈕顯示「Switch to English」
        toggleButton.innerHTML = translations['lang-toggle-btn']['zh-Hant'];
    }
}

// --- DOMContentLoaded 事件處理器 (包含動畫) ---
document.addEventListener('DOMContentLoaded', function() {
    
    // 確保頁面內容在載入時是英文 (en)
    translatePage('en'); 

    // 綁定按鈕事件
    const toggleButton = document.getElementById('lang-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleLanguage);
    }

    // 確保初始狀態按鈕文字正確顯示「切換為中文」
    if (toggleButton && currentLang === 'en') {
        toggleButton.innerHTML = translations['lang-toggle-btn']['en'];
    }

    // Enhanced animations 
    const cards = document.querySelectorAll('.project-card');
    
    // Card animations
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 + index * 200);
    });
    
    // Header animation
    const header = document.querySelector('.header-content');
    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";
    header.style.transition = "all 0.8s ease";
    
    setTimeout(() => {
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 200);
    
    // Background particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 30 + 10;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        const colors = [
            'rgba(59, 130, 246, 0.08)',
            'rgba(139, 92, 246, 0.08)',
            'rgba(236, 72, 153, 0.08)',
            'rgba(14, 165, 233, 0.08)'
        ];
        
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(particle);
        
        // Animate particle
        const animation = particle.animate(
            [
                { transform: 'translate(0, 0)', opacity: 0.5 },
                { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 5000 + 5000,
                easing: 'ease-in-out'
            }
        );
        
        animation.onfinish = () => {
            particle.remove();
            createParticle();
        };
    }
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        createParticle();
    }
});
