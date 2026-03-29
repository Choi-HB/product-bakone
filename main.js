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
    { id: "paris", region: "Europe", name: { ko: "파리, 프랑스", en: "Paris, France", ja: "パリ、フランス", zh: "巴黎，法国" }, desc: { ko: "에펠탑과 루브르 박물관으로 상징되는 예술과 패션의 중심지입니다.\n세느 강변을 따라 펼쳐지는 낭만적인 야경은 전 세계 여행객들의 로망입니다.\n몽마르트르 언덕에서 화가들의 숨결을 느끼고 갓 구운 바게트의 풍미를 즐겨보세요.\n세계적인 명품 거리 샹젤리제와 역사적인 개선문은 파리의 품격을 더해줍니다.\n유서 깊은 카페에 앉아 에스프레소를 마시며 파리지앵의 여유를 느껴보세요.", en: "The global center of art, fashion, and culture, iconic for its Eiffel Tower and Louvre Museum.\nEnjoy a romantic evening walk along the Seine River with its breathtaking city lights.\nVisit Montmartre to feel the artistic heritage and taste the authentic French boulangeries.\nThe Champs-Élysées and Arc de Triomphe represent the historic grandeur of this city.\nExperience the true Parisian lifestyle while sipping espresso at a sidewalk café.", ja: "エッフェル塔とルーブル美術館に象徴される芸術とファッションの中心地です。\nセーヌ川沿いに広がるロマンチックな夜景は、世界中の旅行者の憧れです。\nモンマルトルの丘で芸術家たちの息吹を感じ、焼きたてのバゲットを味わってください。\n世界的な高級ブランド通りシャンゼリゼと歴史的な凱旋門がパリの品格を高めています。\n由緒あるカフェでエスプレッソを飲みながら、パリジャンの余裕を感じてみてください。", zh: "以艾菲尔铁塔和卢浮宫为象征的艺术与时尚中心。\n沿塞纳河畔展开的浪漫夜景是全球游客的向往。 \n在蒙马特高地感受艺术气息，品尝刚出炉的法式长棍面包。 \n香榭丽舍大街和历史悠久的凯旋门增添了巴黎的尊贵感。 \n坐在古老的咖啡馆里喝杯浓缩咖啡，感受巴黎人的悠闲生活。" }},
    { id: "london", region: "Europe", name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" }, desc: { ko: "빅벤과 타워 브리지가 반겨주는 유구한 역사를 가진 글로벌 수도입니다.\n영국 박물관에서 인류의 보물을 감상하고 웨스트엔드에서 세계 최고의 뮤지컬을 즐겨보세요.\n빨간 이층 버스를 타고 도시 곳곳의 빈티지 마켓과 고풍스러운 골목을 탐험할 수 있습니다.\n템즈 강변의 산책로와 하이드 파크의 넓은 녹지는 도심 속의 평화로운 휴식을 제공합니다.\n오후에는 전통적인 애프터눈 티를 즐기며 영국의 우아한 문화를 체험해 보세요.", en: "A historic global capital greeting you with iconic landmarks like Big Ben and Tower Bridge.\nExplore human history at the British Museum and catch world-class musicals in the West End.\nRide the famous red double-decker bus to discover vintage markets and charming narrow streets.\nThe Thames River path and Hyde Park provide a peaceful escape within the bustling city center.\nDon't miss the chance to experience traditional afternoon tea for a taste of British elegance.", ja: "ビッグベンとタワーブリッジが迎えてくれる、悠久の歴史を持つグローバルな首都です。\n大英博物館で人類の宝物を鑑賞し、ウェストエンドで世界最高のミュージカルを楽しんでください。\n赤い二階建てバスに乗って、街のあちこちにあるヴィンテージマーケットや古風な路地を探索できます。\nテムズ川沿いの散歩道とハイドパークの広大な緑地は、都心の中の平和な休息を提供します。\n午後には伝統的なアフタヌーンティーを楽しみながら、イギリスの優雅な文化を体験してください。", zh: "大本钟和塔桥迎接您的悠久历史全球首都。\n在大英博物馆欣赏人类瑰宝，在西区观看世界顶级的音乐剧。\n乘坐著名的红色双层巴士，探索城市各处的复古市场和古风小巷。\n泰晤士河畔的步道和海德公园宽阔的绿地提供城市中的宁静休憩。\n下午享受传统的下午茶，体验英国优雅的文化气息。" }},
    { id: "rome", region: "Europe", name: { ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ、イタリア", zh: "罗马，意大利" }, desc: { ko: "모든 길은 통한다는 말처럼, 도시 전체가 거대한 노천 박물관인 영원한 도시입니다.\n콜로세움과 포로 로마노에서 고대 로마 제국의 화려했던 영광을 직접 목격하세요.\n트레비 분수에 동전을 던지며 다시 로마를 방문하기를 기원하는 전통을 경험해 보세요.\n세계에서 가장 작은 국가인 바티칸 시국에서 미켈란젤로의 경이로운 예술작품을 만날 수 있습니다.\n정통 이탈리안 젤라또와 파스타를 맛보며 이탈리아인들의 열정적인 미식 문화를 즐겨보세요.", en: "The Eternal City, where every corner feels like a part of a massive open-air museum.\nWitness the ancient glory of the Roman Empire at the Colosseum and the Roman Forum.\nExperience the tradition of tossing a coin into the Trevi Fountain to ensure your return to Rome.\nVisit the Vatican City, the world's smallest state, to see Michelangelo's breathtaking art.\nSavor authentic Italian gelato and pasta while immersing yourself in their passionate food culture.", ja: "「すべての道はローマに通ず」と言われるように、街全体が巨大な野外博物館である永遠の都です。\nコロッセオとフォロ・ロマーノで、古代ローマ帝国の華やかな栄光を直接目撃してください。\nトレヴィの泉にコインを投げ入れ、再びローマを訪れることを願う伝統を体験してください。\n世界で最も小さな国であるバチカン市国で、ミケランジェロの驚異的な芸術作品に出会えます。\n正統派イタリアンジェラートとパスタを味わいながら、イタリア人の情熱的な美食文化を楽しんでください。", zh: "正如“条条大路通罗马”所言，整个城市就是一座巨大的露天博物馆，被称为永恒之城。\n在斗兽场和古罗马广场亲眼目睹古罗马帝国的辉煌。\n在特莱维喷泉投下一枚硬币，体验祈求再次访问罗马的传统。 \n在世界上最小的国家梵蒂冈，欣赏米开朗基罗惊世骇俗的艺术作品。 \n品尝正宗的意大利冰淇淋和意面，享受意大利人热情的饮食文化。" }},
    { id: "seoul", region: "Asia", name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル、韓国", zh: "首尔，韩国" }, desc: { ko: "600년 역사의 조선 궁궐과 최첨단 빌딩이 공존하는 역동적인 메가시티입니다.\n경복궁의 고즈넉한 아름다움과 남산타워에서 바라보는 화려한 야경을 동시에 즐길 수 있습니다.\n명동의 활기찬 쇼핑 거리와 강남의 세련된 문화는 끊임없는 즐거움을 선사합니다.\n전 세계를 사로잡은 K-푸드와 한국의 따뜻한 정을 담은 시장 문화를 체험해 보세요.\n편리한 대중교통과 밤늦도록 꺼지지 않는 화려한 불빛은 서울만의 독특한 매력입니다.", en: "A dynamic megacity where 600-year-old Joseon palaces and futuristic buildings coexist.\nEnjoy the serene beauty of Gyeongbokgung Palace alongside the dazzling night view from N Seoul Tower.\nThe vibrant shopping streets of Myeongdong and the sophisticated culture of Gangnam offer endless fun.\nExperience the world-famous K-food and the warm-hearted market culture unique to Korea.\nEfficient public transport and a city that never sleeps make Seoul a truly one-of-a-kind destination.", ja: "600年の歴史を持つ朝鮮王朝の宮殿と最先端のビルが共存するダイナミックなメガシティです。\n景福宮の静かな美しさと、南山タワーから眺める華やかな夜景를 동시에 즐길 수 있습니다.\n明洞の活気あるショッピング街と江南の洗練された文化は、絶え間ない楽しみを提供します。\n世界中를 魅了したKフードと、韓国の温かい情を感じる市場文化を体験してください。\n便利な公共交通機関と夜遅くまで消えない華やかな灯りは、ソウルならではの独特な魅力です。", zh: "一座拥有600年历史的朝鲜皇宫与尖端建筑并存的动态特大城市。\n可以同时享受景福宫宁静的美丽和从南山塔俯瞰的华丽夜景。 \n明洞热闹的购物街和江南干练的文化带来无穷乐趣。 \n体验席卷全球的韩食和蕴含韩国温暖情谊的市场文化。 \n便利的交通和通宵达旦的绚丽灯光是首尔独特的魅力。" }},
    { id: "tokyo", region: "Asia", name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" }, desc: { ko: "전통적인 신사와 사찰, 그리고 화려한 네온사인이 공존하는 일본의 심장부입니다.\n시부야의 유명한 스크램블 교차로와 하라주쿠의 독특한 패션은 도쿄의 에너지를 상징합니다.\n아사쿠사의 센소지에서 역사의 흔적을 따라가고 미슐랭 스타 맛집에서 미식의 정점을 맛보세요.\n도쿄 스카이트리 위에서 내려다보는 끝없는 지평선은 현대 건축의 경이로움을 보여줍니다.\n애니메이션, 전자기기, 그리고 친절한 환대 문화가 어우러진 다채로운 경험을 약속합니다.", en: "The heart of Japan where traditional shrines and temples coexist with vibrant neon signs.\nThe famous Shibuya Crossing and Harajuku's unique fashion trends represent the city's energy.\nFollow the footsteps of history at Senso-ji Temple and taste culinary perfections at Michelin-starred restaurants.\nThe endless skyline viewed from the Tokyo Skytree showcases the marvels of modern engineering.\nTokyo promises a colorful mix of anime culture, high-tech gadgets, and omotenashi hospitality.", ja: "伝統的な神社仏閣と華やかなネオンサインが共存する日本の中枢です。\n渋谷の有名なスクランブル交差点と原宿の独特なファッションは東京のエネルギーを象徴しています。\n浅草の浅草寺で歴史の痕跡をたどり、ミシュラン星付きの名店で美食の頂点を味わってください。\n東京スカイツリーから見下ろす果てしない地平線は、現代建築の驚異を見せてくれます。\nアニメ、電子機器、そして親切な「おもてなし」文化が調和した多彩な体験を約束します。", zh: "传统神社寺庙与华丽霓虹灯并存的日本心脏地带。\n涩谷著名的十字路口和原宿独特的时尚象征着东京的活力。 \n在浅草寺追寻历史足迹，在米其林星级餐厅品尝美食巅峰。 \n从东京晴空塔俯瞰的无尽地平线展示了现代建筑的奇迹。 \n这里承诺提供动漫、电子产品和亲切待客文化交织的多彩体验。" }},
    { id: "new-york", region: "America", name: { ko: "뉴욕, 미국", en: "New York, USA", ja: "ニューヨーク、米国", zh: "纽约，美国" }, desc: { ko: "자유의 여신상이 지키고 있는 잠들지 않는 도시, 전 세계 문화와 경제의 중심입니다.\n타임스퀘어의 화려한 광고판 아래에서 활기찬 대도시의 에너지를 온몸으로 느껴보세요.\n센트럴 파크의 넓은 숲길에서 휴식을 취하거나 브로드웨이 극장에서 전설적인 공연을 감상하세요.\n엠파이어 스테이트 빌딩과 모마(MoMA) 미술관은 뉴욕의 고전과 현대를 대변합니다.\n다양한 인종이 모여 만든 다채로운 푸드트럭부터 고급 레스토랑까지 미식의 천국입니다.", en: "The city that never sleeps, guarded by the Statue of Liberty, and the global hub of culture and finance.\nFeel the vibrant energy of the metropolis under the dazzling billboards of Times Square.\nRelax in the vast green space of Central Park or watch a legendary performance at a Broadway theater.\nThe Empire State Building and MoMA represent the classic and contemporary faces of New York.\nA culinary paradise where you can find everything from diverse street food trucks to fine dining.", ja: "自由の女神が見守る「眠らない街」、全世界の文化と経済の中心地です。\nタイムズスクエアの華やかな看板の下で、活気に満ちた大都市のエネルギーを全身で感じてください。\nセントラルパークの広い森の道で休息を取り、ブロードウェイ劇場で伝説的な公演を観賞してください。\nエンパイアステートビルと近代美術館（MoMA）はニューヨークの古典と現代を代弁しています。\n多様な人種が集まって作った多彩なフードトラックから高級レストランまで、美食の天国です。", zh: "由自由女神像守护的不夜城，全球文化和经济中心。\n在时代广场华丽的广告牌下，全身心感受大都市的活力。 \n在海德公园宽阔的森林步道休息，或在百老汇剧院欣赏传奇演出。 \n帝国大厦和现代艺术博物馆(MoMA)代表了纽约的经典与现代。 \n从各民族聚集形成的多种餐车美食到高级餐厅，这里是美食天堂。" }},
    { id: "sydney", region: "Other", name: { ko: "시드니, 호주", en: "Sydney, Australia", ja: "シドニー、豪州", zh: "悉尼，澳大利亚" }, desc: { ko: "푸른 바다 위에 떠 있는 오페라 하우스가 상징인 아름다운 항구 도시입니다.\n하버 브리지 위를 걷거나 페리를 타고 감상하는 항구의 전경은 평생 잊지 못할 추억이 됩니다.\n본다이 비치에서 파도를 즐기는 서퍼들과 따스한 햇살을 받으며 휴양지의 기분을 만끽해 보세요.\n블루 마운틴 국립공원에서 호주 대자연의 웅장함을 느끼고 코알라와 캥거루를 만나보세요.\n해안가를 따라 늘어선 카페와 레스토랑에서 신선한 해산물 요리를 즐길 수 있습니다.", en: "A stunning harbor city famous for the iconic Sydney Opera House floating on blue waters.\nWalking across the Harbour Bridge or taking a ferry offers unforgettable views of the coastline.\nFeel the vacation vibe with surfers at Bondi Beach and soak up the golden Australian sun.\nDiscover the grandeur of nature at the Blue Mountains and meet adorable koalas and kangaroos.\nEnjoy fresh seafood dishes at various seaside cafés and world-class restaurants.", ja: "青い海に浮かぶオペラハウスが象徴的な、美しい港町です。\nハーバーブリッジの上を歩いたり、フェリーに乗って眺める港の全景は、一生忘れられない思い出になります。\nボンダイビーチで波を楽しむサーファーたちと、温かい日差しを浴びながらリゾート気分を満喫してください。\nブルーマウンテンズ国立公園でオーストラリアの大自然の雄大さを感じ、コアラやカンガルーに出会ってください。\n海岸沿いに立ち並ぶカフェやレストランで、新鮮なシーフード料理を楽しむことができます。", zh: "以漂浮在蓝色大海上的歌剧院为象征的美丽港口城市。\n在海港大桥上漫步或乘坐渡轮欣赏港口全景，将成为终生难忘的回忆。 \n在邦迪海滩与冲浪者一起享受海浪，在温暖的阳光下尽情享受度假心情。 \n在蓝山国家公园感受澳大利亚大自然的壮丽，与考拉和袋鼠见面。 \n在沿海而建的咖啡馆和餐厅享用新鲜的海鲜料理。" }},
    { id: "dubai", region: "Other", name: { ko: "두바이, UAE", en: "Dubai, UAE", ja: "ドバイ、UAE", zh: "迪拜，阿联酋" }, desc: { ko: "세계 최고층 빌딩 부르즈 할리파가 하늘을 찌르는 사막 위의 기적 같은 도시입니다.\n거대한 인공 섬 팜 주메이라와 실내 스키장 등 인간의 상상력이 실현된 곳입니다.\n전통적인 아랍 시장인 '수크'에서 금과 향신료를 구경하며 중동의 이색적인 정취를 느껴보세요.\n붉은 모래 사막에서 즐기는 사파리 투어와 밤하늘 아래 베두인 캠프는 신비로움을 선사합니다.\n화려한 분수 쇼와 럭셔리한 쇼핑몰은 두바이만의 압도적인 스케일을 보여줍니다.", en: "A miraculous desert city where the Burj Khalifa, the world's tallest building, pierces the sky.\nExperience human imagination turned reality at Palm Jumeirah and the indoor ski resorts.\nFeel the exotic atmosphere of the Middle East while browsing gold and spices at traditional Souks.\nDesert safari tours on red dunes and Bedouin camps under the stars offer a mystical experience.\nThe dazzling fountain shows and luxury malls showcase the overwhelming scale of Dubai.", ja: "世界一高いビル、ブルジュ・ハリファが空を突く、砂漠の上の奇跡のような街です。\n巨大な人工島パーム・ジュメイラや室内スキー場など、人間の想像力が実現された場所です。\n伝統的なアラブの市場「スーク」で金や香辛料を眺め、中東のエキゾチックな情緒を感じてください。\n赤い砂砂漠で楽しむサファリツアーと、夜空の下のベドウィンキャンプは神秘的な体験を提供します。\n華やかな噴水ショーとラグジュアリーなショッピングモールは、ドバイならではの圧倒的なスケールを見せてくれます。", zh: "世界最高楼哈利法塔直插云霄，是沙漠上的奇迹城市。\n巨大的巨大人工岛朱美拉棕榈岛和室内滑雪场等，是人类想象力变为现实的地方。 \n在传统的阿拉伯市场“苏克”观看黄金和香料，感受中东异国风情。 \n在红沙沙漠享受的冲锋沙之旅和星空下的贝都因营地带给人神秘感。 \n华丽的喷泉表演和豪华购物中心展示了迪拜特有的压倒性规模。" }},
    { id: "venice", region: "Europe", name: { ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア、イタリア", zh: "威尼斯，意大利" }, desc: { ko: "도로 대신 운하가 흐르고 차 대신 곤돌라가 다니는 낭만적인 물의 도시입니다.\n미로 같은 수로를 따라 펼쳐지는 중세 건축물들은 시간이 멈춘 듯한 풍경을 선사합니다.\n산 마르코 광장에서 비둘기 떼와 함께 커피 한 잔의 여유와 성당의 웅장함을 느껴보세요.\n리알토 다리 위에서 바라보는 일몰과 운하의 반영은 화가들이 사랑한 최고의 피사체입니다.\n유리 공예로 유명한 무라노 섬과 형형색색의 부라노 섬에서 이색적인 인생 사진을 남겨보세요.", en: "The romantic City of Water where canals serve as roads and gondolas replace cars.\nStroll through labyrinthine waterways lined with medieval architecture that seems frozen in time.\nRelax at St. Mark's Square with a cup of coffee while admiring the grandeur of the basilica.\nThe sunset viewed from the Rialto Bridge is a masterpiece that artists have loved for centuries.\nVisit Murano for glass art and Burano for colorful houses to capture your perfect travel photos.", ja: "道路の代わりに運河が流れ、車の代わりにゴンドラが行き交うロマンチックな水の都です。\n迷路のような水路に沿って広がる中世の建築物は、時間が止まったような風景を提供します。\nサン・マルコ広場で鳩の群れと共にコーヒーを楽しみ、大聖堂の雄大さを感じてください。\nリアルト橋の上から眺める夕日と運河の反映は、画家たちが愛した最高の被写体です。\nガラス工芸で有名なムラーノ島と、色とりどりのブラーノ島で、エキゾチックな人生ショットを残してください。", zh: "运河代替道路，贡多拉代替汽车的浪漫水城。\n沿着迷宫般的航道展现的中世纪建筑，呈现出时间仿佛停滞般的风景。 \n在圣马可广场与鸽子群一起享受一杯咖啡的悠闲和圣堂的雄伟。 \n从里亚托桥俯瞰的日落和运河倒影是画家们最爱的摄影题材。 \n在以玻璃工艺闻名的穆拉诺岛和五彩缤纷的布拉诺岛留下异国风情的人生照片。" }},
    { id: "marrakech", region: "Other", name: { ko: "마라케시, 모로코", en: "Marrakech, Morocco", ja: "マラケシュ、モロッコ", zh: "马拉喀什，摩洛哥" }, desc: { ko: "붉은 색 도시 마라케시는 활기찬 시장과 아름다운 정원이 공존하는 신비로운 곳입니다.\n제마 엘 프나 광장에서 펼쳐지는 길거리 공연과 먹거리들은 오감을 자극합니다.\n마조렐 정원의 파란 건축물과 열대 식물들은 사진가들에게 최고의 장소입니다.\n미로 같은 메디나의 골목을 따라 전통 가옥 '리아드'를 탐방하는 재미가 있습니다.\n모로코 전통 요리인 타진과 쿠스쿠스를 맛보며 북아프리카의 정취를 느껴보세요.", en: "The Red City of Marrakech is a mystical place where vibrant souks and lush gardens coexist.\nThe street performances and food stalls at Jemaa el-Fnaa square are a feast for the senses.\nThe Majorelle Garden with its cobalt blue buildings is a top paradise for photographers.\nExplore the traditional 'Riads' while wandering through the labyrinthine Medina alleys.\nSavor authentic Moroccan Tagine and Couscous to fully experience the North African spirit.", ja: "赤い街マラケシュは、活気ある市場と美しい庭園が共存する神秘的な場所です。\nジャマ・エル・フナ広場で繰り広げられる大道芸や食べ物は五感を刺激します。\nマジョレル庭園の青い建築物と熱帯植物は、写真家にとって最高の場所です。\n迷路のようなメディナの路地を通り、伝統的な家屋「リヤド」を訪ねる楽しさがあります。\nモロッコ伝統料理のタジンやクスクスを味わい、北アフリカの情緒を感じてください。", zh: "红色城市马拉喀什是充满活力的市场与美丽花园并存的神秘之地。\n德吉玛广场上演的街头表演和美食刺激着五感。 \n马若雷勒花园的蓝色建筑和热带植物是摄影师们的最佳去处。 \n沿着迷宫般的麦地那小巷探访传统民居“里亚德”极具乐趣。 \n品尝摩洛哥传统美食塔吉锅和古斯米，感受北非风情。" }},
    { id: "santorini", region: "Europe", name: { ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ、ギリシャ", zh: "圣托里尼，希腊" }, desc: { ko: "절벽 위 하얀 집들과 푸른 바다가 어우러진 꿈의 섬입니다.\n이아 마을의 낙조는 세계 3대 석양 중 하나로 꼽힐 만큼 아름답습니다.\n푸른 돔 형태의 지붕은 산토리니를 상징하는 가장 유명한 풍경입니다.\n고대 아크로티리 유적에서 화산 폭발로 사라진 역사를 탐험할 수 있습니다.\n지중해의 신선한 요리와 와인을 즐기며 진정한 휴식을 경험해 보세요.", en: "A dream island with white-washed houses perched on cliffs overlooking the blue Aegean Sea.\nThe sunset in Oia is celebrated as one of the most beautiful in the world.\nIts iconic blue-domed churches are the most recognizable sights of the island.\nExplore the ancient ruins of Akrotiri, a city preserved in volcanic ash.\nExperience ultimate relaxation with fresh Mediterranean cuisine and local wines.", ja: "絶壁の上の白い家々と青い海が調和した夢の島です。\nイアの村の夕日は、世界三大夕日の一つに数えられるほど美しいです。\n青いドーム型の屋根は、サントリーニを象徴する最も有名な風景です。\n古代アクロティリ遺跡で、火山噴火で消えた歴史を探索できます。\n地中海の新鮮な料理とワインを楽しみながら、真の休息を体験してください。", zh: "悬崖上的白房子与蓝大海交相辉映的梦幻之岛。\n伊亚小镇的落日被誉为世界三大日落之一，美不胜收。 \n蓝顶教堂是圣托里尼最具代表性的著名风景。 \n在古阿克罗蒂里遗址探索因火山喷发而消失的历史。 \n享受地中海新鲜料理和美酒，体验真正的休憩。" }},
    { id: "machu-picchu", region: "America", name: { ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ、ペルー", zh: "马丘比丘，秘鲁" }, desc: { ko: "구름 속에 가려진 신비로운 인카 제국의 공중 도시입니다.\n해발 2,430미터 산맥 위에 정교하게 쌓아 올린 석조 기술은 경이로움 그 자체입니다.\n안데스 산맥의 웅장한 대자연 속에서 고대 문명의 신비로운 숨결을 느껴보세요.\n잉카 트레일을 따라 걷는 여정은 전 세계 트레커들에게 최고의 도전이자 로망입니다.\n태양의 신전과 지붕 없는 감옥 등 고대 인카인들의 생활상을 엿볼 수 있습니다.", en: "A mysterious Incan citadel hidden among the clouds high in the Andes Mountains.\nThe sophisticated dry-stone masonry built at 2,430 meters above sea level is a marvel of engineering.\nFeel the mystical pulse of an ancient civilization amidst the grandeur of the mountains.\nWalking the Inca Trail is a top bucket-list adventure for hikers worldwide.\nDiscover the Sun Temple and other ruins that reveal the daily lives of the Incas.", ja: "雲の中に隠された神秘的なインカ帝国の空中都市です。\n標高2,430メートルの山脈の上に精巧に積み上げられた石造技術は、驚異そのものです。\nアンデス山脈の雄大な大自然の中で、古代文明の神秘的な息吹を感じてください。\nインカ・トレイルを歩く旅は、世界中のトレッカーにとって最高の挑戦であり憧れです。\n太陽の神殿や屋根のない監獄など、古代インカ人たちの生活像を垣間見ることができます。", zh: "隐藏在云雾中的神秘印加帝国空中城市。\n在海拔2430米的山脉上精巧堆砌的石造技术本身就是奇迹。 \n在安第斯山脉雄伟的大自然中感受古代文明神秘的气息。 \n沿着印加古道漫步的旅程是全球徒步旅行者最高的挑战与向往。 \n可以窥探太阳神庙和无顶监狱等古代印加人的生活面貌。" }},
    { id: "maldives", region: "Other", name: { ko: "몰디브", en: "Maldives", ja: "モルディブ", zh: "马尔代夫" }, desc: { ko: "인도양의 흩뿌려진 진주라 불리는 지상의 파라다이스입니다.\n에메랄드빛 투명한 바다 위에 지어진 워터 빌라는 완벽한 프라이버시를 보장합니다.\n스노클링과 다이빙을 통해 형형색색의 산호초와 거북이를 만날 수 있습니다.\n무인도에서의 낭만적인 피크닉과 해변에서의 디너는 잊지 못할 순간을 선사합니다.\n아무것도 하지 않을 자유를 만끽하며 진정한 '쉼'의 가치를 발견해 보세요.", en: "A terrestrial paradise often called the scattered pearls of the Indian Ocean.\nWater villas built over crystal-clear emerald waters ensure perfect privacy and romance.\nMeet colorful coral reefs and sea turtles through world-class snorkeling and diving.\nUnforgettable moments await with romantic picnics on uninhabited islands and beach dinners.\nDiscover the true value of 'rest' while enjoying the freedom to do absolutely nothing.", ja: "インド洋に散りばめられた真珠と呼ばれる、地上のパラダイスです。\nエメラルド色の透明な海の上に建てられたウォーターヴィラは、完璧なプライバシーを保証します。\nシュノーケリングやダイビングを通じて、色とりどりのサンゴ礁やウミガメに出会えます。\n無人島でのロマンチックなピクニックやビーチでのディナーは、忘れられない瞬間を提供します。\n何もしない自由を満喫しながら、真の「休み」の価値を発見してください。", zh: "被誉为印度洋散落珍珠的人间天堂。\n建在翡翠色透明海水上的水上别墅保证了完美的隐私。 \n通过浮潜和潜水可以遇见五彩缤纷的珊瑚礁和海龟。 \n无人岛上的浪漫野餐和海边晚餐将带来难忘时刻。 \n尽情享受无所事事的自由，发现真正“休息”的价值。" }},
    { id: "petra", region: "Other", name: { ko: "페트라, 요르단", en: "Petra, Jordan", ja: "ペトラ、ヨルダン", zh: "佩特拉，约旦" }, desc: { ko: "붉은 사암 절벽을 깎아 만든 신비로운 고대 도시, 나바테아 왕국의 수도입니다.\n좁은 협곡 '시크'를 지나 나타나는 알 카즈네의 웅장함은 압도적인 감동을 줍니다.\n바위 산을 직접 깎아 만든 수천 개의 무덤과 사원, 로마식 극장을 탐험해 보세요.\n밤이면 수천 개의 촛불로 밝혀지는 페트라 나이트 투어는 환상적인 분위기를 자아냅니다.\n인류의 경이로운 창의력과 자연의 조화를 느낄 수 있는 유네스코 세계유산입니다.", en: "A mystical ancient city carved into red sandstone cliffs, once the capital of the Nabataean Kingdom.\nThe majesty of Al-Khazneh revealed after walking through the narrow Siq canyon is overwhelming.\nExplore thousands of tombs, temples, and a Roman-style theater all hewn directly from the rock faces.\nThe Petra by Night tour, illuminated by thousands of candles, offers a truly magical atmosphere.\nA UNESCO World Heritage site showcasing the harmony between human creativity and nature.", ja: "赤い砂岩の絶壁を削って作られた神秘的な古代都市、ナバテア王国の首都です。\n狭い峡谷「シーク」を通り抜けて現れるアル・カズネの雄大さは、圧倒的な感動を与えます。\n岩山を直接削って作った数千の墓や寺院、ローマ式の劇場を探索してください。\n夜になると数千のキャンドルで照らされるペトラ・ナイトツアーは、幻想的な雰囲気を醸し出します。\n人類の驚異的な創造力と自然の調和を感じることができるユネスコ世界遺産です。", zh: "凿刻在红色砂岩悬崖上的神秘古代城市，纳巴泰王国的首都。\n穿过狭窄的峡谷“蛇道”展现出的卡兹尼神庙的雄伟带给人压倒性的感动。 \n探索直接在岩山上开凿的数千个墓穴、神庙和罗马式剧场。 \n夜晚由数千支蜡烛点亮的佩特拉之夜巡游营选出梦幻般的氛围。 \n这是能感受到人类惊人的创造力与自然和谐的联合国教科文组织世界遗产。" }},
    { id: "cairo", region: "Other", name: { ko: "카이로, 이집트", en: "Cairo, Egypt", ja: "カイロ、エジプト", zh: "开罗，埃及" }, desc: { ko: "인류 문명의 발상지 중 하나로, 거대한 피라미드가 지키고 있는 유구한 도시입니다.\n기자 지구의 스핑크스와 피라미드에서 고대 이집트의 신비로운 힘을 느껴보세요.\n이집트 박물관에서 투탕카멘의 황금 마스크와 수많은 미라들을 관람해 보세요.\n나일 강변에서 펠루카를 타고 강물에 비친 일몰을 감상하는 평온함을 즐겨보세요.\n북적이는 칸 엘 칼릴리 시장에서 중동의 전통 공예품을 구경하며 흥정해 보세요.", en: "One of the cradles of civilization, home to the Great Pyramids that have stood for millennia.\nFeel the mystical power of ancient Egypt at the Sphinx and the Pyramids of Giza.\nView Tutankhamun's golden mask and legendary mummies at the Egyptian Museum.\nEnjoy a peaceful sunset on a traditional Felucca boat sailing along the Nile River.\nBrowse and bargain for traditional crafts at the bustling Khan el-Khalili market.", ja: "人類文明の発祥地の一つであり、巨大なピラミッドが守っている悠久の街です。\nギザ地区のスフィンクスとピラミッドで、古代エ Egyptian の神秘的な力を感じてください。\nエジプト考古学博物館でツタンカーメンの黄金のマスクと数多くのミイラを鑑賞してください。\nナイル川沿いでフェルッカに乗り、川面に映る夕日を眺める平穏な時間を楽しんでください。\n賑やかなハーン・エル・ハリーリ市場で中東の伝統工芸品を眺めながら交渉してみてください。", zh: "人类文明发祥地之一，由巨型金字塔守护的悠久城市。\n在吉萨区的狮身人面像和金字塔感受古埃及神秘的力量。 \n在埃及博物馆观赏图坦卡蒙的金面具和众多木乃伊。 \n在尼罗河畔乘坐帆船，享受倒映在江面上的日落宁静。 \n在繁忙的哈利利市场观看中东传统工艺品并尝试讨价还价。" }},
    { id: "reykjavik", region: "Other", name: { ko: "레이캬비크, 아이슬란드", en: "Reykjavik, Iceland", ja: "レイキャビク、アイスランド", zh: "雷克雅未克，冰岛" }, desc: { ko: "북극해와 맞닿은 세계 최북단의 수도로, 오로라와 온천이 매혹적인 곳입니다.\n할그림스캬르캬 교회의 독특한 디자인과 전망대에서 바라보는 도시 전경은 압권입니다.\n블루 라군 온천에서 따뜻한 우윳빛 물에 몸을 담그며 비현실적인 휴식을 만끽하세요.\n골든 서클 투어를 통해 굴포스 폭포와 게이시르 간헐천의 장관을 목격할 수 있습니다.\n운이 좋다면 밤하늘을 수놓는 신비로운 초록빛 오로라를 직접 만나는 행운을 누려보세요.", en: "The world's northernmost capital, captivating visitors with Northern Lights and geothermal spas.\nThe unique design of Hallgrímskirkja church offers panoramic views of the colorful city.\nRelax in the surreal milky-blue waters of the Blue Lagoon geothermal spa.\nWitness the power of nature at Gullfoss waterfall and Geysir during a Golden Circle tour.\nIf you're lucky, experience the magic of the green Aurora Borealis dancing across the night sky.", ja: "北極海に面した世界最北の首都で、オーロラと温泉が魅力的な場所です。\nハットルグリムス教会の独特なデザインと展望台から眺める街の全景は圧巻です。\nブルーラグーン温泉で温かい乳白色のお湯に浸かり、非現実的な休息を満喫してください。\nゴールデンサークルツアーを通じてグトルフォスの滝やゲイシールの間欠泉の壮観を目撃できます。\n運が良ければ夜空를 彩る神秘的な緑色のオーロラに直接出会う幸運を掴んでください。", zh: "与北冰洋接壤的世界最北端首都，极光和温泉极具魅力。\n哈尔格림斯大教堂独特的设计和从观景台俯瞰的城市全景令人震撼。 \n在蓝湖温泉泡在温暖的乳白色水中，尽情享受超现实的休憩。 \n通过黄金圈之旅可以目睹黄金瀑布和盖歇尔间歇泉的壮丽景观。 \n运气好的话，可以亲眼目睹点缀夜空的神奇绿色极光。" }},
    { id: "zurich", region: "Europe", name: { ko: "취리히, 스위스", en: "Zurich, Switzerland", ja: "チューリッヒ、スイス", zh: "苏黎世，瑞士" }, desc: { ko: "알프스의 관문이자 맑은 호수가 도심을 적시는 세계에서 가장 살기 좋은 도시 중 하나입니다.\n구시가지의 좁은 골목길을 산책하며 고풍스러운 스위스의 매력을 발견해 보세요.\n취리히 호수에서 유람선을 타고 설산의 풍경을 감상하며 여유로운 시간을 보내보세요.\n반호프슈트라세의 럭셔리한 숍들을 구경하고 달콤한 스위스 초콜릿을 맛보세요.\n리마트 강변의 카페에 앉아 평화로운 도시의 분위기를 온전히 느껴보세요.", en: "The gateway to the Alps and one of the world's most livable cities with a crystal-clear lake.\nStroll through the narrow cobblestone streets of the Old Town to discover Swiss charm.\nTake a boat trip on Lake Zurich to admire the breathtaking views of the snow-capped Alps.\nBrowse luxury boutiques on Bahnhofstrasse and indulge in world-famous Swiss chocolates.\nRelax at a riverside café along the Limmat River to fully absorb the peaceful atmosphere.", ja: "アルプスの門戸であり、澄んだ湖が都心を潤す、世界で最も住みやすい街の一つです。\n旧市街の狭い路地を散策し、古風なスイスの魅力を発見してください。\nチューリッヒ湖で遊覧船に乗り、雪山の風景を鑑賞しながらゆったりとした時間を過ごしてください。\nバーンホフ通り（駅前通り）のラグジュアリーなショップを眺め、甘いスイスチョコレートを味わってください。\nリマト川沿いのカフェに座り、平和な街の雰囲気を存分に感じてください。", zh: "阿尔卑斯山的门户，清澈的湖泊润泽着市中心，是世界上最宜居的城市之一。\n漫步在旧城区的狭窄小巷，发现古色古香的瑞士魅力。 \n在苏黎世湖乘坐游船，欣赏雪山风景，度过悠闲时光。 \n观看班霍夫大街的豪华商店，品尝甜美的瑞士巧克力。 \n坐在利马特河畔的咖啡馆，全身心感受宁静的城市氛围。" }},
    { id: "stockholm", region: "Europe", name: { ko: "스톡홀름, 스웨덴", en: "Stockholm, Sweden", ja: "ストックホルム、スウェーデン", zh: "斯德哥尔摩，瑞典" }, desc: { ko: "14개의 섬이 다리로 연결된 북유럽의 베네치아로, 깨끗하고 우아한 도시 미관을 자랑합니다.\n감라 스탄의 주황빛 중세 건물들 사이를 걸으며 북유럽의 낭만을 즐겨보세요.\n바사 박물관에서 복원된 17세기의 거대한 전함의 웅장함을 직접 목격해 보세요.\n노벨상 시상식이 열리는 시청사의 황금빛 연회장과 건축미를 감상해 보세요.\n여름철 군도 투어를 통해 수많은 섬과 바다가 어우러진 자연의 평화로움을 만끽해 보세요.", en: "The 'Venice of the North' built on 14 islands, boasting clean and elegant urban aesthetics.\nWander through the medieval orange buildings of Gamla Stan to feel the Nordic romance.\nWitness the grandeur of a restored 17th-century warship at the Vasa Museum.\nAdmire the architecture and the golden banquet hall of the City Hall, where Nobel prizes are celebrated.\nEnjoy a boat trip through the vast archipelago for a peaceful escape into nature during summer.", ja: "14の島が橋でつながれた「北欧のヴェネツィア」で、清潔で優雅な街並みを誇ります。\nガムラスタンのオレンジ色の中世の建物の中を歩き、北欧のロマンを楽しんでください。\nヴァーサ号博物館で復元された17世紀の巨大な戦艦の雄大さを直接目撃してください。\nノーベル賞授賞式が行われる市庁舎の黄金の宴会場と建築美を鑑賞してください。\n夏の時期に群島ツアーを通じて、数多くの島と海が調和した自然の平穏を満喫してください。", zh: "由14座岛屿经桥梁连接而成的“北方威尼斯”，以整洁优雅的城市景观著称。\n穿行在老城(Gamla Stan)橙色中世纪建筑间，享受北欧浪漫。 \n在瓦萨沉船博物馆亲眼目睹修复后的17世纪巨型战舰的雄姿。 \n欣赏举办诺贝尔奖颁奖典礼的市政厅黄金宴会厅及其建筑美。 \n夏季通过群岛之旅，尽情享受无数岛屿与大海交织出的自然宁静。" }},
    { id: "osaka", region: "Asia", name: { ko: "오사카, 일본", en: "Osaka, Japan", ja: "大阪、日本", zh: "大阪，日本" }, desc: { ko: "미식과 열정의 도시 오사카는 일본 여행의 즐거움이 가득한 곳입니다.\n도톤보리의 화려한 간판들과 거리 음식들은 여행객들의 입과 눈을 즐겁게 합니다.\n오사카 성의 웅장한 천수각에서 일본 역사의 한 페이지를 감상해 보세요.\n유니버설 스튜디오 재팬에서 인기 영화 속 세계를 직접 경험할 수 있습니다.\n현지인들의 따뜻한 정과 활기찬 에너지가 넘치는 시장 문화를 체험해 보세요.", en: "The city of food and passion, Osaka is filled with delights for every traveler.\nThe dazzling neon signs and street food of Dotonbori delight both your eyes and palate.\nExplore a page of Japanese history at the grand Osaka Castle's main tower.\nExperience the magic of popular films come to life at Universal Studios Japan.\nFeel the warm hospitality and vibrant energy of the local market culture.", ja: "美食と情熱の街大阪は、日本旅行の楽しさに満ちた場所です。\n道頓堀の華やかな看板とストリートフードは旅行者の口と目を楽しませます。\n大阪城の壮大な天守閣で日本歴史の一ページを鑑賞してください。\nユニバーサル・スタジオ・ジャパンで人気映画の中の世界を直接体験できます。\n地元の人々の温かい情と活気あるエネルギーが溢れる市場文化を体験してください。", zh: "美食与热情的城市大阪，是日本旅行乐趣横生的地方。\n道顿堀华丽的招牌和街头美食让游客大饱口福与眼福。 \n在大阪城宏伟的天守阁欣赏日本历史的一页。 \n在大阪环球影城直接体验人气电影中的世界。 \n体验当地人温暖的情谊和充满活力的市场文化。" }},
    { id: "bangkok", region: "Asia", name: { ko: "방콕, 태국", en: "Bangkok, Thailand", ja: "バンコク、タイ", zh: "曼谷，泰国" }, desc: { ko: "화려한 왕궁과 황금빛 사원, 그리고 현대적인 쇼핑몰이 공존하는 태국의 수도입니다.\n짜오프라야 강을 따라 보트를 타고 도시의 풍경과 야경을 감상해 보세요.\n카오산 로드의 활기찬 밤 문화와 전 세계 여행자들의 열기를 느껴보세요.\n태국 전통 마사지로 여행의 피로를 풀고 현지 야시장에서 맛있는 음식을 즐기세요.\n전통과 현대가 어우러진 다채로운 매력은 방콕을 반복해서 찾게 만드는 이유입니다.", en: "The capital of Thailand where ornate palaces and golden temples meet modern malls.\nTake a boat trip along the Chao Phraya River to see the city's unique landscape.\nFeel the energy of global travelers and the vibrant nightlife at Khaosan Road.\nRelax with a traditional Thai massage and enjoy delicious street food at night markets.\nThe colorful mix of tradition and modernity is why travelers keep returning to Bangkok.", ja: "華やかな王宮と黄金の寺院、そして現代的なショッピングモールが共存するタイの首都です。\nチャオプラヤ川に沿ってボートに乗り、街の風景と夜景を鑑賞してください。\nカオサン通りの活気ある夜の文化と世界中の旅行者の熱気を感じてください。\nタイ伝統マッサージで旅行の疲れを癒し、地元の夜市で美味しい食べ物を楽しんでください。\n伝統と現代が調和した多彩な魅力は、バンコクを繰り返し訪れさせる理由です。", zh: "华丽的皇宫、金色的寺庙和现代购物中心并存的泰国首都。\n沿着湄南河乘船欣赏城市风光和夜景。 \n在考山路感受充满活力的夜文化和全球游客的热情。 \n通过泰国传统按摩缓解旅行疲劳，在当地夜市享用美食。 \n传统与现代交织的多彩魅力是让人反复到访曼谷的原因。" }},
    { id: "singapore-full", region: "Asia", name: { ko: "싱가포르", en: "Singapore", ja: "シンガポール", zh: "新加坡" }, desc: { ko: "도시 전체가 거대한 정원 같은 청정 국가로, 다양한 문화가 공존하는 미식의 천국입니다.\n가든스 바이 더 베이의 슈퍼트리 쇼와 마리나 베이 샌즈의 야경은 미래 지향적입니다.\n유니버설 스튜디오가 있는 센토사 섬에서 가족과 함께 즐거운 시간을 보내보세요.\n차이나타운, 리틀 인디아, 아랍 스트리트에서 전 세계의 다채로운 문화를 체험하세요.\n세계 최고의 공항으로 꼽히는 창이 공항의 쥬얼 폭포는 여행의 시작과 끝을 화려하게 장식합니다.", en: "A clean and green garden city-state where diverse cultures and cuisines coexist perfectly.\nThe Supertree light show at Gardens by the Bay and Marina Bay Sands offer a futuristic vibe.\nHave a fun-filled day at Sentosa Island, home to Universal Studios Singapore.\nExplore the colorful heritage of Chinatown, Little India, and Arab Street.\nThe Jewel rain vortex at Changi Airport provides a spectacular start and end to your journey.", ja: "街全体が巨大な庭園のようなクリーンな国で、多様な文化が共存する美食の天国です。\nガーデンズ・バイ・ザ・ベイのスーパーツリーショーとマリーナベイ・サンズの夜景は未来志向です。\nユニバーサル・スタジオがあるセントーサ島で家族と一緒に楽しい時間を過ごしてください。\nチャイナタウン、リトル・インディア、アラブ・ストリートで世界中の多彩な文化を体験してください。\n世界最高の空港に数えられるチャンギ空港のジュエル滝は、旅行の始まりと終わりを華やかに飾ります。", zh: "整个城市如同一座巨大花园的清洁国家，多元文化并存的美食天堂。\n滨海湾花园的超级树灯光秀和滨海湾金沙的夜景充满未来感。 \n在拥有环球影城的圣淘沙岛与家人共度愉快时光。 \n在牛车水、小印度和阿拉伯街体验世界各地的多彩文化。 \n被誉为世界顶级机场的新加坡樟宜机场星耀樟宜瀑布为旅行的开始与结束画上华丽句号。" }}
];

// Add 30 more unique cities to reach 50
const extraUniqueCities = [
    { id: "lisbon-full", region: "Europe", name: { ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン、ポルトガル", zh: "里斯本，葡萄牙" }, desc: { ko: "대서양을 마주한 언덕 위의 도시로, 노란 트램과 타일 장식 아줄레주가 매력적입니다.\n벨렘 탑과 제로니무스 수도원에서 대항해 시대의 영광을 엿볼 수 있습니다.\n알파마 지구의 미로 같은 골목을 헤매며 포르투갈의 영혼 '파두' 선율에 젖어보세요.\n전통 에그타르트 원조집에서 갓 구운 파스텔 데 나타의 달콤함을 경험해 보세요.\n테주 강변의 선셋 포인트에서 바라보는 일몰은 리스본 여행의 정점입니다.", en: "A charming hillside city facing the Atlantic, famous for yellow trams and Azulejo tiles.\nWitness the glory of the Age of Discovery at Belém Tower and Jerónimos Monastery.\nGet lost in the maze-like Alfama district and listen to the soulful melodies of Fado music.\nIndulge in the sweetness of original egg tarts at the world-famous Pastéis de Belém.\nThe sunset view from the Tagus riverfront is the ultimate highlight of any Lisbon trip.", ja: "大西洋に面した丘の上の街で、黄色い路面電車とタイルの装飾アズレージョが魅力的です。\nベレンの塔とジェロニモス修道院で、大航海時代の栄光を垣間見ることができます。\nアルファマ地区の迷路のような路地を歩き、ポルトガルの魂「ファド」の旋律に浸ってください。\n伝統的なエッグタルトの元祖店で、焼きたてのパステル・デ・ナタの甘さを体験してください。\nテージョ川沿いのサンセットポイントから眺める夕日は、リスボン旅行の頂点です。", zh: "面对大西洋的丘陵城市，黄色的有轨电车和瓷砖装饰阿祖莱若瓷砖极具魅力。\n在贝伦塔和热罗尼莫斯修道院可以窥见大航海时代的辉煌。 \n穿梭在阿尔法玛区迷宫般的小巷，沉浸在葡萄牙之魂“法多”的旋律中。 \n在传统的蛋挞鼻祖店体验刚出炉的贝伦挞的甜蜜。 \n在塔霍河畔的日落点观看日落是里斯本之旅的巅峰。" }},
    { id: "hanoi-full", region: "Asia", name: { ko: "하노이, 베트남", en: "Hanoi, Vietnam", ja: "ハノイ、ベトナム", zh: "河内，越南" }, desc: { ko: "천년 역사의 숨결이 느껴지는 베트남의 수도로, 고풍스러운 골목과 호수가 아름답습니다.\n호안끼엠 호수 주변을 산책하며 현지인들의 여유로운 일상을 감상해 보세요.\n프랑스 식민지 시대의 건축물들과 전통 가옥들이 어우러진 독특한 도시 경관을 자랑합니다.\n길거리 카페에 앉아 베트남 전통 커피인 '카페 쓰어다'를 마시며 여유를 느껴보세요.\n맛있는 쌀국수와 분짜 등 베트남 정통 미식을 저렴한 가격에 풍부하게 즐길 수 있습니다.", en: "The 1,000-year-old capital of Vietnam, blending ancient history with beautiful lakes and alleys.\nTake a stroll around Hoan Kiem Lake to enjoy the relaxed daily lives of the locals.\nAdmire the unique cityscape where French colonial architecture meets traditional houses.\nSip on a traditional Vietnamese iced coffee (Ca Phe Sua Da) at a sidewalk café.\nIndulge in authentic Vietnamese cuisine like Pho and Bun Cha at incredibly affordable prices.", ja: "千年の歴史の息吹が感じられるベトナムの首都で、古風な路地と湖が美しいです。\nホアンキエム湖周辺を散策し、地元の人々のゆったりとした日常を眺めてみてください。\nフランス植民地時代の建築物と伝統的な家屋が調和した独特な街並みを誇ります。\n路上のカフェに座り、ベトナム伝統のコーヒー「カフェ・スア・ダ」を飲みながら余裕を感じてください。\n美味しいフォーやブンチャなど、ベトナム正統派の美食を安価で豊富に楽しめます。", zh: "透着千年历史气息的越南首都，古朴的小巷和湖泊美不胜收。\n在还剑湖周边散步，欣赏当地人悠闲的日常生活。 \n以法国殖民时期的建筑与传统民居交织出的独特城市景观著称。 \n坐在街边咖啡馆喝一杯越南传统咖啡“滴漏咖啡”，享受悠闲。 \n可以以低廉的价格尽情享用美味的河粉、烤肉米粉等越南正宗美食。" }},
    { id: "copenhagen-full", region: "Europe", name: { ko: "코펜하겐, 덴마크", en: "Copenhagen, Denmark", ja: "コペンハーゲン、デンマーク", zh: "哥本哈根，丹麦" }, desc: { ko: "북유럽의 디자인과 감성이 가득한 도시로, 세계에서 가장 행복한 사람들이 사는 곳입니다.\n뉘하운 운하의 알록달록한 건물들은 코펜하겐을 상징하는 가장 아름다운 풍경입니다.\n자전거를 타고 도심 구석구석을 누비며 친환경적이고 세련된 문화를 체험해 보세요.\n티볼리 공원에서 동화 같은 놀이공원의 낭만과 즐거움을 만끽할 수 있습니다.\n안데르센의 동화 속 인어공주 동상을 방문하여 코펜하겐의 전설을 만나보세요.", en: "A city full of Nordic design and soul, home to some of the happiest people in the world.\nThe colorful buildings of Nyhavn canal are the most iconic and beautiful sights of the city.\nExplore every corner of the city by bike to experience a sustainable and stylish culture.\nEnjoy the fairy-tale romance and fun at Tivoli Gardens, one of the world's oldest amusement parks.\nVisit the Little Mermaid statue to connect with the legendary fairy tales of Hans Christian Andersen.", ja: "北欧のデザインと感性が溢れる街で、世界で最も幸せな人々が住む場所です。\nニューハウン運河の色とりどりの建物は、コペンハーゲンを象徴する最も美しい風景です。\n自転車に乗って都心の隅々を巡り、環境に優しく洗練された文化を体験してください。\nチボリ公園で童話のような遊園地のロマンと楽しさを満喫できます。\nアンデルセンの童話の中の人魚姫の像を訪ね、コペンハーゲンの伝説に出会ってください。", zh: "充满北欧设计感与格调的城市，居住着世界上最幸福的人们。\n新哈芬运河五颜六色的建筑是哥本哈根最具代表性的美丽风景。 \n骑着自行车穿梭在城市每个角落，体验环保而时尚的文化。 \n在蒂沃利公园尽情享受童话般游乐园的浪漫与乐趣。 \n访问安徒生童话中的小美人鱼雕像，邂逅哥本哈根的传说。" }},
    { id: "berlin", region: "Europe", name: { ko: "베를린, 독일", en: "Berlin, Germany", ja: "ベルリン、ドイツ", zh: "柏林，德国" }, desc: { ko: "역사의 아픔을 딛고 현대 예술과 자유의 상징으로 거듭난 독일의 역동적인 수도입니다.\n이스트 사이드 갤러리의 벽화들을 보며 베를린 장벽의 역사와 평화의 소중함을 느껴보세요.\n브란덴부르크 문은 베를린의 오랜 역사와 통일을 상징하는 가장 유명한 랜드마크입니다.\n세계적인 박물관들이 모여 있는 박물관 섬에서 인류의 예술 유산을 감상해 보세요.\n밤이면 전 세계 클러버들의 성지인 베를린의 힙한 밤 문화를 체험할 수 있습니다.", en: "A dynamic capital reborn as a symbol of freedom and modern art from the shadows of history.\nFeel the importance of peace while viewing murals on the Berlin Wall at the East Side Gallery.\nThe Brandenburg Gate stands as the most famous landmark representing history and unity.\nAdmire human artistic heritage at Museum Island, home to several world-renowned museums.\nExperience Berlin's world-famous hip nightlife, considered a pilgrimage site for clubbers.", ja: "歴史の痛みを乗り越え、現代芸術と自由の象徴として生まれ変わったドイツのダイナミックな首都です。\nイーストサイドギャラリーの壁画を見ながら、ベルリンの壁の歴史と平和の尊さを感じてください。\nブランデンブルク門は、ベルリンの長い歴史と統一を象徴する最も有名なランドマークです。\n世界的な博物館が集まっている博物館島で、人類の芸術遺産を鑑賞してください。\n夜には世界中のクラバーたちの聖地であるベルリンのヒップな夜の文化を体験できます。", zh: "跨越历史创伤，重生为现代艺术与自由象征的德国动态首都。\n观看东边画廊的壁画，感受柏林墙的历史与和平的珍贵。 \n勃兰登堡门是象征柏林悠久历史与统一的最著名地标。 \n在汇聚了世界级博物馆的博物馆岛欣赏人类艺术遗产。 \n夜晚可以体验身为全球博主圣地的柏林时尚夜文化。" }}
];

places.push(...extraUniqueCities);

// Adding more unique cities to reach 50
const moreCities = [
    { id: "florence", region: "Europe", name: { ko: "피렌체, 이탈리아", en: "Florence, Italy", ja: "フィレンツェ、イタリア", zh: "佛罗伦萨，意大利" }, desc: { ko: "르네상스 예술이 꽃피운 도시로, 도시 전체가 하나의 거대한 박물관 같은 곳입니다.\n두오모 성당의 붉은 돔은 피렌체에서 가장 아름다운 실루엣을 만들어냅니다.\n우피치 미술관에서 미켈란젤로와 다빈치의 진품을 감상하는 영광을 누려보세요.\n베키오 다리 위의 보석 상점들을 구경하며 아르노 강의 낭만적인 풍경을 즐겨보세요.\n피렌체 스타일의 티본 스테이크 '비스테카'와 와인을 맛보며 미식 여행을 완성하세요.", en: "The birthplace of the Renaissance, where the entire city feels like a massive living museum.\nThe red dome of the Duomo creates the most beautiful and iconic silhouette in Florence.\nAdmire original masterpieces by Michelangelo and Da Vinci at the Uffizi Gallery.\nBrowse jewelry shops on the Ponte Vecchio while enjoying romantic views of the Arno River.\nComplete your journey with a Florentine T-bone steak (Bistecca) and fine Italian wine.", ja: "ルネサンス芸術が花開いた街で、街全体が一つの巨大な博物館のような場所です。\nドゥオーモ大聖堂の赤いドームは、フィレンツェで最も美しいシルエットを作り出します。\nウフィツィ美術館でミケランジェロやダ・ヴィンチの真作を鑑賞する光栄を味わってください。\nヴェッキオ橋の上の宝石店を眺めながら、アルノ川のロマンチックな風景を楽しんでください。\nフィレンツェスタイルのティーボーンステーキ「ビステッカ」とワインを味わい、美食旅行を完成させてください。", zh: "文艺复兴艺术盛放的城市，整个城市就像一座巨大的博物馆。\n圣母百花大教堂的红屋顶营造出佛罗伦萨最美丽的轮廓。 \n在乌菲兹美术馆欣赏米开朗基罗和达芬奇真迹的荣光。 \n观看维琪奥桥上的珠宝店，享受阿诺河的浪漫风景。 \n品尝佛罗伦萨风格的丁骨牛排和美酒，完成美食之旅。" }},
    { id: "prague-full", region: "Europe", name: { ko: "프라하, 체코", en: "Prague, Czech Republic", ja: "プラハ、チェコ", zh: "布拉格，捷克" }, desc: { ko: "중세 시대의 붉은 지붕들이 동화 같은 풍경을 만들어내는 '북쪽의 로마'입니다.\n카를교 위에서 구시가지 교탑을 바라보며 악사들의 연주와 낭만을 만끽해 보세요.\n프라하 성의 웅장한 규모와 성 비투스 대성당의 화려한 스테인드글라스는 압권입니다.\n천문 시계 아래 모여든 인파와 함께 정각마다 펼쳐지는 인형극을 관람해 보세요.\n세계적으로 유명한 체코 맥주와 굴라쉬를 맛보며 프라하의 밤을 즐겨보세요.", en: "The 'Rome of the North' where medieval red roofs create a stunning fairy-tale cityscape.\nEnjoy the romantic melodies of street musicians while walking across the iconic Charles Bridge.\nThe sheer scale of Prague Castle and the dazzling stained glass of St. Vitus Cathedral are breathtaking.\nJoin the crowd at Old Town Square to watch the hourly show of the medieval Astronomical Clock.\nSavor world-famous Czech beer and hearty goulash while soaking in the nightlife of Prague.", ja: "中世時代の赤い屋根が童話のような風景を作り出す「北のローマ」です。\nカレル橋の上で旧市街の橋塔を眺めながら、音楽家たちの演奏とロマンを満喫してください。\nプラハ城の壮大な規模と聖ヴィート大聖堂の華やかなステンドグラスは圧巻です。\n天文時計の下に集まった群衆と共に、正時ごとに繰り広げられる人形劇を観覧してください。\n世界的に有名なチェコビールとグラーシュを味わいながら、プラハの夜を楽しんでください。", zh: "中世纪的红屋顶构成童话般风景的“北欧罗马”。\n在查理大桥上眺望旧城桥塔，尽情享受乐手的演奏与浪漫。 \n布拉格城堡的宏伟规模和圣维特大教堂华丽的花窗玻璃令人叹为观止。 \n与聚集在天文钟下的人群一起观看每逢整点上演的人偶剧。 \n品尝享誉世界的捷克啤酒和红烩牛肉，享受布拉格之夜。" }}
];

// Combine all and unique filter to ensure exactly 50 distinct records
const uniquePlacesMap = new Map();
[...places, ...remainingLocations, ...moreCities].forEach(p => {
    if(!uniquePlacesMap.has(p.id)) uniquePlacesMap.set(p.id, p);
});

// If still under 50, add more famous cities
const worldFamous = [
    { id: "munich", region: "Europe", name: { ko: "뮌헨, 독일", en: "Munich, Germany", ja: "ミュンヘン、ドイツ", zh: "慕尼黑，德国" }, desc: { ko: "옥토버페스트의 고장으로 유명하며 고풍스러운 광장과 활기찬 맥주 문화가 매력적입니다.\n마리엔 광장의 신시청사 인형극은 뮌헨 여행의 놓칠 수 없는 즐거움입니다.\n영국 정원에서 여유로운 산책을 즐기거나 서핑을 즐기는 이색적인 광경을 보세요.\nBMW 박물관과 알리안츠 아레나에서 독일의 첨단 기술과 축구 열기를 느껴보세요.\n전통 맥주집 '호프브로이하우스'에서 시원한 생맥주와 학센을 꼭 맛보세요.", en: "Famous for Oktoberfest, Munich charms with historic squares and a vibrant beer culture.\nThe glockenspiel show at Marienplatz is a must-see highlight of any Munich visit.\nRelax in the vast English Garden or watch surfers on the urban river wave.\nExperience German engineering at the BMW Museum and football passion at Allianz Arena.\nSavor a fresh draft beer and pork knuckle at the legendary Hofbräuhaus.", ja: "オクトーバーフェストの故郷として有名で、古風な広場と活気あるビール文化が魅力的です。\nマリエン広場の新市庁舎の人形劇は、ミュンヘン旅行の欠かせない楽しみです。\n英国庭園でゆったりとした散歩を楽しんだり、サーフィンを楽しむ異色の光景を見てください。\nBMW博物館とアリアンツ・アレーナでドイツの先端技術とサッカーの熱気を感じてください。\n伝統的なビアホール「ホフブロイハウス」で、冷たい生ビールとハクセをぜひ味わってください。", zh: "以慕尼黑啤酒节闻名，古朴的广场和充满活力的啤酒文化极具魅力。\n玛利亚广场新市政厅的人偶剧是慕尼黑之旅不可错过的乐趣。 \n在英国花园享受悠闲散步，或观看冲浪的异国景观。 \n在BMW博物馆和安联球场感受德国的尖端技术和足球热潮。 \n务必在传统啤酒馆“皇家啤酒屋”品尝冰爽的生啤和德国猪肘。" }},
    { id: "taipei", region: "Asia", name: { ko: "타이베이, 대만", en: "Taipei, Taiwan", ja: "台北、台湾", zh: "台北，台湾" }, desc: { ko: "친절한 미소와 끊임없는 먹거리가 가득한 대만의 수도, 야시장의 천국입니다.\n타이베이 101 타워에서 도시의 화려한 전경을 감상하고 대만의 자부심을 느껴보세요.\n국립 고궁 박물관에서 중국 역사상 최고의 보물들을 만나보는 시간을 가져보세요.\n용산사의 자욱한 향연기 속에서 대만 사람들의 소박한 소망과 신앙을 엿볼 수 있습니다.\n스린 야시장에서 지파이와 버블티 등 다채로운 대만 길거리 음식을 정복해 보세요.", en: "The capital of Taiwan, a paradise for night market lovers with friendly smiles everywhere.\nAdmire the panoramic city views from Taipei 101, once the world's tallest building.\nDiscover the finest treasures of Chinese history at the National Palace Museum.\nWitness the local faith and daily life amidst the incense at Longshan Temple.\nConquer the diverse street foods like Fried Chicken and Bubble Tea at Shilin Night Market.", ja: "親切な笑顔と絶え間ない食べ物に満ちた台湾の首都、夜市の天国です。\n台北101タワーから街の華やかな全景を鑑賞し、台湾の誇りを感じてください。\n国立故宮博物院で、中国の歴史上最高の宝物たちに出会う時間を持ってください。\n龍山寺の立ち込めるお香の煙の中で、台湾の人々の素朴な願いと信仰を垣간見ることができます。\n士林夜市でジーパイやタピオカティーなど、多彩な台湾ストリートフードを制覇してください。", zh: "充满亲切微笑和无尽美食的台湾首都，夜市天堂。\n在台北101大楼欣赏城市华丽全景，感受台湾的骄傲。 \n在国立故宫博物院邂逅中国历史上顶级的瑰宝。 \n在龙山寺缭绕的香烟中窥探台湾人淳朴的愿望与信仰。 \n在士林夜市征服大鸡排和珍珠奶茶等多彩的台湾街头美食。" }}
];

worldFamous.forEach(p => {
    if(!uniquePlacesMap.has(p.id)) uniquePlacesMap.set(p.id, p);
});

// Final list of 50
const finalPlaces = Array.from(uniquePlacesMap.values()).slice(0, 50);

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
    render(finalPlaces);
    const selectedCity = document.getElementById("selected-city-name");
    if (selectedCity && selectedCity.getAttribute("data-place-id")) {
        const placeId = selectedCity.getAttribute("data-place-id");
        const place = finalPlaces.find(p => p.id === placeId);
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
        card.appendChild(copyright);
        card.appendChild(content);
        container.appendChild(card);
    });
}

function travelToDestination(id, imgSrc) {
    isStudioOpen = true;
    const place = finalPlaces.find(p => p.id === id);
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
    if(region==='all') render(finalPlaces);
    else render(finalPlaces.filter(p=>p.region===region));
}

const search=document.getElementById("search");
if(search) {
    search.addEventListener("input",()=>{
        const val=search.value.toLowerCase();
        render(finalPlaces.filter(p=>p.name[currentLang].toLowerCase().includes(val)));
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) closeModal();
}

changeLanguage('en');
