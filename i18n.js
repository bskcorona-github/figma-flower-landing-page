// 多言語対応システム
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                // Navigation
                nav_home: "Home",
                nav_services: "Services", 
                nav_products: "Products",
                nav_about: "About Us",
                nav_contact: "Contact",
                
                // Hero Section
                hero_category: "ARTIFICIAL FLOWER",
                hero_title: "Unique Flowers delivered to your doorstep",
                hero_description: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
                hero_button: "Shop Now",
                
                // Services Section
                services_title: "Our Services",
                service_shopping: "Free Shopping",
                service_shopping_desc: "Cost on all order $0.00",
                service_delivery: "Free Delivery",
                service_delivery_desc: "We offer FREE deliver",
                service_wrapping: "Gift Wrapping",
                service_wrapping_desc: "We offer FREE deliver",
                
                // Products Section
                products_category: "PRODUCTS",
                products_title_monthly: "This month's top selling Product",
                product_1_title: "Premium Rose Bouquet",
                product_2_title: "Spring Garden Mix",
                product_3_title: "Elegant Lily Arrangement",
                product_description: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
                add_to_cart: "Add to Cart",
                
                // Deals Section
                deals_category: "OFFERS",
                deals_title: "Deal of the day",
                deals_timer_text: "Hurry up! Offer ends in:",
                deals_days: "Days",
                deals_hours: "Hours", 
                deals_mins: "Mins",
                deals_secs: "Secs",
                deal_title: "Wall hanging flower/ bouquet",
                deal_description: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
                
                // Why Choose Section
                why_choose_category: "PRODUCTS",
                why_choose_title: "Why choose Our Flowers",
                feature_lifetime: "Lifetime Use",
                feature_lifetime_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                feature_quality: "Best Quality",
                feature_quality_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                feature_eco: "Eco-friendly",
                feature_eco_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                feature_chemical: "Chemical Free",
                feature_chemical_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                feature_customization: "Customization",
                feature_customization_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                feature_wall_hanging: "Wall hanging flower/ bouquet",
                feature_wall_hanging_desc: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
                
                // Collection Section
                collection_category: "COLLECTION",
                collection_title: "Our Flower Collection",
                
                // Testimonials Section
                testimonials_category: "TESTIMONIALS",
                testimonials_title: "What Our Customers Say",
                testimonial_text: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui. Consectetur adipiscing elit ut aliquam.",
                testimonial_author: "Sarah Johnson",
                testimonial_role: "Happy Customer",
                
                // Collection Section
                collection_category: "Collection",
                collection_title: "Our Best Collections",
                
                // Testimonials Section
                testimonials_category: "TESTIMONIALS",
                testimonials_title: "What our Clients Say",
                testimonial_text: "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
                testimonial_author: "Sarah Johnson",
                testimonial_role: "Happy Customer",
                
                // Footer
                footer_navigation: "Navigation",
                footer_products: "Products",
                footer_payment: "Payment Method",
                footer_app: "Get Online",
                footer_copyright: "© 2024 all right reserved by bkalpdesign",
                footer_design: "Design By- Bkalp design",
                
                // Language Toggle
                lang_switch: "日本語"
            },
            ja: {
                // Navigation
                nav_home: "ホーム",
                nav_services: "サービス",
                nav_products: "商品",
                nav_about: "会社概要",
                nav_contact: "お問い合わせ",
                
                // Hero Section
                hero_category: "アーティフィシャルフラワー",
                hero_title: "あなたの玄関まで届く特別な花々",
                hero_description: "特別な日を彩る美しい花々。心を込めてお作りした自慢のアレンジメントをお楽しみください。",
                hero_button: "今すぐ購入",
                
                // Services Section
                services_title: "私たちのサービス",
                service_shopping: "送料無料",
                service_shopping_desc: "全商品送料無料でお届けします",
                service_delivery: "配送無料",
                service_delivery_desc: "無料配送サービスをご提供しています",
                service_wrapping: "ギフト包装",
                service_wrapping_desc: "無料でギフト包装いたします",
                
                // Products Section
                products_category: "商品",
                products_title_monthly: "今月のベストセラー商品",
                product_1_title: "プレミアムローズブーケ",
                product_2_title: "スプリングガーデンミックス",
                product_3_title: "エレガントリリーアレンジメント",
                product_description: "特別な日を彩る美しい花々。心を込めてお作りした自慢のアレンジメントです。",
                add_to_cart: "カートに追加",
                
                // Deals Section
                deals_category: "特別オファー",
                deals_title: "本日限定セール",
                deals_timer_text: "お急ぎください！セール終了まで：",
                deals_days: "日",
                deals_hours: "時間",
                deals_mins: "分",
                deals_secs: "秒",
                deal_title: "壁掛け花束・ブーケ",
                deal_description: "お部屋を華やかに彩る壁掛けタイプの花束。長期間美しさを保つ特別なアレンジメントです。",
                
                // Why Choose Section
                why_choose_category: "商品",
                why_choose_title: "私たちの花を選ぶ理由",
                feature_lifetime: "長期利用",
                feature_lifetime_desc: "適切なケアで長期間美しさを保つことができます。",
                feature_quality: "最高品質",
                feature_quality_desc: "厳選された最高品質の花材のみを使用しています。",
                feature_eco: "環境に優しい",
                feature_eco_desc: "持続可能な栽培方法で育てられた花を使用しています。",
                feature_chemical: "無農薬",
                feature_chemical_desc: "化学薬品を使わない安全で自然な花をお届けします。",
                feature_customization: "カスタマイズ",
                feature_customization_desc: "お客様のご要望に合わせたオリジナルアレンジメント。",
                feature_wall_hanging: "壁掛け花束・ブーケ",
                feature_wall_hanging_desc: "お部屋のインテリアとして楽しめる壁掛けタイプ。",
                
                // Collection Section
                collection_category: "コレクション",
                collection_title: "フラワーコレクション",
                
                // Testimonials Section
                testimonials_category: "お客様の声",
                testimonials_title: "お客様からのメッセージ",
                testimonial_text: "とても美しい花をありがとうございました。特別な日を素晴らしいものにしてくれました。また利用させていただきます。",
                testimonial_author: "田中 花子",
                testimonial_role: "満足のお客様",
                
                // Collection Section
                collection_category: "コレクション",
                collection_title: "ベストコレクション",
                
                // Testimonials Section
                testimonials_category: "お客様の声",
                testimonials_title: "お客様からのメッセージ",
                testimonial_text: "とても美しい花をありがとうございました。特別な日を素晴らしいものにしてくれました。品質も素晴らしく、また利用させていただきます。心からおすすめできるフラワーショップです。",
                testimonial_author: "田中 花子",
                testimonial_role: "満足のお客様",
                
                // Footer
                footer_navigation: "ナビゲーション",
                footer_products: "商品",
                footer_payment: "お支払い方法",
                footer_app: "オンラインで購入",
                footer_copyright: "© 2024 all right reserved by bkalpdesign",
                footer_design: "Design By- Bkalp design",
                
                // Language Toggle
                lang_switch: "English"
            }
        };
    }

    // 現在の言語を取得
    getCurrentLang() {
        return this.currentLang;
    }

    // 言語を設定
    setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateContent();
    }

    // 翻訳テキストを取得
    t(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    }

    // ページ内容を更新
    updateContent() {
        // data-i18n属性を持つ要素を全て更新
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = this.t(key);
            } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = this.t(key);
            } else {
                element.textContent = this.t(key);
            }
        });

        // 言語切り替えボタンのテキストを更新
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = this.t('lang_switch');
        }

        // HTML lang属性を更新
        document.documentElement.lang = this.currentLang;
    }

    // 言語を切り替え
    toggleLang() {
        const newLang = this.currentLang === 'en' ? 'ja' : 'en';
        this.setLang(newLang);
    }

    // 初期化
    init() {
        this.updateContent();
        
        // 言語切り替えボタンのイベントリスナーを設定
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLang());
        }
    }
}

// グローバルインスタンスを作成
window.i18n = new I18n();
