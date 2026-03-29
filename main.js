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
        "studio-tip": "* 人物写真가 鮮明であるほど、背景削除の結果が良くなります。",
        "ctrl-size": "📏 サイズ:", "ctrl-horiz": "↔️ 左右:", "ctrl-vert": "↕️ 上下:", "ctrl-precision": "✨ 精度:",
        "btn-reset": "初期化", "btn-upload": "👤 写真をアップロード", "btn-save": "💾 写真を保存", "btn-exit": "❌ スタジオ終了",
        "btn-close": "閉じる", "btn-travel": "ここへ旅行 (合成)", "btn-details": "詳細情報",
        "search-placeholder": "도시 또는 目的地を検索...",
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
        "alert-error": "图片处理失败.请尝试缩小照片尺寸或使用其他照片。"
    }
};

let currentLang = 'en';

const places = [
    { id: "p1", region: "Europe", name: { ko: "파리, 프랑스", en: "Paris, France", ja: "パリ、フランス", zh: "巴黎，法国" }, desc: "The global center of art, fashion, and culture, iconic for its Eiffel Tower and Louvre Museum." },
    { id: "p2", region: "Europe", name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" }, desc: "A historic global capital greeting you with iconic landmarks like Big Ben and Tower Bridge." },
    { id: "p3", region: "Europe", name: { ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ、イタリア", zh: "罗马，意大利" }, desc: "The Eternal City, where every corner feels like a part of a massive open-air museum." },
    { id: "p4", region: "Asia", name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル、韓国", zh: "首尔，韩国" }, desc: "A dynamic megacity where ancient palaces and futuristic skyscrapers coexist." },
    { id: "p5", region: "Asia", name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" }, desc: "The heart of Japan where traditional shrines meet vibrant neon cityscapes." },
    { id: "p6", region: "America", name: { ko: "뉴욕, 미국", en: "New York, USA", ja: "ニューヨーク、米国", zh: "纽约，美国" }, desc: "The global hub of culture and finance, guarded by the iconic Statue of Liberty." },
    { id: "p7", region: "Europe", name: { ko: "바르셀로나, 스페인", en: "Barcelona, Spain", ja: "バルセロナ、スペイン", zh: "巴塞罗那，西班牙" }, desc: "A Mediterranean gem where Gaudi's genius architecture defines the city's soul." },
    { id: "p8", region: "Other", name: { ko: "시드니, 호주", en: "Sydney, Australia", ja: "シドニー、豪州", zh: "悉니，澳大利亚" }, desc: "Home to the world-famous Opera House, Sydney is a stunning harbor city." },
    { id: "p9", region: "Other", name: { ko: "두바이, UAE", en: "Dubai, UAE", ja: "ドバイ、UAE", zh: "迪拜，阿联酋" }, desc: "A desert miracle where the world's tallest building, Burj Khalifa, pierces the sky." },
    { id: "p10", region: "Europe", name: { ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア、イタリア", zh: "威尼斯，意大利" }, desc: "The unique City of Water where canals serve as roads and gondolas replace cars." },
    { id: "p11", region: "Asia", name: { ko: "싱가포르", en: "Singapore", ja: "シンガポール", zh: "新加坡" }, desc: "A clean garden city-state where diverse cultures and cuisines coexist perfectly." },
    { id: "p12", region: "Asia", name: { ko: "발리, 인도네시아", en: "Bali, Indonesia", ja: "バリ、インド네시아", zh: "巴厘岛，印度尼西亚" }, desc: "The Island of the Gods, blending emerald oceans with mystical Hindu temples." },
    { id: "p13", region: "Europe", name: { ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ、ギリシャ", zh: "圣托里니, 希腊" }, desc: "The crown jewel of the Aegean Sea with white-washed houses on steep cliffs." },
    { id: "p14", region: "America", name: { ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ、ペルー", zh: "马丘比丘，秘鲁" }, desc: "A mysterious Incan citadel hidden in the clouds high in the Andes." },
    { id: "p15", region: "Other", name: { ko: "몰디브", en: "Maldives", ja: "モルディブ", zh: "马尔代夫" }, desc: "The terrestial paradise of the Indian Ocean, a dream getaway for relaxation." },
    { id: "p16", region: "Other", name: { ko: "페트라, 요르단", en: "Petra, Jordan", ja: "ペトラ、ヨルダン", zh: "佩特拉，约旦" }, desc: "An ancient mystical city carved from red sandstone, the Nabataean capital." },
    { id: "p17", region: "Other", name: { ko: "카이로, 이집트", en: "Cairo, Egypt", ja: "カイロ、エジプト", zh: "开罗，埃及" }, desc: "A cradle of civilization guarded by the Great Pyramids, a city of history." },
    { id: "p18", region: "Other", name: { ko: "레이캬비크, 아이슬란드", en: "Reykjavik, Iceland", ja: "レイキャ비ク、アイスランド", zh: "雷克雅未克，冰岛" }, desc: "The world's northernmost capital, a magical place of Northern Lights." },
    { id: "p19", region: "Europe", name: { ko: "취리히, 스위스", en: "Zurich, Switzerland", ja: "チューリッヒ、スイス", zh: "苏黎世，瑞士" }, desc: "The gateway to the Alps and one of the world's most livable cities." },
    { id: "p20", region: "Europe", name: { ko: "스톡홀름, 스웨덴", en: "Stockholm, Sweden", ja: "ストックホルム、ス웨덴", zh: "斯德哥尔摩，瑞典" }, desc: "The 'Venice of the North' spanning 14 islands, a city of classic dignity." },
    { id: "p21", region: "Asia", name: { ko: "오사카, 일본", en: "Osaka, Japan", ja: "大阪、日本", zh: "大阪，日本" }, desc: "A vibrant Japanese city famous for its food scene and energetic atmosphere." },
    { id: "p22", region: "Asia", name: { ko: "방콕, 태국", en: "Bangkok, Thailand", ja: "バンコク、タイ", zh: "曼谷，泰国" }, desc: "The heart of Southeast Asia where palaces meet a modern skyline." },
    { id: "p23", region: "Europe", name: { ko: "빈, 오스트리아", en: "Vienna, Austria", ja: "ウィーン、オーストリア", zh: "维也纳，奥地利" }, desc: "The capital of music and art, once the heart of the Habsburg Empire." },
    { id: "p24", region: "Europe", name: { ko: "부다페스트, 헝가리", en: "Budapest, Hungary", ja: "ブ다페스트, ハンガリー", zh: "布达佩斯，匈牙利" }, desc: "Called the 'Rose of the East,' famous for its stunning Danube night views." },
    { id: "p25", region: "Asia", name: { ko: "타이베이, 대만", en: "Taipei, Taiwan", ja: "台北、台湾", zh: "台北，台湾" }, desc: "The capital of Taiwan, a paradise for night market lovers." },
    { id: "p26", region: "Europe", name: { ko: "뮌헨, 독일", en: "Munich, Germany", ja: "ミュンヘン、ドイツ", zh: "慕尼黑，德国" }, desc: "Famous for Oktoberfest, Munich charms with historic squares and beer culture." },
    { id: "p27", region: "Asia", name: { ko: "카트만두, 네팔", en: "Kathmandu, Nepal", ja: "카트만두, 네팔", zh: "加德满都，尼泊尔" }, desc: "The gateway to the Himalayas, a mystical city where temples live on." },
    { id: "p28", region: "America", name: { ko: "시카고, 미국", en: "Chicago, USA", ja: "シカゴ、米国", zh: "芝加哥，美国" }, desc: "An architectural marvel where skyscrapers meet the beauty of Lake Michigan." },
    { id: "p29", region: "America", name: { ko: "퀘벡, 캐나다", en: "Quebec City, Canada", ja: "ケベック・シティ、カナダ", zh: "魁北克市，加拿大" }, desc: "Often called the 'Paris of North America,' this city is full of French charm." },
    { id: "p30", region: "Europe", name: { ko: "피렌체, 이탈리아", en: "Florence, Italy", ja: "フィ렌ツェ、イタリア", zh: "佛罗伦萨，意大利" }, desc: "The birthplace of the Renaissance, an entire city like a massive museum." },
    { id: "p31", region: "America", name: { ko: "밴프, 캐나다", en: "Banff, Canada", ja: "バンフ、カナダ", zh: "班夫，加拿大" }, desc: "A stunning mountain town nestled in the heart of the Canadian Rockies." },
    { id: "p32", region: "Other", name: { ko: "멜버른, 호주", en: "Melbourne, Australia", ja: "メルボルン、豪州", zh: "墨尔本，澳大利亚" }, desc: "Australia's cultural capital, brimming with art and world-class coffee." },
    { id: "p33", region: "America", name: { ko: "샌프란시스코, 미국", en: "San Francisco, USA", ja: "サンフランシスコ、米国", zh: "旧金山，美国" }, desc: "Famous for the Golden Gate Bridge and its hilly streets." },
    { id: "p34", region: "Europe", name: { ko: "세비야, 스페인", en: "Seville, Spain", ja: "セ비리아, スペイン", zh: "塞维利亚，西班牙" }, desc: "The heart of Andalusia, filled with Flamenco and orange blossoms." },
    { id: "p35", region: "Asia", name: { ko: "하노이, 베트남", en: "Hanoi, Vietnam", ja: "ハノイ、ベトナム", zh: "河内，越南" }, desc: "The 1,000-year-old capital of Vietnam with beautiful lakes and alleys." },
    { id: "p36", region: "Europe", name: { ko: "베를린, 독일", en: "Berlin, Germany", ja: "ベルリン、ドイツ", zh: "柏林，德国" }, desc: "A dynamic capital reborn as a symbol of freedom from the shadows of history." },
    { id: "p37", region: "Europe", name: { ko: "암스테르담, 네덜란드", en: "Amsterdam, Netherlands", ja: "アムステルダム、オランダ", zh: "阿姆斯特丹，荷兰" }, desc: "A city where a web of canals and thousands of bicycles define the scenery." },
    { id: "p38", region: "Europe", name: { ko: "아테네, 그리스", en: "Athens, Greece", ja: "アテネ、ギリシャ", zh: "雅典，希腊" }, desc: "The cradle of Western civilization, preserving the legacy of ancient Greece." },
    { id: "p39", region: "Europe", name: { ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン、ポルトガル", zh: "里斯本，葡萄牙" }, desc: "A hillside city facing the Atlantic, famous for yellow trams and tiles." },
    { id: "p40", region: "Europe", name: { ko: "프라하, 체코", en: "Prague, Czech Republic", ja: "プラハ、チェコ", zh: "布拉格，捷克" }, desc: "The 'Rome of the North' where medieval red roofs create a fairy-tale." },
    { id: "p41", region: "Other", name: { ko: "마라케시, 모로코", en: "Marrakech, Morocco", ja: "マラケシュ、モロッコ", zh: "马拉喀什，摩洛哥" }, desc: "The Red City of Marrakech is a place where souks and gardens coexist." },
    { id: "p42", region: "Other", name: { ko: "이스탄불, 터키", en: "Istanbul, Turkey", ja: "イスタンブール、トルコ", zh: "伊斯坦布尔，土耳其" }, desc: "A unique city sitting on two continents where East meets West in fusion." },
    { id: "p43", region: "Asia", name: { ko: "교토, 일본", en: "Kyoto, Japan", ja: "京都、日本", zh: "京都，日本" }, desc: "The ancient capital of Japan, a sanctuary of traditional culture." },
    { id: "p44", region: "America", name: { ko: "리우데자네이루, 브라질", en: "Rio de Janeiro, Brazil", ja: "リオデジャネイロ、ブラジル", zh: "里约热内卢，巴西" }, desc: "One of the world's most beautiful harbors, famous for Carnival." },
    { id: "p45", region: "America", name: { ko: "로스앤젤레스, 미국", en: "Los Angeles, USA", ja: "ロサンゼルス、米国", zh: "洛杉矶，美国" }, desc: "The heart of the global entertainment industry, home to Hollywood." },
    { id: "p46", region: "Asia", name: { ko: "홍콩", en: "Hong Kong, China", ja: "香港", zh: "香港" }, desc: "The Pearl of the Orient, where a stunning skyline meets a food paradise." },
    { id: "p47", region: "Europe", name: { ko: "마드리드, 스페인", en: "Madrid, Spain", ja: "マドリード、スペイン", zh: "马德里，西班牙" }, desc: "The passionate capital of Spain, full of grand plazas and art museums." },
    { id: "p48", region: "America", name: { ko: "밴쿠버, 캐나다", en: "Vancouver, Canada", ja: "バンクーバー、カナダ", zh: "温哥华，加拿大" }, desc: "A city of natural beauty where mountains meet the Pacific Ocean." },
    { id: "p49", region: "Asia", name: { ko: "부산, 대한민국", en: "Busan, South Korea", ja: "釜산, 韓国", zh: "釜山，韩国" }, desc: "South Korea's maritime city filled with blue oceans and dynamic energy." },
    { id: "p50", region: "Europe", name: { ko: "에든버러, 영국", en: "Edinburgh, UK", ja: "エ디ンバラ、イギリス", zh: "爱丁堡，英国" }, desc: "The historic capital of Scotland, where medieval grandeur meets landscapes." }
];

const container = document.getElementById("places");
let net = null;
let currentUserImg = null;
let isStudioOpen = false;

async function loadModel() {
    if (net) return;
    net = await bodyPix.load({ architecture: 'MobileNetV1', outputStride: 16, multiplier: 0.75, quantBytes: 2 });
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
        .then(wd=>{
            if(wd.thumbnail) img.src = wd.thumbnail.source;
            else img.src = `https://picsum.photos/seed/${p.id}/600/400`;
        })
        .catch(()=> img.src = `https://picsum.photos/seed/${p.id}/600/400`);
        img.alt = p.name[currentLang];
        const cp = document.createElement("div");
        cp.className = "image-copyright";
        cp.innerText = "© Wikipedia / Creative Commons";
        const cnt=document.createElement("div");
        cnt.className="card-content";
        const t=document.createElement("h3");
        t.innerText=p.name[currentLang];
        const f = document.createElement("div");
        f.className = "card-footer";
        const b1=document.createElement("button");
        b1.innerText=i18n[currentLang]["btn-travel"];
        b1.onclick=()=>travelToDestination(p.id, img.src);
        const b2=document.createElement("button");
        b2.innerText=i18n[currentLang]["btn-details"];
        b2.style.background = "#6b7280";
        b2.onclick=()=>openModal(p.name[currentLang], p.desc);
        f.appendChild(b1); f.appendChild(b2);
        cnt.appendChild(t); cnt.appendChild(f);
        card.appendChild(img); card.appendChild(cp); card.appendChild(cnt);
        container.appendChild(card);
    });
}

function travelToDestination(id, imgSrc) {
    isStudioOpen = true;
    const p = places.find(x => x.id === id);
    const s = document.getElementById("studio-section");
    const ca = document.getElementById("composition-area");
    const sc = document.getElementById("selected-city-name");
    sc.innerText = p.name[currentLang];
    sc.setAttribute("data-place-id", id);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function() {
        if (!isStudioOpen) return;
        ca.style.aspectRatio = `${img.naturalWidth}/${img.naturalHeight}`;
        ca.style.backgroundImage = `url('${imgSrc}')`;
        s.style.display = "flex"; // Changed from block to flex for modal centering
        document.body.style.overflow = "hidden"; // Lock background scroll
    };
    img.src = imgSrc;
}

function closeStudio() {
    isStudioOpen = false;
    document.getElementById("studio-section").style.display = "none";
    document.getElementById("loading-overlay").style.display = "none";
    document.getElementById("adjust-controls").style.display = "none";
    document.body.style.overflow = "auto"; // Unlock background scroll
    currentUserImg = null;
}

async function processUserPhoto(input) {
    if (input.files && input.files[0]) {
        const r = new FileReader();
        r.onload = async (e) => {
            const img = new Image();
            img.onload = async () => { currentUserImg = img; await performBackgroundRemoval(img); };
            img.src = e.target.result;
        };
        r.readAsDataURL(input.files[0]);
    }
}

async function reprocessPhoto() { if (currentUserImg && isStudioOpen) await performBackgroundRemoval(currentUserImg); }

async function performBackgroundRemoval(img) {
    const o = document.getElementById("loading-overlay");
    o.style.display = "flex";
    try {
        const c = document.getElementById("user-canvas");
        const th = parseFloat(document.getElementById("user-threshold").value) || 0.6;
        if (!net) await loadModel();
        const max = 1000;
        let tw = img.width, thh = img.height;
        if (tw > max || thh > max) { const s = max / Math.max(tw, thh); tw *= s; thh *= s; }
        const os = document.createElement('canvas');
        os.width = tw; os.height = thh;
        const octx = os.getContext('2d');
        octx.drawImage(img, 0, 0, tw, thh);
        const seg = await net.segmentPerson(os, { internalResolution: 'medium', segmentationThreshold: th });
        if (!isStudioOpen) { o.style.display = "none"; return; }
        c.width = tw; c.height = thh;
        const ctx = c.getContext('2d');
        ctx.drawImage(os, 0, 0);
        const idat = ctx.getImageData(0, 0, tw, thh);
        const pdat = idat.data;
        for (let i = 0; i < pdat.length; i += 4) { if (seg.data[i / 4] === 0) pdat[i + 3] = 0; }
        ctx.putImageData(idat, 0, 0);
        o.style.display = "none";
        document.getElementById("adjust-controls").style.display = "block";
    } catch (e) { console.error(e); o.style.display = "none"; alert(i18n[currentLang]["alert-error"]); }
}

function updateUserTransform() {
    const s = document.getElementById("user-scale").value;
    const x = document.getElementById("user-pos-x").value;
    const y = document.getElementById("user-pos-y").value;
    const c = document.getElementById("user-canvas");
    if (c) { c.style.left = `${x}%`; c.style.bottom = `${y}%`; c.style.transform = `translateX(-50%) scale(${s})`; }
}

function resetTransform() {
    document.getElementById("user-scale").value = 1.0;
    document.getElementById("user-pos-x").value = 50;
    document.getElementById("user-pos-y").value = 0;
    document.getElementById("user-threshold").value = 0.6;
    updateUserTransform();
}

function captureComposition() {
    const ca = document.getElementById("composition-area");
    html2canvas(ca, { useCORS: true, allowTaint: true }).then(cv => {
        const link = document.createElement("a");
        link.download = `travel-${Date.now()}.png`;
        link.href = cv.toDataURL("image/png");
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

function filterRegion(reg, btn){
    document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    if(reg==='all') render(places);
    else render(places.filter(p=>p.region===reg));
}

const searchInput=document.getElementById("search");
if(searchInput) {
    searchInput.addEventListener("input",()=>{
        const val=searchInput.value.toLowerCase();
        render(places.filter(p=>p.name[currentLang].toLowerCase().includes(val)));
    });
}

window.onclick = (e) => { if (e.target == document.getElementById("modal")) closeModal(); }

changeLanguage('en');

