const places=[
{name:"Paris, France",region:"Europe",desc:`Paris is one of the most famous cities in the world.
The Eiffel Tower is its most iconic landmark.
Visitors enjoy museums like the Louvre.
Cafés and bakeries fill the historic streets.
Walking along the Seine River is unforgettable.`},
{name:"London, United Kingdom",region:"Europe",desc:`London is a historic global capital.
Big Ben and Buckingham Palace attract millions.
Museums and theatres create rich culture.
The Thames River runs through the city.
It blends tradition with modern life.`},
{name:"Rome, Italy",region:"Europe",desc:`Rome is filled with ancient history.
The Colosseum once hosted gladiators.
Vatican City is located here.
Italian food and culture are everywhere.
Walking through Rome feels like time travel.`},
{name:"Barcelona, Spain",region:"Europe",desc:`Barcelona is known for colorful architecture.
Gaudi designed the Sagrada Familia.
The city sits beside the Mediterranean Sea.
Food, beaches and art attract tourists.
Its culture is vibrant and energetic.`},
{name:"Amsterdam, Netherlands",region:"Europe",desc:`Amsterdam is famous for canals.
Bicycles fill the streets.
Historic houses line the waterways.
Art museums show famous paintings.
Boat tours are very popular.`},
{name:"Vienna, Austria",region:"Europe",desc:`Vienna is famous for classical music.
Imperial palaces show royal history.
Coffee houses are traditional meeting places.
Museums and opera houses fill the city.
It has elegant European charm.`},
{name:"Prague, Czech Republic",region:"Europe",desc:`Prague looks like a fairy‑tale city.
Its old town is beautifully preserved.
Charles Bridge crosses the river.
Castles overlook the skyline.
It is full of medieval atmosphere.`},
{name:"Athens, Greece",region:"Europe",desc:`Athens is one of the world's oldest cities.
The Acropolis rises above the skyline.
Ancient Greek culture began here.
Museums protect thousands of artifacts.
Mediterranean culture fills the streets.`},
{name:"Lisbon, Portugal",region:"Europe",desc:`Lisbon sits on hills near the ocean.
Yellow trams travel steep streets.
Historic neighborhoods overlook the river.
Seafood cuisine is very popular.
Sunsets across the Atlantic are beautiful.`},
{name:"Budapest, Hungary",region:"Europe",desc:`Budapest is divided by the Danube River.
Historic bridges connect the city.
Thermal baths are famous attractions.
Grand architecture fills the skyline.
Night views along the river are stunning.`},

{name:"Tokyo, Japan",region:"Asia",desc:`Tokyo mixes tradition and technology.
Ancient temples stand near skyscrapers.
Food like sushi and ramen is famous.
Shibuya Crossing is always busy.
Cherry blossoms color the city in spring.`},
{name:"Kyoto, Japan",region:"Asia",desc:`Kyoto shows traditional Japanese culture.
Hundreds of temples fill the city.
Geisha culture still exists here.
Cherry blossoms bloom each spring.
The atmosphere is calm and historic.`},
{name:"Osaka, Japan",region:"Asia",desc:`Osaka is famous for food culture.
Street foods like takoyaki are popular.
Osaka Castle is a historic landmark.
The nightlife district is lively.
People are known for their friendliness.`},
{name:"Seoul, South Korea",region:"Asia",desc:`Seoul blends tradition and technology.
Royal palaces sit beside skyscrapers.
Korean food and street markets are famous.
K‑pop culture attracts global fans.
Mountains surround the city.`},
{name:"Bangkok, Thailand",region:"Asia",desc:`Bangkok is vibrant and energetic.
Golden temples shine across the city.
Street food markets are everywhere.
Boat rides travel along the river.
Nightlife and shopping are exciting.`},
{name:"Singapore",region:"Asia",desc:`Singapore is modern and clean.
Marina Bay Sands defines the skyline.
Gardens by the Bay looks futuristic.
Food markets offer many cuisines.
Cultures from around Asia mix here.`},
{name:"Bali, Indonesia",region:"Asia",desc:`Bali is a tropical island paradise.
Rice terraces shape the landscape.
Temples reflect spiritual culture.
Surfing beaches attract travelers.
Sunsets over the ocean are stunning.`},
{name:"Phuket, Thailand",region:"Asia",desc:`Phuket is Thailand's largest island.
Beaches attract travelers worldwide.
Boat tours visit nearby islands.
Night markets are colorful.
Clear water is perfect for swimming.`},
{name:"Hanoi, Vietnam",region:"Asia",desc:`Hanoi is rich in culture.
The old quarter has narrow streets.
French colonial buildings remain.
Street food like pho is delicious.
Lakes and temples add beauty.`},
{name:"Kathmandu, Nepal",region:"Asia",desc:`Kathmandu sits in the Himalayas.
Ancient temples fill the city.
Trekkers travel from here to Everest.
Buddhist culture is strong.
Mountain scenery surrounds the valley.`},

{name:"New York City, USA",region:"America",desc:`New York is the city that never sleeps.
Times Square lights the night skyline.
Central Park sits in the middle of the city.
Broadway shows attract visitors.
The skyline is iconic worldwide.`},
{name:"Los Angeles, USA",region:"America",desc:`Los Angeles is the center of Hollywood.
Film studios produce global movies.
Santa Monica beach is popular.
The city enjoys warm weather.
Entertainment culture is everywhere.`},
{name:"San Francisco, USA",region:"America",desc:`San Francisco overlooks a beautiful bay.
The Golden Gate Bridge is iconic.
Cable cars travel steep streets.
Creative culture fills the city.
Fog often covers the skyline.`},
{name:"Las Vegas, USA",region:"America",desc:`Las Vegas is famous for entertainment.
Huge casinos line the Strip.
Shows and concerts happen nightly.
Luxury hotels create bright skylines.
The desert city shines with lights.`},
{name:"Washington DC, USA",region:"America",desc:`Washington DC is the US capital.
The White House sits here.
Historic monuments fill the city.
Smithsonian museums are world famous.
Politics and history meet here.`},
{name:"Rio de Janeiro, Brazil",region:"America",desc:`Rio is famous for beaches.
Christ the Redeemer overlooks the city.
Carnival is colorful and energetic.
Mountains rise beside the ocean.
The scenery is dramatic.`},
{name:"Machu Picchu, Peru",region:"America",desc:`Machu Picchu is an ancient Incan city.
It sits high in the Andes Mountains.
Stone ruins remain well preserved.
Hiking trails lead to the site.
It is one of the world's wonders.`},
{name:"Banff, Canada",region:"America",desc:`Banff is in the Canadian Rockies.
Turquoise lakes reflect mountains.
Wildlife lives throughout the park.
Skiing is popular in winter.
Nature feels untouched.`},
{name:"Patagonia",region:"America",desc:`Patagonia has dramatic landscapes.
Glaciers carve through valleys.
Mountains dominate the scenery.
Hiking trails attract adventurers.
Nature here is wild and powerful.`},
{name:"Hawaii, USA",region:"America",desc:`Hawaii is a tropical paradise.
Volcanoes shape the islands.
Surfing culture is world famous.
Beaches have golden sand.
Sunsets over the Pacific are beautiful.`},

{name:"Sydney, Australia",region:"Other",desc:`Sydney is a beautiful harbor city.
The Opera House is world famous.
Harbour Bridge offers amazing views.
Bondi Beach attracts surfers.
The lifestyle is relaxed and sunny.`},
{name:"Melbourne, Australia",region:"Other",desc:`Melbourne is Australia's cultural capital.
Street art fills many alleys.
Coffee culture is very strong.
Music and festivals are common.
The city is creative and vibrant.`},
{name:"Dubai, UAE",region:"Other",desc:`Dubai is a futuristic desert city.
Burj Khalifa is the tallest tower.
Luxury malls attract shoppers.
Desert safaris are popular.
Modern innovation defines the skyline.`},
{name:"Abu Dhabi, UAE",region:"Other",desc:`Abu Dhabi is the UAE capital.
The Sheikh Zayed Mosque is stunning.
Modern buildings line the coast.
Museums and culture are growing.
The city blends tradition and luxury.`},
{name:"Cairo, Egypt",region:"Other",desc:`Cairo is near the pyramids of Giza.
Ancient Egyptian history is everywhere.
The Nile River flows through the city.
Markets and bazaars are lively.
It is one of the oldest cities.`},
{name:"Cape Town, South Africa",region:"Other",desc:`Cape Town sits beside the ocean.
Table Mountain overlooks the city.
Beaches and nature are beautiful.
Nearby vineyards produce wine.
Wildlife exists nearby.`},
{name:"Reykjavik, Iceland",region:"Other",desc:`Reykjavik is Iceland's capital.
Colorful houses line the streets.
It is a base for exploring nature.
Hot springs are nearby.
Northern lights appear in winter.`},
{name:"Santorini, Greece",region:"Europe",desc:`Santorini has white cliffside houses.
Blue domes overlook the sea.
Sunsets in Oia are famous.
Volcanic cliffs shape the island.
It is very romantic.`},
{name:"Maldives",region:"Other",desc:`The Maldives has tropical islands.
Water villas stand above lagoons.
Coral reefs attract divers.
The ocean water is turquoise.
It is peaceful and luxurious.`},
{name:"Petra, Jordan",region:"Other",desc:`Petra is carved into red rock cliffs.
The Treasury is world famous.
Ancient trade routes passed here.
Ruins spread through the desert.
It is a UNESCO site.`},
{name:"Great Wall, China",region:"Asia",desc:`The Great Wall stretches across mountains.
It protected ancient Chinese kingdoms.
Stone watchtowers appear along the route.
Visitors can walk restored sections.
It is one of the greatest structures ever built.`},
{name:"Beijing, China",region:"Asia",desc:`Beijing is China's historic capital.
The Forbidden City lies at its center.
Ancient temples stand across the city.
Peking duck is a famous local food.
History and modern life mix together.`},
{name:"Shanghai, China",region:"Asia",desc:`Shanghai is a global financial city.
Skyscrapers fill the Pudong skyline.
The Bund shows historic architecture.
Night lights reflect along the river.
It represents modern China.`},
{name:"Istanbul, Turkey",region:"Other",desc:`Istanbul connects Europe and Asia.
The Hagia Sophia is a historic landmark.
Mosques dominate the skyline.
Markets sell spices and textiles.
The Bosphorus Strait divides the continents.`},
{name:"Stockholm, Sweden",region:"Europe",desc:`Stockholm spreads across many islands.
Bridges connect the historic districts.
Gamla Stan old town is very charming.
Water surrounds much of the city.
Scandinavian culture thrives here.`},
{name:"Copenhagen, Denmark",region:"Europe",desc:`Copenhagen is a stylish Nordic capital.
Nyhavn harbor has colorful houses.
Bicycles fill the streets.
Modern design influences the city.
The atmosphere is relaxed and friendly.`},
{name:"Zurich, Switzerland",region:"Europe",desc:`Zurich sits beside a beautiful lake.
The Alps are visible nearby.
The old town has narrow streets.
Luxury shopping streets attract visitors.
It is clean, peaceful and scenic.`},
{name:"Doha, Qatar",region:"Other",desc:`Doha is a fast growing Gulf city.
Modern skyscrapers shape the skyline.
The Museum of Islamic Art is famous.
Traditional souqs sell spices and crafts.
The city mixes modern design with tradition.`},
{name:"Auckland, New Zealand",region:"Other",desc:`Auckland sits between two harbors.
Volcanic hills surround the city.
Sailing culture is very strong.
Nature and beaches are nearby.
It is one of the most livable cities in the world.`},
{name:"Marrakech, Morocco",region:"Other",desc:`Marrakech is a historic city in Morocco.
The Medina is filled with colorful markets and narrow streets.
Visitors explore traditional souks selling spices and crafts.
Beautiful palaces and gardens reflect Moroccan culture.
The city is famous for its vibrant atmosphere and desert gateway location.`}
];

