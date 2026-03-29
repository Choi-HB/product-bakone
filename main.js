const i18n = {
    ko: {
        "nav-home": "홈",
        "nav-about": "소개",
        "nav-contact": "문의",
        "nav-privacy": "개인정보보호",
        "nav-terms": "이용약관",
        "header-title": "얼티밋 드림 트래블",
        "header-subtitle": "가상 포토 스튜디오 - 클릭 한 번으로 세계 여행!",
        "studio-title": "📸 가상 포토 스튜디오",
        "studio-selected": "선택된 여행지:",
        "studio-processing": "배경 제거 중... (AI)",
        "studio-tip": "* 인물 사진이 선명할수록 배경 제거 결과가 좋습니다.",
        "ctrl-size": "📏 크기:",
        "ctrl-horiz": "↔️ 좌우:",
        "ctrl-vert": "↕️ 상하:",
        "ctrl-precision": "✨ 정밀도:",
        "btn-reset": "초기화",
        "btn-upload": "👤 내 사진 업로드",
        "btn-save": "💾 사진 저장",
        "btn-exit": "❌ 스튜디오 종료",
        "btn-close": "닫기",
        "btn-travel": "여기로 여행 (합성)",
        "btn-details": "상세 정보",
        "search-placeholder": "도시 또는 목적지 검색...",
        "filter-all": "전체",
        "filter-asia": "아시아",
        "filter-europe": "유럽",
        "filter-america": "아메리카",
        "filter-other": "기타",
        "alert-error": "이미지 처리에 실패했습니다. 사진 크기를 줄이거나 다른 사진으로 시도해 주세요."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-privacy": "Privacy",
        "nav-terms": "Terms",
        "header-title": "Ultimate Dream Travel",
        "header-subtitle": "Virtual Photo Studio - Travel the World in a Click!",
        "studio-title": "📸 Virtual Photo Studio",
        "studio-selected": "Selected Destination:",
        "studio-processing": "Removing Background... (AI)",
        "studio-tip": "* Clearer person photos yield better background removal results.",
        "ctrl-size": "📏 Size:",
        "ctrl-horiz": "↔️ Horiz:",
        "ctrl-vert": "↕️ Vert:",
        "ctrl-precision": "✨ Precision:",
        "btn-reset": "Reset",
        "btn-upload": "👤 Upload My Photo",
        "btn-save": "💾 Save Photo",
        "btn-exit": "❌ Exit Studio",
        "btn-close": "Close",
        "btn-travel": "Travel Here (Photo)",
        "btn-details": "Details",
        "search-placeholder": "Search city or destination...",
        "filter-all": "All",
        "filter-asia": "Asia",
        "filter-europe": "Europe",
        "filter-america": "America",
        "filter-other": "Other",
        "alert-error": "Failed to process image. Please try a smaller photo or a different one."
    },
    ja: {
        "nav-home": "ホーム",
        "nav-about": "紹介",
        "nav-contact": "お問い合わせ",
        "nav-privacy": "個人情報保護",
        "nav-terms": "利用規約",
        "header-title": "アルティメット・ドリーム・トラベル",
        "header-subtitle": "仮想フォトスタジオ - クリック一つで世界旅行！",
        "studio-title": "📸 仮想フォトスタジオ",
        "studio-selected": "選択された目的地:",
        "studio-processing": "背景を削除中... (AI)",
        "studio-tip": "* 人物写真가鮮明であるほど、背景削除の結果が良くなります。",
        "ctrl-size": "📏 サイズ:",
        "ctrl-horiz": "↔️ 左右:",
        "ctrl-vert": "↕️ 上下:",
        "ctrl-precision": "✨ 精度:",
        "btn-reset": "初期化",
        "btn-upload": "👤 写真をアップロード",
        "btn-save": "💾 写真を保存",
        "btn-exit": "❌ スタジオ終了",
        "btn-close": "閉じる",
        "btn-travel": "ここへ旅行 (合成)",
        "btn-details": "詳細情報",
        "search-placeholder": "都市または目的地を検索...",
        "filter-all": "すべて",
        "filter-asia": "アジア",
        "filter-europe": "ヨーロッパ",
        "filter-america": "アメリカ",
        "filter-other": "その他",
        "alert-error": "画像の処理に失敗しました。写真のサイズを小さくするか、別の写真で試してください。"
    },
    zh: {
        "nav-home": "首页",
        "nav-about": "关于我们",
        "nav-contact": "联系我们",
        "nav-privacy": "隐私政策",
        "nav-terms": "使用条款",
        "header-title": "终极梦想旅游",
        "header-subtitle": "虚拟摄影棚 - 点击一下即可环游世界！",
        "studio-title": "📸 虚拟摄影棚",
        "studio-selected": "选定的目的地:",
        "studio-processing": "正在移除背景... (AI)",
        "studio-tip": "* 人物照片越清晰，背景移除效果越好。",
        "ctrl-size": "📏 大小:",
        "ctrl-horiz": "↔️ 左右:",
        "ctrl-vert": "↕️ 上下:",
        "ctrl-precision": "✨ 精度:",
        "btn-reset": "重置",
        "btn-upload": "👤 上传我的照片",
        "btn-save": "💾 保存照片",
        "btn-exit": "❌ 退出摄影棚",
        "btn-close": "关闭",
        "btn-travel": "去这里旅行 (合成)",
        "btn-details": "详细信息",
        "search-placeholder": "搜索城市或目的地...",
        "filter-all": "全部",
        "filter-asia": "亚洲",
        "filter-europe": "欧洲",
        "filter-america": "美洲",
        "filter-other": "其他",
        "alert-error": "图片处理失败。请尝试缩小照片尺寸或使用其他照片。"
    }
};

