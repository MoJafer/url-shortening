import brandRecognitionIcon from './assets/images/icon-brand-recognition.svg'
import detailedRecordsIcon from './assets/images/icon-detailed-records.svg'
import fullyCustomizableIcon from './assets/images/icon-fully-customizable.svg'

export const menu = [
    { id: 'nav-features', title: 'المميزات' },
    { id: 'nav-pricing', title: 'الأسعار' },
    { id: 'nav-resources', title: 'المصادر' },
]

export const statistics = [
    { id: 'recognition', icon: brandRecognitionIcon, title: 'رعاية علامتك التجارية', text: 'تعزيز التعرف على علامتك التجارية مع كل نقرة لا تعني الروابط العامة شيئًا. الروابط ذات العلامات التجارية تساعد في غرس الثقة في المحتوى الخاص بك' },
    { id: 'recordsrecords', icon: detailedRecordsIcon, title: 'سجلات مفصلة', text: 'نظرة مفصلة حول النقرات على الروابط الخاصة بك، ومعرفة متى وأين يشارك الأشخاص المحتوى الخاص بك في تقارير بشكل مفصل' },
    { id: 'customizable', icon: fullyCustomizableIcon, title: 'تخصيص كامل', text: 'تحسين الوعي بالعلامة التجارية وقابلية اكتشاف المحتوى من خلال الروابط القابلة للتخصيص التي تزيد من تفاعل الجمهور' },
]

export const footerLinks = [
    {
        id: 'features', title: 'المميزات', subLinks:
            [
                { id: 'likn-shortening', title: 'اختصار الروابط', href: '#!' },
                { id: 'branded-links', title: 'روابط العلامة التجارية', href: '#!' },
                { id: 'analytics', title: 'التحليلات', href: '#!' },
            ]
    },
    {
        id: 'resources', title: 'روابط', subLinks:
            [
                { id: 'blog', title: 'المدونة', href: '#!' },
                { id: 'developers', title: 'المطورين', href: '#!' },
                { id: 'support', title: 'الدعم الفني', href: '#!' },
            ]
    },
    {
        id: 'company', title: 'الشركة', subLinks:
            [
                { id: 'about', title: 'عن الشركة', href: '#!' },
                { id: 'ourt-team', title: 'فريق العمل', href: '#!' },
                { id: 'careers', title: 'التوظيف', href: '#!' },
                { id: 'contact', title: 'تواصل معنا', href: '#!' },
            ]
    },
]
