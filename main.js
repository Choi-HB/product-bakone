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
}
,
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
}
,
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
}
,
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
}
;
let currentLang = 'en';
const places = [
{
id: "p1", region: "Europe", name: {
ko: "파리, 프랑스", en: "Paris, France", ja: "パリ・フランス", zh: "巴黎，法国" }
, desc: {
ko: "에펠탑과 루브르 박물관으로 상징되는 예술과 패션의 중심지입니다.\n세느 강변을 따라 펼쳐지는 낭만적인 야경은 전 세계 여행객들의 로망입니다.\n몽마르트르 언덕에서 화가들의 숨결을 느끼고 갓 구운 바게트의 풍미를 즐겨보세요.\n세계적인 명품 거리 샹젤리제와 역사적인 개선문은 파리의 품격을 더해줍니다.\n유서 깊은 카페에 앉아 에스프레소를 마시며 파리지앵의 여유를 느껴보세요.",
en: "The global center of art, fashion, and culture, iconic for its Eiffel Tower and Louvre Museum.\nEnjoy a romantic evening walk along the Seine River with its breathtaking city lights.\nVisit Montmartre to feel the artistic heritage and taste the authentic French boulangeries.\nThe Champs-Élysées and Arc de Triomphe represent the historic grandeur of this city.\nExperience the true Parisian lifestyle while sipping espresso at a sidewalk café.",
ja: "エッフェル塔とルーブル美術館に象徴される芸術とファッションの中心地です.\nセーヌ川沿いに広がるロマンチックな夜景は、世界中の旅行者の憧れです.\nモンマルトルの丘で芸術家たちの息吹を感じ、焼きたてのバゲットを味わってください.\n世界的な高級ブランド通りシャンゼリゼと歴史的な凱旋門がパリの品格を高めています.\n由緒あるカフェでエスプレッソを飲みながら、パリジャンの余裕を感じてみてください。",
zh: "以艾菲尔铁塔和卢浮宫为象征的艺术与时尚中心. \n沿塞纳河畔展开的浪漫夜景是全球游客的向往. \n在蒙马特高地感受艺术气息，品尝刚出炉的法式长棍面包. \n香榭丽舍大街和历史悠久的凯旋门增添了巴黎的尊贵感. \n坐在古老的咖啡馆里喝杯浓缩咖啡，感受巴黎人的悠闲生活。"
}
}
,
{
id: "p2", region: "Europe", name: {
ko: "런던, 영국", en: "London, UK", ja: "ロンドン・イギリス", zh: "伦敦，英国" }
, desc: {
ko: "빅벤과 타워 브리지가 반겨주는 유구한 역사를 가진 글로벌 수도입니다.\n영국 박물관에서 인류의 보물을 감상하고 웨스트엔드에서 세계 최고의 뮤지컬을 즐겨보세요.\n빨간 이층 버스를 타고 도시 곳곳의 빈티지 마켓과 고풍스러운 골목을 탐험할 수 있습니다.\n템즈 강변의 산책로와 하이드 파크의 넓은 녹지는 도심 속의 평화로운 휴식을 제공합니다.\n오후에는 전통적인 애프터눈 티를 즐기며 영국의 우아한 문화를 체험해 보세요.",
en: "A historic global capital greeting you with iconic landmarks like Big Ben and Tower Bridge.\nExplore human history at the British Museum and catch world-class musicals in the West End.\nRide the famous red double-decker bus to discover vintage markets and charming narrow streets.\nThe Thames River path and Hyde Park provide a peaceful escape within the bustling city center.\nDon't miss the chance to experience traditional afternoon tea for a taste of British elegance.",
ja: "ビッグベンとタワーブリッジが迎えてくれる、悠久の歴史を持つグローバルな首都です.\n大英博物館で人類の宝物を鑑賞し、ウェストエンドで世界最高のミュージカルを楽しんでください.\n赤い二階建てバスに乗って、街のあちこちにあるヴィンテージマーケットや古風な路地を探索できます.\nテムズ川沿いの散歩道とハイドパークの広大な緑地は、都心の中の平和な休息を提供します.\n午後には伝統的なアフタヌーンティーを楽しみながら、イギリスの優雅な文化を体験してください。",
zh: "大本钟和塔桥迎接您的悠久历史全球首都. \n在大英博物馆欣赏人类瑰宝，在西区观看世界顶级的音乐剧. \n乘坐著名的红色双层巴士，探索城市各处的复古市场和古风小巷. \n泰晤士河畔的步道和海德公园宽阔의 绿地提供城市中的宁静休憩. \n下午享受传统的下午茶，体验英国优雅的文化气息。"
}
}
,
{
id: "p3", region: "Europe", name: {
ko: "로마, 이탈리아", en: "Rome, Italy", ja: "ローマ・イタリア", zh: "罗马，意大利" }
, desc: {
ko: "모든 길은 통한다는 말처럼, 도시 전체가 거대한 노천 박물관인 영원한 도시입니다.\n콜로세움과 포로 로마노에서 고대 로마 제국의 화려했던 영광을 직접 목격하세요.\n트레비 분수에 동전을 던지며 다시 로마를 방문하기를 기원하는 전통을 경험해 보세요.\n세계에서 가장 작은 국가인 바티칸 시국에서 미켈란젤로의 경이로운 예술작품을 만날 수 있습니다.\n정통 이탈리안 젤라또와 파스타를 맛보며 이탈리아인들의 열정적인 미식 문화를 즐겨보세요.",
en: "The Eternal City, where every corner feels like a part of a massive open-air museum.\nWitness the ancient glory of the Roman Empire at the Colosseum and the Roman Forum.\nExperience the tradition of tossing a coin into the Trevi Fountain to ensure your return to Rome.\nVisit the Vatican City, the world's smallest state, to see Michelangelo's breathtaking art.\nSavor authentic Italian gelato and pasta while immersing yourself in their passionate food culture.",
ja: "「すべての道はローマに通ず」と言われるように、街全体が巨大な野外博物館である永遠の都です.\nコロッセオとフォロ・ロマーノで、古代ローマ帝国の華やかな栄光を直接目撃してください.\nトレヴィの泉にコインを投げ入れ、再びローマを訪れることを願う伝統を体験してください.\n世界で最も小さな国であるバチカン市国で、ミケランジェロの驚異的な芸術作品に出会えます.\n正統派イタリアンジェラートとパスタを味わいながら、イタリア人の情熱的な美食文化を楽しんでください。",
zh: "正如“条条大路通罗马”所言，整个城市就是一座巨大的露天博物馆，被称为永恒之城. \n在斗兽场和古罗马广场亲眼目睹古罗马帝国的辉煌. \n在特莱维喷泉投下一枚硬币，体验祈求再次访问罗马的传统. \n在世界上最小的国家梵蒂冈，欣赏米开朗基罗惊世骇俗的艺术作品. \n品尝正宗的意大利冰淇淋和意面，享受意大利人热情的饮食文化。"
}
}
,
{
id: "p4", region: "Asia", name: {
ko: "서울, 대한민국", en: "Seoul, South Korea", ja: "ソウル・韓国", zh: "首尔，韩国" }
, desc: {
ko: "600년 역사의 조선 궁궐과 최첨단 빌딩이 공존하는 역동적인 메가시티입니다.\n경복궁의 고즈넉한 아름다움과 남산타워에서 바라보는 화려한 야경을 동시에 즐길 수 있습니다.\n명동의 활기찬 쇼핑 거리와 강남의 세련된 문화는 끊임없는 즐거움을 선사합니다.\n전 세계를 사로잡은 K-푸드와 한국의 따뜻한 정을 담은 시장 문화를 체험해 보세요.\n편리한 대중교통과 밤늦도록 꺼지지 않는 화려한 불빛은 서울만의 독특한 매력입니다.",
en: "A dynamic megacity where 600-year-old Joseon palaces and futuristic buildings coexist.\nEnjoy the serene beauty of Gyeongbokgung Palace alongside the dazzling night view from N Seoul Tower.\nThe vibrant shopping streets of Myeongdong and the sophisticated culture of Gangnam offer endless fun.\nExperience the world-famous K-food and the warm-hearted market culture unique to Korea.\nEfficient public transport and a city that never sleeps make Seoul a truly one-of-a-kind destination.",
ja: "600年の歴史を持つ朝鮮王朝の宮殿と最先端のビルが共存するダイナミックなメガシティです.\n景福宮の静かな美しさと、南山タワーから眺める華やかな夜景を同時に楽しめます.\n明洞の活気あるショッピング街と江南の洗練された文化は、絶え間ない楽しみを提供します.\n世界中を魅了したKフードと、韓国の温かい情を感じる市場文化を体験してください.\n便利な公共交通機関と夜遅くまで消えない華やかな灯りは、ソウルならではの独特な魅力です。",
zh: "一座拥有600年历史的朝鲜皇宫与尖端建筑并存的动态特大城市. \n可以同时享受景福宫宁静的美丽和从南山塔俯瞰的华丽夜景. \n明洞热闹의 购物街和江南干练的文化带来无穷乐趣. \n体验席卷全球的韩食和蕴含韩国温暖情谊的市场文化. \n便利的交通和通宵达旦的绚丽灯光是首尔独特的魅力。"
}
}
,
{
id: "p5", region: "Asia", name: {
ko: "도쿄, 일본", en: "Tokyo, Japan", ja: "東京・日本", zh: "东京，日本" }
, desc: {
ko: "전통적인 신사와 사찰, 그리고 화려한 네온사인이 공존하는 일본의 심장부입니다.\n시부야의 유명한 스크램블 교차로와 하라주쿠의 독특한 패션은 도쿄의 에너지를 상징합니다.\n아사쿠사의 센소지에서 역사의 흔적을 따라가고 미슐랭 스타 맛집에서 미식의 정점을 맛보세요.\n도쿄 스카이트리 위에서 내려다보는 끝없는 지평선은 현대 건축의 경이로움을 보여줍니다.\n애니메이션, 전자기기, 그리고 친절한 환대 문화가 어우러진 다채로운 경험을 약속합니다.",
en: "The heart of Japan where traditional shrines and temples coexist with vibrant neon signs.\nThe famous Shibuya Crossing and Harajuku's unique fashion trends represent the city's energy.\nFollow the footsteps of history at Senso-ji Temple and taste culinary perfections at Michelin-starred restaurants.\nThe endless skyline viewed from the Tokyo Skytree showcases the marvels of modern engineering.\nTokyo promises a colorful mix of anime culture, high-tech gadgets, and omotenashi hospitality.",
ja: "伝統的な神社仏閣と華やかなネオンサインが共存する日本の中枢です.\n渋谷の有名なスクランブル交差点と原宿の独特なファッションは東京のエネルギーを象徴しています.\n浅草の浅草寺で歴史の痕跡をたどり、ミシュラン星付きの名店で美食の頂点を味わってください.\n東京スカイツリーから見下ろす果てしない地平線は、現代建築の驚異を見せてくれます.\nアニメ、電子機器、さらに親切な「おもてなし」文化が調和した多彩な体験を約束します。",
zh: "传统神社寺庙与华丽霓虹灯并存的日本心脏地带. \n涩谷著名的十字路口和原宿独特的时尚象征着东京的活力. \n在浅草寺追寻历史足迹，在米其林星级餐厅品尝美食巅峰. \n从东京晴空塔俯瞰的无尽地平线展示了现代建筑的奇迹. \n这里承诺提供动漫、电子产品和亲切待客文化交织的多彩体验。"
}
}
,
{
id: "p6", region: "America", name: {
ko: "뉴욕, 미국", en: "New York, USA", ja: "ニューヨーク・米国", zh: "纽约，美国" }
, desc: {
ko: "자유의 여신상이 지키고 있는 전 세계 문화와 경제의 중심지입니다.\n타임스퀘어의 화려한 네온사인 아래에서 잠들지 않는 도시의 에너지를 느껴보세요.\n센트럴 파크에서 도심 속 여유를 즐겨보거나 브로드웨이 극장에서 환상적인 뮤지컬을 관람하세요.\n엠파이어 스테이트 빌딩과 모마 미술관은 뉴욕의 상징적인 장소들입니다.\n다양한 인종이 모여 만든 다채로운 미식과 문화를 경험할 수 있는 최고의 여행지입니다.",
en: "The global hub of culture and finance, guarded by the iconic Statue of Liberty.\nFeel the energy of the city that never sleeps under the dazzling lights of Times Square.\nEnjoy a peaceful moment in Central Park or catch a world-class Broadway musical.\nThe Empire State Building and MoMA are legendary landmarks you must visit.\nA premier destination where you can experience diverse cuisines and cultures from around the world.",
ja: "自由の女神が見守る全世界の文化と経済の中心地です.\nタイムズスクエアの華やかなネオンサインの下で、眠らない街のエネルギーを感じてください.\nセントラルパークで都心の余裕を楽しんだり、ブロードウェイ劇場で幻想的なミュージカルを観賞してください.\nエンパイアステートビルと近代美術館はニューヨークの象徴的な場所です.\n多様な人種が集まって作った多彩な美食と文化を体験できる最高の旅行先です。",
zh: "由自由女神像守护的全人类文化和经济中心. \n在时代广场华丽的霓虹灯下，感受不夜城的活力. \n在海德公园享受城市中的悠闲，或在百老汇剧院欣赏梦幻般的音乐剧. \n帝国大厦和现代艺术博物馆是纽约的象征性场所. \n这里是各民族汇聚，可以体验多样美食与文化的顶级旅游胜地。"
}
}
,
{
id: "p7", region: "Europe", name: {
ko: "바르셀로나, 스페인", en: "Barcelona, Spain", ja: "バルセロナ・スペイン", zh: "巴塞罗那，西班牙" }
, desc: {
ko: "가우디의 천재적인 건축미가 살아 숨 쉬는 지중해의 보석 같은 도시입니다.\n사그라다 파밀리아 성당과 구엘 공원의 비현실적인 아름다움을 직접 목격하세요.\n활기 넘치는 람블라스 거리와 보케리아 시장은 오감을 자극하는 즐거움을 선사합니다.\n지중해 해변에서 여유로운 태양을 즐기거나 정통 타파스와 와인을 맛보세요.\n예술과 축구, 그리고 열정적인 문화가 어우러진 바르셀로나의 매력에 빠져보세요.",
en: "A Mediterranean gem where Gaudi's genius architecture defines the city's soul.\nWitness the surreal beauty of Sagrada Familia and the whimsical Park Güell.\nThe lively Las Ramblas and Boqueria Market offer a feast for all your senses.\nSoak up the sun on Mediterranean beaches or indulge in authentic tapas and wine.\nFall in love with Barcelona's unique blend of art, football, and passionate culture.",
ja: "ガウディの天才的な建築美が息づく、地中海の宝石のような街です.\nサグラダ・ファミリア聖堂とグエル公園の非現実的な美しさを直接目撃してください.\n活気に満ちたランブラス通りとボケリア市場は、五感を刺激する楽しみを提供します.\n地中海のビーチで太陽を楽しんだり、正統派タパスとワインを味わってください.\n芸術とサッカー、そして情熱的な文化が調和したバルセロナの魅力に浸ってください。",
zh: "地中海的一颗明珠，高迪天才般的建筑美感赋予了城市灵魂. \n亲眼目睹圣家堂和奎尔公园超现实的美丽. \n充满活力的兰布拉大道和博盖利亚市场提供刺激五感的乐趣. \n在地中海海滩享受悠闲的阳光，或品尝正宗的塔帕斯和美酒. \n沉浸在艺术、足球和热情文化交织的巴塞罗那魅力中。"
}
}
,
{
id: "p8", region: "Other", name: {
ko: "시드니, 호주", en: "Sydney, Australia", ja: "シドニー・オーストラリア", zh: "悉니，澳大利亚" }
, desc: {
ko: "푸른 바다 위에 떠 있는 오페라 하우스가 상징인 세계에서 가장 아름다운 항구 도시입니다.\n하버 브리지 위를 걷거나 페리를 타고 감상하는 전경은 평생 잊지 못할 추억이 됩니다.\n본다이 비치에서 파도를 즐기는 서퍼들과 따스한 햇살을 받으며 휴양을 만끽하세요.\n블루 마운틴의 웅장한 대자연 속에서 코알라와 캥거루를 만나는 특별한 시간을 가져보세요.\n해안가를 따라 늘어선 세련된 카페와 레스토랑에서 신선한 요리를 즐길 수 있습니다.",
en: "Home to the world-famous Opera House, Sydney is a stunning harbor city.\nWalk across the Harbour Bridge or take a scenic ferry ride for unforgettable views.\nFeel the vacation vibe with surfers at Bondi Beach and soak up the golden sun.\nDiscover the grandeur of the Blue Mountains and meet adorable koalas and kangaroos.\nEnjoy fresh culinary delights at trendy seaside cafés and restaurants.",
ja: "青い海に浮かぶオペラハウスが象徴的な、世界で最も美しい港町です.\nハーバーブリッジの上を歩いたり、フェリーに乗って眺める全景は一生の思い出になります.\nボンダイビーチで波を楽しむサーファーたちと、太陽を浴びながらリゾートを満喫してください.\nブルーマウンテンズの雄大な大自然の中で、コアラやカンガルーに出会う時間を持ってください.\n海岸沿いに立ち並ぶ洗練されたカフェやレストランで料理を楽しんでください。",
zh: "以漂浮在蓝色大海上的歌剧院为象征的世界上最美丽的港口城市. \n在海港大桥上漫步 or 乘坐渡轮欣赏全景，将成为终生难忘的回忆. \n在邦迪海滩与冲浪者一起享受海浪，在温暖的阳光下尽情休憩. \n在蓝山雄伟的大自然中与考拉和袋鼠共度特别时光. \n在沿海而建的干练咖啡馆和餐厅享用新鲜料理。"
}
}
,
{
id: "p9", region: "Other", name: {
ko: "두바이, UAE", en: "Dubai, UAE", ja: "ドバイ・アラブ首長国連邦", zh: "迪拜，阿联酋" }
, desc: {
ko: "세계 최고층 빌딩 부르즈 할리파가 하늘을 찌르는 사막 위의 기적 같은 도시입니다.\n거대한 인공 섬 팜 주메이라와 화려한 쇼핑몰 등 인간의 상상력이 실현된 곳입니다.\n전통적인 아랍 시장 '수크'에서 이국적인 향신료와 황금을 구경하는 재미가 있습니다.\n붉은 모래 사막에서 즐기는 사파리 투어와 밤하늘 아래 베두인 캠프는 신비롭습니다.\n압도적인 스케일의 분수 쇼와 럭셔리한 서비스는 두바이만의 특별한 매력입니다.",
en: "A desert miracle where the world's tallest building, Burj Khalifa, pierces the sky.\nExperience human imagination at Palm Jumeirah and the opulent shopping malls.\nDiscover exotic spices and gold at traditional Arabian Souks for a taste of history.\nDesert safari tours on red dunes and Bedouin camps offer a mystical journey.\nThe overwhelming scale of fountain shows and luxury define the Dubai experience.",
ja: "世界一高いビル、ブルジュ・ハリファが空を突く、砂漠の上の奇跡のような街です.\n巨大な人工島パーム・ジュメイラやショッピングモールなど、想像力が実現された場所です.\n伝統的なアラブの市場「スーク」で、エキゾチックな香辛料や黄金を眺めてください.\n赤い砂砂漠で楽しむサファリツアーと、ベドウィンキャンプは神秘的です.\n圧倒的なスケールの噴水ショーとラグジュアリーなサービスがドバイの魅力です。",
zh: "世界最高楼哈利法塔直插云霄，是沙漠上的奇迹城市. \n巨大的巨大人工岛朱美拉棕榈岛和华丽购物中心等，是人类想象力变为现实的地方. \n在传统的阿拉伯市场“苏克”观看异国香料和黄金，极具乐趣. \n在红沙沙漠享受的冲锋沙之旅和星空下的贝都因营地神秘莫测. \n压倒性规模의 喷泉表演和豪华服务是迪拜特有的特别魅力。"
}
}
,
{
id: "p10", region: "Europe", name: {
ko: "베네치아, 이탈리아", en: "Venice, Italy", ja: "ヴェネツィア・イタリア", zh: "威尼斯，意大利" }
, desc: {
ko: "도로 대신 운하가 흐르고 차 대신 곤돌라가 다니는 낭만적인 물의 도시입니다.\n미로 같은 수로를 따라 펼쳐지는 중세 건축물들은 시간이 멈춘 듯한 풍경을 선사합니다.\n산 마르코 광장에서 커피 한 잔의 여유와 성당의 웅장함을 온몸으로 느껴보세요.\n리알토 다리 위에서 바라보는 일몰과 운하의 반영은 화가들이 사랑한 명장면입니다.\n유리 공예로 유명한 무라노 섬과 형형색색의 부라노 섬에서 이색적인 추억을 남기세요.",
en: "The unique City of Water where canals serve as roads and gondolas replace cars.\nLabyrinthine waterways lined with medieval architecture create a scene frozen in time.\nRelax at St. Mark's Square with a cup of coffee while admiring the cathedral's grandeur.\nThe sunset from the Rialto Bridge and its reflection on the canal are legendary views.\nCreate exotic memories at Murano island and the colorful Burano.",
ja: "道路の代わりに運河が流れ、車の代わりにゴンドラが行き交うロマンチックな水の都です.\n迷路のような水路に沿って広がる中世の建築物は、時間が止まったような風景を提供します.\nサン・マルコ広場でコーヒーを楽しみ、大聖堂の雄大さを全身で感じてください.\nリアルト橋の上から眺める夕日と運河の反映は、画家たちが愛した名場面です.\nガラス工芸で有名なムラーノ島と、色とりどりのブラーノ島を訪れてください。",
zh: "运河代替道路，贡多拉代替汽车的浪漫水城. \n沿着迷宫般的航道展现的中世纪建筑，呈现出时间仿佛停滞般的风景. \n在圣马可广场享受一杯咖啡的悠闲，全身心感受圣堂的雄伟. \n从里亚托桥俯瞰的日落和运河倒影是画家们最爱的名场面. \n在以玻璃工艺闻名的穆拉诺岛和五彩缤纷的布拉诺岛留下异国风情的回忆。"
}
}
,
{
id: "p11", region: "Asia", name: {
ko: "싱가포르", en: "Singapore", ja: "シンガポール", zh: "新加坡" }
, desc: {
ko: "도시 전체가 거대한 정원 같은 청정 국가로, 다양한 문화가 공존하는 미식의 천국입니다.\n가든스 바이 더 베이의 슈퍼트리 쇼와 마리나 베이 샌즈의 야경은 미래 지향적입니다.\n유니버설 스튜디오가 있는 센토사 섬에서 가족과 함께 즐거운 시간을 보내보세요.\n차이나타운, 리틀 인디아, 아랍 스트리트에서 전 세계의 다채로운 문화를 체험하세요.\n창이 공항의 쥬얼 폭포는 여행의 시작과 끝을 화려하게 장식합니다.",
en: "A clean garden city-state where diverse cultures and cuisines coexist perfectly.\nThe Supertree light show and Marina Bay Sands offer a futuristic vibe.\nHave a fun-filled day at Sentosa Island, home to Universal Studios Singapore.\nExplore the colorful heritage of Chinatown, Little India, and Arab Street.\nThe Jewel rain vortex at Changi Airport provides a spectacular travel experience.",
ja: "街全体が巨大な庭園のようなクリーンな国で、多様な文化が共存する美食の天国です.\nガーデンズ・バイ・ザ・ベイのスーパーツリーショーと夜景は未来志向です.\nユニバーサル・スタジオがあるセントーサ島で家族と一緒に楽しい時間を過ごしてください.\nチャイナタウン、リトル・インディア、アラブ・ストリートで多彩な文化を体験してください.\nチャンギ空港の滝は、旅行の始まりと終わりを華やかに飾ります。",
zh: "整个城市如同一座巨大花园的清洁国家，多元文化并存的美食天堂. \n滨海湾花园的超级树灯光秀和滨海湾金沙的夜景充满未来感. \n在拥有环球影城的圣淘沙岛与家人共度愉快时光. \n在牛车水、小印度和阿拉伯街体验世界各地的多彩文化. \n新加坡樟宜机场星耀樟宜瀑布为旅行的开始与结束画上华丽句号。"
}
}
,
{
id: "p12", region: "Asia", name: {
ko: "발리, 인도네시아", en: "Bali, Indonesia", ja: "バリ・インドネシア", zh: "巴厘岛，印度尼西亚" }
, desc: {
ko: "에메랄드빛 바다와 신비로운 힌두교 사원이 어우러진 신들의 섬이자 최고의 휴양지입니다.\n우붓의 푸른 계단식 논과 울루와투 절벽 사원에서 평화로운 명상의 시간을 가져보세요.\n꾸따 해변에서 서핑을 즐기거나 스미냑의 힙한 카페에서 세련된 감성을 즐길 수 있습니다.\n전통 공연인 케착 댄스를 감상하며 발리인들의 깊은 예술 세계를 경험해 보세요.\n프라이빗 풀빌라에서 즐기는 플로팅 조식은 발리 여행에서만 누릴 수 있는 특별한 호사입니다.",
en: "The Island of the Gods, blending emerald oceans with mystical Hindu temples.\nExperience serenity at the rice terraces of Ubud and the cliffside Uluwatu Temple.\nEnjoy surfing at Kuta Beach or explore the trendy cafés in Seminyak.\nWitness the powerful Kecak fire dance to immerse yourself in local art.\nIndulge in a luxurious floating breakfast at a private pool villa for a perfect escape.",
ja: "エメラルド色の海と神秘的なヒンドゥー教寺院が調和した神々の島です.\nウブドの緑豊かな棚田とウルワツ寺院の絶壁で平和な時間を過ごしてください.\nクタビーチでサーフィンを楽しんだり、スミニャックのカフェで感性を楽しめます.\n伝統的なケチャダンスを鑑賞しながら、バリの芸術の世界を体験してください.\nプライベートプールヴィラで楽しむ朝食は、バリ旅行ならではの贅沢です。",
zh: "翡翠般的海域与神秘的印度教寺庙交相辉映的众神之岛，顶级度假胜地. \n在乌布青翠的梯田和乌鲁瓦图悬崖神庙享受宁静的冥想时光. \n在库塔海滩享受冲浪，或在塞米亚克时尚的咖啡馆感受干练格调. \n欣赏传统凯恰舞表演，体验巴厘岛人深邃的艺术世界. \n在私人泳池别墅享受漂浮早餐是巴厘岛之旅独有的特别奢华体验。"
}
}
,
{
id: "p13", region: "Europe", name: {
ko: "산토리니, 그리스", en: "Santorini, Greece", ja: "サントリーニ・ギリシャ", zh: "圣托里尼，希腊" }
, desc: {
ko: "절벽 위 하얀 집들과 푸른 바다가 어우러진 에게해의 가장 아름다운 섬입니다.\n이아 마을의 낙조는 전 세계에서 가장 아름다운 일몰 중 하나로 손꼽힙니다.\n산토리니를 상징하는 파란 돔은 수많은 여행객들의 사진 속 배경이 됩니다.\n고대 유적지 아크로티리와 화산섬 투어를 통해 섬의 역동적인 역사를 만나보세요.\n지중해의 신선한 요리와 현지 와인을 즐기며 진정한 휴양의 의미를 발견해 보세요.",
en: "The crown jewel of the Aegean Sea with white-washed houses on steep cliffs.\nThe sunset in Oia is celebrated as one of the most breathtaking sights in the world.\nIts iconic blue-domed churches provide the perfect backdrop for photos.\nExplore the history of the island at Akrotiri ruins or via a volcano tour.\nDiscover relaxation with fresh Mediterranean food and local wines.",
ja: "絶壁の上の白い家々と青い海が調和した、エーゲ海で最も美しい島です.\nイアの村の夕日は、世界で最も美しい日没の一つに数えられます.\nサントリーニを象徴する青いドームは、旅行者の写真の背景になります.\n古代遺跡アクロティリと火山島ツアーを通じて、島の歴史に出会ってください.\n地中海の新鮮な料理と地元のワインを楽しみながら、休養してください。",
zh: "悬崖上的白房子与蓝大海交相辉映的爱琴海最美岛屿. \n伊亚小镇的落日被誉为世界上最美丽的日落之一. \n象征圣托里尼的蓝顶教堂成为无数游客照片中的背景. \n通过古阿克罗蒂里遗址和火山岛之旅，邂逅岛屿动态的历史. \n享受地中海新鲜料理和当地美酒，发现真正休养的意义。"
}
}
,
{
id: "p14", region: "America", name: {
ko: "마추픽추, 페루", en: "Machu Picchu, Peru", ja: "マチュピチュ・ペルー", zh: "马丘比丘，秘鲁" }
, desc: {
ko: "구름 속에 가려진 안데스 산맥의 신비로운 인카 문명 공중 도시입니다.\n해발 2,430미터 위에 쌓아 올린 정교한 석조 건축은 인간의 지혜를 느끼게 합니다.\n거대한 산세와 어우러진 신비로운 안개 속에서 고대 제국의 숨결을 느껴보세요.\n잉카 트레일을 걷는 여정은 전 세계 트레커들에게 최고의 도전이자 영광입니다.\n태양의 신전과 지붕 없는 감옥 등 고대 인카인들의 삶의 흔적을 탐구해 보세요.",
en: "A mysterious Incan citadel hidden in the clouds high in the Andes.\nThe sophisticated dry-stone masonry built at 2,430 meters reveals ancient wisdom.\nFeel the pulse of an ancient empire amidst the mystical mists and mountains.\nWalking the Inca Trail is a supreme challenge and honor for hikers worldwide.\nDiscover the remnants of ancient life at the Sun Temple and sacred ruins.",
ja: "雲の中に隠されたアンデス山脈の神秘的なインカ文明の空中都市です.\n標高2,430メートルの上に積み上げられた石造建築は、人間の知恵を感じさせます.\n巨大な山々と調和した神秘的な霧の中で、古代帝国の息吹を感じてください.\nインカ・トレイルを歩く旅は、世界中のトレッカーにとって最高の挑戦です.\n太陽の神殿や屋根のない監獄など、古代インカ人たちの生活を探索してください。",
zh: "隐藏在云雾中的安第斯山脉神秘印加文明空中城市. \n海拔2430米之上堆砌的精巧石造建筑让人感受到人类智慧. \n在与巨大山势交织的神秘云雾中，感受古代帝国的气息. \n步入印加古道的旅程是全球徒步旅行者最高的挑战与荣光. \n探究太阳神庙和无顶监狱等古代印加人的生活痕迹。"
}
}
,
{
id: "p15", region: "Other", name: {
ko: "몰디브", en: "Maldives", ja: "モルディブ", zh: "马尔代夫" }
, desc: {
ko: "인도양의 흩뿌려진 진주라 불리는 지상의 파라다이스, 꿈의 휴양지입니다.\n투명한 에메랄드빛 바다 위에 지어진 워터 빌라는 완벽한 로망을 실현해 줍니다.\n스노클링과 다이빙을 통해 형형색색의 산호초와 바다 거북을 직접 만나보세요.\n무인도에서의 낭만적인 피크닉과 파도 소리와 함께하는 디너는 최고입니다.\n아무것도 하지 않을 자유를 만끽하며 진정한 휴식과 평화를 경험해 보세요.",
en: "The terrestial paradise of the Indian Ocean, a dream getaway for relaxation.\nLuxury water villas built over crystal-clear emerald waters fulfill your dreams.\nEncounter colorful coral reefs and sea turtles through world-class diving.\nRomantic picnics on uninhabited islands and dinners by the waves are peerless.\nExperience true peace while enjoying the freedom to do nothing at all.",
ja: "インド洋に散りばめられた真珠と呼ばれる、地上のパラダイスです.\n透明なエメラルド色の海の上に建てられたウォーターヴィラは、憧れを実現してくれます.\nシュノーケリングやダイビングを通じて、サンゴ礁やウミガメに出会ってください.\n無人島でのロマンチックなピクニックや海辺のディナーは最高です.\n何もしない自由を満喫しながら、真의 休息と平和を体験してください。",
zh: "被誉为印度洋散落珍珠的人间天堂，梦想中的度假胜地. \n建在透明翡翠色海水上的水上别墅实现了完美向往. \n通过浮潜和潜水亲眼目睹五彩缤纷的珊瑚礁和海龟. \n无人岛上的浪漫野餐和伴着涛声的晚餐是极致体验. \n尽情享受无所事事的自由，体验真正的休憩与和平。"
}
}
,
{
id: "p16", region: "Other", name: {
ko: "페트라, 요르단", en: "Petra, Jordan", ja: "ペトラ・ヨルダン", zh: "佩特拉，约旦" }
, desc: {
ko: "붉은 사암 절벽을 깎아 만든 고대 신비의 도시, 나바테아인의 수도입니다.\n좁은 협곡 '시크' 끝에 나타나는 알 카즈네의 웅장함은 전율을 느끼게 합니다.\n바위 산을 직접 깎아 만든 수천 개의 무덤과 원형 극장을 탐험하는 신비로움을 느껴보세요.\n밤이면 촛불로 밝혀지는 페트라 나이트 투어는 비현실적인 환상 세계로 초대합니다.\n인류의 창의력과 자연의 조화가 만들어낸 경이로운 유네스코 세계유산입니다.",
en: "An ancient mystical city carved from red sandstone, the Nabataean capital.\nThe majesty of Al-Khazneh at the end of the Siq canyon is a thrilling sight.\nExplore the mystery of rock-cut tombs and a grand amphitheater.\nThe Petra by Night tour, lit by candles, transports you to a dream world.\nA breathtaking UNESCO site showcasing the harmony of man and nature.",
ja: "赤い砂岩の絶壁を削って作られた古代の神秘の街、ナバテア人の首都です.\n狭い峡谷「シーク」の果てに現れるアル・カズネの雄大さは、戦慄を感じさせます.\n岩山を直接削って作った墓や円形劇場を探索する神秘的な体験をしてください.\n夜になるとキャンドルで照らされるペトラ・ナイトツアーは、幻想的です.\n人類の創造力と自然の調和が作り出した驚異的なユネスコ世界遺産입니다.",
zh: "凿刻在红色砂岩悬崖上的古代神秘城市，纳巴泰人的首都. \n蛇道(Siq)尽头现出的卡兹尼神庙的雄伟令人震撼. \n探索直接在岩山上开凿的数千个墓穴和圆形剧场，感受神秘. \n夜晚由蜡烛点亮的佩特拉之夜巡游将带您进入超现实的幻境. \n人类创造力与自然和谐共创的惊人联合国教科文组织世界遗产。"
}
}
,
{
id: "p17", region: "Other", name: {
ko: "카이로, 이집트", en: "Cairo, Egypt", ja: "カイロ・エジプト", zh: "开罗，埃及" }
, desc: {
ko: "인류 문명의 요람이며 거대한 피라미드가 지키고 있는 유구한 역사의 도시입니다.\n기자 지구의 스핑크스와 피라미드에서 고대 이집트의 거대한 힘을 느껴보세요.\n이집트 박물관에서 투탕카멘의 황금 마스크와 수많은 보물들을 직접 관람하세요.\n나일 강변에서 전통 배 펠루카를 타고 강물에 비친 낭만적인 일몰을 감상해 보세요.\n북적이는 칸 엘 칼릴리 시장에서 중동의 이색적인 물건들을 구경하며 흥정해 보세요.",
en: "A cradle of civilization guarded by the Great Pyramids, a city of history.\nFeel the ancient power of Egypt at the Sphinx and the Great Pyramids.\nWitness the treasures of Tutankhamun at the Egyptian Museum.\nEnjoy a romantic sunset on a traditional Felucca boat on the Nile River.\nExperience the colors and sounds of the bustling Khan el-Khalili bazaar.",
ja: "人類文明の揺籃であり、巨大なピラミッドが守っている悠久の歴史の街です.\nギザ地区のスフィンクスとピラミッドで、古代エジプトの力を感じてください.\nエジプト考古学博物館でツタンカーメンの黄金のマスクを観覧してください.\nナイル川沿いで伝統的な船フェルッカに乗り、夕日を鑑賞してください.\n賑やかなハーン・エル・ハリーリ市場で中東の品物を眺めてください。",
zh: "人类文明的摇篮，由巨型金字塔守护的悠久历史城市. \n在吉萨区的狮身人面像和金字塔感受古埃及巨大的力量. \n在埃及博物馆亲自观赏图坦卡蒙的金面具和无数珍宝. \n在尼罗河畔乘坐传统帆船，欣赏倒映在江面上的浪漫日落. \n在繁忙的哈利利市场观看中东异国情调的物品并尝试讨价还价。"
}
}
,
{
id: "p18", region: "Other", name: {
ko: "레이캬비크, 아이슬란드", en: "Reykjavik, Iceland", ja: "レイキャビク・アイスランド", zh: "雷克雅未克，冰岛" }
, desc: {
ko: "북극해와 맞닿은 세계 최북단의 수도로, 오로라와 온천이 공존하는 마법 같은 곳입니다.\n할그림스캬르캬 교회의 독특한 디자인은 도시 어디에서나 보이는 상징적인 건물입니다.\n블루 라군 온천에서 따뜻한 물에 몸을 담그며 비현실적인 대자연의 휴식을 만끽하세요.\n골든 서클 투어를 통해 웅장한 폭포와 간헐천이 뿜어내는 지구의 힘을 목격할 수 있습니다.\n운이 좋다면 밤하늘을 수놓는 신비로운 초록빛 오로라를 만나는 특별한 경험을 하세요.",
en: "The world's northernmost capital, a magical place of Northern Lights.\nThe unique architecture of Hallgrímskirkja church is an icon of the city.\nSoak in the surreal milky-blue waters of the Blue Lagoon for rejuvenation.\nWitness the power of the Earth at grand waterfalls on a Golden Circle tour.\nExperience the dance of the green Aurora Borealis across the night sky.",
ja: "北極海に面した世界最北の首都で、オーロラと温泉がある場所です.\nハットルグリムス教会の独特なデザインは、街の象徴的な建物です.\nブルーラグーン温泉で温かいお湯に浸かり、大自然の休息を満喫してください.\nゴールデンサークルツアーを通じて、雄大な滝と間欠泉を目격할 수 있습니다.\n運が良ければ夜空を彩る神秘的な緑色のオーロラに出会えます。",
zh: "与北冰洋接壤的世界最北端首都，极光和温泉并存的魔幻之地. \n哈尔格림斯大教堂独特的设计是城市随处可见的象征性建筑. \n在蓝湖温泉泡在温暖的水中，尽情享受超现实的大自然休憩. \n通过黄金圈之旅可以目睹雄伟瀑布和间歇泉喷薄而出的地球力量. \n运气好的话，可以亲眼目睹点缀夜空的神奇绿色极光。"
}
}
,
{
id: "p19", region: "Europe", name: {
ko: "취리히, 스위스", en: "Zurich, Switzerland", ja: "チューリッヒ・スイス", zh: "苏黎世，瑞士" }
, desc: {
ko: "알프스의 관문이자 맑은 호수가 도심을 가로지르는 세계에서 가장 살기 좋은 도시입니다.\n구시가지의 좁고 예쁜 골목길을 산책하며 스위스만의 고풍스러운 매력을 발견해 보세요.\n취리히 호수에서 유람선을 타고 멀리 보이는 설산의 풍경을 감상하며 여유를 즐기세요.\n반호프슈트라세의 세련된 숍들을 구경하고 달콤한 정통 스위스 초콜릿을 맛보세요.\n리마트 강변의 노천 카페에 앉아 평화로운 도시의 분위기를 온전히 느껴볼 수 있습니다.",
en: "The gateway to the Alps and one of the world's most livable cities.\nStroll through the narrow alleys of the Old Town to discover Swiss elegance.\nTake a boat tour on Lake Zurich to admire the panorama of distant mountains.\nBrowse luxury shops on Bahnhofstrasse and treat yourself to Swiss chocolates.\nRelax at a riverside café along the Limmat to enjoy the peaceful ambiance.",
ja: "アルプスの門戸であり、澄んだ湖がある世界で最も住みやすい街です.\n旧市街の狭い路地を散策し、スイスならではの魅力を発見してください.\nチューリッヒ湖で遊覧船に乗り、遠くに見える雪山の風景を鑑賞してください.\nバーンホフ通りのショップを眺め、甘いスイスチョコレートを味わってください.\nリマト川沿いのオープンカフェに座り、平和な街の雰囲気を感じてください。",
zh: "阿尔卑斯山的门户，清澈的湖泊横穿市中心，是世界上最宜居的城市. \n漫步在旧城区狭窄漂亮的街道，发现瑞士独有的古色古香魅力. \n在苏黎世湖乘坐游船，欣赏远处的雪山风景，度过悠闲时光. \n观看班霍夫大街的干练商店，品尝甜美的正宗瑞士巧克力. \n坐在利马特河畔의 露天咖啡馆，全身心感受宁静的城市氛围。"
}
}
,
{
id: "p20", region: "Europe", name: {
ko: "스톡홀름, 스웨덴", en: "Stockholm, Sweden", ja: "ストックホルム・スウェーデン", zh: "斯德哥尔摩，瑞典" }
, desc: {
ko: "14개의 섬이 조화롭게 연결된 북유럽의 베네치아로, 깨끗하고 품격 있는 도시입니다.\n감라 스탄의 주황빛 중세 건물들 사이를 거닐며 시간을 거슬러 오르는 여행을 하세요.\n바사 박물관에서 17세기에 침몰했다 복원된 거대 전함의 웅장함을 감상해 보세요.\n노벨상 연회가 열리는 시청사의 황금빛 건축미와 강변의 경관은 매우 아름답습니다.\n여름철 유람선을 타고 수많은 섬들을 돌아보며 북유럽 대자연의 평화를 느껴보세요.",
en: "The 'Venice of the North' spanning 14 islands, a city of classic dignity.\nWander through the medieval streets of Gamla Stan to step back in time.\nAdmire the grandeur of the restored 17th-century Vasa warship at its museum.\nEnjoy the golden architecture of the City Hall and the stunning views.\nTake a boat trip through the vast archipelago during summer to find true peace.",
ja: "14の島がつながれた「北欧のヴェネツィア」で、品格のある街です.\nガムラスタンのオレンジ色の建物の中を歩き、時間を遡る旅をしてください.\nヴァーサ号博物館で17世紀に沈没した巨大な戦艦を鑑賞してください.\nノーベル賞の晩餐会が開かれる市庁舎の建築美は非常に美しいです.\n夏の時期に遊覧船に乗って数多くの島々を巡り、平和を感じてください。",
zh: "由14座岛屿和谐连接而成的“北方威尼斯”，是一座整洁有档次的城市. \n漫步在老城(Gamla Stan)橙色中世纪建筑间，进行一场穿越时空的旅行. \n在瓦萨沉船博物馆欣赏17世纪沉没后修复的巨型战舰的雄姿. \n举办诺贝尔奖晚宴的市政厅，其黄金建筑美和沿江景观非常美丽. \n夏季乘坐游船游览无数岛屿，感受北欧大自然的宁静。"
}
}
,
{
id: "p21", region: "Asia", name: {
ko: "오사카, 일본", en: "Osaka, Japan", ja: "大阪・日本", zh: "大阪，日本" }
, desc: {
ko: "미식과 쇼핑, 그리고 활기찬 에너지가 가득한 일본의 대표적인 관광 도시입니다.\n도톤보리의 화려한 글리코상과 맛있는 길거리 음식들은 여행의 큰 즐거움입니다.\n오사카 성의 웅장한 역사적 자취를 따라가며 일본의 옛 모습을 상상해 보세요.\n유니버설 스튜디오 재팬에서 하루 종일 환상적인 엔터테인먼트를 즐길 수 있습니다.\n현지 시장의 북적이는 분위기 속에서 일본인들의 친절함과 생동감을 느껴보세요.",
en: "A vibrant Japanese city famous for its food scene and energetic atmosphere.\nThe colorful signs of Dotonbori and its street food are a traveler's delight.\nExplore the historical grounds of the grand Osaka Castle and its main tower.\nSpend a thrilling day at Universal Studios Japan for world-class entertainment.\nFeel the vitality and kindness of the locals while exploring traditional markets.",
ja: "美食とショッピング、そして活気あるエネルギーに満ちた観光都市です.\n道頓堀の華やかなグリコサインとストリートフードは、大きな楽しみです.\n大阪城の雄大な歴史的足跡をたどりながら、日本の古い姿を想像してください.\nユニバーサル・スタジオ・ジャパンで一日中エンターテインメントを楽しめます.\n地元の市場の賑やかな雰囲気の中で、躍動感を感じてください。",
zh: "充满美食、购物和活力的日本代表性旅游城市. \n道顿堀华丽的格力高招牌和美味的街头小吃是旅行的一大乐事. \n沿着大阪城宏伟的历史遗迹，想象日本昔日的面貌. \n在大阪环球影城尽情享受一整天的梦幻娱乐. \n在当地市场繁忙의 氛围中感受日本人的亲切与生动。"
}
}
,
{
id: "p22", region: "Asia", name: {
ko: "방콕, 태국", en: "Bangkok, Thailand", ja: "バンコク・タイ", zh: "曼谷，泰国" }
, desc: {
ko: "화려한 황금빛 왕궁과 전통 사원, 현대적인 빌딩이 조화를 이루는 동남아의 심장입니다.\n짜오프라야 강 위에서 즐기는 디너 크루즈는 도시의 아름다운 야경을 선사합니다.\n카오산 로드에서 전 세계 여행자들과 어울리며 자유로운 히피 감성을 느껴보세요.\n태국 전통 마사지로 몸과 마음을 힐링하고 화려한 쇼핑몰에서 쇼핑을 즐기세요.\n길거리의 맛있는 팟타이부터 고급 레스토랑까지 미식의 한계가 없는 도시입니다.",
en: "The heart of Southeast Asia where palaces meet a modern skyline.\nA dinner cruise on the Chao Phraya River offers spectacular city night lights.\nJoin the global community of travelers at Khaosan Road to feel the free vibe.\nHeal your body with a traditional Thai massage and explore shopping centers.\nFrom savory street Pad Thai to fine dining, the culinary possibilities are endless.",
ja: "華やかな黄金色の王宮と伝統的な寺院、現代的なビルが調和する街です.\nチャ오プラ야 川の上で楽しむディナークルーズは、街の美しい夜景を提供します.\nカオサン通りで世界中の旅行者と交流しながら、ヒッピーの感性を感じてください.\nタイ伝統マッサージで心身を癒し、ショッピングを楽しんでください.\n路上の美味しいパッタイから高級レストランまで、美食の街です。",
zh: "华丽的金顶皇宫、传统寺庙与现代建筑和谐共存的东南亚心脏. \n在湄南河上享受晚餐巡游，领略城市美丽的夜景. \n在考山路与全球游客汇聚，感受自由的嬉皮士格调. \n通过泰国传统按摩疗愈身心，在华丽的购物中心尽情购物. \n从街头美味的泰式炒河粉到高级餐厅，这是一座美食无界限的城市。"
}
}
,
{
id: "p23", region: "Europe", name: {
ko: "빈, 오스트리아", en: "Vienna, Austria", ja: "ウィーン・オーストリア", zh: "维也纳，奥地利" }
, desc: {
ko: "음악과 예술이 흐르는 합스부르크 왕가의 도시로, 클래식한 매력이 가득합니다.\n쉔브룬 궁전의 화려한 방들과 정원을 거닐며 오스트리아의 전성기를 느껴보세요.\n벨베데레 궁전에서 클림트의 '키스'를 감상하며 예술적 영감을 얻을 수 있습니다.\n전통적인 비엔나 커피 하우스에서 자허 토르테 한 조각과 함께 여유를 즐겨보세요.\n빈 국립 오페라 하우스의 공연은 당신의 여행을 더욱 우아하게 만들어줄 것입니다.",
en: "The capital of music and art, once the heart of the Habsburg Empire.\nWalk through the opulent rooms and gardens of the Schönbrunn Palace to feel its history.\nGet inspired by Gustav Klimt's 'The Kiss' at the Belvedere Museum.\nEnjoy a slice of Sachertorte at a traditional Viennese coffee house for a treat.\nA world-class performance at the Vienna State Opera adds elegance to your journey.",
ja: "音楽と芸術が流れるハプスブルク王家の都市で、クラシックな魅力があります.\nシェーンブルン宮殿の華やかな部屋と庭園を歩き、帝国の歴史を感じてください.\nベルヴェデーレ宮殿でクリムトの「接吻」を鑑賞し、インスピレーションを得てください.\n伝統的なコーヒーハウスで、ザッハトルテと共にゆったりとした時間を過ごしてください.\nウィーン国立歌劇場での公演は、旅行をより優雅にしてくれるでしょう。",
zh: "流淌着音乐与艺术的哈布斯堡王朝之都，充满古典魅力. \n漫步在美泉宫华丽的房间和花园中，感受奥地利的鼎盛时期. \n在美景宫欣赏克里姆特的《接吻》，获得艺术灵感. \n在传统的维也纳咖啡馆点一份萨赫蛋糕，享受悠闲时光. \n维也纳国家歌剧院的演出将使您的旅行更加优雅。"
}
}
,
{
id: "p24", region: "Europe", name: {
ko: "부다페스트, 헝가리", en: "Budapest, Hungary", ja: "ブダペスト・ハンガリー", zh: "布达佩斯，匈牙利" }
, desc: {
ko: "다뉴브 강이 흐르는 '동유럽의 장미'라 불리는 아름다운 야경의 도시입니다.\n국회의사당의 황금빛 불빛은 물결에 비쳐 환상적인 장관을 연출합니다.\n어부의 요새에서 바라보는 도시 전경은 프레임 속의 그림처럼 아름답습니다.\n역사적인 세체니 온천에서 노천 스파를 즐기며 특별한 경험을 해보세요.\n구시가지의 골목마다 숨어있는 아기자기한 상점들을 탐험하는 재미가 있습니다.",
en: "Called the 'Rose of the East,' famous for its stunning Danube night views.\nThe golden lights of the Parliament Building reflecting on the water is a sight to behold.\nPanorama city views from the Fisherman's Bastion look just like a painting.\nExperience a unique outdoor spa session at the historic Széchenyi Thermal Bath.\nExplore charming boutique shops hidden throughout the historic Old Town.",
ja: "ドナウ川が流れる「東欧のバラ」と呼ばれる、美しい夜景の街です.\n国会議事堂の黄金の光が水面に映り、幻想的な壮観を演出します.\n漁夫の砦から眺める街の全景は、絵のように美しいです.\n歴史的なセーチェーニ温泉で野外スパを楽しみ、特別な体験をしてください.\n旧市街の路地裏に隠れた可愛らしいショップを探索する楽しさがあります。",
zh: "多瑙河穿城而过的被称为“东欧玫瑰”的美丽夜景城市. \n国会大厦的金光倒映在水波中，呈现出梦幻般的壮丽景观. \n从渔人堡看到的城市全景就像画框中的画一样美丽. \n在历史悠久的塞切尼温泉享受露天水疗，体验特别的经历. \n在旧城区的每条小巷中探索隐藏的可爱商店，趣味十足。"
}
}
,
{
id: "p25", region: "Asia", name: {
ko: "타이베이, 대만", en: "Taipei, Taiwan", ja: "台北・台湾", zh: "台北，台湾" }
, desc: {
ko: "친절한 미소와 끊임없는 먹거리가 가득한 대만의 수도, 야시장의 천국입니다.\n타이베이 101 타워에서 도시의 화려한 전경을 감상하고 대만의 자부심을 느껴보세요.\n국립 고궁 박물관에서 중국 역사상 최고의 보물들을 만나보는 시간을 가져보세요.\n용산사의 자욱한 향연기 속에서 대만 사람들의 소박한 소망과 신앙을 엿볼 수 있습니다.\n스린 야시장에서 지파이와 버블티 등 다채로운 대만 길거리 음식을 정복해 보세요.",
en: "The capital of Taiwan, a paradise for night market lovers with friendly smiles.\nAdmire the panoramic city views from Taipei 101, once the world's tallest building.\nDiscover the finest treasures of Chinese history at the National Palace Museum.\nWitness the local faith and daily life amidst the incense at Longshan Temple.\nConquer the diverse street foods like Fried Chicken and Bubble Tea at Shilin Night Market.",
ja: "親切な笑顔と絶え間ない食べ物に満ちた台湾の首都、夜市の天国です.\n台北101タワーから街の華やかな全景を鑑賞し、台湾の誇りを感じてください.\n国立故宮博物院で、中国の歴史上最高の宝物たちに出会う時間を持ってください.\n龍山寺の立ち込めるお香の煙の中で、台湾の人々の素朴な願いと信仰を垣間見ることができます.\n士林夜市でジーパイやタピオカティーなど、多彩な台湾ストリートフードを制覇してください。",
zh: "充满亲切微笑和无尽美食的台湾首都，夜市天堂. \n在台北101大楼欣赏城市华丽全景，感受台湾的骄傲. \n在国立故宫博物院邂逅中国历史上顶级的瑰宝. \n在龙山寺缭绕的香烟中窥探台湾人淳朴的愿望与信仰. \n在士林夜市征服大鸡排和珍珠奶茶等多彩的台湾街头美食。"
}
}
];
// Add destinations 26-50
const extraPlaces = [
{
id: "p26", region: "Europe", name: {
ko: "뮌헨, 독일", en: "Munich, Germany", ja: "ミュンヘン・ドイツ", zh: "慕尼黑，德国" }
}
,
{
id: "p27", region: "Asia", name: {
ko: "카트만두, 네팔", en: "Kathmandu, Nepal", ja: "カトマンズ・ネパール", zh: "加德满都，尼泊尔" }
}
,
{
id: "p28", region: "America", name: {
ko: "시카고, 미국", en: "Chicago, USA", ja: "シカゴ・米国", zh: "芝加哥，美国" }
}
,
{
id: "p29", region: "America", name: {
ko: "퀘벡, 캐나다", en: "Quebec City, Canada", ja: "ケベック・シティ・カナダ", zh: "魁北克市，加拿大" }
}
,
{
id: "p30", region: "Europe", name: {
ko: "피렌체, 이탈리아", en: "Florence, Italy", ja: "フィレンツェ・イタリア", zh: "佛罗伦萨，意大利" }
}
,
{
id: "p31", region: "America", name: {
ko: "밴프, 캐나다", en: "Banff, Canada", ja: "バンフ・カナダ", zh: "班夫，加拿大" }
}
,
{
id: "p32", region: "Other", name: {
ko: "멜버른, 호주", en: "Melbourne, Australia", ja: "メルボルン・オーストラリア", zh: "墨尔本，澳大利亚" }
}
,
{
id: "p33", region: "America", name: {
ko: "샌프란시스코, 미국", en: "San Francisco, USA", ja: "サンフランシスコ・米国", zh: "旧金山，美国" }
}
,
{
id: "p34", region: "Europe", name: {
ko: "세비야, 스페인", en: "Seville, Spain", ja: "セビリア・スペイン", zh: "塞维利亚，西班牙" }
}
,
{
id: "p35", region: "Asia", name: {
ko: "하노이, 베트남", en: "Hanoi, Vietnam", ja: "ハノイ・ベトナム", zh: "河内，越南" }
}
,
{
id: "p36", region: "Europe", name: {
ko: "베를린, 독일", en: "Berlin, Germany", ja: "ベルリン・ドイツ", zh: "柏林，德国" }
}
,
{
id: "p37", region: "Europe", name: {
ko: "암스테르담, 네덜란드", en: "Amsterdam, Netherlands", ja: "アムステルダム・オランダ", zh: "阿姆斯特丹，荷兰" }
}
,
{
id: "p38", region: "Europe", name: {
ko: "아테네, 그리스", en: "Athens, Greece", ja: "アテネ・ギリシャ", zh: "雅典，希腊" }
}
,
{
id: "p39", region: "Europe", name: {
ko: "리스본, 포르투갈", en: "Lisbon, Portugal", ja: "リスボン・ポルトガル", zh: "里斯本，葡萄牙" }
}
,
{
id: "p40", region: "Europe", name: {
ko: "프라하, 체코", en: "Prague, Czech Republic", ja: "プラハ・チェコ", zh: "布拉格，捷克" }
}
,
{
id: "p41", region: "Other", name: {
ko: "마라케시, 모로코", en: "Marrakech, Morocco", ja: "マラケシュ・モロッコ", zh: "马拉喀什，摩洛哥" }
}
,
{
id: "p42", region: "Other", name: {
ko: "이스탄불, 터키", en: "Istanbul, Turkey", ja: "イスタンブール・トルコ", zh: "伊斯坦布尔，土耳其" }
}
,
{
id: "p43", region: "Asia", name: {
ko: "교토, 일본", en: "Kyoto, Japan", ja: "京都・日本", zh: "京都，日本" }
}
,
{
id: "p44", region: "America", name: {
ko: "리우데자네이루, 브라질", en: "Rio de Janeiro, Brazil", ja: "リオデジャネイロ・ブラジル", zh: "里约热内卢，巴西" }
}
,
{
id: "p45", region: "America", name: {
ko: "로스앤젤레스, 미국", en: "Los Angeles, USA", ja: "ロサンゼルス・米国", zh: "洛杉矶，美国" }
}
,
{
id: "p46", region: "Asia", name: {
ko: "홍콩", en: "Hong Kong, China", ja: "香港・中国", zh: "香港" }
}
,
{
id: "p47", region: "Europe", name: {
ko: "마드리드, 스페인", en: "Madrid, Spain", ja: "マドリード・スペイン", zh: "马德里，西班牙" }
}
,
{
id: "p48", region: "America", name: {
ko: "밴쿠버, 캐나다", en: "Vancouver, Canada", ja: "バンクーバー・カナダ", zh: "温哥华，加拿大" }
}
,
{
id: "p49", region: "Asia", name: {
ko: "부산, 대한민국", en: "Busan, South Korea", ja: "釜山・韓国", zh: "釜山，韩国" }
}
,
{
id: "p50", region: "Europe", name: {
ko: "에든버러, 영국", en: "Edinburgh, UK", ja: "エディンバラ・イギリス", zh: "爱丁堡，英国" }
}
];
extraPlaces.forEach(p => {
const defaultDesc = {
ko: `${
p.name.ko}
는 풍부한 문화유산과 아름다운 자연경관을 자랑하는 최고의 여행지입니다.\n이곳에서만 느낄 수 있는 독특한 분위기와 현지의 맛있는 요리를 꼭 경험해 보세요.\n도시 곳곳에 숨겨진 명소들을 탐방하며 나만의 특별한 여행 지도를 만들어보세요.\n친절한 사람들 속에서 그들의 삶과 문화를 배우는 소중한 시간이 될 것입니다.\n가상 사진관을 통해 이 멋진 장소에서의 추억을 지금 바로 남겨보세요!`,
en: `${
p.name.en}
is a premier destination boasting rich cultural heritage and breathtaking landscapes.\nDon't miss the chance to experience its unique local atmosphere and delicious cuisine.\nExplore hidden gems scattered throughout the city to create your own special travel map.\nIt will be a precious time to learn about the lives and cultures of the friendly locals.\nCapture your memories at this amazing place right now via our virtual studio!`,
ja: `${
p.name.ja}
は豊かな文化遺産と美しい自然景観を誇る、最高の旅行先です.\nここだけで感じられる独特な雰囲気と、地元の美味しい料理をぜひ体験してください.\n街のあちこちに隠れた名所を探索し、自分だけの特別な旅行地図を作ってみてください.\n親切な人々の中で彼らの生活と文化を学ぶ、貴重な時間になるでしょう.\n仮想写真館を通じて、この素晴らしい場所での思い出を今すぐ残してください！`,
zh: `${
p.name.zh}
是拥有丰富文化遗产和美丽自然景观的顶级旅游目的地. \n请务必在这里体验独特的氛围和当地的美味佳肴. \n探索城市各处隐藏的景点，绘制属于您自己的特别旅行地图. \n在友善的人群中学习他们的生活与文化，将是一段宝贵的时光. \n通过虚拟影棚，现在就留下在这个绝佳地点的好回忆吧！`
}
;
places.push({
...p, desc: defaultDesc }
);
}
);
const container = document.getElementById("places");
let net = null;
let currentUserImg = null;
let isStudioOpen = false;
async function loadModel() {
if (net) return;
net = await bodyPix.load({
architecture: 'MobileNetV1', outputStride: 16, multiplier: 0.75, quantBytes: 2 }
);
}
loadModel();
function changeLanguage(lang) {
currentLang = lang;
document.documentElement.lang = lang;
document.querySelectorAll("[data-i18n]").forEach(el => {
const key = el.getAttribute("data-i18n");
if (i18n[lang][key]) el.innerText = i18n[lang][key];
}
);
document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
const key = el.getAttribute("data-i18n-placeholder");
if (i18n[lang][key]) el.placeholder = i18n[lang][key];
}
);
const langSelect = document.getElementById("lang-select");
if(langSelect) langSelect.value = lang;
render(places);
const sc = document.getElementById("selected-city-name");
if (sc && sc.getAttribute("data-place-id")) {
const p = places.find(x => x.id === sc.getAttribute("data-place-id"));
if (p) sc.innerText = p.name[lang];
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
fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${
cityNameEn}
`)
.then(res=>res.json())
.then(wd=>{
if(wd.thumbnail) img.src = wd.thumbnail.source;
else img.src = `https://picsum.photos/seed/${
p.id}
/600/400`;
}
)
.catch(()=> img.src = `https://picsum.photos/seed/${
p.id}
/600/400`);
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
b2.onclick=()=>openModal(p.name[currentLang],
p.desc[currentLang]);
f.appendChild(b1);
f.appendChild(b2);
cnt.appendChild(t);
cnt.appendChild(f);
card.appendChild(img);
card.appendChild(cp);
card.appendChild(cnt);
container.appendChild(card);
}
);
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
ca.style.aspectRatio = `${
img.naturalWidth}
/${
img.naturalHeight}
`;
ca.style.backgroundImage = `url('${
imgSrc}
')`;
s.style.display = "flex";
document.body.style.overflow = "hidden";
}
;
img.src = imgSrc;
}
let webcamStream = null;
async function toggleWebcam() {
const v = document.getElementById('webcam-video');
const b = document.getElementById('webcam-btn');
const c = document.getElementById('capture-btn');
if (webcamStream) {
webcamStream.getTracks().forEach(t => t.stop());
webcamStream = null;
v.style.display = 'none';
b.innerText = currentLang === 'ko' ? '📷 웹캠 사용' : '📷 Use Webcam';
c.style.display = 'none';
}
else {
try {
webcamStream = await navigator.mediaDevices.getUserMedia({
video: true }
);
v.srcObject = webcamStream;
v.style.display = 'block';
b.innerText = currentLang === 'ko' ? '🛑 웹캠 중지' : '🛑 Stop Webcam';
c.style.display = 'inline-block';
}
catch (e) {
alert('Webcam access failed: ' + e.message);
}
}
}
function takeSnapshot() {
const v = document.getElementById('webcam-video');
const canvas = document.createElement('canvas');
canvas.width = v.videoWidth;
canvas.height = v.videoHeight;
canvas.getContext('2d').drawImage(v, 0, 0);
const data = canvas.toDataURL('image/png');
const img = new Image();
img.onload = () => {
currentUserImg = img;
performBackgroundRemoval(img);
toggleWebcam();
// Close webcam after capture
}
;
img.src = data;
}
function closeStudio() {
isStudioOpen = false;
document.getElementById("studio-section").style.display = "none";
document.getElementById("loading-overlay").style.display = "none";
document.getElementById("adjust-controls").style.display = "none";
document.body.style.overflow = "auto";
currentUserImg = null;
}
async function processUserPhoto(input) {
if (input.files && input.files[0]) {
const r = new FileReader();
r.onload = async (e) => {
const img = new Image();
img.onload = async () => {
currentUserImg = img;
await performBackgroundRemoval(img);
}
;
img.src = e.target.result;
}
;
r.readAsDataURL(input.files[0]);
}
}
async function reprocessPhoto() {
if (currentUserImg && isStudioOpen) await performBackgroundRemoval(currentUserImg);
}
async function performBackgroundRemoval(img) {
const o = document.getElementById("loading-overlay");
o.style.display = "flex";
try {
const c = document.getElementById("user-canvas");
const th = parseFloat(document.getElementById("user-threshold").value) || 0.6;
if (!net) await loadModel();
const max = 1000;
let tw = img.width, thh = img.height;
if (tw > max || thh > max) {
const s = max / Math.max(tw, thh);
tw *= s;
thh *= s;
}
const os = document.createElement('canvas');
os.width = tw;
os.height = thh;
const octx = os.getContext('2d');
octx.drawImage(img, 0, 0, tw, thh);
const seg = await net.segmentPerson(os, {
internalResolution: 'medium', segmentationThreshold: th }
);
if (!isStudioOpen) {
o.style.display = "none";
return;
}
c.width = tw;
c.height = thh;
const ctx = c.getContext('2d');
ctx.drawImage(os, 0, 0);
const idat = ctx.getImageData(0, 0, tw, thh);
const pdat = idat.data;
for (let i = 0;
i < pdat.length;
i += 4) {
if (seg.data[i / 4] === 0) pdat[i + 3] = 0;
}
ctx.putImageData(idat, 0, 0);
o.style.display = "none";
document.getElementById("adjust-controls").style.display = "block";
}
catch (e) {
console.error(e);
o.style.display = "none";
alert(i18n[currentLang]["alert-error"]);
}
}
function updateUserTransform() {
const s = document.getElementById("user-scale").value;
const x = document.getElementById("user-pos-x").value;
const y = document.getElementById("user-pos-y").value;
const c = document.getElementById("user-canvas");
if (c) {
c.style.left = `${
x}
%`;
c.style.bottom = `${
y}
%`;
c.style.transform = `translateX(-50%) scale(${
s}
)`;
}
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
html2canvas(ca, {
useCORS: true, allowTaint: true }
).then(cv => {
const link = document.createElement("a");
link.download = `travel-${
Date.now()}
.png`;
link.href = cv.toDataURL("image/png");
link.click();
}
);
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
}
);
}
window.onclick = (e) => {
if (e.target == document.getElementById("modal")) closeModal();
}
changeLanguage('en');