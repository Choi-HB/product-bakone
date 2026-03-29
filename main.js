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
    {
        id: "paris",
        region: "Europe",
        name: { ko: "파리, 프랑스", en: "Paris, France", ja: "パリ、フランス", zh: "巴黎，法国" },
        desc: { 
            ko: "에펠탑과 루브르 박물관으로 상징되는 예술과 패션의 중심지입니다.\n세느 강변을 따라 펼쳐지는 낭만적인 야경은 전 세계 여행객들의 로망입니다.\n몽마르트르 언덕에서 화가들의 숨결을 느끼고 갓 구운 바게트의 풍미를 즐겨보세요.\n세계적인 명품 거리 샹젤리제와 역사적인 개선문은 파리의 품격을 더해줍니다.\n유서 깊은 카페에 앉아 에스프레소를 마시며 파리지앵의 여유를 느껴보세요.",
            en: "The global center of art, fashion, and culture, iconic for its Eiffel Tower and Louvre Museum.\nEnjoy a romantic evening walk along the Seine River with its breathtaking city lights.\nVisit Montmartre to feel the artistic heritage and taste the authentic French boulangeries.\nThe Champs-Élysées and Arc de Triomphe represent the historic grandeur of this city.\nExperience the true Parisian lifestyle while sipping espresso at a sidewalk café.",
            ja: "エッフェル塔とルーブル美術館に象徴される芸術とファッションの中心地です。\nセーヌ川沿いに広がるロマンチックな夜景は、世界中の旅行者の憧れです。\nモンマルトルの丘で芸術家たちの息吹を感じ、焼きたてのバゲットを味わってください。\n世界的な高級ブランド通りシャンゼリゼと歴史的な凱旋門がパリの品格を高めています。\n由緒あるカフェでエスプレッソを飲みながら、パリジャンの余裕を感じてみてください。",
            zh: "以艾菲尔铁塔和卢浮宫为象征的艺术与时尚中心。\n沿塞纳河畔展开的浪漫夜景是全球游客的向往。 \n在蒙马特高地感受艺术气息，品尝刚出炉的法式长棍面包。 \n香榭丽舍大街和历史悠久的凯旋门增添了巴黎的尊贵感。 \n坐在古老的咖啡馆里喝杯浓缩咖啡，感受巴黎人的悠闲生活。"
        }
    },
    {
        id: "london",
        region: "Europe",
        name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" },
        desc: { 
            ko: "빅벤과 타워 브리지가 반겨주는 유구한 역사를 가진 글로벌 수도입니다.\n영국 박물관에서 인류의 보물을 감상하고 웨스트엔드에서 세계 최고의 뮤지컬을 즐겨보세요.\n빨간 이층 버스를 타고 도시 곳곳의 빈티지 마켓과 고풍스러운 골목을 탐험할 수 있습니다.\n템즈 강변의 산책로와 하이드 파크의 넓은 녹지는 도심 속의 평화로운 휴식을 제공합니다.\n오후에는 전통적인 애프터눈 티를 즐기며 영국의 우아한 문화를 체험해 보세요.",
            en: "A historic global capital greeting you with iconic landmarks like Big Ben and Tower Bridge.\nExplore human history at the British Museum and catch world-class musicals in the West End.\nRide the famous red double-decker bus to discover vintage markets and charming narrow streets.\nThe Thames River path and Hyde Park provide a peaceful escape within the bustling city center.\nDon't miss the chance to experience traditional afternoon tea for a taste of British elegance.",
            ja: "ビッグベンとタワーブリッジが迎えてくれる、悠久の歴史を持つグローバルな首都です。\n大英博物館で人類の宝物を鑑賞し、ウェストエンドで世界最高のミュージカルを楽しんでください。\n赤い二階建てバスに乗って、街のあちこちにあるヴィンテージマーケットや古風な路地を探索できます。\nテムズ川沿いの散歩道とハイドパークの広大な緑地は、都心の中の平和な休息を提供します。\n午後には伝統的なアフタヌーンティーを楽しみながら、イギリスの優雅な文化を体験してください。",
            zh: "大本钟和塔桥迎接您的悠久历史全球首都。\n在大英博物馆欣赏人类瑰宝，在西区观看世界顶级的音乐剧。\n乘坐著名的红色双层巴士，探索城市各处的复古市场和古风小巷。\n泰晤士河畔的步道和海德公园宽阔的绿地提供城市中的宁静休憩。\n下午享受传统的下午茶，体验英国优雅的文化气息。"
        }
    },
    {
        id: "rome",
        region: "Europe",
        name: { ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ、イタリア", zh: "罗马，意大利" },
        desc: { 
            ko: "모든 길은 통한다는 말처럼, 도시 전체가 거대한 노천 박물관인 영원한 도시입니다.\n콜로세움과 포로 로마노에서 고대 로마 제국의 화려했던 영광을 직접 목격하세요.\n트레비 분수에 동전을 던지며 다시 로마를 방문하기를 기원하는 전통을 경험해 보세요.\n세계에서 가장 작은 국가인 바티칸 시국에서 미켈란젤로의 경이로운 예술작품을 만날 수 있습니다.\n정통 이탈리안 젤라또와 파스타를 맛보며 이탈리아인들의 열정적인 미식 문화를 즐겨보세요.",
            en: "The Eternal City, where every corner feels like a part of a massive open-air museum.\nWitness the ancient glory of the Roman Empire at the Colosseum and the Roman Forum.\nExperience the tradition of tossing a coin into the Trevi Fountain to ensure your return to Rome.\nVisit the Vatican City, the world's smallest state, to see Michelangelo's breathtaking art.\nSavor authentic Italian gelato and pasta while immersing yourself in their passionate food culture.",
            ja: "「すべての道はローマに通ず」と言われるように、街全体が巨大な野外博物館である永遠の都です。\nコロッセオとフォロ・ロマーノで、古代ローマ帝国の華やかな栄光を直接目撃してください。\nトレヴィの泉にコインを投げ入れ、再びローマを訪れることを願う伝統を体験してください。\n世界で最も小さな国であるバチカン市国で、ミケランジェロの驚異的な芸術作品に出会えます。\n正統派イタリアンジェラートとパスタを味わいながら、イタリア人の情熱的な美食文化を楽しんでください。",
            zh: "正如“条条大路通罗马”所言，整个城市就是一座巨大的露天博物馆，被称为永恒之城。\n在斗兽场和古罗马广场亲眼目睹古罗马帝国的辉煌。\n在特莱维喷泉投下一枚硬币，体验祈求再次访问罗马的传统。 \n在世界上最小的国家梵蒂冈，欣赏米开朗基罗惊世骇俗的艺术作品。 \n品尝正宗的意大利冰淇淋和意面，享受意大利人热情的饮食文化。"
        }
    },
    {
        id: "seoul",
        region: "Asia",
        name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル、韓国", zh: "首尔，韩国" },
        desc: { 
            ko: "600년 역사의 조선 궁궐과 최첨단 빌딩이 공존하는 역동적인 메가시티입니다.\n경복궁의 고즈넉한 아름다움과 남산타워에서 바라보는 화려한 야경을 동시에 즐길 수 있습니다.\n명동의 활기찬 쇼핑 거리와 강남의 세련된 문화는 끊임없는 즐거움을 선사합니다.\n전 세계를 사로잡은 K-푸드와 한국의 따뜻한 정을 담은 시장 문화를 체험해 보세요.\n편리한 대중교통과 밤늦도록 꺼지지 않는 화려한 불빛은 서울만의 독특한 매력입니다.",
            en: "A dynamic megacity where 600-year-old Joseon palaces and futuristic buildings coexist.\nEnjoy the serene beauty of Gyeongbokgung Palace alongside the dazzling night view from N Seoul Tower.\nThe vibrant shopping streets of Myeongdong and the sophisticated culture of Gangnam offer endless fun.\nExperience the world-famous K-food and the warm-hearted market culture unique to Korea.\nEfficient public transport and a city that never sleeps make Seoul a truly one-of-a-kind destination.",
            ja: "600年の歴史を持つ朝鮮王朝の宮殿と最先端のビルが共存するダイナミックなメガシティです。\n景福宮の静かな美しさと、南山タワーから眺める華やかな夜景を同時に楽しめます。\n明洞の活気あるショッピング街と江南の洗練された文化は、絶え間ない楽しみを提供します。\n世界中を魅了したKフードと、韓国の温かい情を感じる市場文化を体験してください。\n便利な公共交通機関と夜遅くまで消えない華やかな灯りは、ソウルならではの独特な魅力です。",
            zh: "一座拥有600年历史的朝鲜皇宫与尖端建筑并存的动态特大城市。\n可以同时享受景福宫宁静的美丽和从南山塔俯瞰的华丽夜景。 \n明洞热闹的购物街和江南干练的文化带来无穷乐趣。 \n体验席卷全球的韩食和蕴含韩国温暖情谊的市场文化。 \n便利的交通和通宵达旦的绚丽灯光是首尔独特的魅力。"
        }
    },
    {
        id: "tokyo",
        region: "Asia",
        name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" },
        desc: { 
            ko: "전통적인 신사와 사찰, 그리고 화려한 네온사인이 공존하는 일본의 심장부입니다.\n시부야의 유명한 스크램블 교차로와 하라주쿠의 독특한 패션은 도쿄의 에너지를 상징합니다.\n아사쿠사의 센소지에서 역사의 흔적을 따라가고 미슐랭 스타 맛집에서 미식의 정점을 맛보세요.\n도쿄 스카이트리 위에서 내려다보는 끝없는 지평선은 현대 건축의 경이로움을 보여줍니다.\n애니메이션, 전자기기, 그리고 친절한 환대 문화가 어우러진 다채로운 경험을 약속합니다.",
            en: "The heart of Japan where traditional shrines and temples coexist with vibrant neon signs.\nThe famous Shibuya Crossing and Harajuku's unique fashion trends represent the city's energy.\nFollow the footsteps of history at Senso-ji Temple and taste culinary perfections at Michelin-starred restaurants.\nThe endless skyline viewed from the Tokyo Skytree showcases the marvels of modern engineering.\nTokyo promises a colorful mix of anime culture, high-tech gadgets, and omotenashi hospitality.",
            ja: "伝統的な神社仏閣と華やかなネオンサインが共存する日本の中枢です。\n渋谷の有名なスクランブル交差点と原宿の独特なファッションは東京のエネルギーを象徴しています。\n浅草の浅草寺で歴史の痕跡をたどり、ミシュラン星付きの名店で美食の頂点を味わってください。\n東京スカイツリーから見下ろす果てしない地平線は、現代建築の驚異を見せてくれます。\nアニメ、電子機器、そして親切な「おもてなし」文化が調和した多彩な体験を約束します。",
            zh: "传统神社寺庙与华丽霓虹灯并存的日本心脏地带。\n涩谷著名的十字路口和原宿独特的时尚象征着东京的活力。 \n在浅草寺追寻历史足迹，在米其林星级餐厅品尝美食巅峰。 \n从东京晴空塔俯瞰的无尽地平线展示了现代建筑的奇迹。 \n这里承诺提供动漫、电子产品和亲切待客文化交织的多彩体验。"
        }
    },
    {
        id: "new-york",
        region: "America",
        name: { ko: "뉴욕, 미국", en: "New York, USA", ja: "ニューヨーク、米国", zh: "纽约，美国" },
        desc: { 
            ko: "자유의 여신상이 지키고 있는 잠들지 않는 도시, 전 세계 문화와 경제의 중심입니다.\n타임스퀘어의 화려한 광고판 아래에서 활기찬 대도시의 에너지를 온몸으로 느껴보세요.\n센트럴 파크의 넓은 숲길에서 휴식을 취하거나 브로드웨이 극장에서 전설적인 공연을 감상하세요.\n엠파이어 스테이트 빌딩과 모마(MoMA) 미술관은 뉴욕의 고전과 현대를 대변합니다.\n다양한 인종이 모여 만든 다채로운 푸드트럭부터 고급 레스토랑까지 미식의 천국입니다.",
            en: "The city that never sleeps, guarded by the Statue of Liberty, and the global hub of culture and finance.\nFeel the vibrant energy of the metropolis under the dazzling billboards of Times Square.\nRelax in the vast green space of Central Park or watch a legendary performance at a Broadway theater.\nThe Empire State Building and MoMA represent the classic and contemporary faces of New York.\nA culinary paradise where you can find everything from diverse street food trucks to fine dining.",
            ja: "自由の女神が見守る「眠らない街」、全世界の文化と経済の中心地です。\nタイムズスクエアの華やかな看板の下で、活気に満ちた大都市のエネルギーを全身で感じてください。\nセントラルパークの広い森の道で休息を取り、ブロードウェイ劇場で伝説的な公演を鑑賞してください。\nエンパイアステートビルと近代美術館（MoMA）はニューヨークの古典と現代を代弁しています。\n多様な人種が集まって作った多彩なフードトラックから高級レストランまで、美食の天国です。",
            zh: "由自由女神像守护的不夜城，全球文化和经济中心。\n在时代广场华丽的广告牌下，全身心感受大都市的活力。 \n在海德公园宽阔的森林步道休息，或在百老汇剧院欣赏传奇演出。 \n帝国大厦和现代艺术博物馆(MoMA)代表了纽约的经典与现代。 \n从各民族聚集形成的多种餐车美食到高级餐厅，这里是美食天堂。"
        }
    },
    {
        id: "sydney",
        region: "Other",
        name: { ko: "시드니, 호주", en: "Sydney, Australia", ja: "シドニー、豪州", zh: "悉尼，澳大利亚" },
        desc: { 
            ko: "푸른 바다 위에 떠 있는 오페라 하우스가 상징인 아름다운 항구 도시입니다.\n하버 브리지 위를 걷거나 페리를 타고 감상하는 항구의 전경은 평생 잊지 못할 추억이 됩니다.\n본다이 비치에서 파도를 즐기는 서퍼들과 따스한 햇살을 받으며 휴양지의 기분을 만끽해 보세요.\n블루 마운틴 국립공원에서 호주 대자연의 웅장함을 느끼고 코알라와 캥거루를 만나보세요.\n해안가를 따라 늘어선 카페와 레스토랑에서 신선한 해산물 요리를 즐길 수 있습니다.",
            en: "A stunning harbor city famous for the iconic Sydney Opera House floating on blue waters.\nWalking across the Harbour Bridge or taking a ferry offers unforgettable views of the coastline.\nFeel the vacation vibe with surfers at Bondi Beach and soak up the golden Australian sun.\nDiscover the grandeur of nature at the Blue Mountains and meet adorable koalas and kangaroos.\nEnjoy fresh seafood dishes at various seaside cafés and world-class restaurants.",
            ja: "青い海に浮かぶオペラハウスが象徴的な、美しい港町です。\nハーバーブリッジの上を歩いたり、フェリーに乗って眺める港の全景は、一生忘れられない思い出になります。\nボンダイビーチで波を楽しむサーファーたちと、温かい日差しを浴びながらリゾート気分を満喫してください。\nブルーマウンテンズ国立公園でオーストラリアの大自然の雄大さを感じ、コアラやカンガルーに出会ってください。\n海岸沿いに立ち並ぶカフェやレストランで、新鮮なシーフード料理を楽しむことができます。",
            zh: "以漂浮在蓝色大海上的歌剧院为象征的美丽港口城市。\n在海港大桥上漫步或乘坐渡轮欣赏港口全景，将成为终生难忘的回忆。 \n在邦迪海滩与冲浪者一起享受海浪，在温暖的阳光下尽情享受度假心情。 \n在蓝山国家公园感受澳大利亚大自然的壮丽，与考拉和袋鼠见面。 \n在沿海而建的咖啡馆和餐厅享用新鲜的海鲜料理。"
        }
    },
    {
        id: "dubai",
        region: "Other",
        name: { ko: "두바이, UAE", en: "Dubai, UAE", ja: "ドバイ、UAE", zh: "迪拜，阿联酋" },
        desc: { 
            ko: "세계 최고층 빌딩 부르즈 할리파가 하늘을 찌르는 사막 위의 기적 같은 도시입니다.\n거대한 인공 섬 팜 주메이라와 실내 스키장 등 인간의 상상력이 실현된 곳입니다.\n전통적인 아랍 시장인 '수크'에서 금과 향신료를 구경하며 중동의 이색적인 정취를 느껴보세요.\n붉은 모래 사막에서 즐기는 사파리 투어와 밤하늘 아래 베두인 캠프는 신비로움을 선사합니다.\n화려한 분수 쇼와 럭셔리한 쇼핑몰은 두바이만의 압도적인 스케일을 보여줍니다.",
            en: "A miraculous desert city where the Burj Khalifa, the world's tallest building, pierces the sky.\nExperience human imagination turned reality at Palm Jumeirah and the indoor ski resorts.\nFeel the exotic atmosphere of the Middle East while browsing gold and spices at traditional Souks.\nDesert safari tours on red dunes and Bedouin camps under the stars offer a mystical experience.\nThe dazzling fountain shows and luxury malls showcase the overwhelming scale of Dubai.",
            ja: "世界一高いビル、ブルジュ・ハリファが空を突く、砂漠の上の奇跡のような街です。\n巨大な人工島パーム・ジュメイラや室内スキー場など、人間の想像力が実現された場所です。\n伝統的なアラブの市場「スーク」で金や香辛料を眺め、中東のエキゾチックな情緒を感じてください。\n赤い砂砂漠で楽しむサファリツアーと、夜空の下のベドウィンキャンプは神秘的な体験を提供します。\n華やかな噴水ショーとラグジュアリーなショッピングモールは、ドバイならではの圧倒的なスケールを見せてくれます。",
            zh: "世界最高楼哈利法塔直插云霄，是沙漠上的奇迹城市。\n巨大的巨大人工岛朱美拉棕榈岛和室内滑雪场等，是人类想象力变为现实的地方。 \n在传统的阿拉伯市场“苏克”观看黄金和香料，感受中东异国风情。 \n在红沙沙漠享受的冲锋沙之旅和星空下的贝都因营地带给人神秘感。 \n华丽的喷泉表演和豪华购物中心展示了迪拜特有的压倒性规模。"
        }
    },
    {
        id: "venice",
        region: "Europe",
        name: { ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア、イタリア", zh: "威尼斯，意大利" },
        desc: { 
            ko: "도로 대신 운하가 흐르고 차 대신 곤돌라가 다니는 낭만적인 물의 도시입니다.\n미로 같은 수로를 따라 펼쳐지는 중세 건축물들은 시간이 멈춘 듯한 풍경을 선사합니다.\n산 마르코 광장에서 비둘기 떼와 함께 커피 한 잔의 여유와 성당의 웅장함을 느껴보세요.\n리알토 다리 위에서 바라보는 일몰과 운하의 반영은 화가들이 사랑한 최고의 피사체입니다.\n유리 공예로 유명한 무라노 섬과 형형색색의 부라노 섬에서 이색적인 인생 사진을 남겨보세요.",
            en: "The romantic City of Water where canals serve as roads and gondolas replace cars.\nStroll through labyrinthine waterways lined with medieval architecture that seems frozen in time.\nRelax at St. Mark's Square with a cup of coffee while admiring the grandeur of the basilica.\nThe sunset viewed from the Rialto Bridge is a masterpiece that artists have loved for centuries.\nVisit Murano for glass art and Burano for colorful houses to capture your perfect travel photos.",
            ja: "道路の代わりに運河が流れ、車の代わりにゴンドラが行き交うロマンチックな水の都です。\n迷路のような水路に沿って広がる中世の建築物は、時間が止まったような風景を提供します。\nサン・マルコ広場で鳩の群れと共にコーヒーを楽しみ、大聖堂の雄大さを感じてください。\nリアルト橋の上から眺める夕日と運河の反映は、画家たちが愛した最高の被写体です。\nガラス工芸で有名なムラーノ島と、色とりどりのブラーノ島で、エキゾチックな人生ショットを残してください。",
            zh: "运河代替道路，贡多拉代替汽车的浪漫水城。\n沿着迷宫般的航道展现的中世纪建筑，呈现出时间仿佛停滞般的风景。 \n在圣马可广场与鸽子群一起享受一杯咖啡的悠闲和圣堂的雄伟。 \n从里亚托桥俯瞰的日落和运河倒影是画家们最爱的摄影题材。 \n在以玻璃工艺闻名的穆拉诺岛和五彩缤纷的布拉诺岛留下异国风情的人生照片。"
        }
    }
];

// Fill remaining places with detailed placeholders to ensure UI completeness
const additionalPlaces = [
    { id: "santorini", region: "Europe", name: { ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ、ギリシャ", zh: "圣托里尼，希腊" }, desc: { ko: "절벽 위 하얀 집들과 푸른 바다가 어우러진 꿈의 섬입니다.\n이아 마을의 낙조는 세계 3대 석양 중 하나로 꼽힐 만큼 아름답습니다.\n푸른 돔 형태의 지붕은 산토리니를 상징하는 가장 유명한 풍경입니다.\n고대 아크로티리 유적에서 화산 폭발로 사라진 역사를 탐험할 수 있습니다.\n지중해의 신선한 요리와 와인을 즐기며 진정한 휴식을 경험해 보세요.", en: "A dream island with white-washed houses perched on cliffs overlooking the blue Aegean Sea.\nThe sunset in Oia is celebrated as one of the most beautiful in the world.\nIts iconic blue-domed churches are the most recognizable sights of the island.\nExplore the ancient ruins of Akrotiri, a city preserved in volcanic ash.\nExperience ultimate relaxation with fresh Mediterranean cuisine and local wines.", ja: "絶壁の上の白い家々と青い海が調和した夢の島です。\nイアの村の夕日は、世界三大夕日の一つに数えられるほど美しいです。\n青いドーム型の屋根は、サントリーニを象徴する最も有名な風景です。\n古代アクロティリ遺跡で、火山噴火で消えた歴史を探索できます。\n地中海の新鮮な料理とワインを楽しみながら、真の休息を体験してください。", zh: "悬崖上的白房子与蓝大海交相辉映的梦幻之岛。\n伊亚小镇的落日被誉为世界三大日落之一，美不胜收。 \n蓝顶教堂是圣托里尼最具代表性的著名风景。 \n在古阿克罗蒂里遗址探索因火山喷发而消失的历史。 \n享受地中海新鲜料理和美酒，体验真正的休憩。" }},
    { id: "machu-picchu", region: "America", name: { ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ、ペルー", zh: "马丘比丘，秘鲁" }, desc: { ko: "구름 속에 가려진 신비로운 인카 제국의 공중 도시입니다.\n해발 2,430미터 산맥 위에 정교하게 쌓아 올린 석조 기술은 경이로움 그 자체입니다.\n안데스 산맥의 웅장한 대자연 속에서 고대 문명의 신비로운 숨결을 느껴보세요.\n잉카 트레일을 따라 걷는 여정은 전 세계 트레커들에게 최고의 도전이자 로망입니다.\n태양의 신전과 지붕 없는 감옥 등 고대 인카인들의 생활상을 엿볼 수 있습니다.", en: "A mysterious Incan citadel hidden among the clouds high in the Andes Mountains.\nThe sophisticated dry-stone masonry built at 2,430 meters above sea level is a marvel of engineering.\nFeel the mystical pulse of an ancient civilization amidst the grandeur of the mountains.\nWalking the Inca Trail is a top bucket-list adventure for hikers worldwide.\nDiscover the Sun Temple and other ruins that reveal the daily lives of the Incas.", ja: "雲の中に隠された神秘的なインカ帝国の空中都市です。\n標高2,430メートルの山脈の上に精巧に積み上げられた石造技術は、驚異そのものです。\nアンデス山脈の雄大な大自然の中で、古代文明の神秘的な息吹を感じてください。\nインカ・トレイルを歩く旅は、世界中のトレッカーにとって最高の挑戦であり憧れです。\n太陽の神殿や屋根のない監獄など、古代インカ人たちの生活像を垣間見ることができます。", zh: "隐藏在云雾中的神秘印加帝国空中城市。\n在海拔2430米的山脉上精巧堆砌的石造技术本身就是奇迹。 \n在安第斯山脉雄伟的大自然中感受古代文明神秘的气息。 \n沿着印加古道漫步的旅程是全球徒步旅行者最高的挑战与向往。 \n可以窥探太阳神庙和无顶监狱等古代印加人的生活面貌。" }}
];

places.push(...additionalPlaces);

// Ensure total 50 items for consistency, filling with generic detailed text if needed
for(let i=places.length; i<50; i++) {
    places.push({
        id: `dest-${i}`,
        region: i%3==0 ? "Asia" : (i%3==1 ? "Europe" : "America"),
        name: { ko: `추천 여행지 ${i+1}`, en: `Dream Destination ${i+1}`, ja: `おすすめ目的地 ${i+1}`, zh: `推荐目的地 ${i+1}` },
        desc: { 
            ko: "이곳은 자연과 문화가 어우러진 환상적인 여행지입니다.\n현지인들의 친절한 환대와 맛있는 음식이 여러분을 기다리고 있습니다.\n아름다운 풍경을 배경으로 평생 잊지 못할 사진을 남겨보세요.\n역사적인 장소부터 현대적인 명소까지 다채로운 볼거리가 가득합니다.\n지금 바로 가상 여행을 떠나보세요!",
            en: "A fantastic destination where nature and culture blend perfectly.\nFriendly hospitality and delicious local food await every traveler.\nCapture unforgettable photos against the backdrop of stunning scenery.\nFull of diverse attractions ranging from historic sites to modern landmarks.\nStart your virtual journey right now!",
            ja: "ここは自然と文化が調和した幻想的な目的地です。\n地元の人々の親切な歓迎と美味しい食べ物があなたを待っています。\n美しい風景を背景に、一生忘れられない写真を残してください。\n歴史的な場所から現代的な名所まで、多彩な見どころが満載です。\n今すぐ仮想旅行に出かけてみましょう！",
            zh: "这是一个自然与文化完美融合的梦幻目的地。\n当地人的热情好客和美味佳肴正等待着您的光临。 \n以美景为背景，留下终生难忘的照片。 \n从历史古迹到现代景点，多彩的内容琳琅满目。 \n现在就开启虚拟旅行吧！"
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
        card.appendChild(copyright);
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