const container=document.getElementById("places");
let net = null;

async function loadModel() {
    net = await bodyPix.load();
    console.log("BodyPix Model Loaded");
}
loadModel();

function render(data){
container.innerHTML="";

data.forEach((p,i)=>{
const card=document.createElement("div");
card.className="card";

const img=document.createElement("img");
const city = p.name.split(",")[0];

fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`)
.then(res=>res.json())
.then(data=>{
    if(data.thumbnail){
        img.src = data.thumbnail.source;
    }else{
        img.src = `https://picsum.photos/seed/${city}${i}/600/400`;
    }
})
.catch(()=>{
    img.src = `https://picsum.photos/seed/${city}${i}/600/400`;
});
img.alt = p.name;

const content=document.createElement("div");
content.className="card-content";

const title=document.createElement("h3");
title.innerText=p.name;

const footer = document.createElement("div");
footer.className = "card-footer";

const btn=document.createElement("button");
btn.innerText="Travel Here (Photo)";
btn.onclick=()=>travelToDestination(p.name, img.src);

const infoBtn=document.createElement("button");
infoBtn.innerText="Details";
infoBtn.style.background = "#6b7280";
infoBtn.onclick=()=>openModal(p.name,p.desc);

footer.appendChild(btn);
footer.appendChild(infoBtn);