let currentLang = 'en';

const places = [
    {
        id: "paris",
        region: "Europe",
        name: { ko: "파리, 프랑스", en: "Paris, France", ja: "パリ、フランス", zh: "巴黎，法国" },
        desc: { 
            ko: "에펠탑과 루브르 박물관으로 유명한 예술과 낭만의 도시입니다.",
            en: "The city of art and romance, famous for the Eiffel Tower and Louvre Museum.",
            ja: "エッフェル塔とルーブル美術館で有名な芸術とロマンの街です。",
            zh: "以艾菲尔铁塔和卢浮宫闻名的艺术与浪漫之都。"
        }
    },
    {
        id: "london",
        region: "Europe",
        name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" },
        desc: { 
            ko: "빅벤과 버킹엄 궁전이 있는 유서 깊은 글로벌 수도입니다.",
            en: "A historic global capital home to Big Ben and Buckingham Palace.",
            ja: "ビッグベンとバッキンガム宮殿がある歴史あるグローバルな首都です。",
            zh: "拥有大本钟和白金汉宫的历史悠久的全球首都。"
        }
    },
    {
        id: "seoul",
        region: "Asia",
        name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "서울, 韓国", zh: "首尔，韩国" },
        desc: { 
            ko: "전통 궁궐과 첨단 기술이 공존하는 활기찬 도시입니다.",
            en: "A vibrant city where traditional palaces and high-tech coexist.",
            ja: "伝統的な宮殿と先端技術が共存する活気ある街です。",
            zh: "传统宫殿与尖端技术共存的充满活力的城市。"
        }
    },
    {
        id: "tokyo",
        region: "Asia",
        name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" },
        desc: { 
            ko: "전통문화와 현대적인 매력이 어우러진 대도시입니다.",
            en: "A metropolis blending traditional culture with modern charm.",
            ja: "伝統文化と現代的な魅力が調和した大都市です。",
            zh: "融合了传统文化与现代魅力的特大城市。"
        }
    },
    {
        id: "beijing",
        region: "Asia",
        name: { ko: "베이징, 중국", en: "Beijing, China", ja: "北京、中国", zh: "北京，中国" },
        desc: { 
            ko: "자금성과 만리장성이 있는 유구한 역사의 도시입니다.",
            en: "A city of ancient history, home to the Forbidden City and Great Wall.",
            ja: "紫禁城と万里の長城がある悠久の歴史の街です。",
            zh: "拥有紫禁城和万里长城的悠久历史之城。"
        }
    }
];

// Generate sample destinations for demonstration
for(let i=0; i<45; i++) {
    places.push({
        id: `place-${i}`,
        region: i%2==0 ? "Europe" : "America",
        name: { 
            ko: `추천 여행지 ${i+6}`, 
            en: `Dream Destination ${i+6}`, 
            ja: `おすすめ目的地 ${i+6}`, 
            zh: `推荐目的地 ${i+6}` 
        },
        desc: { 
            ko: "상세 설명 준비 중입니다.", 
            en: "Detailed description coming soon.", 
            ja: "詳細説明を準備中です。", 
            zh: "详细说明正在准备中。" 
        }
    });
}

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
    
    // Update all i18n marked elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang][key]) el.innerText = i18n[lang][key];
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (i18n[lang][key]) el.placeholder = i18n[lang][key];
    });

    // Sync select dropdown
    const langSelect = document.getElementById("lang-select");
    if(langSelect) langSelect.value = lang;

    // Refresh travel cards
    render(places);
    
    // Refresh studio text if active
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

// Initial Language Sync
changeLanguage('en');
