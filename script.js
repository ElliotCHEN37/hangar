const aircraftData = [
    {
        id: 1,
        model: "Boeing 777-39LER (B77W)",
        airline: "Air China (CA/CCA)",
        registration: "B-7869",
        location: "ZSSS",
        date: "2025-06-23",
        photographer: "Elliot CHEN",
        camera: "Olympus PEN E-P3",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-7869.jpg"
    },
    {
        id: 2,
        model: "Airbus A330-302 (A333)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18361",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18361.jpg"
    },
    {
        id: 3,
        model: "Boeing 777-39PER (B77W)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-7883",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-7883.jpg"
    },
    {
        id: 4,
        model: "Boeing 787-9 (B789)",
        airline: "Juneyao Airlines (HO/DKH)",
        registration: "B-226N",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-226n.jpg"
    },
    {
        id: 5,
        model: "Airbus A321-211 sl (A321)",
        airline: "Juneyao Airlines (HO/DKH)",
        registration: "B-8068",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-8068.jpg"
    },
    {
        id: 6,
        model: "COMAC C919-100STD (C919)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-919F",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-919f.jpg"
    },
    {
        id: 7,
        model: "Boeing 787-9 (B789)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-226Q",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-226q.jpg"
    },
    {
        id: 8,
        model: "COMAC C919-100STD (C919)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-658E",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-658e.jpg"
    },
    {
        id: 9,
        model: "Gulfstream GIV-X (G450)",
        airline: "Amber Aviation (NetJets) (TCI)",
        registration: "B-652R",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-652r.jpg"
    },
    {
        id: 10,
        model: "Boeing 777-31BER (B77W)",
        airline: "China Southern Airlines (CZ/CSN)",
        registration: "B-2007",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-2007.jpg"
    },
    {
        id: 11,
        model: "Boeing 787-9 (B789)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-209N",
        location: "ZSSS",
        date: "2025-06-26",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-209n.jpg"
    },
    {
        id: 12,
        model: "Airbus A330-323E (A333)",
        airline: "Malaysia Airlines (MH/MAS)",
        registration: "9M-MTA",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9m-mta.jpg"
    },
    {
        id: 13,
        model: "Boeing 777-312ER (B77W)",
        airline: "Singapore Airlines (SQ/SIA)",
        registration: "9V-SWR",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-swr.jpg"
    },
    {
        id: 14,
        model: "Boeing 777-3DZER (B77W)",
        airline: "Qatar Airways (QR/QTR)",
        registration: "A7-BEA",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/a7-bea.jpg"
    },
    {
        id: 15,
        model: "Boeing 737-8 MAX (B38M)",
        airline: "Shanghai Airlines (FM/CSH)",
        registration: "B-1152",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-1152.jpg"
    },
    {
        id: 16,
        model: "Boeing 737-79P (B737)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-5263",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-5263.jpg"
    },
    {
        id: 17,
        model: "Airbus A330-243 (A332)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-5931",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-5931.jpg"
    },
    {
        id: 18,
        model: "Boeing 777-300ER (B77W)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-7868",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-7868.jpg"
    },
    {
        id: 19,
        model: "Airbus A320-214 sl (A320)",
        airline: "Spring Airlines (9C/CQH)",
        registration: "B-8871",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-8817.jpg"
    },
    {
        id: 20,
        model: "Boeing 777-367 (B773)",
        airline: "Cathay Pacific (CX/CPA)",
        registration: "B-HNJ",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-hnj.jpg"
    },
    {
        id: 21,
        model: "Boeing 787-9 (B789)",
        airline: "Air Canada (AC/ACA)",
        registration: "C-FVNF",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/c-fvnf.jpg"
    },
    {
        id: 22,
        model: "Boeing 777-328ER (B77W)",
        airline: "Air France (AF/AFR)",
        registration: "F-GZNI",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/f-gzni.jpg"
    },
    {
        id: 23,
        model: "Airbus A350-941 (A359)",
        airline: "Thai Airways International (TG/THA)",
        registration: "HS-THZ",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hs-thz.jpg"
    },
    {
        id: 24,
        model: "Boeing 767-346 (ER) (B763)",
        airline: "Japan Airlines (JL/JAL)",
        registration: "JA606J",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja606j.jpg"
    },
    {
        id: 25,
        model: "Airbus A350-941 (A359)",
        airline: "Delta Air Lines (DL/DAL)",
        registration: "N504DN",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n504dn.jpg"
    },
    {
        id: 26,
        model: "McDonnell Douglas MD-11F (MD11)",
        airline: "FedEx Express (FX/FDX)",
        registration: "N615FE",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n615fe.jpg"
    },
    {
        id: 27,
        model: "Boeing 787-9 (B789)",
        airline: "American Airlines (AA/AAL)",
        registration: "N832AA",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n832aa.jpg"
    },
    {
        id: 28,
        model: "Boeing 777-3F2ER (B77W)",
        airline: "Turkish Airlines (TK/THY)",
        registration: "TC-JJV",
        location: "ZSPD",
        date: "2025-06-29",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/tc-jjv.jpg"
    },
    {
        id: 29,
        model: "COMAC ARJ21-700 (AJ27)",
        airline: "OTT Airlines (MU/OTT)",
        registration: "B-655D",
        location: "ZSPD",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-655d.jpg"
    },
    {
        id: 30,
        model: "Airbus A330-243 (A332)",
        airline: "China Eastern Airlines (MU/CES)",
        registration: "B-6545",
        location: "ZSPD",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-6545.jpg"
    },
    {
        id: 31,
        model: "Boeing 787-9 (B789)",
        airline: "ANA All Nippon Airways (NH/ANA)",
        registration: "JA898A",
        location: "ZSPD",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja898a.jpg"
    },
    {
        id: 31,
        model: "Boeing 777F (B77F)",
        airline: "Lufthansa Cargo (LH/GEC)",
        registration: "D-ALFI",
        location: "ZSPD",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/d-alfi.jpg"
    },
    {
        id: 32,
        model: "Boeing 777F60 (B77F)",
        airline: "Ethiopian Airlines (ET/ETH)",
        registration: "ET-ARH",
        location: "ZSPD",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/et-arh.jpg"
    },
    {
        id: 33,
        model: "Airbus A321-211 sl (A321)",
        airline: "Thai VietJet (VZ/TVJ)",
        registration: "HS-VKL",
        location: "RCTP",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hs-vkl.jpg"
    },
    {
        id: 34,
        model: "Airbus A321-252NX (A21N)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58212",
        location: "RCTP",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58212.jpg"
    },
    {
        id: 35,
        model: "Airbus A321-252NX (A21N)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58212",
        location: "RCTP",
        date: "2025-07-04",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58212-2.jpg"
    },
    {
        id: 36,
        model: "Airbus A320-216 (A320)",
        airline: "AirAsia (AK/AXM)",
        registration: "9M-RAA",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9m-raa.jpg"
    },
    {
        id: 37,
        model: "Airbus A330-243F (A332)",
        airline: "Hong Kong Air Cargo (Hong Kong International Aviation Leasing Co., Ltd. (HKIAL)) (RH/HKC)",
        registration: "B-LNZ",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-lnz.jpg"
    },
    {
        id: 38,
        model: "Airbus A320-232 sl (A320)",
        airline: "Tigerair Taiwan (IT/TTW)",
        registration: "B-50015",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-50015.jpg"
    },
    {
        id: 39,
        model: "Airbus A350-941 (A359)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58508",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58508.jpg"
    },
    {
        id: 40,
        model: "Boeing 777-2B5ER (B772)",
        airline: "Jin Air (LJ/JNA)",
        registration: "HL7734",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl7734.jpg"
    },
    {
        id: 41,
        model: "Airbus A320-251N (A32N)",
        airline: "Peach Aviation (MM/APJ)",
        registration: "JA213P",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja213p.jpg"
    },
    {
        id: 42,
        model: "Boeing 767-346 (ER) (B763)",
        airline: "Japan Airlines (JL/JAL)",
        registration: "JA619J",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja619j.jpg"
    },
    {
        id: 43,
        model: "Boeing 777-222ER (B772)",
        airline: "United Airlines (UA/UAL)",
        registration: "N224UA",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n224ua.jpg"
    },
    {
        id: 44,
        model: "Boeing 747-446F (B744)",
        airline: "National Airlines (N8/NCR)",
        registration: "N537CA",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n537ca.jpg"
    },
    {
        id: 45,
        model: "Boeing 777-F (B77F)",
        airline: "FedEx Express (FX/FDX)",
        registration: "N874FD",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n874fd.jpg"
    },
    {
        id: 46,
        model: "Boeing 777-F (B77F)",
        airline: "ANA All Nippon Airways (NH/ANA)",
        registration: "JA771F",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja771f.jpg"
    },
    {
        id: 47,
        model: "Boeing 777-F (B77F)",
        airline: "ANA All Nippon Airways (NH/ANA)",
        registration: "JA771F",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja771f-2.jpg"
    },
    {
        id: 48,
        model: "Boeing 737-8 MAX (B38M)",
        airline: "Batik Air Malaysia (OD/MXD)",
        registration: "9M-LRS",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9m-lrs.jpg"
    },
    {
        id: 49,
        model: "Airbus A330-223 (A332)",
        airline: "Malaysia Airlines (MH/MAS)",
        registration: "9M-MTY",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9m-mty.jpg"
    },
    {
        id: 50,
        model: "Boeing 777F (B77F)",
        airline: "Singapore Airlines Cargo (SQ/SQC) / DHL Express",
        registration: "9V-DHD",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-dhd.jpg"
    }
];