content.appendChild(title);
content.appendChild(footer);

card.appendChild(img);
card.appendChild(content);

container.appendChild(card);
});
}

render(places);

let isStudioOpen = false;

function travelToDestination(name, imgSrc) {
    isStudioOpen = true;
    const studio = document.getElementById("studio-section");
    const compArea = document.getElementById("composition-area");
    const cityLabel = document.getElementById("selected-city-name");
    
    cityLabel.innerText = name;
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function() {
        if (!isStudioOpen) return;
        
        const ratio = img.naturalWidth / img.naturalHeight;
        compArea.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        
        if (ratio < 1) {
            compArea.style.width = "400px";
        } else {
            compArea.style.width = "100%";
        }
        
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
}

async function processUserPhoto(input) {
    if (input.files && input.files[0]) {
        if (!isStudioOpen) return;

        const overlay = document.getElementById("loading-overlay");
        overlay.style.display = "flex";
        
        const reader = new FileReader();
        reader.onload = async function(e) {
            if (!isStudioOpen) return;

            const img = new Image();
            img.onload = async () => {
                if (!isStudioOpen) return;

                const canvas = document.getElementById("user-canvas");
                
                if (!net) {
                    await loadModel();
                    if (!isStudioOpen) return;
                }
                
                const segmentation = await net.segmentPerson(img, {
                    flipHorizontal: false,
                    internalResolution: 'medium',
                    segmentationThreshold: 0.7
                });

                if (!isStudioOpen) {
                    overlay.style.display = "none";
                    return;
                }

                const width = img.width;
                const height = img.height;
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, width, height);
                const pixelData = imageData.data;

                for (let i = 0; i < pixelData.length; i += 4) {
                    if (segmentation.data[i / 4] === 0) {
                        pixelData[i + 3] = 0;
                    }
                }

                ctx.putImageData(imageData, 0, 0);
                overlay.style.display = "none";
                document.getElementById("download-comp-btn").style.display = "inline-block";
                document.getElementById("adjust-controls").style.display = "block";
                resetTransform(); // Reset sliders to default for new photo
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function updateUserTransform() {
    const scale = document.getElementById("user-scale").value;
    const posX = document.getElementById("user-pos-x").value;
    const canvas = document.getElementById("user-canvas");
    
    // Scale and translate: posX is 0-100, we convert it to % for left position
    canvas.style.left = `${posX}%`;
    canvas.style.transform = `translateX(-50%) scale(${scale})`;
}

function resetTransform() {
    document.getElementById("user-scale").value = 1.0;
    document.getElementById("user-pos-x").value = 50;
    updateUserTransform();
}

function captureComposition() {
    const area = document.getElementById("composition-area");
    html2canvas(area, {
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `my-travel-${Date.now()}.png`;
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
        render(places.filter(p=>p.name.toLowerCase().includes(val)));
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}
