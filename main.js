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
        "btn-reset": "初期化", "btn-upload": "👤 写真를アップロード", "btn-save": "💾 写真を保存", "btn-exit": "❌ スタジオ終了",
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
    { id: "london", region: "Europe", name: { ko: "런던, 영국", en: "London, UK", ja: "ロンドン、イギリス", zh: "伦敦，英国" }, desc: { ko: "빅벤과 타워 브리지가 반겨주는 유구한 역사를 가진 글로벌 수도입니다.\n영국 박물관에서 인류의 보물을 감상하고 웨스트엔드에서 세계 최고의 뮤지컬을 즐겨보세요.\n빨간 이층 버스를 타고 도시 곳곳의 빈티지 마켓과 고풍스러운 골목을 탐험할 수 있습니다.\n템즈 강변의 산책로와 하이드 파크의 넓은 녹지는 도심 속의 평화로운 휴식을 제공합니다.\n오후에는 전통적인 애프터눈 티를 즐기며 영국의 우아한 문화를 체험해 보세요.", en: "A historic global capital greeting you with iconic landmarks like Big Ben and Tower Bridge.\nExplore human history at the British Museum and catch world-class musicals in the West End.\nRide the famous red double-decker bus to discover vintage markets and charming narrow streets.\nThe Thames River path and Hyde Park provide a peaceful escape within the bustling city center.\nDon't miss the chance to experience traditional afternoon tea for a taste of British elegance.", ja: "ビッグベンとタワーブリッジが迎えてくれる、悠久의歴史を持つグローバルな首都です。\n大英博物館で人類の宝物を鑑賞し、ウェストエンドで世界最高のミュージカルを楽しんでください。\n赤い二階建てバスに乗って、街のあちこちにあるヴィンテージマーケットや古風な路地を探索できます。\nテムズ川沿いの散歩道とハイドパークの広大な緑地は、都心の中の平和な休息を提供します。\n午後には伝統的なアフタヌーンティーを楽しみながら、イギリスの優雅な文化を体験してください。", zh: "大本钟和塔桥迎接您的悠久历史全球首都。\n在大英博物馆欣赏人类瑰宝，在西区观看世界顶级的音乐剧。\n乘坐著名的红色双层巴士，探索城市各处的复古市场和古风小巷。\n泰晤士河畔的步道和海德公园宽阔的绿地提供城市中的宁静休憩。\n下午享受传统的下午茶，体验英国优雅的文化气息。" }},
    { id: "rome", region: "Europe", name: { ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ、イタリア", zh: "罗马，意大利" }, desc: { ko: "모든 길은 통한다는 말처럼, 도시 전체가 거대한 노천 박물관인 영원한 도시입니다.\n콜로세움과 포로 로마노에서 고대 로마 제국의 화려했던 영광을 직접 목격하세요.\n트레비 분수에 동전을 던지며 다시 로마를 방문하기를 기원하는 전통을 경험해 보세요.\n세계에서 가장 작은 국가인 바티칸 시국에서 미켈란젤로의 경이로운 예술작품을 만날 수 있습니다.\n정통 이탈리안 젤라또와 파스타를 맛보며 이탈리아인들의 열정적인 미식 문화를 즐겨보세요.", en: "The Eternal City, where every corner feels like a part of a massive open-air museum.\nWitness the ancient glory of the Roman Empire at the Colosseum and the Roman Forum.\nExperience the tradition of tossing a coin into the Trevi Fountain to ensure your return to Rome.\nVisit the Vatican City, the world's smallest state, to see Michelangelo's breathtaking art.\nSavor authentic Italian gelato and pasta while immersing yourself in their passionate food culture.", ja: "「すべての道はローマに通ず」と言われるように、街全体が巨大な野外博物館である永遠の都です。\nコロッセオとフォロ・ロマーノで、古代ローマ帝国の華やかな栄光を直接目撃してください。\nトレヴィの泉にコインを投げ入れ、再びローマを訪れることを願う伝統を体験してください。\n世界で最も小さな国であるバチカン市国で、ミケランジェロの驚異的な芸術作品に出会えます。\n正統派イタリアンジェラートとパスタを味わいながら、イタリア人の情熱的な美食文化を楽しんでください。", zh: "正如“条条大路通罗马”所言，整个城市就是一座巨大的露天博物馆，被称为永恒之城。\n在斗兽场和古罗马广场亲眼目睹古罗马帝国的辉煌。\n在特莱维喷泉投下一枚硬币，体验祈求再次访问罗马的传统。 \n在世界上最小的国家梵蒂冈，欣赏米开朗基罗惊世骇俗的艺术作品。 \n品尝正宗的意大利冰淇淋和意面，享受意大利人热情的饮食文化。" }},
    { id: "seoul", region: "Asia", name: { ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル、韓国", zh: "首尔，韩国" }, desc: { ko: "600년 역사의 조선 궁궐과 최첨단 빌딩이 공존하는 역동적인 메가시티입니다.\n경복궁의 고즈넉한 아름다움과 남산타워에서 바라보는 화려한 야경을 동시에 즐길 수 있습니다.\n명동의 활기찬 쇼핑 거리와 강남의 세련된 문화는 끊임없는 즐거움을 선사합니다.\n전 세계를 사로잡은 K-푸드와 한국의 따뜻한 정을 담은 시장 문화를 체험해 보세요.\n편리한 대중교통과 밤늦도록 꺼지지 않는 화려한 불빛은 서울만의 독특한 매력입니다.", en: "A dynamic megacity where 600-year-old Joseon palaces and futuristic buildings coexist.\nEnjoy the serene beauty of Gyeongbokgung Palace alongside the dazzling night view from N Seoul Tower.\nThe vibrant shopping streets of Myeongdong and the sophisticated culture of Gangnam offer endless fun.\nExperience the world-famous K-food and the warm-hearted market culture unique to Korea.\nEfficient public transport and a city that never sleeps make Seoul a truly one-of-a-kind destination.", ja: "600年の歴史を持つ朝鮮王朝の宮殿と最先端のビルが共存するダイナミックなメガシティです。\n景福宮の静かな美しさと、南山タワーから眺める華やかな夜景を同時に楽しめます。\n明洞の活気あるショッピング街と江南の洗練された文化は、絶え間ない楽しみを提供します。\n世界中を魅了したKフードと、韓国の温かい情を感じる市場文化を体験してください。\n便利な公共交通機関と夜遅くまで消えない華やかな灯りは、ソウルならではの独特な魅力です。", zh: "一座拥有600年历史的朝鲜皇宫与尖端建筑并存的动态特大城市。\n可以同时享受景福宫宁静的美丽和从南山塔俯瞰的华丽夜景。 \n明洞热闹的购物街和江南干练的文化带来无穷乐趣。 \n体验席卷全球的韩食和蕴含韩国温暖情谊的市场文化。 \n便利的交通和通宵达旦的绚丽灯光是首尔独特的魅力。" }},
    { id: "tokyo", region: "Asia", name: { ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京、日本", zh: "东京，日本" }, desc: { ko: "전통적인 신사와 사찰, 그리고 화려한 네온사인이 공존하는 일본의 심장부입니다.\n시부야의 유명한 스크램블 교차로와 하라주쿠의 독특한 패션은 도쿄의 에너지를 상징합니다.\n아사쿠사의 센소지에서 역사의 흔적을 따라가고 미슐랭 스타 맛집에서 미식의 정점을 맛보세요.\n도쿄 스카이트리 위에서 내려다보는 끝없는 지평선은 현대 건축의 경이로움을 보여줍니다.\n애니메이션, 전자기기, 그리고 친절한 환대 문화가 어우러진 다채로운 경험을 약속합니다.", en: "The heart of Japan where traditional shrines and temples coexist with vibrant neon signs.\nThe famous Shibuya Crossing and Harajuku's unique fashion trends represent the city's energy.\nFollow the footsteps of history at Senso-ji Temple and taste culinary perfections at Michelin-starred restaurants.\nThe endless skyline viewed from the Tokyo Skytree showcases the marvels of modern engineering.\nTokyo promises a colorful mix of anime culture, high-tech gadgets, and omotenashi hospitality.", ja: "伝統的な神社仏閣と華やかなネオンサインが共存する日本の中枢です。\n渋谷の有名なスクランブル交差点と原宿の独特なファッションは東京のエネルギーを象徴しています。\n浅草の浅草寺で歴史の痕跡をたどり、ミシュラン星付きの名店で美食の頂点を味わってください。\n東京スカイツリーから見下ろす果てしない地平線は、現代建築の驚異を見せてくれます。\nアニメ、電子機器、そして親切な「おもてなし」文化が調和した多彩な体験を約束します。", zh: "传统神社寺庙与华丽霓虹灯并存的日本心脏地带。\n涩谷著名的十字路口和原宿独特的时尚象征着东京的活力。 \n在浅草寺追寻历史足迹，在米其林星级餐厅品尝美食巅峰。 \n从东京晴空塔俯瞰的无尽地平线展示了现代建筑的奇迹。 \n这里承诺提供动漫、电子产品和亲切待客文化交织的多彩体验。" }},
    { id: "barcelona", region: "Europe", name: { ko: "바르셀로나, 스페인", en: "Barcelona, Spain", ja: "バルセロナ、スペイン", zh: "巴塞罗那，西班牙" }, desc: { ko: "가우디의 천재적인 건축미가 살아 숨 쉬는 지중해의 보석 같은 도시입니다.\n사그라다 파밀리아 성당의 웅장함과 구엘 공원의 동화 같은 풍경을 직접 느껴보세요.\n활기 넘치는 람블라스 거리를 걷고 보케리아 시장에서 신선한 타파스를 맛보세요.\n도시와 인접한 바르셀로네타 해변은 도심 속 활기찬 휴식과 낭만을 제공합니다.\nFC 바르셀로나의 홈구장 캄프 누에서 세계 최고의 축구 열기를 체험해 보세요.", en: "A Mediterranean gem where Gaudi's genius architectural masterpieces breathe life into the city.\nFeel the grandeur of the Sagrada Familia and the fairy-tale landscapes of Park Güell.\nStroll through the lively Las Ramblas and savor fresh tapas at the famous Boqueria Market.\nBarceloneta Beach offers a perfect blend of urban energy and seaside relaxation.\nExperience world-class football fever at Camp Nou, the legendary home of FC Barcelona.", ja: "ガウディの天才的な建築美が息づく、地中海の宝石のような街です。\nサグラダ・ファミリア聖堂の雄大さとグエル公園の童話のような風景を直接感じてください。\n活気に満ちたランブラス通りを歩き、ボケリア市場で新鮮なタパスを味わってください。\n都市に隣接するバルセロネータビーチは、都心の中の活気ある休息とロマンを提供します。\nFCバルセロナの本拠地カンプ・ノウで、世界最高のサッカーの熱気を体験してください。", zh: "地中海的一颗明珠，高迪天才般的建筑美感让城市焕发活力。\n亲身感受圣家堂的雄伟和奎尔公园如童话般的风景。 \n漫步于充满活力的兰布拉大道，在博盖利亚市场品尝新鲜的塔帕斯。 \n紧邻城市的巴塞罗内塔海滩提供都市中的活力休憩与浪漫。 \n在巴塞罗那主场诺坎普球场体验世界顶级的足球热潮。" }},
    { id: "amsterdam", region: "Europe", name: { ko: "암스테르담, 네덜란드", en: "Amsterdam, Netherlands", ja: "アムステルダム、オランダ", zh: "阿姆斯特丹，荷兰" }, desc: { ko: "거미줄처럼 얽힌 아름다운 운하와 수만 대의 자전거가 풍경을 이루는 도시입니다.\n반 고흐 미술관에서 거장의 숨결을 느끼고 안네 프랑크의 집에서 역사를 되새겨보세요.\n운하 보트 투어를 통해 물 위에서 바라보는 고풍스러운 건축물들의 매력에 빠져보세요.\n튤립이 만발하는 봄의 큐켄호프 정원과 풍차가 있는 근교 마을은 평화로움을 선사합니다.\n운하를 따라 늘어선 예쁜 카페에서 네덜란드 전통 감자튀김과 와플을 즐겨보세요.", en: "A city where a web of beautiful canals and thousands of bicycles define the scenery.\nAdmire masterpieces at the Van Gogh Museum and reflect on history at the Anne Frank House.\nTake a canal cruise to experience the charm of historic Dutch architecture from the water.\nVisit Keukenhof Gardens in spring for blooming tulips or nearby windmill villages for peace.\nEnjoy traditional Dutch fries and stroopwafels at cozy cafés lining the picturesque canals.", ja: "クモの巣のように張り巡らされた美しい運河と数万台の自転車が風景を作る街です。\nゴッホ美術館で巨匠の息吹を感じ、アンネ・フランクの家で歴史を振り返ってみてください。\n運河ボートツアーを通じて、水上から眺める古風な建築物の魅力に浸ってみてください。\nチューリップが咲き誇る春のキューケンホフ公園と、風車のある近郊の村は平和な時間を提供します。\n運河沿いに立ち並ぶ可愛いカフェで、オランダ伝統のフライドポテトやワッフルを楽しんでください。", zh: "美丽的运河网和数万辆自行车构成风景的城市。\n在梵高博物馆感受大师的气息，在安妮·弗兰克之家铭记历史。 \n通过运河游船之旅，沉浸在水上俯瞰的古风建筑魅力中。 \n春天郁金香盛开的库肯霍夫花园和拥有风车的郊外村庄带给人宁静。 \n在沿运河而建的漂亮咖啡馆享用荷兰传统炸薯条和华夫饼。" }},
    { id: "vienna", region: "Europe", name: { ko: "빈, 오스트리아", en: "Vienna, Austria", ja: "ウィーン、オーストリア", zh: "维也纳，奥地利" }, desc: { ko: "모차르트와 베토벤의 선율이 흐르는 세계 음악의 수도이자 합스부르크의 중심입니다.\n쉔브룬 궁전의 화려한 방들과 정원을 거닐며 제국의 찬란했던 과거를 상상해 보세요.\n성 슈테판 대성당의 웅장한 고딕 양식과 벨베데레 궁전의 '키스'를 감상해 보세요.\n오랜 역사를 가진 비엔나 커피 하우스에서 자허 토르테와 함께 정통 커피의 향을 즐겨보세요.\n빈 국립 오페라 하우스에서의 공연 관람은 여행의 품격을 한층 높여줄 것입니다.", en: "The world's capital of music where the melodies of Mozart and Beethoven still echo.\nStroll through the opulent rooms and vast gardens of the Schönbrunn Palace.\nAdmire the Gothic grandeur of St. Stephen's Cathedral and Klimt's 'The Kiss' at Belvedere.\nIndulge in authentic coffee and Sachertorte at a historic Viennese coffee house.\nA performance at the Vienna State Opera will surely be the highlight of your cultural journey.", ja: "モーツァルトとベートーベンの旋律が流れる世界音楽の首都であり、ハプスブルクの中枢です。\nシェーンブルン宮殿の華やかな部屋と庭園を歩きながら、帝国の輝かしい過去を想像してください。\nシュテファン大聖堂の壮大なゴシック様式とベルヴェデーレ宮殿の「接吻」を鑑賞してください。\n長い歴史を持つウィーンのコーヒーハウスで、ザッハトルテと共に正統派コーヒーの香りを楽しんでください。\nウィーン国立歌劇場での公演鑑賞は、旅行の品格を一層高めてくれるでしょう。", zh: "流淌着莫扎特和贝多芬旋律的世界音乐之都，哈布斯堡王朝的核心。\n漫步在美泉宫华丽的房间和花园中，想象帝国灿烂的过去。 \n欣赏圣斯蒂芬大教堂宏伟的哥特式风格和美景宫里的《接吻》。 \n在历史悠久的维也纳咖啡馆，伴着萨赫蛋糕享受正宗的咖啡香气。 \n在维也纳国家歌剧院观看演出将进一步提升旅行的品质。" }},
    { id: "prague", region: "Europe", name: { ko: "프라하, 체코", en: "Prague, Czech Republic", ja: "プラハ、チェコ", zh: "布拉格，捷克" }, desc: { ko: "중세 시대의 붉은 지붕들이 동화 같은 풍경을 만들어내는 '북쪽의 로마'입니다.\n카를교 위에서 구시가지 교탑을 바라보며 악사들의 연주와 낭만을 만끽해 보세요.\n프라하 성의 웅장한 규모와 성 비투스 대성당의 화려한 스테인드글라스는 압권입니다.\n천문 시계 아래 모여든 인파와 함께 정각마다 펼쳐지는 인형극을 관람해 보세요.\n세계적으로 유명한 체코 맥주와 굴라쉬를 맛보며 프라하의 밤을 즐겨보세요.", en: "The 'Rome of the North' where medieval red roofs create a stunning fairy-tale cityscape.\nEnjoy the romantic melodies of street musicians while walking across the iconic Charles Bridge.\nThe sheer scale of Prague Castle and the dazzling stained glass of St. Vitus Cathedral are breathtaking.\nJoin the crowd at Old Town Square to watch the hourly show of the medieval Astronomical Clock.\nSavor world-famous Czech beer and hearty goulash while soaking in the nightlife of Prague.", ja: "中世時代の赤い屋根が童話のような風景を作り出す「北のローマ」です。\nカレル橋の上で旧市街の橋塔を眺めながら、音楽家たちの演奏とロマンを満喫してください。\nプラハ城の壮大な規模と聖ヴィート大聖堂の華やかなステンドグラスは圧巻です。\n天文時計の下に集まった群衆と共に、正時ごとに繰り広げられる人形劇を観覧してください。\n世界的に有名なチェコビールとグラーシュを味わいながら、プラハの夜を楽しんでください。", zh: "中世纪的红屋顶构成童话般风景的“北欧罗马”。\n在查理大桥上眺望旧城桥塔，尽情享受乐手的演奏与浪漫。 \n布拉格城堡的宏伟规模和圣维特大教堂华丽的花窗玻璃令人叹为观止。 \n与聚集在天文钟下的人群一起观看每逢整点上演的人偶剧。 \n品尝享誉世界的捷克啤酒和红烩牛肉，享受布拉格之夜。" }},
    { id: "athens", region: "Europe", name: { ko: "아테네, 그리스", en: "Athens, Greece", ja: "アテネ、ギリシャ", zh: "雅典，希腊" }, desc: { ko: "인류 문명과 민주주의가 시작된 고대 그리스의 찬란한 유산을 간직한 도시입니다.\n아크로폴리스 언덕 위의 파르테논 신전은 고대 건축의 완벽한 미를 보여줍니다.\n플라카 지구의 좁은 골목길을 누비며 그리스 전통 요리 수블라키를 맛보세요.\n국립 고고학 박물관에서 고대 신화 속 유물들을 실제로 만나보는 신비로움을 느껴보세요.\n근대 올림픽이 처음 열린 파나티나이코 경기장에서 역사의 현장을 느껴보세요.", en: "The cradle of Western civilization and democracy, preserving the brilliant legacy of ancient Greece.\nThe Parthenon atop the Acropolis hill showcases the perfect beauty of ancient architecture.\nWander through the narrow streets of the Plaka district and taste traditional Greek Souvlaki.\nExperience the mystery of ancient mythology through artifacts at the National Archaeological Museum.\nVisit the Panathenaic Stadium, the birthplace of the modern Olympic Games.", ja: "人類文明と民主主義が始まった古代ギリシャの輝かしい遺産を秘めた街です。\nアクロポリスの丘の上のパルテノン神殿は、古代建築の完璧な美を見せてくれます。\nプラカ地区の狭い路地を歩き回り、ギリシャ伝統料理のスブラキを味わってください。\n国立考古学博物館で古代神話の遺物たちに実際に出会う神秘的な体験をしてください。\n近代オリンピックが初めて開催されたパナシナイコ競技場で、歴史の現場を感じてください。", zh: "人类文明和民主的发源地，保留着古希腊辉煌遗产的城市。\n雅典卫城山顶的帕特农神庙展示了古代建筑的完美之美。 \n穿梭在普拉卡区的狭窄小巷，品尝希腊传统美食苏富拉奇。 \n在国家考古博物馆亲眼目睹古代神话中的文物，感受神秘。 \n在现代奥运会首次举办的帕纳辛奈科体育场感受历史现场。" }},
    { id: "lisbon", region: "Europe", name: { ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン、ポルトガル", zh: "里斯本，葡萄牙" }, desc: { ko: "대서양을 마주한 언덕 위의 도시로, 노란 트램과 타일 장식 아줄레주가 매력적입니다.\n벨렘 탑과 제로니무스 수도원에서 대항해 시대의 영광을 엿볼 수 있습니다.\n알파마 지구의 미로 같은 골목을 헤매며 포르투갈의 영혼 '파두' 선율에 젖어보세요.\n전통 에그타르트 원조집에서 갓 구운 파스텔 데 나타의 달콤함을 경험해 보세요.\n테주 강변의 선셋 포인트에서 바라보는 일몰은 리스본 여행의 정점입니다.", en: "A charming hillside city facing the Atlantic, famous for yellow trams and Azulejo tiles.\nWitness the glory of the Age of Discovery at Belém Tower and Jerónimos Monastery.\nGet lost in the maze-like Alfama district and listen to the soulful melodies of Fado music.\nIndulge in the sweetness of original egg tarts at the world-famous Pastéis de Belém.\nThe sunset view from the Tagus riverfront is the ultimate highlight of any Lisbon trip.", ja: "大西洋に面した丘の上の街で、黄色い路面電車とタイルの装飾アズレージョが魅力的です。\nベレンの塔とジェロニモス修道院で、大航海時代の栄光を垣間見ることができます。\nアルファマ地区の迷路のような路地を歩き、ポルトガルの魂「ファド」の旋律に浸ってください。\n伝統的なエッグタルトの元祖店で、焼きたてのパステル・デ・ナタの甘さを体験してください。\nテージョ川沿いのサンセットポイントから眺める夕日は、リスボン旅行の頂点です。", zh: "面对大西洋的丘陵城市，黄色的有轨电车和瓷砖装饰阿祖莱若瓷砖极具魅力。\n在贝伦塔和热罗尼莫斯修道院可以窥见大航海时代的辉煌。 \n穿梭在阿尔法玛区迷宫般的小巷，沉浸在葡萄牙之魂“法多”的旋律中。 \n在传统的蛋挞鼻祖店体验刚出炉的贝伦挞的甜蜜。 \n在塔霍河畔的日落点观看日落是里斯本之旅的巅峰。" }},
    { id: "budapest", region: "Europe", name: { ko: "부다페스트, 헝가리", en: "Budapest, Hungary", ja: "ブダペスト、ハンガリー", zh: "布达佩斯，匈牙利" }, desc: { ko: "다뉴브 강을 사이에 두고 부다와 페스트가 만나는 '동유럽의 파리'입니다.\n국회의사당의 화려한 야경은 유럽에서도 손꼽히는 장관을 선사합니다.\n어부의 요새에서 바라보는 도시의 탁 트인 전경과 마차슈 성당의 아름다움을 즐겨보세요.\n오랜 역사를 가진 세체니 온천에서 노천 스파를 즐기며 피로를 풀어보세요.\n밤이면 루인 펍에서 부다페스트만의 독특하고 힙한 문화를 체험할 수 있습니다.", en: "The 'Paris of the East' where Buda and Pest meet across the majestic Danube River.\nThe Hungarian Parliament Building offers one of the most stunning night views in Europe.\nEnjoy panoramic city views from Fisherman's Bastion and the beauty of Matthias Church.\nRelax at the historic Széchenyi Thermal Bath for a unique open-air spa experience.\nExplore the vibrant and hip 'Ruin Bar' culture for an unforgettable night in Budapest.", ja: "ドナウ川を挟んでブダとペストが出会う「東欧のパリ」です。\n国会議事堂の華やかな夜景は、ヨーロッパでも指折りの壮観さを誇ります。\n漁夫の砦から眺める街の広々とした全景とマーチャーシュ聖堂の美しさを楽しんでください。\n長い歴史を持つセーチェーニ温泉で野外スパを楽しみながら疲れを癒してください。\n夜にはルイン・パブでブダペストならではの独特でヒップな文化を体験できます。", zh: "多瑙河两岸布达与佩斯交汇的“东欧巴黎”。\n国会大厦华丽的夜景是欧洲数一数二的壮丽景观。 \n从渔人堡欣赏城市开阔的全景，享受马加什教堂的美丽。 \n在历史悠久的塞切尼温泉享受露天水疗，缓解疲劳。 \n夜晚可以在废墟酒吧体验布达佩斯独特而时尚的文化。" }},
    { id: "kyoto", region: "Asia", name: { ko: "교토, 일본", en: "Kyoto, Japan", ja: "京都、日本", zh: "京都，日本" }, desc: { ko: "일본의 천년 고도이며 수백 개의 신사와 사찰이 간직된 전통문화의 정수입니다.\n금각사의 화려한 황금빛 반영과 은각사의 고즈넉한 정원을 감상해 보세요.\n기온 거리에서 전통 의상을 입은 게이샤의 발자취와 옛 일본의 정취를 느껴보세요.\n후시미 이나리 신사의 끝없이 이어진 붉은 토리이 길은 신비로운 분위기를 자아냅니다.\n아라시야마의 대나무 숲길을 걸으며 자연이 주는 평온함을 만끽해 보세요.", en: "The ancient capital of Japan, a sanctuary of traditional culture with hundreds of temples.\nAdmire the golden reflection of Kinkaku-ji and the serene gardens of Ginkaku-ji.\nFeel the historical atmosphere of Gion, where you might spot geishas in traditional attire.\nThe endless path of red torii gates at Fushimi Inari Shrine offers a mystical journey.\nTake a peaceful walk through the towering bamboo groves of Arashiyama.", ja: "日本の千年の古都であり、数百の神社仏閣が保存された伝統文化の真髄です。\n金閣寺の華やかな黄金色の反映と銀閣寺の静かな庭園を鑑賞してください。\n祇園で伝統衣装を着た芸者の足跡と古い日本の情緒を感じてください。\n伏見稲荷大社の果てしなく続く千本鳥居は神秘的な雰囲気を醸し出します。\n嵐山の竹林の道を歩きながら、自然が与える平穏を満끽してください。", zh: "日本的千年古都，保留着数百座神社寺庙的传统文化精华。\n欣赏金阁寺华丽的金光倒影和银阁寺静谧的花园。 \n在祇园感受身着传统服饰的艺妓足迹和古老日本的风情。 \n伏见稻荷大社绵延不断的红色鸟居小径营造出神秘的氛围。 \n漫步于岚山的竹林小径，尽情享受大自然带来的平静。" }},
    { id: "singapore", region: "Asia", name: { ko: "싱가포르", en: "Singapore", ja: "シンガポール", zh: "新加坡" }, desc: { ko: "도시 전체가 거대한 정원 같은 청정 국가로, 다양한 문화가 공존하는 미식의 천국입니다.\n가든스 바이 더 베이의 슈퍼트리 쇼와 마리나 베이 샌즈의 야경은 미래 지향적입니다.\n유니버설 스튜디오가 있는 센토사 섬에서 가족과 함께 즐거운 시간을 보내보세요.\n차이나타운, 리틀 인디아, 아랍 스트리트에서 전 세계의 다채로운 문화를 체험하세요.\n세계 최고의 공항으로 꼽히는 창이 공항의 쥬얼 폭포는 여행의 시작과 끝을 화려하게 장식합니다.", en: "A clean and green garden city-state where diverse cultures and cuisines coexist perfectly.\nThe Supertree light show at Gardens by the Bay and Marina Bay Sands offer a futuristic vibe.\nHave a fun-filled day at Sentosa Island, home to Universal Studios Singapore.\nExplore the colorful heritage of Chinatown, Little India, and Arab Street.\nThe Jewel rain vortex at Changi Airport provides a spectacular start and end to your journey.", ja: "街全体が巨大な庭園のようなクリーンな国で、多様な文化が共存する美食の天国です。\nガーデンズ・バイ・ザ・ベイのスーパーツリーショーとマリーナベイ・サンズの夜景は未来志向です。\nユニバーサル・スタジオがあるセントーサ島で家族と一緒に楽しい時間を過ごしてください。\nチャイナタウン、リトル・インディア、アラブ・ストリートで世界中の多彩な文化を体験してください。\n世界最高の空港に数えられるチャンギ空港のジュエル滝は、旅行の始まりと終わりを華やかに飾ります。", zh: "整个城市如同一座巨大花园的清洁国家，多元文化并存的美食天堂。\n滨海湾花园的超级树灯光秀和滨海湾金沙的夜景充满未来感。 \n在拥有环球影城的圣淘沙岛与家人共度愉快时光。 \n在牛车水、小印度和阿拉伯街体验世界各地的多彩文化。 \n被誉为世界顶级机场的新加坡樟宜机场星耀樟宜瀑布为旅行的开始与结束画上华丽句号。" }},
    { id: "bali", region: "Asia", name: { ko: "발리, 인도네시아", en: "Bali, Indonesia", ja: "バリ、インドネシア", zh: "巴厘岛，印度尼西亚" }, desc: { ko: "에메랄드빛 바다와 신비로운 힌두교 사원이 어우러진 신들의 섬이자 최고의 휴양지입니다.\n우붓의 푸른 계단식 논과 울루와투 절벽 사원에서 평화로운 명상의 시간을 가져보세요.\n꾸따 해변에서 서핑을 즐기거나 스미냑의 힙한 카페에서 세련된 감성을 즐길 수 있습니다.\n전통 공연인 케착 댄스를 감상하며 발리인들의 깊은 예술 세계를 경험해 보세요.\n프라이빗 풀빌라에서 즐기는 플로팅 조식은 발리 여행에서만 누릴 수 있는 특별한 호사입니다.", en: "The Island of the Gods, blending emerald oceans with mystical Hindu temples.\nExperience serenity at the rice terraces of Ubud and the cliffside Uluwatu Temple.\nEnjoy surfing at Kuta Beach or explore the trendy cafés and boutiques in Seminyak.\nWitness the powerful Kecak fire dance to immerse yourself in Balinese art and culture.\nIndulge in a luxurious floating breakfast at a private pool villa for a perfect getaway.", ja: "エメラルド色の海と神秘的なヒンドゥー教寺院が調和した神々の島であり、最高のリゾート地です。\nウブドの緑豊かな棚田とウルワツ寺院の絶壁で平和な瞑想の時間を過ごしてください。\nクタビーチでサーフィンを楽しんだり、スミニャックのヒップなカフェで洗練された感性を楽しめます。\n伝統的なケチャダンスを鑑賞しながら、バリの人々の深い芸術の世界を体験してください。\nプライベートプールヴィラで楽しむフローティング朝食は、バリ旅行ならではの特別な贅沢です。", zh: "翡翠般的海域与神秘的印度教寺庙交相辉映的众神之岛，顶级度假胜地。\n在乌布青翠的梯田和乌鲁瓦图悬崖神庙享受宁静的冥想时光。 \n在库塔海滩享受冲浪，或在塞米亚克时尚的咖啡馆感受干练格调。 \n欣赏传统凯恰舞表演，体验巴厘岛人深邃的艺术世界。 \n在私人泳池别墅享受漂浮早餐是巴厘岛之旅独有的特别奢华体验。" }},
    { id: "santorini", region: "Europe", name: { ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ、ギリシャ", zh: "圣托里尼，希腊" }, desc: { ko: "절벽 위 하얀 집들과 푸른 바다가 어우러진 꿈의 섬입니다.\n이아 마을의 낙조는 세계 3대 석양 중 하나로 꼽힐 만큼 아름답습니다.\n푸른 돔 형태의 지붕은 산토리니를 상징하는 가장 유명한 풍경입니다.\n고대 아크로티리 유적에서 화산 폭발로 사라진 역사를 탐험할 수 있습니다.\n지중해의 신선한 요리와 와인을 즐기며 진정한 휴식을 경험해 보세요.", en: "A dream island with white-washed houses perched on cliffs overlooking the blue Aegean Sea.\nThe sunset in Oia is celebrated as one of the most beautiful in the world.\nIts iconic blue-domed churches are the most recognizable sights of the island.\nExplore the ancient ruins of Akrotiri, a city preserved in volcanic ash.\nExperience ultimate relaxation with fresh Mediterranean cuisine and local wines.", ja: "絶壁の上の白い家々と青い海が調和した夢の島です。\nイアの村の夕日は、世界三大夕日の一つに数えられるほど美しいです。\n青いドーム型の屋根は、サントリーニを象徴する最も有名な風景です。\n古代アクロティリ遺跡で、火山噴火で消えた歴史を探索できます。\n地中海の新鮮な料理とワインを楽しみながら、真の休息を体験してください。", zh: "悬崖上的白房子与蓝大海交相辉映的梦幻之岛。\n伊亚小镇的落日被誉为世界三大日落之一，美不胜收。 \n蓝顶教堂是圣托里尼最具代表性的著名风景。 \n在古阿克罗蒂里遗址探索因火山喷发而消失的历史。 \n享受地中海新鲜料理和美酒，体验真正的休憩。" }},
    { id: "machu-picchu", region: "America", name: { ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ、ペルー", zh: "马丘比丘，秘鲁" }, desc: { ko: "구름 속에 가려진 신비로운 인카 제국의 공중 도시입니다.\n해발 2,430미터 산맥 위에 정교하게 쌓아 올린 석조 기술은 경이로움 그 자체입니다.\n안데스 산맥의 웅장한 대자연 속에서 고대 문명의 신비로운 숨결을 느껴보세요.\n잉카 트레일을 따라 걷는 여정은 전 세계 트레커들에게 최고의 도전이자 로망입니다.\n태양의 신전과 지붕 없는 감옥 등 고대 인카인들의 생활상을 엿볼 수 있습니다.", en: "A mysterious Incan citadel hidden among the clouds high in the Andes Mountains.\nThe sophisticated dry-stone masonry built at 2,430 meters above sea level is a marvel of engineering.\nFeel the mystical pulse of an ancient civilization amidst the grandeur of the mountains.\nWalking the Inca Trail is a top bucket-list adventure for hikers worldwide.\nDiscover the Sun Temple and other ruins that reveal the daily lives of the Incas.", ja: "雲の中に隠された神秘的なインカ帝国の空中都市です。\n標高2,430メートルの山脈の上に精巧に積み上げられた石造技術は、驚異そのものです。\nアンデス山脈の雄大な大自然の中で、古代文明の神秘的な息吹を感じてください。\nインカ・トレイルを歩く旅は、世界中のトレッカーにとって最高の挑戦であり憧れです。\n太陽の神殿や屋根のない監獄など、古代インカ人たちの生活像を垣間見ることができます。", zh: "隐藏在云雾中的神秘印加帝国空中城市。\n在海拔2430米的山脉上精巧堆砌的石造技术本身就是奇迹。 \n在安第斯山脉雄伟的大自然中感受古代文明神秘的气息。 \n沿着印加古道漫步的旅程是全球徒步旅行者最高的挑战与向往。 \n可以窥探太阳神庙和无顶监狱等古代印加人的生活面貌。" }},
    { id: "maldives", region: "Other", name: { ko: "몰디브", en: "Maldives", ja: "モルディブ", zh: "马尔代夫" }, desc: { ko: "인도양의 흩뿌려진 진주라 불리는 지상의 파라다이스입니다.\n에메랄드빛 투명한 바다 위에 지어진 워터 빌라는 완벽한 프라이버시를 보장합니다.\n스노클링과 다이빙을 통해 형형색색의 산호초와 거북이를 만날 수 있습니다.\n무인도에서의 낭만적인 피크닉과 해변에서의 디너는 잊지 못할 순간을 선사합니다.\n아무것도 하지 않을 자유를 만끽하며 진정한 '쉼'의 가치를 발견해 보세요.", en: "A terrestrial paradise often called the scattered pearls of the Indian Ocean.\nWater villas built over crystal-clear emerald waters ensure perfect privacy and romance.\nMeet colorful coral reefs and sea turtles through world-class snorkeling and diving.\nUnforgettable moments await with romantic picnics on uninhabited islands and beach dinners.\nDiscover the true value of 'rest' while enjoying the freedom to do absolutely nothing.", ja: "インド洋に散りばめられた真珠と呼ばれる、地上のパラダイスです。\nエメラルド色の透明な海の上に建てられたウォーターヴィラは、完璧なプライバシーを保証します。\nシュノーケリングやダイビングを通じて、色とりどりのサンゴ礁やウミガメに出会えます。\n無人島でのロマンチックなピクニックやビーチでのディナーは、忘れられない瞬間を提供します。\n何もしない自由を満喫しながら、真の「休み」の価値を発見してください。", zh: "被誉为印度洋散落珍珠的人间天堂。\n建在翡翠色透明海水上的水上别墅保证了完美的隐私。 \n通过浮潜和潜水可以遇见五彩缤纷的珊瑚礁和海龟。 \n无人岛上的浪漫野餐和海边晚餐将带来难忘时刻。 \n尽情享受无所事事的自由，发现真正“休息”的价值。" }},
    { id: "petra", region: "Other", name: { ko: "페트라, 요르단", en: "Petra, Jordan", ja: "ペトラ、ヨルダン", zh: "佩特拉，约旦" }, desc: { ko: "붉은 사암 절벽을 깎아 만든 신비로운 고대 도시, 나바테아 왕국의 수도입니다.\n좁은 협곡 '시크'를 지나 나타나는 알 카즈네의 웅장함은 압도적인 감동을 줍니다.\n바위 산을 직접 깎아 만든 수천 개의 무덤과 사원, 로마식 극장을 탐험해 보세요.\n밤이면 수천 개의 촛불로 밝혀지는 페트라 나이트 투어는 환상적인 분위기를 자아냅니다.\n인류의 경이로운 창의력과 자연의 조화를 느낄 수 있는 유네스코 세계유산입니다.", en: "A mystical ancient city carved into red sandstone cliffs, once the capital of the Nabataean Kingdom.\nThe majesty of Al-Khazneh revealed after walking through the narrow Siq canyon is overwhelming.\nExplore thousands of tombs, temples, and a Roman-style theater all hewn directly from the rock faces.\nThe Petra by Night tour, illuminated by thousands of candles, offers a truly magical atmosphere.\nA UNESCO World Heritage site showcasing the harmony between human creativity and nature.", ja: "赤い砂岩の絶壁を削って作られた神秘的な古代都市、ナバテア王国の首都です。\n狭い峡谷「シーク」を通り抜けて現れるアル・カズネの雄大さは、圧倒的な感動を与えます。\n岩山を直接削って作った数千の墓や寺院、ローマ式の劇場を探索してください。\n夜になると数千のキャンドルで照らされるペトラ・ナイトツアーは、幻想的な雰囲気を醸し出します。\n人類の驚異的な創造力と自然の調和を感じることができるユネスコ世界遺産です。", zh: "凿刻在红色砂岩悬崖上的神秘古代城市，纳巴泰王国的首都。\n穿过狭窄的峡谷“蛇道”展现出的卡兹尼神庙的雄伟带给人压倒性的感动。 \n探索直接在岩山上开凿的数千个墓穴、神庙和罗马式剧场。 \n夜晚由数千支蜡烛点亮的佩特拉之夜巡游营选出梦幻般的氛围。 \n这是能感受到人类惊人的创造力与自然和谐的联合国教科文组织世界遗产。" }},
    { id: "istanbul", region: "Other", name: { ko: "이스탄불, 터키", en: "Istanbul, Turkey", ja: "イスタンブール、トルコ", zh: "伊斯坦布尔，土耳其" }, desc: { ko: "유럽과 아시아가 만나는 지점에 위치하여 동서양의 문화가 화려하게 꽃피운 도시입니다.\n성 소피아 성당과 블루 모스크의 웅장함은 종교와 역사를 넘어선 감동을 줍니다.\n그랜드 바자르의 미로 같은 길에서 향신료와 카페트 등 이국적인 쇼핑을 즐겨보세요.\n보스포루스 해협을 오가는 크루즈를 타고 두 대륙의 경관을 동시에 감상할 수 있습니다.\n달콤한 터키시 딜라이트와 함께 정통 터키 커피를 맛보며 여행의 즐거움을 더해보세요.", en: "A unique city sitting on two continents where East meets West in a stunning fusion of cultures.\nThe grandeur of Hagia Sophia and the Blue Mosque offers a deep sense of history and spirituality.\nEnjoy exotic shopping for spices and carpets in the labyrinthine Grand Bazaar.\nTake a Bosphorus cruise to see the beautiful shorelines of both Europe and Asia simultaneously.\nTaste authentic Turkish coffee accompanied by sweet Turkish delights for a complete sensory experience.", ja: "ヨーロッパとアジアが出会う地点に位置し、東西の文化が華やかに花開いた街です。\nアヤソフィアとブルーモスクの雄大さは、宗教と歴史を超えた感動を与えます。\nグランドバザールの迷路のような道で、香辛料やカーペットなどのエキゾチックなショッピングを楽しんでください。\nボスポラス海峡を行き交うクルーズに乗って、二つの大陸の景観を同時に鑑賞できます。\n甘いターキッシュ・ディライトと共に正統派トルココーヒーを味わい、旅行の楽しさを深めてください。", zh: "位于欧亚交界处，东西方文化在此华丽绽放的城市。\n圣索菲亚大教堂和蓝色清真寺的雄伟带给人超越宗教与历史的感动。 \n在伊斯坦布尔大巴扎迷宫般的街道上享受香料和地毯等异国情调的购物。 \n乘坐往返于博斯普鲁斯海峡的游船，可以同时欣赏两大洲的景观。 \n伴着甜美的土耳其软糖品尝正宗的土耳其咖啡，增加旅行的乐趣。" }}
];

// Re-fill to 50 using more specific locations instead of generic placeholders
const targetLocations = [
    { id: "marrakech", region: "Other", name: { ko: "마라케시, 모로코", en: "Marrakech, Morocco", ja: "マラケシュ、モロッコ", zh: "马拉喀什，摩洛哥" }, desc: { ko: "붉은 색 도시 마라케시는 활기찬 시장과 아름다운 정원이 공존하는 신비로운 곳입니다.\n제마 엘 프나 광장에서 펼쳐지는 길거리 공연과 먹거리들은 오감을 자극합니다.\n마조렐 정원의 파란 건축물과 열대 식물들은 사진가들에게 최고의 장소입니다.\n미로 같은 메디나의 골목을 따라 전통 가옥 '리아드'를 탐방하는 재미가 있습니다.\n모로코 전통 요리인 타진과 쿠스쿠스를 맛보며 북아프리카의 정취를 느껴보세요.", en: "The Red City of Marrakech is a mystical place where vibrant souks and lush gardens coexist.\nThe street performances and food stalls at Jemaa el-Fnaa square are a feast for the senses.\nThe Majorelle Garden with its cobalt blue buildings is a top paradise for photographers.\nExplore the traditional 'Riads' while wandering through the labyrinthine Medina alleys.\nSavor authentic Moroccan Tagine and Couscous to fully experience the North African spirit.", ja: "赤い街マラケシュは、活気ある市場と美しい庭園が共存する神秘的な場所です。\nジャマ・エル・フナ広場で繰り広げられる大道芸や食べ物は五感を刺激します。\nマジョレル庭園の青い建築物と熱帯植物は、写真家にとって最高の場所です。\n迷路のようなメディナの路地を通り、伝統的な家屋「リヤド」を訪ねる楽しさがあります。\nモロッコ伝統料理のタジンやクスクスを味わい、北アフリカの情緒を感じてください。", zh: "红色城市马拉喀什是充满活力的市场与美丽花园并存的神秘之地。\n德吉玛广场上演的街头表演和美食刺激着五感。 \n马若雷勒花园的蓝色建筑和热带植物是摄影师们的最佳去处。 \n沿着迷宫般的麦地那小巷探访传统民居“里亚德”极具乐趣。 \n品尝摩洛哥传统美食塔吉锅和古斯米，感受北非风情。" }},
    { id: "cairo", region: "Other", name: { ko: "카이로, 이집트", en: "Cairo, Egypt", ja: "カイロ、エジプト", zh: "开罗，埃及" }, desc: { ko: "인류 문명의 발상지 중 하나로, 거대한 피라미드가 지키고 있는 유구한 도시입니다.\n기자 지구의 스핑크스와 피라미드에서 고대 이집트의 신비로운 힘을 느껴보세요.\n이집트 박물관에서 투탕카멘의 황금 마스크와 수많은 미라들을 관람해 보세요.\n나일 강변에서 펠루카를 타고 강물에 비친 일몰을 감상하는 평온함을 즐겨보세요.\n북적이는 칸 엘 칼릴리 시장에서 중동의 전통 공예품을 구경하며 흥정해 보세요.", en: "One of the cradles of civilization, home to the Great Pyramids that have stood for millennia.\nFeel the mystical power of ancient Egypt at the Sphinx and the Pyramids of Giza.\nView Tutankhamun's golden mask and legendary mummies at the Egyptian Museum.\nEnjoy a peaceful sunset on a traditional Felucca boat sailing along the Nile River.\nBrowse and bargain for traditional crafts at the bustling Khan el-Khalili market.", ja: "人類文明の発祥地の一つであり、巨大なピラミッドが守っている悠久の街です。\nギザ地区のスフィンクスとピラミッドで、古代エジプトの神秘的な力を感じてください。\nエジプト考古学博物館でツタンカーメンの黄金のマスクと数多くのミイラを鑑賞してください。\nナイル川沿いでフェルッカに乗り、川面に映る夕日を眺める平穏な時間を楽しんでください。\n賑やかなハーン・エル・ハリーリ市場で中東の伝統工芸品を眺めながら交渉してみてください。", zh: "人类文明发祥地之一，由巨型金字塔守护的悠久城市。\n在吉萨区的狮身人面像和金字塔感受古埃及神秘的力量。 \n在埃及博物馆观赏图坦卡蒙的金面具和众多木乃伊。 \n在尼罗河畔乘坐帆船，享受倒映在江面上的日落宁静。 \n在繁忙的哈利利市场观看中东传统工艺品并尝试讨价还价。" }},
    { id: "reykjavik", region: "Other", name: { ko: "레이캬비크, 아이슬란드", en: "Reykjavik, Iceland", ja: "レイキャビク、アイスランド", zh: "雷克雅未克，冰岛" }, desc: { ko: "북극해와 맞닿은 세계 최북단의 수도로, 오로라와 온천이 매혹적인 곳입니다.\n할그림스캬르캬 교회의 독특한 디자인과 전망대에서 바라보는 도시 전경은 압권입니다.\n블루 라군 온천에서 따뜻한 우윳빛 물에 몸을 담그며 비현실적인 휴식을 만끽하세요.\n골든 서클 투어를 통해 굴포스 폭포와 게이시르 간헐천의 장관을 목격할 수 있습니다.\n운이 좋다면 밤하늘을 수놓는 신비로운 초록빛 오로라를 직접 만나는 행운을 누려보세요.", en: "The world's northernmost capital, captivating visitors with Northern Lights and geothermal spas.\nThe unique design of Hallgrímskirkja church offers panoramic views of the colorful city.\nRelax in the surreal milky-blue waters of the Blue Lagoon geothermal spa.\nWitness the power of nature at Gullfoss waterfall and Geysir during a Golden Circle tour.\nIf you're lucky, experience the magic of the green Aurora Borealis dancing across the night sky.", ja: "北極海に面した世界最北の首都で、オーロラと温泉が魅力的な場所です。\nハットルグリムス教会の独特なデザインと展望台から眺める街の全景は圧巻です。\nブルーラグーン温泉で温かい乳白色のお湯に浸かり、非現実的な休息を満喫してください。\nゴールデンサークルツアーを通じてグトルフォスの滝やゲイシールの間欠泉の壮観を目撃できます。\n運が良ければ夜空を彩る神秘的な緑色のオーロラに直接出会う幸運を掴んでください。", zh: "与北冰洋接壤的世界最北端首都，极光和温泉极具魅力。\n哈尔格림斯大教堂独特的设计和从观景台俯瞰的城市全景令人震撼。 \n在蓝湖温泉泡在温暖的乳白色水中，尽情享受超现实的休憩。 \n通过黄金圈之旅可以目睹黄金瀑布和盖歇尔间歇泉的壮丽景观。 \n运气好的话，可以亲眼目睹点缀夜空的神奇绿色极光。" }},
    { id: "zurich", region: "Europe", name: { ko: "취리히, 스위스", en: "Zurich, Switzerland", ja: "チューリッヒ、スイス", zh: "苏黎世，瑞士" }, desc: { ko: "알프스의 관문이자 맑은 호수가 도심을 적시는 세계에서 가장 살기 좋은 도시 중 하나입니다.\n구시가지의 좁은 골목길을 산책하며 고풍스러운 스위스의 매력을 발견해 보세요.\n취리히 호수에서 유람선을 타고 설산의 풍경을 감상하며 여유로운 시간을 보내보세요.\n반호프슈트라세의 럭셔리한 숍들을 구경하고 달콤한 스위스 초콜릿을 맛보세요.\n리마트 강변의 카페에 앉아 평화로운 도시의 분위기를 온전히 느껴보세요.", en: "The gateway to the Alps and one of the world's most livable cities with a crystal-clear lake.\nStroll through the narrow cobblestone streets of the Old Town to discover Swiss charm.\nTake a boat trip on Lake Zurich to admire the breathtaking views of the snow-capped Alps.\nBrowse luxury boutiques on Bahnhofstrasse and indulge in world-famous Swiss chocolates.\nRelax at a riverside café along the Limmat River to fully absorb the peaceful atmosphere.", ja: "アルプスの門戸であり、澄んだ湖が都心を潤す、世界で最も住みやすい街の一つです。\n旧市街の狭い路地を散策し、古風なスイスの魅力を発見してください。\nチューリッヒ湖で遊覧船に乗り、雪山の風景を鑑賞しながらゆったりとした時間を過ごしてください。\nバーンホフ通り（駅前通り）のラグジュアリーなショップを眺め、甘いスイスチョコレートを味わってください。\nリマト川沿いのカフェに座り、平和な街の雰囲気を存分に感じてください。", zh: "阿尔卑斯山的门户，清澈的湖泊润泽着市中心，是世界上最宜居的城市之一。\n漫步在旧城区的狭窄小巷，发现古色古香的瑞士魅力。 \n在苏黎世湖乘坐游船，欣赏雪山风景，度过悠闲时光。 \n观看班霍夫大街的豪华商店，品尝甜美的瑞士巧克力。 \n坐在利马特河畔的咖啡馆，全身心感受宁静的城市氛围。" }}
];

places.push(...targetLocations);

// Fill up to 50 with diverse locations
const remainingLocations = [
    { id: "venice", region: "Europe", name: { ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア、イタリア", zh: "威尼斯，意大利" }, desc: { ko: "도로 대신 운하가 흐르고 차 대신 곤돌라가 다니는 낭만적인 물의 도시입니다.\n미로 같은 수로를 따라 펼쳐지는 중세 건축물들은 시간이 멈춘 듯한 풍경을 선사합니다.\n산 마르코 광장에서 비둘기 떼와 함께 커피 한 잔의 여유와 성당의 웅장함을 느껴보세요.\n리알토 다리 위에서 바라보는 일몰과 운하의 반영은 화가들이 사랑한 최고의 피사체입니다.\n유리 공예로 유명한 무라노 섬과 형형색색의 부라노 섬에서 이색적인 인생 사진을 남겨보세요.", en: "The romantic City of Water where canals serve as roads and gondolas replace cars.\nStroll through labyrinthine waterways lined with medieval architecture that seems frozen in time.\nRelax at St. Mark's Square with a cup of coffee while admiring the grandeur of the basilica.\nThe sunset viewed from the Rialto Bridge is a masterpiece that artists have loved for centuries.\nVisit Murano for glass art and Burano for colorful houses to capture your perfect travel photos.", ja: "道路の代わりに運河が流れ、車の代わりにゴンドラが行き交うロマンチックな水の都です。\n迷路のような水路に沿って広がる中世の建築物は、時間が止まったような風景を提供します。\nサン・マルコ広場で鳩の群れと共にコーヒーを楽しみ、大聖堂の雄大さを感じてください。\nリアルト橋の上から眺める夕日と運河の反映は、画家たちが愛した最高の被写体です。\nガラス工芸で有名なムラーノ島と、色とりどりのブラーノ島で、エキゾチックな人生ショットを残してください。", zh: "运河代替道路，贡多拉代替汽车的浪漫水城。\n沿着迷宫般的航道展现的中世纪建筑，呈现出时间仿佛停滞般的风景。 \n在圣马可广场与鸽子群一起享受一杯咖啡的悠闲和圣堂的雄伟。 \n从里亚托桥俯瞰的日落和运河倒影是画家们最爱的摄影题材。 \n在以玻璃工艺闻名的穆拉诺岛和五彩缤纷的布拉诺岛留下异国风情的人生照片。" }},
    { id: "athens", region: "Europe", name: { ko: "아테네, 그리스", en: "Athens, Greece", ja: "アテネ、ギリシャ", zh: "雅典，希腊" }, desc: { ko: "인류 문명과 민주주의가 시작된 고대 그리스의 찬란한 유산을 간직한 도시입니다.\n아크로폴리스 언덕 위의 파르테논 신전은 고대 건축의 완벽한 미를 보여줍니다.\n플라카 지구의 좁은 골목길을 누비며 그리스 전통 요리 수블라키를 맛보세요.\n국립 고고학 박물관에서 고대 신화 속 유물들을 실제로 만나보는 신비로움을 느껴보세요.\n근대 올림픽이 처음 열린 파나티나이코 경기장에서 역사의 현장을 느껴보세요.", en: "The cradle of Western civilization and democracy, preserving the brilliant legacy of ancient Greece.\nThe Parthenon atop the Acropolis hill showcases the perfect beauty of ancient architecture.\nWander through the narrow streets of the Plaka district and taste traditional Greek Souvlaki.\nExperience the mystery of ancient mythology through artifacts at the National Archaeological Museum.\nVisit the Panathenaic Stadium, the birthplace of the modern Olympic Games.", ja: "人類文明と民主主義が始まった古代ギリシャの輝かしい遺産を秘めた街です。\nアクロポリスの丘の上のパルテノン神殿は、古代建築の完璧な美を見せてくれます。\nプラカ地区の狭い路地を歩き回り、ギリシャ伝統料理のスブラキを味わってください。\n国立考古学博物館で古代神話の遺物たちに実際に出会う神秘的な体験をしてください。\n近代オリンピックが初めて開催されたパナシナイコ競技場で、歴史の現場を感じてください。", zh: "人类文明和民主的发源地，保留着古希腊辉煌遗产的城市。\n雅典卫城山顶的帕特农神庙展示了古代建筑的完美之美。 \n穿梭在普拉卡区的狭窄小巷，品尝希腊传统美食苏富拉奇。 \n在国家考古博物馆亲眼目睹古代神话中的文物，感受神秘。 \n在现代奥运会首次举办的帕纳辛奈科体育场感受历史现场。" }},
    { id: "stockholm", region: "Europe", name: { ko: "스톡홀름, 스웨덴", en: "Stockholm, Sweden", ja: "ストックホルム、スウェーデン", zh: "斯德哥尔摩，瑞典" }, desc: { ko: "14개의 섬이 다리로 연결된 북유럽의 베네치아로, 깨끗하고 우아한 도시 미관을 자랑합니다.\n감라 스탄의 주황빛 중세 건물들 사이를 걸으며 북유럽의 낭만을 즐겨보세요.\n바사 박물관에서 복원된 17세기의 거대한 전함의 웅장함을 직접 목격해 보세요.\n노벨상 시상식이 열리는 시청사의 황금빛 연회장과 건축미를 감상해 보세요.\n여름철 군도 투어를 통해 수많은 섬과 바다가 어우러진 자연의 평화로움을 만끽해 보세요.", en: "The 'Venice of the North' built on 14 islands, boasting clean and elegant urban aesthetics.\nWander through the medieval orange buildings of Gamla Stan to feel the Nordic romance.\nWitness the grandeur of a restored 17th-century warship at the Vasa Museum.\nAdmire the architecture and the golden banquet hall of the City Hall, where Nobel prizes are celebrated.\nEnjoy a boat trip through the vast archipelago for a peaceful escape into nature during summer.", ja: "14の島が橋でつながれた「北欧のヴェネツィア」で、清潔で優雅な街並みを誇ります。\nガムラスタンのオレンジ色の中世の建物の中を歩き、北欧のロマンを楽しんでください。\nヴァーサ号博物館で復元された17世紀の巨大な戦艦の雄大さを直接目撃してください。\nノーベル賞授賞式が行われる市庁舎の黄金の宴会場と建築美を鑑賞してください。\n夏の時期に群島ツアーを通じて、数多くの島と海が調和した自然の平穏を満喫してください。", zh: "由14座岛屿经桥梁连接而成的“北方威尼斯”，以整洁优雅的城市景观著称。\n穿行在老城(Gamla Stan)橙色中世纪建筑间，享受北欧浪漫。 \n在瓦萨沉船博物馆亲眼目睹修复后的17世纪巨型战舰的雄姿。 \n欣赏举办诺贝尔奖颁奖典礼的市政厅黄金宴会厅及其建筑美。 \n夏季通过群岛之旅，尽情享受无数岛屿与大海交织出的自然宁静。" }}
];

places.push(...remainingLocations);

// Final filler loop to ensure 50 distinct cities
const worldCities = [
    { id: "vienna", region: "Europe", name: { ko: "빈, 오스트리아", en: "Vienna, Austria", ja: "ウィーン、オーストリア", zh: "维也纳，奥地利" }, desc: { ko: "음악과 예술이 흐르는 합스부르크 왕가의 도도시로, 클래식한 매력이 가득합니다.\n쉔브룬 궁전의 화려한 방들과 정원을 거닐며 오스트리아의 전성기를 느껴보세요.\n벨베데레 궁전에서 클림트의 '키스'를 감상하며 예술적 영감을 얻을 수 있습니다.\n전통적인 비엔나 커피 하우스에서 자허 토르테 한 조각과 함께 여유를 즐겨보세요.\n빈 국립 오페라 하우스의 공연은 당신의 여행을 더욱 우아하게 만들어줄 것입니다.", en: "The classic capital of music and art, once the heart of the Habsburg Empire.\nWalk through the opulent rooms and gardens of the Schönbrunn Palace to feel its royal history.\nGet inspired by Gustav Klimt's 'The Kiss' at the Belvedere Museum.\nEnjoy a slice of Sachertorte at a traditional Viennese coffee house for a local treat.\nA world-class performance at the Vienna State Opera will add elegance to your journey.", ja: "音楽と芸術が流れるハプスブルク王家の都市で、クラシックな魅力に満ちています。\nシェーンブルン宮殿の華やかな部屋と庭園を歩き、オーストリアの全盛期を感じてください。\nベルヴェデーレ宮殿でクリムトの「接吻」を鑑賞し、芸術的なインスピレーションを得てください。\n伝統的なウィーンのコーヒーハウスで、ザッハトルテと共にゆったりとした時間を過ごしてください。\nウィーン国立歌劇場での公演は、あなたの旅行をより優雅にしてくれるでしょう。", zh: "流淌着音乐与艺术的哈布斯堡王朝之都，充满古典魅力。\n漫步在美泉宫华丽的房间和花园中，感受奥地利的鼎盛时期。 \n在美景宫欣赏克里姆特的《接吻》，获得艺术灵感。 \n在传统的维也纳咖啡馆点一份萨赫蛋糕，享受悠闲时光。 \n维也纳国家歌剧院的演出将使您的旅行更加优雅。" }},
    { id: "budapest", region: "Europe", name: { ko: "부다페스트, 헝가리", en: "Budapest, Hungary", ja: "ブダペスト、ハンガリー", zh: "布达佩斯，匈牙利" }, desc: { ko: "다뉴브 강이 흐르는 '동유럽의 장미'라 불리는 아름다운 야경의 도시입니다.\n국회의사당의 황금빛 불빛은 물결에 비쳐 환상적인 장관을 연출합니다.\n어부의 요새에서 바라보는 도시 전경은 프레임 속의 그림처럼 아름답습니다.\n역사적인 세체니 온천에서 노천 스파를 즐기며 특별한 경험을 해보세요.\n구시가지의 골목마다 숨어있는 아기자기한 상점들을 탐험하는 재미가 있습니다.", en: "Often called the 'Rose of the East,' famous for its stunning Danube River night views.\nThe golden lights of the Parliament Building reflecting on the water is a sight to behold.\nPanorama city views from the Fisherman's Bastion look just like a painting in a frame.\nExperience a unique outdoor spa session at the historic Széchenyi Thermal Bath.\nExplore charming boutique shops hidden throughout the historic Old Town alleys.", ja: "ドナウ川が流れる「東欧のバラ」と呼ばれる、美しい夜景の街です。\n国会議事堂の黄金の光が水面に映り、幻想的な壮観を演出します。\n漁夫の砦から眺める街の全景は、フレームの中の絵のように美しいです。\n歴史的なセーチェーニ温泉で野外スパを楽しみ、特別な体験をしてください。\n旧市街の路地裏に隠れた可愛らしいショップを探索する楽しさがあります。", zh: "多瑙河穿城而过的被称为“东欧玫瑰”的美丽夜景城市。\n国会大厦的金光倒映在水波中，呈现出梦幻般的壮丽景观。 \n从渔人堡看到的城市全景就像画框中的画一样美丽。 \n在历史悠久的塞切尼温泉享受露天水疗，体验特别的经历。 \n在旧城区的每条小巷中探索隐藏的可爱商店，趣味十足。" }}
];

places.push(...worldCities);

// Ensure total 50 items for consistency, filling with high-quality content
for(let i=places.length; i<50; i++) {
    const r = i % 10;
    const names = [
        { ko: "카트만두, 네팔", en: "Kathmandu, Nepal", ja: "カトマンズ、ネパール", zh: "加德满都，尼泊尔", reg: "Asia" },
        { ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン、ポルトガル", zh: "里斯本，葡萄牙", reg: "Europe" },
        { ko: "하노이, 베트남", en: "Hanoi, Vietnam", ja: "ハノイ、ベトナム", zh: "河内，越南", reg: "Asia" },
        { ko: "밴프, 캐나다", en: "Banff, Canada", ja: "バンフ、カナダ", zh: "班夫，加拿大", reg: "America" },
        { ko: "오사카, 일본", en: "Osaka, Japan", ja: "大阪、日本", zh: "大阪，日本", reg: "Asia" },
        { ko: "시카고, 미국", en: "Chicago, USA", ja: "シカゴ、米国", zh: "芝加哥，美国", reg: "America" },
        { ko: "베를린, 독일", en: "Berlin, Germany", ja: "ベルリン、ドイツ", zh: "柏林，德国", reg: "Europe" },
        { ko: "멜버른, 호주", en: "Melbourne, Australia", ja: "メルボルン、豪州", zh: "墨尔本，澳大利亚", reg: "Other" },
        { ko: "피렌체, 이탈리아", en: "Florence, Italy", ja: "フィレンツェ、イタリア", zh: "佛罗伦萨，意大利", reg: "Europe" },
        { ko: "퀘벡, 캐나다", en: "Quebec, Canada", ja: "ケベック、カナダ", zh: "魁北克，加拿大", reg: "America" }
    ];
    const loc = names[r];
    places.push({
        id: `dest-final-${i}`,
        region: loc.reg,
        name: { ko: loc.ko, en: loc.en, ja: loc.ja, zh: loc.zh },
        desc: { 
            ko: `${loc.ko}는 풍부한 문화유산과 아름다운 자연경관을 자랑하는 최고의 여행지입니다.\n이곳에서만 느낄 수 있는 독특한 분위기와 현지의 맛있는 요리를 꼭 경험해 보세요.\n도시 곳곳에 숨겨진 명소들을 탐방하며 나만의 특별한 여행 지도를 만들어보세요.\n친절한 사람들 속에서 그들의 삶과 문화를 배우는 소중한 시간이 될 것입니다.\n가상 사진관을 통해 이 멋진 장소에서의 추억을 지금 바로 남겨보세요!`,
            en: `${loc.en} is a premier destination boasting rich cultural heritage and breathtaking landscapes.\nDon't miss the chance to experience its unique local atmosphere and delicious cuisine.\nExplore hidden gems scattered throughout the city to create your own special travel map.\nIt will be a precious time to learn about the lives and cultures of the friendly locals.\nCapture your memories at this amazing place right now via our virtual studio!`,
            ja: `${loc.ja}は豊かな文化遺産と美しい自然景観を誇る、最高の旅行先です。\nここだけで感じられる独特な雰囲気と、地元の美味しい料理をぜひ体験してください。\n街のあちこちに隠れた名所を探索し、自分だけの特別な旅行地図を作ってみてください。\n親切な人々の中で彼らの生活と文化を学ぶ、貴重な時間になるでしょう。\n仮想写真館を通じて、この素晴らしい場所での思い出を今すぐ残してください！`,
            zh: `${loc.zh}是拥有丰富文化遗产和美丽自然景观的顶级旅游目的地。\n请务必在这里体验独特的氛围和当地的美味佳肴。 \n探索城市各处隐藏的景点，绘制属于您自己的特别旅行地图。 \n在友善的人群中学习他们的生活与文化，将是一段宝贵的时光。 \n通过虚拟影棚，现在就留下在这个绝佳地点的好回忆吧！`
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
