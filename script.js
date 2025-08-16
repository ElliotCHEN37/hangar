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
        model: "Boeing 777F (B77F)",
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
        model: "Boeing 777F (B77F)",
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
        model: "Boeing 777F (B77F)",
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
        model: "Boeing 777F (B77F)",
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
        airline: "Singapore Airlines Cargo (SQ/SQC) / DHL Express (D0/DHK)",
        registration: "9V-DHD",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-dhd.jpg"
    },
    {
        id: 51,
        model: "Boeing 787-8 (B788)",
        airline: "Scoot (TR/TGW)",
        registration: "9V-OFB",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-ofb.jpg"
    },
    {
        id: 52,
        model: "Boeing 787-10 (B78X)",
        airline: "Singapore Airlines (SQ/SIA)",
        registration: "9V-SCI",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-sci.jpg"
    },
    {
        id: 52,
        model: "Boeing 787-10 (B78X)",
        airline: "Singapore Airlines (SQ/SIA)",
        registration: "9V-SCL",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-scl.jpg"
    },
    {
        id: 53,
        model: "Airbus A380-841 (A388)",
        airline: "Singapore Airlines (SQ/SIA)",
        registration: "9V-SKW",
        location: "WSSS",
        date: "2025-07-12",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/9v-skw.jpg"
    },
    {
        id: 54,
        model: "Airbus A320-214 (A320)",
        airline: "Srilankan Airlines (UL/ALK)",
        registration: "4R-ABM",
        location: "WSSS",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/4r-abm.jpg"
    },
    {
        id: 55,
        model: "Airbus A380-842 (A388)",
        airline: "Emirates (EK/UAE)",
        registration: "A6-EUX",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/a6-eux.jpg"
    },
    {
        id: 56,
        model: "Airbus A380-842 (A388)",
        airline: "Emirates (EK/UAE)",
        registration: "A6-EUX",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/a6-eux-2.jpg"
    },
    {
        id: 57,
        model: "Airbus A380-842 (A388)",
        airline: "Emirates (EK/UAE)",
        registration: "A6-EUX",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/a6-eux-3.jpg"
    },
    {
        id: 58,
        model: "Airbus A380-842 (A388)",
        airline: "Emirates (EK/UAE)",
        registration: "A6-EUX",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/a6-eux-4.jpg"
    },
    {
        id: 59,
        model: "Airbus A330-323 (A333)",
        airline: "China Southern Airlines (CZ/CSN)",
        registration: "B-5940",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-5940.jpg"
    },
    {
        id: 60,
        model: "Airbus A321-211 sl (A321)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-16220",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-16220.jpg"
    },
    {
        id: 61,
        model: "Boeing 777-35EER (B77W)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-16721",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-16721.jpg"
    },
    {
        id: 62,
        model: "Boeing 777-300ER (B77W)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-16735",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-16735.jpg"
    },
    {
        id: 63,
        model: "Boeing 787-10 (B78X)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-17803",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-17803.jpg"
    },
    {
        id: 64,
        model: "Boeing 787-10 (B78X)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-17812",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-17812.jpg"
    },
    {
        id: 65,
        model: "Boeing 787-9 (B789)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-17882",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-17882.jpg"
    },
    {
        id: 66,
        model: "Boeing 787-9 (B789)",
        airline: "EVA Air (BR/EVA)",
        registration: "B-17882",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-17882-2.jpg"
    },
    {
        id: 67,
        model: "Boeing 777-309ER (B77W)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18003",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18003.jpg"
    },
    {
        id: 68,
        model: "Boeing 777-309ER (B77W)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18006",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18006.jpg"
    },
    {
        id: 68,
        model: "Boeing 777-309ER (B77W)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18006",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18006-2.jpg"
    },
    {
        id: 69,
        model: "Airbus A330-302 (A333)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18311",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18311.jpg"
    },
    {
        id: 70,
        model: "Airbus A330-302 (A333)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18315/B-18361",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18315,b-18361.jpg"
    },
    {
        id: 71,
        model: "Boeing 737-800 (B738)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18663",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18663.jpg"
    },
    {
        id: 72,
        model: "Boeing 747-409F (SCD) (B744)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18719",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18719.jpg"
    },
    {
        id: 73,
        model: "Boeing 747-409F (SCD) (B744)/Airbus A320-271N (A20N)",
        airline: "China Airlines (CI/CAL)/Tigerair Taiwan (IT/TTW)",
        registration: "B-18719/B-50028",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18719,b-50028.jpg"
    },
    {
        id: 74,
        model: "Boeing 747-409F (B744)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18722",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18722.jpg"
    },
    {
        id: 75,
        model: "Boeing 777F (B77F)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18779",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18779.jpg"
    },
    {
        id: 76,
        model: "Boeing 777F (B77F)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18779",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18779-2.jpg"
    },
    {
        id: 77,
        model: "Boeing 777F (B77F)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18780",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18780.jpg"
    },
    {
        id: 78,
        model: "Airbus A350-941 (A359)",
        airline: "China Airlines (CI/CAL)",
        registration: "B-18910",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-18910.jpg"
    },
    {
        id: 79,
        model: "Airbus A320-271N (A20N)",
        airline: "Tigerair Taiwan (IT/TTW)",
        registration: "B-50027",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-50027.jpg"
    },
    {
        id: 80,
        model: "Airbus A321-252NX (A21N)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58201",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58201.jpg"
    },
    {
        id: 81,
        model: "Airbus A321-252NX (A21N)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58202",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58202.jpg"
    },
    {
        id: 82,
        model: "Airbus A321-252NX (A21N)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58209",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58209.jpg"
    },
    {
        id: 83,
        model: "Airbus A330-941 (A339)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58303",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58303.jpg"
    },
    {
        id: 84,
        model: "Airbus A350-941 (A359)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58504",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58504.jpg"
    },
    {
        id: 85,
        model: "Airbus A350-941 (A359)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58505",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58505.jpg"
    },
    {
        id: 86,
        model: "Airbus A350-941 (A359)",
        airline: "STARLUX Airlines (JX/SJX)",
        registration: "B-58508",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-58508-2.jpg"
    },
    {
        id: 87,
        model: "Boeing 777-367 (B773)",
        airline: "Cathay Pacific (CX/CPA)",
        registration: "B-HNG",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-hng.jpg"
    },
    {
        id: 88,
        model: "Boeing 737-800 (B738)",
        airline: "Greater Bay Airlines (HB/HGB)",
        registration: "B-KJA",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-kja.jpg"
    },
    {
        id: 89,
        model: "Airbus A321-251NX (A21N)",
        airline: "Hong Kong Express (UO/HKE)",
        registration: "B-KKL",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-kkl.jpg"
    },
    {
        id: 90,
        model: "Airbus A321-231 (A321)",
        airline: "Hong Kong Express (UO/HKE)",
        registration: "B-LEH",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/b-leh.jpg"
    },
    {
        id: 91,
        model: "Boeing 737-8 MAX (B38M)",
        airline: "Ethiopian Airlines (ET/ETH)",
        registration: "ET-BAK",
        location: "VOBL",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/et-bak.jpg"
    },
    {
        id: 92,
        model: "Airbus A380-861 (A388)",
        airline: "Korean Air (KE/KAL)",
        registration: "HL7628",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl7628.jpg"
    },
    {
        id: 93,
        model: "Airbus A330-323X (A333)",
        airline: "Asiana Airlines (OZ/AAR)",
        registration: "HL7746",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl7746.jpg"
    },
    {
        id: 94,
        model: "Airbus A330-323X (A333)",
        airline: "Asiana Airlines (OZ/AAR)",
        registration: "HL8258",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl8258.jpg"
    },
    {
        id: 95,
        model: "Airbus A320-232 (A320)",
        airline: "Air Busan (BX/ABL)",
        registration: "HL8309",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl8309.jpg"
    },
    {
        id: 96,
        model: "Airbus A321-251NX (A21N)",
        airline: "Air Busan (BX/ABL)",
        registration: "HL8357",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl8357.jpg"
    },
    {
        id: 97,
        model: "Airbus A320-216 (A320)",
        airline: "Aero K (RF/EOK)",
        registration: "HL8596",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hl8596.jpg"
    },
    {
        id: 98,
        model: "Airbus A321-251NX (A21N)",
        airline: "Thai AirAsia (FD/AIQ)",
        registration: "HS-EAE",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hs-eae.jpg"
    },
    {
        id: 99,
        model: "Airbus A321-251NX (A21N)",
        airline: "Thai AirAsia (FD/AIQ)",
        registration: "HS-EAE",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hs-eae-2.jpg"
    },
    {
        id: 100,
        model: "Boeing 777-3ALER (B77W)",
        airline: "Thai Airways International (TG/THA)",
        registration: "HS-TKN",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/hs-tkn.jpg"
    },
    {
        id: 101,
        model: "Boeing 737-846 (B738)",
        airline: "Japan Airlines (JL/JAL)",
        registration: "JA317J",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ja317j.jpg"
    },
    {
        id: 102,
        model: "Boeing 747-4KZF (SCD) (B744)",
        airline: "Atlas Air (5Y/GTI)",
        registration: "N406KZ",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n406kz.jpg"
    },
    {
        id: 103,
        model: "Boeing 747-8F (B748)",
        airline: "United Parcel Service (5X/UPS)",
        registration: "N620UP",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n620up.jpg"
    },
    {
        id: 104,
        model: "Boeing 777F (B77F)",
        airline: "FedEx Express (FX/FDX)",
        registration: "N891FD",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/n891fd.jpg"
    },
    {
        id: 105,
        model: "Boeing 787-9 (B789)",
        airline: "KLM Royal Dutch Airlines (KL/KLM)",
        registration: "PH-BHI",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/ph-bhi.jpg"
    },
    {
        id: 106,
        model: "Airbus A321-271NX (A21N)",
        airline: "Cebu Pacific Air (5J/CEB)",
        registration: "RP-C4123",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/rp-c4123.jpg"
    },
    {
        id: 107,
        model: "Airbus A321-271NX (A21N)",
        airline: "Cebu Pacific Air (5J/CEB)",
        registration: "RP-C4123",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/rp-c4123-2.jpg"
    },
    {
        id: 108,
        model: "Boeing 787-9 (B789)",
        airline: "Turkish Airlines (TK/THY)",
        registration: "TC-LLJ",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/tc-llj.jpg"
    },
    {
        id: 109,
        model: "Airbus A320-251N (A20N)",
        airline: "Royal Brunei Airlines (BI/BRA)",
        registration: "V8-RBE",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/v8-rbe.jpg"
    },
    {
        id: 110,
        model: "Airbus A321-271NX (A21N)",
        airline: "VietJet Air (VJ/VJC)",
        registration: "VN-A528",
        location: "RCTP",
        date: "2025-07-06",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/vn-a528.jpg"
    },
    {
        id: 111,
        model: "Boeing 787-8 (B788)",
        airline: "Air India (AI/AIC)",
        registration: "VT-ANG",
        location: "VOBL",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/vt-ang.jpg"
    },
    {
        id: 112,
        model: "Boeing 787-8 (B788)",
        airline: "Air India (AI/AIC)",
        registration: "VT-ANG",
        location: "VOBL",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/vt-ang-2.jpg"
    },
    {
        id: 113,
        model: "Boeing 737-8 MAX (B38M)",
        airline: "Air India Express (IX/AXB)",
        registration: "VT-BXU",
        location: "VOBL",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/vt-bxu.jpg"
    },
    {
        id: 114,
        model: "Boeing 737-8 MAX (B38M)",
        airline: "Akasa Air (QP/AKJ)",
        registration: "VT-YAS",
        location: "VOBL",
        date: "2025-07-21",
        photographer: "Elliot CHEN",
        camera: "Olympus OM-D E-M5 Mark II",
        lens: "M.Zuiko Digital ED 40-150mm F4.0-5.6 R",
        image: "images/vt-yas.jpg"
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
        <div class="aircraft-card" onclick="openModal(${index})" 
             oncontextmenu="return false" 
             ondragstart="return false" 
             onselectstart="return false">
            <img src="${aircraft.image}" alt="${aircraft.model}" class="aircraft-image" 
                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4py48L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+5ZyW54mH54Sh5rOV6L295YWlPC90ZXh0Pjwvc3ZnPg=='"
                 oncontextmenu="return false" 
                 ondragstart="return false" 
                 onselectstart="return false">
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
    
    modalImage.oncontextmenu = function(e) {
        e.preventDefault();
        return false;
    };
    modalImage.ondragstart = function(e) {
        e.preventDefault();
        return false;
    };
    modalImage.onselectstart = function(e) {
        e.preventDefault();
        return false;
    };
    
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
        <div class="info-item info-item-full">
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
        const airlines = new Set(aircraftData.map(a => a.airline)).size;
        const models = new Set(
            aircraftData.map(a => {
                const match = a.model.match(/\(([^)]+)\)/); 
                return match ? match[1] : a.model;
            })
        ).size;
        
        statsDiv.innerHTML = `
            © 2025 Elliot CHEN | 
            ${airlines} 家航空公司 | 
            ${models} 種機型 | 
            資料來自<a href="www.rzjets.net">RZJets</a>與<a href="www.flightradar24.com">Flightradar24</a>
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
    initImageProtection();
    
    setTimeout(() => {
        renderGallery();
        lazyLoadImages();
        preloadImages();
        addStatsDisplay();
    }, 1000);
}

function initImageProtection() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