let filteredData = [...aircraftData];
let currentImageIndex = 0;

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = '深色模式';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = '淺色模式';
    }
}

function renderGallery(data = filteredData) {
    const gallery = document.getElementById('gallery');
    
    if (data.length === 0) {
        gallery.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3>找不到相關飛機</h3>
                <p>請嘗試其他搜尋關鍵字</p>
            </div>
        `;
        return;
    }

    gallery.innerHTML = data.map((aircraft, index) => `
        <div class="aircraft-card" onclick="openModal(${index})">
            <img src="${aircraft.image}" alt="${aircraft.model}" class="aircraft-image" 
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4py48L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5ZyW54mH54Sh5rOV6L295YWlPC90ZXh0Pjwvc3ZnPg=='">
            <div class="aircraft-info">
                <div class="aircraft-model">${aircraft.model}</div>
                <div class="aircraft-airline">${aircraft.airline}</div>
                <div class="aircraft-registration">${aircraft.registration}</div>
            </div>
        </div>
    `).join('');
}

function searchAircraft(query) {
    const searchTerm = query.toLowerCase();
    filteredData = aircraftData.filter(aircraft => 
        aircraft.model.toLowerCase().includes(searchTerm) ||
        aircraft.airline.toLowerCase().includes(searchTerm) ||
        aircraft.registration.toLowerCase().includes(searchTerm) ||
        aircraft.location.toLowerCase().includes(searchTerm)
    );
    renderGallery(filteredData);
}

function openModal(index) {
    currentImageIndex = index;
    const aircraft = filteredData[currentImageIndex];
    
    const modalImage = document.getElementById('modalImage');
    modalImage.src = aircraft.image;
    modalImage.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4py48L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5ZyW54mH54Sh5rOV6L295YWlPC90ZXh0Pjwvc3ZnPg==';
        this.onerror = null;
    };
    
    document.getElementById('modalTitle').textContent = aircraft.model;
    
    const infoGrid = document.getElementById('modalInfoGrid');
    infoGrid.innerHTML = `
        <div class="info-item">
            <div class="info-label">航空公司</div>
            <div class="info-value">${aircraft.airline}</div>
        </div>
        <div class="info-item">
            <div class="info-label">註冊號</div>
            <div class="info-value">${aircraft.registration}</div>
        </div>
        <div class="info-item">
            <div class="info-label">拍攝地點</div>
            <div class="info-value">${aircraft.location}</div>
        </div>
        <div class="info-item">
            <div class="info-label">拍攝日期</div>
            <div class="info-value">${aircraft.date}</div>
        </div>
        <div class="info-item">
            <div class="info-label">攝影師</div>
            <div class="info-value">${aircraft.photographer}</div>
        </div>
        <div class="info-item">
            <div class="info-label">相機</div>
            <div class="info-value">${aircraft.camera}</div>
        </div>
        <div class="info-item">
            <div class="info-label">鏡頭</div>
            <div class="info-value">${aircraft.lens}</div>
        </div>
    `;
    
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredData.length) % filteredData.length;
    openModal(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredData.length;
    openModal(currentImageIndex);
}

let touchStartX = 0;
let touchEndX = 0;

function initTouchGestures() {
    const modal = document.getElementById('modal');
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });
}

function handleSwipeGesture() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            previousImage();
        } else {
            nextImage();
        }
    }
}

function lazyLoadImages() {
    const images = document.querySelectorAll('.aircraft-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeIcon').textContent = '☀️';
        document.getElementById('themeText').textContent = '淺色模式';
    }
}

function initThemeListener() {
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.body.setAttribute('data-theme', 'dark');
                document.getElementById('themeIcon').textContent = '☀️';
                document.getElementById('themeText').textContent = '淺色模式';
            } else {
                document.body.removeAttribute('data-theme');
                document.getElementById('themeIcon').textContent = '🌙';
                document.getElementById('themeText').textContent = '深色模式';
            }
        });
    }
}

function preloadImages() {
    aircraftData.forEach(aircraft => {
        const img = new Image();
        img.src = aircraft.image;
    });
}

function createSearchSuggestions() {
    const searchContainer = document.querySelector('.search-container');
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    searchContainer.appendChild(suggestionsDiv);

    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();
        if (query.length === 0) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        const suggestions = new Set();
        aircraftData.forEach(aircraft => {
            if (aircraft.model.toLowerCase().includes(query)) suggestions.add(aircraft.model);
            if (aircraft.airline.toLowerCase().includes(query)) suggestions.add(aircraft.airline);
            if (aircraft.registration.toLowerCase().includes(query)) suggestions.add(aircraft.registration);
            if (aircraft.location.toLowerCase().includes(query)) suggestions.add(aircraft.location);
        });

        const suggestionArray = Array.from(suggestions).slice(0, 5);
        
        if (suggestionArray.length > 0) {
            suggestionsDiv.innerHTML = suggestionArray.map(suggestion => 
                `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
            ).join('');
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            suggestionsDiv.style.display = 'none';
        }
    });
}

