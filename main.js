const i18n = {
    ko: {
        "nav-home": "홈", "nav-about": "소개", "nav-contact": "문의", "nav-privacy": "개인정보보호", "nav-terms": "이용약관",
        "header-title": "얼티밋 드림 트래블", "header-subtitle": "가상 포토 스튜디오 - 클릭 한 번으로 세계 여행!",
        "studio-title": "📸 가상 포토 스튜디오", "studio-selected": "선택된 여행지:", "studio-processing": "배경 제거 중... (AI)",
        "studio-tip": "* 인물 사진이 선명할수록 배경 제거 결과가 좋습니다.",
        "ctrl-size": "📏 크기:", "ctrl-horiz": "↔️ 좌우:", "ctrl-vert": "↕️ 상하:", "ctrl-precision": "✨ 정밀도:",
        "btn-reset": "초기화", "btn-upload": "👤 내 사진 업로드", "btn-save": "💾 사진 저장", "btn-exit": "❌ 스튜디오 종료",
        "btn-close": "닫기", "btn-travel": "여기로 여행 (합성)", "btn-details": "상세 정보",
        "search-placeholder": "도시 또는 목적지 검색...",
        "filter-all": "전체", "filter-asia": "아시아", "filter-europe": "유럽", "filter-america": "아메리카", "filter-other": "기타",
        "alert-error": "이미지 처리에 실패했습니다. 사진 크기를 줄이거나 다른 사진으로 시도해 주세요."
    },
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-contact": "Contact", "nav-privacy": "Privacy", "nav-terms": "Terms",
        "header-title": "Ultimate Dream Travel", "header-subtitle": "Virtual Photo Studio - Travel the World in a Click!",
        "studio-title": "📸 Virtual Photo Studio", "studio-selected": "Selected Destination:", "studio-processing": "Removing Background... (AI)",
        "studio-tip": "* Clearer person photos yield better background removal results.",
        "ctrl-size": "📏 Size:", "ctrl-horiz": "↔️ Horiz:", "ctrl-vert": "↕️ Vert:", "ctrl-precision": "✨ Precision:",
        "btn-reset": "Reset", "btn-upload": "👤 Upload My Photo", "btn-save": "💾 Save Photo", "btn-exit": "❌ Exit Studio",
        "btn-close": "Close", "btn-travel": "Travel Here (Photo)", "btn-details": "Details",
        "search-placeholder": "Search city or destination...",
        "filter-all": "All", "filter-asia": "Asia", "filter-europe": "Europe", "filter-america": "America", "filter-other": "Other",
        "alert-error": "Failed to process image. Please try a smaller photo or a different one."
    },
    ja: {
        "nav-home": "ホーム", "nav-about": "紹介", "nav-contact": "お問い合わせ", "nav-privacy": "個人情報保護", "nav-terms": "利用規約",
        "header-title": "アルティメット・ドリーム・トラベル", "header-subtitle": "仮想フォトスタジオ - クリック一つで世界旅行！",
        "studio-title": "📸 仮想フォトスタジオ", "studio-selected": "選択された目的地:", "studio-processing": "背景を削除中... (AI)",
        "studio-tip": "* 人物写真が鮮明であるほど、背景削除の結果が良くなります。",
        "ctrl-size": "📏 サイズ:", "ctrl-horiz": "↔️ 左右:", "ctrl-vert": "↕️ 上下:", "ctrl-precision": "✨ 精度:",
        "btn-reset": "初期化", "btn-upload": "👤 写真をアップロード", "btn-save": "💾 写真を保存", "btn-exit": "❌ スタジオ終了",
        "btn-close": "閉じる", "btn-travel": "ここへ旅行 (合成)", "btn-details": "詳細情報",
        "search-placeholder": "都市または目的地を検索...",
        "filter-all": "すべて", "filter-asia": "アジア", "filter-europe": "ヨーロッパ", "filter-america": "アメリカ", "filter-other": "その他",
        "alert-error": "画像の処理に失敗しました。写真のサイズを小さくするか、別の写真で試してください。"
    },
    zh: {
        "nav-home": "首页", "nav-about": "关于我们", "nav-contact": "联系我们", "nav-privacy": "隐私政策", "nav-terms": "使用条款",
        "header-title": "终极梦想旅游", "header-subtitle": "虚拟摄影棚 - 点击一下即可环游世界！",
        "studio-title": "📸 虚拟摄影棚", "studio-selected": "选定的目的地:", "studio-processing": "正在移除背景... (AI)",
        "studio-tip": "* 人物照片越清晰，背景移除效果越好。",
        "ctrl-size": "📏 大小:", "ctrl-horiz": "↔️ 左右:", "ctrl-vert": "↕️ 上下:", "ctrl-precision": "✨ 精度:",
        "btn-reset": "重置", "btn-upload": "👤 上传我的照片", "btn-save": "💾 保存照片", "btn-exit": "❌ 退出摄影棚",
        "btn-close": "关闭", "btn-travel": "去这里旅行 (合成)", "btn-details": "详细信息",
        "search-placeholder": "搜索城市或目的地...",
        "filter-all": "全部", "filter-asia": "亚洲", "filter-europe": "欧洲", "filter-america": "美洲", "filter-other": "其他",
        "alert-error": "图片处理失败。请尝试缩小照片尺寸或使用其他照片。"
    }
};

let currentLang = 'en';

const places = [
    { id: "paris", region: "Europe", name: { ko: "파리, 프랑스", en: "Paris, France", ja: "パリ、フランス", zh: "巴黎，法国" }, desc: { ko: "예술과 낭만의 도시.", en: "City of art and romance.", ja: "芸術とロマンの街。", zh: "艺术与浪漫之都。" }},
    { id: "london", region: "Europe", name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" }, desc: { ko: "유서 깊은 글로벌 수도.", en: "Historic global capital.", ja: "歴史ある首都。", zh: "历史悠久的首都。" }},
    { id: "rome", region: "Europe", name: { ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ、イタリア", zh: "罗马，意大利" }, desc: { ko: "고대 역사의 중심지.", en: "Eternal city of history.", ja: "永遠の歴史の街。", zh: "永恒的历史之城。" }},
    { id: "seoul", region: "Asia", name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル、韓国", zh: "首尔，韩国" }, desc: { ko: "전통과 현대의 공존.", en: "Tradition meets modern.", ja: "伝統と現代の共存。", zh: "传统与现代共存。" }},
    { id: "tokyo", region: "Asia", name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" }, desc: { ko: "활기찬 대도시.", en: "Vibrant metropolis.", ja: "活気ある大都市。", zh: "充满活力的都会。" }},
    { id: "new-york", region: "America", name: { ko: "뉴욕, 미국", en: "New York, USA", ja: "ニューヨーク、米国", zh: "纽约，美国" }, desc: { ko: "잠들지 않는 도시.", en: "The city never sleeps.", ja: "眠らない街。", zh: "不夜城。" }},
    { id: "bangkok", region: "Asia", name: { ko: "방콕, 태국", en: "Bangkok, Thailand", ja: "バンコク、タイ", zh: "曼谷，泰国" }, desc: { ko: "황금빛 사원의 도시.", en: "City of golden temples.", ja: "黄金の寺院の街。", zh: "金色寺庙之城。" }},
    { id: "sydney", region: "Other", name: { ko: "시드니, 호주", en: "Sydney, Australia", ja: "シドニー、豪州", zh: "悉尼，澳大利亚" }, desc: { ko: "오페라 하우스의 도시.", en: "Home of the Opera House.", ja: "オペラハウスの街。", zh: "歌剧院之乡。" }},
    { id: "dubai", region: "Other", name: { ko: "두바이, UAE", en: "Dubai, UAE", ja: "ドバイ、UAE", zh: "迪拜，阿联酋" }, desc: { ko: "미래형 사막 도시.", en: "Futuristic desert city.", ja: "未来的な砂漠の街。", zh: "未来的沙漠之城。" }},
    { id: "cairo", region: "Other", name: { ko: "카이로, 이집트", en: "Cairo, Egypt", ja: "カイロ、エジプト", zh: "开罗，埃及" }, desc: { ko: "피라미드의 고향.", en: "Land of the Pyramids.", ja: "ピラミッドの故郷。", zh: "金字塔之乡。" }},
    { id: "barcelona", region: "Europe", name: { ko: "바르셀로나, 스페인", en: "Barcelona, Spain", ja: "バルセロナ、スペイン", zh: "巴塞罗那，西班牙" }, desc: { ko: "가우디의 건축 예술.", en: "Gaudi's masterpiece city.", ja: "ガウディの建築の街。", zh: "高迪的建筑之城。" }},
    { id: "amsterdam", region: "Europe", name: { ko: "암스테르담, 네덜란드", en: "Amsterdam, Netherlands", ja: "アムステルダム、オランダ", zh: "阿姆斯特丹，荷兰" }, desc: { ko: "운하와 자전거의 도시.", en: "City of canals and bikes.", ja: "運河と自転車の街。", zh: "运河与自行车之城。" }},
    { id: "vienna", region: "Europe", name: { ko: "빈, 오스트리아", en: "Vienna, Austria", ja: "ウィーン、オーストリア", zh: "维也纳，奥地利" }, desc: { ko: "음악과 예술의 중심.", en: "City of music and art.", ja: "音楽と芸術の街。", zh: "音乐与艺术之城。" }},
    { id: "prague", region: "Europe", name: { ko: "프라하, 체코", en: "Prague, Czech Republic", ja: "プラハ、チェコ", zh: "布拉格，捷克" }, desc: { ko: "중세의 낭만.", en: "Medieval fairy tale city.", ja: "中世のロマンの街。", zh: "中世纪童话之城。" }},
    { id: "athens", region: "Europe", name: { ko: "아테네, 그리스", en: "Athens, Greece", ja: "アテネ、ギリシャ", zh: "雅典，希腊" }, desc: { ko: "민주주의의 요람.", en: "Birthplace of democracy.", ja: "民主主義の揺籃。", zh: "民主的发源地。" }},
    { id: "lisbon", region: "Europe", name: { ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン、ポルトガル", zh: "里斯本，葡萄牙" }, desc: { ko: "언덕 위 일곱 빛깔 도시.", en: "City of seven hills.", ja: "七つの丘の街。", zh: "七丘之城。" }},
    { id: "budapest", region: "Europe", name: { ko: "부다페스트, 헝가리", en: "Budapest, Hungary", ja: "ブダペスト、ハンガリー", zh: "布达佩斯，匈牙利" }, desc: { ko: "다뉴브의 진주.", en: "Pearl of the Danube.", ja: "ドナウの真珠。", zh: "多瑙河畔的明珠。" }},
    { id: "kyoto", region: "Asia", name: { ko: "교토, 일본", en: "Kyoto, Japan", ja: "京都、日本", zh: "京都，日本" }, desc: { ko: "전통 사찰과 정원.", en: "City of historic temples.", ja: "伝統ある寺院の街。", zh: "历史悠久的古寺之城。" }},
    { id: "osaka", region: "Asia", name: { ko: "오사카, 일본", en: "Osaka, Japan", ja: "大阪、日本", zh: "大阪，日本" }, desc: { ko: "미식과 열정의 도시.", en: "City of food and passion.", ja: "美食と情熱の街。", zh: "美食与热情的城市。" }},
    { id: "singapore", region: "Asia", name: { ko: "싱가포르", en: "Singapore", ja: "シンガポール", zh: "新加坡" }, desc: { ko: "청정 정원 도시.", en: "Clean garden city.", ja: "クリーンなガーデンシティ。", zh: "整洁的花园城市。" }},
    { id: "bali", region: "Asia", name: { ko: "발리, 인도네시아", en: "Bali, Indonesia", ja: "バリ、インドネシア", zh: "巴厘岛，印度尼西亚" }, desc: { ko: "신들의 섬.", en: "Island of the Gods.", ja: "神々の島。", zh: "众神之岛。" }},
    { id: "phuket", region: "Asia", name: { ko: "푸켓, 태국", en: "Phuket, Thailand", ja: "プーケット、タイ", zh: "普吉岛，泰国" }, desc: { ko: "안다만의 진주.", en: "Pearl of the Andaman.", ja: "アンダマンの真珠。", zh: "安达曼海的明珠。" }},
    { id: "hanoi", region: "Asia", name: { ko: "하노이, 베트남", en: "Hanoi, Vietnam", ja: "ハノイ、ベトナム", zh: "河内，越南" }, desc: { ko: "천년 역사의 수도.", en: "Thousand-year-old capital.", ja: "千年の歴史を持つ首都。", zh: "千年历史的古都。" }},
    { id: "kathmandu", region: "Asia", name: { ko: "카트만두, 네팔", en: "Kathmandu, Nepal", ja: "カトマンズ、ネパール", zh: "加德满都，尼泊尔" }, desc: { ko: "히말라야의 관문.", en: "Gateway to the Himalayas.", ja: "ヒマラヤへの門戸。", zh: "喜马拉雅山的门户。" }},
    { id: "la", region: "America", name: { ko: "로스앤젤레스, 미국", en: "Los Angeles, USA", ja: "ロサンゼルス、米国", zh: "洛杉矶，美国" }, desc: { ko: "할리우드의 본고장.", en: "Home of Hollywood.", ja: "ハリウッドの本場。", zh: "好莱坞之乡。" }},
    { id: "san-francisco", region: "America", name: { ko: "샌프란시스코, 미국", en: "San Francisco, USA", ja: "サンフランシスコ、米国", zh: "旧金山，美国" }, desc: { ko: "금문교의 도시.", en: "City of the Golden Gate.", ja: "ゴールデンゲートの街。", zh: "金门大桥之城。" }},
    { id: "las-vegas", region: "America", name: { ko: "라스베이거스, 미국", en: "Las Vegas, USA", ja: "ラスベガス、米国", zh: "拉斯维加斯，美国" }, desc: { ko: "세계 엔터테인먼트 수도.", en: "Entertainment capital.", ja: "娯楽の都。", zh: "世界娱乐之都。" }},
    { id: "dc", region: "America", name: { ko: "워싱턴 DC, 미국", en: "Washington DC, USA", ja: "ワシントンDC、米国", zh: "华盛顿哥伦比亚特区，美国" }, desc: { ko: "미국의 정치 중심.", en: "Political heart of USA.", ja: "米国の政治の中心。", zh: "美国的政治中心。" }},
    { id: "rio", region: "America", name: { ko: "리우데자네이루, 브라질", en: "Rio de Janeiro, Brazil", ja: "リオデジャネイロ、ブラジル", zh: "里约热内卢，巴西" }, desc: { ko: "정열의 카니발.", en: "City of Carnival.", ja: "情熱のカーニバルの街。", zh: "狂欢节之城。" }},
    { id: "machu-picchu", region: "America", name: { ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ、ペルー", zh: "马丘比丘，秘鲁" }, desc: { ko: "잉카의 잃어버린 도시.", en: "Lost city of Incas.", ja: "インカの失われた都市。", zh: "印加失落之城。" }},
    { id: "banff", region: "America", name: { ko: "밴프, 캐나다", en: "Banff, Canada", ja: "バンフ、カナダ", zh: "班夫，加拿大" }, desc: { ko: "로키 산맥의 보석.", en: "Jewel of the Rockies.", ja: "ロッキーの宝石。", zh: "洛矶山脉的宝石。" }},
    { id: "patagonia", region: "America", name: { ko: "파타고니아, 칠레/아르헨티나", en: "Patagonia, Chile/Argentina", ja: "パタゴニア、チリ/アルゼンチン", zh: "巴塔哥尼亚，智利/阿根廷" }, desc: { ko: "야생의 대자연.", en: "Wild pristine nature.", ja: "野生の大自然。", zh: "原始的野生自然。" }},
    { id: "hawaii", region: "America", name: { ko: "하와이, 미국", en: "Hawaii, USA", ja: "ハワイ、米国", zh: "夏威夷，美国" }, desc: { ko: "지상의 낙원.", en: "Tropical paradise.", ja: "地上の楽園。", zh: "人间天堂。" }},
    { id: "melbourne", region: "Other", name: { ko: "멜버른, 호주", en: "Melbourne, Australia", ja: "メルボルン、豪州", zh: "墨尔本，澳大利亚" }, desc: { ko: "문화와 커피의 도시.", en: "City of culture and coffee.", ja: "文化とコーヒーの街。", zh: "文化与咖啡之城。" }},
    { id: "abu-dhabi", region: "Other", name: { ko: "아부다비, UAE", en: "Abu Dhabi, UAE", ja: "アブダビ、UAE", zh: "阿布扎比，阿联酋" }, desc: { ko: "현대적인 아랍의 예술.", en: "Modern Arabian art.", ja: "現代的なアラブの街。", zh: "现代阿拉伯艺术。" }},
    { id: "cape-town", region: "Other", name: { ko: "케이프타운, 남아공", en: "Cape Town, South Africa", ja: "ケープタウン、南ア", zh: "开普敦，南非" }, desc: { ko: "테이블 마운틴의 장관.", en: "Under Table Mountain.", ja: "絶景の街。", zh: "桌山脚下的壮丽城市。" }},
    { id: "reykjavik", region: "Other", name: { ko: "레이캬비크, 아이슬란드", en: "Reykjavik, Iceland", ja: "レイキャビク、アイスランド", zh: "雷克雅未克，冰岛" }, desc: { ko: "오로라의 고향.", en: "Land of Northern Lights.", ja: "オーロラの故郷。", zh: "北极光之乡。" }},
    { id: "santorini", region: "Europe", name: { ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ、ギリシャ", zh: "圣托里尼，希腊" }, desc: { ko: "푸른 돔의 화이트 시티.", en: "Blue domes and white walls.", ja: "青いドームの街。", zh: "蓝顶白墙之城。" }},
    { id: "maldives", region: "Other", name: { ko: "몰디브", en: "Maldives", ja: "モルディブ", zh: "马尔代夫" }, desc: { ko: "에메랄드빛 바다.", en: "Emerald ocean escape.", ja: "エメラルド色の海。", zh: "翡翠般的海域。" }},
    { id: "petra", region: "Other", name: { ko: "페트라, 요르단", en: "Petra, Jordan", ja: "ペトラ、ヨルダン", zh: "佩特拉，约旦" }, desc: { ko: "바위에 새겨진 도시.", en: "The Rose Red City.", ja: "岩に刻まれた都市。", zh: "玫瑰红色的岩石之城。" }},
    { id: "great-wall", region: "Asia", name: { ko: "만리장성, 중국", en: "Great Wall, China", ja: "万里の長城、中国", zh: "万里长城，中国" }, desc: { ko: "인류 최대의 건축물.", en: "World's longest wall.", ja: "人類最大の建造物。", zh: "人类最伟大的建筑。" }},
    { id: "shanghai", region: "Asia", name: { ko: "상하이, 중국", en: "Shanghai, China", ja: "上海、中国", zh: "上海，中国" }, desc: { ko: "동양의 파리.", en: "The Bund skyline.", ja: "東洋のパリ。", zh: "东方巴黎。" }},
    { id: "istanbul", region: "Other", name: { ko: "이스탄불, 터키", en: "Istanbul, Turkey", ja: "イスタンブール、トルコ", zh: "伊斯坦布尔，土耳其" }, desc: { ko: "동양과 서양의 만남.", en: "East meets West.", ja: "東西文化の交差点。", zh: "东西方文化的交汇点。" }},
    { id: "stockholm", region: "Europe", name: { ko: "스톡홀름, 스웨덴", en: "Stockholm, Sweden", ja: "ストックホルム、スウェーデン", zh: "斯德哥尔摩，瑞典" }, desc: { ko: "북유럽의 베네치아.", en: "Venice of the North.", ja: "北欧のヴェネツィア。", zh: "北方威尼斯。" }},
    { id: "copenhagen", region: "Europe", name: { ko: "코펜하겐, 덴마크", en: "Copenhagen, Denmark", ja: "コペンハーゲン、デンマーク", zh: "哥本哈根，丹麦" }, desc: { ko: "행복과 자전거의 도시.", en: "City of happiness.", ja: "幸せと自転車の街。", zh: "幸福与自行车之城。" }},
    { id: "zurich", region: "Europe", name: { ko: "취리히, 스위스", en: "Zurich, Switzerland", ja: "チューリッヒ、スイス", zh: "苏黎世，瑞士" }, desc: { ko: "호수와 설산의 풍경.", en: "Lakes and Alps scenery.", ja: "湖と雪山の風景。", zh: "湖泊与雪山的风景。" }},
    { id: "doha", region: "Other", name: { ko: "도하, 카타르", en: "Doha, Qatar", ja: "ドーハ、カタール", zh: "多哈，卡塔尔" }, desc: { ko: "현대적 걸프의 매력.", en: "Modern Gulf charm.", ja: "現代的な湾岸の魅力。", zh: "现代海湾魅力。" }},
    { id: "auckland", region: "Other", name: { ko: "오클랜드, 뉴질랜드", en: "Auckland, New Zealand", ja: "オークランド、NZ", zh: "奥克兰，新西兰" }, desc: { ko: "항해와 화산의 도시.", en: "City of Sails.", ja: "帆の街。", zh: "千帆之都。" }},
    { id: "marrakech", region: "Other", name: { ko: "마라케시, 모로코", en: "Marrakech, Morocco", ja: "マラケシュ、モロッコ", zh: "马拉喀什，摩洛哥" }, desc: { ko: "붉은 색의 신비로움.", en: "The Red City mystery.", ja: "赤い神秘の街。", zh: "红色神秘之城。" }},
    { id: "venice", region: "Europe", name: { ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア、イタリア", zh: "威尼斯，意大利" }, desc: { ko: "물의 도시.", en: "City of water.", ja: "水の都。", zh: "水城。" }}
];

const container = document.getElementById("places");
let net = null;
let currentUserImg = null;
let isStudioOpen = false;

async function loadModel() {
    if (net) return;
    net = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
    });
    console.log("BodyPix Model Loaded");
}
loadModel();

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang][key]) el.innerText = i18n[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (i18n[lang][key]) el.placeholder = i18n[lang][key];
    });
    const langSelect = document.getElementById("lang-select");
    if(langSelect) langSelect.value = lang;
    render(places);
    const selectedCity = document.getElementById("selected-city-name");
    if (selectedCity && selectedCity.getAttribute("data-place-id")) {
        const placeId = selectedCity.getAttribute("data-place-id");
        const place = places.find(p => p.id === placeId);
        if (place) selectedCity.innerText = place.name[lang];
    }
}

function render(data){
    if(!container) return;
    container.innerHTML="";
    data.forEach((p)=>{
        const card=document.createElement("div");
        card.className="card";
        const img=document.createElement("img");
        const cityNameEn = p.name.en.split(",")[0];
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityNameEn}`)
        .then(res=>res.json())
        .then(wikiData=>{
            if(wikiData.thumbnail) img.src = wikiData.thumbnail.source;
            else img.src = `https://picsum.photos/seed/${p.id}/600/400`;
        })
        .catch(()=> img.src = `https://picsum.photos/seed/${p.id}/600/400`);
        img.alt = p.name[currentLang];

        const copyright = document.createElement("div");
        copyright.className = "image-copyright";
        copyright.innerText = "© Wikipedia / Creative Commons";

        const content=document.createElement("div");
        content.className="card-content";
        const title=document.createElement("h3");
        title.innerText=p.name[currentLang];
        const footer = document.createElement("div");
        footer.className = "card-footer";
        const btn=document.createElement("button");
        btn.innerText=i18n[currentLang]["btn-travel"];
        btn.onclick=()=>travelToDestination(p.id, img.src);
        const infoBtn=document.createElement("button");
        infoBtn.innerText=i18n[currentLang]["btn-details"];
        infoBtn.style.background = "#6b7280";
        infoBtn.onclick=()=>openModal(p.name[currentLang], p.desc[currentLang]);
        footer.appendChild(btn);
        footer.appendChild(infoBtn);
        content.appendChild(title);
        content.appendChild(footer);
        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);
    });
}

function travelToDestination(id, imgSrc) {
    isStudioOpen = true;
    const place = places.find(p => p.id === id);
    const studio = document.getElementById("studio-section");
    const compArea = document.getElementById("composition-area");
    const cityLabel = document.getElementById("selected-city-name");
    cityLabel.innerText = place.name[currentLang];
    cityLabel.setAttribute("data-place-id", id);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function() {
        if (!isStudioOpen) return;
        const ratio = img.naturalWidth / img.naturalHeight;
        compArea.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        compArea.style.width = ratio < 1 ? "400px" : "100%";
        compArea.style.backgroundImage = `url('${imgSrc}')`;
        studio.style.display = "block";
        studio.scrollIntoView({ behavior: 'smooth' });
    };
    img.src = imgSrc;
}

function closeStudio() {
    isStudioOpen = false;
    document.getElementById("studio-section").style.display = "none";
    document.getElementById("loading-overlay").style.display = "none";
    document.getElementById("user-photo-upload").value = "";
    document.getElementById("adjust-controls").style.display = "none";
    const canvas = document.getElementById("user-canvas");
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    resetTransform();
    currentUserImg = null;
}

async function processUserPhoto(input) {
    if (input.files && input.files[0]) {
        if (!isStudioOpen) return;
        const reader = new FileReader();
        reader.onload = async function(e) {
            const img = new Image();
            img.onload = async () => {
                currentUserImg = img;
                await performBackgroundRemoval(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

async function reprocessPhoto() {
    if (currentUserImg && isStudioOpen) {
        await performBackgroundRemoval(currentUserImg);
    }
}

async function performBackgroundRemoval(img) {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.display = "flex";
    try {
        const canvas = document.getElementById("user-canvas");
        const threshold = parseFloat(document.getElementById("user-threshold").value) || 0.6;
        if (!net) await loadModel();
        const maxDimension = 1000;
        let targetWidth = img.width;
        let targetHeight = img.height;
        if (targetWidth > maxDimension || targetHeight > maxDimension) {
            const scale = maxDimension / Math.max(targetWidth, targetHeight);
            targetWidth *= scale; targetHeight *= scale;
        }
        const offscreen = document.createElement('canvas');
        offscreen.width = targetWidth; offscreen.height = targetHeight;
        const offCtx = offscreen.getContext('2d');
        offCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
        const segmentation = await net.segmentPerson(offscreen, {
            flipHorizontal: false,
            internalResolution: 'medium',
            segmentationThreshold: threshold
        });
        if (!isStudioOpen) { overlay.style.display = "none"; return; }
        canvas.width = targetWidth; canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(offscreen, 0, 0);
        const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
        const pixelData = imageData.data;
        for (let i = 0; i < pixelData.length; i += 4) {
            if (segmentation.data[i / 4] === 0) pixelData[i + 3] = 0;
        }
        ctx.putImageData(imageData, 0, 0);
        overlay.style.display = "none";
        document.getElementById("download-comp-btn").style.display = "inline-block";
        document.getElementById("adjust-controls").style.display = "block";
    } catch (error) {
        console.error(error);
        overlay.style.display = "none";
        alert(i18n[currentLang]["alert-error"]);
    }
}

function updateUserTransform() {
    const scale = document.getElementById("user-scale").value;
    const posX = document.getElementById("user-pos-x").value;
    const posY = document.getElementById("user-pos-y").value;
    const canvas = document.getElementById("user-canvas");
    if (canvas) {
        canvas.style.left = `${posX}%`;
        canvas.style.bottom = `${posY}%`;
        canvas.style.transform = `translateX(-50%) scale(${scale})`;
    }
}

function resetTransform() {
    const scale = document.getElementById("user-scale");
    const posX = document.getElementById("user-pos-x");
    const posY = document.getElementById("user-pos-y");
    const threshold = document.getElementById("user-threshold");
    if (scale) scale.value = 1.0;
    if (posX) posX.value = 50;
    if (posY) posY.value = 0;
    if (threshold) threshold.value = 0.6;
    updateUserTransform();
}

function captureComposition() {
    const area = document.getElementById("composition-area");
    html2canvas(area, { useCORS: true, allowTaint: true }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `travel-${Date.now()}.png`;
        link.href = image;
        link.click();
    });
}

function openModal(title,desc){
    document.getElementById("modalTitle").innerText=title;
    document.getElementById("modalDesc").innerText=desc;
    document.getElementById("modal").style.display="flex";
    document.body.style.overflow = "hidden";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
    document.body.style.overflow = "auto";
}

function filterRegion(region, btn){
    document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    if(region==='all') render(places);
    else render(places.filter(p=>p.region===region));
}

const search=document.getElementById("search");
if(search) {
    search.addEventListener("input",()=>{
        const val=search.value.toLowerCase();
        render(places.filter(p=>p.name[currentLang].toLowerCase().includes(val)));
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) closeModal();
}

changeLanguage('en');