function selectSuggestion(suggestion) {
    document.getElementById('searchInput').value = suggestion;
    searchAircraft(suggestion);
    document.querySelector('.search-suggestions').style.display = 'none';
}

function addStatsDisplay() {
    const statsDiv = document.createElement('div');
    statsDiv.className = 'stats-display';
    
    const updateStats = () => {
        const total = aircraftData.length;
        const displayed = filteredData.length;
        const airlines = new Set(aircraftData.map(a => a.airline)).size;
        const models = new Set(aircraftData.map(a => a.model)).size;
        
        statsDiv.innerHTML = `
            顯示 ${displayed} / ${total} 架飛機 | 
            ${airlines} 家航空公司 | 
            ${models} 種機型 | 
            © Copyright 2025 Elliot CHEN | 
            網站內所有相片均不得在未經授權的情況下被隨意分發 | 
            資料來源: <a href="https://rzjets.net" target="_blank">rzjets.net</a> | 
            <a href="https://github.com/ElliotCHEN37/hangar/issues/new/choose" target="_blank">修正與反饋</a>
        `;
    };

    document.body.appendChild(statsDiv);
    
    const originalSearch = searchAircraft;
    searchAircraft = function(query) {
        originalSearch(query);
        updateStats();
    };
    
    updateStats();
}

function initKeyboardEvents() {
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('modal');
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    previousImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
}

function initModalEvents() {
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function initSearchEvents() {
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchAircraft(e.target.value);
    });
}

function init() {
    detectSystemTheme();
    initThemeListener();
    createSearchSuggestions();
    initTouchGestures();
    initKeyboardEvents();
    initModalEvents();
    initSearchEvents();
    
    setTimeout(() => {
        renderGallery();
        lazyLoadImages();
        preloadImages();
        addStatsDisplay();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', init);
