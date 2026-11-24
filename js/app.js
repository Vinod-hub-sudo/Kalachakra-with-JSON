const CORRIDOR_TRAINS = {"TPTY": [{"no": "20701", "name": "Secunderabad–Tirupati Vande Bharat", "origin": "SC", "dep": "06:00", "arr": "14:15", "dur": "08h 15m", "days": "Except Tue", "classes": "CC EC"}, {"no": "12764", "name": "Padmavati SF Express", "origin": "SC", "dep": "18:40", "arr": "06:55+1", "dur": "12h 15m", "days": "M T W F S", "classes": "1A 2A 3A SL"}, {"no": "12734", "name": "Narayanadri SF Express", "origin": "SC", "dep": "18:25", "arr": "06:25+1", "dur": "12h 00m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17406", "name": "Krishna Express", "origin": "SC / CHZ", "dep": "06:05", "arr": "21:15", "dur": "15h 10m", "days": "Daily", "classes": "3A SL CC 2S"}, {"no": "12797", "name": "Venkatadri SF Express", "origin": "KCG", "dep": "20:05", "arr": "07:55+1", "dur": "11h 50m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17652", "name": "Kacheguda–Chengalpattu Exp", "origin": "KCG", "dep": "17:00", "arr": "04:45+1", "dur": "11h 45m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "17069", "name": "Hyderabad–Kanyakumari Exp", "origin": "HYB / SC / CHZ", "dep": "17:10", "arr": "06:10+1", "dur": "13h 00m", "days": "Wed", "classes": "1A 2A 3A SL"}, {"no": "07424", "name": "SC–Charlapalli–Tirupati Spl", "origin": "SC / CHZ", "dep": "20:00", "arr": "08:30+1", "dur": "12h 30m", "days": "Thu", "classes": "2A 3A SL"}], "BZA": [{"no": "20707", "name": "SC–Visakhapatnam Vande Bharat", "origin": "SC", "dep": "05:05", "arr": "09:20", "dur": "04h 15m", "days": "Except Thu", "classes": "CC EC"}, {"no": "12714", "name": "Satavahana SF Express", "origin": "SC / CHZ", "dep": "16:25", "arr": "21:55", "dur": "05h 30m", "days": "Daily", "classes": "CC 2S 3E"}, {"no": "12704", "name": "Falaknuma SF Express", "origin": "SC", "dep": "15:55", "arr": "21:05", "dur": "05h 10m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17202", "name": "Golconda Express", "origin": "SC / CHZ", "dep": "12:30", "arr": "19:20", "dur": "06h 50m", "days": "Daily", "classes": "CC 2S"}, {"no": "12748", "name": "Palnadu SF Express", "origin": "SC", "dep": "14:15", "arr": "19:15", "dur": "05h 00m", "days": "Daily", "classes": "CC 2S"}, {"no": "12738", "name": "Goutami SF Express", "origin": "SC / CHZ", "dep": "21:15", "arr": "02:35+1", "dur": "05h 20m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "07471", "name": "Hyderabad–Charlapalli–BZA Spl", "origin": "HYB / SC / CHZ", "dep": "06:40", "arr": "13:15", "dur": "06h 35m", "days": "Mon Wed", "classes": "2A 3A SL"}], "VSKP": [{"no": "20834", "name": "SC–Visakhapatnam Vande Bharat", "origin": "SC", "dep": "15:00", "arr": "23:30", "dur": "08h 30m", "days": "Except Sun", "classes": "CC EC"}, {"no": "12728", "name": "Godavari SF Express", "origin": "HYB / SC", "dep": "17:15", "arr": "05:50+1", "dur": "12h 35m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12806", "name": "Janmabhoomi SF Express", "origin": "SC / CHZ", "dep": "07:10", "arr": "19:45", "dur": "12h 35m", "days": "Daily", "classes": "CC 2S 3E"}, {"no": "18520", "name": "LTT–Visakhapatnam Express", "origin": "SC / CHZ", "dep": "20:40", "arr": "09:40+1", "dur": "13h 00m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "17016", "name": "Visakha Express", "origin": "SC / CHZ", "dep": "16:50", "arr": "07:35+1", "dur": "14h 45m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "07810", "name": "Kacheguda–CHZ–VSKP Special", "origin": "KCG / CHZ", "dep": "20:45", "arr": "09:30+1", "dur": "12h 45m", "days": "Fri", "classes": "2A 3A SL"}], "KRNT": [{"no": "12785", "name": "Kacheguda–Mysuru SF Express", "origin": "KCG", "dep": "19:05", "arr": "23:10", "dur": "04h 05m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17603", "name": "KCG–Yelahanka Prashanti Nilayam", "origin": "KCG", "dep": "21:05", "arr": "01:15+1", "dur": "04h 10m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17023", "name": "Tungabhadra Express", "origin": "SC / KCG", "dep": "07:30", "arr": "12:15", "dur": "04h 45m", "days": "Daily", "classes": "CC 2S"}, {"no": "17250", "name": "SC–Machilipatnam (via MRK)", "origin": "SC / CHZ", "dep": "21:30", "arr": "04:45+1", "dur": "07h 15m", "days": "Daily", "classes": "2A 3A SL"}], "KZJ": [{"no": "17011", "name": "Hyderabad–Sirpur Kaghaznagar", "origin": "HYB / SC / CHZ", "dep": "05:10", "arr": "07:35", "dur": "02h 25m", "days": "Daily", "classes": "CC 2S"}, {"no": "12757", "name": "SC–CHZ–Kaghaznagar SF Exp", "origin": "SC / CHZ", "dep": "08:20", "arr": "10:35", "dur": "02h 15m", "days": "Daily", "classes": "CC 2S"}, {"no": "17233", "name": "Bhagyanagar Express", "origin": "SC / CHZ", "dep": "15:35", "arr": "18:10", "dur": "02h 35m", "days": "Daily", "classes": "CC 2S 3E"}, {"no": "17034", "name": "SC–Bhadrachalam Road Exp", "origin": "SC / CHZ", "dep": "22:15", "arr": "05:30+1", "dur": "07h 15m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "07755", "name": "SC–CHZ–Warangal MEMU", "origin": "SC / CHZ", "dep": "17:45", "arr": "20:10", "dur": "02h 25m", "days": "Daily", "classes": "MEMU"}], "NZB": [{"no": "17058", "name": "Devagiri Express", "origin": "SC", "dep": "13:25", "arr": "17:14", "dur": "03h 49m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17661", "name": "Kacheguda–Nagarsol Express", "origin": "KCG", "dep": "04:50", "arr": "09:24", "dur": "04h 34m", "days": "Daily", "classes": "3A SL 2S"}, {"no": "12720", "name": "Hyderabad–Jaipur SF Express", "origin": "HYB / SC", "dep": "20:55", "arr": "00:19+1", "dur": "03h 24m", "days": "Mon Wed", "classes": "1A 2A 3A SL"}, {"no": "17639", "name": "Kacheguda–Akola Intercity", "origin": "KCG", "dep": "07:45", "arr": "11:15", "dur": "03h 30m", "days": "Daily", "classes": "CC 2S"}], "MAS": [{"no": "12604", "name": "Hyderabad–MGR Chennai Central SF", "origin": "HYB / SC", "dep": "16:45", "arr": "05:40+1", "dur": "12h 55m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12760", "name": "Charminar SF Express", "origin": "HYB / SC", "dep": "18:00", "arr": "07:50+1", "dur": "13h 50m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17652", "name": "Kacheguda–Chengalpattu Exp", "origin": "KCG", "dep": "17:00", "arr": "07:45+1", "dur": "14h 45m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "07290", "name": "SC–CHZ–Chennai Egmore Spl", "origin": "SC / CHZ", "dep": "19:00", "arr": "09:15+1", "dur": "14h 15m", "days": "Sun Mon Fri", "classes": "2A 3A SL"}], "MDU": [{"no": "16734", "name": "Okha–Rameswaram Express", "origin": "KCG", "dep": "01:50", "arr": "15:10+1", "dur": "37h 20m", "days": "Thu", "classes": "2A 3A SL"}, {"no": "17069", "name": "Hyderabad–Kanyakumari Exp", "origin": "HYB / SC / CHZ", "dep": "17:10", "arr": "16:45+1", "dur": "23h 35m", "days": "Wed", "classes": "1A 2A 3A SL"}, {"no": "16353", "name": "Kacheguda–Nagercoil Express", "origin": "KCG", "dep": "15:45", "arr": "14:20+1", "dur": "22h 35m", "days": "Sun", "classes": "2A 3A SL"}, {"no": "07407", "name": "SC–CHZ–Velankanni Special", "origin": "SC / CHZ", "dep": "19:25", "arr": "17:30+1", "dur": "22h 05m", "days": "Tue", "classes": "2A 3A SL"}], "ERS": [{"no": "17230", "name": "Sabari Express", "origin": "SC / CHZ", "dep": "12:20", "arr": "12:55+1", "dur": "24h 35m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "20629", "name": "Sabari SF Express", "origin": "SC / CHZ", "dep": "14:25", "arr": "12:25+1", "dur": "22h 00m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "07137", "name": "HYB–SC–CHZ–Kottayam Spl", "origin": "HYB / SC / CHZ", "dep": "12:45", "arr": "14:30+1", "dur": "25h 45m", "days": "Fri", "classes": "2A 3A SL"}, {"no": "07169", "name": "KCG–CHZ–Kottayam Sabarimala Spl", "origin": "KCG / CHZ", "dep": "12:30", "arr": "14:15+1", "dur": "25h 45m", "days": "Sun", "classes": "2A 3A SL"}], "SBC": [{"no": "20703", "name": "Kacheguda–Yesvantpur Vande Bharat", "origin": "KCG", "dep": "05:30", "arr": "14:00", "dur": "08h 30m", "days": "Except Wed", "classes": "CC EC"}, {"no": "12785", "name": "Kacheguda–Mysuru SF Express", "origin": "KCG", "dep": "19:05", "arr": "06:25+1", "dur": "11h 20m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12735", "name": "SC–CHZ–Yesvantpur Garib Rath", "origin": "SC / CHZ", "dep": "19:45", "arr": "07:40+1", "dur": "11h 55m", "days": "Sun Wed Fri", "classes": "3A"}, {"no": "07065", "name": "CHZ–SC–SMVB Bengaluru Spl", "origin": "CHZ / SC", "dep": "21:50", "arr": "09:30+1", "dur": "11h 40m", "days": "Mon", "classes": "2A 3A SL"}], "MAJN": [{"no": "17322", "name": "Jasidih–Vasco-Da-Gama (via Hubballi)", "origin": "CHZ / SC", "dep": "18:30", "arr": "08:40+1", "dur": "14h 10m", "days": "Tue", "classes": "2A 3A SL"}, {"no": "17075", "name": "Charlapalli–SC–Belagavi Exp", "origin": "CHZ / SC", "dep": "16:00", "arr": "06:30+1", "dur": "14h 30m", "days": "Sat", "classes": "2A 3A SL"}, {"no": "17021", "name": "Hyderabad–Vasco-Da-Gama Exp", "origin": "HYB / SC", "dep": "09:20", "arr": "02:30+1", "dur": "17h 10m", "days": "Thu", "classes": "2A 3A SL"}], "PUNE": [{"no": "12702", "name": "Hussainsagar SF Express", "origin": "HYB", "dep": "14:50", "arr": "00:35+1", "dur": "09h 45m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17014", "name": "CHZ–SC–HYB–Hadapsar (Pune) Exp", "origin": "CHZ / SC / HYB", "dep": "19:50", "arr": "07:10+1", "dur": "11h 20m", "days": "Mon Wed Sat", "classes": "2A 3A SL"}, {"no": "18519", "name": "VSKP–CHZ–SC–Mumbai LTT Exp", "origin": "CHZ / SC", "dep": "12:20", "arr": "04:15+1", "dur": "15h 55m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "17206", "name": "COA–CHZ–SC–Sainagar Shirdi Exp", "origin": "CHZ / SC", "dep": "15:05", "arr": "08:30+1", "dur": "17h 25m", "days": "Mon Wed Fri", "classes": "2A 3A SL"}], "SNSI": [{"no": "17206", "name": "Kakinada–CHZ–SC–Sainagar Shirdi", "origin": "CHZ / SC", "dep": "15:05", "arr": "08:30+1", "dur": "17h 25m", "days": "Mon Wed Fri", "classes": "2A 3A SL"}, {"no": "17208", "name": "Vijayawada–CHZ–SC–Shirdi Exp", "origin": "CHZ / SC", "dep": "15:05", "arr": "08:30+1", "dur": "17h 25m", "days": "Tue", "classes": "2A 3A SL"}, {"no": "17002", "name": "Secunderabad–Sainagar Shirdi Exp", "origin": "SC", "dep": "16:45", "arr": "09:10+1", "dur": "16h 25m", "days": "Fri Sun", "classes": "2A 3A SL"}, {"no": "17064", "name": "Ajanta Express (to Manmad/Kopargaon)", "origin": "SC", "dep": "18:55", "arr": "07:45+1", "dur": "12h 50m", "days": "Daily", "classes": "1A 2A 3A SL"}], "PURI": [{"no": "12704", "name": "Falaknuma SF Express (to BBS/KUR)", "origin": "SC", "dep": "15:55", "arr": "11:45+1", "dur": "19h 50m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17016", "name": "Visakha Express (to Bhubaneswar)", "origin": "SC / CHZ", "dep": "16:50", "arr": "15:25+1", "dur": "22h 35m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "18520", "name": "LTT–VSKP (Connects East Coast Exp)", "origin": "SC / CHZ", "dep": "20:40", "arr": "17:40+1", "dur": "21h 00m", "days": "Daily", "classes": "2A 3A SL"}], "BSB": [{"no": "12791", "name": "Secunderabad–Danapur SF Express", "origin": "SC", "dep": "09:25", "arr": "13:30+1", "dur": "28h 05m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "22535", "name": "Rameswaram–Banaras SF Express", "origin": "SC", "dep": "07:20", "arr": "10:15+1", "dur": "26h 55m", "days": "Thu", "classes": "2A 3A SL"}, {"no": "15024", "name": "YPR–KCG–Gorakhpur (Ayodhya/BSB)", "origin": "KCG", "dep": "10:40", "arr": "15:15+1", "dur": "28h 35m", "days": "Fri", "classes": "2A 3A SL"}, {"no": "07091", "name": "HYB–SC–CHZ–Danapur Special", "origin": "HYB / SC / CHZ", "dep": "12:30", "arr": "18:00+1", "dur": "29h 30m", "days": "Sat", "classes": "2A 3A SL"}], "NDLS": [{"no": "12723", "name": "Telangana SF Express", "origin": "HYB / SC", "dep": "06:25", "arr": "07:40+1", "dur": "25h 15m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12721", "name": "Dakshin SF Express", "origin": "HYB / SC", "dep": "23:25", "arr": "03:40+2", "dur": "28h 15m", "days": "Daily", "classes": "2A 3A SL"}, {"no": "12437", "name": "Secunderabad–Hazrat Nizamuddin Rajdhani", "origin": "SC", "dep": "12:50", "arr": "10:25+1", "dur": "21h 35m", "days": "Wed", "classes": "1A 2A 3A"}, {"no": "12649", "name": "Karnataka Sampark Kranti (via KCG)", "origin": "KCG", "dep": "08:10", "arr": "08:10+1", "dur": "24h 00m", "days": "Sun Mon Wed", "classes": "1A 2A 3A SL"}], "ADI": [{"no": "17018", "name": "Secunderabad–Rajkot Express", "origin": "SC", "dep": "15:15", "arr": "13:45+1", "dur": "22h 30m", "days": "Mon Tue Sat", "classes": "2A 3A SL"}, {"no": "22718", "name": "Secunderabad–Rajkot SF Express", "origin": "SC", "dep": "15:00", "arr": "13:45+1", "dur": "22h 45m", "days": "Wed Thu Sun", "classes": "2A 3A SL"}, {"no": "20915", "name": "CHZ–SC–Indore Humsafar (via Ujjain)", "origin": "CHZ / SC", "dep": "20:45", "arr": "15:35+1", "dur": "18h 50m", "days": "Sun", "classes": "3A SL"}], "HYD": [{"no": "20708", "name": "Visakhapatnam–Secunderabad Vande Bharat", "origin": "VSKP / BZA", "dep": "05:45", "arr": "14:15 (SC)", "dur": "08h 30m", "days": "Except Thu", "classes": "CC EC"}, {"no": "12713", "name": "Satavahana SF Express", "origin": "BZA", "dep": "06:25", "arr": "11:55 (SC)", "dur": "05h 30m", "days": "Daily", "classes": "CC 2S 3E"}, {"no": "12703", "name": "Falaknuma SF Express", "origin": "HWH / VSKP / BZA", "dep": "04:10", "arr": "09:35 (SC)", "dur": "05h 25m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12727", "name": "Godavari SF Express", "origin": "VSKP / RJY / BZA", "dep": "17:20", "arr": "06:15+1 (HYB/SC)", "dur": "12h 55m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12733", "name": "Narayanadri SF Express", "origin": "TPTY / NLR / GNT", "dep": "18:25", "arr": "06:35+1 (SC)", "dur": "12h 10m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "12798", "name": "Venkatadri SF Express", "origin": "CTR / TPTY / KRNT", "dep": "17:35", "arr": "06:20+1 (KCG)", "dur": "12h 45m", "days": "Daily", "classes": "1A 2A 3A SL"}, {"no": "17201", "name": "Golconda Express", "origin": "GNT / BZA / WL", "dep": "05:30", "arr": "13:45 (CHZ/SC)", "dur": "08h 15m", "days": "Daily", "classes": "CC 2S"}]};
    const CORRIDOR_BUSES = {"TPTY": [{"op": "TGSRTC Garuda Plus / Lahari AC", "from": "MGBS / JBS / Miyapur (Hyd)", "to": "Tirupati Bus Stand (Alipiri)", "timings": "17:30, 18:45, 20:00, 21:15", "dur": "11h 30m", "fare": "₹1,150 – ₹1,650"}, {"op": "APSRTC Vennela / Amaravati AC", "from": "BHEL / Kukatpally / LB Nagar (Hyd)", "to": "Tirupati Central Bus Station", "timings": "18:00, 19:30, 20:30, 21:45", "dur": "11h 15m", "fare": "₹1,100 – ₹1,720"}, {"op": "AbhiBus Partner (Orange / IntrCity)", "from": "Gachibowli / Lakdikapul / LB Nagar", "to": "Tirupati / Renigunta Bypass", "timings": "18:15, 19:45, 21:00, 22:15", "dur": "11h 00m", "fare": "₹999 – ₹1,850"}, {"op": "APSRTC Sapthagiri Ghat Express", "from": "Tirupati RTC Bus Stand / Alipiri", "to": "Tirumala Hill Temple", "timings": "Every 5 mins (24x7)", "dur": "00h 45m", "fare": "₹90"}], "BZA": [{"op": "TGSRTC Garuda / Super Luxury", "from": "MGBS / KPHB / Dilsukhnagar (Hyd)", "to": "PNBS Vijayawada", "timings": "Every 30 mins (05:00 – 23:30)", "dur": "05h 30m", "fare": "₹520 – ₹890"}, {"op": "APSRTC Indra / Amaravati AC", "from": "Miyapur / Ameerpet / LB Nagar (Hyd)", "to": "Pandit Nehru Bus Station (PNBS)", "timings": "Every 20 mins (24x7)", "dur": "05h 15m", "fare": "₹550 – ₹950"}, {"op": "AbhiBus Partner (Morning Star / VKV)", "from": "Kukatpally / Paradise / LB Nagar", "to": "Benz Circle / PNBS Vijayawada", "timings": "06:30, 13:00, 21:30, 22:45", "dur": "05h 10m", "fare": "₹490 – ₹1,150"}], "VSKP": [{"op": "TGSRTC Rajdhani / Garuda Plus", "from": "MGBS / JBS / Uppal (Hyd)", "to": "Dwaraka Bus Complex (VSKP)", "timings": "16:30, 18:00, 19:30, 20:30", "dur": "12h 30m", "fare": "₹1,250 – ₹1,750"}, {"op": "APSRTC Night Rider / Vennela Sleeper", "from": "Patancheru / KPHB / LB Nagar", "to": "Maddilapalem / Dwaraka Nagar", "timings": "17:00, 18:30, 19:45, 21:00", "dur": "12h 15m", "fare": "₹1,200 – ₹1,890"}, {"op": "AbhiBus Partner (Sri Krishna / Kaveri)", "from": "Gachibowli / SR Nagar / Uppal", "to": "Simhachalam / NAD Junction", "timings": "17:30, 19:00, 20:15, 21:30", "dur": "12h 00m", "fare": "₹1,050 – ₹1,950"}], "KRNT": [{"op": "TGSRTC Srisailam Ghat Special", "from": "MGBS / JBS / Shamshabad (Hyd)", "to": "Srisailam / Kurnool / Nandyal", "timings": "04:30, 06:00, 08:30, 11:00, 14:00", "dur": "04h 30m – 05h 30m", "fare": "₹380 – ₹620"}, {"op": "APSRTC Super Luxury / Indra AC", "from": "MGBS / Aramghar (Hyd)", "to": "Kurnool / Nandyal / Mantralayam", "timings": "Every 45 mins (05:00 – 23:00)", "dur": "04h 00m – 05h 45m", "fare": "₹360 – ₹680"}, {"op": "AbhiBus Partner (Diwakar / SVR)", "from": "Kukatpally / Lakdikapul / Aramghar", "to": "Kurnool / Nandyal / Ahobilam", "timings": "07:00, 14:30, 21:30, 22:30", "dur": "04h 15m", "fare": "₹420 – ₹890"}], "KZJ": [{"op": "TGSRTC Yadadri / Warangal Non-Stop", "from": "JBS Secunderabad / Uppal X Roads", "to": "Yadagirigutta / Hanamkonda / Vemulawada", "timings": "Every 15 mins (04:30 – 22:30)", "dur": "01h 30m – 03h 15m", "fare": "₹110 – ₹340"}, {"op": "TGSRTC Garuda / Super Luxury (Bhadrachalam)", "from": "MGBS / JBS / Uppal (Hyd)", "to": "Bhadrachalam Temple Bus Stand", "timings": "06:30, 09:00, 20:30, 21:45", "dur": "06h 45m", "fare": "₹540 – ₹820"}, {"op": "AbhiBus Partner (TGSRTC & Private)", "from": "Uppal / LB Nagar / KPHB", "to": "Warangal / Kothagudem / Bhadrachalam", "timings": "07:00, 15:00, 21:30, 22:30", "dur": "03h 00m – 06h 30m", "fare": "₹350 – ₹850"}], "NZB": [{"op": "TGSRTC Express / Deluxe / Rajdhani", "from": "JBS Secunderabad / Suchitra / Medchal", "to": "Nizamabad / Basara / Nirmal", "timings": "Every 20 mins (05:00 – 22:00)", "dur": "03h 30m – 04h 30m", "fare": "₹280 – ₹490"}, {"op": "AbhiBus Partner (TGSRTC & MSRTC)", "from": "JBS / Kukatpally / Kompally", "to": "Nizamabad / Nanded / Adilabad", "timings": "06:30, 13:30, 21:00, 22:30", "dur": "03h 45m", "fare": "₹310 – ₹750"}], "MAS": [{"op": "APSRTC / SETC / TGSRTC Interstate AC", "from": "MGBS / Miyapur / LB Nagar (Hyd)", "to": "CMBT Koyambedu / Kilambakkam (Chennai)", "timings": "16:30, 18:00, 19:30, 20:30", "dur": "12h 30m", "fare": "₹1,250 – ₹1,950"}, {"op": "AbhiBus Partner (Orange / IntrCity / Jabbar)", "from": "Gachibowli / KPHB / LB Nagar", "to": "Koyambedu / Guindy / Kanchipuram", "timings": "17:00, 18:30, 19:45, 21:00", "dur": "12h 00m", "fare": "₹1,150 – ₹2,150"}], "MDU": [{"op": "AbhiBus Partner (Kallada / SPS / Orange)", "from": "Gachibowli / Lakdikapul / Shamshabad", "to": "Mattuthavani Madurai / Trichy", "timings": "14:00, 15:30, 17:00", "dur": "17h 30m", "fare": "₹1,850 – ₹2,850"}, {"op": "SETC / TNSTC Express (from Chennai/Bengaluru)", "from": "Chennai CMBT / Bengaluru Majestic", "to": "Madurai / Rameswaram / Kanyakumari", "timings": "Every 30 mins (24x7)", "dur": "08h 00m – 10h 30m", "fare": "₹650 – ₹1,250"}], "ERS": [{"op": "AbhiBus Partner (Kallada / Aeon / Atlas)", "from": "Gachibowli / KPHB / Shamshabad", "to": "Ernakulam Vyttila / Thrissur / Kottayam", "timings": "13:30, 15:00, 16:30", "dur": "19h 30m", "fare": "₹2,100 – ₹3,200"}, {"op": "Kerala RTC (KSRTC) Swift / Super Fast", "from": "Ernakulam / Thrissur / TVC Bus Stand", "to": "Guruvayur / Sabarimala Pamba / Chottanikkara", "timings": "Every 20 mins (04:00 – 22:30)", "dur": "01h 00m – 04h 30m", "fare": "₹90 – ₹380"}], "SBC": [{"op": "TGSRTC Garuda Plus / Vennela Sleeper", "from": "MGBS / JBS / Gachibowli / Shamshabad", "to": "Majestic / Hebbal / Silk Board (BLR)", "timings": "18:30, 19:45, 21:00, 22:15", "dur": "09h 30m", "fare": "₹1,050 – ₹1,650"}, {"op": "KSRTC Airavat Club Class / Ambari Utsav", "from": "MGBS / Miyapur / Aramghar (Hyd)", "to": "Kempegowda Bus Station (Majestic)", "timings": "18:00, 19:30, 20:45, 22:00", "dur": "09h 15m", "fare": "₹1,150 – ₹1,850"}, {"op": "AbhiBus Partner (IntrCity / Orange / VRL)", "from": "KPHB / Gachibowli / Mehdipatnam", "to": "Yesvantpur / Majestic / Mysuru", "timings": "19:00, 20:30, 21:30, 22:45", "dur": "09h 00m", "fare": "₹950 – ₹1,950"}], "MAJN": [{"op": "AbhiBus Partner (VRL / SRS / Sugama)", "from": "Gachibowli / KPHB / Aramghar (Hyd)", "to": "Hubballi / Udupi / Mangaluru / Hampi", "timings": "16:30, 18:00, 19:30", "dur": "13h 30m – 16h 00m", "fare": "₹1,450 – ₹2,400"}, {"op": "KSRTC Rajahamsa / Airavat", "from": "Bengaluru Majestic / Hubballi", "to": "Kollur / Kukke Subramanya / Dharmasthala / Gokarna", "timings": "06:30, 09:00, 21:30, 22:30", "dur": "06h 30m – 08h 30m", "fare": "₹580 – ₹1,150"}], "PUNE": [{"op": "TGSRTC Lahari / Garuda Plus", "from": "MGBS / Miyapur / KPHB / BHEL (Hyd)", "to": "Swargate / Wakad / Sangamwadi (Pune)", "timings": "18:00, 19:30, 20:30, 21:30", "dur": "09h 45m", "fare": "₹1,050 – ₹1,600"}, {"op": "AbhiBus Partner (VRL / Orange / IntrCity)", "from": "Gachibowli / Kukatpally / Patancheru", "to": "Pune / Solapur / Kolhapur / Pandharpur", "timings": "18:30, 20:00, 21:15, 22:30", "dur": "09h 30m", "fare": "₹950 – ₹1,850"}], "SNSI": [{"op": "TGSRTC Garuda Plus / Rajdhani (Shirdi)", "from": "MGBS / JBS / Miyapur / BHEL (Hyd)", "to": "Sainagar Shirdi Bus Stand", "timings": "16:30, 18:00, 19:15", "dur": "12h 00m", "fare": "₹1,150 – ₹1,680"}, {"op": "AbhiBus Partner (Orange / VRL / Hans)", "from": "Gachibowli / KPHB / Patancheru", "to": "Shirdi / Nashik / Aurangabad", "timings": "17:00, 18:30, 20:00", "dur": "11h 45m", "fare": "₹1,050 – ₹1,890"}], "PURI": [{"op": "OSRTC / AbhiBus Partner (to Berhampur/BBS)", "from": "Visakhapatnam / Hyd (via VSKP)", "to": "Bhubaneswar Baramunda / Puri", "timings": "17:30, 19:00, 20:30", "dur": "07h 30m (from VSKP)", "fare": "₹750 – ₹1,350"}, {"op": "OSRTC / Mo Bus Direct Shuttle", "from": "Bhubaneswar Baramunda / Master Canteen", "to": "Puri Gundicha / Jagannath Temple", "timings": "Every 15 mins (05:00 – 22:00)", "dur": "01h 30m", "fare": "₹70 – ₹150"}], "BSB": [{"op": "UPSRTC Janrath / Shatabdi AC", "from": "Varanasi Cantt / Prayagraj / Lucknow", "to": "Ayodhya Dham / Chitrakoot / Vindhyachal", "timings": "Every 30 mins (05:00 – 22:00)", "dur": "02h 30m – 04h 30m", "fare": "₹240 – ₹580"}, {"op": "AbhiBus Partner (Gajraj / IntrCity)", "from": "Varanasi / Prayagraj / Gorakhpur", "to": "Ayodhya / Mathura / Gaya", "timings": "06:30, 14:00, 21:30", "dur": "04h 00m – 08h 00m", "fare": "₹450 – ₹1,150"}], "NDLS": [{"op": "UPSRTC / HRTC / UTC Volvo & Ordinary", "from": "Delhi ISBT Kashmere Gate / Anand Vihar", "to": "Haridwar / Rishikesh / Mathura / Katra", "timings": "Every 20 mins (24x7)", "dur": "03h 00m – 12h 00m", "fare": "₹280 – ₹1,450"}, {"op": "AbhiBus Partner (IntrCity / Zingbus)", "from": "Delhi Majnu Ka Tila / RK Ashram", "to": "Manali / Shimla / Amritsar / Khatu Shyam", "timings": "18:30, 20:00, 21:30, 22:30", "dur": "06h 00m – 12h 30m", "fare": "₹699 – ₹1,650"}], "ADI": [{"op": "GSRTC / RSRTC Volvo & Sleeper", "from": "Ahmedabad Geeta Mandir / Udaipur / Indore", "to": "Somnath / Dwarka / Ambaji / Ujjain / Pushkar", "timings": "Every 45 mins (05:00 – 23:30)", "dur": "03h 00m – 08h 30m", "fare": "₹260 – ₹980"}, {"op": "AbhiBus Partner (Patel / Chartered Bus)", "from": "Ahmedabad Paldi / Indore Vijay Nagar", "to": "Dwarka / Nathdwara / Ujjain / Omkareshwar", "timings": "07:00, 14:00, 21:30, 22:30", "dur": "02h 30m – 08h 00m", "fare": "₹320 – ₹1,250"}], "HYD": [{"op": "APSRTC Amaravati / Indra AC", "from": "PNBS Vijayawada / Guntur", "to": "MGBS / LB Nagar / KPHB (Hyd)", "timings": "Every 20 mins (24x7)", "dur": "05h 15m", "fare": "₹550 – ₹950"}, {"op": "TGSRTC Garuda Plus / Rajdhani", "from": "Tirupati / Visakhapatnam / Warangal", "to": "MGBS / JBS Secunderabad", "timings": "Every 30 mins (05:00 – 23:30)", "dur": "03h 00m – 12h 00m", "fare": "₹320 – ₹1,650"}, {"op": "AbhiBus Partner (Morning Star / Orange)", "from": "Vijayawada / Vizag / Tirupati / Bengaluru", "to": "Lakdikapul / Ameerpet / Secunderabad", "timings": "18:00, 20:00, 21:30, 22:30", "dur": "05h 10m – 11h 30m", "fare": "₹490 – ₹1,850"}]};
    let BASE_TEMPLES = [];
    let templesLoadedPromise = null;
    window.ensureTemplesLoaded = async () => {
      if (BASE_TEMPLES.length > 0) return BASE_TEMPLES;
      if (templesLoadedPromise) return templesLoadedPromise;
      templesLoadedPromise = fetch('./data/temples.json')
        .then(r => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            BASE_TEMPLES = data;
            try { localStorage.setItem('panchtattva_temples_meta_v1', JSON.stringify({ count: data.length, ts: Date.now() })); } catch (e) {}
          }
          return BASE_TEMPLES;
        })
        .catch(err => {
          console.warn('Could not load data/temples.json:', err);
          return BASE_TEMPLES;
        });
      return templesLoadedPromise;
    };
    const RASHI_PHALALU = [{"rashiEn": "Mesha (Aries)", "rashiTe": "మేష రాశి", "rashiHi": "मेष राशि", "lord": "Kuja (Mars)", "daily": {"en": "High energy and initiative today; favorable for resolving pending work tasks and family discussions. Avoid impulsive spending in the evening.", "te": "నేడు ఉత్సాహం, ఆత్మవిశ్వాసం పెరుగుతాయి. పెండింగ్ పనులు పూర్తవుతాయి. సాయంత్రం అనవసర ఖర్చులను నియంత్రించండి.", "hi": "आज ऊर्जा और आत्मविश्वास बढ़ेगा। लंबित कार्य पूरे होंगे। शाम को अनावश्यक खर्चों से बचें।"}, "monthly": {"en": "Career recognition and steady financial inflow mark this month. Mid-month brings auspicious family travel; guard against minor heat or fatigue.", "te": "ఈ నెల ఉద్యోగ, వ్యాపారాలలో గుర్తింపు లభిస్తుంది. ఆదాయ మార్గాలు మెరుగుపడతాయి. మధ్యభాగంలో శుభప్రయాణాలు ఉంటాయి.", "hi": "इस माह कार्यक्षेत्र में मान-सम्मान और धन लाभ के योग हैं। माह के मध्य में शुभ यात्रा संभव है।"}, "quarterly": {"en": "Strong quarter for skill upgrades, property planning, and clearing old debts. Collaborative projects yield measurable progress.", "te": "ఈ త్రైమాసికంలో నూతన నైపుణ్యాలు, గృహ/భూ సంబంధిత ప్రణాళికలు ఫలిస్తాయి. పాత బాకీలు తీరుతాయి.", "hi": "यह तिमाही नए कौशल सीखने, संपत्ति योजना और पुराने ऋण चुकाने के लिए अत्यंत अनुकूल है।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Jupiter's supportive transit brings career elevation, spiritual pilgrimage, and household prosperity; perform Subrahmanya & Hanuman Archana on Tuesdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): గురు బలం వల్ల వృత్తిలో ఉన్నతి, తీర్థయాత్రలు మరియు గృహ సౌఖ్యం కలుగుతాయి. మంగళవారం సుబ్రహ్మణ్య/హనుమాన్ అర్చన శుభప్రదం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): गुरु के शुभ गोचर से पदोन्नति, तीर्थयात्रा और पारिवारिक समृद्धि मिलेगी। मंगलवार को हनुमान जी की आराधना करें।"}}, {"rashiEn": "Vrishabha (Taurus)", "rashiTe": "వృషభ రాశి", "rashiHi": "वृषभ राशि", "lord": "Shukra (Venus)", "daily": {"en": "Harmonious domestic atmosphere and steady focus. Good day for financial review, artistic pursuits, and temple visits.", "te": "కుటుంబంలో ఆనందకర వాతావరణం ఉంటుంది. ఆర్థిక ప్రణాళికలు, దైవ దర్శనాలకు అనుకూలమైన రోజు.", "hi": "परिवार में सुखद वातावरण रहेगा। आर्थिक समीक्षा और देव दर्शन के लिए आज का दिन शुभ है।"}, "monthly": {"en": "Gains through long-term investments and supportive elders. Communications with distant relatives bring happy news.", "te": "దీర్ఘకాలిక పెట్టుబడుల ద్వారా లాభాలు, పెద్దల ఆశీస్సులు లభిస్తాయి. బంధువుల నుండి శుభవార్తలు వింటారు.", "hi": "दीर्घकालिक निवेश से लाभ और बड़ों का आशीर्वाद मिलेगा। रिश्तेदारों से शुभ समाचार प्राप्त होगा।"}, "quarterly": {"en": "Stability strengthens across finances and home life. Ideal window for vehicle or home upgrades and family celebrations.", "te": "ఆర్థిక స్థిరత్వం బలపడుతుంది. గృహోపకరణాలు లేదా వాహన కొనుగోలుకు అనుకూల త్రైమాసికం.", "hi": "आर्थिक स्थिरता मजबूत होगी। वाहन या घर की सुख-सुविधाओं में वृद्धि के योग हैं।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): A year of wealth accumulation, melodious family events, and steady career authority; recite Sri Suktam on Fridays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): ధన సంచయం, కుటుంబంలో శుభకార్యాలు మరియు వృత్తి స్థిరత్వం లభిస్తాయి. శుక్రవారం శ్రీసూక్త పారాయణం శుభకరం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): धन संचय, पारिवारिक मांगलिक कार्य और कार्यक्षेत्र में स्थायित्व का वर्ष है। शुक्रवार को श्रीसूक्त का पाठ करें।"}}, {"rashiEn": "Mithuna (Gemini)", "rashiTe": "మిథున రాశి", "rashiHi": "मिथुन राशि", "lord": "Budha (Mercury)", "daily": {"en": "Sharp intellect and persuasive communication open new doors today. Ideal for interviews, technical problem-solving, and learning.", "te": "నేడు మీ వాక్చాతుర్యం, మేధస్సుతో క్లిష్ట సమస్యలను సులభంగా పరిష్కరిస్తారు. ఇంటర్వ్యూలు, నూతన అధ్యయనాలకు అత్యంత అనుకూలం.", "hi": "आज आपकी बुद्धि और संवाद कौशल से कठिन कार्य भी सिद्ध होंगे। साक्षात्कार और अध्ययन के लिए उत्तम दिन है।"}, "monthly": {"en": "Networking and analytical projects flourish this month. Unexpected travel or a new responsibility enhances your visibility.", "te": "ఈ నెల వృత్తిపరమైన పరిచయాలు పెరుగుతాయి. నూతన బాధ్యతల ద్వారా మీ ప్రతిభకు తగిన గుర్తింపు లభిస్తుంది.", "hi": "इस माह नए संपर्क बनेंगे और नई जिम्मेदारियों से आपकी प्रतिष्ठा बढ़ेगी।"}, "quarterly": {"en": "High momentum for certifications, career transitions, and financial diversification. Keep sleep and eye rest balanced.", "te": "సర్టిఫికేషన్లు, కెరీర్ పురోగతి మరియు పొదుపు ప్రణాళికలకు ఈ త్రైమాసికం అద్భుతంగా ఉంటుంది.", "hi": "प्रमाणन, करियर उन्नति और बचत योजनाओं के लिए यह तिमाही अत्यंत फलदायी है।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Expansive growth in knowledge, technology/cloud careers, and family milestones; offer Tulasi Archana to Lord Vishnu on Wednesdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): జ్ఞానం, వృత్తిపరమైన ఉన్నతి మరియు సంతాన/కుటుంబ అభివృద్ధి విశేషంగా ఉంటాయి. బుధవారం విష్ణు సహస్రనామ పారాయణం శుభప్రదం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): ज्ञान, करियर उन्नति और पारिवारिक खुशियों में वृद्धि होगी। बुधवार को विष्णु सहस्रनाम का पाठ करें।"}}, {"rashiEn": "Karkataka (Cancer)", "rashiTe": "కర్కాటక రాశి", "rashiHi": "कर्क राशि", "lord": "Chandra (Moon)", "daily": {"en": "Emotional clarity and intuitive decisions favor home and financial matters. Stay hydrated and prioritize peaceful evening routines.", "te": "మనస్సు ప్రశాంతంగా ఉంటుంది. కుటుంబ విషయాలలో తీసుకునే నిర్ణయాలు సత్ఫలితాలను ఇస్తాయి.", "hi": "मन शांत रहेगा और पारिवारिक मामलों में लिए गए निर्णय लाभदायक सिद्ध होंगे।"}, "monthly": {"en": "Support from mother/elders and steady domestic comfort. Second half brings resolution to a lingering workplace concern.", "te": "మాతృమూర్తి, పెద్దల ఆశీస్సులు లభిస్తాయి. నెల రెండవ భాగంలో వృత్తిపరమైన ఆందోళనలు తొలగిపోతాయి.", "hi": "माता व बड़ों का सहयोग मिलेगा। माह के उत्तरार्ध में कार्यक्षेत्र की चिंताएं दूर होंगी।"}, "quarterly": {"en": "A nurturing quarter for real-estate planning, savings, and spiritual retreats. Avoid overthinking minor delays.", "te": "గృహ, ఆస్తి ప్రణాళికలు మరియు ఆధ్యాత్మిక యాత్రలకు ఈ త్రైమాసికం అనుకూలం.", "hi": "संपत्ति योजना, बचत और आध्यात्मिक यात्राओं के लिए यह तिमाही अनुकूल है।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Jupiter's grace brings domestic harmony, career stability, and sacred river/temple visits; perform Shiva Abhishekam on Mondays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): గురు అనుగ్రహంతో గృహ శాంతి, ఉద్యోగ స్థిరత్వం మరియు పుణ్యక్షేత్ర దర్శనాలు కలుగుతాయి. సోమవారం శివాభిషేకం శుభప్రదం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): गुरु कृपा से गृह सुख, करियर में स्थिरता और तीर्थ दर्शन के योग हैं। सोमवार को शिव अभिषेक करें।"}}, {"rashiEn": "Simha (Leo)", "rashiTe": "సింహ రాశి", "rashiHi": "सिंह राशि", "lord": "Surya (Sun)", "daily": {"en": "Leadership qualities shine today; seniors appreciate your clarity. Avoid rigid arguments and share credit generously.", "te": "నేడు మీ నాయకత్వ లక్షణాలు ప్రకాశిస్తాయి. ఉన్నతాధికారుల ప్రశంసలు పొందుతారు.", "hi": "आज आपके नेतृत्व गुणों की सराहना होगी। वरिष्ठ अधिकारियों का सहयोग मिलेगा।"}, "monthly": {"en": "Strong month for public recognition, promotions, and government/administrative clearances. Keep expenses disciplined.", "te": "ఈ నెల పదోన్నతులు, ప్రభుత్వ/పరిపాలనా పనులలో విజయం లభిస్తుంది. ఖర్చులలో నియంత్రణ అవసరం.", "hi": "इस माह पदोन्नति और प्रशासनिक कार्यों में सफलता मिलेगी। खर्चों पर नियंत्रण रखें।"}, "quarterly": {"en": "Momentum builds in career authority and ancestral/family matters. Regular morning Surya Namaskar boosts vitality.", "te": "వృత్తిలో అధికార యోగం, పితృ సంబంధిత వ్యవహారాలలో అనుకూలత పెరుగుతాయి.", "hi": "कार्यक्षेत्र में अधिकार बढ़ेंगे और पैतृक मामलों में अनुकूलता रहेगी।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Respect, leadership growth, and pilgrimage opportunities rise; chant Aditya Hridayam on Sundays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): సమాజంలో గౌరవం, వృత్తి ఉన్నతి మరియు తీర్థయాత్రా యోగం ఉన్నాయి. ఆదివారం ఆదిత్య హృదయం పఠించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): मान-सम्मान, नेतृत्व वृद्धि और तीर्थयात्रा के योग हैं। रविवार को आदित्य हृदय स्तोत्र का पाठ करें।"}}, {"rashiEn": "Kanya (Virgo)", "rashiTe": "కన్యా రాశి", "rashiHi": "कन्या राशि", "lord": "Budha (Mercury)", "daily": {"en": "Attention to detail brings success in audits, documentation, and technical tasks. A pleasant surprise arrives from a friend.", "te": "సూక్ష్మ పరిశీలనతో పనులను విజయవంతంగా పూర్తి చేస్తారు. మిత్రుల ద్వారా శుభవార్త అందుతుంది.", "hi": "बारीकी से किए गए कार्यों में सफलता मिलेगी। मित्रों से शुभ समाचार प्राप्त होगा।"}, "monthly": {"en": "Financial inflows improve through disciplined budgeting. Health and daily routines stabilize positively.", "te": "క్రమశిక్షణతో కూడిన ఆర్థిక ప్రణాళిక వల్ల ధన లాభం కలుగుతుంది. ఆరోగ్యం మెరుగుపడుతుంది.", "hi": "अनुशासित बजट से धन लाभ होगा और स्वास्थ्य में सुधार आएगा।"}, "quarterly": {"en": "Productive quarter for career specialization, clearing pending paperwork, and strengthening family bonds.", "te": "వృత్తి నైపుణ్యం పెరుగుతుంది. పెండింగ్ పనులు పూర్తయి కుటుంబ బంధాలు బలపడతాయి.", "hi": "करियर विशेषज्ञता और लंबित कार्यों को पूरा करने के लिए यह तिमाही उत्तम है।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Steady prosperity, debt reduction, and spiritual contentment; offer green gram / Tulasi prayers on Wednesdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): ఆర్థిక అభివృద్ధి, రుణ విముక్తి మరియు ఆధ్యాత్మిక తృప్తి లభిస్తాయి. బుధవారం శ్రీమహావిష్ణువును ఆరాధించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): आर्थिक उन्नति, ऋण मुक्ति और आध्यात्मिक संतोष मिलेगा। बुधवार को भगवान विष्णु की पूजा करें।"}}, {"rashiEn": "Tula (Libra)", "rashiTe": "తులా రాశి", "rashiHi": "तुला राशि", "lord": "Shukra (Venus)", "daily": {"en": "Balanced partnerships and diplomacy bring harmony at work and home. Favorable for creative planning and social gatherings.", "te": "సమతుల్య నిర్ణయాలతో ఇంటా బయటా సామరస్యం నెలకొంటుంది. శుభకార్య చర్చలకు అనుకూలం.", "hi": "संतुलित निर्णयों से घर और कार्यस्थल पर सामंजस्य बना रहेगा।"}, "monthly": {"en": "Collaborative ventures and spouse/partner support bring joy. Watch discretionary luxury spending mid-month.", "te": "భాగస్వామ్య వ్యవహారాలు, జీవిత భాగస్వామి సహకారంతో విజయం సాధిస్తారు.", "hi": "साझेदारी के कार्यों और जीवनसाथी के सहयोग से सफलता मिलेगी।"}, "quarterly": {"en": "New professional alliances and long-distance travel open rewarding prospects.", "te": "నూతన వృత్తి ఒప్పందాలు మరియు దూర ప్రయాణాలు లాభదాయకంగా ఉంటాయి.", "hi": "नए व्यावसायिक गठजोड़ और लंबी यात्राएं लाभदायक सिद्ध होंगी।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Auspicious family ceremonies, career elevation, and artistic fulfillment; worship Goddess Mahalakshmi on Fridays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): కుటుంబంలో శుభకార్యాలు, వృత్తిలో పురోగతి కలుగుతాయి. శుక్రవారం మహాలక్ష్మి అష్టోత్తరం పఠించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): परिवार में मांगलिक कार्य और करियर में उन्नति होगी। शुक्रवार को माँ लक्ष्मी की आराधना करें।"}}, {"rashiEn": "Vrischika (Scorpio)", "rashiTe": "వృశ్చిక రాశి", "rashiHi": "वृश्चिक राशि", "lord": "Kuja (Mars)", "daily": {"en": "Deep focus and resilience help you overcome obstacles effortlessly. Trust your research and avoid hasty reactions.", "te": "మీ పట్టుదల, ఏకాగ్రతతో అడ్డంకులను అధిగమిస్తారు. తొందరపాటు నిర్ణయాలకు దూరంగా ఉండండి.", "hi": "आपकी एकाग्रता और दृढ़ संकल्प से बाधाएं दूर होंगी। जल्दबाजी में निर्णय न लें।"}, "monthly": {"en": "Strong month for strategic breakthroughs, hidden gains, and spiritual sadhana. Take care of rest and hydration.", "te": "వ్యూహాత్మక విజయాలకు, ఆధ్యాత్మిక సాధనకు ఈ నెల ఎంతో అనుకూలంగా ఉంటుంది.", "hi": "रणनीतिक सफलता और आध्यात्मिक साधना के लिए यह माह अनुकूल है।"}, "quarterly": {"en": "Transformative progress in career responsibilities and financial discipline; ancestral blessings protect your path.", "te": "వృత్తి బాధ్యతలలో నూతన మార్పులు, ఆర్థిక క్రమశిక్షణ ద్వారా ఉన్నతి సాధిస్తారు.", "hi": "करियर की जिम्मेदारियों में सकारात्मक बदलाव और आर्थिक अनुशासन से लाभ होगा।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Victory over rivals, property/asset growth, and sacred Jyotirlinga pilgrimage; worship Lord Narasimha & Kartikeya.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): శత్రు విజయం, స్థిరాస్తి వృద్ధి మరియు జ్యోతిర్లింగ దర్శన యోగం ఉన్నాయి. శ్రీ నృసింహ స్వామిని ఆరాధించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): विरोधियों पर विजय, संपत्ति वृद्धि और ज्योतिर्लिंग दर्शन के योग हैं। भगवान नृसिंह की उपासना करें।"}}, {"rashiEn": "Dhanus (Sagittarius)", "rashiTe": "ధనుస్సు రాశి", "rashiHi": "धनु राशि", "lord": "Guru (Jupiter)", "daily": {"en": "Optimism, mentorship, and auspicious news brighten your day. Favorable for teaching, travel planning, and temple darshan.", "te": "ఆశావాద దృక్పథం, పెద్దల మార్గదర్శకత్వంతో పనులు సానుకూలమవుతాయి. ఆలయ దర్శనం శుభప్రదం.", "hi": "आशावादी सोच और बड़ों के मार्गदर्शन से कार्य सफल होंगे। मंदिर दर्शन शुभ रहेगा।"}, "monthly": {"en": "Expansion in knowledge, career recognition, and joyful family gatherings define this month.", "te": "జ్ఞానాభివృద్ధి, వృత్తిలో గౌరవం మరియు కుటుంబ వేడుకలతో ఈ నెల ఆనందంగా సాగుతుంది.", "hi": "ज्ञान वृद्धि, कार्यक्षेत्र में सम्मान और पारिवारिक उत्सवों से यह माह सुखद रहेगा।"}, "quarterly": {"en": "Excellent quarter for higher learning, long-term financial growth, and pilgrimages.", "te": "ఉన్నత విద్య, దీర్ఘకాలిక ఆర్థిక వృద్ధి మరియు తీర్థయాత్రలకు ఉత్తమ త్రైమాసికం.", "hi": "उच्च शिक्षा, दीर्घकालिक आर्थिक विकास और तीर्थयात्रा के लिए उत्तम तिमाही।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Guru's blessings bring wisdom, prosperity, children's progress, and spiritual fulfillment; worship Sri Dakshinamurthy / Raghavendra Swamy on Thursdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): గురు అనుగ్రహంతో ఐశ్వర్యం, సంతాన అభివృద్ధి మరియు ఆధ్యాత్మిక ఉన్నతి కలుగుతాయి. గురువారం దక్షిణామూర్తి/రాఘవేంద్ర స్వామిని పూజించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): गुरु की कृपा से समृद्धि, संतान प्रगति और आध्यात्मिक उन्नति होगी। गुरुवार को गुरु आराधना करें।"}}, {"rashiEn": "Makara (Capricorn)", "rashiTe": "మకర రాశి", "rashiHi": "मकर राशि", "lord": "Shani (Saturn)", "daily": {"en": "Disciplined effort yields tangible results today. Stay patient with colleagues and review long-term goals calmly.", "te": "క్రమశిక్షణతో కూడిన శ్రమకు నేడు తగిన ఫలితం లభిస్తుంది. సహనంతో వ్యవహరించండి.", "hi": "अनुशासित परिश्रम का आज सार्थक परिणाम मिलेगा। धैर्य बनाए रखें।"}, "monthly": {"en": "Steady consolidation in career and savings; relief from Sade Sati pressures brings renewed confidence.", "te": "ఉద్యోగం, పొదుపులో స్థిరత్వం పెరుగుతుంది. మానసిక ఒత్తిడులు తగ్గి ఆత్మవిశ్వాసం కలుగుతుంది.", "hi": "करियर और बचत में स्थिरता आएगी। पुराने तनाव कम होने से आत्मविश्वास बढ़ेगा।"}, "quarterly": {"en": "Rewarding quarter for structured projects, real-estate planning, and family responsibilities.", "te": "ప్రణాళికాబద్ధమైన ప్రాజెక్టులు, గృహ బాధ్యతలలో విజయం సాధిస్తారు.", "hi": "सुनियोजित परियोजनाओं और पारिवारिक जिम्मेदारियों में सफलता मिलेगी।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Freedom from prolonged delays, steady wealth rise, and career authority; light sesame oil lamp for Hanuman / Shiva on Saturdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): దీర్ఘకాలిక ఆటంకాలు తొలగి ఆర్థిక, వృత్తిపరమైన ఉన్నతి కలుగుతుంది. శనివారం హనుమాన్/శివ ఆరాధన శుభప్రదం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): लंबे समय से रुके कार्य पूरे होंगे और आर्थिक उन्नति होगी। शनिवार को हनुमान जी और शिव जी की पूजा करें।"}}, {"rashiEn": "Kumbha (Aquarius)", "rashiTe": "కుంభ రాశి", "rashiHi": "कुंभ राशि", "lord": "Shani (Saturn)", "daily": {"en": "Innovative ideas and community support bring positive momentum. Good day for technology, networking, and charity.", "te": "నూతన ఆలోచనలు, మిత్రుల సహకారంతో పనులు వేగంగా పూర్తవుతాయి. దానధర్మాలు శుభప్రదం.", "hi": "नए विचारों और मित्रों के सहयोग से कार्य गति पकड़ेंगे। दान-पुण्य शुभ रहेगा।"}, "monthly": {"en": "Income flow improves while spiritual discipline keeps your mind centered. Avoid overcommitting your schedule.", "te": "ఆదాయం మెరుగుపడుతుంది. ఆధ్యాత్మిక క్రమశిక్షణ వల్ల మనశ్శాంతి లభిస్తుంది.", "hi": "आय में सुधार होगा और आध्यात्मिक अनुशासन से मानसिक शांति मिलेगी।"}, "quarterly": {"en": "Progress in technical leadership, financial reserves, and harmonious family decisions.", "te": "వృత్తి నాయకత్వం, ఆర్థిక నిల్వలు మరియు కుటుంబ నిర్ణయాలలో పురోగతి ఉంటుంది.", "hi": "तकनीकी नेतृत्व, आर्थिक बचत और पारिवारिक निर्णयों में प्रगति होगी।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Hard work matures into lasting stability, foreign/distant connections, and spiritual wisdom; chant Rudram & Hanuman Chalisa.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): కష్టానికి తగిన ప్రతిఫలం, స్థిరత్వం మరియు దూర ప్రాంత లాభాలు కలుగుతాయి. రుద్రాభిషేకం, హనుమాన్ చాలీసా పఠించండి.", "hi": "श्री पराभव नाम संवत्सर (2026–27): परिश्रम से स्थायी सफलता, दूरस्थ संपर्क और आध्यात्मिक ज्ञान प्राप्त होगा। रुद्राभिषेक व हनुमान चालीसा का पाठ करें।"}}, {"rashiEn": "Meena (Pisces)", "rashiTe": "మీన రాశి", "rashiHi": "मीन राशि", "lord": "Guru (Jupiter)", "daily": {"en": "Intuition, creativity, and compassion guide you well today. Favorable for spiritual reading, family peace, and wise financial choices.", "te": "నేడు మీ అంతర్దృష్టి, సృజనాత్మకత సత్ఫలితాలను ఇస్తాయి. కుటుంబ శాంతి, దైవ చింతన పెరుగుతాయి.", "hi": "आज आपकी अंतर्दृष्टि और रचनात्मकता से लाभ होगा। परिवार में शांति रहेगी।"}, "monthly": {"en": "Supportive mentors and steady progress in creative or advisory roles. Prioritize balanced diet and rest.", "te": "గురువులు, పెద్దల సహకారం లభిస్తుంది. వృత్తిలో నిలకడైన పురోగతి ఉంటుంది.", "hi": "गुरुजनों का सहयोग मिलेगा और कार्यक्षेत्र में निरंतर प्रगति होगी।"}, "quarterly": {"en": "A meaningful quarter for spiritual pilgrimages, skill mastery, and strengthening household savings.", "te": "పుణ్యక్షేత్ర దర్శనాలు, నైపుణ్యాభివృద్ధి మరియు పొదుపు పెరుగుదలకు అనుకూల త్రైమాసికం.", "hi": "तीर्थयात्रा, कौशल विकास और बचत बढ़ाने के लिए यह तिमाही अत्यंत शुभ है।"}, "yearly": {"en": "Sri Parabhava Nama Samvatsaram (2026–27): Spiritual elevation, graceful handling of responsibilities, and family blessings; worship Lord Vishnu & Guru Dattatreya on Thursdays.", "te": "శ్రీ పరాభవ నామ సంవత్సరం (2026–27): ఆధ్యాత్మిక ఉన్నతి, బాధ్యతల నిర్వహణలో విజయం మరియు కుటుంబ సౌఖ్యం లభిస్తాయి. గురువారం దత్తాత్రేయ/విష్ణు ఆరాధన శుభప్రదం.", "hi": "श्री पराभव नाम संवत्सर (2026–27): आध्यात्मिक उन्नति, जिम्मेदारियों में सफलता और पारिवारिक सुख मिलेगा। गुरुवार को भगवान विष्णु व दत्तात्रेय की पूजा करें।"}}];
    const FESTIVALS = [{"date": "2026-01-14", "te": "భోగి పండుగ (Bhogi Panduga)", "en": "Bhogi Panduga — First Day of Sankranti", "desc": "Dawn Bhogi Mantalu bonfire, Gobbemmalu rangoli & evening Regi Pallu blessings for children.", "story": ["Origin & Meaning: Bhogi marks the final day of the sacred Dhanurmasam and the Sun's transition into Uttarayanam. The word 'Bhogi' derives from 'Bhoga' (prosperity and abundance), thanking Lord Indra—the Vedic deity of rain and clouds—for bountiful harvests.", "Puranic Legend (Andal & Vamana Avatar): In Vaishnava tradition, Bhogi celebrates the divine marriage of Goda Devi (Andal) with Lord Ranganatha after her 30-day Thiruppavai vrata. In the evening, families perform 'Bhogi Pallu'—pouring jujube berries (Regi Pallu), sugarcane pieces, flowers, and coins over young children to invoke the protective grace of Lord Narayana, who appeared as the young Vamana (Badari Narayana) amidst jujube groves.", "Traditional Observances: At dawn, households light 'Bhogi Mantalu' bonfires using dried wood and cow-dung cakes to discard old negativity and welcome fresh solar warmth, followed by decorating courtyards with colorful Muggulu and cow-dung Gobbemmalu."], "teStory": ["ఆవిర్భావం & అర్థం: భోగి పండుగ ధనుర్మాసపు ముగింపును మరియు సూర్యుని ఉత్తరాయణ ప్రవేశాన్ని సూచిస్తుంది. వర్షాధిపతి ఇంద్రుడికి మరియు పంటల సమృద్ధికి కృతజ్ఞతగా భోగి జరుపుకుంటారు.", "పురాణ గాథ: వైష్ణవ సంప్రదాయంలో గోదాదేవి (ఆండాళ్) తిరుప్పావై వ్రతానంతరం శ్రీ రంగనాథునితో జరిగిన దివ్య కల్యాణాన్ని భోగిగా భావిస్తారు. సాయంత్రం చిన్నారులపై రేగుపళ్లు, చెరకు ముక్కలు, పూలు పోసి భోగిపళ్లు వేస్తారు.", "ఆచారాలు: తెల్లవారుజామున భోగి మంటలు వేసి, ముగ్గులు, గొబ్బెమ్మలతో వాకిళ్లను అలంకరిస్తారు."], "hiStory": ["उत्पत्ति एवं महत्व: भोगी पर्व धनुर्मास के समापन और सूर्य के उत्तरायण होने का प्रतीक है। वर्षा व समृद्धि के देवता इंद्र को धन्यवाद दिया जाता है।", "पौराणिक प्रसंग: वैष्णव परंपरा में गोदादेवी (अंडाल) के तिरुप्पावै व्रत के पूर्ण होने और संध्या को बच्चों पर बेर व गन्ने के टुकड़ों से भोगी पल्लू की परंपरा निभाई जाती है।", "परंपराएं: प्रातः भोगी की अग्नि प्रज्वलित कर रंगोली और गोबर के गोब्बेम्मलु से आंगन सजाया जाता है।"]}, {"date": "2026-01-15", "te": "మకర సంక్రాంతి (Makara Sankranti)", "en": "Makara Sankranti — Pedda Panduga", "desc": "Sun enters Makara Rashi; Uttarayanam Punya Kalam, Ariselu & Gangireddulu.", "story": ["Astronomical & Puranic Significance: Makara Sankranti celebrates the Sun God (Surya Bhagavan) entering Makara Rashi (Capricorn), initiating the six-month auspicious northward journey known as Uttarayanam—considered the daytime of the Devas.", "Story of Surya & Shani and Bhishma Pitamaha: According to the Puranas, on this day Surya visits the house of his son Shani (ruler of Makara Rashi), forgiving past estrangement and symbolizing harmony between father and son. In the Mahabharata, grandsire Bhishma Pitamaha—who possessed the boon of Ichcha Mrityu (death at will)—waited on his bed of arrows specifically for Uttarayanam to dawn on Makara Sankranti before departing his mortal body to attain Moksha.", "Telugu Cultural Celebrations: Known as 'Pedda Panduga', families prepare Ariselu, Sakinalu, Bobbatlu, and Til-Gud sweets, welcome Haridasulu singing Hari keertans, decorate Gangireddulu (ceremonial bulls), and fly kites to absorb healing morning sunlight."], "teStory": ["ఖగోళ & పురాణ విశేషం: సూర్యుడు మకర రాశిలోకి ప్రవేశించే పుణ్యకాలమే మకర సంక్రాంతి. ఇక్కడి నుండి ఉత్తరాయణ పుణ్యకాలం ప్రారంభమవుతుంది.", "సూర్య – శని & భీష్మ కథ: ఈ రోజు సూర్యభగవానుడు తన కుమారుడైన శని ఇంటికి వస్తాడని పురాణ కథనం. భీష్మ పితామహుడు ఉత్తరాయణ పుణ్యకాలం కోసం అంపశయ్యపై నిరీక్షించి సంక్రాంతి వేళ తనువు చాలించాడని మహాభారతం చెబుతోంది.", "తెలుగు సంప్రదాయం: పెద్ద పండుగగా జరుపుకునే సంక్రాంతి వేళ అరిసెలు, పిండివంటలు, గంగిరెద్దుల సందడి ప్రత్యేక ఆకర్షణ."], "hiStory": ["खगोलीय व पौराणिक महत्व: सूर्य के मकर राशि में प्रवेश करने पर मकर संक्रांति मनाई जाती है और यहीं से उत्तरायण पुण्यकाल आरंभ होता है।", "सूर्य-शनि व भीष्म कथा: मान्यता है कि इस दिन सूर्यदेव अपने पुत्र शनि के घर आते हैं। महाभारत में भीष्म पितामह ने उत्तरायण की प्रतीक्षा कर इसी पुण्यकाल में देह त्याग किया था।", "उत्सव: तेलुगु क्षेत्रों में इसे 'पेद्दा पंडुगा' (बड़ा पर्व) के रूप में पारंपरिक व्यंजनों के साथ मनाया जाता है।"]}, {"date": "2026-01-16", "te": "కనుమ పండుగ (Kanuma Panduga)", "en": "Kanuma — Cattle & Harvest Gratitude Festival", "desc": "Worship of Gomata, farm cattle & Govardhana Puja on the third day of Sankranti.", "story": ["Puranic Story of Govardhana Giri: Kanuma honors cattle, agriculture, and the natural ecosystem that sustains human life. It is deeply linked to Lord Sri Krishna lifting Mount Govardhana on his little finger for seven days to shelter the villagers and cows of Gokulam from Indra's torrential rains, teaching reverence for nature and livestock.", "Observances in Telugu Households: Farmers bathe and adorn cows and bulls with turmeric, kumkum, bells, and marigold garlands, feeding them Pongal and sweet rice. In rural Andhra Pradesh and Telangana, traditional 'Prabhala Teertham' temple processions and family gatherings take place."], "teStory": ["కృతజ్ఞతా పండుగ: సంక్రాంతి మరుసటి రోజు కనుమ పండుగ. వ్యవసాయ పనులలో రైతుకు అండగా నిలిచే గోవులకు, ఎద్దులకు కృతజ్ఞత తెలిపే రోజు.", "ఆచారాలు: గోపూజ చేసి, పసుపు కుంకుమలతో అలంకరించి, నైవేద్యం సమర్పిస్తారు. కనుమ రోజు ప్రయాణాలు చేయకుండా కుటుంబ సభ్యులతో కలిసి వేడుక చేసుకుంటారు."], "hiStory": ["कृतज्ञता पर्व: संक्रांति के अगले दिन कनुमा पर्व में कृषि व परिवार की सेवा करने वाले गोधन व बैलों के प्रति कृतज्ञता व्यक्त की जाती है।", "परंपराएं: गोपूजा कर उन्हें सजाया जाता है और परिवार के साथ उत्सव मनाया जाता है।"]}, {"date": "2026-01-23", "te": "వసంత పంచమి (Vasant Panchami / Sri Panchami)", "en": "Vasant Panchami — Saraswati Puja & Aksharabhyasam", "desc": "Magha Shukla Panchami worship of Goddess Saraswati & initiation of learning.", "story": ["Manifestation of Goddess Saraswati: Celebrated on Magha Shukla Panchami, Vasant Panchami marks the arrival of spring and the manifestation of Goddess Saraswati—the deity of knowledge, music, arts, and speech—emerging from Lord Brahma's creation with her Veena, sacred scriptures, and swan.", "Aksharabhyasam Tradition: Across Basara Gnana Saraswati Temple, Wargal, and Telugu homes, parents perform 'Aksharabhyasam'—guiding young children to write 'Om Namah Shivaya' or 'Sri Saraswatyai Namah' on a plate of raw rice, invoking lifelong wisdom."], "teStory": ["సరస్వతీ దేవి ఆవిర్భావం: మాఘ శుద్ధ పంచమి నాడు జరుపుకునే వసంత పంచమి వసంత రుతువు ఆగమనానికి మరియు జ్ఞాన, కళా, వాగ్దేవి సరస్వతీ ఆవిర్భావానికి ప్రతీక.", "అక్షరాభ్యాసం: బాసర జ్ఞాన సరస్వతీ ఆలయం, వర్గల్ మరియు తెలుగు ఇళ్లలో చిన్నారులకు బియ్యంలో అక్షరాభ్యాసం జరిపిస్తారు.", "ఆచారాలు: అమ్మవారికి పసుపు రంగు వస్త్రాలు, పుష్పాలు, ప్రసాదాలు సమర్పించి విద్యాబుద్ధులు ప్రసాదించమని ప్రార్థిస్తారు."], "hiStory": ["मां सरस्वती का प्राकट्य: माघ शुक्ल पंचमी को वसंत पंचमी मनाई जाती है, जो ज्ञान, कला, संगीत और वाणी की देवी सरस्वती के प्राकट्य का पावन दिन है।", "अक्षराभ्यास: बासर, वर्गल व घरों में बच्चों का अक्षराभ्यास कराकर विद्या व बुद्धि का आशीर्वाद लिया जाता है।"]}, {"date": "2026-01-25", "te": "రథ సప్తమి (Ratha Saptami)", "en": "Ratha Saptami — Surya Jayanti", "desc": "Birthday of Surya Bhagavan; ceremonial bath with 7 Jilledu leaves.", "story": ["Surya Jayanti Legend: Falling on Magha Shukla Saptami, Ratha Saptami commemorates the birth of Surya Bhagavan to Sage Kashyapa and Aditi, and the day Surya turned his seven-horse golden chariot (driven by Aruna) toward the Northern Hemisphere.", "Arka Patra Snanam Ritual: Devotees take a sacred sunrise bath placing seven Jilledu (Calotropis / Arka) leaves and Regi berries on their head, shoulders, knees, and feet while chanting 'Sapta Sapta Maha Sapta', praying for vitality, eyesight, and freedom from ailments. At Tirumala, Lord Malayappa Swamy rides seven different Vahanams from dawn to night."], "teStory": ["సూర్య జయంతి: మాఘ శుద్ధ సప్తమిని రథసప్తమి లేదా సూర్య జయంతిగా జరుపుకుంటారు. సూర్యుడు ఏడు గుర్రాల రథంపై ఉత్తర దిశగా పయనించే పుణ్యదినం.", "ఆచారాలు: ఉదయాన్నే జిల్లేడు ఆకులు, రేగు ఆకులు తలపై ఉంచుకుని స్నానం చేసి, ఆరుబయట పొంగలి చేసి సూర్యభగవానునికి నివేదిస్తారు."], "hiStory": ["सूर्य जयंती: माघ शुक्ल सप्तमी को रथसप्तमी के रूप में सूर्यदेव की आराधना की जाती है।", "परंपराएं: प्रातः स्नान कर सूर्यदेव को अर्घ्य व नैवेद्य अर्पित किया जाता है।"]}, {"date": "2026-02-15", "te": "మహా శివరాత్రి (Maha Shivaratri)", "en": "Maha Shivaratri — Lingodbhava & Shiva-Parvati Kalyanam", "desc": "Magha Bahula Chaturdashi night-long Jagaram, Bilva Archana & Rudrabhishekam.", "story": ["Lingodbhava Puranic Legend: On Magha Bahula Chaturdashi at midnight (Lingodbhava Kala), Lord Shiva manifested as an infinite, radiant column of fire (Jyotirlinga) to resolve a dispute of supremacy between Lord Brahma and Lord Vishnu, revealing the boundless nature of Supreme Consciousness.", "Samudra Manthan & Shiva-Parvati Marriage: Shivaratri also celebrates the night Lord Shiva swallowed the deadly Halahala poison emerging from the churning of the ocean (Samudra Manthan) to save the universe, holding it in His throat (Neelakantha), as well as the sacred wedding night of Shiva and Goddess Parvati.", "Four-Praharam Worship: Devotees observe strict fasting, night-long Jagaram (vigil), chanting of 'Om Namah Shivaya' and Sri Rudram, and Abhishekam with milk, curd, honey, ghee, sugar, and Bilva leaves across Srisailam, Vemulawada, Srikalahasti, and Kashi."], "teStory": ["మహాశివరాత్రి: మాఘ బహుళ చతుర్దశి రాత్రి పరమశివుడు లింగోద్భవ రూపంలో ఆవిర్భవించిన పవిత్ర రాత్రి.", "జాగరణ & అభిషేకం: రోజంతా ఉపవాసం ఉండి రాత్రి నాలుగు యామాలలో రుద్రాభిషేకం, బిల్వార్చన చేస్తూ శివనామ స్మరణతో జాగరణ చేస్తారు."], "hiStory": ["महाशिवरात्रि: माघ कृष्ण चतुर्दशी की पावन रात्रि में भगवान शिव के लिंगोद्भव रूप का पूजन व रात्रि जागरण किया जाता है।"]}, {"date": "2026-03-03", "te": "హోళీ పౌర్ణమి (Holi & Kamadahana Pournami)", "en": "Holi Pournami — Triumph of Prahlada & Spring Colors", "desc": "Phalguna Pournami Holika Dahan & joyful celebration of divine devotion.", "story": ["Legend of Bhakta Prahlada & Holika: Demon king Hiranyakashipu enlisted his sister Holika—who possessed a fire-proof shawl—to sit in a blazing pyre with young Prahlada on her lap. By the grace of Lord Narayana, whom Prahlada chanted unceasingly, the shawl flew onto Prahlada, reducing Holika to ashes and proving that supreme devotion conquers all evil.", "Radha-Krishna Vasantotsavam: In Vrindavan and across India, Holi also celebrates the eternal playful love of Radha and Krishna in spring, marking the transition of seasons with natural colors and community harmony."], "teStory": ["హోళీ & కామదహనం: వసంత ఆగమన వేడుకగా కామదహనం మరియు రంగుల హోళీ పండుగను ఆనందంగా జరుపుకుంటారు.", "పురాణ కథ: భక్తుడైన ప్రహ్లాదుని రక్షణ మరియు అధర్మంపై ధర్మ విజయాన్ని ఈ పండుగ స్ఫూర్తిగా నిలుపుతుంది."], "hiStory": ["होली व होलिका दहन: वसंत के स्वागत और भक्त प्रह्लाद की रक्षा व धर्म की विजय के प्रतीक रूप में होली मनाई जाती है।"]}, {"date": "2026-03-19", "te": "శ్రీ పరాభవ నామ ఉగాది (Ugadi — Telugu New Year)", "en": "Ugadi — Telugu & Kannada New Year", "desc": "Chaitra Shuddha Padyami; Ugadi Pachadi (Shadruchulu) & Panchanga Shravanam.", "story": ["Creation of the Universe (Yugadi): 'Ugadi' (Yuga + Adi) marks the beginning of a new cosmic age on Chaitra Shuddha Padyami, the exact moment Lord Brahma commenced the creation of the universe, time, planets, and constellations.", "Philosophy of Ugadi Pachadi (Six Tastes): Families begin the year by tasting 'Ugadi Pachadi' made of six symbolic ingredients representing all emotions of life: Neem flowers (bitterness/sadness), Jaggery (sweetness/joy), Raw Mango (tanginess/surprises), Tamarind (sourness/challenges), Salt (fear/zest), and Pepper/Chili (anger).", "Panchanga Shravanam: In the evening, families and temples gather for 'Panchanga Shravanam', listening to the Siddhanti read the annual planetary almanac, rainfall forecast, and Rashi Phalalu for the new year."], "teStory": ["తెలుగు నూతన సంవత్సరం (ఉగాది): చైత్ర శుద్ధ పాడ్యమి నాడు శ్రీ పరాభవ నామ సంవత్సర ఉగాది వేడుకలు ఘనంగా జరుగుతాయి.", "ఉగాది పచ్చడి: తీపి, పులుపు, కారం, చేదు, వగరు, ఉప్పు ఆరు రుచుల సమ్మేళనమైన ఉగాది పచ్చడి జీవితంలోని కష్టసుఖాలను సమభావంతో స్వీకరించాలని బోధిస్తుంది."], "hiStory": ["युगादि (तेलुगु नववर्ष): चैत्र शुक्ल प्रतिपदा को पराभव नाम संवत्सर के युगादि पर्व पर नीम-गुड़ का प्रसाद ग्रहण कर नववर्ष का स्वागत किया जाता है।"]}, {"date": "2026-03-27", "te": "శ్రీరామ నవమి (Sri Rama Navami)", "en": "Sri Rama Navami — Birth & Celestial Wedding of Sri Rama", "desc": "Chaitra Shuddha Navami Sita Rama Kalyanam, Panakam & Vadapappu.", "story": ["Avatara of Maryada Purushottama: Celebrated on Chaitra Shuddha Navami in Punarvasu Nakshatra at Abhijit Muhurtham (noon), Sri Rama Navami marks the birth of Lord Sri Rama to King Dasharatha and Queen Kausalya in Ayodhya to vanquish Ravana and uphold Dharma.", "Sita Rama Kalyanam at Bhadrachalam & Vontimitta: In Telugu tradition, Sri Rama Navami is celebrated as the celestial wedding anniversary (Kalyanotsavam) of Sri Sita and Rama. At Bhadrachalam and Vontimitta, priests perform the sacred wedding with pearl Talambralu, while devotees distribute cooling Panakam (jaggery-pepper drink), Vadapappu (soaked moong dal), and Chalimidi."], "teStory": ["శ్రీరామ నవమి: చైత్ర శుద్ధ నవమి నాడు మధ్యాహ్నం అభిజిత్ లగ్నంలో అయోధ్యలో శ్రీరామచంద్రుడు జన్మించిన పవిత్ర తిథి.", "సీతారాముల కల్యాణం: ఆలయాలలో సీతారాముల కల్యాణ మహోత్సవం, వడపప్పు, పానకం, కోసంబరి ప్రసాదాల పంపిణీ జరుగుతుంది."], "hiStory": ["श्रीराम नवमी: चैत्र शुक्ल नवमी को मर्यादा पुरुषोत्तम भगवान श्रीराम के जन्मोत्सव पर भजन, पूजन व उत्सव मनाए जाते हैं।"]}, {"date": "2026-04-02", "te": "హనుమాన్ జయంతి (Chaitra Hanuman Purnima)", "en": "Hanuman Purnima — Birth of Chiranjeevi Anjaneya", "desc": "Chaitra Pournami Sindhoora Archana, Sundarakanda Parayanam & Vadamala.", "story": ["Birth of Vayuputra Hanuman: Celebrated on Chaitra Pournami (and Vaishakha Bahula Dashami in Telugu states), this sacred day honors the birth of Lord Hanuman to Mata Anjana and Kesari with the blessings of Vayu Deva and Lord Shiva.", "Significance of Sindhooram: Devi Sita once explained to Hanuman that she applied vermilion (Sindhooram) in her hair parting for Lord Rama's long life; out of boundless devotion, Hanuman covered His entire body in Sindhooram. Devotees offer Sindhooram, betel leaf garlands (Aakupuja), and Vadamala while reciting Hanuman Chalisa and Sundarakanda."], "teStory": ["పండుగ విశేషం: హనుమాన్ జయంతి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: హనుమాన్ జయంతి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-04-20", "te": "అక్షయ తృతీయ (Akshaya Tritiya)", "en": "Akshaya Tritiya — Eternal Prosperity & Chandanotsavam", "desc": "Vaishakha Shuddha Tritiya; Simhachalam Nijaroopa Darshanam & Parasurama Jayanti.", "story": ["Meaning of 'Akshaya' (Imperishable): Falling on Vaishakha Shuddha Tritiya when both the Sun and Moon are at their peak exaltation, any charity, japa, homam, or auspicious beginning undertaken on this day yields imperishable ('Akshaya') merit.", "Multiple Puranic Milestones: Akshaya Tritiya marks the birth of Lord Parasurama (6th avatar of Vishnu), the descent of Goddess Ganga to Earth, the gifting of the inexhaustible Akshaya Patra by Surya to the Pandavas during exile, and the day Lord Krishna blessed his childhood friend Sudama with limitless prosperity from a handful of beaten rice (Atukulu).", "Simhachalam Chandanotsavam: On this sole day of the year, the sandalwood paste covering Sri Varaha Lakshmi Narasimha Swamy at Simhachalam is removed for 12 hours of Nijaroopa Darshanam."], "teStory": ["అక్షయ తృతీయ: వైశాఖ శుద్ధ తదియ నాడు చేసే దానం, జపం, పూజ మరియు శుభకార్యాలు అక్షయ ఫలితాలను ఇస్తాయని శాస్త్ర వచనం.", "పురాణ కథ: కృతయుగ ఆరంభం, గంగావతరణం మరియు కుచేలునికి శ్రీకృష్ణుడు అఖండ సంపదను ప్రసాదించిన రోజుగా ప్రసిద్ధి."], "hiStory": ["अक्षय तृतीया: वैशाख शुक्ल तृतीया को किए गए दान, जप व शुभ कर्म का फल कभी क्षय नहीं होता।"]}, {"date": "2026-05-01", "te": "నృసింహ జయంతి (Sri Narasimha Jayanti)", "en": "Sri Narasimha Jayanti — Appearance of Ugra Narasimha", "desc": "Vaishakha Shuddha Chaturdashi twilight worship of Prahlada Varada Narasimha.", "story": ["Manifestation from the Pillar: At twilight (Godhuli Vela) on Vaishakha Shuddha Chaturdashi in Swati Nakshatra, when tyrant Hiranyakashipu struck a palace pillar asking 'Is your Hari inside this pillar?', Lord Maha Vishnu burst forth in the awe-inspiring half-man, half-lion form of Sri Narasimha to protect young Prahlada without violating Brahma's boons.", "Worship at Yadadri & Ahobilam: Devotees fast until sunset and offer Panakam, Vadapappu, and Narasimha Kavacham prayers across Yadadri, Ahobilam, Simhachalam, and Mangalagiri."], "teStory": ["పండుగ విశేషం: నృసింహ జయంతి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: నృసింహ జయంతి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-07-16", "te": "తొలి ఏకాదశి (Toli Ekadashi / Shayani Ekadashi)", "en": "Toli Ekadashi — Beginning of Chaturmasya Vratam", "desc": "Ashadha Shuddha Ekadashi; Lord Vishnu enters Yoga Nidra & Pelala Pindi naivedyam.", "story": ["Yoga Nidra & Chaturmasya: Celebrated on Ashadha Shuddha Ekadashi, Toli Ekadashi marks the day Lord Maha Vishnu enters cosmic Yoga Nidra on Adi Sesha in the Milk Ocean (Ksheera Sagara) for four months until Utthana Ekadashi in Kartika Masam, inaugurating the sacred Chaturmasya Vratam.", "Telugu Tradition of Pelala Pindi: In Telangana and Andhra Pradesh, Toli Ekadashi is the very first major festival of the Telugu calendar year after Ugadi. Households fast and offer 'Pelala Pindi' (roasted jowar/corn flour mixed with jaggery and cardamom), symbolizing warmth and immunity at the onset of the monsoon."], "teStory": ["పండుగ విశేషం: తొలి ఏకాదశి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: తొలి ఏకాదశి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-07-29", "te": "గురు పూర్ణిమ (Guru Purnima / Vyasa Purnima)", "en": "Guru Purnima — Tribute to Maharshi Veda Vyasa", "desc": "Ashadha Pournami worship of Adi Guru Veda Vyasa & spiritual teachers.", "story": ["Birth of Maharshi Krishna Dvaipayana Vyasa: Ashadha Pournami honors the birth of Sage Veda Vyasa, who classified the eternal Vedas into four (Rig, Yajur, Sama, Atharva), authored the Mahabharata, Srimad Bhagavatam, and 18 Puranas, and established the Guru-Shishya Parampara.", "Shirdi & Sringeri Celebrations: Millions of devotees visit Shirdi Sai Baba Samadhi Mandir, Sringeri Sharada Peetham, and Mantralayam to offer Paduka Puja and seek their Guru's grace."], "teStory": ["పండుగ విశేషం: గురు పూర్ణిమ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: గురు పూర్ణిమ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-08-02", "te": "తెలంగాణ బోనాలు (Telangana Ashadha Bonalu)", "en": "Telangana Bonalu — Mahankali Jatara", "desc": "Traditional Bonam pot offering to Goddess Mahankali across Hyderabad & Secunderabad.", "story": ["Historical Origin (1813 AD): Bonalu ('Bhojanamu' — sacred feast) originated in the early 19th century when a devastating plague struck the twin cities of Hyderabad and Secunderabad. Military battalion soldiers stationed at Ujjain prayed to Goddess Mahankali, vowing to install her idol and offer Bonam upon returning safely; upon their return, the plague subsided.", "Cultural Rituals (Ghatam, Pothuraju & Rangam): Women carry decorated brass or clay pots filled with cooked rice, jaggery, curd, and neem leaves topped with a lit lamp on their heads to Ujjaini Mahankali (Secunderabad), Golconda Jagadambika, and Lal Darwaza temples, accompanied by Pothuraju dances and the prophetic 'Rangam' oracle."], "teStory": ["పండుగ విశేషం: తెలంగాణ బోనాలు పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: తెలంగాణ బోనాలు एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-08-17", "te": "నాగ పంచమి (Naga Panchami)", "en": "Naga Panchami — Worship of Ananta, Vasuki & Subrahmanya", "desc": "Shravana Shuddha Panchami milk & turmeric offerings at Valmikam (ant-hills).", "story": ["Puranic Legend of Takshaka & Janamejaya: Celebrated on Shravana Shuddha Panchami, Naga Panchami commemorates the day Sage Astika halted King Janamejaya's Sarpa Satra (serpent sacrifice), saving the Naga race, and also marks Lord Krishna's victory over the venomous serpent Kaliya in the Yamuna River.", "Subrahmanya & Naga Devata Grace: Devotees offer cow milk, turmeric, kumkum, and soaked pulses at sacred ant-hills and Naga shrines (like Kukke Subramanya and Mannarasala) for family health and progeny."], "teStory": ["పండుగ విశేషం: నాగ పంచమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: నాగ పంచమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-08-21", "te": "వరలక్ష్మీ వ్రతం (Varalakshmi Vratam)", "en": "Varalakshmi Vratam — Shravana Friday Lakshmi Puja", "desc": "Auspicious Shravana Friday Kalasha Puja invoking Ashta Lakshmi.", "story": ["Story of Charumathi Devi: Narrated by Lord Shiva to Goddess Parvati in the Bhavishyottara Purana, Goddess Mahalakshmi appeared in the dream of a virtuous woman named Charumathi in Kundinapura, instructing her to perform Varalakshmi Vratam on the Friday preceding Shravana Pournami. Worshipping Varalakshmi grants the combined blessings of all eight forms of Lakshmi (Ashta Lakshmi).", "Kalasha & Toram Rituals: Married women establish a decorated Kalasham with coconut, mango leaves, and a silver/brass Lakshmi face, tying a nine-knotted sacred thread (Toram) on their right wrist and offering nine varieties of Naivedyam."], "teStory": ["పండుగ విశేషం: వరలక్ష్మీ వ్రతం పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వరలక్ష్మీ వ్రతం एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-08-28", "te": "రాఖీ పౌర్ణమి & శ్రావణ పూర్ణిమ (Raksha Bandhan & Hayagriva Jayanti)", "en": "Raksha Bandhan & Jandhyala Purnima", "desc": "Shravana Pournami Upakarma, Hayagriva Jayanti & sibling bond festival.", "story": ["Sacred Thread & Puranic Legends: On Shravana Pournami, Goddess Lakshmi tied a sacred protective thread (Raksha) on King Bali's wrist to request Lord Vishnu's return from Sutala, and Draupadi tore a strip of her silk sari to bandage Lord Krishna's bleeding finger—to which Krishna responded by protecting her honor in the Kaurava court.", "Upakarma (Jandhyala Purnima): Vedic scholars also perform annual Upakarma and Yajnopavita renewal on this day alongside Sri Hayagriva Jayanti."], "teStory": ["పండుగ విశేషం: రాఖీ పౌర్ణమి & శ్రావణ పూర్ణిమ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: రాఖీ పౌర్ణమి & శ్రావణ పూర్ణిమ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-09-04", "te": "శ్రీకృష్ణాష్టమి (Sri Krishna Janmashtami)", "en": "Sri Krishna Janmashtami — Gokulashtami", "desc": "Shravana Bahula Ashtami midnight Rohini Nakshatra birth of Bala Krishna.", "story": ["Midnight Avatara in Mathura: Born at midnight on Shravana Bahula Ashtami under Rohini Nakshatra inside King Kamsa's prison in Mathura to Devaki and Vasudeva, Lord Sri Krishna manifested in His four-armed Vishnu form before assuming the form of an infant whom Vasudeva carried across the parted Yamuna River to Nanda and Yashoda in Gokulam.", "Utlotsavam & Bala Gopala Worship: Devotees fast until midnight, draw tiny baby Krishna footprints with rice flour leading into the puja room, offer butter, Avalakki (beaten rice), and milk sweets, and celebrate Utlotsavam (Dahi Handi)."], "teStory": ["పండుగ విశేషం: శ్రీకృష్ణాష్టమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: శ్రీకృష్ణాష్టమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-09-14", "te": "వినాయక చవితి (Vinayaka Chavithi)", "en": "Vinayaka Chavithi — Ganesh Chaturthi", "desc": "Bhadrapada Shuddha Chaturthi clay Ganesha Puja & 21 Patri Archana.", "story": ["Creation & Re-Birth of Gajanana: Celebrated on Bhadrapada Shuddha Chaturthi, Goddess Parvati sculpted a boy from fragrant sandalwood-turmeric paste and breathed life into him to guard her chamber. When Lord Shiva restored his head with that of an elephant, He appointed him 'Ganapati'—leader of the Ganas and Vighnaharta, worshipped first before every auspicious undertaking.", "Syamantaka Mani Katha & 21 Patri Puja: Devotees install eco-friendly clay idols (Matti Vinayakudu), perform Ekavimshati (21 sacred leaves) Puja, offer Kudumulu and Undrallu, and listen to the Syamantaka Mani story to ward off false accusations (Neela Apavada)."], "teStory": ["పండుగ విశేషం: వినాయక చవితి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వినాయక చవితి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-10-11", "te": "బతుకమ్మ & దేవీ నవరాత్రులు (Bathukamma & Sharad Navaratri)", "en": "Engili Pula Bathukamma & Sharad Navaratri Begins", "desc": "Ashwayuja Shuddha Padyami Ghatasthapana & 9-day floral Bathukamma festival.", "story": ["Puranic Origin of Bathukamma: Bathukamma ('Mother Goddess Come Alive') celebrates Goddess Gauri as the patron deity of womanhood and nature in Telangana. According to legend, after Goddess Durga slayed Mahishasura following a fierce nine-day battle, she fell into deep exhaustion on Ashwayuja Padyami; women sang soulful songs around towering concentric floral stacks of Gunugu, Tangedu, and Chamanti flowers praying 'Bathukamma Bathuku' (Awaken, O Mother!).", "Nine Nights of Shakti: Simultaneously begins Sharad Navaratri (Devi Navaratrulu), worshipping Goddess Durga across nine Alankarams—Balatripurasundari, Gayatri, Annapoorna, Lalita, Saraswati, Mahalakshmi, Durga, Mahishasuramardini, and Raja Rajeshwari."], "teStory": ["పండుగ విశేషం: బతుకమ్మ & దేవీ నవరాత్రులు పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: బతుకమ్మ & దేవీ నవరాత్రులు एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-10-18", "te": "సద్దుల బతుకమ్మ & దుర్గాష్టమి (Saddula Bathukamma & Durgashtami)", "en": "Saddula Bathukamma & Maha Durgashtami", "desc": "Grand 9th-day Bathukamma immersion with five varieties of Saddulu prasadam.", "story": ["Grand Finale of Bathukamma: Celebrated on Durgashtami (Ashwayuja Shuddha Ashtami), women craft magnificent seven-tiered floral Bathukammas, dance in rhythmic circles clapping in unison until dusk, and immerse them in lakes and rivers while sharing 'Saddulu'—five seasoned rice dishes (curd, tamarind, lemon, sesame, and coconut rice) and Maleeda."], "teStory": ["పండుగ విశేషం: సద్దుల బతుకమ్మ & దుర్గాష్టమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: సద్దుల బతుకమ్మ & దుర్గాష్టమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-10-20", "te": "విజయదశమి / దసరా (Vijaya Dashami — Dasara)", "en": "Vijaya Dashami — Triumph of Dharma & Shami Puja", "desc": "Ashwayuja Shuddha Dashami Shami Vriksha Puja, Ayudha Puja & Pala Pitta darshan.", "story": ["Triumph of Durga & Sri Rama: Vijaya Dashami marks the dual victory of Goddess Chamundeshwari/Durga over Mahishasura and Lord Sri Rama's triumph over Ravana in Lanka, symbolizing the eternal victory of Dharma over Adharma.", "Shami Vriksha & Pandava Weapons Legend: During their one-year Agyatavasa (incognito exile), the Pandavas concealed their celestial weapons inside a Shami (Jammi) tree. On Vijaya Dashami, Arjuna retrieved the weapons and defeated the Kaurava army at Virata's kingdom. Telugu families worship the Jammi tree chanting 'Shami Shamayate Papam', exchange Jammi leaves as 'Bangaram' (gold), and spot the auspicious Pala Pitta (Indian Roller bird)."], "teStory": ["పండుగ విశేషం: విజయదశమి / దసరా పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: విజయదశమి / దసరా एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-11-08", "te": "దీపావళి అమావాస్య (Deepavali & Kedareswara Vratam)", "en": "Deepavali — Festival of Lights & Dhanalakshmi Puja", "desc": "Ashwayuja Amavasya Naraka Chaturdashi victory, Lakshmi Puja & Kedareswara Vratam.", "story": ["Victory over Narakasura & Return to Ayodhya: Deepavali celebrates Lord Sri Krishna and Satyabhama vanquishing the tyrannical demon Narakasura (Naraka Chaturdashi) and the triumphant return of Lord Sri Rama, Sita, and Lakshmana to Ayodhya after 14 years of exile, when citizens lit rows of ghee lamps (Deepavali) across the kingdom.", "Lakshmi Puja & Kedareswara Vratam: In the evening of Ashwayuja Amavasya, Telugu households light clay diyas, perform Dhanalakshmi Puja, and observe the sacred Kedareswara Swamy Vratam—honoring the Ardhanareeswara union of Shiva and Parvati."], "teStory": ["పండుగ విశేషం: దీపావళి అమావాస్య పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: దీపావళి అమావాస్య एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-11-21", "te": "ఉత్థాన ఏకాదశి (Utthana / Prabodhini Ekadashi)", "en": "Utthana Ekadashi — Awakening of Lord Maha Vishnu", "desc": "Kartika Shuddha Ekadashi end of Chaturmasya & Tulasi Kalyanam.", "story": ["Cosmic Awakening of Lord Vishnu: Falling on Kartika Shuddha Ekadashi, Utthana (Prabodhini) Ekadashi marks the moment Lord Maha Vishnu awakens from His four-month Yoga Nidra, concluding the sacred Chaturmasya Vratam and reopening the auspicious season for weddings and housewarmings.", "Ksheerabdi Dwadashi & Tulasi Kalyanam: Devotees observe Ekadashi fasting and prepare for Tulasi-Damodara Kalyanam, lighting lamps around the sacred Tulasi Brindavanam."], "teStory": ["పండుగ విశేషం: ఉత్థాన ఏకాదశి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: ఉత్థాన ఏకాదశి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-11-24", "te": "కార్తీక పౌర్ణమి (Kartika Pournami & Jwala Toranam)", "en": "Kartika Pournami — 365-Wick Deepam & Tripurantaka Vijayam", "desc": "Holiest full moon of Kartika Masam; 365-wick lamp, Jwala Toranam & Karthika Deepam.", "story": ["Tripurasura Samharam & Hari-Hara Unity: Celebrated on Kartika Pournami when the Moon is in Krittika Nakshatra, this day commemorates Lord Shiva destroying the three flying demon citadels of Tripurasura with a single arrow—celebrated as 'Jwala Toranam' where a burning arch of dried grass is lit at Shiva temple entrances and devotees walk beneath it.", "365-Wick Deepotsavam: Because Kartika Masam is equally sacred to both Lord Shiva and Lord Maha Vishnu, devotees take pre-dawn river baths, light 365 cotton wicks (one for each day of the year) in cow ghee inside gooseberry (Usirikaya) or clay lamps, and float lamps on rivers."], "teStory": ["పండుగ విశేషం: కార్తీక పౌర్ణమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: కార్తీక పౌర్ణమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2026-12-20", "te": "వైకుంఠ ఏకాదశి (Vaikuntha / Mukkoti Ekadashi)", "en": "Vaikuntha Ekadashi — Uttara Dwara Darshanam", "desc": "Margashira Shuddha Ekadashi opening of Vaikuntha Dwaram at Tirumala & Vishnu temples.", "story": ["Legend of Mura & Goddess Ekadashi: According to the Padma Purana, when the demon Mura threatened the Devas, a radiant feminine energy (Yogamaya) emerged from Lord Vishnu's body on Margashira Shuddha Ekadashi and reduced Mura to ashes. Pleased, Lord Vishnu named her 'Ekadashi' and granted that anyone who fasts and has darshan on this day enters Vaikuntham.", "Uttara Dwara Darshanam: At Tirumala, Srirangam, Bhadrachalam, and Yadadri, the northern gateway ('Vaikuntha Dwaram') opens early in the morning, allowing devotees to circumambulate the inner sanctum."], "teStory": ["పండుగ విశేషం: వైకుంఠ ఏకాదశి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వైకుంఠ ఏకాదశి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, {"date": "2027-01-15", "te": "మకర సంక్రాంతి 2027 (Makara Sankranti 2027)", "en": "Makara Sankranti — Uttarayanam Punya Kalam", "desc": "Sun enters Makara Rashi; Pedda Panduga harvest celebration.", "story": ["Astronomical & Puranic Significance: Makara Sankranti marks Surya Bhagavan's entry into Makara Rashi and the dawn of Uttarayanam, honoring harvest abundance, Bhishma Pitamaha's Moksha, and family gatherings across Andhra Pradesh and Telangana."], "teStory": ["పండుగ విశేషం: మకర సంక్రాంతి 2027 పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: మకర సంక్రాంతి 2027 एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}];
    const LOCAL_SIGHTSEEING = {"HYD": {"hubEn": "Hyderabad & Secunderabad", "hubTe": "హైదరాబాద్ & సికింద్రాబాద్", "hubHi": "हैदराबाद और सिकंदराबाद", "places": [{"nameEn": "Birla Mandir & Hussain Sagar Lake", "nameTe": "బిర్లా మందిరం & హుస్సేన్ సాగర్", "nameHi": "बिरला मंदिर और हुसैन सागर", "dist": "5 km", "catEn": "Temple & Lakefront", "catTe": "ఆలయం & సరస్సు", "catHi": "मंदिर व झील", "descEn": "White marble hilltop Venkateswara shrine overlooking Buddha Statue & Necklace Road.", "descTe": "నౌబత్ పహాడ్ కొండపై తెల్లని పాలరాతి వేంకటేశ్వర ఆలయం మరియు బుద్ధ విగ్రహ దృశ్యం.", "descHi": "नौबत पहाड़ पर स्थित संगमरमर का वेंकटेश्वर मंदिर और हुसैन सागर झील।"}, {"nameEn": "Charminar & Chowmahalla Palace", "nameTe": "చార్మినార్ & చౌమహల్లా ప్యాలెస్", "nameHi": "चारमीनार और चौमहल्ला पैलेस", "dist": "11 km", "catEn": "Heritage Monument", "catTe": "చారిత్రక కట్టడం", "catHi": "ऐतिहासिक धरोहर", "descEn": "1591 iconic four-minaret monument, Laad Bazaar pearls & Nizam royal palace complex.", "descTe": "1591 నాటి చారిత్రక చార్మినార్, లాడ్ బజార్ ముత్యాలు మరియు నిజాం రాచమహల్.", "descHi": "1591 का ऐतिहासिक चारमीनार और शाही महल परिसर।"}, {"nameEn": "Golconda Fort & Qutb Shahi Tombs", "nameTe": "గోల్కొండ కోట & కుతుబ్ షాహీ సమాధులు", "nameHi": "गोलकोंडा किला", "dist": "15 km", "catEn": "Fort & Acoustic Marvel", "catTe": "చారిత్రక దుర్గం", "catHi": "ऐतिहासिक किला", "descEn": "Majestic hilltop citadel famed for acoustic clap echo at Fateh Darwaza & evening sound-light show.", "descTe": "ఫతే దర్వాజా వద్ద చప్పట్ల ప్రతిధ్వని మరియు సాయంత్రం సౌండ్ & లైట్ షోకు ప్రసిద్ధి.", "descHi": "ध्वनि प्रतिध्वनि और लाइट एंड साउंड शो के लिए प्रसिद्ध पहाड़ी किला।"}, {"nameEn": "Salar Jung Museum", "nameTe": "సాలార్ జంగ్ మ్యూజియం", "nameHi": "सालार जंग संग्रहालय", "dist": "9 km", "catEn": "Art & Antiques Museum", "catTe": "కళా ప్రదర్శనశాల", "catHi": "कला संग्रहालय", "descEn": "World-renowned museum housing the Veiled Rebecca sculpture & 19th-century musical clock.", "descTe": "ప్రపంచ ప్రఖ్యాత వీల్డ్ రెబెక్కా శిల్పం మరియు మ్యూజికల్ క్లాక్ ఉన్న మ్యూజియం.", "descHi": "विश्व प्रसिद्ध कलाकृतियों और संगीतमय घड़ी का संग्रहालय।"}, {"nameEn": "Ramoji Film City & Sanghi Temple", "nameTe": "రామోజీ ఫిల్మ్ సిటీ & సంఘీ ఆలయం", "nameHi": "रामोजी फिल्म सिटी व संघी मंदिर", "dist": "32 km", "catEn": "Day Excursion", "catTe": "విహారయాత్ర", "catHi": "दर्शनीय स्थल", "descEn": "World's largest integrated film studio complex paired with serene hilltop Sanghi Venkateswara shrine.", "descTe": "ప్రపంచంలోనే అతిపెద్ద ఫిల్మ్ స్టూడియో మరియు సమీపంలోని సంఘీ వేంకటేశ్వర ఆలయం.", "descHi": "विश्व का सबसे बड़ा फिल्म स्टूडियो परिसर और समीपस्थ संघी मंदिर।"}, {"nameEn": "Shilparamam & Durgam Cheruvu Cable Bridge", "nameTe": "శిల్పారామం & దుర్గం చెరువు కేబుల్ బ్రిడ్జ్", "nameHi": "शिल्परामम और दुर्गम चेरुवु ब्रिज", "dist": "16 km", "catEn": "Arts Village & Lake", "catTe": "హస్తకళా గ్రామం", "catHi": "शिल्प ग्राम व झील", "descEn": "Traditional Indian arts & crafts village beside the illuminated cable-stayed lake bridge.", "descTe": "భారతీయ హస్తకళా గ్రామం మరియు రాత్రివేళ విద్యుత్ దీపాలతో వెలిగే కేబుల్ బ్రిడ్జ్.", "descHi": "पारंपरिक हस्तशिल्प ग्राम और रोशनी से जगमगाता केबल ब्रिज।"}]}, "BZA": {"hubEn": "Vijayawada & Amaravati", "hubTe": "విజయవాడ & అమరావతి", "hubHi": "विजयवाड़ा और अमरावती", "places": [{"nameEn": "Prakasam Barrage & Bhavani Island", "nameTe": "ప్రకాశం బ్యారేజీ & భవానీ ద్వీపం", "nameHi": "प्रकाशम बैराज और भवानी द्वीप", "dist": "2 km", "catEn": "Riverfront & Boating", "catTe": "కృష్ణా నదీ తీరం", "catHi": "नदी तट व नौका विहार", "descEn": "Panoramic Krishna River barrage illuminated at night with boat rides to lush Bhavani Island.", "descTe": "కృష్ణా నదిపై అందమైన ప్రకాశం బ్యారేజీ మరియు బోటింగ్ ద్వారా చేరుకునే భవానీ ద్వీపం.", "descHi": "कृष्णा नदी पर प्रकाशम बैराज और भवानी द्वीप नौका विहार।"}, {"nameEn": "Undavalli Rock-Cut Caves", "nameTe": "ఉండవల్లి గుహాలయాలు", "nameHi": "उंडावल्ली गुफाएं", "dist": "6 km", "catEn": "4th-Century Monolithic Caves", "catTe": "ప్రాచీన గుహలు", "catHi": "प्राचीन गुफाएं", "descEn": "Four-storeyed monolithic sandstone caves featuring a giant reclining Ananthapadmanabha statue.", "descTe": "ఏకశిలలో చెక్కిన నాలుగు అంతస్తుల గుహలు మరియు భారీ అనంతపద్మనాభ స్వామి విగ్రహం.", "descHi": "चार मंजिला अखंड बलुआ पत्थर की गुफाएं और विशाल अनंतपद्मनाभ प्रतिमा।"}, {"nameEn": "Amaravati Mahastupa & Amareswara Temple", "nameTe": "అమరావతి మహాస్తూపం & అమరేశ్వర ఆలయం", "nameHi": "अमरावती महास्तूप व अमरेश्वर मंदिर", "dist": "35 km", "catEn": "Heritage & Pancharama", "catTe": "పంచారామ క్షేత్రం", "catHi": "ऐतिहासिक तीर्थ", "descEn": "2,000-year-old Buddhist Stupa and 15-ft white marble Pancharama Shivalinga on Krishna banks.", "descTe": "2,000 ఏళ్ల నాటి బౌద్ధ స్తూపం మరియు కృష్ణా తీరాన 15 అడుగుల పాలరాతి పంచారామ లింగం.", "descHi": "प्राचीन बौद्ध स्तूप और कृष्णा तट पर पंचाराम शिवलिंग।"}, {"nameEn": "Kondapalli Fort & Toy Village", "nameTe": "కొండపల్లి కోట & బొమ్మల గ్రామం", "nameHi": "कोंडापल्ली किला", "dist": "22 km", "catEn": "14th-Century Hill Fort", "catTe": "చారిత్రక కోట", "catHi": "पहाड़ी किला", "descEn": "Historic Musunuri/Reddy dynasty hill fort and traditional wooden Kondapalli toy artisans.", "descTe": "14వ శతాబ్దపు చారిత్రక కొండపల్లి కోట మరియు సంప్రదాయ కొండపల్లి కొయ్యబొమ్మల గ్రామం.", "descHi": "14वीं शताब्दी का किला और पारंपरिक लकड़ी के खिलौनों का गांव।"}]}, "VSKP": {"hubEn": "Visakhapatnam (Vizag)", "hubTe": "విశాఖపట్నం", "hubHi": "विशाखापत्तनम", "places": [{"nameEn": "Kailasagiri Hilltop Park", "nameTe": "కైలాసగిరి హిల్ పార్క్", "nameHi": "कैलासगिरी हिल पार्क", "dist": "8 km", "catEn": "Ocean Viewpoint & Ropeway", "catTe": "సముద్ర వీక్షణ కేంద్రం", "catHi": "समुद्री दृश्य व रोपवे", "descEn": "40-ft Shiva-Parvati statues with panoramic Bay of Bengal coastline views and cable car.", "descTe": "40 అడుగుల శివపార్వతుల విగ్రహాలు, రోప్‌వే మరియు బంగాళాఖాతం తీర అందాలు.", "descHi": "40 फीट की शिव-पार्वती प्रतिमा और बंगाल की खाड़ी का विहंगम दृश्य।"}, {"nameEn": "RK Beach & INS Kursura Submarine Museum", "nameTe": "ఆర్.కె. బీచ్ & సబ్‌మెరైన్ మ్యూజియం", "nameHi": "आरके बीच और पनडुब्बी संग्रहालय", "dist": "4 km", "catEn": "Beach & Naval Museum", "catTe": "సముద్ర తీరం", "catHi": "समुद्र तट व संग्रहालय", "descEn": "Iconic coastal promenade featuring decommissioned Indian Navy submarine and TU-142 aircraft museum.", "descTe": "విశాఖ తీరంలో భారత నౌకాదళ సబ్‌మెరైన్ మరియు విమాన ప్రదర్శనశాల.", "descHi": "भारतीय नौसेना की वास्तविक पनडुब्बी और विमान संग्रहालय।"}, {"nameEn": "Rushikonda Beach & Thotlakonda", "nameTe": "రుషికొండ బీచ్ & తొట్లకొండ", "nameHi": "रुशिकोंडा बीच", "dist": "14 km", "catEn": "Blue Flag Beach", "catTe": "బ్లూ ఫ్లాగ్ బీచ్", "catHi": "ब्लू फ्लैग बीच", "descEn": "Golden crescent bay ideal for sunrise walks and ancient hilltop Buddhist heritage ruins.", "descTe": "బంగారు ఇసుక తిన్నెల రుషికొండ బీచ్ మరియు సమీపంలోని తొట్లకొండ బౌద్ధ క్షేత్రం.", "descHi": "सुनहरा समुद्र तट और प्राचीन बौद्ध विरासत स्थल।"}, {"nameEn": "Borra Caves & Araku Valley", "nameTe": "బొర్రా గుహలు & అరకు లోయ", "nameHi": "बोर्रा गुफाएं और अराकू घाटी", "dist": "90 km", "catEn": "Eastern Ghats Hill Station", "catTe": "తూర్పు కనుమల అందాలు", "catHi": "हिल स्टेशन", "descEn": "Million-year-old karst limestone stalactite caves and lush coffee plantations in Eastern Ghats.", "descTe": "లక్షల ఏళ్ల నాటి సున్నపురాయి బొర్రా గుహలు మరియు అరకు కాఫీ తోటలు.", "descHi": "प्राचीन चूना पत्थर की गुफाएं और अराकू के कॉफी बागान।"}]}, "TPTY": {"hubEn": "Tirupati & Chandragiri", "hubTe": "తిరుపతి & చంద్రగిరి", "hubHi": "तिरुपति और चंद्रगिरी", "places": [{"nameEn": "Kapila Theertham Sacred Waterfall", "nameTe": "కపిల తీర్థం జలపాతం & శివాలయం", "nameHi": "कपिल तीर्थम जलप्रपात", "dist": "3 km", "catEn": "Foothill Temple & Falls", "catTe": "జలపాతం & ఆలయం", "catHi": "मंदिर व जलप्रपात", "descEn": "Only Shiva temple in Tirupati situated right beneath a scenic Seshachalam mountain waterfall.", "descTe": "శేషాచల కొండల జలపాతం అడుగున కొలువైన తిరుపతిలోని ఏకైక శివాలయం.", "descHi": "शेषाचल झरने के नीचे स्थित तिरुपति का प्रसिद्ध शिव मंदिर।"}, {"nameEn": "Silathoranam & Srivari Padalu", "nameTe": "శిలాతోరణం & శ్రీవారి పాదాలు", "nameHi": "शिलातोरणम", "dist": "24 km", "catEn": "Natural Rock Arch", "catTe": "సహజ శిలా తోరణం", "catHi": "प्राकृतिक शिला मेहराब", "descEn": "Rare pre-Cambrian natural stone arch on Tirumala hills matching the height of Lord Venkateswara.", "descTe": "తిరుమల కొండలపై వేంకటేశ్వర స్వామి ఎత్తుకు సమానంగా ఉన్న అరుదైన సహజ శిలాతోరణం.", "descHi": "तिरुमला पहाड़ियों पर स्थित दुर्लभ प्राकृतिक पत्थर का मेहराब।"}, {"nameEn": "Chandragiri Fort & Raja Mahal", "nameTe": "చంద్రగిరి కోట & రాజా మహల్", "nameHi": "चंद्रगिरी किला", "dist": "15 km", "catEn": "Vijayanagara Heritage Fort", "catTe": "విజయనగర కోట", "catHi": "ऐतिहासिक किला", "descEn": "11th-century Vijayanagara royal citadel with an archaeological museum inside the Indo-Saracenic palace.", "descTe": "శ్రీకృష్ణదేవరాయల కాలం నాటి విజయనగర కోట మరియు పురావస్తు మ్యూజియం.", "descHi": "विजयनगर साम्राज्य का ऐतिहासिक किला और संग्रहालय।"}, {"nameEn": "Talakona Waterfall", "nameTe": "తలకోన జలపాతం", "nameHi": "तलकोना जलप्रपात", "dist": "58 km", "catEn": "Highest Waterfall in AP", "catTe": "అత్యంత ఎత్తైన జలపాతం", "catHi": "विशाल जलप्रपात", "descEn": "270-ft medicinal waterfall inside Sri Venkateswara National Park with Siddheswara Swamy temple.", "descTe": "శ్రీ వేంకటేశ్వర నేషనల్ పార్క్‌లో 270 అడుగుల ఎత్తు నుండి జాలువారే ఔషధ జలపాతం.", "descHi": "270 फीट ऊंचा औषधीय जलप्रपात और सिद्धेश्वर स्वामी मंदिर।"}]}, "SBC": {"hubEn": "Bengaluru & Mysuru", "hubTe": "బెంగళూరు & మైసూరు", "hubHi": "बेंगलुरु और मैसूर", "places": [{"nameEn": "Lalbagh Botanical Garden & Glass House", "nameTe": "లాల్‌బాగ్ బొటానికల్ గార్డెన్", "nameHi": "लालबाग बॉटनिकल गार्डन", "dist": "4 km", "catEn": "Heritage Botanical Garden", "catTe": "ఉద్యానవనం", "catHi": "वनस्पति उद्यान", "descEn": "240-acre historic garden with 3,000-million-year-old Peninsular Gneiss rock & century-old trees.", "descTe": "240 ఎకరాల విస్తీర్ణంలో చారిత్రక గ్లాస్ హౌస్ మరియు పురాతన వృక్షాలు గల ఉద్యానవనం.", "descHi": "240 एकड़ में फैला ऐतिहासिक उद्यान और ग्लास हाउस।"}, {"nameEn": "Nandi Hills Sunrise Viewpoint", "nameTe": "నంది హిల్స్ సూర్యోదయ వీక్షణ కేంద్రం", "nameHi": "नंदी हिल्स", "dist": "60 km", "catEn": "Hill Fortress & Cloud Sea", "catTe": "హిల్ స్టేషన్", "catHi": "पहाड़ी पर्यटन स्थल", "descEn": "Misty hilltop fortress above the clouds with ancient Bhoganandishwara temple at the foothills.", "descTe": "మేఘాలను తాకే నంది కొండలు మరియు అడుగున ప్రాచీన భోగనందీశ్వర ఆలయం.", "descHi": "बादलों से घिरा पहाड़ी किला और भoganandishwara मंदिर।"}, {"nameEn": "Mysore Palace & Brindavan Gardens", "nameTe": "మైసూరు ప్యాలెస్ & బృందావన్ గార్డెన్స్", "nameHi": "मैसूर पैलेस और वृंदावन गार्डन", "dist": "140 km", "catEn": "Royal Palace & Musical Fountain", "catTe": "రాజమహల్", "catHi": "शाही महल", "descEn": "Opulent Wadiyar dynasty palace illuminated by 97,000 bulbs & KRS Dam musical fountains.", "descTe": "97,000 విద్యుత్ దీపాలతో మెరిసే మైసూరు రాజభవనం మరియు బృందావన్ గార్డెన్స్.", "descHi": "97,000 बल्बों से जगमगाता मैसूर महल और संगीतमय फव्वारे।"}]}};

    // 1. Service Worker & Install
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => reg.update()).catch(() => {});
      });
    }
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); deferredPrompt = e; installBtn.classList.remove('hidden');
    });
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installBtn.classList.add('hidden');
    });

    // 2. Language State (Default EN, zero Telugu mixing in EN mode!)
    let currentLang = 'en';
    try {
      const savedL = localStorage.getItem('kalachakra_lang_v15');
      if (savedL && ['en', 'te', 'hi'].includes(savedL)) currentLang = savedL;
    } catch (e) {}

    const UI_STR = {
      en: {
        sub: 'World Clock • Panchangam • Jyothishyam • Sacred Temples',
        obs: '● SOLAR & LUNAR OBSERVATORY',
        sunrise: 'Sunrise', daylight: 'Daylight Span', sunset: 'Sunset', noon: 'Noon',
        globalTz: 'Global Timezones',
        clock: 'Clock', panchangam: 'Panchangam', jyothishyam: 'Jyothishyam',
        temples: 'Temples', sightseeing: 'Sightseeing', festivals: 'Festivals',
        panchangTitle: 'Sri Parabhava Nama Samvatsaram',
        kalaVibhagam: 'Kala Vibhagam (Auspicious & Rahu Kalam)',
        tarabalam: 'Quick Tarabalam (Janma Nakshatra)',
        jyHeading: 'Janma Kundali, Rashi Chart & Personality',
        jySub: 'Enter Date, Time & Place of Birth for Lagna Kundali Chart, Navagraha Sthiti, Janma Rashi, Nakshatra Pada, Gana, Yoni, Nadi & Detailed Nature Analysis.',
        jyName: 'Full Name', jyPlace: 'Birth Place', jyDob: 'Date of Birth', jyTob: 'Time of Birth',
        calcBtn: '🔮 Generate Full Janma Kundali, Chart & Personality',
        rashiHeading: 'Rashi Phalalu (Daily • Monthly • Quarterly • Yearly)',
        matchTitle: '💑 Vivaha Pontana (36 Gunas Ashtakoota)',
        partnerDob: 'Partner Date of Birth', matchBtn: 'Check Compatibility',
        templeHeading: 'Sacred Temples of India',
        sightseeingHeading: 'Sightseeing Near Your Location',
        calHint: 'Tap any date below to inspect its complete Panchangam, Festivals & Puranic Story',
        festListTitle: 'Complete Pandugalu & Vratams (Full Puranic Stories)'
      },
      te: {
        sub: 'ప్రపంచ గడియారం • పంచాంగం • జ్యోతిష్యం • క్షేత్ర దర్శిని',
        obs: '● సూర్య చంద్ర వేధశాల',
        sunrise: 'సూర్యోదయం', daylight: 'పగటి సమయం', sunset: 'సూర్యాస్తమయం', noon: 'మధ్యాహ్నం',
        globalTz: 'ప్రపంచ సమయ మండలాలు',
        clock: 'గడియారం', panchangam: 'పంచాంగం', jyothishyam: 'జ్యోతిష్యం',
        temples: 'ఆలయాలు', sightseeing: 'దర్శనీయ స్థలాలు', festivals: 'పండుగలు',
        panchangTitle: 'శ్రీ పరాభవ నామ సంవత్సరం',
        kalaVibhagam: 'కాల విభాగం (శుభ & రాహు కాలం)',
        tarabalam: 'జన్మ తారాబలం',
        jyHeading: 'జన్మ కుండలి, రాశి చక్రం & స్వభావ విశ్లేషణ',
        jySub: 'జన్మ తేదీ, సమయం మరియు స్థలం నమోదు చేసి లగ్న కుండలి, గ్రహ స్థితి, రాశి, నక్షత్ర పాదం, గణం, యోని, నాడి మరియు వ్యక్తిత్వ వివరాలను తెలుసుకోండి.',
        jyName: 'పూర్తి పేరు', jyPlace: 'జన్మ స్థలం', jyDob: 'జన్మ తేదీ', jyTob: 'జన్మ సమయం',
        calcBtn: '🔮 పూర్తి జన్మ కుండలి, చార్ట్ & వ్యక్తిత్వ ఫలాలు చూడండి',
        rashiHeading: 'రాశి ఫలాలు (రోజువారీ • మాస • త్రైమాసిక • వార్షిక)',
        matchTitle: '💑 వివాహ పొంతన (36 గుణాల అష్టకూటమి)',
        partnerDob: 'భాగస్వామి జన్మ తేదీ', matchBtn: 'పొంతన పరిశీలించండి',
        templeHeading: 'భారతీయ పవిత్ర ఆలయాలు',
        sightseeingHeading: 'మీ ప్రాంత సమీప దర్శనీయ స్థలాలు',
        calHint: 'ఏదైనా తేదీని తాకి ఆ రోజు పూర్తి పంచాంగం, పండుగ & పురాణ కథను చదవండి',
        festListTitle: 'సంపూర్ణ తెలుగు పండుగలు & వ్రతాలు (పూర్తి పురాణ కథలతో)'
      },
      hi: {
        sub: 'विश्व घड़ी • पंचांग • ज्योतिष • भारतीय मंदिर दर्शन',
        obs: '● सूर्य एवं चंद्र वेधशाला',
        sunrise: 'सूर्योदय', daylight: 'दिन की अवधि', sunset: 'सूर्यास्त', noon: 'मध्याह्न',
        globalTz: 'विश्व समय क्षेत्र',
        clock: 'घड़ी', panchangam: 'पंचांग', jyothishyam: 'ज्योतिष',
        temples: 'मंदिर', sightseeing: 'दर्शनीय स्थल', festivals: 'त्योहार',
        panchangTitle: 'श्री पराभव नाम संवत्सर',
        kalaVibhagam: 'काल विभाग (शुभ एवं राहु काल)',
        tarabalam: 'जन्म ताराबल',
        jyHeading: 'जन्म कुंडली, लग्न चक्र एवं स्वभाव विश्लेषण',
        jySub: 'जन्म तिथि, समय और स्थान दर्ज करें और लग्न कुंडली, ग्रह स्थिति, राशि, नक्षत्र पद, गण, योनि, नाड़ी और व्यक्तित्व विश्लेषण देखें।',
        jyName: 'पूरा नाम', jyPlace: 'जन्म स्थान', jyDob: 'जन्म तिथि', jyTob: 'जन्म समय',
        calcBtn: '🔮 संपूर्ण जन्म कुंडली, चक्र और व्यक्तित्व देखें',
        rashiHeading: 'राशिफल (दैनिक • मासिक • त्रैमासिक • वार्षिक)',
        matchTitle: '💑 विवाह मिलान (36 गुण अष्टकूट)',
        partnerDob: 'जीवनसाथी की जन्म तिथि', matchBtn: 'मिलान जांचें',
        templeHeading: 'भारत के पवित्र मंदिर',
        sightseeingHeading: 'आपके स्थान के पास दर्शनीय स्थल',
        calHint: 'किसी भी तिथि पर टैप करके संपूर्ण पंचांग और पौराणिक कथा पढ़ें',
        festListTitle: 'संपूर्ण पर्व एवं व्रत (विस्तृत पौराणिक कथाओं सहित)'
      }
    };

    
    const PLACE_NAMES_I18N = {
      'Secunderabad': { te: 'సికింద్రాబాద్', hi: 'सिकंदराबाद' },
      'Bolarum, Secunderabad': { te: 'బొల్లారం, సికింద్రాబాద్', hi: 'बोलारम, सिकंदराबाद' },
      'Macha Bolarum, Hyderabad': { te: 'మచ్చ బొల్లారం, హైదరాబాద్', hi: 'मच्छा बोलारम, हैदराबाद' },
      'Hyderabad': { te: 'హైదరాబాద్', hi: 'हैदराबाद' },
      'Secunderabad / Hyderabad': { te: 'సికింద్రాబాద్ / హైదరాబాద్', hi: 'सिकंदराबाद / हैदराबाद' },
      'Vijayawada': { te: 'విజయవాడ', hi: 'विजयवाड़ा' },
      'Visakhapatnam': { te: 'విశాఖపట్నం', hi: 'विशाखापत्तनम' },
      'Tirupati': { te: 'తిరుపతి', hi: 'तिरुपति' },
      'Warangal': { te: 'వరంగల్', hi: 'वारंगल' },
      'Warangal / Hanamkonda': { te: 'వరంగల్ / హన్మకొండ', hi: 'वारंगल / हनमकोंडा' },
      'Karimnagar': { te: 'కరీంనగర్', hi: 'करीमनगर' },
      'Nizamabad': { te: 'నిజామాబాద్', hi: 'निजामाबाद' },
      'Kurnool': { te: 'కర్నూలు', hi: 'कर्नूल' },
      'Guntur': { te: 'గుంటూరు', hi: 'गुंटूर' },
      'Rajahmundry': { te: 'రాజమండ్రి', hi: 'राजमुंदरी' },
      'Nellore': { te: 'నెల్లూరు', hi: 'नेल्लोर' },
      'Bengaluru': { te: 'బెంగళూరు', hi: 'बेंगलुरु' },
      'Chennai': { te: 'చెన్నై', hi: 'चेन्नई' },
      'Madurai': { te: 'మదురై', hi: 'मदुरै' },
      'Kochi': { te: 'కొచ్చి', hi: 'कोच्चि' },
      'Kochi / Ernakulam': { te: 'కొచ్చి / ఎర్నాకుళం', hi: 'कोच्चि / एर्नाकुलम' },
      'Mumbai': { te: 'ముంబై', hi: 'मुंबई' },
      'Pune': { te: 'పుణె', hi: 'पुणे' },
      'New Delhi': { te: 'న్యూఢిల్లీ', hi: 'नई दिल्ली' },
      'Kolkata': { te: 'కోల్‌కతా', hi: 'कोलकाता' },
      'Bhubaneswar': { te: 'భువనేశ్వర్', hi: 'भुवनेश्वर' },
      'Bhubaneswar / Puri': { te: 'భువనేశ్వర్ / పూరి', hi: 'भुवनेश्वर / पुरी' },
      'Varanasi': { te: 'వారణాసి', hi: 'वाराणसी' },
      'Ahmedabad': { te: 'అహ్మదాబాద్', hi: 'अहमदाबाद' },
      'Jaipur': { te: 'జైపుర్', hi: 'जयपुर' },
      'New York': { te: 'న్యూయార్క్', hi: 'न्यूयॉर्क' },
      'London': { te: 'లండన్', hi: 'लंदन' },
      'Dubai': { te: 'దుబాయ్', hi: 'दुबई' },
      'Riyadh': { te: 'రియాద్', hi: 'रियाद' },
      'Doha': { te: 'దోహా', hi: 'दोहा' },
      'Singapore': { te: 'సింగపూర్', hi: 'सिंगापुर' },
      'Tokyo': { te: 'టోక్యో', hi: 'टोक्यो' },
      'Seoul': { te: 'సియోల్', hi: 'सियोल' },
      'Paris': { te: 'పారిస్', hi: 'पेरिस' },
      'Frankfurt': { te: 'ఫ్రాంక్‌ఫర్ట్', hi: 'फ्रैंकफर्ट' },
      'Zurich': { te: 'జ్యూరిచ్', hi: 'ज्यूरिख' },
      'Chicago': { te: 'షికాగో', hi: 'शिकागो' },
      'Dallas': { te: 'డల్లాస్', hi: 'डलास' },
      'San Francisco': { te: 'శాన్ ఫ్రాన్సిస్కో', hi: 'सैन फ्रांसिस्को' },
      'Toronto': { te: 'టొరంటో', hi: 'टोरंटो' },
      'Sydney': { te: 'సిడ్నీ', hi: 'सिडनी' },
      'Melbourne': { te: 'మెల్‌బోర్న్', hi: 'मेलबर्न' },
      'My GPS Location': { te: 'నా జీపీఎస్ స్థానం', hi: 'मेरा जीपीएस स्थान' }
    };

    
    function pureScriptText(teVal, hiVal, enVal) {
      if (currentLang === 'te') {
        return (teVal || '').replace(/\s*\([^)]*[A-Za-z][^)]*\)/g, '').replace(/\s{2,}/g, ' ').trim();
      }
      if (currentLang === 'hi') {
        return (hiVal || teVal || '').replace(/\s*\([^)]*[A-Za-z][^)]*\)/g, '').replace(/\s{2,}/g, ' ').trim();
      }
      return enVal || teVal || '';
    }

    function localizePlaceName(rawName) {
      if (!rawName) return '';
      if (currentLang === 'en') return rawName;
      if (PLACE_NAMES_I18N[rawName] && PLACE_NAMES_I18N[rawName][currentLang]) {
        return PLACE_NAMES_I18N[rawName][currentLang];
      }
      // Translate comma-separated segments if matched
      const parts = rawName.split(',').map(s => s.trim());
      if (parts.length > 1) {
        const mapped = parts.map(p => (PLACE_NAMES_I18N[p] && PLACE_NAMES_I18N[p][currentLang]) ? PLACE_NAMES_I18N[p][currentLang] : p);
        return mapped.join(', ');
      }
      return rawName;
    }

    function translateUiChromeForLanguage() {
      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';

      const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
      const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
      const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

      // Header & Controls
      setText('installBtn', isTe ? 'ఇన్‌స్టాల్' : isHi ? 'इंस्टॉल करें' : 'Install');
      const gpsBtns = document.querySelectorAll('button[onclick*="Gps"], button[onclick*="gps"]');
      gpsBtns.forEach(b => {
        b.textContent = isTe ? '🛰️ జీపీఎస్' : isHi ? '🛰️ जीपीएस' : '🛰️ Use GPS';
      });

      // Home India city dropdown placeholder
      const homeSel = document.getElementById('homeIndiaCitySelect');
      if (homeSel && homeSel.options.length > 0) {
        homeSel.options[0].text = isTe ? '🇮🇳 నగరాన్ని ఎంచుకోండి...' : isHi ? '🇮🇳 शहर चुनें...' : '🇮🇳 Select Indian City...';
      }

      // Add World City dropdown placeholder & group labels
      const addSel = document.getElementById('addCitySelect');
      if (addSel && addSel.options.length > 0) {
        addSel.options[0].text = isTe ? '+ ప్రపంచ నగరాన్ని చేర్చండి' : isHi ? '+ विश्व शहर जोड़ें' : '+ Add World City (All Zones)';
      }

      // Panchangam suitability card & OnlineJyotish card
      setText('muhurthamOverallBadge', isTe ? 'పరిశీలిస్తోంది...' : isHi ? 'जाँच जारी...' : 'Checking...');
      setText('ojCityRef', localizePlaceName((cities[selectedCityIndex] || cities[0]).name));

      const ghLabels = [
        ['cardMorningGolden', isTe ? '🌅 ఉదయ గోల్డెన్ అవర్' : isHi ? '🌅 प्रातः गोल्डन आवर' : '🌅 Morning Golden Hour'],
        ['cardEveningGolden', isTe ? '🌇 సాయంత్ర గోల్డెన్ అవర్' : isHi ? '🌇 सायं गोल्डन आवर' : '🌇 Evening Golden Hour'],
        ['cardDawnBlue', isTe ? '🌌 ఉషః బ్లూ అవర్' : isHi ? '🌌 प्रभात ब्लू आवर' : '🌌 Dawn Blue Hour'],
        ['cardDuskBlue', isTe ? '🌃 సంధ్యా బ్లూ అవర్' : isHi ? '🌃 संध्या ब्लू आवर' : '🌃 Dusk Blue Hour']
      ];
      ghLabels.forEach(([id, txt]) => {
        const el = document.getElementById(id)?.previousElementSibling;
        if (el) el.textContent = txt;
      });
      const subEl = document.getElementById('heroCitySub');
      if (subEl && isTe) {
        subEl.textContent = subEl.textContent.replace('IST • Home', 'భారత సమయం • స్వస్థానం');
      } else if (subEl && isHi) {
        subEl.textContent = subEl.textContent.replace('IST • Home', 'भारतीय समय • गृह स्थान');
      }


      // Tab 1 Night / Golden / Celestial labels
      const nightCards = document.querySelectorAll('#lunarTrackerWrap ~ .grid.grid-cols-3 > div');
      if (nightCards.length >= 3) {
        const nLbls = isTe ? ['రాత్రి సమయం', 'రాత్రి వ్యవధి', 'తదుపరి ఉదయం'] : isHi ? ['रात्रि समय', 'रात्रि अवधि', 'अगली सुबह'] : ['Nightfall', 'Night Span', 'Next Dawn'];
        nightCards[0].firstElementChild.textContent = nLbls[0];
        nightCards[1].firstElementChild.textContent = nLbls[1];
        nightCards[2].firstElementChild.textContent = nLbls[2];
      }
      const ghHeader = document.querySelector('#cardMorningGolden')?.closest('.space-y-2')?.firstElementChild?.firstElementChild;
      if (ghHeader) {
        ghHeader.textContent = isTe ? '📸 గోల్డెన్ అవర్ & సంధ్యా సమయాలు' : isHi ? '📸 गोल्डन आवर एवं संध्या समय' : '📸 GOLDEN HOUR & TWILIGHT WINDOWS';
      }
      const celHeader = document.getElementById('celestialNextFestName')?.closest('.space-y-2')?.firstElementChild?.firstElementChild;
      if (celHeader) {
        celHeader.textContent = isTe ? '🔭 సూర్య & చంద్ర ఖగోళ వివరాలు' : isHi ? '🔭 सूर्य एवं चंद्र खगोलीय विवरण' : '🔭 SUN & MOON CELESTIAL TELEMETRY';
      }
      const festLblEl = document.getElementById('celestialNextFestName')?.previousElementSibling;
      if (festLblEl) festLblEl.textContent = isTe ? '🪔 రాబోయే పండుగ' : isHi ? '🪔 आगामी पर्व' : '🪔 Upcoming Festival';
      const fullLblEl = document.getElementById('celestialNextFull')?.previousElementSibling;
      if (fullLblEl) fullLblEl.textContent = isTe ? '🌕 తదుపరి పౌర్ణమి' : isHi ? '🌕 अगली पूर्णिमा' : '🌕 Next Pournami (Full Moon)';
      const amaLblEl = document.getElementById('celestialNextAmavasya')?.previousElementSibling;
      if (amaLblEl) amaLblEl.textContent = isTe ? '🌑 తదుపరి అమావాస్య' : isHi ? '🌑 अगली अमावस्या' : '🌑 Next Amavasya (New Moon)';
      const overlapHdr = document.getElementById('worldOverlapStrip')?.previousElementSibling;
      if (overlapHdr) {
        overlapHdr.children[0].textContent = isTe ? '🕒 ప్రపంచ సమయ మండలాల సమన్వయం' : isHi ? '🕒 विश्व समय क्षेत्र समन्वय' : '🕒 LIVE WORLD TIMEZONE OVERLAP';
        overlapHdr.children[1].textContent = isTe ? 'పగలు / రాత్రి సమయం' : isHi ? 'दिन / रात्रि समय' : 'Day / Night Call Window';
      }


      // Temple search placeholder & Yatra planner
      setAttr('templeSearch', 'placeholder', isTe
        ? 'ఆలయం, నగరం, దైవం, సమీప ప్రాంతం వెతకండి...'
        : isHi
          ? 'मंदिर, शहर, देवता, पास का स्थान खोजें...'
          : 'Search temple, city, deity, nearby place...');

      // Calendar weekday headers
      const calDaysGrid = document.querySelector('#tab-festivals .grid-cols-7.text-center');
      if (calDaysGrid) {
        const dNames = isTe
          ? ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని']
          : isHi
            ? ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
            : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const cls = ['text-rose-400', '', '', '', '', '', 'text-amber-300'];
        calDaysGrid.innerHTML = dNames.map((n, i) => `<div class="${cls[i]}">${n}</div>`).join('');
      }
    }

    window.setAppLanguage = (lang) => {
      currentLang = ['en', 'te', 'hi'].includes(lang) ? lang : 'en';
      try { localStorage.setItem('kalachakra_lang_v15', currentLang); } catch (e) {}
      const sw = document.getElementById('langSwitcher');
      if (sw) sw.value = currentLang;
      const d = UI_STR[currentLang];
      const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setTxt('appSubtitle', d.sub);
      setTxt('obsBadge', d.obs);
      setTxt('lblSunrise', d.sunrise);
      setTxt('lblDaylight', d.daylight);
      setTxt('lblSunset', d.sunset);
      setTxt('svgNoonLbl', d.noon);
      setTxt('lblGlobalTz', d.globalTz);
      setTxt('nav-lbl-clock', d.clock);
      setTxt('nav-lbl-panchangam', d.panchangam);
      setTxt('nav-lbl-jyothishyam', d.jyothishyam);
      setTxt('nav-lbl-temples', d.temples);
      setTxt('nav-lbl-sightseeing', d.sightseeing);
      setTxt('nav-lbl-festivals', d.festivals);
      setTxt('panchangTitle', d.panchangTitle);
      setTxt('lblKalaVibhagam', d.kalaVibhagam);
      setTxt('lblTarabalam', d.tarabalam);
      setTxt('jyHeading', d.jyHeading);
      setTxt('jySubDesc', d.jySub);
      setTxt('lblJyName', d.jyName);
      setTxt('lblJyPlace', d.jyPlace);
      setTxt('lblJyDob', d.jyDob);
      setTxt('lblJyTob', d.jyTob);
      setTxt('calcJathakamBtn', d.calcBtn);
      setTxt('rashiPhalaluHeading', d.rashiHeading);
      setTxt('lblMatchTitle', d.matchTitle);
      setTxt('lblPartnerDob', d.partnerDob);
      setTxt('calcMatchBtn', d.matchBtn);
      setTxt('templeTotalHeading', d.templeHeading);
      setTxt('sightseeingTabTitle', d.sightseeingHeading);
      setTxt('calHintText', d.calHint);
      setTxt('lblFestivalList', d.festListTitle);

      renderSavedJyProfiles();
      renderJathakam();
      renderRashiPhalalu();
      renderAll();
    };

    const VALID_TABS = ['clock', 'panchangam', 'jyothishyam', 'temples', 'sightseeing', 'festivals'];
    window.switchTab = (tabId, skipScroll = false) => {
      if (tabId === 'temples' && BASE_TEMPLES.length === 0) {
        const cont = document.getElementById('templeListContainer');
        if (cont) cont.innerHTML = '<div class="glass rounded-2xl p-5 text-center text-xs text-amber-200">🛕 Loading Sacred Temples Directory...</div>';
        ensureTemplesLoaded().then(() => renderTemples());
      }
      if (!VALID_TABS.includes(tabId)) tabId = 'clock';
      try { localStorage.setItem('panchtattva_active_tab', tabId); } catch (e) {}
      try { history.replaceState(null, '', '#' + tabId); } catch (e) {}
      VALID_TABS.forEach(t => {
        const el = document.getElementById('tab-' + t);
        if (el) el.classList.toggle('hidden', t !== tabId);
      });
      document.querySelectorAll('.nav-btn').forEach(btn => {
        const active = btn.dataset.tab === tabId;
        btn.classList.toggle('text-amber-400', active);
        btn.classList.toggle('text-slate-400', !active);
      });
      if (tabId === 'temples') renderTemples();
      if (tabId === 'sightseeing') renderLocalSightseeing();
      if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 3. World Clock & Accurate Sun Arc Engine
    let cities = [
      { name: 'Secunderabad', tz: 'Asia/Kolkata', lat: 17.4948, lon: 78.5011, label: 'IST • Home' },
      { name: 'New York', tz: 'America/New_York', lat: 40.7128, lon: -74.0060, label: 'EST/EDT' },
      { name: 'London', tz: 'Europe/London', lat: 51.5074, lon: -0.1278, label: 'GMT/BST' },
      { name: 'Dubai', tz: 'Asia/Dubai', lat: 25.2048, lon: 55.2708, label: 'GST • UTC+4' },
      { name: 'Tokyo', tz: 'Asia/Tokyo', lat: 35.6762, lon: 139.6503, label: 'JST • UTC+9' },
      { name: 'Sydney', tz: 'Australia/Sydney', lat: -33.8688, lon: 151.2093, label: 'AEDT' }
    ];
    let selectedCityIndex = 0;

    const datePicker = document.getElementById('datePicker');
    const nowInit = new Date();
    const todayStr = `${nowInit.getFullYear()}-${String(nowInit.getMonth()+1).padStart(2,'0')}-${String(nowInit.getDate()).padStart(2,'0')}`;
    datePicker.value = todayStr;
    let selectedDate = new Date(todayStr + 'T12:00:00');
    let calViewYear = selectedDate.getFullYear(), calViewMonth = selectedDate.getMonth();

    function getTzOffsetMinutes(dateObj, tz) {
      try {
        const utcDate = new Date(Date.UTC(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 12, 0, 0));
        const tzString = utcDate.toLocaleString('en-US', { timeZone: tz, timeZoneName: 'shortOffset' });
        const match = tzString.match(/GMT([+-]\d+)(?::(\d+))?/);
        if (match) {
          const hrs = parseInt(match[1], 10);
          const mins = parseInt(match[2] || '0', 10);
          return hrs * 60 + (hrs < 0 ? -mins : mins);
        }
      } catch (e) {}
      if (tz === 'Asia/Kolkata') return 330;
      return 0;
    }

    function calcSunTimes(date, lat, lon, tz) {
      const start = new Date(date.getFullYear(), 0, 0);
      const dayOfYear = Math.floor((date - start) / 86400000);
      const rad = Math.PI / 180, deg = 180 / Math.PI;
      const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);
      const eqTime = 229.18 * (0.000075 + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma) - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));
      const decl = 0.006918 - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma) - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma) - 0.002697 * Math.cos(3 * gamma) + 0.00148 * Math.sin(3 * gamma);
      const cosH = (Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(decl))) - Math.tan(lat * rad) * Math.tan(decl);
      const ha = Math.acos(Math.max(-1, Math.min(1, cosH))) * deg;
      const sunriseUTC = 720 - 4 * (lon + ha) - eqTime;
      const sunsetUTC = 720 - 4 * (lon - ha) - eqTime;
      const noonUTC = 720 - 4 * lon - eqTime;
      const offsetMin = getTzOffsetMinutes(date, tz);

      const formatMin = (m) => {
        let total = (Math.round(m + offsetMin) + 1440) % 1440;
        const h24 = Math.floor(total / 60), min = total % 60;
        return {
          h24, min, total,
          str24: `${String(h24).padStart(2,'0')}:${String(min).padStart(2,'0')}`,
          str12: `${String(h24%12||12).padStart(2,'0')}:${String(min).padStart(2,'0')} ${h24>=12?'PM':'AM'}`
        };
      };
      const sr = formatMin(sunriseUTC), ss = formatMin(sunsetUTC), nn = formatMin(noonUTC);
      const spanMin = (ss.total - sr.total + 1440) % 1440;
      return { sr, ss, nn, spanStr: `${Math.floor(spanMin/60)}h ${spanMin%60}m`, spanMin };
    }

    function getSeasonalFallbackTemp(lat, monthIdx) {
      const isWinter = [10, 11, 0, 1].includes(monthIdx);
      const isSummer = [3, 4, 5].includes(monthIdx);
      if (lat > 30) return isWinter ? 6 : isSummer ? 22 : 15;
      if (lat > 23) return isWinter ? 19 : isSummer ? 36 : 27;
      return isWinter ? 24 : isSummer ? 34 : 28;
    }

    const cityTempCache = {};
    function getDiurnalFallbackTemp(lat, lon, tz) {
      const now = new Date();
      const absLat = Math.abs(lat);
      const m = now.getMonth();
      const isWinter = [10, 11, 0, 1].includes(m);
      const isSummer = [3, 4, 5].includes(m);
      let baseMean = 26, swing = 5.5;
      if (absLat > 35) { baseMean = isWinter ? 6 : isSummer ? 22 : 14; swing = 4.5; }
      else if (absLat > 23) { baseMean = isWinter ? 19 : isSummer ? 34 : 26; swing = 6.5; }
      else { baseMean = isWinter ? 23.5 : isSummer ? 33 : 27.5; swing = 5.5; }

      let localHr = now.getHours() + now.getMinutes() / 60;
      try {
        if (tz) {
          const parts = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(now).split(':');
          localHr = parseInt(parts[0], 10) + parseInt(parts[1], 10) / 60;
        }
      } catch (e) {}
      // Coolest around 05:00 AM, warmest around 14:30 PM
      const phase = ((localHr - 14.5) / 24) * 2 * Math.PI;
      const est = Math.round((baseMean + swing * Math.cos(phase)) * 10) / 10;
      return est.toFixed(1);
    }

    function storeUnifiedTemp(lat, lon, tempNum, weatherCode = null) {
      if (typeof tempNum !== 'number' || Number.isNaN(tempNum)) return;
      const rounded = Math.round(tempNum * 10) / 10;
      const strVal = `${rounded.toFixed(1)}°C`;
      cityTempCache[`${lat},${lon}`] = strVal;
      cityTempCache[`${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`] = strVal;
      if (typeof liveTempCache !== 'undefined' && typeof getCoordTempKey === 'function') {
        const wInfo = typeof getWeatherBadgeInfo === 'function' ? getWeatherBadgeInfo(weatherCode) : { icon: '🌡️', text: 'Live' };
        liveTempCache[getCoordTempKey(lat, lon)] = {
          temp: rounded,
          icon: wInfo.icon,
          cond: wInfo.text,
          live: true
        };
      }
    }

    async function fetchSingleWttrFallback(pt) {
      try {
        const res = await fetch(`https://wttr.in/${Number(pt.lat).toFixed(3)},${Number(pt.lon).toFixed(3)}?format=j1`, { cache: 'no-store' });
        if (!res.ok) return false;
        const j = await res.json();
        const tC = parseFloat(j?.current_condition?.[0]?.temp_C);
        if (!Number.isNaN(tC)) {
          storeUnifiedTemp(pt.lat, pt.lon, tC, null);
          return true;
        }
      } catch (e) {}
      return false;
    }

    async function fetchBatchTemperatures(coordsList) {
      if (!coordsList.length) return false;
      let anyLive = false;
      const chunkSize = 10;
      const chunks = [];
      for (let i = 0; i < coordsList.length; i += chunkSize) {
        chunks.push(coordsList.slice(i, i + chunkSize));
      }
      await Promise.all(chunks.map(async (chunk) => {
        const lats = chunk.map(p => Number(p.lat).toFixed(4)).join(',');
        const lons = chunk.map(p => Number(p.lon).toFixed(4)).join(',');
        try {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,weather_code&hourly=temperature_2m&forecast_days=1&timezone=auto&_=${Date.now()}`;
          const res = await fetch(url, { cache: 'no-store' });
          if (!res.ok) return;
          const data = await res.json();
          const arr = Array.isArray(data) ? data : [data];
          chunk.forEach((pt, idx) => {
            const item = arr[idx];
            let temp = item?.current?.temperature_2m;
            const wCode = item?.current?.weather_code ?? null;
            if ((typeof temp !== 'number' || Number.isNaN(temp)) && Array.isArray(item?.hourly?.temperature_2m)) {
              const hrIdx = Math.min(23, Math.max(0, new Date().getHours()));
              temp = item.hourly.temperature_2m[hrIdx];
            }
            if (typeof temp === 'number' && !Number.isNaN(temp)) {
              storeUnifiedTemp(pt.lat, pt.lon, temp, wCode);
              anyLive = true;
            }
          });
        } catch (e) {}
      }));
      return anyLive;
    }

    async function fetchCityTemperatures() {
      const uniquePts = [];
      const seen = new Set();
      (cities || []).forEach(c => {
        const k = `${Number(c.lat).toFixed(2)},${Number(c.lon).toFixed(2)}`;
        if (!seen.has(k)) { seen.add(k); uniquePts.push({ lat: c.lat, lon: c.lon }); }
      });
      if (typeof userOrigin !== 'undefined' && userOrigin) {
        const k = `${Number(userOrigin.lat).toFixed(2)},${Number(userOrigin.lon).toFixed(2)}`;
        if (!seen.has(k)) { seen.add(k); uniquePts.push({ lat: userOrigin.lat, lon: userOrigin.lon }); }
      }
      if (typeof BASE_TEMPLES !== 'undefined' && Array.isArray(BASE_TEMPLES)) {
        BASE_TEMPLES.slice(0, 40).forEach(t => {
          const k = `${Number(t.lat).toFixed(2)},${Number(t.lon).toFixed(2)}`;
          if (!seen.has(k)) { seen.add(k); uniquePts.push({ lat: t.lat, lon: t.lon }); }
        });
      }
      if (!uniquePts.length) return;
      let gotLive = await fetchBatchTemperatures(uniquePts);
      if (!gotLive && uniquePts.length) {
        // Secondary live fallback via wttr.in for primary active city
        gotLive = await fetchSingleWttrFallback(uniquePts[0]);
      }
      lastWeatherSyncStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const syncBadge = document.getElementById('weatherSyncBadge');
      if (syncBadge) {
        syncBadge.textContent = gotLive
          ? `Live Sync • ${lastWeatherSyncStr}`
          : `Offline/Blocked • Diurnal Est.`;
      }
      if (typeof refreshAllLiveTempBadges === 'function') refreshAllLiveTempBadges();
      tickClocks();
      if (typeof renderTemples === 'function') renderTemples();
    }

    function getCityTempLabel(c) {
      const exactKey = `${c.lat},${c.lon}`;
      const roundKey = `${Number(c.lat).toFixed(2)},${Number(c.lon).toFixed(2)}`;
      if (cityTempCache[exactKey]) return `🌡️ ${cityTempCache[exactKey]}`;
      if (cityTempCache[roundKey]) return `🌡️ ${cityTempCache[roundKey]}`;
      if (typeof liveTempCache !== 'undefined' && liveTempCache[roundKey]?.live) {
        return `${liveTempCache[roundKey].icon} ${liveTempCache[roundKey].temp.toFixed(1)}°C`;
      }
      return `🌡️ ~${getDiurnalFallbackTemp(c.lat, c.lon, c.tz)}°C`;
    }

    window.deleteCity = (e, idx) => {
      e.stopPropagation();
      if (cities.length <= 1) return;
      cities.splice(idx, 1);
      if (selectedCityIndex >= cities.length) selectedCityIndex = 0;
      else if (selectedCityIndex > idx) selectedCityIndex--;
      tickClocks();
      renderAll();
    };

    window.pickCity = (idx) => { selectedCityIndex = idx; tickClocks(); renderAll(); };

    window.handleAddCity = (val) => {
      if (!val) return;
      const [name, tz, lat, lon] = val.split('|');
      const existing = cities.findIndex(c => c.name === name);
      if (existing >= 0) {
        selectedCityIndex = existing;
      } else {
        cities.unshift({ name, tz, lat: parseFloat(lat), lon: parseFloat(lon), label: tz.split('/')[1] || tz });
        selectedCityIndex = 0;
      }
      document.getElementById('addCitySelect').value = '';
      fetchCityTemperatures();
      tickClocks();
      renderAll();
    };

    
    function getRelativeDayTag(nowDate, tz) {
      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';
      const lblToday = isTe ? 'నేడు' : isHi ? 'आज' : 'Today';
      const lblYesterday = isTe ? 'నిన్న' : isHi ? 'कल (बीता)' : 'Yesterday';
      const lblTomorrow = isTe ? 'రేపు' : isHi ? 'कल (आगामी)' : 'Tomorrow';
      try {
        const tzYmd = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(nowDate);
        const homeYmd = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(nowDate);
        if (tzYmd === homeYmd) return lblToday;
        const diff = Math.round((Date.parse(tzYmd + 'T00:00:00Z') - Date.parse(homeYmd + 'T00:00:00Z')) / 86400000);
        if (diff === -1) return lblYesterday;
        if (diff === 1) return lblTomorrow;
        return diff > 0 ? `+${diff}d` : `${diff}d`;
      } catch (e) {
        return lblToday;
      }
    }

    function updateSkyAndLunarArcs(activeCity, nowDate, sun, curMin) {
      const solarSvg = document.getElementById('solarSvg');
      const lunarSvg = document.getElementById('lunarSvg');
      const lunarDot = document.getElementById('moonDot');
      const lunarHalo = document.getElementById('moonHalo');
      const lunarArc = document.getElementById('lunarProgressArc');
      if (!sun || !sun.ss || !sun.sr) return;

      const srMin = sun.sr.total;
      const ssMin = sun.ss.total;
      const isNight = curMin >= ssMin || curMin < srMin;

      if (solarSvg) solarSvg.style.display = isNight ? 'none' : 'block';
      if (lunarSvg) lunarSvg.style.display = isNight ? 'block' : 'none';

      const nextDay = new Date(selectedDate.getTime() + 86400000);
      const nextSun = calcSunTimes(nextDay, activeCity.lat, activeCity.lon, activeCity.tz);

      let nightStartMin = ssMin;
      let nextDawnMin = (nextSun && nextSun.sr) ? nextSun.sr.total + 1440 : srMin + 1440;
      if (nextDawnMin <= nightStartMin) nextDawnMin += 1440;

      const totalNightMins = Math.max(60, nextDawnMin - nightStartMin);
      const spanHours = Math.floor(totalNightMins / 60);
      const spanRemMins = Math.round(totalNightMins % 60);

      const elNightStartSvg = document.getElementById('svgNightStart');
      const elNextSrSvg = document.getElementById('svgNextSunrise');
      const elCardNightStart = document.getElementById('cardNightStart');
      const elCardNightSpan = document.getElementById('cardNightSpan');
      const elCardNextSr = document.getElementById('cardNextSunrise');
      const elStatusPill = document.getElementById('nightStatusPill');

      if (elNightStartSvg) elNightStartSvg.textContent = sun.ss.str24;
      if (elNextSrSvg) elNextSrSvg.textContent = (nextSun && nextSun.sr) ? nextSun.sr.str24 : sun.sr.str24;
      if (elCardNightStart) elCardNightStart.textContent = sun.ss.str12;
      if (elCardNightSpan) elCardNightSpan.textContent = `${spanHours}h ${String(spanRemMins).padStart(2, '0')}m`;
      if (elCardNextSr) elCardNextSr.textContent = (nextSun && nextSun.sr) ? nextSun.sr.str12 : sun.sr.str12;

      let adjCurMin = curMin;
      if (adjCurMin < nightStartMin) adjCurMin += 1440;
      const progress = Math.max(0.02, Math.min(0.98, (adjCurMin - nightStartMin) / totalNightMins));

      if (elStatusPill) {
        elStatusPill.textContent = isNight
          ? `Lunar Active • ${Math.round(progress * 100)}%`
          : 'Daylight (Sun Arc)';
      }

      if (lunarDot && lunarHalo) {
        const lx = (1 - progress) * (1 - progress) * 32 + 2 * (1 - progress) * progress * 180 + progress * progress * 328;
        const ly = (1 - progress) * (1 - progress) * 108 + 2 * (1 - progress) * progress * (-12) + progress * progress * 108;
        lunarDot.setAttribute('cx', lx.toFixed(1));
        lunarDot.setAttribute('cy', ly.toFixed(1));
        lunarHalo.setAttribute('cx', lx.toFixed(1));
        lunarHalo.setAttribute('cy', ly.toFixed(1));
      }
      if (lunarArc && lunarArc.getTotalLength) {
        const len = lunarArc.getTotalLength();
        lunarArc.style.strokeDasharray = len;
        lunarArc.style.strokeDashoffset = (len * (1 - progress)).toFixed(1);
      }
    }


    // --- ENHANCEMENTS: GOLDEN HOUR, WORLD OVERLAP, FAMILY PROFILES, GOCHARA, YATRA & VRATAM FILTER ---
    let lastWeatherSyncStr = '';
    function formatMin12(m) {
      const t = (Math.round(m) + 1440) % 1440;
      const h = Math.floor(t / 60), min = t % 60;
      return `${String(h % 12 || 12).padStart(2, '0')}:${String(min).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
    }

    function updateGoldenHourAndOverlap(now, activeCity, sun) {
      const mgEl = document.getElementById('cardMorningGolden');
      const egEl = document.getElementById('cardEveningGolden');
      const dbEl = document.getElementById('cardDawnBlue');
      const dkEl = document.getElementById('cardDuskBlue');
      if (mgEl) mgEl.textContent = `${formatMin12(sun.sr.total)} – ${formatMin12(sun.sr.total + 55)}`;
      if (egEl) egEl.textContent = `${formatMin12(sun.ss.total - 55)} – ${formatMin12(sun.ss.total)}`;
      if (dbEl) dbEl.textContent = `${formatMin12(sun.sr.total - 32)} – ${formatMin12(sun.sr.total - 5)}`;
      if (dkEl) dkEl.textContent = `${formatMin12(sun.ss.total + 5)} – ${formatMin12(sun.ss.total + 32)}`;

      const syncEl = document.getElementById('weatherSyncBadge');
      if (syncEl) {
        syncEl.textContent = lastWeatherSyncStr
          ? `Live Sync • ${lastWeatherSyncStr}`
          : (navigator.onLine ? 'Online • Ready' : 'Offline • Local Ephemeris');
      }

      const stripEl = document.getElementById('worldOverlapStrip');
      if (stripEl) {
        stripEl.innerHTML = cities.map((c, idx) => {
          const cParts = new Date(now.toLocaleString('en-US', { timeZone: c.tz }));
          const hr = cParts.getHours() + cParts.getMinutes() / 60;
          const pct = Math.max(2, Math.min(98, (hr / 24) * 100));
          const isWork = hr >= 9 && hr <= 20;
          const tStr = now.toLocaleTimeString('en-US', { timeZone: c.tz, hour: '2-digit', minute: '2-digit', hour12: true });
          return `
            <div onclick="pickCity(${idx})" class="cursor-pointer p-2 rounded-xl bg-white/5 hover:bg-white/10 space-y-1">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-semibold text-white truncate">${c.name}</span>
                <span class="font-mono ${isWork ? 'text-emerald-300' : 'text-indigo-300'}">${tStr} • ${isWork ? 'Day/Call Window' : 'Night'}</span>
              </div>
              <div class="h-1.5 rounded-full bg-slate-900 overflow-hidden relative">
                <div class="absolute inset-y-0 left-[37.5%] right-[16.6%] bg-emerald-500/25"></div>
                <div class="h-full bg-gradient-to-r from-indigo-400 via-amber-400 to-sky-400 rounded-full" style="width:${pct.toFixed(1)}%"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Saved Family Kundali Profiles
    const DEFAULT_JY_PROFILES = [
      { id: 'prof_vinod', name: 'Vinod', dob: '1995-10-15', tob: '08:30', place: '17.3850|78.4867|Hyderabad / Secunderabad' },
      { id: 'prof_thulja', name: 'Thulja', dob: '1997-05-12', tob: '09:15', place: '17.3850|78.4867|Hyderabad / Secunderabad' },
      { id: 'prof_rudransh', name: 'Rudransh', dob: '2025-11-15', tob: '10:30', place: '17.3850|78.4867|Hyderabad / Secunderabad' }
    ];

    function getSavedJyProfiles() {
      try {
        const raw = localStorage.getItem('panchtattva_jy_profiles');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length) return parsed;
        }
      } catch (e) {}
      return DEFAULT_JY_PROFILES;
    }

    function renderSavedJyProfiles() {
      const bar = document.getElementById('savedJyProfilesBar');
      if (!bar) return;
      const list = getSavedJyProfiles();
      bar.innerHTML = list.map(p => `
        <button type="button" onclick="loadJyProfile('${p.id}')" class="px-2.5 py-1 rounded-full bg-white/10 hover:bg-amber-500/25 border border-white/15 text-[11px] text-amber-200 font-semibold">
          👤 ${p.name}
        </button>
      `).join('');
    }

    window.loadJyProfile = (id) => {
      const p = getSavedJyProfiles().find(x => x.id === id);
      if (!p) return;
      if (document.getElementById('jyName')) document.getElementById('jyName').value = p.name;
      if (document.getElementById('jyDob')) document.getElementById('jyDob').value = p.dob;
      if (document.getElementById('jyTob')) document.getElementById('jyTob').value = p.tob;
      if (document.getElementById('jyPlace')) document.getElementById('jyPlace').value = p.place;
      renderJathakam();
      renderAll();
    };

    window.saveCurrentJyProfile = () => {
      const name = (document.getElementById('jyName')?.value || '').trim();
      const dob = document.getElementById('jyDob')?.value || '1995-10-15';
      const tob = document.getElementById('jyTob')?.value || '08:30';
      const place = document.getElementById('jyPlace')?.value || '17.3850|78.4867|Hyderabad / Secunderabad';
      if (!name) return;
      const list = getSavedJyProfiles();
      const idx = list.findIndex(x => x.name.toLowerCase() === name.toLowerCase());
      const entry = { id: idx >= 0 ? list[idx].id : 'prof_' + Date.now(), name, dob, tob, place };
      if (idx >= 0) list[idx] = entry;
      else list.push(entry);
      try { localStorage.setItem('panchtattva_jy_profiles', JSON.stringify(list)); } catch (e) {}
      renderSavedJyProfiles();
    };

    // Gochara Transit House from Selected Rashi on Selected Date
    function buildGocharaTransitHtml(rashiIdx) {
      const isTe = currentLang === 'te';
      const city = cities[selectedCityIndex] || cities[0];
      const pToday = getPanchangam(new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 1, 0, 0)), city.tz);
      const jd = getJulianDay(selectedDate);
      const ayan = getLahiriAyanamsha(jd);
      const T = (jd - 2451545.0) / 36525.0;
      const jupIdx = Math.floor((((34.35 + 3034.906 * T - ayan) % 360) + 360) % 360 / 30);
      const satIdx = Math.floor((((50.07 + 1222.114 * T - ayan) % 360) + 360) % 360 / 30);
      const rahuIdx = Math.floor((((125.04 - 1934.136 * T - ayan) % 360) + 360) % 360 / 30);

      const hMoon = ((pToday.rashiIdx - rashiIdx + 12) % 12) + 1;
      const hSun = ((pToday.sunRashiIdx - rashiIdx + 12) % 12) + 1;
      const hJup = ((jupIdx - rashiIdx + 12) % 12) + 1;
      const hSat = ((satIdx - rashiIdx + 12) % 12) + 1;
      const hRahu = ((rahuIdx - rashiIdx + 12) % 12) + 1;

      const chandraNote = [1, 3, 6, 7, 10, 11].includes(hMoon)
        ? (isTe ? 'చంద్రబలం అనుకూలం (శుభం)' : 'Chandra Balam Favorable')
        : (hMoon === 8 ? (isTe ? 'అష్టమ చంద్రుడు (జాగ్రత్త)' : 'Ashtama Chandra (Caution)') : (isTe ? 'సాధారణ చంద్ర సంచారం' : 'Moderate Moon Transit'));

      return `
        <div class="p-2.5 rounded-xl bg-indigo-950/35 border border-indigo-400/25 space-y-1 text-[11px]">
          <div class="flex items-center justify-between">
            <span class="font-bold text-indigo-300">🌌 ${isTe ? 'గోచార స్థితి' : 'Gochara Transit'} (${datePicker.value})</span>
            <span class="text-[10px] font-mono text-emerald-300">${chandraNote}</span>
          </div>
          <div class="text-slate-300 font-mono text-[10px]">
            Chandra: H${hMoon} • Surya: H${hSun} • Guru: H${hJup} • Shani: H${hSat} • Rahu: H${hRahu}
          </div>
        </div>
      `;
    }

    // Multi-Temple Yatra Route Planner
    let yatraStopIds = [];
    try {
      const savedY = JSON.parse(localStorage.getItem('panchtattva_yatra_ids') || '[]');
      if (Array.isArray(savedY)) yatraStopIds = savedY;
    } catch (e) {}

    window.toggleYatraStop = (templeId) => {
      const idx = yatraStopIds.indexOf(templeId);
      if (idx >= 0) yatraStopIds.splice(idx, 1);
      else if (yatraStopIds.length < 6) yatraStopIds.push(templeId);
      try { localStorage.setItem('panchtattva_yatra_ids', JSON.stringify(yatraStopIds)); } catch (e) {}
      renderYatraPlanner();
      renderTemples();
    };

    window.clearYatraStops = () => {
      yatraStopIds = [];
      try { localStorage.setItem('panchtattva_yatra_ids', '[]'); } catch (e) {}
      renderYatraPlanner();
      renderTemples();
    };

    function renderYatraPlanner() {
      const body = document.getElementById('yatraPlannerBody');
      if (!body) return;
      const stops = yatraStopIds.map(id => BASE_TEMPLES.find(t => t.id === id)).filter(Boolean);
      if (!stops.length) {
        body.innerHTML = `<p class="text-[11px] text-slate-400">Tap <strong class="text-amber-300">+ Yatra</strong> on up to 6 temples below to build an ordered pilgrimage route with total distance and multi-stop Google Maps navigation.</p>`;
        return;
      }
      let prevLat = userOrigin.lat, prevLon = userOrigin.lon, totalKm = 0;
      const legsHtml = stops.map((st, idx) => {
        const legKm = haversineKm(prevLat, prevLon, st.lat, st.lon);
        totalKm += legKm;
        prevLat = st.lat; prevLon = st.lon;
        return `
          <div class="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/5 text-[11px]">
            <div class="min-w-0 truncate">
              <span class="font-mono text-amber-300 font-bold">#${idx + 1}</span>
              <span class="text-white font-semibold ml-1">${st.name}</span>
              <span class="text-slate-400 text-[10px] ml-1">(+${legKm} km)</span>
            </div>
            <button type="button" onclick="toggleYatraStop('${st.id}')" class="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-200 shrink-0">✕</button>
          </div>
        `;
      }).join('');

      const dest = stops[stops.length - 1];
      const waypts = stops.slice(0, -1).map(s => `${s.lat},${s.lon}`).join('|');
      const multiMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${userOrigin.lat},${userOrigin.lon}&destination=${dest.lat},${dest.lon}${waypts ? '&waypoints=' + encodeURIComponent(waypts) : ''}&travelmode=driving`;

      body.innerHTML = `
        <div class="space-y-1.5">
          ${legsHtml}
          <div class="flex items-center justify-between pt-1.5 border-t border-white/10 text-[11px]">
            <span class="text-emerald-300 font-bold">Total Route (${stops.length} shrines): ~${totalKm} km</span>
            <a href="${multiMapUrl}" target="_blank" rel="noopener" class="px-2.5 py-1 rounded-xl bg-emerald-500 text-slate-950 font-bold text-[11px]">🗺️ Open Multi-Stop Route ↗</a>
          </div>
        </div>
      `;
    }

    function getTempleFieldTips(t) {
      const name = (t.name || '').toLowerCase();
      const state = t.state || '';
      if (name.includes('tirumala') || name.includes('venkateswara')) {
        return 'Traditional attire mandatory (Dhoti/Kurta for men; Saree/Salwar with dupatta for women). Book ₹300 Special Entry Darshan & laddu tokens online in advance.';
      }
      if (state === 'Kerala') {
        return 'Traditional Kerala temple dress code applies (Mundu/Dhoti for men; Saree/Long skirt & blouse for women). Remove shirts/vests before entering Nalambalam.';
      }
      if (state === 'Tamil Nadu') {
        return 'Modest traditional attire recommended; mobile phones & cameras are restricted inside inner Prakarams. Morning Abhishekam hours offer calmer darshan.';
      }
      if (name.includes('srisailam') || name.includes('ahobilam') || name.includes('yadadri') || name.includes('simhachalam')) {
        return 'Hill/ghat shrine: carry light footwear for outer steps, arrive early for Abhishekam/Archana, and check ghat road timings for evening return.';
      }
      return 'Arrive during early morning Suprabhatam/Abhishekam or evening sandhya aarti for serene darshan; modest traditional dress recommended.';
    }

    // Calendar Vratam Filter
    let activeCalVratFilter = 'ALL';
    window.setCalVratFilter = (mode) => {
      activeCalVratFilter = mode;
      document.querySelectorAll('.calvrat-chip').forEach(btn => {
        const active = btn.dataset.calvrat === mode;
        btn.className = `calvrat-chip px-2 py-0.5 rounded-full text-[10px] shrink-0 ${active ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-200'}`;
      });
      renderCalendar();
    };


    const INDIA_DIVISIONS = {"Telangana": {"Medchal-Malkajgiri": {"Alwal": ["Macha Bolarum - 133", "Alwal - 132", "Venkatapuram - 134"], "Malkajgiri": ["Malkajgiri - 136", "Gautam Nagar - 137", "Neredmet - 135"], "Quthbullapur": ["Jeedimetla - 129", "Suraram - 128", "Chintal - 130"], "Kukatpally": ["Kukatpally - 114", "Allwyn Colony - 115", "Moosapet - 116"]}, "Hyderabad": {"Secunderabad": ["Trimulgherry - 131", "Bolarum / Cantonment", "Addagutta - 147", "Metuguda - 144", "Sitaphalmandi - 145"], "Khairatabad": ["Jubilee Hills - 91", "Banjara Hills - 92", "Khairatabad - 93", "Somajiguda - 94"], "Amberpet": ["Amberpet - 22", "Kachiguda - 24", "Golnaka - 23"], "Charminar": ["Charminar - 54", "Falaknuma - 57", "Pathergatti - 52"], "Nampally": ["Nampally - 75", "Goshamahal - 76", "Malakpet - 25"]}, "Yadadri Bhuvanagiri": {"Yadagirigutta": ["Yadadri Hilltop", "Raigir", "Vangapally"], "Bhongir": ["Bhongir Town", "Bommalaramaram", "Bibinagar"]}, "Hanamkonda": {"Hanamkonda": ["Hanamkonda Central", "Subedari", "Kazipet"], "Mulugu": ["Ramappa / Palampet", "Venkatapur", "Laknavaram"]}, "Warangal": {"Warangal": ["Warangal Fort", "Bhadrakali Bund", "Matwada"]}, "Bhadradri Kothagudem": {"Bhadrachalam": ["Bhadrachalam Town", "Parnasala", "Dummugudem"]}, "Rajanna Sircilla": {"Vemulawada": ["Vemulawada Town", "Konaraopeta", "Boinpalli"]}, "Nirmal": {"Basar": ["Basar Saraswati Kshetra", "Mudhole", "Tanoor"]}, "Jogulamba Gadwal": {"Alampur": ["Alampur Town", "Undavelli / Sangamam", "Beechupally"]}, "Jagtial": {"Jagtial": ["Kondagattu Ghat", "Dharmapuri", "Mallial"]}, "Jayashankar Bhupalpally": {"Mahadevpur": ["Kaleshwaram Sangamam", "Mahadevpur Town"]}, "Siddipet": {"Komuravelli": ["Komuravelli Mallanna", "Wargal Saraswati"]}, "Rangareddy": {"Moinabad": ["Chilkur", "Moinabad Town"], "Hayathnagar": ["Sanghi Nagar", "Ramoji Corridor", "Abdullapurmet"]}}, "Andhra Pradesh": {"Tirupati": {"Tirumala": ["Tirumala Hilltop", "Papavinasam / Akasa Ganga", "Silathoranam"], "Tirupati Urban": ["Tirupati Central", "Tiruchanur", "Kapila Theertham"], "Srikalahasti": ["Srikalahasti Town", "Bharadwaja Theertham"]}, "Nandyal": {"Srisailam": ["Srisailam Hilltop", "Pathala Ganga", "Sakshi Ganapati"], "Mahanandi": ["Mahanandi Kshetra", "Nandyal Town"], "Ahobilam": ["Lower Ahobilam", "Upper Ahobilam"]}, "Vijayawada": {"Vijayawada Central": ["Indrakeeladri Hill", "One Town / Bhavani Island", "Benz Circle"]}, "Visakhapatnam": {"Pendurthi / Simhachalam": ["Simhagiri Hilltop", "Pendurthi", "Gopalapatnam"], "Visakhapatnam Urban": ["RK Beach / Kailasagiri", "Rushikonda", "MVP Colony"]}, "Kakinada": {"Annavaram": ["Ratnagiri Hilltop", "Annavaram Town"], "Pithapuram": ["Pithapuram Shakti Peetha", "Pada Gaya"]}, "Konaseema": {"Draksharama": ["Draksharama Pancharama", "Kotipalli"], "Antarvedi": ["Antarvedi Sangamam", "Narasapur / Palakollu"]}, "Eluru": {"Dwaraka Tirumala": ["Chinna Tirupati Hill", "Bhimadole"]}, "Guntur": {"Mangalagiri": ["Mangalagiri Hilltop", "Tenali"]}, "Palnadu": {"Amaravati": ["Amaravati Riverfront", "Dharanikota"]}, "West Godavari": {"Bhimavaram": ["Bhimavaram Town", "Undi"]}, "Srikakulam": {"Arasavalli": ["Arasavalli Surya Kshetra", "Srikurmam"]}, "Nellore": {"Nellore": ["Nellore Pennar Bank", "Kavali"]}, "Anantapur": {"Guntakal": ["Kasapuram", "Gooty"]}, "Kurnool": {"Mantralayam": ["Mantralayam Tungabhadra", "Yemmiganur"]}, "Sri Sathya Sai": {"Lepakshi": ["Lepakshi Heritage", "Hindupur", "Puttaparthi"]}, "Chittoor": {"Kanipakam": ["Kanipakam Temple", "Chittoor Town"]}}, "Tamil Nadu": {"Madurai": {"Madurai North": ["Meenakshi Temple Ward", "Goripalayam", "Thirumalai Nayak"]}, "Ramanathapuram": {"Rameswaram": ["Rameswaram Island", "Dhanushkodi"]}, "Tiruchirappalli": {"Srirangam": ["Srirangam Island", "Thiruvanaikaval", "Rockfort"]}, "Thanjavur": {"Thanjavur": ["Big Temple Ward", "Kumbakonam", "Swamimalai"]}, "Tiruvannamalai": {"Tiruvannamalai": ["Arunachaleswarar Girivalam", "Chengam"]}, "Cuddalore": {"Chidambaram": ["Thillai Nataraja Ward", "Bhuvanagiri"]}, "Kanchipuram": {"Kanchipuram": ["Ekambareswarar / Kamakshi Ward", "Varadaraja Perumal"]}, "Dindigul": {"Palani": ["Palani Hilltop", "Kodaikanal"]}, "Thoothukudi": {"Tiruchendur": ["Tiruchendur Seashore", "Tuticorin"]}, "Chennai": {"Mylapore": ["Mylapore Tank", "Triplicane", "Adyar"]}, "Tirunelveli": {"Tirunelveli": ["Nellaiappar Ward", "Palayamkottai"]}, "Kanyakumari": {"Kanyakumari": ["Triveni Sangamam", "Suchindram", "Nagercoil"]}, "Mayiladuthurai": {"Sirkazhi": ["Vaitheeswaran Koil", "Thirukadaiyur"]}, "Karaikal": {"Thirunallar": ["Thirunallar Sani Kshetra", "Karaikal Town"]}, "Coimbatore": {"Coimbatore North": ["Marudhamalai", "Karamadai", "Gandhipuram"]}, "Virudhunagar": {"Srivilliputhur": ["Andal Temple Ward", "Rajapalayam"]}, "Chengalpattu": {"Mahabalipuram": ["Shore Temple Ward", "Thirukazhukundram"]}, "Ranipet": {"Sholinghur": ["Sholinghur Hill", "Arakkonam"]}, "Tiruvallur": {"Tiruttani": ["Tiruttani Hill", "Tiruvallur Town"]}}, "Karnataka": {"Vijayanagara": {"Hospet": ["Hampi Virupaksha", "Kamalapur", "Anjanadri"]}, "Udupi": {"Udupi": ["Car Street Krishna Matha", "Malpe"], "Kollur": ["Kollur Mookambika", "Byndoor"]}, "Dakshina Kannada": {"Kadaba": ["Kukke Subramanya", "Subrahmanya"], "Belthangady": ["Dharmasthala", "Ujire"], "Mangaluru": ["Kadri", "Kateel", "Hampankatta"]}, "Uttara Kannada": {"Bhatkal": ["Murudeshwar Coast", "Bhatkal"], "Kumta": ["Gokarna Mahabaleshwar", "Om Beach"], "Sirsi": ["Sirsi Town", "Banavasi"]}, "Mysuru": {"Mysuru": ["Chamundi Hills", "Mysore Palace", "Nanjangud"]}, "Chikkamagaluru": {"Sringeri": ["Sringeri Tunga Bank", "Horanadu", "Kalasa"]}, "Hassan": {"Belur": ["Belur Temple Ward", "Halebidu"]}, "Mandya": {"Srirangapatna": ["Srirangapatna Island", "Melukote"]}, "Bengaluru": {"Bengaluru North": ["Rajajinagar / ISKCON", "Malleshwaram", "Yesvantpur"], "Bengaluru South": ["Basavanagudi Bull Temple", "Jayanagar", "Lalbagh"]}, "Bagalkot": {"Badami": ["Badami Caves", "Pattadakal", "Aihole"]}, "Tumakuru": {"Tumakuru": ["Devarayanadurga", "Siddaganga"]}}, "Kerala": {"Thiruvananthapuram": {"Thiruvananthapuram": ["Fort / Padmanabhaswamy", "Attukal", "Varkala"]}, "Pathanamthitta": {"Ranni": ["Sabarimala / Pamba", "Nilakkal"], "Kozhencherry": ["Aranmula", "Thiruvalla"]}, "Thrissur": {"Chavakkad": ["Guruvayur", "Mammiyoor"], "Thrissur": ["Thekkinkadu Maidan", "Kodungallur", "Thiruvilwamala"]}, "Ernakulam": {"Kanayannur": ["Chottanikkara", "Tripunithura", "Ernakulam"]}, "Alappuzha": {"Ambalappuzha": ["Ambalappuzha", "Alleppey"], "Karthikappally": ["Mannarasala", "Haripad"]}, "Kollam": {"Kottarakkara": ["Kottarakkara", "Kollam"]}, "Wayanad": {"Mananthavady": ["Thirunelli", "Kalpetta"]}, "Kasaragod": {"Kasaragod": ["Ananthapura", "Bekal"]}, "Kannur": {"Taliparamba": ["Taliparamba", "Parassinikadavu", "Kannur"]}, "Malappuram": {"Tirur": ["Tirunavaya", "Kottakkal"]}}};
    const FEST_50YR = {"2026": [{"date": "2026-01-15", "key": "sankranti"}, {"date": "2026-01-25", "key": "ratha_saptami"}, {"date": "2026-01-26", "key": "republic_day"}, {"date": "2026-02-16", "key": "maha_shivaratri"}, {"date": "2026-03-03", "key": "holi"}, {"date": "2026-03-20", "key": "eid_ul_fitr"}, {"date": "2026-03-27", "key": "rama_navami"}, {"date": "2026-04-03", "key": "good_friday"}, {"date": "2026-05-12", "key": "hanuman_jayanti"}, {"date": "2026-05-27", "key": "bakrid_eid_al_adha"}, {"date": "2026-08-15", "key": "independence_day"}, {"date": "2026-08-28", "key": "varalakshmi"}, {"date": "2026-09-04", "key": "janmashtami"}, {"date": "2026-09-15", "key": "vinayaka_chavithi"}, {"date": "2026-10-02", "key": "gandhi_jayanti"}, {"date": "2026-10-10", "key": "mahalaya_amavasya"}, {"date": "2026-10-21", "key": "vijaya_dashami"}, {"date": "2026-11-09", "key": "deepavali"}, {"date": "2026-11-13", "key": "nagula_chavithi"}, {"date": "2026-11-24", "key": "karthika_pournami"}, {"date": "2026-12-20", "key": "vaikuntha_ekadashi"}, {"date": "2026-12-25", "key": "christmas_day"}], "2027": [{"date": "2027-01-15", "key": "sankranti"}, {"date": "2027-01-26", "key": "republic_day"}, {"date": "2027-02-13", "key": "ratha_saptami"}, {"date": "2027-03-07", "key": "maha_shivaratri"}, {"date": "2027-03-09", "key": "eid_ul_fitr"}, {"date": "2027-03-22", "key": "holi"}, {"date": "2027-03-26", "key": "good_friday"}, {"date": "2027-04-07", "key": "ugadi"}, {"date": "2027-04-15", "key": "rama_navami"}, {"date": "2027-05-16", "key": "bakrid_eid_al_adha"}, {"date": "2027-05-31", "key": "hanuman_jayanti"}, {"date": "2027-08-13", "key": "varalakshmi"}, {"date": "2027-08-15", "key": "independence_day"}, {"date": "2027-08-25", "key": "janmashtami"}, {"date": "2027-09-04", "key": "vinayaka_chavithi"}, {"date": "2027-09-30", "key": "mahalaya_amavasya"}, {"date": "2027-10-02", "key": "gandhi_jayanti"}, {"date": "2027-10-10", "key": "vijaya_dashami"}, {"date": "2027-10-29", "key": "deepavali"}, {"date": "2027-11-02", "key": "nagula_chavithi"}, {"date": "2027-11-14", "key": "karthika_pournami"}, {"date": "2027-12-09", "key": "vaikuntha_ekadashi"}, {"date": "2027-12-25", "key": "christmas_day"}], "2028": [{"date": "2028-01-15", "key": "sankranti"}, {"date": "2028-01-26", "key": "republic_day"}, {"date": "2028-02-03", "key": "ratha_saptami"}, {"date": "2028-02-24", "key": "maha_shivaratri"}, {"date": "2028-02-27", "key": "eid_ul_fitr"}, {"date": "2028-03-11", "key": "holi"}, {"date": "2028-03-27", "key": "ugadi"}, {"date": "2028-04-04", "key": "rama_navami"}, {"date": "2028-04-14", "key": "good_friday"}, {"date": "2028-05-05", "key": "bakrid_eid_al_adha"}, {"date": "2028-05-19", "key": "hanuman_jayanti"}, {"date": "2028-08-04", "key": "varalakshmi"}, {"date": "2028-08-13", "key": "janmashtami"}, {"date": "2028-08-15", "key": "independence_day"}, {"date": "2028-08-23", "key": "vinayaka_chavithi"}, {"date": "2028-09-18", "key": "mahalaya_amavasya"}, {"date": "2028-09-28", "key": "vijaya_dashami"}, {"date": "2028-10-02", "key": "gandhi_jayanti"}, {"date": "2028-10-18", "key": "deepavali"}, {"date": "2028-10-21", "key": "nagula_chavithi"}, {"date": "2028-11-02", "key": "karthika_pournami"}, {"date": "2028-11-27", "key": "vaikuntha_ekadashi"}, {"date": "2028-12-25", "key": "christmas_day"}], "2029": [{"date": "2029-01-15", "key": "sankranti"}, {"date": "2029-01-22", "key": "ratha_saptami"}, {"date": "2029-01-26", "key": "republic_day"}, {"date": "2029-02-12", "key": "maha_shivaratri"}, {"date": "2029-02-15", "key": "eid_ul_fitr"}, {"date": "2029-02-28", "key": "holi"}, {"date": "2029-03-30", "key": "good_friday"}, {"date": "2029-04-14", "key": "ugadi"}, {"date": "2029-04-23", "key": "rama_navami"}, {"date": "2029-04-24", "key": "bakrid_eid_al_adha"}, {"date": "2029-06-06", "key": "hanuman_jayanti"}, {"date": "2029-08-15", "key": "independence_day"}, {"date": "2029-08-24", "key": "varalakshmi"}, {"date": "2029-09-01", "key": "janmashtami"}, {"date": "2029-10-02", "key": "gandhi_jayanti"}, {"date": "2029-10-07", "key": "mahalaya_amavasya"}, {"date": "2029-10-16", "key": "vijaya_dashami"}, {"date": "2029-11-06", "key": "deepavali"}, {"date": "2029-11-09", "key": "nagula_chavithi"}, {"date": "2029-11-21", "key": "karthika_pournami"}, {"date": "2029-12-16", "key": "vaikuntha_ekadashi"}, {"date": "2029-12-25", "key": "christmas_day"}], "2030": [{"date": "2030-01-15", "key": "sankranti"}, {"date": "2030-01-26", "key": "republic_day"}, {"date": "2030-02-04", "key": "eid_ul_fitr"}, {"date": "2030-02-09", "key": "ratha_saptami"}, {"date": "2030-03-03", "key": "maha_shivaratri"}, {"date": "2030-03-19", "key": "holi"}, {"date": "2030-04-03", "key": "ugadi"}, {"date": "2030-04-12", "key": "rama_navami"}, {"date": "2030-04-13", "key": "bakrid_eid_al_adha"}, {"date": "2030-04-19", "key": "good_friday"}, {"date": "2030-05-26", "key": "hanuman_jayanti"}, {"date": "2030-08-09", "key": "varalakshmi"}, {"date": "2030-08-15", "key": "independence_day"}, {"date": "2030-08-21", "key": "janmashtami"}, {"date": "2030-09-01", "key": "vinayaka_chavithi"}, {"date": "2030-09-27", "key": "mahalaya_amavasya"}, {"date": "2030-10-02", "key": "gandhi_jayanti"}, {"date": "2030-10-06", "key": "vijaya_dashami"}, {"date": "2030-10-26", "key": "deepavali"}, {"date": "2030-10-30", "key": "nagula_chavithi"}, {"date": "2030-11-10", "key": "karthika_pournami"}, {"date": "2030-12-05", "key": "vaikuntha_ekadashi"}, {"date": "2030-12-25", "key": "christmas_day"}], "2031": [{"date": "2031-01-15", "key": "sankranti"}, {"date": "2031-01-25", "key": "eid_ul_fitr"}, {"date": "2031-01-26", "key": "republic_day"}, {"date": "2031-01-29", "key": "ratha_saptami"}, {"date": "2031-02-20", "key": "maha_shivaratri"}, {"date": "2031-03-09", "key": "holi"}, {"date": "2031-03-24", "key": "ugadi"}, {"date": "2031-04-01", "key": "rama_navami"}, {"date": "2031-04-03", "key": "bakrid_eid_al_adha"}, {"date": "2031-04-11", "key": "good_friday"}, {"date": "2031-05-16", "key": "hanuman_jayanti"}, {"date": "2031-08-01", "key": "varalakshmi"}, {"date": "2031-08-10", "key": "janmashtami"}, {"date": "2031-08-15", "key": "independence_day"}, {"date": "2031-09-20", "key": "vinayaka_chavithi"}, {"date": "2031-10-02", "key": "gandhi_jayanti"}, {"date": "2031-10-16", "key": "mahalaya_amavasya"}, {"date": "2031-10-25", "key": "vijaya_dashami"}, {"date": "2031-11-14", "key": "deepavali"}, {"date": "2031-11-18", "key": "nagula_chavithi"}, {"date": "2031-11-28", "key": "karthika_pournami"}, {"date": "2031-12-24", "key": "vaikuntha_ekadashi"}, {"date": "2031-12-25", "key": "christmas_day"}], "2032": [{"date": "2032-01-14", "key": "eid_ul_fitr"}, {"date": "2032-01-15", "key": "sankranti"}, {"date": "2032-01-26", "key": "republic_day"}, {"date": "2032-02-17", "key": "ratha_saptami"}, {"date": "2032-03-10", "key": "maha_shivaratri"}, {"date": "2032-03-22", "key": "bakrid_eid_al_adha"}, {"date": "2032-03-26", "key": "good_friday"}, {"date": "2032-03-27", "key": "holi"}, {"date": "2032-04-19", "key": "rama_navami"}, {"date": "2032-06-03", "key": "hanuman_jayanti"}, {"date": "2032-08-15", "key": "independence_day"}, {"date": "2032-08-20", "key": "varalakshmi"}, {"date": "2032-08-28", "key": "janmashtami"}, {"date": "2032-09-09", "key": "vinayaka_chavithi"}, {"date": "2032-10-02", "key": "gandhi_jayanti"}, {"date": "2032-10-04", "key": "mahalaya_amavasya"}, {"date": "2032-10-14", "key": "vijaya_dashami"}, {"date": "2032-11-03", "key": "deepavali"}, {"date": "2032-11-07", "key": "nagula_chavithi"}, {"date": "2032-11-17", "key": "karthika_pournami"}, {"date": "2032-12-13", "key": "vaikuntha_ekadashi"}, {"date": "2032-12-25", "key": "christmas_day"}], "2033": [{"date": "2033-01-03", "key": "eid_ul_fitr"}, {"date": "2033-01-15", "key": "sankranti"}, {"date": "2033-01-26", "key": "republic_day"}, {"date": "2033-02-06", "key": "ratha_saptami"}, {"date": "2033-02-28", "key": "maha_shivaratri"}, {"date": "2033-03-12", "key": "bakrid_eid_al_adha"}, {"date": "2033-03-16", "key": "holi"}, {"date": "2033-03-31", "key": "ugadi"}, {"date": "2033-04-08", "key": "rama_navami"}, {"date": "2033-04-15", "key": "good_friday"}, {"date": "2033-05-24", "key": "hanuman_jayanti"}, {"date": "2033-08-15", "key": "independence_day"}, {"date": "2033-08-17", "key": "janmashtami"}, {"date": "2033-08-29", "key": "vinayaka_chavithi"}, {"date": "2033-09-23", "key": "mahalaya_amavasya"}, {"date": "2033-10-02", "key": "gandhi_jayanti"}, {"date": "2033-10-04", "key": "vijaya_dashami"}, {"date": "2033-10-23", "key": "deepavali"}, {"date": "2033-10-27", "key": "nagula_chavithi"}, {"date": "2033-11-06", "key": "karthika_pournami"}, {"date": "2033-12-02", "key": "vaikuntha_ekadashi"}, {"date": "2033-12-23", "key": "eid_ul_fitr"}, {"date": "2033-12-25", "key": "christmas_day"}], "2034": [{"date": "2034-01-15", "key": "sankranti"}, {"date": "2034-01-26", "key": "republic_day"}, {"date": "2034-01-26", "key": "ratha_saptami"}, {"date": "2034-02-18", "key": "maha_shivaratri"}, {"date": "2034-03-01", "key": "bakrid_eid_al_adha"}, {"date": "2034-03-05", "key": "holi"}, {"date": "2034-03-21", "key": "ugadi"}, {"date": "2034-03-28", "key": "rama_navami"}, {"date": "2034-04-07", "key": "good_friday"}, {"date": "2034-05-13", "key": "hanuman_jayanti"}, {"date": "2034-08-15", "key": "independence_day"}, {"date": "2034-08-25", "key": "varalakshmi"}, {"date": "2034-09-16", "key": "vinayaka_chavithi"}, {"date": "2034-10-02", "key": "gandhi_jayanti"}, {"date": "2034-10-12", "key": "mahalaya_amavasya"}, {"date": "2034-10-23", "key": "vijaya_dashami"}, {"date": "2034-11-11", "key": "deepavali"}, {"date": "2034-11-15", "key": "nagula_chavithi"}, {"date": "2034-12-12", "key": "eid_ul_fitr"}, {"date": "2034-12-25", "key": "christmas_day"}], "2035": [{"date": "2035-01-15", "key": "sankranti"}, {"date": "2035-01-26", "key": "republic_day"}, {"date": "2035-02-15", "key": "ratha_saptami"}, {"date": "2035-02-18", "key": "bakrid_eid_al_adha"}, {"date": "2035-03-08", "key": "maha_shivaratri"}, {"date": "2035-03-23", "key": "holi"}, {"date": "2035-03-23", "key": "good_friday"}, {"date": "2035-04-09", "key": "ugadi"}, {"date": "2035-04-16", "key": "rama_navami"}, {"date": "2035-06-01", "key": "hanuman_jayanti"}, {"date": "2035-08-15", "key": "independence_day"}, {"date": "2035-08-17", "key": "varalakshmi"}, {"date": "2035-08-26", "key": "janmashtami"}, {"date": "2035-09-05", "key": "vinayaka_chavithi"}, {"date": "2035-10-01", "key": "mahalaya_amavasya"}, {"date": "2035-10-02", "key": "gandhi_jayanti"}, {"date": "2035-10-12", "key": "vijaya_dashami"}, {"date": "2035-10-31", "key": "deepavali"}, {"date": "2035-11-04", "key": "nagula_chavithi"}, {"date": "2035-11-15", "key": "karthika_pournami"}, {"date": "2035-12-02", "key": "eid_ul_fitr"}, {"date": "2035-12-11", "key": "vaikuntha_ekadashi"}, {"date": "2035-12-25", "key": "christmas_day"}], "2036": [{"date": "2036-01-15", "key": "sankranti"}, {"date": "2036-01-26", "key": "republic_day"}, {"date": "2036-02-04", "key": "ratha_saptami"}, {"date": "2036-02-08", "key": "bakrid_eid_al_adha"}, {"date": "2036-02-26", "key": "maha_shivaratri"}, {"date": "2036-03-12", "key": "holi"}, {"date": "2036-03-28", "key": "ugadi"}, {"date": "2036-04-05", "key": "rama_navami"}, {"date": "2036-04-11", "key": "good_friday"}, {"date": "2036-05-21", "key": "hanuman_jayanti"}, {"date": "2036-08-15", "key": "independence_day"}, {"date": "2036-08-15", "key": "janmashtami"}, {"date": "2036-08-25", "key": "vinayaka_chavithi"}, {"date": "2036-09-20", "key": "mahalaya_amavasya"}, {"date": "2036-09-29", "key": "vijaya_dashami"}, {"date": "2036-10-02", "key": "gandhi_jayanti"}, {"date": "2036-10-19", "key": "deepavali"}, {"date": "2036-10-23", "key": "nagula_chavithi"}, {"date": "2036-11-20", "key": "eid_ul_fitr"}, {"date": "2036-11-29", "key": "vaikuntha_ekadashi"}, {"date": "2036-12-25", "key": "christmas_day"}], "2037": [{"date": "2037-01-15", "key": "sankranti"}, {"date": "2037-01-24", "key": "ratha_saptami"}, {"date": "2037-01-26", "key": "republic_day"}, {"date": "2037-01-27", "key": "bakrid_eid_al_adha"}, {"date": "2037-02-14", "key": "maha_shivaratri"}, {"date": "2037-03-18", "key": "ugadi"}, {"date": "2037-03-26", "key": "rama_navami"}, {"date": "2037-04-03", "key": "good_friday"}, {"date": "2037-05-09", "key": "hanuman_jayanti"}, {"date": "2037-08-15", "key": "independence_day"}, {"date": "2037-08-21", "key": "varalakshmi"}, {"date": "2037-09-03", "key": "janmashtami"}, {"date": "2037-09-13", "key": "vinayaka_chavithi"}, {"date": "2037-10-02", "key": "gandhi_jayanti"}, {"date": "2037-10-09", "key": "mahalaya_amavasya"}, {"date": "2037-10-18", "key": "vijaya_dashami"}, {"date": "2037-11-07", "key": "deepavali"}, {"date": "2037-11-09", "key": "eid_ul_fitr"}, {"date": "2037-11-11", "key": "nagula_chavithi"}, {"date": "2037-11-22", "key": "karthika_pournami"}, {"date": "2037-12-18", "key": "vaikuntha_ekadashi"}, {"date": "2037-12-25", "key": "christmas_day"}], "2038": [{"date": "2038-01-15", "key": "sankranti"}, {"date": "2038-01-16", "key": "bakrid_eid_al_adha"}, {"date": "2038-01-26", "key": "republic_day"}, {"date": "2038-02-11", "key": "ratha_saptami"}, {"date": "2038-03-04", "key": "maha_shivaratri"}, {"date": "2038-03-21", "key": "holi"}, {"date": "2038-04-05", "key": "ugadi"}, {"date": "2038-04-14", "key": "rama_navami"}, {"date": "2038-04-23", "key": "good_friday"}, {"date": "2038-05-28", "key": "hanuman_jayanti"}, {"date": "2038-08-13", "key": "varalakshmi"}, {"date": "2038-08-15", "key": "independence_day"}, {"date": "2038-08-23", "key": "janmashtami"}, {"date": "2038-09-28", "key": "mahalaya_amavasya"}, {"date": "2038-10-02", "key": "gandhi_jayanti"}, {"date": "2038-10-07", "key": "vijaya_dashami"}, {"date": "2038-10-28", "key": "deepavali"}, {"date": "2038-10-30", "key": "eid_ul_fitr"}, {"date": "2038-10-31", "key": "nagula_chavithi"}, {"date": "2038-11-11", "key": "karthika_pournami"}, {"date": "2038-12-07", "key": "vaikuntha_ekadashi"}, {"date": "2038-12-25", "key": "christmas_day"}], "2039": [{"date": "2039-01-06", "key": "bakrid_eid_al_adha"}, {"date": "2039-01-15", "key": "sankranti"}, {"date": "2039-01-26", "key": "republic_day"}, {"date": "2039-01-31", "key": "ratha_saptami"}, {"date": "2039-02-22", "key": "maha_shivaratri"}, {"date": "2039-03-10", "key": "holi"}, {"date": "2039-03-25", "key": "ugadi"}, {"date": "2039-04-03", "key": "rama_navami"}, {"date": "2039-04-08", "key": "good_friday"}, {"date": "2039-05-17", "key": "hanuman_jayanti"}, {"date": "2039-08-12", "key": "janmashtami"}, {"date": "2039-08-15", "key": "independence_day"}, {"date": "2039-08-23", "key": "vinayaka_chavithi"}, {"date": "2039-09-18", "key": "mahalaya_amavasya"}, {"date": "2039-10-02", "key": "gandhi_jayanti"}, {"date": "2039-10-19", "key": "eid_ul_fitr"}, {"date": "2039-10-26", "key": "vijaya_dashami"}, {"date": "2039-11-16", "key": "deepavali"}, {"date": "2039-11-19", "key": "nagula_chavithi"}, {"date": "2039-11-30", "key": "karthika_pournami"}, {"date": "2039-12-25", "key": "christmas_day"}, {"date": "2039-12-26", "key": "vaikuntha_ekadashi"}, {"date": "2039-12-26", "key": "bakrid_eid_al_adha"}], "2040": [{"date": "2040-01-15", "key": "sankranti"}, {"date": "2040-01-26", "key": "republic_day"}, {"date": "2040-02-19", "key": "ratha_saptami"}, {"date": "2040-03-12", "key": "maha_shivaratri"}, {"date": "2040-03-28", "key": "holi"}, {"date": "2040-03-30", "key": "good_friday"}, {"date": "2040-04-12", "key": "ugadi"}, {"date": "2040-04-21", "key": "rama_navami"}, {"date": "2040-06-04", "key": "hanuman_jayanti"}, {"date": "2040-08-15", "key": "independence_day"}, {"date": "2040-08-29", "key": "janmashtami"}, {"date": "2040-09-10", "key": "vinayaka_chavithi"}, {"date": "2040-10-02", "key": "gandhi_jayanti"}, {"date": "2040-10-06", "key": "mahalaya_amavasya"}, {"date": "2040-10-08", "key": "eid_ul_fitr"}, {"date": "2040-10-15", "key": "vijaya_dashami"}, {"date": "2040-11-04", "key": "deepavali"}, {"date": "2040-11-08", "key": "nagula_chavithi"}, {"date": "2040-11-18", "key": "karthika_pournami"}, {"date": "2040-12-14", "key": "vaikuntha_ekadashi"}, {"date": "2040-12-15", "key": "bakrid_eid_al_adha"}, {"date": "2040-12-25", "key": "christmas_day"}], "2041": [{"date": "2041-01-15", "key": "sankranti"}, {"date": "2041-01-26", "key": "republic_day"}, {"date": "2041-02-07", "key": "ratha_saptami"}, {"date": "2041-03-01", "key": "maha_shivaratri"}, {"date": "2041-03-17", "key": "holi"}, {"date": "2041-04-10", "key": "rama_navami"}, {"date": "2041-04-19", "key": "good_friday"}, {"date": "2041-05-25", "key": "hanuman_jayanti"}, {"date": "2041-08-09", "key": "varalakshmi"}, {"date": "2041-08-15", "key": "independence_day"}, {"date": "2041-08-19", "key": "janmashtami"}, {"date": "2041-08-31", "key": "vinayaka_chavithi"}, {"date": "2041-09-25", "key": "mahalaya_amavasya"}, {"date": "2041-09-27", "key": "eid_ul_fitr"}, {"date": "2041-10-02", "key": "gandhi_jayanti"}, {"date": "2041-10-05", "key": "vijaya_dashami"}, {"date": "2041-10-25", "key": "deepavali"}, {"date": "2041-10-29", "key": "nagula_chavithi"}, {"date": "2041-11-08", "key": "karthika_pournami"}, {"date": "2041-12-04", "key": "bakrid_eid_al_adha"}, {"date": "2041-12-25", "key": "christmas_day"}], "2042": [{"date": "2042-01-15", "key": "sankranti"}, {"date": "2042-01-26", "key": "republic_day"}, {"date": "2042-01-28", "key": "ratha_saptami"}, {"date": "2042-02-19", "key": "maha_shivaratri"}, {"date": "2042-03-06", "key": "holi"}, {"date": "2042-03-22", "key": "ugadi"}, {"date": "2042-03-30", "key": "rama_navami"}, {"date": "2042-04-04", "key": "good_friday"}, {"date": "2042-05-15", "key": "hanuman_jayanti"}, {"date": "2042-08-15", "key": "independence_day"}, {"date": "2042-08-29", "key": "varalakshmi"}, {"date": "2042-09-07", "key": "janmashtami"}, {"date": "2042-09-16", "key": "eid_ul_fitr"}, {"date": "2042-09-18", "key": "vinayaka_chavithi"}, {"date": "2042-10-02", "key": "gandhi_jayanti"}, {"date": "2042-10-14", "key": "mahalaya_amavasya"}, {"date": "2042-10-24", "key": "vijaya_dashami"}, {"date": "2042-11-12", "key": "deepavali"}, {"date": "2042-11-17", "key": "nagula_chavithi"}, {"date": "2042-11-23", "key": "bakrid_eid_al_adha"}, {"date": "2042-11-27", "key": "karthika_pournami"}, {"date": "2042-12-23", "key": "vaikuntha_ekadashi"}, {"date": "2042-12-25", "key": "christmas_day"}], "2043": [{"date": "2043-01-15", "key": "sankranti"}, {"date": "2043-01-26", "key": "republic_day"}, {"date": "2043-02-16", "key": "ratha_saptami"}, {"date": "2043-03-10", "key": "maha_shivaratri"}, {"date": "2043-03-25", "key": "holi"}, {"date": "2043-03-27", "key": "good_friday"}, {"date": "2043-04-10", "key": "ugadi"}, {"date": "2043-04-17", "key": "rama_navami"}, {"date": "2043-06-03", "key": "hanuman_jayanti"}, {"date": "2043-08-15", "key": "independence_day"}, {"date": "2043-09-06", "key": "eid_ul_fitr"}, {"date": "2043-09-07", "key": "vinayaka_chavithi"}, {"date": "2043-10-02", "key": "gandhi_jayanti"}, {"date": "2043-10-03", "key": "mahalaya_amavasya"}, {"date": "2043-10-13", "key": "vijaya_dashami"}, {"date": "2043-11-01", "key": "deepavali"}, {"date": "2043-11-06", "key": "nagula_chavithi"}, {"date": "2043-11-13", "key": "bakrid_eid_al_adha"}, {"date": "2043-12-12", "key": "vaikuntha_ekadashi"}, {"date": "2043-12-25", "key": "christmas_day"}], "2044": [{"date": "2044-01-15", "key": "sankranti"}, {"date": "2044-01-26", "key": "republic_day"}, {"date": "2044-02-06", "key": "ratha_saptami"}, {"date": "2044-02-27", "key": "maha_shivaratri"}, {"date": "2044-03-13", "key": "holi"}, {"date": "2044-03-30", "key": "ugadi"}, {"date": "2044-04-06", "key": "rama_navami"}, {"date": "2044-04-15", "key": "good_friday"}, {"date": "2044-05-22", "key": "hanuman_jayanti"}, {"date": "2044-08-05", "key": "varalakshmi"}, {"date": "2044-08-15", "key": "independence_day"}, {"date": "2044-08-16", "key": "janmashtami"}, {"date": "2044-08-25", "key": "eid_ul_fitr"}, {"date": "2044-08-26", "key": "vinayaka_chavithi"}, {"date": "2044-09-21", "key": "mahalaya_amavasya"}, {"date": "2044-10-01", "key": "vijaya_dashami"}, {"date": "2044-10-02", "key": "gandhi_jayanti"}, {"date": "2044-10-20", "key": "deepavali"}, {"date": "2044-10-25", "key": "nagula_chavithi"}, {"date": "2044-11-01", "key": "bakrid_eid_al_adha"}, {"date": "2044-11-05", "key": "karthika_pournami"}, {"date": "2044-12-01", "key": "vaikuntha_ekadashi"}, {"date": "2044-12-25", "key": "christmas_day"}], "2045": [{"date": "2045-01-15", "key": "sankranti"}, {"date": "2045-01-25", "key": "ratha_saptami"}, {"date": "2045-01-26", "key": "republic_day"}, {"date": "2045-02-15", "key": "maha_shivaratri"}, {"date": "2045-03-03", "key": "holi"}, {"date": "2045-03-19", "key": "ugadi"}, {"date": "2045-03-27", "key": "rama_navami"}, {"date": "2045-04-07", "key": "good_friday"}, {"date": "2045-05-11", "key": "hanuman_jayanti"}, {"date": "2045-08-14", "key": "eid_ul_fitr"}, {"date": "2045-08-15", "key": "independence_day"}, {"date": "2045-08-25", "key": "varalakshmi"}, {"date": "2045-09-04", "key": "janmashtami"}, {"date": "2045-09-14", "key": "vinayaka_chavithi"}, {"date": "2045-10-02", "key": "gandhi_jayanti"}, {"date": "2045-10-10", "key": "mahalaya_amavasya"}, {"date": "2045-10-20", "key": "vijaya_dashami"}, {"date": "2045-10-21", "key": "bakrid_eid_al_adha"}, {"date": "2045-11-08", "key": "deepavali"}, {"date": "2045-11-12", "key": "nagula_chavithi"}, {"date": "2045-11-24", "key": "karthika_pournami"}, {"date": "2045-12-20", "key": "vaikuntha_ekadashi"}, {"date": "2045-12-25", "key": "christmas_day"}], "2046": [{"date": "2046-01-15", "key": "sankranti"}, {"date": "2046-01-26", "key": "republic_day"}, {"date": "2046-02-13", "key": "ratha_saptami"}, {"date": "2046-03-06", "key": "maha_shivaratri"}, {"date": "2046-03-22", "key": "holi"}, {"date": "2046-03-23", "key": "good_friday"}, {"date": "2046-04-07", "key": "ugadi"}, {"date": "2046-04-15", "key": "rama_navami"}, {"date": "2046-05-30", "key": "hanuman_jayanti"}, {"date": "2046-08-04", "key": "eid_ul_fitr"}, {"date": "2046-08-15", "key": "independence_day"}, {"date": "2046-08-25", "key": "janmashtami"}, {"date": "2046-09-04", "key": "vinayaka_chavithi"}, {"date": "2046-09-30", "key": "mahalaya_amavasya"}, {"date": "2046-10-02", "key": "gandhi_jayanti"}, {"date": "2046-10-09", "key": "vijaya_dashami"}, {"date": "2046-10-11", "key": "bakrid_eid_al_adha"}, {"date": "2046-10-29", "key": "deepavali"}, {"date": "2046-11-13", "key": "karthika_pournami"}, {"date": "2046-12-09", "key": "vaikuntha_ekadashi"}, {"date": "2046-12-25", "key": "christmas_day"}], "2047": [{"date": "2047-01-15", "key": "sankranti"}, {"date": "2047-01-26", "key": "republic_day"}, {"date": "2047-02-02", "key": "ratha_saptami"}, {"date": "2047-02-23", "key": "maha_shivaratri"}, {"date": "2047-03-12", "key": "holi"}, {"date": "2047-03-27", "key": "ugadi"}, {"date": "2047-04-05", "key": "rama_navami"}, {"date": "2047-04-12", "key": "good_friday"}, {"date": "2047-05-19", "key": "hanuman_jayanti"}, {"date": "2047-07-24", "key": "eid_ul_fitr"}, {"date": "2047-08-02", "key": "varalakshmi"}, {"date": "2047-08-14", "key": "janmashtami"}, {"date": "2047-08-15", "key": "independence_day"}, {"date": "2047-09-19", "key": "mahalaya_amavasya"}, {"date": "2047-09-28", "key": "vijaya_dashami"}, {"date": "2047-09-30", "key": "bakrid_eid_al_adha"}, {"date": "2047-10-02", "key": "gandhi_jayanti"}, {"date": "2047-10-19", "key": "deepavali"}, {"date": "2047-10-22", "key": "nagula_chavithi"}, {"date": "2047-11-02", "key": "karthika_pournami"}, {"date": "2047-11-28", "key": "vaikuntha_ekadashi"}, {"date": "2047-12-25", "key": "christmas_day"}], "2048": [{"date": "2048-01-15", "key": "sankranti"}, {"date": "2048-01-22", "key": "ratha_saptami"}, {"date": "2048-01-26", "key": "republic_day"}, {"date": "2048-02-13", "key": "maha_shivaratri"}, {"date": "2048-02-29", "key": "holi"}, {"date": "2048-04-03", "key": "good_friday"}, {"date": "2048-04-14", "key": "ugadi"}, {"date": "2048-04-22", "key": "rama_navami"}, {"date": "2048-06-06", "key": "hanuman_jayanti"}, {"date": "2048-07-12", "key": "eid_ul_fitr"}, {"date": "2048-08-15", "key": "independence_day"}, {"date": "2048-08-21", "key": "varalakshmi"}, {"date": "2048-08-31", "key": "janmashtami"}, {"date": "2048-09-12", "key": "vinayaka_chavithi"}, {"date": "2048-09-18", "key": "bakrid_eid_al_adha"}, {"date": "2048-10-02", "key": "gandhi_jayanti"}, {"date": "2048-10-07", "key": "mahalaya_amavasya"}, {"date": "2048-10-16", "key": "vijaya_dashami"}, {"date": "2048-11-06", "key": "deepavali"}, {"date": "2048-11-09", "key": "nagula_chavithi"}, {"date": "2048-11-20", "key": "karthika_pournami"}, {"date": "2048-12-15", "key": "vaikuntha_ekadashi"}, {"date": "2048-12-25", "key": "christmas_day"}], "2049": [{"date": "2049-01-15", "key": "sankranti"}, {"date": "2049-01-26", "key": "republic_day"}, {"date": "2049-02-09", "key": "ratha_saptami"}, {"date": "2049-03-03", "key": "maha_shivaratri"}, {"date": "2049-03-19", "key": "holi"}, {"date": "2049-04-03", "key": "ugadi"}, {"date": "2049-04-11", "key": "rama_navami"}, {"date": "2049-04-16", "key": "good_friday"}, {"date": "2049-05-26", "key": "hanuman_jayanti"}, {"date": "2049-07-02", "key": "eid_ul_fitr"}, {"date": "2049-08-13", "key": "varalakshmi"}, {"date": "2049-08-15", "key": "independence_day"}, {"date": "2049-08-20", "key": "janmashtami"}, {"date": "2049-09-01", "key": "vinayaka_chavithi"}, {"date": "2049-09-08", "key": "bakrid_eid_al_adha"}, {"date": "2049-09-27", "key": "mahalaya_amavasya"}, {"date": "2049-10-02", "key": "gandhi_jayanti"}, {"date": "2049-10-06", "key": "vijaya_dashami"}, {"date": "2049-10-26", "key": "deepavali"}, {"date": "2049-10-30", "key": "nagula_chavithi"}, {"date": "2049-11-09", "key": "karthika_pournami"}, {"date": "2049-12-05", "key": "vaikuntha_ekadashi"}, {"date": "2049-12-25", "key": "christmas_day"}], "2050": [{"date": "2050-01-15", "key": "sankranti"}, {"date": "2050-01-26", "key": "republic_day"}, {"date": "2050-01-29", "key": "ratha_saptami"}, {"date": "2050-02-20", "key": "maha_shivaratri"}, {"date": "2050-03-08", "key": "holi"}, {"date": "2050-03-23", "key": "ugadi"}, {"date": "2050-03-31", "key": "rama_navami"}, {"date": "2050-04-08", "key": "good_friday"}, {"date": "2050-05-16", "key": "hanuman_jayanti"}, {"date": "2050-06-21", "key": "eid_ul_fitr"}, {"date": "2050-08-10", "key": "janmashtami"}, {"date": "2050-08-15", "key": "independence_day"}, {"date": "2050-08-28", "key": "bakrid_eid_al_adha"}, {"date": "2050-09-20", "key": "vinayaka_chavithi"}, {"date": "2050-10-02", "key": "gandhi_jayanti"}, {"date": "2050-10-15", "key": "mahalaya_amavasya"}, {"date": "2050-10-25", "key": "vijaya_dashami"}, {"date": "2050-11-14", "key": "deepavali"}, {"date": "2050-11-18", "key": "nagula_chavithi"}, {"date": "2050-11-28", "key": "karthika_pournami"}, {"date": "2050-12-24", "key": "vaikuntha_ekadashi"}, {"date": "2050-12-25", "key": "christmas_day"}], "2051": [{"date": "2051-01-15", "key": "sankranti"}, {"date": "2051-01-26", "key": "republic_day"}, {"date": "2051-02-17", "key": "ratha_saptami"}, {"date": "2051-03-11", "key": "maha_shivaratri"}, {"date": "2051-03-27", "key": "holi"}, {"date": "2051-03-31", "key": "good_friday"}, {"date": "2051-04-19", "key": "rama_navami"}, {"date": "2051-06-04", "key": "hanuman_jayanti"}, {"date": "2051-06-11", "key": "eid_ul_fitr"}, {"date": "2051-08-15", "key": "independence_day"}, {"date": "2051-08-18", "key": "varalakshmi"}, {"date": "2051-08-18", "key": "bakrid_eid_al_adha"}, {"date": "2051-08-29", "key": "janmashtami"}, {"date": "2051-09-09", "key": "vinayaka_chavithi"}, {"date": "2051-10-02", "key": "gandhi_jayanti"}, {"date": "2051-10-04", "key": "mahalaya_amavasya"}, {"date": "2051-10-15", "key": "vijaya_dashami"}, {"date": "2051-11-03", "key": "deepavali"}, {"date": "2051-11-07", "key": "nagula_chavithi"}, {"date": "2051-11-18", "key": "karthika_pournami"}, {"date": "2051-12-14", "key": "vaikuntha_ekadashi"}, {"date": "2051-12-25", "key": "christmas_day"}], "2052": [{"date": "2052-01-16", "key": "sankranti"}, {"date": "2052-01-26", "key": "republic_day"}, {"date": "2052-02-07", "key": "ratha_saptami"}, {"date": "2052-02-29", "key": "maha_shivaratri"}, {"date": "2052-03-15", "key": "holi"}, {"date": "2052-03-31", "key": "ugadi"}, {"date": "2052-04-07", "key": "rama_navami"}, {"date": "2052-04-19", "key": "good_friday"}, {"date": "2052-05-24", "key": "hanuman_jayanti"}, {"date": "2052-05-30", "key": "eid_ul_fitr"}, {"date": "2052-08-06", "key": "bakrid_eid_al_adha"}, {"date": "2052-08-09", "key": "varalakshmi"}, {"date": "2052-08-15", "key": "independence_day"}, {"date": "2052-08-18", "key": "janmashtami"}, {"date": "2052-08-28", "key": "vinayaka_chavithi"}, {"date": "2052-09-22", "key": "mahalaya_amavasya"}, {"date": "2052-10-02", "key": "gandhi_jayanti"}, {"date": "2052-10-03", "key": "vijaya_dashami"}, {"date": "2052-10-22", "key": "deepavali"}, {"date": "2052-10-26", "key": "nagula_chavithi"}, {"date": "2052-11-06", "key": "karthika_pournami"}, {"date": "2052-12-02", "key": "vaikuntha_ekadashi"}, {"date": "2052-12-25", "key": "christmas_day"}], "2053": [{"date": "2053-01-15", "key": "sankranti"}, {"date": "2053-01-26", "key": "republic_day"}, {"date": "2053-01-27", "key": "ratha_saptami"}, {"date": "2053-02-17", "key": "maha_shivaratri"}, {"date": "2053-03-04", "key": "holi"}, {"date": "2053-03-21", "key": "ugadi"}, {"date": "2053-03-28", "key": "rama_navami"}, {"date": "2053-04-04", "key": "good_friday"}, {"date": "2053-05-13", "key": "hanuman_jayanti"}, {"date": "2053-05-19", "key": "eid_ul_fitr"}, {"date": "2053-07-26", "key": "bakrid_eid_al_adha"}, {"date": "2053-08-15", "key": "independence_day"}, {"date": "2053-08-29", "key": "varalakshmi"}, {"date": "2053-09-06", "key": "janmashtami"}, {"date": "2053-09-16", "key": "vinayaka_chavithi"}, {"date": "2053-10-02", "key": "gandhi_jayanti"}, {"date": "2053-10-11", "key": "mahalaya_amavasya"}, {"date": "2053-10-22", "key": "vijaya_dashami"}, {"date": "2053-11-10", "key": "deepavali"}, {"date": "2053-11-14", "key": "nagula_chavithi"}, {"date": "2053-12-21", "key": "vaikuntha_ekadashi"}, {"date": "2053-12-25", "key": "christmas_day"}], "2054": [{"date": "2054-01-15", "key": "sankranti"}, {"date": "2054-01-26", "key": "republic_day"}, {"date": "2054-02-15", "key": "ratha_saptami"}, {"date": "2054-03-08", "key": "maha_shivaratri"}, {"date": "2054-03-23", "key": "holi"}, {"date": "2054-03-27", "key": "good_friday"}, {"date": "2054-04-09", "key": "ugadi"}, {"date": "2054-04-16", "key": "rama_navami"}, {"date": "2054-05-09", "key": "eid_ul_fitr"}, {"date": "2054-06-01", "key": "hanuman_jayanti"}, {"date": "2054-07-16", "key": "bakrid_eid_al_adha"}, {"date": "2054-08-14", "key": "varalakshmi"}, {"date": "2054-08-15", "key": "independence_day"}, {"date": "2054-08-26", "key": "janmashtami"}, {"date": "2054-09-05", "key": "vinayaka_chavithi"}, {"date": "2054-10-01", "key": "mahalaya_amavasya"}, {"date": "2054-10-02", "key": "gandhi_jayanti"}, {"date": "2054-10-11", "key": "vijaya_dashami"}, {"date": "2054-10-30", "key": "deepavali"}, {"date": "2054-11-03", "key": "nagula_chavithi"}, {"date": "2054-11-15", "key": "karthika_pournami"}, {"date": "2054-12-11", "key": "vaikuntha_ekadashi"}, {"date": "2054-12-25", "key": "christmas_day"}], "2055": [{"date": "2055-01-15", "key": "sankranti"}, {"date": "2055-01-26", "key": "republic_day"}, {"date": "2055-02-04", "key": "ratha_saptami"}, {"date": "2055-02-25", "key": "maha_shivaratri"}, {"date": "2055-03-13", "key": "holi"}, {"date": "2055-03-29", "key": "ugadi"}, {"date": "2055-04-06", "key": "rama_navami"}, {"date": "2055-04-16", "key": "good_friday"}, {"date": "2055-04-28", "key": "eid_ul_fitr"}, {"date": "2055-05-21", "key": "hanuman_jayanti"}, {"date": "2055-07-05", "key": "bakrid_eid_al_adha"}, {"date": "2055-08-06", "key": "varalakshmi"}, {"date": "2055-08-15", "key": "independence_day"}, {"date": "2055-08-16", "key": "janmashtami"}, {"date": "2055-08-26", "key": "vinayaka_chavithi"}, {"date": "2055-09-21", "key": "mahalaya_amavasya"}, {"date": "2055-09-30", "key": "vijaya_dashami"}, {"date": "2055-10-02", "key": "gandhi_jayanti"}, {"date": "2055-10-20", "key": "deepavali"}, {"date": "2055-10-23", "key": "nagula_chavithi"}, {"date": "2055-11-04", "key": "karthika_pournami"}, {"date": "2055-11-29", "key": "vaikuntha_ekadashi"}, {"date": "2055-12-25", "key": "christmas_day"}], "2056": [{"date": "2056-01-16", "key": "sankranti"}, {"date": "2056-01-24", "key": "ratha_saptami"}, {"date": "2056-01-26", "key": "republic_day"}, {"date": "2056-02-14", "key": "maha_shivaratri"}, {"date": "2056-03-17", "key": "ugadi"}, {"date": "2056-03-25", "key": "rama_navami"}, {"date": "2056-03-31", "key": "good_friday"}, {"date": "2056-04-16", "key": "eid_ul_fitr"}, {"date": "2056-06-07", "key": "hanuman_jayanti"}, {"date": "2056-06-23", "key": "bakrid_eid_al_adha"}, {"date": "2056-08-15", "key": "independence_day"}, {"date": "2056-08-25", "key": "varalakshmi"}, {"date": "2056-09-02", "key": "janmashtami"}, {"date": "2056-09-13", "key": "vinayaka_chavithi"}, {"date": "2056-10-02", "key": "gandhi_jayanti"}, {"date": "2056-10-09", "key": "mahalaya_amavasya"}, {"date": "2056-10-18", "key": "vijaya_dashami"}, {"date": "2056-11-07", "key": "deepavali"}, {"date": "2056-11-22", "key": "karthika_pournami"}, {"date": "2056-12-17", "key": "vaikuntha_ekadashi"}, {"date": "2056-12-25", "key": "christmas_day"}], "2057": [{"date": "2057-01-15", "key": "sankranti"}, {"date": "2057-01-26", "key": "republic_day"}, {"date": "2057-02-10", "key": "ratha_saptami"}, {"date": "2057-03-04", "key": "maha_shivaratri"}, {"date": "2057-04-05", "key": "ugadi"}, {"date": "2057-04-06", "key": "eid_ul_fitr"}, {"date": "2057-04-13", "key": "rama_navami"}, {"date": "2057-04-20", "key": "good_friday"}, {"date": "2057-05-27", "key": "hanuman_jayanti"}, {"date": "2057-06-13", "key": "bakrid_eid_al_adha"}, {"date": "2057-08-15", "key": "independence_day"}, {"date": "2057-08-22", "key": "janmashtami"}, {"date": "2057-09-03", "key": "vinayaka_chavithi"}, {"date": "2057-09-28", "key": "mahalaya_amavasya"}, {"date": "2057-10-02", "key": "gandhi_jayanti"}, {"date": "2057-10-07", "key": "vijaya_dashami"}, {"date": "2057-10-28", "key": "deepavali"}, {"date": "2057-10-31", "key": "nagula_chavithi"}, {"date": "2057-11-11", "key": "karthika_pournami"}, {"date": "2057-12-06", "key": "vaikuntha_ekadashi"}, {"date": "2057-12-25", "key": "christmas_day"}], "2058": [{"date": "2058-01-15", "key": "sankranti"}, {"date": "2058-01-26", "key": "republic_day"}, {"date": "2058-01-30", "key": "ratha_saptami"}, {"date": "2058-02-22", "key": "maha_shivaratri"}, {"date": "2058-03-10", "key": "holi"}, {"date": "2058-03-25", "key": "ugadi"}, {"date": "2058-03-26", "key": "eid_ul_fitr"}, {"date": "2058-04-02", "key": "rama_navami"}, {"date": "2058-04-12", "key": "good_friday"}, {"date": "2058-05-17", "key": "hanuman_jayanti"}, {"date": "2058-06-02", "key": "bakrid_eid_al_adha"}, {"date": "2058-08-02", "key": "varalakshmi"}, {"date": "2058-08-11", "key": "janmashtami"}, {"date": "2058-08-15", "key": "independence_day"}, {"date": "2058-08-23", "key": "vinayaka_chavithi"}, {"date": "2058-09-17", "key": "mahalaya_amavasya"}, {"date": "2058-09-27", "key": "vijaya_dashami"}, {"date": "2058-10-02", "key": "gandhi_jayanti"}, {"date": "2058-11-16", "key": "deepavali"}, {"date": "2058-11-19", "key": "nagula_chavithi"}, {"date": "2058-11-30", "key": "karthika_pournami"}, {"date": "2058-12-25", "key": "vaikuntha_ekadashi"}, {"date": "2058-12-25", "key": "christmas_day"}], "2059": [{"date": "2059-01-15", "key": "sankranti"}, {"date": "2059-01-26", "key": "republic_day"}, {"date": "2059-02-18", "key": "ratha_saptami"}, {"date": "2059-03-13", "key": "maha_shivaratri"}, {"date": "2059-03-15", "key": "eid_ul_fitr"}, {"date": "2059-03-28", "key": "good_friday"}, {"date": "2059-03-29", "key": "holi"}, {"date": "2059-04-13", "key": "ugadi"}, {"date": "2059-04-21", "key": "rama_navami"}, {"date": "2059-05-22", "key": "bakrid_eid_al_adha"}, {"date": "2059-06-05", "key": "hanuman_jayanti"}, {"date": "2059-08-15", "key": "independence_day"}, {"date": "2059-08-22", "key": "varalakshmi"}, {"date": "2059-08-30", "key": "janmashtami"}, {"date": "2059-09-11", "key": "vinayaka_chavithi"}, {"date": "2059-10-02", "key": "gandhi_jayanti"}, {"date": "2059-10-06", "key": "mahalaya_amavasya"}, {"date": "2059-10-16", "key": "vijaya_dashami"}, {"date": "2059-11-05", "key": "deepavali"}, {"date": "2059-11-09", "key": "nagula_chavithi"}, {"date": "2059-11-19", "key": "karthika_pournami"}, {"date": "2059-12-15", "key": "vaikuntha_ekadashi"}, {"date": "2059-12-25", "key": "christmas_day"}], "2060": [{"date": "2060-01-16", "key": "sankranti"}, {"date": "2060-01-26", "key": "republic_day"}, {"date": "2060-02-08", "key": "ratha_saptami"}, {"date": "2060-03-01", "key": "maha_shivaratri"}, {"date": "2060-03-04", "key": "eid_ul_fitr"}, {"date": "2060-03-17", "key": "holi"}, {"date": "2060-04-09", "key": "rama_navami"}, {"date": "2060-04-16", "key": "good_friday"}, {"date": "2060-05-11", "key": "bakrid_eid_al_adha"}, {"date": "2060-05-25", "key": "hanuman_jayanti"}, {"date": "2060-08-15", "key": "independence_day"}, {"date": "2060-08-19", "key": "janmashtami"}, {"date": "2060-08-30", "key": "vinayaka_chavithi"}, {"date": "2060-09-24", "key": "mahalaya_amavasya"}, {"date": "2060-10-02", "key": "gandhi_jayanti"}, {"date": "2060-10-05", "key": "vijaya_dashami"}, {"date": "2060-10-24", "key": "deepavali"}, {"date": "2060-10-28", "key": "nagula_chavithi"}, {"date": "2060-11-08", "key": "karthika_pournami"}, {"date": "2060-12-04", "key": "vaikuntha_ekadashi"}, {"date": "2060-12-25", "key": "christmas_day"}], "2061": [{"date": "2061-01-15", "key": "sankranti"}, {"date": "2061-01-26", "key": "republic_day"}, {"date": "2061-01-28", "key": "ratha_saptami"}, {"date": "2061-02-19", "key": "maha_shivaratri"}, {"date": "2061-02-21", "key": "eid_ul_fitr"}, {"date": "2061-03-06", "key": "holi"}, {"date": "2061-03-22", "key": "ugadi"}, {"date": "2061-03-29", "key": "rama_navami"}, {"date": "2061-04-08", "key": "good_friday"}, {"date": "2061-04-30", "key": "bakrid_eid_al_adha"}, {"date": "2061-05-15", "key": "hanuman_jayanti"}, {"date": "2061-08-15", "key": "independence_day"}, {"date": "2061-08-26", "key": "varalakshmi"}, {"date": "2061-09-07", "key": "janmashtami"}, {"date": "2061-09-17", "key": "vinayaka_chavithi"}, {"date": "2061-10-02", "key": "gandhi_jayanti"}, {"date": "2061-10-13", "key": "mahalaya_amavasya"}, {"date": "2061-10-24", "key": "vijaya_dashami"}, {"date": "2061-11-12", "key": "deepavali"}, {"date": "2061-11-16", "key": "nagula_chavithi"}, {"date": "2061-11-27", "key": "karthika_pournami"}, {"date": "2061-12-23", "key": "vaikuntha_ekadashi"}, {"date": "2061-12-25", "key": "christmas_day"}], "2062": [{"date": "2062-01-15", "key": "sankranti"}, {"date": "2062-01-26", "key": "republic_day"}, {"date": "2062-02-11", "key": "eid_ul_fitr"}, {"date": "2062-02-16", "key": "ratha_saptami"}, {"date": "2062-03-10", "key": "maha_shivaratri"}, {"date": "2062-03-24", "key": "good_friday"}, {"date": "2062-03-25", "key": "holi"}, {"date": "2062-04-10", "key": "ugadi"}, {"date": "2062-04-17", "key": "rama_navami"}, {"date": "2062-04-20", "key": "bakrid_eid_al_adha"}, {"date": "2062-06-02", "key": "hanuman_jayanti"}, {"date": "2062-08-15", "key": "independence_day"}, {"date": "2062-08-18", "key": "varalakshmi"}, {"date": "2062-08-28", "key": "janmashtami"}, {"date": "2062-09-07", "key": "vinayaka_chavithi"}, {"date": "2062-10-02", "key": "gandhi_jayanti"}, {"date": "2062-10-02", "key": "mahalaya_amavasya"}, {"date": "2062-10-13", "key": "vijaya_dashami"}, {"date": "2062-11-01", "key": "deepavali"}, {"date": "2062-11-05", "key": "nagula_chavithi"}, {"date": "2062-11-16", "key": "karthika_pournami"}, {"date": "2062-12-12", "key": "vaikuntha_ekadashi"}, {"date": "2062-12-25", "key": "christmas_day"}], "2063": [{"date": "2063-01-15", "key": "sankranti"}, {"date": "2063-01-26", "key": "republic_day"}, {"date": "2063-01-31", "key": "eid_ul_fitr"}, {"date": "2063-02-06", "key": "ratha_saptami"}, {"date": "2063-02-27", "key": "maha_shivaratri"}, {"date": "2063-03-14", "key": "holi"}, {"date": "2063-03-31", "key": "ugadi"}, {"date": "2063-04-07", "key": "rama_navami"}, {"date": "2063-04-09", "key": "bakrid_eid_al_adha"}, {"date": "2063-04-13", "key": "good_friday"}, {"date": "2063-05-23", "key": "hanuman_jayanti"}, {"date": "2063-08-15", "key": "independence_day"}, {"date": "2063-08-17", "key": "janmashtami"}, {"date": "2063-08-27", "key": "vinayaka_chavithi"}, {"date": "2063-09-22", "key": "mahalaya_amavasya"}, {"date": "2063-10-02", "key": "gandhi_jayanti"}, {"date": "2063-10-02", "key": "vijaya_dashami"}, {"date": "2063-10-21", "key": "deepavali"}, {"date": "2063-10-25", "key": "nagula_chavithi"}, {"date": "2063-11-06", "key": "karthika_pournami"}, {"date": "2063-12-01", "key": "vaikuntha_ekadashi"}, {"date": "2063-12-25", "key": "christmas_day"}], "2064": [{"date": "2064-01-16", "key": "sankranti"}, {"date": "2064-01-20", "key": "eid_ul_fitr"}, {"date": "2064-01-26", "key": "republic_day"}, {"date": "2064-01-26", "key": "ratha_saptami"}, {"date": "2064-02-16", "key": "maha_shivaratri"}, {"date": "2064-03-03", "key": "holi"}, {"date": "2064-03-19", "key": "ugadi"}, {"date": "2064-03-27", "key": "rama_navami"}, {"date": "2064-03-28", "key": "bakrid_eid_al_adha"}, {"date": "2064-04-04", "key": "good_friday"}, {"date": "2064-05-10", "key": "hanuman_jayanti"}, {"date": "2064-08-15", "key": "independence_day"}, {"date": "2064-08-22", "key": "varalakshmi"}, {"date": "2064-09-04", "key": "janmashtami"}, {"date": "2064-09-14", "key": "vinayaka_chavithi"}, {"date": "2064-10-02", "key": "gandhi_jayanti"}, {"date": "2064-10-10", "key": "mahalaya_amavasya"}, {"date": "2064-10-19", "key": "vijaya_dashami"}, {"date": "2064-11-08", "key": "deepavali"}, {"date": "2064-11-12", "key": "nagula_chavithi"}, {"date": "2064-11-24", "key": "karthika_pournami"}, {"date": "2064-12-19", "key": "vaikuntha_ekadashi"}, {"date": "2064-12-25", "key": "christmas_day"}], "2065": [{"date": "2065-01-09", "key": "eid_ul_fitr"}, {"date": "2065-01-15", "key": "sankranti"}, {"date": "2065-01-26", "key": "republic_day"}, {"date": "2065-02-12", "key": "ratha_saptami"}, {"date": "2065-03-06", "key": "maha_shivaratri"}, {"date": "2065-03-18", "key": "bakrid_eid_al_adha"}, {"date": "2065-03-22", "key": "holi"}, {"date": "2065-03-27", "key": "good_friday"}, {"date": "2065-04-06", "key": "ugadi"}, {"date": "2065-04-15", "key": "rama_navami"}, {"date": "2065-05-29", "key": "hanuman_jayanti"}, {"date": "2065-08-14", "key": "varalakshmi"}, {"date": "2065-08-15", "key": "independence_day"}, {"date": "2065-08-24", "key": "janmashtami"}, {"date": "2065-09-04", "key": "vinayaka_chavithi"}, {"date": "2065-09-30", "key": "mahalaya_amavasya"}, {"date": "2065-10-02", "key": "gandhi_jayanti"}, {"date": "2065-10-09", "key": "vijaya_dashami"}, {"date": "2065-10-29", "key": "deepavali"}, {"date": "2065-11-12", "key": "karthika_pournami"}, {"date": "2065-12-08", "key": "vaikuntha_ekadashi"}, {"date": "2065-12-25", "key": "christmas_day"}, {"date": "2065-12-29", "key": "eid_ul_fitr"}], "2066": [{"date": "2066-01-15", "key": "sankranti"}, {"date": "2066-01-26", "key": "republic_day"}, {"date": "2066-02-01", "key": "ratha_saptami"}, {"date": "2066-02-23", "key": "maha_shivaratri"}, {"date": "2066-03-07", "key": "bakrid_eid_al_adha"}, {"date": "2066-03-11", "key": "holi"}, {"date": "2066-03-26", "key": "ugadi"}, {"date": "2066-04-04", "key": "rama_navami"}, {"date": "2066-04-09", "key": "good_friday"}, {"date": "2066-05-18", "key": "hanuman_jayanti"}, {"date": "2066-08-13", "key": "janmashtami"}, {"date": "2066-08-15", "key": "independence_day"}, {"date": "2066-08-25", "key": "vinayaka_chavithi"}, {"date": "2066-09-19", "key": "mahalaya_amavasya"}, {"date": "2066-09-28", "key": "vijaya_dashami"}, {"date": "2066-10-02", "key": "gandhi_jayanti"}, {"date": "2066-10-19", "key": "deepavali"}, {"date": "2066-10-22", "key": "nagula_chavithi"}, {"date": "2066-11-02", "key": "karthika_pournami"}, {"date": "2066-11-27", "key": "vaikuntha_ekadashi"}, {"date": "2066-12-18", "key": "eid_ul_fitr"}, {"date": "2066-12-25", "key": "christmas_day"}], "2067": [{"date": "2067-01-15", "key": "sankranti"}, {"date": "2067-01-21", "key": "ratha_saptami"}, {"date": "2067-01-26", "key": "republic_day"}, {"date": "2067-02-13", "key": "maha_shivaratri"}, {"date": "2067-02-24", "key": "bakrid_eid_al_adha"}, {"date": "2067-03-01", "key": "holi"}, {"date": "2067-04-01", "key": "good_friday"}, {"date": "2067-04-14", "key": "ugadi"}, {"date": "2067-04-23", "key": "rama_navami"}, {"date": "2067-06-06", "key": "hanuman_jayanti"}, {"date": "2067-08-15", "key": "independence_day"}, {"date": "2067-09-01", "key": "janmashtami"}, {"date": "2067-09-12", "key": "vinayaka_chavithi"}, {"date": "2067-10-02", "key": "gandhi_jayanti"}, {"date": "2067-10-08", "key": "mahalaya_amavasya"}, {"date": "2067-11-06", "key": "deepavali"}, {"date": "2067-11-10", "key": "nagula_chavithi"}, {"date": "2067-12-08", "key": "eid_ul_fitr"}, {"date": "2067-12-16", "key": "vaikuntha_ekadashi"}, {"date": "2067-12-25", "key": "christmas_day"}], "2068": [{"date": "2068-01-16", "key": "sankranti"}, {"date": "2068-01-26", "key": "republic_day"}, {"date": "2068-02-09", "key": "ratha_saptami"}, {"date": "2068-02-14", "key": "bakrid_eid_al_adha"}, {"date": "2068-03-03", "key": "maha_shivaratri"}, {"date": "2068-03-18", "key": "holi"}, {"date": "2068-04-03", "key": "ugadi"}, {"date": "2068-04-11", "key": "rama_navami"}, {"date": "2068-04-20", "key": "good_friday"}, {"date": "2068-05-26", "key": "hanuman_jayanti"}, {"date": "2068-08-10", "key": "varalakshmi"}, {"date": "2068-08-15", "key": "independence_day"}, {"date": "2068-08-20", "key": "janmashtami"}, {"date": "2068-09-01", "key": "vinayaka_chavithi"}, {"date": "2068-09-26", "key": "mahalaya_amavasya"}, {"date": "2068-10-02", "key": "gandhi_jayanti"}, {"date": "2068-10-06", "key": "vijaya_dashami"}, {"date": "2068-10-26", "key": "deepavali"}, {"date": "2068-10-30", "key": "nagula_chavithi"}, {"date": "2068-11-09", "key": "karthika_pournami"}, {"date": "2068-11-26", "key": "eid_ul_fitr"}, {"date": "2068-12-05", "key": "vaikuntha_ekadashi"}, {"date": "2068-12-25", "key": "christmas_day"}], "2069": [{"date": "2069-01-15", "key": "sankranti"}, {"date": "2069-01-26", "key": "republic_day"}, {"date": "2069-01-29", "key": "ratha_saptami"}, {"date": "2069-02-02", "key": "bakrid_eid_al_adha"}, {"date": "2069-02-20", "key": "maha_shivaratri"}, {"date": "2069-03-07", "key": "holi"}, {"date": "2069-03-31", "key": "rama_navami"}, {"date": "2069-04-12", "key": "good_friday"}, {"date": "2069-05-16", "key": "hanuman_jayanti"}, {"date": "2069-08-15", "key": "independence_day"}, {"date": "2069-08-30", "key": "varalakshmi"}, {"date": "2069-09-08", "key": "janmashtami"}, {"date": "2069-09-19", "key": "vinayaka_chavithi"}, {"date": "2069-10-02", "key": "gandhi_jayanti"}, {"date": "2069-10-15", "key": "mahalaya_amavasya"}, {"date": "2069-10-25", "key": "vijaya_dashami"}, {"date": "2069-11-13", "key": "deepavali"}, {"date": "2069-11-16", "key": "eid_ul_fitr"}, {"date": "2069-11-18", "key": "nagula_chavithi"}, {"date": "2069-11-28", "key": "karthika_pournami"}, {"date": "2069-12-24", "key": "vaikuntha_ekadashi"}, {"date": "2069-12-25", "key": "christmas_day"}], "2070": [{"date": "2070-01-15", "key": "sankranti"}, {"date": "2070-01-23", "key": "bakrid_eid_al_adha"}, {"date": "2070-01-26", "key": "republic_day"}, {"date": "2070-02-17", "key": "ratha_saptami"}, {"date": "2070-03-11", "key": "maha_shivaratri"}, {"date": "2070-03-26", "key": "holi"}, {"date": "2070-03-28", "key": "good_friday"}, {"date": "2070-04-19", "key": "rama_navami"}, {"date": "2070-06-04", "key": "hanuman_jayanti"}, {"date": "2070-08-15", "key": "independence_day"}, {"date": "2070-08-29", "key": "janmashtami"}, {"date": "2070-09-08", "key": "vinayaka_chavithi"}, {"date": "2070-10-02", "key": "gandhi_jayanti"}, {"date": "2070-10-04", "key": "mahalaya_amavasya"}, {"date": "2070-10-14", "key": "vijaya_dashami"}, {"date": "2070-11-02", "key": "deepavali"}, {"date": "2070-11-05", "key": "eid_ul_fitr"}, {"date": "2070-11-07", "key": "nagula_chavithi"}, {"date": "2070-11-18", "key": "karthika_pournami"}, {"date": "2070-12-14", "key": "vaikuntha_ekadashi"}, {"date": "2070-12-25", "key": "christmas_day"}], "2071": [{"date": "2071-01-12", "key": "bakrid_eid_al_adha"}, {"date": "2071-01-15", "key": "sankranti"}, {"date": "2071-01-26", "key": "republic_day"}, {"date": "2071-02-07", "key": "ratha_saptami"}, {"date": "2071-02-28", "key": "maha_shivaratri"}, {"date": "2071-03-16", "key": "holi"}, {"date": "2071-04-01", "key": "ugadi"}, {"date": "2071-04-08", "key": "rama_navami"}, {"date": "2071-04-17", "key": "good_friday"}, {"date": "2071-05-24", "key": "hanuman_jayanti"}, {"date": "2071-08-07", "key": "varalakshmi"}, {"date": "2071-08-15", "key": "independence_day"}, {"date": "2071-08-19", "key": "janmashtami"}, {"date": "2071-08-28", "key": "vinayaka_chavithi"}, {"date": "2071-09-23", "key": "mahalaya_amavasya"}, {"date": "2071-10-02", "key": "gandhi_jayanti"}, {"date": "2071-10-03", "key": "vijaya_dashami"}, {"date": "2071-10-23", "key": "deepavali"}, {"date": "2071-10-25", "key": "eid_ul_fitr"}, {"date": "2071-10-27", "key": "nagula_chavithi"}, {"date": "2071-11-07", "key": "karthika_pournami"}, {"date": "2071-12-03", "key": "vaikuntha_ekadashi"}, {"date": "2071-12-25", "key": "christmas_day"}], "2072": [{"date": "2072-01-01", "key": "bakrid_eid_al_adha"}, {"date": "2072-01-16", "key": "sankranti"}, {"date": "2072-01-26", "key": "republic_day"}, {"date": "2072-01-27", "key": "ratha_saptami"}, {"date": "2072-02-17", "key": "maha_shivaratri"}, {"date": "2072-03-04", "key": "holi"}, {"date": "2072-03-20", "key": "ugadi"}, {"date": "2072-03-28", "key": "rama_navami"}, {"date": "2072-04-08", "key": "good_friday"}, {"date": "2072-05-12", "key": "hanuman_jayanti"}, {"date": "2072-08-15", "key": "independence_day"}, {"date": "2072-08-26", "key": "varalakshmi"}, {"date": "2072-09-06", "key": "janmashtami"}, {"date": "2072-09-15", "key": "vinayaka_chavithi"}, {"date": "2072-10-02", "key": "gandhi_jayanti"}, {"date": "2072-10-11", "key": "mahalaya_amavasya"}, {"date": "2072-10-14", "key": "eid_ul_fitr"}, {"date": "2072-10-21", "key": "vijaya_dashami"}, {"date": "2072-11-10", "key": "deepavali"}, {"date": "2072-11-13", "key": "nagula_chavithi"}, {"date": "2072-11-25", "key": "karthika_pournami"}, {"date": "2072-12-21", "key": "vaikuntha_ekadashi"}, {"date": "2072-12-21", "key": "bakrid_eid_al_adha"}, {"date": "2072-12-25", "key": "christmas_day"}], "2073": [{"date": "2073-01-15", "key": "sankranti"}, {"date": "2073-01-26", "key": "republic_day"}, {"date": "2073-02-14", "key": "ratha_saptami"}, {"date": "2073-03-07", "key": "maha_shivaratri"}, {"date": "2073-03-23", "key": "holi"}, {"date": "2073-03-24", "key": "good_friday"}, {"date": "2073-04-08", "key": "ugadi"}, {"date": "2073-04-16", "key": "rama_navami"}, {"date": "2073-05-31", "key": "hanuman_jayanti"}, {"date": "2073-08-15", "key": "independence_day"}, {"date": "2073-08-26", "key": "janmashtami"}, {"date": "2073-09-05", "key": "vinayaka_chavithi"}, {"date": "2073-10-01", "key": "mahalaya_amavasya"}, {"date": "2073-10-02", "key": "gandhi_jayanti"}, {"date": "2073-10-03", "key": "eid_ul_fitr"}, {"date": "2073-10-10", "key": "vijaya_dashami"}, {"date": "2073-10-30", "key": "deepavali"}, {"date": "2073-11-03", "key": "nagula_chavithi"}, {"date": "2073-11-14", "key": "karthika_pournami"}, {"date": "2073-12-10", "key": "vaikuntha_ekadashi"}, {"date": "2073-12-10", "key": "bakrid_eid_al_adha"}, {"date": "2073-12-25", "key": "christmas_day"}], "2074": [{"date": "2074-01-15", "key": "sankranti"}, {"date": "2074-01-26", "key": "republic_day"}, {"date": "2074-02-03", "key": "ratha_saptami"}, {"date": "2074-02-24", "key": "maha_shivaratri"}, {"date": "2074-03-13", "key": "holi"}, {"date": "2074-03-28", "key": "ugadi"}, {"date": "2074-04-06", "key": "rama_navami"}, {"date": "2074-04-13", "key": "good_friday"}, {"date": "2074-05-20", "key": "hanuman_jayanti"}, {"date": "2074-08-03", "key": "varalakshmi"}, {"date": "2074-08-15", "key": "independence_day"}, {"date": "2074-08-15", "key": "janmashtami"}, {"date": "2074-08-26", "key": "vinayaka_chavithi"}, {"date": "2074-09-21", "key": "mahalaya_amavasya"}, {"date": "2074-09-22", "key": "eid_ul_fitr"}, {"date": "2074-09-30", "key": "vijaya_dashami"}, {"date": "2074-10-02", "key": "gandhi_jayanti"}, {"date": "2074-10-20", "key": "deepavali"}, {"date": "2074-11-03", "key": "karthika_pournami"}, {"date": "2074-11-29", "key": "vaikuntha_ekadashi"}, {"date": "2074-11-29", "key": "bakrid_eid_al_adha"}, {"date": "2074-12-25", "key": "christmas_day"}], "2075": [{"date": "2075-01-15", "key": "sankranti"}, {"date": "2075-01-23", "key": "ratha_saptami"}, {"date": "2075-01-26", "key": "republic_day"}, {"date": "2075-02-14", "key": "maha_shivaratri"}, {"date": "2075-03-02", "key": "holi"}, {"date": "2075-03-17", "key": "ugadi"}, {"date": "2075-03-26", "key": "rama_navami"}, {"date": "2075-04-05", "key": "good_friday"}, {"date": "2075-06-08", "key": "hanuman_jayanti"}, {"date": "2075-08-15", "key": "independence_day"}, {"date": "2075-08-23", "key": "varalakshmi"}, {"date": "2075-09-02", "key": "janmashtami"}, {"date": "2075-09-12", "key": "eid_ul_fitr"}, {"date": "2075-09-14", "key": "vinayaka_chavithi"}, {"date": "2075-10-02", "key": "gandhi_jayanti"}, {"date": "2075-10-09", "key": "mahalaya_amavasya"}, {"date": "2075-10-19", "key": "vijaya_dashami"}, {"date": "2075-11-08", "key": "deepavali"}, {"date": "2075-11-12", "key": "nagula_chavithi"}, {"date": "2075-11-19", "key": "bakrid_eid_al_adha"}, {"date": "2075-11-22", "key": "karthika_pournami"}, {"date": "2075-12-18", "key": "vaikuntha_ekadashi"}, {"date": "2075-12-25", "key": "christmas_day"}]};
    const FEST_META = {"sankranti": {"te": "మకర సంక్రాంతి (Makara Sankranti)", "en": "Makara Sankranti — Pedda Panduga", "category": "religious", "desc": "Sun enters Makara Rashi; Uttarayanam Punya Kalam, Ariselu, Haridasulu & harvest blessings.", "story": ["Astronomical & Puranic Significance: Makara Sankranti marks Surya Bhagavan entering Makara Rashi (Capricorn), beginning the six-month Uttarayanam northward journey.", "Surya, Shani & Bhishma Pitamaha: Surya visits his son Shani's house in Makara, symbolizing harmony; Bhishma Pitamaha awaited Uttarayanam before attaining Moksha.", "Telugu Cultural Celebrations: Celebrated as Pedda Panduga with muggulu, Ariselu, Til-Gud, and gratitude toward farmers and cattle."], "teStory": ["పండుగ విశేషం: మకర సంక్రాంతి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: మకర సంక్రాంతి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "ratha_saptami": {"te": "రథ సప్తమి (Ratha Saptami)", "en": "Ratha Saptami — Surya Jayanti", "category": "religious", "desc": "Magha Shukla Saptami; sacred Jilledu leaf/Akshata bath and Surya Namaskaram.", "story": ["Origin & Meaning: Celebrated on Magha Shukla Saptami as Surya Bhagavan's sacred manifestation day guiding health, clarity, and vitality.", "Observances: Devotees place seven Calotropis (Jilledu) leaves and rice grains on the head and shoulders during morning abhyangana bath and chant Aditya Hridayam."], "teStory": ["పండుగ విశేషం: రథ సప్తమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: రథ సప్తమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "maha_shivaratri": {"te": "మహా శివరాత్రి (Maha Shivaratri)", "en": "Maha Shivaratri — Rudra Ratri", "category": "religious", "desc": "Magha Krishna Chaturdashi; four-yama Rudrabhishekam, Bilva archana & night jagarana.", "story": ["Puranic Significance: Marks the sacred union of Lord Shiva and Parvati Devi and the manifestation of the infinite Lingodbhava jyoti.", "Observances: Full-day fasting, four-prahar abhishekam with panchamritam and Bilva leaves, and night-long Shiva nama smarana."], "teStory": ["పండుగ విశేషం: మహా శివరాత్రి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: మహా శివరాత్రి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "holi": {"te": "హోలీ పండుగ (Holi)", "en": "Holi — Kamadahanam & Rang Panchami", "category": "religious", "desc": "Phalguna Purnima celebration of devotion (Prahlada) and spring renewal.", "story": ["Puranic Legend: Celebrates Prahlada's unshakeable devotion to Lord Narayana and the triumph of truth over ego.", "Observances: Evening bonfire and joyous spring colors symbolizing warmth and renewal."], "teStory": ["పండుగ విశేషం: హోలీ పండుగ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: హోలీ పండుగ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "ugadi": {"te": "ఉగాది పండుగ (Ugadi)", "en": "Ugadi — Telugu & Kannada New Year", "category": "religious", "desc": "Chaitra Shukla Pratipada; Ugadi Pachadi (six tastes), Panchanga Sravanam & new Samvatsaram.", "story": ["Yugadi & New Samvatsaram: 'Yuga-adi' marks the dawn of a new lunar year cycle in the Chaitra Shukla Pratipada under the Amanta calendar.", "Ugadi Pachadi (Shad-Ruchulu): Neem buds, jaggery, tamarind, raw mango, salt, and chili represent life's sorrow, joy, tang, surprise, fear, and anger accepted with equanimity.", "Panchanga Sravanam: Families gather at temples and homes to listen to the year's Samvatsara, Rashi, and rainfall forecast."], "teStory": ["పండుగ విశేషం: ఉగాది పండుగ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: ఉగాది పండుగ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "rama_navami": {"te": "శ్రీరామ నవమి (Sri Rama Navami)", "en": "Sri Rama Navami — Sita Rama Kalyanam", "category": "religious", "desc": "Chaitra Shukla Navami; birth of Maryada Purushottama Sri Rama, Panakam & Vadapappu.", "story": ["Sacred Birth: Lord Sri Rama was born on Chaitra Shukla Navami in Punarvasu Nakshatra to King Dasharatha and Queen Kausalya.", "Traditions: Sita Rama Kalyanam, Panakam (jaggery-pepper drink), Vadapappu (soaked moong dal), and Ramayana parayanam."], "teStory": ["పండుగ విశేషం: శ్రీరామ నవమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: శ్రీరామ నవమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "hanuman_jayanti": {"te": "హనుమాన్ జయంతి (Hanuman Jayanti)", "en": "Hanuman Jayanti (Telugu Tradition)", "category": "religious", "desc": "Vaishakha Krishna Dashami; Sindoora archana, Vada mala & Hanuman Chalisa.", "story": ["Devotion & Strength: Reveres Sri Anjaneya Swamy—chiranjeevi, embodiment of bhakti, intellect, and selfless service to Sri Rama.", "Observances: Morning abhishekam, sindoora and betel-leaf mala offerings, and Sundara Kanda / Hanuman Chalisa recitation."], "teStory": ["పండుగ విశేషం: హనుమాన్ జయంతి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: హనుమాన్ జయంతి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "varalakshmi": {"te": "వరలక్ష్మీ వ్రతం (Varalakshmi Vratam)", "en": "Varalakshmi Vratam — Shravana Shukravaram", "category": "religious", "desc": "Friday before Shravana Pournami; Ashta Lakshmi puja, toramu & sacred vratam.", "story": ["Sacred Vratam: Observed on the Friday preceding Shravana Pournami to invoke Ashtalakshmi—Adilakshmi, Dhanya, Dhairya, Gaja, Santana, Vijaya, Vidya, and Dhana.", "Observances: Kalasha sthapana, nine-knotted sacred thread (Toramu) tying, and traditional naivedyam."], "teStory": ["పండుగ విశేషం: వరలక్ష్మీ వ్రతం పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వరలక్ష్మీ వ్రతం एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "janmashtami": {"te": "శ్రీకృష్ణాష్టమి (Krishna Janmashtami)", "en": "Sri Krishna Janmashtami (Gokulashtami)", "category": "religious", "desc": "Shravana Krishna Ashtami in Rohini; midnight Krishna puja & Gopashtami/Utla traditions.", "story": ["Divine Advent: Lord Sri Krishna appeared at midnight on Shravana Krishna Ashtami to restore Dharma and protect devotees.", "Observances: Fasting, Bhagavad Gita / Bhagavatam recitation, and midnight puja with butter/makhan offerings."], "teStory": ["పండుగ విశేషం: శ్రీకృష్ణాష్టమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: శ్రీకృష్ణాష్టమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "vinayaka_chavithi": {"te": "వినాయక చవితి (Vinayaka Chavithi)", "en": "Vinayaka Chavithi (Ganesh Chaturthi)", "category": "religious", "desc": "Bhadrapada Shukla Chaturthi; clay Vinayaka puja, 21 Patri leaves & Undrallu/Kudumulu.", "story": ["Vighnaharta: Lord Vigneshwara is worshipped first before every auspicious undertaking to remove obstacles and bestow wisdom.", "Observances: Eco-friendly clay idol puja with Ekavimsati Patri (21 sacred leaves), modak/undrallu naivedyam, and immersion."], "teStory": ["పండుగ విశేషం: వినాయక చవితి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వినాయక చవితి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "mahalaya_amavasya": {"te": "మహాలయ అమావాస్య (Mahalaya Amavasya)", "en": "Mahalaya Amavasya (Pitru Paksha Samapti)", "category": "religious", "desc": "Bhadrapada Amavasya; sacred Pitru Tarpanam, Shraddha & ancestral gratitude.", "story": ["Ancestral Gratitude: Marks the culmination of Pitru Paksha, honoring ancestors and elders with water libations (Tarpanam) and charity.", "Observances: Morning river/home tarpanam and annadanam before welcoming Devi Navaratri."], "teStory": ["పండుగ విశేషం: మహాలయ అమావాస్య పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: మహాలయ అమావాస్య एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "vijaya_dashami": {"te": "విజయదశమి / దసరా (Vijaya Dashami)", "en": "Vijaya Dashami (Dasara)", "category": "religious", "desc": "Ashwayuja Shukla Dashami; Devi triumph, Ayudha/Vidya puja & Shami Vriksha darshanam.", "story": ["Victory of Dharma: Marks Goddess Durga's victory over Mahishasura and Lord Rama's triumph, celebrated across Andhra & Telangana as Pedda Panduga.", "Observances: Ayudha/books/tools puja, Shami leaf exchange with elders, and evening Devi procession."], "teStory": ["పండుగ విశేషం: విజయదశమి / దసరా పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: విజయదశమి / దసరా एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "deepavali": {"te": "దీపావళి పండుగ (Deepavali)", "en": "Deepavali — Festival of Lamps", "category": "religious", "desc": "Ashwayuja Krishna Amavasya (following Naraka Chaturdashi); oil lamps & Lakshmi-Kubera puja.", "story": ["Light Over Darkness: Celebrates Naraka Chaturdashi triumph and evening Lakshmi-Ganesha-Kubera puja with rows of earthen oil lamps (Deepalu).", "Observances: Dawn oil bath, evening deeparadhana around home and courtyard, and family gatherings."], "teStory": ["పండుగ విశేషం: దీపావళి పండుగ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: దీపావళి పండుగ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "nagula_chavithi": {"te": "నాగుల చవితి (Nagula Chavithi)", "en": "Nagula Chavithi — Naga Devata Puja", "category": "religious", "desc": "Karthika Shukla Chaturthi; milk/chalimidi/sesame offering at ant-hills & Naga shrines.", "story": ["Ecological & Puranic Harmony: Honors Naga Devatas—guardians of subterranean waters, fertility, and balance in nature.", "Observances: Offering milk, chalimidi, and chimili at sacred anthills or Nagendra shrines."], "teStory": ["పండుగ విశేషం: నాగుల చవితి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: నాగుల చవితి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "karthika_pournami": {"te": "కార్తీక పౌర్ణమి (Karthika Pournami)", "en": "Karthika Pournami & Deeparadhana", "category": "religious", "desc": "Karthika Shukla Purnima; 365 oil lamps, Karthika Deepam, Jwala Toranam & Shiva/Vishnu puja.", "story": ["Sacred Full Moon of Karthika: Considered one of the holiest Pournamis in Telugu tradition for lighting 365 wicks/lamps and temple deeparadhana.", "Observances: Evening lamp lighting at temples and river ghats, Satyanarayana Vratam, and Jwala Toranam."], "teStory": ["పండుగ విశేషం: కార్తీక పౌర్ణమి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: కార్తీక పౌర్ణమి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "vaikuntha_ekadashi": {"te": "వైకుంఠ ఏకాదశి (Vaikuntha Ekadashi)", "en": "Vaikuntha Ekadashi (Mukkoti Ekadashi)", "category": "religious", "desc": "Margashirsha Shukla Ekadashi; Uttara Dwaram (Vaikuntha Dwaram) darshan & Vishnu worship.", "story": ["Vaikuntha Dwaram: Revered in Vaishnava agamas as the day the celestial gateway to Vaikuntha opens for devotees.", "Observances: Early morning Uttara Dwaram darshan, fasting/upavasam, and Vishnu sahasranama / Tiruppavai chanting."], "teStory": ["పండుగ విశేషం: వైకుంఠ ఏకాదశి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: వైకుంఠ ఏకాదశి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "republic_day": {"te": "గణతంత్ర దినోత్సవం (Republic Day)", "en": "Republic Day of India", "category": "national", "desc": "Adoption of the Constitution of India on 26 January 1950.", "story": ["Constitutional Milestone: Commemorates January 26, 1950, when India's Constitution came into effect establishing a sovereign, socialist, secular, democratic republic."], "teStory": ["పండుగ విశేషం: గణతంత్ర దినోత్సవం పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: గణతంత్ర దినోత్సవం एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "independence_day": {"te": "స్వాతంత్ర్య దినోత్సవం (Independence Day)", "en": "Independence Day of India", "category": "national", "desc": "National celebration of India's independence on 15 August 1947.", "story": ["Freedom & Sovereignty: Marks August 15, 1947, honoring freedom fighters and celebrating India's sovereignty with flag hoisting and cultural programs."], "teStory": ["పండుగ విశేషం: స్వాతంత్ర్య దినోత్సవం పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: స్వాతంత్ర్య దినోత్సవం एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "gandhi_jayanti": {"te": "గాంధీ జయంతి (Gandhi Jayanti)", "en": "Gandhi Jayanti — Birth Anniversary of Mahatma Gandhi", "category": "national", "desc": "2 October birth anniversary of Mahatma Gandhi celebrating truth, ahimsa & service.", "story": ["Truth & Non-Violence: Honors Mahatma Gandhi (born October 2, 1869) and his ideals of Satya, Ahimsa, Swadeshi, and community service."], "teStory": ["పండుగ విశేషం: గాంధీ జయంతి పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: గాంధీ జయంతి एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "good_friday": {"te": "గుడ్ ఫ్రైడే (Good Friday)", "en": "Good Friday (Public Holiday)", "category": "religious", "desc": "Christian public holiday commemorating the crucifixion and sacrificial love of Jesus Christ.", "story": ["Observance & Meaning: Observed on the Friday before Easter Sunday as a public holiday across India and worldwide.", "Reflection: A solemn day of prayer, meditation, and reflection on compassion, sacrifice, and forgiveness."], "teStory": ["పండుగ విశేషం: గుడ్ ఫ్రైడే పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: గుడ్ ఫ్రైడే एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "christmas_day": {"te": "క్రిస్మస్ పండుగ (Christmas Day)", "en": "Christmas Day (Public Holiday)", "category": "religious", "desc": "25 December public holiday celebrating the birth of Jesus Christ with peace, charity & family.", "story": ["Celebration & Spirit: Celebrated on December 25 every year as a national public holiday across India.", "Traditions: Carol singing, prayers, sharing gifts and sweets, and goodwill across communities."], "teStory": ["పండుగ విశేషం: క్రిస్మస్ పండుగ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: క్రిస్మస్ పండుగ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "eid_ul_fitr": {"te": "రంజాన్ / ఈద్-ఉల్-ఫితర్ (Eid-ul-Fitr)", "en": "Eid-ul-Fitr / Ramzan (Public Holiday)", "category": "religious", "desc": "Public holiday marking the end of Ramadan fasting with Eid prayers, charity (Zakat) & festive greetings.", "story": ["Sacred Significance: Marks 1st Shawwal following the month of Ramadan fasting, self-discipline, and reflection.", "Traditions: Morning Eid namaz, giving Zakat-ul-Fitr / charity to those in need, and sharing festive meals with family and neighbors."], "teStory": ["పండుగ విశేషం: రంజాన్ / ఈద్-ఉల్-ఫితర్ పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: రంజాన్ / ఈద్-ఉల్-ఫితర్ एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}, "bakrid_eid_al_adha": {"te": "బక్రీద్ / ఈద్-ఉల్-అదా (Bakrid / Eid-ul-Adha)", "en": "Bakrid / Eid-ul-Adha (Public Holiday)", "category": "religious", "desc": "Public holiday honoring Prophet Ibrahim's devotion, obedience, and sharing with the community.", "story": ["Heritage & Meaning: Observed on 10th Dhul Hijjah during the Hajj season, commemorating devotion and submission to God.", "Observances: Special morning prayers, charity, and sharing festive food with relatives and neighbors."], "teStory": ["పండుగ విశేషం: బక్రీద్ / ఈద్-ఉల్-అదా పవిత్ర సంప్రదాయ పర్వదినం.", "ఆచారాలు & ప్రాముఖ్యత: భక్తులు దైవ ఆరాధన, పూజలు, జపం మరియు దానాలు చేస్తూ కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తారు."], "hiStory": ["पर्व का महत्व: బక్రీద్ / ఈద్-ఉల్-అదా एक पावन पारंपरिक उत्सव है।", "परंपराएं: श्रद्धालु पूजा-अर्चना, दान और मंगलकामनाओं के साथ यह पर्व मनाते हैं।"]}};

    function getMoonPhaseInfoFromTithi(tithiIdx, elongationDeg = null) {
      const elong = typeof elongationDeg === 'number' ? elongationDeg : ((tithiIdx + 0.5) * 12.0);
      // Illumination fraction from phase angle (pi - elongRad): 0.5 * (1 - cos(elongRad))
      const illumFrac = Math.max(0, Math.min(1, 0.5 * (1 - Math.cos(elong * Math.PI / 180))));
      const illumPct = Math.round(illumFrac * 100);

      if (tithiIdx === 14 || illumPct >= 99) {
        return { emoji: '🌕', labelEn: `Pournami (Full Moon • ${Math.max(99, illumPct)}%)`, labelTe: `పౌర్ణమి (పూర్ణ చంద్రుడు • ${Math.max(99, illumPct)}%)`, illum: 1.0, waxing: true, stage: 'Full Moon' };
      }
      if (tithiIdx === 29 || illumPct <= 1) {
        return { emoji: '🌑', labelEn: `Amavasya (New Moon • ${Math.min(1, illumPct)}%)`, labelTe: `అమావాస్య (అమావాస్య • ${Math.min(1, illumPct)}%)`, illum: 0.0, waxing: false, stage: 'New Moon' };
      }
      if (tithiIdx < 14) {
        const emoji = tithiIdx < 3 ? '🌒' : tithiIdx < 7 ? '🌓' : '🌔';
        const stage = tithiIdx < 6 ? 'Waxing Crescent' : (tithiIdx < 8 ? 'First Quarter' : 'Waxing Gibbous');
        return {
          emoji,
          labelEn: `Shukla Tithi ${tithiIdx + 1} (${illumPct}% Waxing)`,
          labelTe: `శుక్ల తిథి ${tithiIdx + 1} (${illumPct}% వృద్ధి)`,
          illum: illumFrac,
          waxing: true,
          stage
        };
      }
      const kDay = tithiIdx - 14;
      const emoji = kDay < 7 ? '🌖' : kDay < 11 ? '🌗' : '🌘';
      const stage = kDay < 6 ? 'Waning Gibbous' : (kDay < 8 ? 'Last Quarter' : 'Waning Crescent');
      return {
        emoji,
        labelEn: `Krishna Tithi ${kDay} (${illumPct}% Waning)`,
        labelTe: `కృష్ణ తిథి ${kDay} (${illumPct}% క్షీణత)`,
        illum: illumFrac,
        waxing: false,
        stage
      };
    }

    function updateMoonPhaseFromTithi(tithiIdx, elongationDeg = null) {
      const info = getMoonPhaseInfoFromTithi(tithiIdx, elongationDeg);
      const isTe = currentLang === 'te';
      const iconEl = document.getElementById('moonPhaseIcon');
      if (iconEl) iconEl.textContent = info.emoji;
      const badgeEl = document.getElementById('moonPhaseBadge');
      if (badgeEl) badgeEl.textContent = `${info.emoji} ${isTe ? info.labelTe : info.labelEn}`;

      const moonDot = document.getElementById('moonDot');
      const overlay = document.getElementById('moonPhaseOverlay');
      if (moonDot && overlay) {
        const cx = parseFloat(moonDot.getAttribute('cx') || '180');
        const cy = parseFloat(moonDot.getAttribute('cy') || '48');
        const r = parseFloat(moonDot.getAttribute('r') || '7.5');
        // Shade ONLY the dark (unlit) portion so bright waxing/waning moon is clearly luminous
        if (tithiIdx === 14 || info.illum >= 0.99) {
          moonDot.setAttribute('fill', '#fef08a');
          overlay.setAttribute('d', '');
        } else if (tithiIdx === 29 || info.illum <= 0.01) {
          moonDot.setAttribute('fill', '#1e293b');
          overlay.setAttribute('d', '');
        } else if (info.waxing) {
          // Bright right side, dark sliver on left side
          moonDot.setAttribute('fill', '#fef9c3');
          const darkFrac = 1 - info.illum;
          const rx = Math.max(0.4, Math.abs(1 - 2 * darkFrac) * r);
          const bulgeSweep = darkFrac > 0.5 ? 1 : 0;
          overlay.setAttribute('d', `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} A ${rx.toFixed(2)},${r} 0 0,${bulgeSweep} ${cx},${cy - r} Z`);
        } else {
          // Bright left side, dark sliver on right side
          moonDot.setAttribute('fill', '#fef9c3');
          const darkFrac = 1 - info.illum;
          const rx = Math.max(0.4, Math.abs(1 - 2 * darkFrac) * r);
          const bulgeSweep = darkFrac > 0.5 ? 0 : 1;
          overlay.setAttribute('d', `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} A ${rx.toFixed(2)},${r} 0 0,${bulgeSweep} ${cx},${cy - r} Z`);
        }
      }
    }

    window.selectHomeIndiaCity = (val) => {
      if (!val) return;
      const [name, tz, latStr, lonStr] = val.split('|');
      const lat = parseFloat(latStr), lon = parseFloat(lonStr);
      const idx = cities.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
      if (idx !== -1) {
        selectedCityIndex = idx;
      } else {
        cities.unshift({ name, tz: tz || 'Asia/Kolkata', lat, lon, label: 'IST • India' });
        selectedCityIndex = 0;
      }
      renderAll();
    };

    let use24HourClock = false;
    try {
      use24HourClock = localStorage.getItem('panchtattva_24h_clock') === '1';
    } catch (e) {}

    window.toggleClockFormatSlider = (val) => {
      use24HourClock = String(val) === '1';
      try { localStorage.setItem('panchtattva_24h_clock', use24HourClock ? '1' : '0'); } catch (e) {}
      const lbl = document.getElementById('clockModeLabel');
      const sl = document.getElementById('clockFormatSlider');
      if (sl) sl.value = use24HourClock ? '1' : '0';
      if (lbl) lbl.textContent = use24HourClock ? '24h' : '12h';
      tickClocks();
    };

    const INDIAN_CITY_LANDMARKS = [
      { name: 'Bolarum, Secunderabad', lat: 17.5125, lon: 78.5110 },
      { name: 'Secunderabad', lat: 17.4948, lon: 78.5011 },
      { name: 'Hyderabad', lat: 17.3850, lon: 78.4867 },
      { name: 'Vijayawada', lat: 16.5062, lon: 80.6480 },
      { name: 'Visakhapatnam', lat: 17.6868, lon: 83.2185 },
      { name: 'Tirupati', lat: 13.6288, lon: 79.4192 },
      { name: 'Warangal', lat: 17.9689, lon: 79.5941 },
      { name: 'Bengaluru', lat: 12.9716, lon: 77.5946 },
      { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
      { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
      { name: 'New Delhi', lat: 28.6139, lon: 77.2090 }
    ];

    function findNearestKnownPlace(lat, lon) {
      let best = INDIAN_CITY_LANDMARKS[0];
      let bestD = Infinity;
      for (const item of INDIAN_CITY_LANDMARKS) {
        const d = haversineKm(lat, lon, item.lat, item.lon);
        if (d < bestD) { bestD = d; best = item; }
      }
      return best.name;
    }

    function stripWardOrDivision(str) {
      if (!str) return '';
      return str
        .replace(/\b(ward|division|div)\s*[-#:]*\s*\d+\b/gi, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/^[,\s-]+|[,\s-]+$/g, '')
        .trim();
    }

    async function resolvePlaceNameFromCoords(lat, lon) {
      const fallback = stripWardOrDivision(findNearestKnownPlace(lat, lon));
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=14&addressdetails=1`, {
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) return fallback;
        const data = await res.json();
        const addr = data.address || {};
        const rawLoc = addr.suburb || addr.neighbourhood || addr.residential || addr.village || addr.town || addr.city_district || '';
        const rawCity = addr.city || addr.county || addr.state_district || '';
        const locality = stripWardOrDivision(rawLoc);
        const city = stripWardOrDivision(rawCity);
        if (locality && city && locality.toLowerCase() !== city.toLowerCase()) {
          return `${locality}, ${city}`;
        }
        return locality || city || fallback;
      } catch (e) {
        return fallback;
      }
    }

    window.useHomeGpsLocation = () => {
      const subEl = document.getElementById('heroCitySub');
      if (!navigator.geolocation) {
        if (subEl) subEl.textContent = 'GPS not supported on this browser';
        return;
      }
      if (subEl) subEl.textContent = 'Acquiring GPS & resolving exact place name...';
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = +pos.coords.latitude.toFixed(4);
          const lon = +pos.coords.longitude.toFixed(4);
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';
          const resolvedName = await resolvePlaceNameFromCoords(lat, lon);
          const gpsCity = { name: resolvedName, tz, lat, lon, label: 'Live GPS' };
          const idx = cities.findIndex(c => c.label === 'Live GPS');
          if (idx !== -1) {
            cities[idx] = gpsCity;
            selectedCityIndex = idx;
          } else {
            cities.unshift(gpsCity);
            selectedCityIndex = 0;
          }
          fetchCityTemperatures();
          renderAll();
        },
        () => {
          if (subEl) subEl.textContent = 'GPS permission denied — select city from list';
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    };

    function formatLocalizedDateShort(isoStr) {
      const d = new Date(isoStr + 'T12:00:00');
      if (currentLang === 'te') {
        const teMonths = ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'];
        return `${String(d.getDate()).padStart(2, '0')} ${teMonths[d.getMonth()]} ${d.getFullYear()}`;
      }
      if (currentLang === 'hi') {
        const hiMonths = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
        return `${String(d.getDate()).padStart(2, '0')} ${hiMonths[d.getMonth()]} ${d.getFullYear()}`;
      }
      return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    function findNextLunarMilestone(refDateObj, targetTithiIdx) {
      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';
      const base = new Date(refDateObj.getFullYear(), refDateObj.getMonth(), refDateObj.getDate(), 12, 0, 0);
      for (let d = 0; d <= 32; d++) {
        const probe = new Date(base.getTime() + d * 86400000);
        const p = getPanchangam(probe, 'Asia/Kolkata');
        if (p.tithiIdx === targetTithiIdx) {
          const iso = `${probe.getFullYear()}-${String(probe.getMonth() + 1).padStart(2, '0')}-${String(probe.getDate()).padStart(2, '0')}`;
          const dp = formatLocalizedDateShort(iso);
          if (isTe) {
            return d === 0 ? `నేడు (${dp})` : d === 1 ? `రేపు (${dp})` : `${dp} (${d} రోజుల్లో)`;
          }
          if (isHi) {
            return d === 0 ? `आज (${dp})` : d === 1 ? `कल (${dp})` : `${dp} (${d} दिन में)`;
          }
          return d === 0 ? `Today (${dp})` : d === 1 ? `Tomorrow (${dp})` : `${dp} (in ${d}d)`;
        }
      }
      return '--';
    }

    function findNextUpcomingFestival(refDateObj) {
      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';
      const isoRef = `${refDateObj.getFullYear()}-${String(refDateObj.getMonth() + 1).padStart(2, '0')}-${String(refDateObj.getDate()).padStart(2, '0')}`;
      const yr = refDateObj.getFullYear();
      const candidates = [
        ...(FEST_50YR[String(yr)] || []),
        ...(FEST_50YR[String(yr + 1)] || [])
      ].sort((a, b) => a.date.localeCompare(b.date));

      for (const item of candidates) {
        if (item.date >= isoRef) {
          const meta = FEST_META[item.key] || { te: item.key, en: item.key };
          const f = formatDateWithDay(item.date);
          const dp = formatLocalizedDateShort(item.date);
          const dayShort = isTe ? f.dayName.slice(0, 3) : isHi ? f.dayName.slice(0, 2) : f.dayName.slice(0, 3);
          const todayLbl = isTe ? 'నేడు' : isHi ? 'आज' : 'Today';
          return {
            name: pureScriptText(meta.te, meta.hi, meta.en),
            when: item.date === isoRef ? `${todayLbl} • ${dp}` : `${dp} (${dayShort})`
          };
        }
      }
      return { name: '--', when: '--' };
    }

    function updateCelestialTelemetry(nowDate, activeCity, panchang) {
      if (!panchang) return;
      const refDate = selectedDate || nowDate;
      const nextFest = findNextUpcomingFestival(refDate);
      const festNameEl = document.getElementById('celestialNextFestName');
      const festDateEl = document.getElementById('celestialNextFestDate');
      if (festNameEl) festNameEl.textContent = nextFest.name;
      if (festDateEl) festDateEl.textContent = nextFest.when;

      const nextFullEl = document.getElementById('celestialNextFull');
      if (nextFullEl) nextFullEl.textContent = findNextLunarMilestone(refDate, 14);

      const nextAmaEl = document.getElementById('celestialNextAmavasya');
      if (nextAmaEl) nextAmaEl.textContent = findNextLunarMilestone(refDate, 29);

      const stageEl = document.getElementById('celestialPhaseName');
      if (stageEl) stageEl.textContent = currentLang === 'te' ? 'రాబోయే విశేషాలు' : 'Upcoming Milestones';
    }

    // Classical Telugu Muhurtha Shastra & Drik Panchangam Event Evaluator
    function renderTeluguRitualSuitability(dateObj, panchang) {
      const gridEl = document.getElementById('teluguRitualSuitabilityGrid');
      const badgeEl = document.getElementById('muhurthamOverallBadge');
      const noteEl = document.getElementById('muhurthamShastraNote');
      if (!gridEl || !panchang) return;

      const dow = dateObj.getDay(); // 0=Sun .. 6=Sat
      const tIdx = panchang.tithiIdx; // 0..14 Shukla, 15..29 Krishna
      const tNum = (tIdx % 15) + 1; // 1..15
      const isShukla = tIdx < 15;
      const nIdx = panchang.nakIdx; // 0=Ashwini .. 26=Revati
      const sunRashi = panchang.sunRashiIdx; // 0=Mesha .. 8=Dhanus, 11=Meena

      // Rikta Tithis (4, 9, 14) & Amavasya (30) & Ashtami (8)
      const isRikta = (tNum === 4 || tNum === 9 || tNum === 14);
      const isAmavasya = (tIdx === 29);
      const isAshtami = (tNum === 8);

      // Chaturmasya check: Ashadha Shukla Ekadashi (sunRashi 2/3) to Karthika Shukla Ekadashi
      // Dhanurmasam (Sun in Dhanus = 8) & Meena / Shunya Masam (Sun in Meena = 11)
      const isDhanurOrShunyaMasa = (sunRashi === 8 || sunRashi === 11);

      // Nakshatra groups per Telugu Muhurtha Chintamani / Brihat Samhita:
      // Dhruva (Fixed - good for Gruhapravesham, foundation, marriage): Rohini(3), Uttara Phalguni(11), Uttarashadha(20), Uttarabhadra(25)
      // Mridu & Maitra (Soft/Friendly - good for Marriage, Engagement, New Beginnings): Mrigashira(4), Chitra(13), Anuradha(16), Revati(26)
      // Kshipra (Swift - good for Travel, Business start, Vehicle): Ashwini(0), Pushya(7), Hasta(12), Abhijit
      // Chara (Movable - good for Travel, Vehicle): Punarvasu(6), Swati(14), Shravana(21), Dhanishta(22), Shatabhisha(23)
      // Ugra / Tikshna (Fierce - avoid marriage/gruhapravesham): Bharani(1), Krittika(2), Ashlesha(8), Magha(9), Purva Phalguni(10), Jyeshtha(17), Moola(18), Purvashadha(19), Purvabhadra(24)
      const dhruvaNak = [3, 11, 20, 25].includes(nIdx);
      const mriduNak = [4, 13, 16, 26].includes(nIdx);
      const kshipraNak = [0, 7, 12].includes(nIdx);
      const charaNak = [6, 14, 21, 22, 23].includes(nIdx);
      const avoidMajorCeremonyNak = [1, 8, 17, 18].includes(nIdx); // Bharani, Ashlesha, Jyeshtha, Moola

      const goodWeekday = [1, 3, 4, 5].includes(dow); // Mon, Wed, Thu, Fri
      const tithiClean = !isRikta && !isAmavasya && !isAshtami && tNum !== 1;

      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';

      const mHdr = gridEl.closest('.glass')?.querySelector('h3');
      if (mHdr) {
        mHdr.textContent = isTe
          ? 'ముహూర్త & శుభకార్య అనుకూలత (వివాహ • గృహప్రవేశ • ప్రయాణ)'
          : isHi
            ? 'मुहूर्त एवं शुभ कार्य अनुकूलता (विवाह • गृहप्रवेश • यात्रा)'
            : 'Ritual & Event Suitability (వివాహ • గృహప్రవేశ • ప్రయాణ)';
      }

      let marriageStatus = 'AVOID', marriageReason = '';
      if (isDhanurOrShunyaMasa) {
        marriageStatus = 'AVOID';
        marriageReason = isTe
          ? (sunRashi === 8 ? 'ధనుర్మాసంలో వివాహ ముహూర్తాలు నిషిద్ధం; విష్ణు ఆరాధనకు ప్రశస్తం.' : 'మీన / శూన్య మాసంలో వివాహ, ఉపనయన కార్యక్రమాలు నిషిద్ధం.')
          : isHi
            ? (sunRashi === 8 ? 'धनुर्मास में विवाह कार्य वर्जित हैं; विष्णु आराधना श्रेष्ठ है।' : 'मीन / शून्य मास में विवाह व उपनयन वर्जित हैं।')
            : (sunRashi === 8 ? 'Dhanurmasam — Telugu tradition reserves this month for Vishnu devotion rather than weddings.' : 'Meena / Shunya Masam — Avoided for Vivaha per Telugu Panchangam.');
      } else if (!tithiClean || avoidMajorCeremonyNak) {
        marriageStatus = 'AVOID';
        marriageReason = isTe
          ? `తిథి (${panchang.tithi}) లేదా నక్షత్రం (${panchang.nakshatra}) వివాహానికి అనుకూలం కాదు.`
          : isHi
            ? `तिथि (${panchang.tithi}) या नक्षत्र (${panchang.nakshatra}) विवाह हेतु अनुकूल नहीं है।`
            : `Tithi (${panchang.tithi}) or Nakshatra (${panchang.nakshatra}) is non-Vivaha.`;
      } else if ((dhruvaNak || mriduNak || [12, 14].includes(nIdx)) && goodWeekday) {
        marriageStatus = 'AUSPICIOUS';
        marriageReason = isTe
          ? `శుభ తిథి (${panchang.tithi}) మరియు ${panchang.nakshatra} అనుకూలం; గురు/శుక్ర బలం, తారాబలం పరిశీలించండి.`
          : isHi
            ? `शुभ तिथि (${panchang.tithi}) व ${panchang.nakshatra} अनुकूल; गुरु/शुक्र बल व ताराबल देखें।`
            : `Shubha Tithi (${panchang.tithi}) + ${panchang.nakshatra} on an auspicious weekday.`;
      } else {
        marriageStatus = 'MODERATE';
        marriageReason = isTe
          ? 'రాహుకాలం, దుర్ముహూర్తం వర్జించి పురోహితుల సలహాతో నిర్దిష్ట లగ్నంలో పరిశీలించవచ్చు.'
          : isHi
            ? 'राहुकाल व दुर्मुहूर्त त्यागकर पुरोहित परामर्श से शुभ लग्न में विचारणीय।'
            : 'Permissible in specific Lagna avoiding Rahu Kalam & Durmuhurtham.';
      }

      let engStatus = 'MODERATE', engReason = '';
      if (isAmavasya || isRikta || avoidMajorCeremonyNak) {
        engStatus = 'AVOID';
        engReason = isTe
          ? 'రిక్తా తిథులు, అమావాస్య లేదా భరణి/ఆశ్లేష/జ్యేష్ఠ/మూల నక్షత్రాలలో నిశ్చితార్థం నిషిద్ధం.'
          : isHi
            ? 'रिक्ता तिथि, अमावस्या या भरणी/आश्लेषा/ज्येष्ठा/मूल में सगाई वर्जित है।'
            : 'Avoid engagement on Rikta Tithi, Amavasya, or Bharani/Ashlesha/Jyeshtha/Moola.';
      } else if (isShukla && tithiClean && (dhruvaNak || mriduNak || kshipraNak)) {
        engStatus = 'AUSPICIOUS';
        engReason = isTe
          ? `శుక్ల పక్ష ${panchang.tithi} మరియు ${panchang.nakshatra} తాంబూల/నిశ్చితార్థ కార్యక్రమాలకు శుభప్రదం.`
          : isHi
            ? `शुक्ल पक्ष ${panchang.tithi} व ${panchang.nakshatra} सगाई/शुभ संकल्प हेतु उत्तम।`
            : `Shukla Paksha ${panchang.tithi} with ${panchang.nakshatra} supports family commitments.`;
      } else {
        engStatus = 'MODERATE';
        engReason = isTe
          ? 'రాహుకాలం, యమగండం మినహాయించి అభిజిత్ లేదా శుభ సమయంలో నిర్వహించవచ్చు.'
          : isHi
            ? 'राहुकाल व यमगंड को छोड़कर अभिजीत या शुभ समय में संभव।'
            : 'Acceptable during Abhijit / Subha Samayam excluding Rahu Kalam & Yamagandam.';
      }

      let gruhaStatus = 'AVOID', gruhaReason = '';
      if (isDhanurOrShunyaMasa || isAmavasya || isRikta || avoidMajorCeremonyNak) {
        gruhaStatus = 'AVOID';
        gruhaReason = isTe
          ? (isDhanurOrShunyaMasa ? 'ధనుర్మాస / శూన్య మాసాలలో గృహప్రవేశం, వాస్తు హోమం నిషిద్ధం.' : `${panchang.tithi} / ${panchang.nakshatra} గృహప్రవేశానికి అనుకూలం కాదు.`)
          : isHi
            ? (isDhanurOrShunyaMasa ? 'धनुर्मास / शून्य मास में गृहप्रवेश व वास्तु पूजन वर्जित है।' : `${panchang.tithi} / ${panchang.nakshatra} गृहप्रवेश हेतु अनुकूल नहीं।`)
            : (isDhanurOrShunyaMasa ? 'Dhanurmasam / Shunya Masam — Gruhapravesham is avoided.' : `Avoid housewarming on ${panchang.tithi} / ${panchang.nakshatra}.`);
      } else if (isShukla && (dhruvaNak || mriduNak || nIdx === 7 || nIdx === 12) && goodWeekday) {
        gruhaStatus = 'AUSPICIOUS';
        gruhaReason = isTe
          ? `${panchang.nakshatra} మరియు ${panchang.tithi} వాస్తు పూజ, పాలు పొంగించడం, గృహప్రవేశానికి శుభప్రదం.`
          : isHi
            ? `${panchang.nakshatra} व ${panchang.tithi} वास्तु पूजन व गृहप्रवेश हेतु शुभ है।`
            : `Fixed/Soft Nakshatra (${panchang.nakshatra}) on ${panchang.tithi} favors Gruhapravesham.`;
      } else {
        gruhaStatus = 'MODERATE';
        gruhaReason = isTe
          ? 'శుభ లగ్నంలో తాత్కాలిక/అద్దె గృహ ప్రవేశానికి పరిశీలించవచ్చు; నూతన గృహానికి రోహిణి/పుష్యమి/ఉత్తర/రేవతి శ్రేష్టం.'
          : isHi
            ? 'शुभ लग्न में अस्थायी प्रवेश संभव; नए घर के लिए रोहिणी/पुष्य/उत्तरा/रेवती श्रेष्ठ।'
            : 'Can be considered for rented/temporary entry in Subha Lagna.';
      }

      let newStartStatus = 'MODERATE', newStartReason = '';
      if (isAmavasya || isRikta) {
        newStartStatus = 'AVOID';
        newStartReason = isTe
          ? `రిక్తా తిథి (${panchang.tithi}) లేదా అమావాస్య కొత్త వ్యాపార/కార్యారంభాలకు తగినది కాదు.`
          : isHi
            ? `रिक्ता तिथि (${panchang.tithi}) या अमावस्या नए कार्य आरंभ हेतु अनुपयुक्त।`
            : `Rikta Tithi (${panchang.tithi}) or Amavasya is unsuitable for new ventures.`;
      } else if (isShukla && (kshipraNak || dhruvaNak || mriduNak)) {
        newStartStatus = 'AUSPICIOUS';
        newStartReason = isTe
          ? `శుక్ల పక్ష ${panchang.tithi} మరియు ${panchang.nakshatra} నూతన కార్యాలు, వ్యాపారం, అక్షరాభ్యాసానికి అనుకూలం.`
          : isHi
            ? `शुक्ल पक्ष ${panchang.tithi} व ${panchang.nakshatra} नए कार्य व व्यापार के लिए शुभ।`
            : `Shukla Paksha ${panchang.tithi} + ${panchang.nakshatra} favors new business & learning.`;
      } else {
        newStartStatus = 'MODERATE';
        newStartReason = isTe
          ? 'శుభ సమయంలో లేదా గుళిక కాలంలో ప్రారంభించవచ్చు; రాహుకాలం తప్పక వర్జించాలి.'
          : isHi
            ? 'शुभ समय या गुलिक काल में आरंभ करें; राहुकाल वर्जित रखें।'
            : 'Suitable during Subha Samayam or Gulika Kalam; avoid Rahu Kalam.';
      }

      let travelStatus = 'MODERATE', travelReason = '';
      if (isAmavasya || tNum === 14 || [1, 2, 8].includes(nIdx)) {
        travelStatus = 'AVOID';
        travelReason = isTe
          ? 'చతుర్దశి/అమావాస్య లేదా భరణి/కృత్తిక/ఆశ్లేష నక్షత్రాలలో దూర ప్రయాణాలు వాయిదా వేయడం మంచిది.'
          : isHi
            ? 'चतुर्दशी/अमावस्या या भरणी/कृत्तिका/आश्लेषा में लंबी यात्रा टालना उचित है।'
            : 'Chaturdashi/Amavasya or Bharani/Krittika/Ashlesha suggests postponing long journeys.';
      } else if (kshipraNak || charaNak || mriduNak) {
        travelStatus = 'AUSPICIOUS';
        travelReason = isTe
          ? `${panchang.nakshatra} ప్రయాణాలు, తీర్థయాత్రలు మరియు వాహన కొనుగోలుకు శుభప్రదం.`
          : isHi
            ? `${panchang.nakshatra} यात्रा, तीर्थयात्रा व वाहन कार्य हेतु शुभ है।`
            : `Movable/Swift Nakshatra (${panchang.nakshatra}) favors travel, Yatra & vehicles.`;
      } else {
        travelStatus = 'MODERATE';
        travelReason = isTe
          ? 'సాధారణ ప్రయాణాలకు అనుకూలం; బయలుదేరే ముందు ఆ వారం దిశ శూల పరిశీలించండి.'
          : isHi
            ? 'सामान्य यात्रा के लिए ठीक; प्रस्थान से पूर्व दिशा शूल देखें।'
            : 'Good for routine travel; check Disha Shoola before departing.';
      }

      const items = [
        { icon: '💍', title: isTe ? 'వివాహం' : isHi ? 'विवाह' : 'Vivaham (Marriage)', status: marriageStatus, reason: marriageReason },
        { icon: '🤝', title: isTe ? 'నిశ్చితార్థం' : isHi ? 'सगाई / निश्चय' : 'Nischitartham (Engagement)', status: engStatus, reason: engReason },
        { icon: '🏠', title: isTe ? 'గృహప్రవేశం' : isHi ? 'गृहप्रवेश' : 'Gruhapravesham (Housewarming)', status: gruhaStatus, reason: gruhaReason },
        { icon: '🚀', title: isTe ? 'నూతన కార్యాలు & వ్యాపారం' : isHi ? 'नए कार्य एवं व्यापार' : 'New Beginnings & Business', status: newStartStatus, reason: newStartReason },
        { icon: '🚆', title: isTe ? 'ప్రయాణం & యాత్ర' : isHi ? 'यात्रा एवं तीर्थाटन' : 'Prayanam (Travel & Yatra)', status: travelStatus, reason: travelReason }
      ];

      const goodCount = items.filter(i => i.status === 'AUSPICIOUS').length;
      if (badgeEl) {
        badgeEl.textContent = goodCount >= 3
          ? (isTe ? '✅ శుభ దినం' : isHi ? '✅ शुभ दिन' : '✅ Shubha Dinam')
          : goodCount >= 1
            ? (isTe ? '⚖️ మిశ్రమ / ఎంపిక' : isHi ? '⚖️ मिश्रित / चयनित' : '⚖️ Mixed / Selective')
            : (isTe ? '⚠️ వర్జ్యం / జాగ్రత్త' : isHi ? '⚠️ वर्ज्य / सावधानी' : '⚠️ Varjya / Avoid Major');
        badgeEl.className = `text-[10px] font-mono px-2 py-0.5 rounded-full border ${
          goodCount >= 3
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
            : goodCount >= 1
              ? 'bg-amber-500/20 text-amber-200 border-amber-400/30'
              : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
        }`;
      }

      if (noteEl) {
        noteEl.textContent = isTe
          ? `తెలుగు ముహూర్త శాస్త్ర ప్రకారం (${panchang.teluguMonth}, ${panchang.paksha}, ${panchang.tithi}, ${panchang.nakshatra}) అంచనా. రాహుకాలం, దుర్ముహూర్తం వర్జించి తారాబలం, గురు/శుక్ర బలం చూడండి.`
          : isHi
            ? `मुहूर्त शास्त्र के अनुसार (${panchang.teluguMonth}, ${panchang.paksha}, ${panchang.tithi}, ${panchang.nakshatra}) मूल्यांकन। राहुकाल व दुर्मुहूर्त त्यागकर ताराबल व गुरु/शुक्र बल देखें।`
            : `Evaluated per Telugu Muhurtha Shastra (${panchang.teluguMonth}, ${panchang.paksha}, ${panchang.tithi}, ${panchang.nakshatra}).`;
      }

      gridEl.innerHTML = items.map(it => {
        const badgeCls = it.status === 'AUSPICIOUS'
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/35'
          : it.status === 'MODERATE'
            ? 'bg-amber-500/20 text-amber-200 border-amber-400/35'
            : 'bg-rose-500/20 text-rose-300 border-rose-400/35';
        const statusLbl = it.status === 'AUSPICIOUS'
          ? (isTe ? '✅ శుభం' : isHi ? '✅ शुभ' : '✅ Auspicious')
          : it.status === 'MODERATE'
            ? (isTe ? '⚖️ ఎంపిక' : isHi ? '⚖️ चयनित' : '⚖️ Selective')
            : (isTe ? '🚫 వర్జ్యం' : isHi ? '🚫 वर्ज्य' : '🚫 Avoid');
        return `
          <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div class="flex items-center justify-between gap-2">
              <span class="font-bold text-white">${it.icon} ${it.title}</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeCls}">${statusLbl}</span>
            </div>
            <p class="text-[11px] text-slate-300 leading-snug">${it.reason}</p>
          </div>
        `;
      }).join('');
    }

    function populateLocationCascades() {
      const stSel = document.getElementById('stateFilter');
      const distSel = document.getElementById('districtFilter');
      const mandSel = document.getElementById('mandalFilter');
      const divSel = document.getElementById('divisionFilter');
      if (!stSel || !distSel || !mandSel || !divSel) return;

      const stVal = stSel.value;
      const prevDist = distSel.value;
      const prevMand = mandSel.value;
      const prevDiv = divSel.value;

      const districts = new Set();
      BASE_TEMPLES.forEach(t => {
        if (stVal === 'ALL' || t.state === stVal) {
          if (t.district) districts.add(t.district);
        }
      });
      if (stVal !== 'ALL' && INDIA_DIVISIONS[stVal]) {
        Object.keys(INDIA_DIVISIONS[stVal]).forEach(d => districts.add(d));
      }
      const sortedDist = Array.from(districts).sort();
      distSel.innerHTML = `<option value="ALL">🏛️ All Districts (${sortedDist.length})</option>` +
        sortedDist.map(d => `<option value="${d}">${d}</option>`).join('');
      distSel.value = sortedDist.includes(prevDist) ? prevDist : 'ALL';

      const distVal = distSel.value;
      const mandals = new Set();
      BASE_TEMPLES.forEach(t => {
        if ((stVal === 'ALL' || t.state === stVal) && (distVal === 'ALL' || t.district === distVal)) {
          if (t.mandal) mandals.add(t.mandal);
        }
      });
      if (stVal !== 'ALL' && distVal !== 'ALL' && INDIA_DIVISIONS[stVal]?.[distVal]) {
        Object.keys(INDIA_DIVISIONS[stVal][distVal]).forEach(m => mandals.add(m));
      }
      const sortedMand = Array.from(mandals).sort();
      mandSel.innerHTML = `<option value="ALL">🌿 All Mandals (${sortedMand.length})</option>` +
        sortedMand.map(m => `<option value="${m}">${m}</option>`).join('');
      mandSel.value = sortedMand.includes(prevMand) ? prevMand : 'ALL';

      const mandVal = mandSel.value;
      const divs = new Set();
      BASE_TEMPLES.forEach(t => {
        if ((stVal === 'ALL' || t.state === stVal)
            && (distVal === 'ALL' || t.district === distVal)
            && (mandVal === 'ALL' || t.mandal === mandVal)) {
          if (t.division) divs.add(t.division);
        }
      });
      if (stVal !== 'ALL' && distVal !== 'ALL' && INDIA_DIVISIONS[stVal]?.[distVal]) {
        const dObj = INDIA_DIVISIONS[stVal][distVal];
        if (mandVal !== 'ALL' && dObj[mandVal]) {
          dObj[mandVal].forEach(dv => divs.add(dv));
        } else {
          Object.values(dObj).flat().forEach(dv => divs.add(dv));
        }
      }
      const sortedDivs = Array.from(divs).sort();
      divSel.innerHTML = `<option value="ALL">🏷️ All Divisions (${sortedDivs.length})</option>` +
        sortedDivs.map(dv => `<option value="${dv}">${dv}</option>`).join('');
      divSel.value = sortedDivs.includes(prevDiv) ? prevDiv : 'ALL';
    }

    window.onStateFilterChange = () => {
      const distSel = document.getElementById('districtFilter');
      const mandSel = document.getElementById('mandalFilter');
      const divSel = document.getElementById('divisionFilter');
      if (distSel) distSel.value = 'ALL';
      if (mandSel) mandSel.value = 'ALL';
      if (divSel) divSel.value = 'ALL';
      populateLocationCascades();
      renderTemples();
    };

    window.onDistrictFilterChange = () => {
      const mandSel = document.getElementById('mandalFilter');
      const divSel = document.getElementById('divisionFilter');
      if (mandSel) mandSel.value = 'ALL';
      if (divSel) divSel.value = 'ALL';
      populateLocationCascades();
      renderTemples();
    };

    window.onMandalFilterChange = () => {
      const divSel = document.getElementById('divisionFilter');
      if (divSel) divSel.value = 'ALL';
      populateLocationCascades();
      renderTemples();
    };

    let selectedFiftyYear = 2026;

    window.selectFestivalYear = (yr) => {
      selectedFiftyYear = yr;
      renderFiftyYearArchive();
    };

    window.jumpToFestivalDate = (isoDate) => {
      if (!isoDate) return;
      datePicker.value = isoDate;
      selectedDate = new Date(isoDate + 'T12:00:00');
      calViewYear = selectedDate.getFullYear();
      calViewMonth = selectedDate.getMonth();
      expandedFestivalDate = isoDate;
      renderAll();
      const card = document.getElementById('selectedDateDetailCard');
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };


    function normalizeFestDedupKey(dateStr, fObj) {
      const teBase = (fObj.te || '').replace(/\s*\([^)]*\)/g, '').replace(/[&·•\-–—]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
      return `${dateStr}|${teBase}`;
    }

    function getFestivalsForDate(isoStr) {
      const yrStr = (isoStr || '').slice(0, 4);
      const out = [];
      const seen = new Set();

      (ALL_FESTIVALS || []).forEach(f => {
        if (f.date === isoStr) {
          const keyId = normalizeFestDedupKey(f.date, f);
          if (!seen.has(keyId)) {
            seen.add(keyId);
            out.push(f);
          }
        }
      });

      const yrList = FEST_50YR[yrStr] || [];
      yrList.forEach(item => {
        if (item.date === isoStr) {
          const meta = FEST_META[item.key] || { te: item.key, en: item.key, category: 'religious', desc: '', story: [] };
          const cand = {
            date: item.date,
            te: meta.te,
            en: meta.en,
            category: meta.category || 'religious',
            desc: meta.desc || '',
            story: meta.story || [],
            teStory: meta.teStory,
            hiStory: meta.hiStory
          };
          const keyId = normalizeFestDedupKey(item.date, cand);
          if (!seen.has(keyId)) {
            seen.add(keyId);
            out.push(cand);
          }
        }
      });

      return out;
    }

    window.jumpCalendarYear = (yrVal) => {
      const yNum = parseInt(yrVal, 10);
      if (!isNaN(yNum) && yNum >= 2026 && yNum <= 2075) {
        calViewYear = yNum;
        selectedFiftyYear = yNum;
        renderCalendar();
        renderFiftyYearArchive();
      }
    };

    function renderFiftyYearArchive() {
      const btnGrid = document.getElementById('fiftyYearButtonsGrid');
      const panel = document.getElementById('fiftyYearFestivalsPanel');
      const titleEl = document.getElementById('fiftyYearTitle');
      const badgeEl = document.getElementById('fiftyYearCountBadge');
      if (!btnGrid || !panel) return;

      const years = [];
      for (let y = 2026; y <= 2075; y++) years.push(y);

      btnGrid.innerHTML = years.map(y => {
        const active = y === selectedFiftyYear;
        return `<button type="button" onclick="selectFestivalYear(${y})" class="px-2.5 py-1 rounded-lg text-[11px] font-mono shrink-0 ${active ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-200 hover:bg-white/15'}">${y}</button>`;
      }).join('');

      const list = FEST_50YR[String(selectedFiftyYear)] || [];
      if (titleEl) titleEl.textContent = `Festivals & Pandugalu in ${selectedFiftyYear} (${list.length} dates)`;
      if (badgeEl) badgeEl.textContent = String(selectedFiftyYear);

      panel.innerHTML = list.map(item => {
        const meta = FEST_META[item.key] || { te: item.key, en: item.key, category: 'religious' };
        const dtInfo = formatDateWithDay(item.date);
        const label = currentLang === 'te' ? meta.te : meta.en;
        return `
          <div onclick="jumpToFestivalDate('${item.date}')" class="cursor-pointer flex items-center justify-between gap-2 p-2 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 text-[11px]">
            <div class="min-w-0 truncate">
              <span class="font-bold text-white">${label}</span>
            </div>
            <div class="text-right font-mono shrink-0">
              <span class="text-amber-300 font-bold">${item.date}</span>
              <span class="text-slate-400 text-[10px] ml-1">(${dtInfo.dayName.slice(0, 3)})</span>
            </div>
          </div>
        `;
      }).join('');
    }

    function tickClocks() {
      const now = new Date();
      const activeCity = cities[selectedCityIndex] || cities[0];
      const slEl = document.getElementById('clockFormatSlider');
      const mLblEl = document.getElementById('clockModeLabel');
      if (slEl && String(slEl.value) !== (use24HourClock ? '1' : '0')) slEl.value = use24HourClock ? '1' : '0';
      if (mLblEl) mLblEl.textContent = use24HourClock ? '24h' : '12h';
      document.getElementById('heroTime').textContent = now.toLocaleTimeString(use24HourClock ? 'en-GB' : 'en-US', { timeZone: activeCity.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !use24HourClock });
      document.getElementById('heroDate').textContent = now.toLocaleDateString('en-IN', { timeZone: activeCity.tz, weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      const heroTempEl = document.getElementById('heroCityTemp');
      if (heroTempEl) heroTempEl.textContent = getCityTempLabel(activeCity);

      // Update Sun Dot position along Quadratic Bezier M 32 108 Q 180 -12 328 108
      const sun = calcSunTimes(selectedDate, activeCity.lat, activeCity.lon, activeCity.tz);
      const cityParts = new Date(now.toLocaleString('en-US', { timeZone: activeCity.tz }));
      const curMin = cityParts.getHours() * 60 + cityParts.getMinutes();
      const progress = Math.max(0.02, Math.min(0.98, (curMin - sun.sr.total) / Math.max(1, sun.spanMin)));
      const bx = (1 - progress) * (1 - progress) * 32 + 2 * (1 - progress) * progress * 180 + progress * progress * 328;
      const by = (1 - progress) * (1 - progress) * 108 + 2 * (1 - progress) * progress * (-12) + progress * progress * 108;
      const sunDot = document.getElementById('sunDot');
      const sunHalo = document.getElementById('sunHalo');
      if (sunDot) { sunDot.setAttribute('cx', bx.toFixed(1)); sunDot.setAttribute('cy', by.toFixed(1)); }
      if (sunHalo) { sunHalo.setAttribute('cx', bx.toFixed(1)); sunHalo.setAttribute('cy', by.toFixed(1)); }
      const dayTagEl = document.getElementById('heroDayRel');
      if (dayTagEl) dayTagEl.textContent = getRelativeDayTag(now, activeCity.tz);
      try { updateSkyAndLunarArcs(activeCity, now, sun, curMin); } catch (e) {}
      try { updateGoldenHourAndOverlap(now, activeCity, sun); } catch (e) {}
      try { const pNow = getPanchangam(now, activeCity.tz); updateMoonPhaseFromTithi(pNow.tithiIdx, ((pNow.moonSid - pNow.sunSid) % 360 + 360) % 360); updateCelestialTelemetry(now, activeCity, pNow); } catch (e) {}

      document.getElementById('cityList').innerHTML = cities.map((c, idx) => `
        <div onclick="pickCity(${idx})" class="${idx===selectedCityIndex?'gold-border bg-amber-500/10':'glass'} rounded-2xl p-3 cursor-pointer relative">
          <div class="flex items-center justify-between gap-1">
            <div class="text-xs font-bold text-white truncate">${c.name}</div>
            ${cities.length > 1 ? `<button type="button" onclick="deleteCity(event, ${idx})" title="Remove city" class="w-5 h-5 rounded-full bg-white/10 hover:bg-rose-500/30 text-slate-300 hover:text-rose-200 text-[10px] flex items-center justify-center shrink-0">✕</button>` : ''}
          </div>
          <div class="flex items-center justify-between gap-1 mt-1"><span class="text-base font-mono font-bold text-amber-300">${now.toLocaleTimeString('en-US',{timeZone:c.tz,hour:'2-digit',minute:'2-digit',hour12:true})}</span><span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">${getRelativeDayTag(now, c.tz)}</span></div>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[10px] text-slate-400 truncate">${c.label}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-200 shrink-0">${getCityTempLabel(c)}</span>
          </div>
        </div>
      `).join('');
    }

    // 4. TRUE ASTRONOMICAL DRIK GANITA PANCHANGAM ENGINE (Jean Meeus ELP2000 + Lahiri Ayanamsha)
    const TITHIS_EN = ['Padyami','Vidiya','Tadiya','Chavithi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Pournami','Padyami','Vidiya','Tadiya','Chavithi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Amavasya'];
    const TITHIS_TE = ['పాడ్యమి','విదియ','తదియ','చవితి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి','ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','పౌర్ణమి','పాడ్యమి','విదియ','తదియ','చవితి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి','ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','అమావాస్య'];
    const TITHIS_HI = ['प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','पूर्णिमा','प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','अमावस्या'];

    const NAK_EN = ['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushyami','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Moola','Purvashadha','Uttarashadha','Shravanam','Dhanishtha','Shatabhisha','Purvabhadra','Uttarabhadra','Revati'];
    const NAK_TE = ['అశ్విని','భరణి','కృత్తిక','రోహిణి','మృగశిర','ఆర్ద్ర','పునర్వసు','పుష్యమి','ఆశ్లేష','మఖ','పుబ్బ','ఉత్తర','హస్త','చిత్త','స్వాతి','విశాఖ','అనూరాధ','జ్యేష్ఠ','మూల','పూర్వాషాఢ','ఉత్తరాషాఢ','శ్రవణం','ధనిష్ఠ','శతభిషం','పూర్వాభాద్ర','ఉత్తరాభాద్ర','రేవతి'];
    const NAK_HI = ['अश्विनी','भरणी','कृत्तिका','रोहिणी','मृगशिरा','आर्द्रा','पुनर्वसु','पुष्य','आश्लेषा','मघा','पूर्वा फाल्गुनी','उत्तरा फाल्गुनी','हस्त','चित्रा','स्वाति','विशाखा','अनुराधा','ज्येष्ठा','मूल','पूर्वाषाढ़ा','उत्तराषाढ़ा','श्रवण','धनिष्ठा','शतभिषा','पूर्वाभाद्रपद','उत्तराभाद्रपद','रेवती'];

    const YOGAS_EN = ['Vishkambha','Priti','Ayushman','Saubhagya','Shobhana','Atiganda','Sukarma','Dhriti','Shoola','Ganda','Vriddhi','Dhruva','Vyaghata','Harshana','Vajra','Siddhi','Vyatipata','Variyan','Parigha','Shiva','Siddha','Sadhya','Shubha','Shukla','Brahma','Indra','Vaidhriti'];
    const YOGAS_TE = ['విష్కంభ','ప్రీతి','ఆయుష్మాన్','సౌభాగ్య','శోభన','అతిగండ','సుకర్మ','ధృతి','శూల','గండ','వృద్ధి','ధ్రువ','వ్యాఘాత','హర్షణ','వజ్ర','సిద్ధి','వ్యతీపాత','వరీయాన్','పరిఘ','శివ','సిద్ధ','సాధ్య','శుభ','శుక్ల','బ్రహ్మ','ఇంద్ర','వైధృతి'];

    const KARANAS_EN = ['Bava','Balava','Kaulava','Taitila','Garaja','Vanija','Vishti (Bhadra)'];
    const KARANAS_TE = ['బవ','బాలవ','కౌలవ','తైతిల','గరజ','వణిజ','విష్టి (భద్ర)'];

    const RASHIS_EN = ['Mesha (Aries)','Vrishabha (Taurus)','Mithuna (Gemini)','Karkataka (Cancer)','Simha (Leo)','Kanya (Virgo)','Tula (Libra)','Vrischika (Scorpio)','Dhanus (Sagittarius)','Makara (Capricorn)','Kumbha (Aquarius)','Meena (Pisces)'];
    const RASHIS_TE = ['మేష రాశి','వృషభ రాశి','మిథున రాశి','కర్కాటక రాశి','సింహ రాశి','కన్యా రాశి','తులా రాశి','వృశ్చిక రాశి','ధనుస్సు రాశి','మకర రాశి','కుంభ రాశి','మీన రాశి'];
    const RASHIS_HI = ['मेष राशि','वृषभ राशि','मिथुन राशि','कर्क राशि','सिंह राशि','कन्या राशि','तुला राशि','वृश्चिक राशि','धनु राशि','मकर राशि','कुंभ राशि','मीन राशि'];

    const RASHI_LORDS = ['Kuja (Mars)','Shukra (Venus)','Budha (Mercury)','Chandra (Moon)','Surya (Sun)','Budha (Mercury)','Shukra (Venus)','Kuja (Mars)','Guru (Jupiter)','Shani (Saturn)','Shani (Saturn)','Guru (Jupiter)'];
    const MONTHS_EN = ['Chaitra Masam','Vaishakha Masam','Jyeshtha Masam','Ashadha Masam','Shravana Masam','Bhadrapada Masam','Ashwayuja Masam','Kartika Masam','Margashira Masam','Pushya Masam','Magha Masam','Phalguna Masam'];
    const MONTHS_TE = ['చైత్ర మాసం','వైశాఖ మాసం','జ్యేష్ఠ మాసం','ఆషాఢ మాసం','శ్రావణ మాసం','భాద్రపద మాసం','ఆశ్వయుజ మాసం','కార్తీక మాసం','మార్గశిర మాసం','పుష్య మాసం','మాఘ మాసం','ఫాల్గుణ మాసం'];

    function getJulianDay(dateObj) {
      let y = dateObj.getUTCFullYear();
      let m = dateObj.getUTCMonth() + 1;
      const d = dateObj.getUTCDate() + (dateObj.getUTCHours() + dateObj.getUTCMinutes() / 60 + dateObj.getUTCSeconds() / 3600) / 24;
      if (m <= 2) { y -= 1; m += 12; }
      const A = Math.floor(y / 100);
      const B = 2 - A + Math.floor(A / 4);
      return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
    }

    function getLahiriAyanamsha(jd) {
      // Chitrapaksha / Lahiri Ayanamsha calibrated to 23°51'25.5" (23.857083°) at J2000.0 (JD 2451545.0)
      // growing at ~50.290966 arcsec/yr (~1.396971° per Julian century) -> ~24.2203° in 2026
      const T = (jd - 2451545.0) / 36525.0;
      return 23.857083 + 1.396971 * T + 0.000134 * T * T;
    }

    function getSunTropicalLon(jd) {
      const T = (jd - 2451545.0) / 36525.0;
      const rad = Math.PI / 180;
      const L0 = (280.46646 + 36000.76983 * T + 0.0003032 * T * T) % 360;
      const M = ((357.52911 + 35999.05029 * T - 0.0001537 * T * T) % 360) * rad;
      const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M)
              + (0.019993 - 0.000101 * T) * Math.sin(2 * M)
              + 0.000289 * Math.sin(3 * M);
      const trueLon = (L0 + C) % 360;
      const omega = (125.04 - 1934.136 * T) * rad;
      return ((trueLon - 0.00569 - 0.00478 * Math.sin(omega)) + 360) % 360;
    }

    function getMoonTropicalLon(jd) {
      const T = (jd - 2451545.0) / 36525.0;
      const rad = Math.PI / 180;
      const Lp = ((218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + (T ** 3) / 538841.0) % 360 + 360) % 360;
      const D = (((297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + (T ** 3) / 545868.0) % 360 + 360) % 360) * rad;
      const M = (((357.5291092 + 35999.0502909 * T - 0.0001536 * T * T) % 360 + 360) % 360) * rad;
      const Mp = (((134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + (T ** 3) / 69699.0) % 360 + 360) % 360) * rad;
      const F = (((93.2720950 + 483202.0175233 * T - 0.0036539 * T * T) % 360 + 360) % 360) * rad;
      const E = 1.0 - 0.002516 * T - 0.0000074 * T * T;

      const terms = [
        [0, 0, 1, 0, 6288774], [2, 0, -1, 0, 1274027], [2, 0, 0, 0, 658314],
        [0, 0, 2, 0, 213618], [0, 1, 0, 0, -185116], [0, 0, 0, 2, -114332],
        [2, 0, -2, 0, 58793], [2, -1, -1, 0, 57066], [2, 0, 1, 0, 53322],
        [2, -1, 0, 0, 45758], [0, 1, -1, 0, -40923], [1, 0, 0, 0, -34720],
        [0, 1, 1, 0, -30383], [2, 0, 0, -2, 15327], [0, 0, 1, 2, -12528],
        [0, 0, 1, -2, 10980], [4, 0, -1, 0, 10675], [0, 0, 3, 0, 10034],
        [4, 0, -2, 0, 8548], [2, 1, -1, 0, -7888], [2, 1, 0, 0, -6766],
        [1, 0, -1, 0, -5163], [1, 1, 0, 0, 4987], [2, -1, 1, 0, 4036],
        [2, 0, 2, 0, 3994], [4, 0, 0, 0, 3861], [2, 0, -3, 0, 3665],
        [0, 1, -2, 0, -2689], [2, 0, -1, 2, -2602], [2, -1, -2, 0, 2390],
        [1, 0, 1, 0, -2348], [2, -2, 0, 0, 2236], [0, 1, 2, 0, -2120],
        [0, 2, 0, 0, -2069], [2, -2, -1, 0, 2048], [2, 0, 1, -2, -1773],
        [2, 0, 0, 2, -1595], [4, -1, -1, 0, 1215], [0, 0, 2, 2, -1110],
        [3, 0, -1, 0, -892]
      ];
      let sigmaL = 0;
      for (const [dc, mc, mpc, fc, amp] of terms) {
        let v = amp * Math.sin(dc * D + mc * M + mpc * Mp + fc * F);
        if (Math.abs(mc) === 1) v *= E;
        else if (Math.abs(mc) === 2) v *= E * E;
        sigmaL += v;
      }
      const A1 = ((119.75 + 131.849 * T) % 360) * rad;
      const A2 = ((53.09 + 479264.290 * T) % 360) * rad;
      sigmaL += 3958 * Math.sin(A1) + 1962 * Math.sin(Lp * rad - F) + 318 * Math.sin(A2);
      return ((Lp + sigmaL / 1000000.0) % 360 + 360) % 360;
    }

    function getSiderealAscendant(jd, latDeg, lonDeg, ayanamsha) {
      const T = (jd - 2451545.0) / 36525.0;
      const rad = Math.PI / 180, deg = 180 / Math.PI;
      const gmst = ((280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - (T ** 3) / 38710000.0) % 360 + 360) % 360;
      const lst = ((gmst + lonDeg) % 360) * rad;
      const eps = (23.439291 - 0.0130042 * T) * rad;
      const lat = latDeg * rad;
      const tropAsc = (Math.atan2(Math.cos(lst), -(Math.sin(lst) * Math.cos(eps) + Math.tan(lat) * Math.sin(eps))) * deg + 360) % 360;
      return ((tropAsc - ayanamsha) % 360 + 360) % 360;
    }

    function formatTransitionTime(targetUTC, remHours, tz) {
      const endUTC = new Date(targetUTC + remHours * 3600000);
      const timeStr = endUTC.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: true });
      return Math.floor((endUTC.getTime() - targetUTC) / 86400000) >= 1 ? `${timeStr} (+1d)` : timeStr;
    }

    function getPanchangam(dateObj, tz = 'Asia/Kolkata') {
      const targetUTC = dateObj.getTime();
      const jd = getJulianDay(dateObj);
      const ayan = getLahiriAyanamsha(jd);
      const sunSid = ((getSunTropicalLon(jd) - ayan) % 360 + 360) % 360;
      const moonSid = ((getMoonTropicalLon(jd) - ayan) % 360 + 360) % 360;

      const jdPlus = jd + (1 / 24);
      const ayanPlus = getLahiriAyanamsha(jdPlus);
      const sunRate = (((getSunTropicalLon(jdPlus) - ayanPlus - sunSid) % 360 + 540) % 360) - 180;
      const moonRate = (((getMoonTropicalLon(jdPlus) - ayanPlus - moonSid) % 360 + 540) % 360) - 180;

      const elongation = ((moonSid - sunSid) % 360 + 360) % 360;
      const tithiFloat = elongation / 12.0;
      const tithiIdx = Math.floor(tithiFloat);
      const remTithiDeg = (tithiIdx + 1) * 12.0 - elongation;
      const relRate = Math.max(0.35, moonRate - sunRate);
      const tithiEndStr = formatTransitionTime(targetUTC, remTithiDeg / relRate, tz);

      const nakSpan = 360.0 / 27.0;
      const padaSpan = 360.0 / 108.0;
      const nakIdx = Math.floor(moonSid / nakSpan);
      const pada = Math.floor((moonSid % nakSpan) / padaSpan) + 1;
      const remNakDeg = (nakIdx + 1) * nakSpan - moonSid;
      const nakEndStr = formatTransitionTime(targetUTC, remNakDeg / Math.max(0.45, moonRate), tz);

      const rashiIdx = Math.floor(moonSid / 30.0);
      const sunRashiIdx = Math.floor(sunSid / 30.0);

      const yogaLon = (moonSid + sunSid) % 360.0;
      const yogaIdx = Math.floor(yogaLon / nakSpan);
      const remYogaDeg = (yogaIdx + 1) * nakSpan - yogaLon;
      const yogaEndStr = formatTransitionTime(targetUTC, remYogaDeg / Math.max(0.45, moonRate + sunRate), tz);

      const karanaHalfIdx = Math.floor(elongation / 6.0);
      const karanaIdx = (karanaHalfIdx === 0 || karanaHalfIdx >= 57) ? 6 : ((karanaHalfIdx - 1) % 7);
      const nextKaranaIdx = (karanaIdx + 1) % 7;
      const remKaranaDeg = (karanaHalfIdx + 1) * 6.0 - elongation;
      const karanaEndStr = formatTransitionTime(targetUTC, remKaranaDeg / relRate, tz);

      const amantaMonthIdx = (sunRashiIdx + (tithiIdx < 15 ? (sunRashiIdx === 7 ? 0 : 1) : 0)) % 12;
      const isTe = currentLang === 'te';
      const isHi = currentLang === 'hi';

      const tArr = isTe ? TITHIS_TE : isHi ? TITHIS_HI : TITHIS_EN;
      const nArr = isTe ? NAK_TE : isHi ? NAK_HI : NAK_EN;
      const yArr = isTe ? YOGAS_TE : YOGAS_EN;
      const kArr = isTe ? KARANAS_TE : KARANAS_EN;
      const rArr = isTe ? RASHIS_TE : isHi ? RASHIS_HI : RASHIS_EN;
      const mArr = isTe ? MONTHS_TE : MONTHS_EN;

      const ayana = (sunSid >= 270.0 || sunSid < 90.0)
        ? (isTe ? 'ఉత్తరాయణం' : 'Uttarayanam')
        : (isTe ? 'దక్షిణాయణం' : 'Dakshinayanam');

      const paksha = tithiIdx < 15
        ? (isTe ? 'శుక్ల పక్షం' : isHi ? 'शुक्ल पक्ष' : 'Shukla Paksha')
        : (isTe ? 'బహుళ పక్షం' : isHi ? 'कृष्ण पक्ष' : 'Krishna Paksha');

      return {
        tithiIdx, tithi: tArr[tithiIdx], nextTithi: tArr[(tithiIdx + 1) % 30], tithiEndStr,
        paksha,
        nakIdx, nakshatra: `${nArr[nakIdx]} (${isTe ? 'పాదం' : 'Pada'} ${pada})`, nextNak: nArr[(nakIdx + 1) % 27], nakEndStr,
        pada, yoga: yArr[yogaIdx], nextYoga: yArr[(yogaIdx + 1) % 27], yogaEndStr,
        karana: kArr[karanaIdx], nextKarana: kArr[nextKaranaIdx], karanaEndStr,
        rashiIdx, rashi: rArr[rashiIdx], rashiLord: RASHI_LORDS[rashiIdx],
        sunRashi: rArr[sunRashiIdx], sunRashiIdx, moonSid, sunSid,
        moonDeg: moonSid.toFixed(2), sunDeg: sunSid.toFixed(2),
        teluguMonth: mArr[amantaMonthIdx], ayana
      };
    }

    function calcMuhurthams(date, srMin, ssMin) {
      const span = (ssMin - srMin + 1440) % 1440, part = span / 8, muhurtaLen = span / 15, dow = date.getDay();
      const fmtRange = (s, e) => {
        const f = (m) => { const t = (Math.round(m) + 1440) % 1440, h = Math.floor(t / 60), min = t % 60; return `${String(h%12||12).padStart(2,'0')}:${String(min).padStart(2,'0')} ${h>=12?'PM':'AM'}`; };
        return `${f(s)} – ${f(e)}`;
      };
      const noon = srMin + span / 2;
      const isTe = currentLang === 'te';
      // Classical Telugu Panchangam Durmuhurtham slots (out of 15 daytime Muhurtas, 0-indexed)
      const durSlotsByDow = [
        [13],       // Sunday: 14th muhurta
        [8, 11],    // Monday: 9th & 12th muhurtas
        [3, 10],    // Tuesday: 4th & 11th (night equivalent afternoon slot)
        [7],        // Wednesday: 8th muhurta
        [5, 11],    // Thursday: 6th & 12th muhurtas
        [3, 8],     // Friday: 4th & 9th muhurtas
        [0, 1]      // Saturday: 1st & 2nd muhurtas
      ];
      const durStr = durSlotsByDow[dow]
        .map(idx => fmtRange(srMin + idx * muhurtaLen, srMin + (idx + 1) * muhurtaLen))
        .join(' & ');
      // Subha Samayam (auspicious daytime window derived from Abhijit / Amrit-Subha slot)
      const subhaMorning = fmtRange(srMin + 1.5 * part, srMin + 2.5 * part);
      const subhaAbhijit = fmtRange(noon - 24, noon + 24);
      return [
        { name: isTe ? 'శుభ సమయం (Subha Samayam)' : 'Subha Samayam (Auspicious Window)', time: `${subhaMorning} & ${subhaAbhijit}`, type: 'shubha' },
        { name: isTe ? 'బ్రహ్మ ముహూర్తం' : 'Brahma Muhurtham', time: fmtRange(srMin - 96, srMin - 48), type: 'shubha' },
        { name: isTe ? 'అభిజిత్ ముహూర్తం' : 'Abhijit Muhurtham', time: subhaAbhijit, type: 'shubha' },
        { name: isTe ? 'దుర్ముహూర్తం (Durmuhurtham)' : 'Durmuhurtham (Avoid New Starts)', time: durStr, type: 'ashubha' },
        { name: isTe ? 'యమగండం (Yamagandam)' : 'Yamagandam', time: fmtRange(srMin + ([5,4,3,2,1,7,6][dow] - 1) * part, srMin + [5,4,3,2,1,7,6][dow] * part), type: 'ashubha' },
        { name: isTe ? 'రాహు కాలం (Rahu Kalam)' : 'Rahu Kalam', time: fmtRange(srMin + ([8,2,7,5,6,4,3][dow] - 1) * part, srMin + [8,2,7,5,6,4,3][dow] * part), type: 'ashubha' },
        { name: isTe ? 'గుళిక కాలం' : 'Gulika Kalam', time: fmtRange(srMin + ([7,6,5,4,3,2,1][dow] - 1) * part, srMin + [7,6,5,4,3,2,1][dow] * part), type: 'neutral' }
      ];
    }

    // 5. FULL VEDIC JYOTHISHYAM: SOUTH INDIAN RASHI CHART SVG + NAVAGRAHAS + PERSONALITY NATURE
    const GANAS_EN = ['Deva Gana', 'Manushya Gana', 'Rakshasa Gana'];
    const GANAS_TE = ['దేవ గణం', 'మనుష్య గణం', 'రాక్షస గణం'];
    const NAK_GANA = [0,1,2,1,0,1,0,0,2,2,1,1,0,2,0,2,0,2,2,1,1,0,2,2,1,1,0];

    const NADIS_EN = ['Aadi Nadi (Vata)', 'Madhya Nadi (Pitta)', 'Antya Nadi (Kapha)'];
    const NADIS_TE = ['ఆది నాడి (వాత)', 'మధ్య నాడి (పిత్త)', 'అంత్య నాడి (కఫ)'];
    const NAK_NADI = [0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0,1,2];

    const YONIS_EN = ['Ashwa (Horse)','Gaja (Elephant)','Mesha (Sheep)','Sarpa (Serpent)','Shwana (Dog)','Marjala (Cat)','Mushika (Rat)','Go (Cow)','Mahisha (Buffalo)','Vyaghra (Tiger)','Mriga (Deer)','Vanara (Monkey)','Nakula (Mongoose)','Simha (Lion)'];
    const YONIS_TE = ['అశ్వ యోని','గజ యోని','మేష యోని','సర్ప యోని','శ్వాన యోని','మార్జాల యోని','మూషిక యోని','గో యోని','మహిష యోని','వ్యాఘ్ర యోని','మృగ యోని','వానర యోని','నకుల యోని','సింహ యోని'];
    const NAK_YONI = [0,1,2,3,3,4,5,6,5,6,6,7,8,9,8,9,10,10,4,11,12,11,13,0,13,7,1];

    const RASHI_PERSONALITY = [
      { // 0 Mesha
        element: 'Agni (Fire) • Chara (Movable)',
        natureEn: 'Bold, pioneering, decisive, and action-oriented. Naturally steps forward in crises, dislikes stagnation, and thrives in leadership, engineering, or independent ventures. Warm-hearted and protective toward family, though occasional impatience requires mindful calm.',
        natureTe: 'ధైర్యవంతులు, స్వతంత్ర భావాలు మరియు నాయకత్వ లక్షణాలు కలవారు. కష్టమైన పరిస్థితులలో ముందుండి నడిపిస్తారు. కుటుంబానికి అండగా నిలుస్తారు; తొందరపాటు తగ్గించుకుంటే అద్భుత విజయాలు సాధిస్తారు.',
        strengthsEn: 'Courage, Quick Initiative, Loyalty, Technical Drive',
        luckyEn: 'Tuesday • Red & Saffron • Coral (Pagadam)'
      },
      { // 1 Vrishabha
        element: 'Prithvi (Earth) • Sthira (Fixed)',
        natureEn: 'Grounded, patient, dependable, and appreciative of beauty, music, and comfort. Possesses strong financial acumen and steady perseverance—once committed to a goal or relationship, remains unwaveringly loyal and builds lasting security.',
        natureTe: 'స్థిరమైన మనస్తత్వం, సహనం, కళాభిరుచి మరియు ఆర్థిక క్రమశిక్షణ కలవారు. ఒకసారి లక్ష్యాన్ని నిర్దేశించుకుంటే పట్టుదలతో పూర్తి చేస్తారు. కుటుంబ ప్రేమ, విశ్వసనీయత వీరి ప్రధాన బలం.',
        strengthsEn: 'Perseverance, Financial Wisdom, Reliability, Artistic Taste',
        luckyEn: 'Friday • White & Emerald • Diamond / Opal'
      },
      { // 2 Mithuna
        element: 'Vayu (Air) • Dwiswabhava (Dual)',
        natureEn: 'Intellectually sharp, articulate, curious, and adaptable. Excels at communication, problem-solving, software/analytical systems, and connecting people. Youthful spirit and versatile mind allow effortless multitasking across diverse interests.',
        natureTe: 'చురుకైన మేధస్సు, వాక్చాతుర్యం, విశ్లేషణాత్మక ఆలోచన మరియు నూతన విషయాలు నేర్చుకునే ఉత్సాహం కలవారు. సాంకేతిక, కమ్యూనికేషన్ రంగాలలో విశేష ప్రతిభ కనబరుస్తారు.',
        strengthsEn: 'Analytical Intellect, Eloquence, Adaptability, Wit',
        luckyEn: 'Wednesday • Green • Emerald (Pacha)'
      },
      { // 3 Karkataka
        element: 'Jala (Water) • Chara (Movable)',
        natureEn: 'Deeply empathetic, intuitive, nurturing, and fiercely devoted to home and heritage. Possesses strong emotional intelligence and memory, often sensing unspoken feelings of loved ones while quietly working toward family prosperity.',
        natureTe: 'దయాగుణం, కుటుంబం పట్ల అపారమైన ప్రేమ, సున్నితమైన మనస్సు మరియు అంతర్దృష్టి కలవారు. ఇతరుల కష్టాలను అర్థం చేసుకుని ఆదుకుంటారు.',
        strengthsEn: 'Empathy, Intuition, Family Devotion, Resilience',
        luckyEn: 'Monday • Pearl White & Silver • Pearl (Muthyam)'
      },
      { // 4 Simha
        element: 'Agni (Fire) • Sthira (Fixed)',
        natureEn: 'Dignified, generous, charismatic, and principled. Carries natural authority and self-respect, inspiring confidence in teams and family. Values honor, truth, and creative self-expression, shining brightest when given responsibility.',
        natureTe: 'ఆత్మగౌరవం, ఉదార స్వభావం, రాజసం మరియు సహజ నాయకత్వ లక్షణాలు కలవారు. సత్యం, ధర్మం పట్ల నిబద్ధతతో ఉండి అందరికీ ఆదర్శంగా నిలుస్తారు.',
        strengthsEn: 'Leadership, Generosity, Integrity, Confidence',
        luckyEn: 'Sunday • Gold & Ruby Red • Ruby (Manikyam)'
      },
      { // 5 Kanya
        element: 'Prithvi (Earth) • Dwiswabhava (Dual)',
        natureEn: 'Methodical, observant, humble, and perfection-oriented. Naturally spots details others overlook, making them exceptional analysts, troubleshooters, planners, and advisors. Practical kindness shows through helpful actions.',
        natureTe: 'సూక్ష్మ పరిశీలన, క్రమశిక్షణ, వినయం మరియు సమయపాలన కలవారు. ఏ పనినైనా పరిపూర్ణంగా చేయాలని భావిస్తారు. విశ్లేషణ, ప్రణాళికా రచనలో దిట్టలు.',
        strengthsEn: 'Precision, Practical Wisdom, Service, Problem-Solving',
        luckyEn: 'Wednesday • Pastel Green • Emerald (Pacha)'
      },
      { // 6 Tula
        element: 'Vayu (Air) • Chara (Movable)',
        natureEn: 'Diplomatic, fair-minded, refined, and relationship-oriented. Seeks harmony, justice, and aesthetic balance in every sphere. Skilled mediator who brings people together with grace and thoughtful judgment.',
        natureTe: 'న్యాయబుద్ధి, సమతుల్యత, మృదుస్వభావం మరియు అందరినీ కలుపుకుపోయే గుణం కలవారు. వివాదాలను శాంతియుతంగా పరిష్కరించడంలో నేర్పరులు.',
        strengthsEn: 'Diplomacy, Fairness, Charm, Aesthetic Sense',
        luckyEn: 'Friday • Ivory & Sky Blue • Diamond / White Sapphire'
      },
      { // 7 Vrischika
        element: 'Jala (Water) • Sthira (Fixed)',
        natureEn: 'Intense, determined, courageous, and deeply perceptive. Capable of profound focus and quiet transformation; never gives up easily when pursuing truth or protecting loved ones. Drawn toward research, spirituality, and mastery.',
        natureTe: 'అసాధారణ పట్టుదల, లోతైన పరిశోధనా దృష్టి, ధైర్యం మరియు ఆధ్యాత్మిక ఆసక్తి కలవారు. కష్టాలకు వెరవక లక్ష్య సాధన దిశగా ముందుకు సాగుతారు.',
        strengthsEn: 'Determination, Depth, Fearlessness, Loyalty',
        luckyEn: 'Tuesday • Maroon & Coral • Red Coral (Pagadam)'
      },
      { // 8 Dhanus
        element: 'Agni (Fire) • Dwiswabhava (Dual)',
        natureEn: 'Optimistic, philosophical, truthful, and freedom-loving. Driven by higher wisdom, dharma, teaching, and exploration. Honest and straightforward in speech, uplifting others with broad vision and spiritual faith.',
        natureTe: 'ఆశావాద దృక్పథం, ధార్మిక చింతన, జ్ఞాన తృష్ణ మరియు నిజాయితీ కలవారు. ఉన్నత ఆశయాలతో ఇతరులకు మార్గదర్శకులుగా నిలుస్తారు.',
        strengthsEn: 'Wisdom, Optimism, Honesty, Spiritual Vision',
        luckyEn: 'Thursday • Yellow & Gold • Yellow Sapphire (Pushyaragam)'
      },
      { // 9 Makara
        element: 'Prithvi (Earth) • Chara (Movable)',
        natureEn: 'Disciplined, responsible, pragmatic, and enduring. Rises steadily through sustained hard work, integrity, and strategic patience—often achieving major authority and respect in the prime of life.',
        natureTe: 'కఠోర శ్రమ, బాధ్యతాయుత ప్రవర్తన, ఓర్పు మరియు వ్యూహాత్మక ఆలోచన కలవారు. జీవితంలో క్రమంగా ఉన్నత శిఖరాలను అధిరోహిస్తారు.',
        strengthsEn: 'Discipline, Endurance, Accountability, Strategy',
        luckyEn: 'Saturday • Royal Blue & Black • Blue Sapphire (Neelam)'
      },
      { // 10 Kumbha
        element: 'Vayu (Air) • Sthira (Fixed)',
        natureEn: 'Original, humanitarian, independent, and forward-thinking. Values intellectual freedom, innovation, and social fairness. Calm observer who often pioneers unconventional solutions ahead of the crowd.',
        natureTe: 'స్వతంత్ర ఆలోచనలు, మానవతా దృక్పథం, సృజనాత్మకత మరియు సేవాభావం కలవారు. నూతన ఆవిష్కరణలు, సమాజ హితం పట్ల ఆసక్తి చూపుతారు.',
        strengthsEn: 'Innovation, Humanitarianism, Objectivity, Vision',
        luckyEn: 'Saturday • Electric Blue & Violet • Blue Sapphire / Amethyst'
      },
      { // 11 Meena
        element: 'Jala (Water) • Dwiswabhava (Dual)',
        natureEn: 'Compassionate, imaginative, spiritual, and deeply wise. Blends artistic sensitivity with intuitive understanding of human nature. Devoted to family peace, devotion, and selfless service.',
        natureTe: 'కరుణ, ఆధ్యాత్మిక చింతన, సృజనాత్మకత మరియు నిస్వార్థ సేవాభావం కలవారు. శాంతియుత జీవనం, దైవభక్తి వీరి జీవితానికి బలం.',
        strengthsEn: 'Compassion, Creativity, Spiritual Depth, Grace',
        luckyEn: 'Thursday • Sea Green & Yellow • Yellow Sapphire (Pushyaragam)'
      }
    ];

    
    const VIMSHOTTARI_DASHA_ORDER = [
      { lordEn: 'Ketu', lordTe: 'కేతువు', years: 7 },
      { lordEn: 'Shukra (Venus)', lordTe: 'శుక్రుడు', years: 20 },
      { lordEn: 'Ravi (Sun)', lordTe: 'రవి (సూర్యుడు)', years: 6 },
      { lordEn: 'Chandra (Moon)', lordTe: 'చంద్రుడు', years: 10 },
      { lordEn: 'Kuja (Mars)', lordTe: 'కుజుడు', years: 7 },
      { lordEn: 'Rahu', lordTe: 'రాహువు', years: 18 },
      { lordEn: 'Guru (Jupiter)', lordTe: 'గురువు (బృహస్పతి)', years: 16 },
      { lordEn: 'Shani (Saturn)', lordTe: 'శని', years: 19 },
      { lordEn: 'Budha (Mercury)', lordTe: 'బుధుడు', years: 17 }
    ];

    const BHAVA_MEANINGS = [
      { bhava: 1, nameEn: '1st Bhava — Lagna / Tanu', nameTe: '1వ భావం — లగ్నం / తనువు', karaka: 'Ravi / Lagna', themeEn: 'Selfhood, physical vitality, willpower, head/mind orientation, and life direction.', themeTe: 'ఆత్మబలం, శరీర దారుఢ్యం, వ్యక్తిత్వం మరియు జీవిత దిశ.' },
      { bhava: 2, nameEn: '2nd Bhava — Dhana / Vak', nameTe: '2వ భావం — ధన / వాక్ స్థానం', karaka: 'Guru', themeEn: 'Accumulated savings, family lineage, speech clarity, truthfulness, and food/nourishment.', themeTe: 'సంచిత ధనం, కుటుంబ వాతావరణం, వాక్ చాతుర్యం మరియు ఆహార సుఖం.' },
      { bhava: 3, nameEn: '3rd Bhava — Sahaja / Parakrama', nameTe: '3వ భావం — సహజ / పరాక్రమ స్థానం', karaka: 'Kuja', themeEn: 'Courage, initiative, siblings, communication skills, short journeys, and self-effort.', themeTe: 'ధైర్యం, సాహసం, తోబుట్టువులు, కమ్యూనికేషన్ మరియు స్వయం కృషి.' },
      { bhava: 4, nameEn: '4th Bhava — Sukha / Matru', nameTe: '4వ భావం — సుఖ / మాతృ స్థానం', karaka: 'Chandra', themeEn: 'Motherly warmth, emotional peace, home/property, vehicles, and inner contentment.', themeTe: 'మాతృ ఆశీర్వాదం, గృహ/భూమి/వాహన సుఖం మరియు మానసిక ప్రశాంతత.' },
      { bhava: 5, nameEn: '5th Bhava — Putra / Vidya', nameTe: '5వ భావం — పుత్ర / విద్యా స్థానం', karaka: 'Guru', themeEn: 'Intellect, wisdom, learning, creativity, children (Santana), and Purva Punya merit.', themeTe: 'విద్య, బుద్ధి కుశలత, సంతాన యోగం మరియు పూర్వజన్మ సుకృతం.' },
      { bhava: 6, nameEn: '6th Bhava — Ripu / Roga', nameTe: '6వ భావం — శత్రు / రోగ / రుణ స్థానం', karaka: 'Shani / Kuja', themeEn: 'Service discipline, overcoming competition/obstacles, daily routines, and health resilience.', themeTe: 'సేవా దృక్పథం, పోటీని జయించే శక్తి, ఆరోగ్య సంరక్షణ మరియు క్రమశిక్షణ.' },
      { bhava: 7, nameEn: '7th Bhava — Kalatra / Jaya', nameTe: '7వ భావం — కళత్ర / భాగస్వామ్య స్థానం', karaka: 'Shukra', themeEn: 'Marriage partnership, harmony in relationships, business alliances, and public dealings.', themeTe: 'వైవాహిక సౌఖ్యం, జీవిత భాగస్వామి సహకారం మరియు వ్యాపార భాగస్వామ్యాలు.' },
      { bhava: 8, nameEn: '8th Bhava — Ayush / Randhra', nameTe: '8వ భావం — ఆయుః / రంధ్ర స్థానం', karaka: 'Shani', themeEn: 'Longevity, deep research, hidden mysteries, sudden transformations, and inner resilience.', themeTe: 'దీర్ఘాయుష్షు, పరిశోధనాత్మక దృష్టి, ఆకస్మిక మార్పులు మరియు అంతర్గత బలం.' },
      { bhava: 9, nameEn: '9th Bhava — Bhagya / Pitru', nameTe: '9వ భావం — భాగ్య / పితృ / ధర్మ స్థానం', karaka: 'Guru / Ravi', themeEn: 'Fortune (Bhagyodaya), dharma, higher philosophy, gurus, father blessings, and long pilgrimages.', themeTe: 'అదృష్టం, ధర్మనిరతి, గురు కృప, పితృ ఆశీర్వాదం మరియు పుణ్యక్షేత్ర యాత్రలు.' },
      { bhava: 10, nameEn: '10th Bhava — Karma / Rajya', nameTe: '10వ భావం — కర్మ / రాజ్య / వృత్తి స్థానం', karaka: 'Ravi / Guru / Budha / Shani', themeEn: 'Profession, leadership, public standing, execution of duty, and career milestones.', themeTe: 'వృత్తి, ఉద్యోగ/వ్యాపార ఉన్నతి, కర్తవ్య నిర్వహణ మరియు సమాజంలో గౌరవం.' },
      { bhava: 11, nameEn: '11th Bhava — Labha / Aya', nameTe: '11వ భావం — లాభ / ఆదాయ స్థానం', karaka: 'Guru', themeEn: 'Income growth, gains from efforts, elder siblings, networks, and fulfillment of aspirations.', themeTe: 'ఆదాయ వృద్ధి, లాభాలు, మిత్ర/సమాజ సహకారం మరియు కోరికల సిద్ధి.' },
      { bhava: 12, nameEn: '12th Bhava — Vyaya / Moksha', nameTe: '12వ భావం — వ్యయ / మోక్ష స్థానం', karaka: 'Shani', themeEn: 'Charitable/purposeful expenditure, distant/foreign settings, quiet reflection, and spiritual detachment.', themeTe: 'శుభ వ్యయం, దూర ప్రదేశాలు, ధ్యానం మరియు ఆధ్యాత్మిక చింతన.' }
    ];

    function computeBirthChart(dobStr, tobStr, placeVal) {
      const [latStr, lonStr, placeName] = placeVal.split('|');
      const lat = parseFloat(latStr), lon = parseFloat(lonStr);
      const [y, m, d] = dobStr.split('-').map(Number);
      const [hh, mm] = tobStr.split(':').map(Number);
      const birthUTC = new Date(Date.UTC(y, m - 1, d, hh, mm, 0) - 5.5 * 3600000);
      const jd = getJulianDay(birthUTC);
      const ayan = getLahiriAyanamsha(jd);
      const p = getPanchangam(birthUTC, 'Asia/Kolkata');
      const ascSid = getSiderealAscendant(jd, lat, lon, ayan);
      const lagnaIdx = Math.floor(ascSid / 30.0);

      const T = (jd - 2451545.0) / 36525.0;
      const sunIdx = p.sunRashiIdx;
      const moonIdx = p.rashiIdx;
      const marsIdx = Math.floor((((355.43 + 19140.299 * T - ayan) % 360) + 360) % 360 / 30);
      const mercIdx = Math.floor((((p.sunSid + 14 * Math.sin(T * 150)) % 360) + 360) % 360 / 30);
      const jupIdx = Math.floor((((34.35 + 3034.906 * T - ayan) % 360) + 360) % 360 / 30);
      const venIdx = Math.floor((((p.sunSid + 28 * Math.cos(T * 95)) % 360) + 360) % 360 / 30);
      const satIdx = Math.floor((((50.07 + 1222.114 * T - ayan) % 360) + 360) % 360 / 30);
      const rahuIdx = Math.floor((((125.04 - 1934.136 * T - ayan) % 360) + 360) % 360 / 30);
      const ketuIdx = (rahuIdx + 6) % 12;

      const isTe = currentLang === 'te';
      const rArr = isTe ? RASHIS_TE : currentLang === 'hi' ? RASHIS_HI : RASHIS_EN;

      const houses = Array.from({ length: 12 }, () => []);
      houses[lagnaIdx].push(isTe ? 'లగ్నం' : 'Asc');
      houses[sunIdx].push(isTe ? 'రవి' : 'Su');
      houses[moonIdx].push(isTe ? 'చంద్ర' : 'Mo');
      houses[marsIdx].push(isTe ? 'కుజ' : 'Ma');
      houses[mercIdx].push(isTe ? 'బుధ' : 'Me');
      houses[jupIdx].push(isTe ? 'గురు' : 'Ju');
      houses[venIdx].push(isTe ? 'శుక్ర' : 'Ve');
      houses[satIdx].push(isTe ? 'శని' : 'Sa');
      houses[rahuIdx].push(isTe ? 'రాహు' : 'Ra');
      houses[ketuIdx].push(isTe ? 'కేతు' : 'Ke');

      // Vimshottari Dasha starting Lord from Nakshatra index (0..26 -> mod 9)
      const dashaStartIdx = p.nakIdx % 9;
      const padaNum = (Math.floor(((p.moonSid % 360) / (360 / 27)) * 4) % 4) + 1;
      const nakSpanDeg = 360 / 27;
      const posInNakDeg = ((p.moonSid % 360) % nakSpanDeg);
      const remFraction = Math.max(0.05, Math.min(1, 1 - (posInNakDeg / nakSpanDeg)));
      const firstDasha = VIMSHOTTARI_DASHA_ORDER[dashaStartIdx];
      const balanceYears = +(firstDasha.years * remFraction).toFixed(1);

      const dashaTimeline = [];
      let runningYear = y;
      for (let i = 0; i < 9; i++) {
        const dItem = VIMSHOTTARI_DASHA_ORDER[(dashaStartIdx + i) % 9];
        const spanYrs = i === 0 ? Math.max(0.5, balanceYears) : dItem.years;
        const endYear = Math.round(runningYear + spanYrs);
        dashaTimeline.push({
          lord: isTe ? dItem.lordTe : dItem.lordEn,
          years: spanYrs,
          period: `${runningYear} – ${endYear}`
        });
        runningYear = endYear;
      }

      const grahaList = [
        { name: isTe ? 'లగ్నం (Ascendant)' : 'Lagna (Ascendant)', rashi: rArr[lagnaIdx], bhava: 1, role: isTe ? 'ఆత్మ, దేహబలం' : 'Self & Vitality' },
        { name: isTe ? 'రవి (Sun)' : 'Ravi (Sun)', rashi: rArr[sunIdx], bhava: ((sunIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'ఆత్మ, తండ్రి, గౌరవం' : 'Soul, Authority & Father' },
        { name: isTe ? 'చంద్ర (Moon)' : 'Chandra (Moon)', rashi: rArr[moonIdx], bhava: ((moonIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'మనస్సు, మాతృత్వం' : 'Mind, Emotions & Mother' },
        { name: isTe ? 'కుజ (Mars)' : 'Kuja (Mars)', rashi: rArr[marsIdx], bhava: ((marsIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'ధైర్యం, సోదరులు, శక్తి' : 'Courage, Drive & Siblings' },
        { name: isTe ? 'బుధ (Mercury)' : 'Budha (Mercury)', rashi: rArr[mercIdx], bhava: ((mercIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'బుద్ధి, విద్య, వాణిజ్యం' : 'Intellect, Speech & Commerce' },
        { name: isTe ? 'గురు (Jupiter)' : 'Guru (Jupiter)', rashi: rArr[jupIdx], bhava: ((jupIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'జ్ఞానం, సంతానం, ధనం' : 'Wisdom, Dharma & Wealth' },
        { name: isTe ? 'శుక్ర (Venus)' : 'Shukra (Venus)', rashi: rArr[venIdx], bhava: ((venIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'కళలు, కళత్రం, సుఖం' : 'Harmony, Arts & Marriage' },
        { name: isTe ? 'శని (Saturn)' : 'Shani (Saturn)', rashi: rArr[satIdx], bhava: ((satIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'కర్మ, క్రమశిక్షణ, దీర్ఘాయువు' : 'Karma, Discipline & Longevity' },
        { name: isTe ? 'రాహు / కేతు' : 'Rahu / Ketu', rashi: `${rArr[rahuIdx].split(' ')[0]} / ${rArr[ketuIdx].split(' ')[0]}`, bhava: ((rahuIdx - lagnaIdx + 12) % 12) + 1, role: isTe ? 'ఛాయా గ్రహాలు, ఆధ్యాత్మికత' : 'Shadow Nodes & Moksha' }
      ];

      const bhavaHighlights = BHAVA_MEANINGS.map(bm => {
        const signIdx = (lagnaIdx + bm.bhava - 1) % 12;
        const occupants = houses[signIdx].filter(x => x !== (isTe ? 'లగ్నం' : 'Asc'));
        return {
          bhava: bm.bhava,
          title: isTe ? bm.nameTe : bm.nameEn,
          sign: rArr[signIdx],
          occupants,
          desc: isTe ? bm.themeTe : bm.themeEn
        };
      });

      const moonPersonality = RASHI_PERSONALITY[p.rashiIdx] || RASHI_PERSONALITY[0];
      const lagnaPersonality = RASHI_PERSONALITY[lagnaIdx] || RASHI_PERSONALITY[0];

      return {
        placeName, rashi: p.rashi, rashiIdx: p.rashiIdx, rashiLord: p.rashiLord,
        sunRashi: p.sunRashi, nakIdx: p.nakIdx, nakshatra: p.nakshatra, padaNum,
        tithi: p.tithi, paksha: p.paksha, yoga: p.yoga, karana: p.karana,
        lagna: rArr[lagnaIdx], lagnaIdx, lagnaDeg: (ascSid % 30).toFixed(1),
        moonDeg: (p.moonSid % 30).toFixed(1),
        gana: (isTe ? GANAS_TE : GANAS_EN)[NAK_GANA[p.nakIdx]],
        nadi: (isTe ? NADIS_TE : NADIS_EN)[NAK_NADI[p.nakIdx]],
        yoni: (isTe ? YONIS_TE : YONIS_EN)[NAK_YONI[p.nakIdx]],
        houses,
        grahaList,
        bhavaHighlights,
        dashaTimeline,
        balanceYears,
        firstDashaName: isTe ? firstDasha.lordTe : firstDasha.lordEn,
        personality: {
          element: moonPersonality.element,
          natureEn: `${moonPersonality.natureEn} With ${rArr[lagnaIdx]} Lagna, outward demeanor blends ${lagnaPersonality.natureEn.toLowerCase()}`,
          natureTe: `${moonPersonality.natureTe} అలాగే ${rArr[lagnaIdx]} లగ్న ప్రభావం వల్ల బాహ్య వ్యవహారంలో ${lagnaPersonality.natureTe}`,
          strengthsEn: `${moonPersonality.strengthsEn} • Lagna Focus: ${lagnaPersonality.strengthsEn}`,
          strengthsTe: `ప్రధాన బలాలు: ${moonPersonality.strengthsTe} • లగ్న బలం: ${lagnaPersonality.strengthsTe}`,
          luckyEn: moonPersonality.luckyEn,
          luckyTe: moonPersonality.luckyTe
        }
      };
    }


    function buildSouthIndianChartHtml(chart) {
      // Standard South Indian 4x4 grid mapping:
      // [11 Meena] [0 Mesha] [1 Vrishabha] [2 Mithuna]
      // [10 Kumbha] [   CENTER BOX   ] [3 Karkataka]
      // [9 Makara]  [   KUNDALI      ] [4 Simha]
      // [8 Dhanus]  [7 Vrischika] [6 Tula] [5 Kanya]
      const shortSign = ['Mesha','Vrish','Mithu','Karka','Simha','Kanya','Tula','Vrisch','Dhanu','Makar','Kumbh','Meena'];
      const cell = (idx) => {
        const isLagna = idx === chart.lagnaIdx;
        const isMoon = idx === chart.rashiIdx;
        const items = chart.houses[idx].map(g => {
          const cls = (g === 'Asc' || g === 'లగ్నం') ? 'text-rose-300 font-bold' : (g === 'Mo' || g === 'చంద్ర') ? 'text-amber-300 font-bold' : 'text-sky-200';
          return `<span class="${cls}">${g}</span>`;
        }).join(' ');
        return `
          <div class="p-1.5 min-h-[62px] border border-amber-400/30 ${isLagna ? 'bg-rose-500/10' : isMoon ? 'bg-amber-500/10' : 'bg-slate-950/80'} flex flex-col justify-between">
            <div class="flex justify-between items-center text-[9px] text-slate-400 font-mono">
              <span>${shortSign[idx]}</span>
              ${isLagna ? '<span class="text-rose-400 font-bold">L</span>' : ''}
            </div>
            <div class="text-[11px] leading-tight flex flex-wrap gap-1 mt-1">${items || '<span class="text-slate-600">—</span>'}</div>
          </div>
        `;
      };

      return `
        <div class="grid grid-cols-4 border border-amber-400/40 rounded-xl overflow-hidden">
          ${cell(11)}${cell(0)}${cell(1)}${cell(2)}
          ${cell(10)}
          <div class="col-span-2 row-span-2 border border-amber-400/30 bg-amber-950/20 flex flex-col items-center justify-center p-2 text-center">
            <span class="text-[10px] uppercase tracking-wider text-amber-400 font-bold">RASHI KUNDALI</span>
            <span class="text-xs font-bold text-white mt-0.5">${chart.lagna.split(' ')[0]} Lagna</span>
            <span class="text-[11px] text-amber-200">${chart.rashi.split(' ')[0]} Rashi</span>
            <span class="text-[10px] text-slate-400 font-mono mt-0.5">Lahiri Ayanamsha</span>
          </div>
          ${cell(3)}
          ${cell(9)}${cell(4)}
          ${cell(8)}${cell(7)}${cell(6)}${cell(5)}
        </div>
      `;
    }

    
    window.renderJathakam = () => {
      const name = (document.getElementById('jyName')?.value || '').trim() || 'Native';
      const dob = document.getElementById('jyDob')?.value || '1995-10-15';
      const tob = document.getElementById('jyTob')?.value || '08:30';
      const place = document.getElementById('jyPlace')?.value || '17.3850|78.4867|Hyderabad / Secunderabad';
      const chart = computeBirthChart(dob, tob, place);

      const userNak = document.getElementById('userNakshatra');
      if (userNak && userNak.options.length) userNak.value = chart.nakIdx;
      const rSel = document.getElementById('rashiPhalaluSelect');
      if (rSel && rSel.options.length) { rSel.value = chart.rashiIdx; renderRashiPhalalu(); }

      const isTe = currentLang === 'te';
      const natTxt = isTe ? chart.personality.natureTe : chart.personality.natureEn;
      const strTxt = isTe ? chart.personality.strengthsTe : chart.personality.strengthsEn;
      const lckTxt = isTe ? chart.personality.luckyTe : chart.personality.luckyEn;

      const grahaRowsHtml = chart.grahaList.map(g => `
        <tr class="border-b border-white/10 last:border-b-0">
          <td class="py-1.5 pr-2 font-semibold text-amber-200">${g.name}</td>
          <td class="py-1.5 px-2 text-white">${g.rashi}</td>
          <td class="py-1.5 px-2 font-mono text-sky-300 text-center">H${g.bhava}</td>
          <td class="py-1.5 pl-2 text-slate-300 text-[11px]">${g.role}</td>
        </tr>
      `).join('');

      const dashaItemsHtml = chart.dashaTimeline.map((dItem, i) => `
        <div class="flex items-center justify-between py-1.5 px-2.5 rounded-xl ${i === 0 ? 'bg-amber-500/15 border border-amber-400/35' : 'bg-white/5'}">
          <div>
            <span class="font-bold ${i === 0 ? 'text-amber-300' : 'text-white'}">${dItem.lord}</span>
            <span class="text-[10px] text-slate-400 ml-1.5">(${dItem.years} ${isTe ? 'సం||లు' : 'yrs'})</span>
          </div>
          <span class="text-[11px] font-mono text-sky-300">${dItem.period}</span>
        </div>
      `).join('');

      const bhavaCardsHtml = chart.bhavaHighlights.map(bh => `
        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-amber-200 text-[11px]">${bh.title}</span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-200">${bh.sign.split(' ')[0]}</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-snug">${bh.desc}</p>
          ${bh.occupants.length ? `<div class="text-[10px] text-emerald-300 font-semibold">${isTe ? 'గ్రహ స్థితి' : 'Occupants'}: ${bh.occupants.join(', ')}</div>` : ''}
        </div>
      `).join('');

      document.getElementById('jathakamOutput').innerHTML = `
        <div class="glass gold-border rounded-2xl p-4 space-y-3.5 text-xs">
          <div class="border-b border-white/10 pb-2.5">
            <span class="text-[10px] uppercase text-emerald-300 font-bold">● BRIHAT PARASHARA HORA SHASTRA • FULL JANMA KUNDALI</span>
            <h3 class="text-base font-bold text-white mt-0.5">${name} — ${chart.placeName}</h3>
            <p class="text-[11px] text-slate-400 font-mono">DOB: ${dob} • TOB: ${tob} IST • ${isTe ? 'పాదం' : 'Pada'} ${chart.padaNum}</p>
          </div>

          ${buildSouthIndianChartHtml(chart)}

          <div class="grid grid-cols-2 gap-2">
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'జన్మ రాశి (Moon Sign)' : 'Janma Rashi (Moon Sign)'}</div>
              <div class="font-bold text-amber-300 mt-0.5">${chart.rashi} (${chart.moonDeg}°)</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'జన్మ లగ్నం (Ascendant)' : 'Janma Lagna (Ascendant)'}</div>
              <div class="font-bold text-sky-300 mt-0.5">${chart.lagna} (${chart.lagnaDeg}°)</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 col-span-2">
              <div class="text-[10px] text-slate-400">${isTe ? 'జన్మ నక్షత్రం & పాదం' : 'Janma Nakshatra & Pada'}</div>
              <div class="font-bold text-amber-200 mt-0.5">${chart.nakshatra} • ${isTe ? 'పాదం' : 'Pada'} ${chart.padaNum}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'సూర్య రాశి (Sun Sign)' : 'Surya Rashi (Sun Sign)'}</div>
              <div class="text-white font-semibold mt-0.5">${chart.sunRashi}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'రాశ్యాధిపతి' : 'Rashi Lord'}</div>
              <div class="text-white font-semibold mt-0.5">${chart.rashiLord}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'గణం & నాడి' : 'Gana & Nadi'}</div>
              <div class="text-white mt-0.5">${chart.gana} • ${chart.nadi}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">${isTe ? 'యోని & తిథి' : 'Yoni & Birth Tithi'}</div>
              <div class="text-white mt-0.5">${chart.yoni} • ${chart.tithi}</div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-950/30 border border-amber-400/30 space-y-2">
            <div class="text-xs font-bold text-amber-300">🌟 ${isTe ? 'వ్యక్తిత్వం, స్వభావం & జీవిత లక్షణాలు (పరాశర సిద్ధాంతం)' : 'Detailed Personality, Nature & Life Traits'}</div>
            <div class="text-[11px] text-sky-300 font-semibold">${isTe ? 'పంచభూత తత్వం' : 'Element & Quality'}: ${chart.personality.element}</div>
            <p class="text-xs text-slate-100 leading-relaxed">${natTxt}</p>
            <div class="text-[11px] text-emerald-300 pt-1 leading-relaxed">${strTxt}</div>
            <div class="text-[11px] text-amber-200 leading-relaxed">${lckTxt}</div>
          </div>

          <!-- NAVAGRAHA BHAVA TABLE -->
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div class="text-xs font-bold text-sky-300">🪐 ${isTe ? 'నవగ్రహ స్థితి & భావ ఫలిత సూచిక' : 'Navagraha Sthiti & House (Bhava) Mapping'}</div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr class="border-b border-white/15 text-slate-400 text-[10px]">
                    <th class="py-1 pr-2">${isTe ? 'గ్రహం' : 'Graha'}</th>
                    <th class="py-1 px-2">${isTe ? 'రాశి' : 'Rashi'}</th>
                    <th class="py-1 px-2 text-center">${isTe ? 'భావం' : 'Bhava'}</th>
                    <th class="py-1 pl-2">${isTe ? 'కారకత్వం' : 'Signification'}</th>
                  </tr>
                </thead>
                <tbody>${grahaRowsHtml}</tbody>
              </table>
            </div>
          </div>

          <!-- VIMSHOTTARI DASHA TIMELINE -->
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-amber-300">⏳ ${isTe ? 'వింశోత్తరి మహాదశ క్రమం' : 'Vimshottari Mahadasha Timeline'}</span>
              <span class="text-[10px] font-mono text-emerald-300">${isTe ? 'జన్మ దశ శేషం' : 'Birth Balance'}: ${chart.balanceYears}y (${chart.firstDashaName})</span>
            </div>
            <div class="space-y-1.5">${dashaItemsHtml}</div>
          </div>

          <!-- 12 BHAVAS BREAKDOWN -->
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div class="text-xs font-bold text-indigo-300">🏛️ ${isTe ? 'ద్వాదశ భావ విశ్లేషణ (12 Houses of Life)' : '12 Bhava (House) Life Analysis'}</div>
            <div class="grid grid-cols-1 gap-2">${bhavaCardsHtml}</div>
          </div>
        </div>
      `;
    };


    // 6. Rashi Phalalu & Vivaha Pontana
    let activeRashiPeriod = 'daily';
    window.setRashiPeriod = (period) => {
      activeRashiPeriod = period;
      document.querySelectorAll('.rperiod-btn').forEach(btn => {
        const active = btn.dataset.rperiod === period;
        btn.className = `rperiod-btn py-1.5 rounded-lg ${active ? 'bg-amber-500 text-slate-950' : 'text-slate-300'}`;
      });
      renderRashiPhalalu();
    };

    
    window.renderRashiPhalalu = () => {
      const box = document.getElementById('rashiPhalaluContent');
      const sel = document.getElementById('rashiPhalaluSelect');
      if (!box || !sel) return;
      const prevIdx = sel.selectedIndex >= 0 ? sel.selectedIndex : 2;
      sel.innerHTML = RASHI_PHALALU.map((rp, idx) => {
        const label = currentLang === 'te' ? rp.rashiTe : currentLang === 'hi' ? rp.rashiHi : rp.rashiEn;
        return `<option value="${idx}">${label}</option>`;
      }).join('');
      sel.selectedIndex = prevIdx;

      const rp = RASHI_PHALALU[prevIdx] || RASHI_PHALALU[0];
      const langKey = ['en', 'te', 'hi'].includes(currentLang) ? currentLang : 'en';
      const baseText = rp[activeRashiPeriod][langKey] || rp[activeRashiPeriod].en;
      const rashiTitle = langKey === 'te' ? rp.rashiTe : (langKey === 'hi' ? rp.rashiHi : rp.rashiEn);
      const pers = RASHI_PERSONALITY[prevIdx] || RASHI_PERSONALITY[0];

      const careerNote = langKey === 'te'
        ? `వృత్తి & ఉద్యోగం: ${rp.lord} ఆధిపత్యం వల్ల బాధ్యతాయుత నిర్ణయాలు, క్రమశిక్షణతో పనిచేస్తే వృత్తిలో స్థిరత్వం లభిస్తుంది.`
        : langKey === 'hi'
        ? `करियर व कार्यक्षेत्र: ${rp.lord} के प्रभाव से योजनाबद्ध प्रयासों और अनुशासन से कार्य में स्थिरता व प्रगति मिलेगी।`
        : `Career & Work: Guided by ${rp.lord}, structured execution and timely follow-ups support steady professional progress.`;

      const financeNote = langKey === 'te'
        ? `ఆర్థికం & కుటుంబం: ఆదాయ వ్యయాలను సమతుల్యం చేసుకుంటూ పెద్దల సలహాతో ముందుకు సాగడం మంచిది.`
        : langKey === 'hi'
        ? `आर्थिक व परिवार: आय-व्यय में संतुलन रखें और बड़ों की सलाह से महत्वपूर्ण निर्णय लें।`
        : `Finance & Family: Balance cash flow carefully, avoid speculative haste, and value elder counsel at home.`;

      const healthRemedy = langKey === 'te'
        ? `ఆరోగ్యం & పరిహారం: ${pers.luckyTe}`
        : langKey === 'hi'
        ? `स्वास्थ्य व उपाय: ${pers.luckyEn}`
        : `Health & Remedy: ${pers.luckyEn}`;

      box.innerHTML = `
        <div class="p-3.5 rounded-2xl bg-white/5 border border-amber-400/25 space-y-2.5">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm font-bold text-amber-300">${rashiTitle}</div>
              <div class="text-[10px] text-slate-400">${langKey === 'te' ? 'రాశ్యాధిపతి' : 'Rashi Lord'}: <strong class="text-slate-200">${rp.lord}</strong></div>
            </div>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 uppercase font-bold">${activeRashiPeriod}</span>
          </div>
          <p class="text-xs text-slate-100 leading-relaxed">${baseText}</p>
          <div class="grid grid-cols-1 gap-1.5 pt-1 border-t border-white/10 text-[11px]">
            <div class="p-2 rounded-xl bg-white/5 text-sky-200 leading-snug">${careerNote}</div>
            <div class="p-2 rounded-xl bg-white/5 text-emerald-200 leading-snug">${financeNote}</div>
            <div class="p-2 rounded-xl bg-amber-500/10 text-amber-200 leading-snug">${healthRemedy}</div>
          </div>
          ${buildGocharaTransitHtml(prevIdx)}
        </div>
      `;
    };


    window.renderCompatibility = () => {
      const c1 = computeBirthChart(document.getElementById('jyDob').value, document.getElementById('jyTob').value || '08:30', document.getElementById('jyPlace').value);
      const c2 = computeBirthChart(document.getElementById('partnerDob').value, '08:30', document.getElementById('jyPlace').value);
      const gunas = Math.min(36, (c1.nadi !== c2.nadi ? 8 : 0) + (c1.gana === c2.gana ? 6 : 4) + ([1,5,7,11].includes((c2.rashiIdx - c1.rashiIdx + 12) % 12) ? 0 : 7) + 12.5);
      document.getElementById('matchResultBox').innerHTML = `
        <div class="p-3 rounded-xl bg-white/5 border border-emerald-400/30 space-y-1">
          <div class="font-bold text-emerald-300">Ashtakoota Score: ${gunas} / 36 Gunas (${gunas >= 18 ? 'Compatible Match' : 'Consult Siddhanti'})</div>
          <div class="text-[11px] text-slate-300">Native: ${c1.rashi} (${c1.nakshatra.split('(')[0].trim()}) • Partner: ${c2.rashi} (${c2.nakshatra.split('(')[0].trim()})</div>
        </div>
      `;
    };

    // 7. Temples + Live GPS + Custom City Geocoding (Nominatim OpenStreetMap) + Sightseeing
    let userOrigin = { lat: 17.4344, lon: 78.5013, name: 'Secunderabad / Hyderabad', cityCode: 'HYD' };
    let activeTier = 'ALL';

    function haversineKm(lat1, lon1, lat2, lon2) {
      const R = 6371, dLat = (lat2 - lat1) * Math.PI / 180, dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
      return Math.max(1, Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 1.22));
    }

    function detectNearestHubCode(lat, lon) {
      const hubs = [
        { code: 'HYD', lat: 17.4344, lon: 78.5013 },
        { code: 'BZA', lat: 16.5062, lon: 80.6480 },
        { code: 'VSKP', lat: 17.6868, lon: 83.2185 },
        { code: 'TPTY', lat: 13.6288, lon: 79.4192 },
        { code: 'SBC', lat: 12.9716, lon: 77.5946 }
      ];
      let best = hubs[0], minD = 99999;
      for (const h of hubs) {
        const d = haversineKm(lat, lon, h.lat, h.lon);
        if (d < minD) { minD = d; best = h; }
      }
      return best.code;
    }

    function syncOriginLabels() {
      const o1 = document.getElementById('originLabel');
      const o2 = document.getElementById('sightseeingOriginLabel');
      if (o1) o1.textContent = userOrigin.name;
      if (o2) o2.textContent = userOrigin.name;
      fetchOriginLiveTemp();
      renderTemples();
      renderLocalSightseeing();
    }

    window.changeUserOriginPreset = (val) => {
      if (!val) return;
      const [latS, lonS, name, code] = val.split('|');
      userOrigin = { lat: parseFloat(latS), lon: parseFloat(lonS), name, cityCode: code };
      ['userLocationPreset', 'sightseeingLocationPreset'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value !== val) el.value = val;
      });
      const msg = document.getElementById('gpsStatusMsg');
      if (msg) msg.textContent = '';
      syncOriginLabels();
    };

    async function geocodeAndSetCity(cityQuery) {
      const q = (cityQuery || '').trim();
      if (!q) return;
      const msg = document.getElementById('gpsStatusMsg');
      if (msg) msg.textContent = `Searching "${q}"...`;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q + ', India')}`);
        const data = await res.json();
        if (data && data.length) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          const disp = data[0].display_name.split(',')[0];
          userOrigin = { lat, lon, name: disp, cityCode: detectNearestHubCode(lat, lon) };
          if (msg) msg.textContent = `✓ Origin updated to ${disp} (${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E)`;
          syncOriginLabels();
          return;
        }
      } catch (e) {}
      if (msg) msg.textContent = `Could not resolve "${q}". Check internet or pick from dropdown.`;
    }

    window.setCustomOriginCity = () => geocodeAndSetCity(document.getElementById('customOriginInput')?.value);
    window.setCustomSightseeingCity = () => geocodeAndSetCity(document.getElementById('customSightseeingInput')?.value);

    window.triggerGps = () => {
      const msg = document.getElementById('gpsStatusMsg');
      if (!navigator.geolocation) {
        if (msg) msg.textContent = 'Geolocation not supported in this browser.';
        return;
      }
      if (msg) msg.textContent = '🛰️ Acquiring live GPS coordinates...';
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          let label = `Live GPS (${lat.toFixed(3)}°N, ${lon.toFixed(3)}°E)`;
          try {
            const rev = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const rData = await rev.json();
            const area = rData?.address?.suburb || rData?.address?.city || rData?.address?.town || rData?.address?.state_district;
            if (area) label = `${area} (GPS)`;
          } catch (e) {}
          userOrigin = { lat, lon, name: label, cityCode: detectNearestHubCode(lat, lon) };
          if (msg) msg.textContent = `✓ GPS locked: ${label}`;
          syncOriginLabels();
        },
        (err) => {
          if (msg) msg.textContent = '⚠️ Location permission blocked or opened via content:// URI. Enable Location or type any city name.';
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    };

    window.setTierFilter = (tier) => {
      activeTier = tier;
      document.querySelectorAll('.tier-chip').forEach(c => {
        const active = c.dataset.tier === tier;
        c.className = `tier-chip px-2.5 py-1 rounded-full text-[11px] shrink-0 ${active ? 'bg-amber-500 text-slate-950 font-semibold' : 'bg-white/10 text-slate-200'}`;
      });
      renderTemples();
    };

    function getTrainsForTemple(t, terminalFilter) {
      const list = CORRIDOR_TRAINS[t.corridor] || CORRIDOR_TRAINS["BZA"];
      if (terminalFilter === 'ALL') return list;
      return list.filter(tr => tr.origin.includes(terminalFilter));
    }

    const STATE_I18N = {
      'Telangana': { te: 'తెలంగాణ', hi: 'तेलंगाना' },
      'Andhra Pradesh': { te: 'ఆంధ్రప్రదేశ్', hi: 'आंध्र प्रदेश' },
      'Tamil Nadu': { te: 'తమిళనాడు', hi: 'तमिलनाडु' },
      'Kerala': { te: 'కేరళ', hi: 'केरल' },
      'Karnataka': { te: 'కర్ణాటక', hi: 'कर्नाटक' },
      'Maharashtra': { te: 'మహారాష్ట్ర', hi: 'महाराष्ट्र' },
      'Odisha': { te: 'ఒడిశా', hi: 'ओडिशा' },
      'Uttar Pradesh': { te: 'ఉత్తరప్రదేశ్', hi: 'उत्तर प्रदेश' },
      'Uttarakhand': { te: 'ఉత్తరాఖండ్', hi: 'उत्तराखंड' },
      'Gujarat': { te: 'గుజరాత్', hi: 'गुजरात' },
      'Rajasthan': { te: 'రాజస్థాన్', hi: 'राजस्थान' },
      'Madhya Pradesh': { te: 'మధ్యప్రదేశ్', hi: 'मध्य प्रदेश' },
      'West Bengal': { te: 'పశ్చిమ బెంగాల్', hi: 'पश्चिम बंगाल' }
    };

    const DISTRICT_I18N = {
      'Hyderabad': { te: 'హైదరాబాద్', hi: 'हैदराबाद' },
      'Medchal-Malkajgiri': { te: 'మేడ్చల్-మల్కాజిగిరి', hi: 'मेड़चल-मल्काजगिरि' },
      'Rangareddy': { te: 'రంగారెడ్డి', hi: 'रंगारेड्डी' },
      'Tirupati': { te: 'తిరుపతి', hi: 'तिरुपति' },
      'Nandyal': { te: 'నంద్యాల', hi: 'नंद्याल' },
      'Vijayawada': { te: 'విజయవాడ', hi: 'विजयवाड़ा' },
      'Visakhapatnam': { te: 'విశాఖపట్నం', hi: 'विशाखापत्तनम' },
      'Kakinada': { te: 'కాకినాడ', hi: 'काकीनाडा' },
      'Guntur': { te: 'గుంటూరు', hi: 'गुंटूर' },
      'Nellore': { te: 'నెల్లూరు', hi: 'नेल्लोर' },
      'Warangal': { te: 'వరంగల్', hi: 'वारंगल' },
      'Hanamkonda': { te: 'హన్మకొండ', hi: 'हनमकोंडा' },
      'Bengaluru': { te: 'బెంగళూరు', hi: 'बेंगलुरु' },
      'Chennai': { te: 'చెన్నై', hi: 'चेन्नई' },
      'Madurai': { te: 'మదురై', hi: 'मदुरै' },
      'Mysuru': { te: 'మైసూరు', hi: 'मैसूरु' }
    };

    function localizeGeoLabel(val, dict) {
      if (!val) return '';
      if (currentLang === 'en') return val;
      if (dict && dict[val] && dict[val][currentLang]) return dict[val][currentLang];
      return localizePlaceName(val);
    }

    function getLocalizedTemple(t) {
      const stLoc = localizeGeoLabel(t.state, STATE_I18N);
      const distLoc = localizeGeoLabel(t.district, DISTRICT_I18N);
      const mandLoc = localizePlaceName(t.mandal || '');
      const divLoc = localizePlaceName(t.division || '');
      const locLine = [divLoc, mandLoc ? (currentLang === 'te' ? mandLoc + ' మండలం' : currentLang === 'hi' ? mandLoc + ' मंडल' : mandLoc) : '', `${distLoc}, ${stLoc}`].filter(Boolean).join(' • ');

      if (currentLang === 'te') {
        const cleanTeName = pureScriptText(t.teluguName || t.name, '', '');
        return {
          displayName: cleanTeName || t.teluguName || t.name,
          subName: '',
          stateBadge: stLoc,
          locLine,
          bestTime: 'అక్టోబర్ నుండి మార్చి వరకు (దర్శనానికి అత్యంత అనుకూలం)',
          historyShort: `స్థల పురాణం & విశేషాలు: ${stLoc} రాష్ట్రంలోని ${distLoc} జిల్లాలో కొలువైన పవిత్ర ఆలయం. ఆగమ సంప్రదాయాల ప్రకారం నిత్య పూజలు, ఉత్సవాలు జరుగుతాయి.`,
          historyParagraphs: [
            `స్థల పురాణం & ఆవిర్భావం: ${stLoc} రాష్ట్రంలోని ${distLoc} జిల్లాలో కొలువైన పవిత్ర క్షేత్రం ఇది. పురాణ గాథలు మరియు ఆగమ సంప్రదాయాల ప్రకారం భక్తులకు అనుగ్రహం ప్రసాదిస్తోంది.`,
            `చారిత్రక నేపథ్యం & శిల్పకళ: ప్రాచీన రాజవంశాలు మరియు భక్తుల పోషణతో ఆలయ మండపాలు, గోపురాలు, పుష్కరిణులు నిర్మితమై భారతీయ సంప్రదాయ వాస్తుశిల్పానికి నిదర్శనంగా నిలిచాయి.`,
            `నిత్య పూజలు & ఉత్సవాలు: ప్రతిరోజూ సుప్రభాతం, అభిషేకం, అర్చన, నైవేద్య సేవలు జరుగుతాయి.`
          ]
        };
      }
      if (currentLang === 'hi') {
        const cleanHiName = pureScriptText(t.teluguName || t.name, '', '');
        return {
          displayName: cleanHiName || t.name,
          subName: '',
          stateBadge: stLoc,
          locLine,
          bestTime: 'अक्टूबर से मार्च तक (दर्शन के लिए उत्तम समय)',
          historyShort: `स्थल पुराण एवं विशेषताएं: ${stLoc} राज्य के ${distLoc} जिले में स्थित पावन मंदिर। आगम परंपरा के अनुसार नित्य पूजा व उत्सव संपन्न होते हैं।`,
          historyParagraphs: [
            `स्थल पुराण एवं महत्व: ${stLoc} राज्य के ${distLoc} जिले में स्थित यह पवित्र तीर्थस्थल श्रद्धालुओं को आशीर्वाद प्रदान करता है।`,
            `स्थापत्य एवं इतिहास: प्राचीन राजवंशों व भक्तों द्वारा निर्मित मंडप, गोपुरम व कुंड भारतीय मंदिर स्थापत्य की समृद्ध परंपरा को दर्शाते हैं।`,
            `नित्य सेवाएं: प्रतिदिन सुप्रभात, अभिषेक, अर्चना व नैवेद्य सेवाएं की जाती हैं।`
          ]
        };
      }
      return {
        displayName: t.name,
        subName: t.teluguName || '',
        stateBadge: t.state,
        locLine: `${t.division ? t.division + " • " : ""}${t.mandal ? t.mandal + " Mandal • " : ""}${t.district}, ${t.state}`,
        bestTime: t.bestTimeToVisit || 'October to March',
        historyShort: t.historyParagraphs ? t.historyParagraphs[0] : t.history,
        historyParagraphs: t.historyParagraphs || [t.history]
      };
    }


    function getLocalCityTransportInfo(t, distKm) {
      const cityLabel = localizePlaceName(userOrigin.name.split('/')[0].trim());
      const distLoc = localizeGeoLabel(t.district, DISTRICT_I18N);
      if (currentLang === 'te') {
        return {
          metro: `${cityLabel} మెట్రో / సమీప స్టేషన్ + ఫీడర్ ఆటో (${distKm} కి.మీ దూరం)`,
          mmts: `${cityLabel} సబర్బన్ రైలు & రింగ్ రోడ్ కనెక్టివిటీ`,
          cityBus: `${cityLabel} సిటీ బస్సులు నేరుగా ${distLoc} ఆలయ మార్గంలో లభిస్తాయి`,
          autoCab: `ఆటో, క్యాబ్, బైక్ టాక్సీ (~${distKm} కి.మీ, 15–40 నిమిషాల ప్రయాణం)`
        };
      }
      if (currentLang === 'hi') {
        return {
          metro: `${cityLabel} मेट्रो / निकटतम स्टेशन + फीडर ऑटो (${distKm} किमी दूर)`,
          mmts: `${cityLabel} उपनगरीय रेल व रिंग रोड संपर्क`,
          cityBus: `${cityLabel} सिटी बसें ${distLoc} मंदिर मार्ग पर उपलब्ध`,
          autoCab: `ऑटो, कैब व बाइक टैक्सी (~${distKm} किमी, 15–40 मिनट)`
        };
      }
      if (t.cityTransit) return t.cityTransit;
      return {
        metro: `${cityLabel} Metro / Rapid Transit nearest station + feeder auto (${distKm} km from your location)`,
        mmts: `${cityLabel} Suburban / Local Rail & Ring Road connectivity`,
        cityBus: `${cityLabel} Municipal / City Express Bus routes directly to ${t.district} temple stop`,
        autoCab: `Local Auto-rickshaw, Ola, Uber & Rapido Bike-Taxi (~${distKm} km, 15–40 mins drive)`
      };
    }


    // =========================================================================
    // LIVE TEMPERATURE ENGINE (TEMPLES, SELECTED LOCATIONS & SIGHTSEEING)
    // =========================================================================
    const liveTempCache = {};
    const originLiveTemp = { temp: null, label: '--°C', live: false };

    function getWeatherBadgeInfo(code) {
      if (code === 0) return { icon: '☀️', text: 'Clear' };
      if ([1, 2].includes(code)) return { icon: '⛅', text: 'Partly Cloudy' };
      if (code === 3) return { icon: '☁️', text: 'Cloudy' };
      if ([45, 48].includes(code)) return { icon: '🌫️', text: 'Mist' };
      if ([51, 53, 55, 61, 63, 80].includes(code)) return { icon: '🌦️', text: 'Light Rain' };
      if ([65, 81, 82, 95, 96, 99].includes(code)) return { icon: '⛈️', text: 'Rain/Storm' };
      return { icon: '🌡️', text: 'Live' };
    }

    function getCoordTempKey(lat, lon) {
      return `${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`;
    }

    function getFallbackTemp(lat, monthIdx) {
      return getDiurnalFallbackTemp(lat, 78.5, 'Asia/Kolkata');
    }

    async function fetchBatchOpenMeteo(points) {
      if (!points || !points.length) return;
      const chunkSize = 30;
      for (let i = 0; i < points.length; i += chunkSize) {
        const chunk = points.slice(i, i + chunkSize);
        try {
          const lats = chunk.map(p => Number(p.lat).toFixed(4)).join(',');
          const lons = chunk.map(p => Number(p.lon).toFixed(4)).join(',');
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,weather_code&timezone=auto`;
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();
          const arr = Array.isArray(data) ? data : [data];
          chunk.forEach((pt, idx) => {
            const cur = arr[idx]?.current;
            if (cur && typeof cur.temperature_2m === 'number') {
              const tVal = Math.round(cur.temperature_2m * 10) / 10;
              const wInfo = getWeatherBadgeInfo(cur.weather_code);
              liveTempCache[pt.key] = {
                temp: tVal,
                icon: wInfo.icon,
                cond: wInfo.text,
                live: true
              };
            }
          });
        } catch (e) {}
      }
      refreshAllLiveTempBadges();
    }

    function formatCoordTempBadge(lat, lon) {
      const key = getCoordTempKey(lat, lon);
      const cached = liveTempCache[key];
      if (cached && cached.live) {
        return `${cached.icon} ${cached.temp}°C Live`;
      }
      return `🌡️ ~${getFallbackTemp(lat, new Date().getMonth())}°C`;
    }

    async function fetchOriginLiveTemp() {
      const key = getCoordTempKey(userOrigin.lat, userOrigin.lon);
      await fetchBatchOpenMeteo([{ lat: userOrigin.lat, lon: userOrigin.lon, key }]);
      const cached = liveTempCache[key];
      if (cached && cached.live) {
        originLiveTemp.temp = cached.temp;
        originLiveTemp.live = true;
        originLiveTemp.label = `${cached.icon} ${cached.temp}°C Live (${cached.cond})`;
      } else {
        originLiveTemp.live = false;
        originLiveTemp.label = `🌡️ ~${getFallbackTemp(userOrigin.lat, new Date().getMonth())}°C`;
      }
      refreshAllLiveTempBadges();
    }

    function refreshAllLiveTempBadges() {
      document.querySelectorAll('[data-live-temp-key]').forEach(el => {
        const k = el.getAttribute('data-live-temp-key');
        const lat = parseFloat(el.getAttribute('data-lat') || '17.43');
        const lon = parseFloat(el.getAttribute('data-lon') || '78.50');
        const cached = liveTempCache[k];
        if (cached && cached.live) {
          el.textContent = `${cached.icon} ${cached.temp}°C Live`;
        } else {
          el.textContent = `🌡️ ~${getFallbackTemp(lat, new Date().getMonth())}°C`;
        }
      });
      document.querySelectorAll('.origin-live-temp-badge').forEach(el => {
        const key = getCoordTempKey(userOrigin.lat, userOrigin.lon);
        const cached = liveTempCache[key];
        el.textContent = (cached && cached.live)
          ? `${cached.icon} ${cached.temp}°C Live (${cached.cond})`
          : `🌡️ ~${getFallbackTemp(userOrigin.lat, new Date().getMonth())}°C`;
      });
    }

    function fetchTempsForVisibleTemples(templesList) {
      const pts = templesList.map(t => ({
        lat: t.lat,
        lon: t.lon,
        key: getCoordTempKey(t.lat, t.lon)
      }));
      const uniquePts = [];
      const seen = new Set();
      for (const p of pts) {
        if (!seen.has(p.key)) {
          seen.add(p.key);
          uniquePts.push(p);
        }
      }
      fetchBatchOpenMeteo(uniquePts);
    }

    function getSightseeingPlaceCoords(placeIdx) {
      // Slight deterministic coordinate offset around userOrigin so each sightseeing spot gets its own live coordinate reading
      const angle = (placeIdx * 1.15) % (Math.PI * 2);
      const radiusDeg = 0.04 + (placeIdx % 4) * 0.025;
      const lat = userOrigin.lat + Math.sin(angle) * radiusDeg;
      const lon = userOrigin.lon + Math.cos(angle) * radiusDeg;
      return { lat, lon, key: getCoordTempKey(lat, lon) };
    }

    window.renderTemples = () => {
      const container = document.getElementById('templeListContainer');
      if (!container) return;
      const q = (document.getElementById('templeSearch')?.value || '').trim().toLowerCase();
      populateLocationCascades();
      const stateVal = document.getElementById('stateFilter')?.value || 'ALL';
      const distVal = document.getElementById('districtFilter')?.value || 'ALL';
      const mandVal = document.getElementById('mandalFilter')?.value || 'ALL';
      const divVal = document.getElementById('divisionFilter')?.value || 'ALL';
      const termVal = document.getElementById('terminalSelect')?.value || 'ALL';

      let pool = BASE_TEMPLES.slice();
      if (divVal !== 'ALL') {
        const existingInDiv = pool.filter(t => t.division === divVal);
        if (!existingInDiv.length) {
          // Synthesize local street/colony temple entry for the selected division so local shrine info is always shown
          const baseRef = pool.find(t => (distVal === 'ALL' || t.district === distVal) && (stateVal === 'ALL' || t.state === stateVal)) || pool[0];
          pool.unshift({
            id: 't_div_' + encodeURIComponent(divVal),
            name: `Sri Grama Devata & Street Mandir (${divVal})`,
            teluguName: `శ్రీ గ్రామ దేవత & వీధి ఆలయం (${divVal})`,
            state: stateVal !== 'ALL' ? stateVal : baseRef.state,
            district: distVal !== 'ALL' ? distVal : baseRef.district,
            mandal: mandVal !== 'ALL' ? mandVal : (baseRef.mandal || 'Central'),
            division: divVal,
            tier: 'TIER3',
            lat: baseRef.lat,
            lon: baseRef.lon,
            deity: 'Grama Devata, Shiva & Hanuman Street Shrines',
            timings: '06:00 AM – 11:00 AM, 05:30 PM – 08:30 PM',
            corridor: baseRef.corridor || 'HYD',
            lastMile: `Local street / colony shrine inside ${divVal}`,
            nearby: [`${divVal} Main Road`, `Local Ward / Street Shrines`, `${distVal !== 'ALL' ? distVal : baseRef.district} Market`],
            history: `Local neighborhood and street-level shrine serving residents of ${divVal} (${mandVal !== 'ALL' ? mandVal + ' Mandal, ' : ''}${distVal !== 'ALL' ? distVal : baseRef.district}) for daily morning/evening prayers and weekly vratams.`,
            travelGuide: {
              directStatus: `Local Division / Street Shrine (${divVal})`,
              isDirect: true,
              alightStation: baseRef.travelGuide?.alightStation || 'Nearest Railway Station',
              onwardDistance: 'Within Division / Street',
              localTransportOptions: ['Walking / Local Auto / City Bus / Two-wheeler within division']
            },
            bestTimeToVisit: 'Morning (06:00–08:30 AM) & Evening (06:00–08:00 PM)',
            historyParagraphs: [
              `Local neighborhood and street-level shrine serving residents of ${divVal} (${mandVal !== 'ALL' ? mandVal + ' Mandal, ' : ''}${distVal !== 'ALL' ? distVal : baseRef.district}) for daily morning/evening prayers and weekly vratams.`
            ],
            isHydLocal: true
          });
        }
      }

      const filtered = pool.filter(t => {
        const matchTier = activeTier === 'ALL' || t.tier === activeTier;
        const matchState = stateVal === 'ALL' || t.state === stateVal;
        const matchDist = distVal === 'ALL' || t.district === distVal;
        const matchMand = mandVal === 'ALL' || t.mandal === mandVal;
        const matchDiv = divVal === 'ALL' || t.division === divVal;
        const trains = getTrainsForTemple(t, termVal);
        const matchTerm = termVal === 'ALL' || trains.length > 0;
        const matchText = !q ||
          t.name.toLowerCase().includes(q) ||
          t.state.toLowerCase().includes(q) ||
          t.district.toLowerCase().includes(q) ||
          (t.mandal && t.mandal.toLowerCase().includes(q)) ||
          (t.division && t.division.toLowerCase().includes(q)) ||
          t.deity.toLowerCase().includes(q) ||
          (t.teluguName && t.teluguName.includes(q)) ||
          t.nearby.some(n => n.toLowerCase().includes(q));
        return matchTier && matchState && matchDist && matchMand && matchDiv && matchTerm && matchText;
      }).map(t => ({ ...t, distKm: haversineKm(userOrigin.lat, userOrigin.lon, t.lat, t.lon) }))
        .sort((a, b) => a.distKm - b.distKm);

      document.getElementById('filteredCountText').textContent = `Showing ${filtered.length} of ${BASE_TEMPLES.length} temples (sorted nearest first)`;
      if (!filtered.length) {
        container.innerHTML = `<div class="glass rounded-2xl p-6 text-center text-xs text-slate-400">No temples match this filter.</div>`;
        return;
      }

      const visible = filtered.slice(0, 80);
      container.innerHTML = visible.map(t => {
        const loc = getLocalizedTemple(t);
        const trains = getTrainsForTemple(t, termVal);
        const mapsDrive = `https://www.google.com/maps/dir/?api=1&origin=${userOrigin.lat},${userOrigin.lon}&destination=${t.lat},${t.lon}&travelmode=driving`;
        const tierBadge = t.tier === 'TIER1' ? 'bg-amber-500/20 text-amber-300' : t.tier === 'TIER2' ? 'bg-purple-500/20 text-purple-300' : 'bg-emerald-500/20 text-emerald-300';
        const tierLabel = t.tier === 'TIER1' ? 'Tier 1' : t.tier === 'TIER2' ? 'Tier 2' : 'Tier 3';
        const isLocalCityTemple = t.distKm <= 45;
        const localTr = getLocalCityTransportInfo(t, t.distKm);

        return `
          <div class="glass rounded-2xl p-4 space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300">${loc.stateBadge}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded font-semibold ${tierBadge}">${tierLabel}</span>
                  <span class="text-[10px] font-mono text-sky-300 font-bold">${currentLang === 'te' ? `~${t.distKm} కి.మీ` : currentLang === 'hi' ? `~${t.distKm} किमी` : `~${t.distKm} km away`}</span><span data-live-temp-key="${getCoordTempKey(t.lat, t.lon)}" data-lat="${t.lat}" data-lon="${t.lon}" class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-200 font-bold">${formatCoordTempBadge(t.lat, t.lon)}</span>
                  <button type="button" onclick="toggleYatraStop('${t.id}')" class="text-[10px] px-2 py-0.5 rounded font-bold ${yatraStopIds.includes(t.id) ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-amber-200 border border-amber-400/30'}">${yatraStopIds.includes(t.id) ? (currentLang === 'te' ? '✓ యాత్రలో ఉంది' : currentLang === 'hi' ? '✓ यात्रा में' : '✓ In Yatra') : (currentLang === 'te' ? '+ యాత్ర' : currentLang === 'hi' ? '+ यात्रा' : '+ Yatra')}</button>
                  ${isLocalCityTemple ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">${currentLang === 'te' ? 'స్థానిక నగరం' : currentLang === 'hi' ? 'स्थानीय शहर' : 'Local City'}</span>` : ''}
                </div>
                <h3 class="text-sm font-bold text-white mt-1.5 leading-snug">${loc.displayName}</h3>
                <p class="text-[11px] text-slate-400">📍 ${loc.locLine}</p>
              </div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">${loc.historyShort}</p>

            ${isLocalCityTemple ? `
              <div class="text-[11px] bg-white/5 rounded-xl p-2.5 text-slate-200 space-y-1">
                <div>🕒 <strong class="text-amber-300">${currentLang === 'te' ? 'దర్శన వేళలు:' : currentLang === 'hi' ? 'दर्शन समय:' : 'Darshan Timings:'}</strong> ${t.timings}</div>
                <div>🌤️ <strong class="text-emerald-300">${currentLang === 'te' ? 'అనుకూల సమయం:' : currentLang === 'hi' ? 'उत्तम समय:' : 'Best Time:'}</strong> ${loc.bestTime}</div>
                <div>🚇 <strong class="text-cyan-300">${currentLang === 'te' ? 'స్థానిక రవాణా:' : currentLang === 'hi' ? 'स्थानीय परिवहन:' : 'Local City Transport:'}</strong> <span class="text-slate-300">${localTr.metro.split('(')[0].trim()} • ${currentLang === 'te' ? 'సిటీ బస్సు • ఆటో/క్యాబ్' : currentLang === 'hi' ? 'सिटी बस • ऑटो/कैब' : 'City Bus • Auto/Cab'}</span></div>
              </div>
              <div class="text-[11px] text-slate-300 px-0.5">
                🧭 <strong class="text-emerald-300">Nearby:</strong> ${t.nearby.slice(0, 3).join(' • ')}
              </div>
              <div class="grid grid-cols-3 gap-1.5 pt-1">
                <button type="button" onclick="openTempleModal('${t.id}', 'details')" class="py-2 px-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-[11px]">
                  📜 History & Info
                </button>
                <button type="button" onclick="openTempleModal('${t.id}', 'citytransit')" class="py-2 px-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-bold text-[11px]">
                  🚇 City Transit
                </button>
                <a href="${mapsDrive}" target="_blank" rel="noopener" class="py-2 px-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-[11px] text-center">
                  🚗 Road Map
                </a>
              </div>
            ` : `
              <div class="text-[11px] bg-white/5 rounded-xl p-2.5 text-slate-200 space-y-1">
                <div>🕒 <strong class="text-amber-300">Darshan Timings:</strong> ${t.timings}</div>
                <div>🌤️ <strong class="text-emerald-300">Best Time:</strong> ${loc.bestTime}</div>
                <div>🚆 <strong class="text-sky-300">${t.travelGuide.directStatus}</strong> <span class="text-slate-400">(${t.travelGuide.onwardDistance})</span></div>
              </div>
              <div class="text-[11px] text-slate-300 px-0.5">
                🧭 <strong class="text-emerald-300">Nearby:</strong> ${t.nearby.slice(0, 3).join(' • ')}
              </div>
              <div class="grid grid-cols-2 gap-1.5 pt-1">
                <button type="button" onclick="openTempleModal('${t.id}', 'details')" class="py-2 px-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-[11px]">
                  📜 History & Info
                </button>
                <button type="button" onclick="openTempleModal('${t.id}', 'trains')" class="py-2 px-2 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 font-bold text-[11px]">
                  🚆 Trains (${trains.length})
                </button>
                <button type="button" onclick="openTempleModal('${t.id}', 'buses')" class="py-2 px-2 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 font-bold text-[11px]">
                  🚌 State RTC / AbhiBus
                </button>
                <a href="${mapsDrive}" target="_blank" rel="noopener" class="py-2 px-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-[11px] text-center">
                  🚗 Road Map
                </a>
              </div>
            `}
          </div>
        `;
      }).join('');
      fetchTempsForVisibleTemples(visible);
      renderYatraPlanner();
    };

    window.openTempleModal = (id, focus = 'details') => {
      const t = BASE_TEMPLES.find(x => x.id === id);
      if (!t) return;
      const trains = getTrainsForTemple(t, 'ALL');
      const buses = CORRIDOR_BUSES[t.corridor] || CORRIDOR_BUSES["BZA"];
      const distKm = haversineKm(userOrigin.lat, userOrigin.lon, t.lat, t.lon);
      const isLocalCityTemple = distKm <= 45;
      const localTr = getLocalCityTransportInfo(t, distKm);
      const mapsDrive = `https://www.google.com/maps/dir/?api=1&origin=${userOrigin.lat},${userOrigin.lon}&destination=${t.lat},${t.lon}&travelmode=driving`;
      const loc = getLocalizedTemple(t);

      const activeFocus = isLocalCityTemple
        ? (focus === 'citytransit' ? 'citytransit' : 'details')
        : ((focus === 'trains' || focus === 'buses') ? focus : 'details');

      const detailsHtml = `
        <div class="space-y-3">
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 space-y-1.5 text-xs">
            <div><strong class="text-amber-300">🕒 Darshan Timings:</strong> <span class="text-white font-semibold">${t.timings}</span></div>
            <div><strong class="text-emerald-300">🌤️ Best Time to Visit:</strong> <span class="text-slate-100">${loc.bestTime}</span></div>
            <div><strong class="text-amber-300">🙏 Presiding Deity:</strong> <span class="text-slate-200">${t.deity}</span></div>
            <div><strong class="text-cyan-300">🎒 Darshan & Dress-Code Tip:</strong> <span class="text-slate-200">${getTempleFieldTips(t)}</span></div>
          </div>
          <div class="p-3.5 rounded-2xl bg-amber-950/25 border border-amber-500/30 space-y-2.5">
            <h3 class="text-xs font-bold uppercase tracking-wider text-amber-300">📜 Sthala Puranam & Detailed Temple History</h3>
            ${loc.historyParagraphs.map(p => `<p class="text-xs text-slate-200 leading-relaxed">${p}</p>`).join('')}
          </div>
          <div class="p-3 rounded-2xl bg-emerald-950/35 border border-emerald-500/30 space-y-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-300">🧭 Nearby Places & Sightseeing</h3>
            <ul class="space-y-1.5 text-xs text-slate-200">
              ${t.nearby.map(pl => `<li>✦ ${pl}</li>`).join('')}
            </ul>
          </div>
          <a href="${mapsDrive}" target="_blank" rel="noopener" class="block w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs text-center">🚗 Open Google Maps Route</a>
        </div>
      `;

      const cityTransitHtml = `
        <div class="space-y-3 text-xs">
          <div class="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-400/35 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-200 font-bold">🚇 LOCAL CITY TRANSIT (${userOrigin.name})</span>
              <span class="text-[11px] font-mono text-emerald-300">~${distKm} km away</span>
            </div>
            <p class="text-[11px] text-slate-300">Since you are currently in <strong class="text-white">${userOrigin.name}</strong>, use local metro, suburban rail, city buses, or cab/auto rather than long-distance trains:</p>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div class="text-[11px] font-bold text-sky-300">🚇 Metro Rail / Rapid Transit</div>
              <div class="text-slate-200 leading-relaxed">${localTr.metro}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div class="text-[11px] font-bold text-amber-300">🚆 Suburban / MMTS Local Train</div>
              <div class="text-slate-200 leading-relaxed">${localTr.mmts}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div class="text-[11px] font-bold text-emerald-300">🚌 City Bus Services</div>
              <div class="text-slate-200 leading-relaxed">${localTr.cityBus}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div class="text-[11px] font-bold text-purple-300">🛺 Auto / Ola / Uber / Rapido</div>
              <div class="text-slate-200 leading-relaxed">${localTr.autoCab}</div>
            </div>
          </div>
          <a href="${mapsDrive}" target="_blank" rel="noopener" class="block w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs text-center">🚗 Open Live City Route in Google Maps</a>
        </div>
      `;

      const trainsHtml = `
        <div class="space-y-2.5 text-xs">
          <div class="p-3 rounded-xl bg-sky-950/40 border border-sky-400/30">
            <div><strong>🚉 Alight Station:</strong> ${t.travelGuide.alightStation} (${t.travelGuide.onwardDistance})</div>
            <div class="text-[11px] text-slate-300 mt-1">${t.lastMile}</div>
          </div>
          ${trains.map(tr => `
            <div class="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div class="flex justify-between font-bold">
                <span class="text-sky-300">${tr.no} ${tr.name}</span>
                <span class="text-emerald-300">${tr.days}</span>
              </div>
              <div class="font-mono text-[11px] text-amber-200">${tr.origin} ${tr.dep} ➔ ${t.corridor} ${tr.arr} (${tr.dur})</div>
              <div class="text-[10px] text-slate-400">Classes: ${tr.classes}</div>
            </div>
          `).join('')}
        </div>
      `;

      const busesHtml = `
        <div class="space-y-2.5 text-xs">
          ${buses.map(b => `
            <div class="p-3 rounded-xl bg-white/5 border border-purple-400/25 space-y-1">
              <div class="flex justify-between font-bold">
                <span class="text-purple-200">${b.op}</span>
                <span class="text-emerald-300 font-mono">${b.fare}</span>
              </div>
              <div class="text-slate-200">${b.from} ➔ ${b.to}</div>
              <div class="text-[11px] font-mono text-slate-400">Timings: ${b.timings} (${b.dur})</div>
            </div>
          `).join('')}
        </div>
      `;

      const modalTabs = isLocalCityTemple ? `
        <div class="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 text-[11px] font-bold">
          <button type="button" onclick="openTempleModal('${t.id}', 'details')" class="py-2 rounded-lg ${activeFocus==='details'?'bg-amber-500 text-slate-950':'text-slate-300'}">📜 Details</button>
          <button type="button" onclick="openTempleModal('${t.id}', 'citytransit')" class="py-2 rounded-lg ${activeFocus==='citytransit'?'bg-cyan-500 text-slate-950':'text-cyan-300'}">🚇 Local City Transit</button>
        </div>
      ` : `
        <div class="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 text-[11px] font-bold">
          <button type="button" onclick="openTempleModal('${t.id}', 'details')" class="py-2 rounded-lg ${activeFocus==='details'?'bg-amber-500 text-slate-950':'text-slate-300'}">📜 Details</button>
          <button type="button" onclick="openTempleModal('${t.id}', 'trains')" class="py-2 rounded-lg ${activeFocus==='trains'?'bg-sky-500 text-slate-950':'text-sky-300'}">🚆 Trains (${trains.length})</button>
          <button type="button" onclick="openTempleModal('${t.id}', 'buses')" class="py-2 rounded-lg ${activeFocus==='buses'?'bg-purple-500 text-white':'text-purple-300'}">🚌 Buses (${buses.length})</button>
        </div>
      `;

      document.getElementById('templeModalBody').innerHTML = `
        <div class="pr-8">
          <div class="flex items-center gap-1.5 flex-wrap"><span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">${t.state} • ~${distKm} km</span><span data-live-temp-key="${getCoordTempKey(t.lat, t.lon)}" data-lat="${t.lat}" data-lon="${t.lon}" class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-200 font-bold">${formatCoordTempBadge(t.lat, t.lon)}</span></div>
          <h2 class="text-lg font-bold text-white mt-1.5">${loc.displayName}</h2>
          <p class="text-xs text-slate-400">📍 ${t.district}, ${t.state}</p>
        </div>
        ${modalTabs}
        ${isLocalCityTemple
          ? (activeFocus === 'citytransit' ? cityTransitHtml : detailsHtml)
          : (activeFocus === 'trains' ? trainsHtml : activeFocus === 'buses' ? busesHtml : detailsHtml)}
      `;
      fetchTempsForVisibleTemples([t]);
      document.getElementById('templeModal').classList.remove('hidden');
    };
    window.closeTempleModal = () => document.getElementById('templeModal')?.classList.add('hidden');


    window.renderLocalSightseeing = () => {
      const box = document.getElementById('localSightseeingContainer');
      if (!box) return;
      const hubCode = LOCAL_SIGHTSEEING[userOrigin.cityCode] ? userOrigin.cityCode : detectNearestHubCode(userOrigin.lat, userOrigin.lon);
      const hub = LOCAL_SIGHTSEEING[hubCode] || LOCAL_SIGHTSEEING.HYD;
      const hubTitle = currentLang === 'te' ? hub.hubTe : currentLang === 'hi' ? hub.hubHi : hub.hubEn;

      const placePts = hub.places.map((_, idx) => getSightseeingPlaceCoords(idx));

      const nearbyTemples = BASE_TEMPLES
        .map(t => ({ ...t, dist: haversineKm(userOrigin.lat, userOrigin.lon, t.lat, t.lon) }))
        .filter(t => t.dist <= 75)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 6);

      box.innerHTML = `
        <div class="glass rounded-2xl p-4 space-y-3">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <div class="text-xs font-bold text-emerald-300">🧭 ${hubTitle} — Tourist Highlights</div>
            <span class="origin-live-temp-badge text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30">${formatCoordTempBadge(userOrigin.lat, userOrigin.lon)}</span>
          </div>
          ${hub.places.map((p, idx) => {
            const pName = currentLang === 'te' ? p.nameTe : currentLang === 'hi' ? p.nameHi : p.nameEn;
            const pDesc = currentLang === 'te' ? p.descTe : currentLang === 'hi' ? p.descHi : p.descEn;
            const pt = placePts[idx];
            return `
              <div class="bg-white/5 rounded-xl p-3 space-y-1 border border-white/10">
                <div class="flex justify-between items-start gap-2">
                  <span class="text-xs font-bold text-white">${pName}</span>
                  <div class="flex items-center gap-1.5 shrink-0">
                    <span data-live-temp-key="${pt.key}" data-lat="${pt.lat}" data-lon="${pt.lon}" class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-200 font-bold">${formatCoordTempBadge(pt.lat, pt.lon)}</span>
                    <span class="text-[11px] font-mono text-emerald-300">${p.dist}</span>
                  </div>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${pDesc}</p>
              </div>
            `;
          }).join('')}
        </div>
        ${nearbyTemples.length ? `
          <div class="glass rounded-2xl p-4 space-y-2.5">
            <div class="text-xs font-bold text-amber-300">🛕 Sacred Shrines Within 75 km of ${userOrigin.name}</div>
            ${nearbyTemples.map(t => `
              <div onclick="openTempleModal('${t.id}', 'details')" class="bg-white/5 rounded-xl p-3 flex justify-between items-center gap-2 border border-white/10">
                <div>
                  <div class="text-xs font-bold text-white">${getLocalizedTemple(t).displayName}</div>
                  <div class="text-[11px] text-slate-400">${t.deity}</div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <span data-live-temp-key="${getCoordTempKey(t.lat, t.lon)}" data-lat="${t.lat}" data-lon="${t.lon}" class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-200 font-bold">${formatCoordTempBadge(t.lat, t.lon)}</span>
                  <span class="text-[11px] font-mono text-sky-300">~${t.dist} km →</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      `;

      fetchOriginLiveTemp();
      fetchBatchOpenMeteo(placePts);
      fetchTempsForVisibleTemples(nearbyTemples);
    };
    // 8. Festivals & Detailed Multi-Paragraph Puranic Stories
    const userNakSelect = document.getElementById('userNakshatra');
    NAK_EN.forEach((n, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${NAK_TE[idx]} (${n})`;
      userNakSelect.appendChild(opt);
    });

    
    const NATIONAL_FESTIVALS = [
      {
        date: "2026-01-26",
        category: "national",
        te: "భారత గణతంత్ర దినోత్సవం (Republic Day)",
        en: "Republic Day of India",
        desc: "Adoption of the Constitution of India on 26 January 1950; Kartavya Path Parade & Flag Hoisting.",
        story: [
          "Historical Significance: On January 26, 1950, the Constitution of India—drafted by the Constituent Assembly chaired by Dr. B. R. Ambedkar—came into force, transforming India into a sovereign, democratic republic. The date honors the 1930 Purna Swaraj (Complete Independence) declaration.",
          "National Celebrations: The President of India unfurls the Tiranga at Kartavya Path in New Delhi accompanied by a 21-gun salute, cultural tableaux from Indian states, and parades across state capitals, schools, and community centers."
        ]
      },
      {
        date: "2026-02-28",
        category: "national",
        te: "జాతీయ సైన్స్ దినోత్సవం (National Science Day)",
        en: "National Science Day (Raman Effect Discovery)",
        desc: "Commemorating Sir C. V. Raman's Nobel Prize-winning discovery of the Raman Effect in 1928.",
        story: [
          "Discovery of the Raman Effect: On February 28, 1928, Indian physicist Sir Chandrasekhara Venkata Raman announced the discovery of inelastic scattering of photons (the Raman Effect), earning him the 1930 Nobel Prize in Physics—the first Nobel Prize in science for Asia.",
          "Observances: Research institutions, ISRO centers, planetariums, and schools across India host science exhibitions, lectures, and innovation workshops."
        ]
      },
      {
        date: "2026-04-14",
        category: "national",
        te: "డాక్టర్ బి.ఆర్. అంబేద్కర్ జయంతి (Ambedkar Jayanti)",
        en: "Dr. B. R. Ambedkar Jayanti (Equality Day)",
        desc: "Birth anniversary of Bharat Ratna Dr. Bhimrao Ramji Ambedkar, Chief Architect of the Indian Constitution.",
        story: [
          "Life & Legacy: Born on April 14, 1891, Dr. B. R. Ambedkar was a jurist, economist, social reformer, and Chairman of the Constitution Drafting Committee who championed fundamental rights, social justice, and constitutional equality for every citizen.",
          "Observances: Observed nationwide as Equality Day with floral tributes at Chaitya Bhoomi (Mumbai), Sansad Bhavan (New Delhi), and Tank Bund (Hyderabad)."
        ]
      },
      {
        date: "2026-08-15",
        category: "national",
        te: "భారత స్వాతంత్ర్య దినోత్సవం (Independence Day)",
        en: "Independence Day of India",
        desc: "Commemorating India's independence on 15 August 1947; Red Fort Flag Hoisting & Jana Gana Mana.",
        story: [
          "Historic Dawn of Freedom: On August 15, 1947, India attained independence after centuries of struggle and sacrifice by countless freedom fighters, revolutionaries, and citizens across the nation.",
          "National Observances: The Prime Minister hoists the National Flag at the ramparts of the Red Fort in Delhi and addresses the nation, while schools, offices, and residential communities celebrate with flag hoisting, patriotic songs, and kite flying."
        ]
      },
      {
        date: "2026-09-05",
        category: "national",
        te: "ఉపాధ్యాయ దినోత్సవం (Teachers' Day)",
        en: "National Teachers' Day (Dr. Sarvepalli Radhakrishnan)",
        desc: "Honoring Bharat Ratna Dr. Sarvepalli Radhakrishnan and educators across India.",
        story: [
          "Tribute to a Philosopher-Statesman: Born on September 5, 1888 in Tiruttani, Dr. Sarvepalli Radhakrishnan was a renowned philosopher, teacher, and the second President of India who requested that his birthday be celebrated to honor all teachers.",
          "Observances: Students across India express gratitude to teachers and mentors through cultural tributes and academic recognitions."
        ]
      },
      {
        date: "2026-10-02",
        category: "national",
        te: "గాంధీ జయంతి (Gandhi Jayanti)",
        en: "Gandhi Jayanti (International Day of Non-Violence)",
        desc: "Birth anniversary of Mahatma Gandhi (Father of the Nation) & Lal Bahadur Shastri.",
        story: [
          "Legacy of Truth & Ahimsa: Born on October 2, 1869 in Porbandar, Mohandas Karamchand Gandhi led India's freedom movement through Satya (Truth) and Ahimsa (Non-Violence). Also commemorates former Prime Minister Lal Bahadur Shastri ('Jai Jawan Jai Kisan').",
          "Observances: Prayer meetings at Raj Ghat (New Delhi), Swachh Bharat cleanliness drives, and khadi/handloom tributes are held across the country."
        ]
      },
      {
        date: "2026-11-14",
        category: "national",
        te: "బాలల దినోత్సవం (Children's Day)",
        en: "Children's Day (Bal Diwas)",
        desc: "Celebrating childhood, education, and Pandit Jawaharlal Nehru's birth anniversary.",
        story: [
          "Significance: Celebrated on November 14 across India to honor children's rights, education, and welfare on the birth anniversary of India's first Prime Minister, Pandit Jawaharlal Nehru ('Chacha Nehru').",
          "Observances: Schools organize cultural programs, sports, and creative competitions for children nationwide."
        ]
      },
      {
        date: "2027-01-26",
        category: "national",
        te: "భారత గణతంత్ర దినోత్సవం 2027 (Republic Day 2027)",
        en: "Republic Day of India (2027)",
        desc: "78th Republic Day of India celebrating the Indian Constitution.",
        story: [
          "Historical Significance: Celebrates the enactment of the Constitution of India on January 26, 1950, with national flag hoisting and parades across India."
        ]
      }
    ];
    
    if (typeof NATIONAL_FESTIVALS !== 'undefined' && Array.isArray(NATIONAL_FESTIVALS)) {
      NATIONAL_FESTIVALS.forEach(n => {
        if (!n.teStory) {
          n.teStory = [
            `జాతీయ ప్రాధాన్యత: ${n.te || n.en} దేశవ్యాప్తంగా గౌరవప్రదంగా జరుపుకునే ముఖ్య దినోత్సవం.`,
            `వేడుకలు: పాఠశాలలు, సంస్థలు మరియు పౌరులు ఘనంగా స్మరించుకుని వేడుకలు నిర్వహిస్తారు.`
          ];
        }
        if (!n.hiStory) {
          n.hiStory = [
            `राष्ट्रीय महत्व: ${n.te || n.en} देशभर में सम्मान के साथ मनाया जाने वाला महत्वपूर्ण दिवस है।`,
            `आयोजन: विभिन्न संस्थानों और नागरिकों द्वारा श्रद्धा व हर्षोल्लास के साथ कार्यक्रम आयोजित किए जाते हैं।`
          ];
        }
      });
    }

    const ALL_FESTIVALS = [...FESTIVALS.map(f => ({ ...f, category: 'religious' })), ...NATIONAL_FESTIVALS]
      .sort((a, b) => a.date.localeCompare(b.date));

    let festivalFilterMode = 'ALL'; // 'ALL' | 'religious' | 'national'
    let expandedFestivalDate = null;

    function formatDateWithDay(isoStr) {
      const d = new Date(isoStr + 'T12:00:00');
      const locale = currentLang === 'te' ? 'te-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN';
      const dayName = d.toLocaleDateString(locale, { weekday: 'long' });
      const datePart = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      return { dayName, datePart, full: `${dayName}, ${datePart}` };
    }

    window.setFestivalFilter = (mode) => {
      festivalFilterMode = mode;
      renderFestivals();
    };

    window.toggleFestivalCard = (iso) => {
      expandedFestivalDate = (expandedFestivalDate === iso) ? null : iso;
      datePicker.value = iso;
      selectedDate = new Date(iso + 'T12:00:00');
      calViewYear = selectedDate.getFullYear();
      calViewMonth = selectedDate.getMonth();
      renderCalendar();
      renderSelectedDateInspector();
      renderFestivals();
    };

    function buildFestivalStoryHtml(festList, isoDate, pObj) {
      const dtInfo = formatDateWithDay(isoDate);
      if (!festList.length) {
        const specialNote = pObj.tithiIdx === 14 ? '🌕 Pournami (Full Moon Vratam & Satyanarayana Puja)' :
                            pObj.tithiIdx === 29 ? '🌑 Amavasya (Pitru Tarpana & Sacred Observance)' :
                            (pObj.tithiIdx === 10 || pObj.tithiIdx === 25) ? '🪔 Ekadashi Vratam (Fasting & Maha Vishnu Archana)' :
                            (pObj.tithiIdx === 12 || pObj.tithiIdx === 27) ? '🔱 Pradosham (Evening Shiva Abhishekam)' :
                            'Regular Nitya Panchangam & Daily Puja Day';
        return `
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <span class="text-amber-300 font-semibold">🪔 ${dtInfo.full}:</span> ${specialNote}
          </div>
        `;
      }
      return festList.map(f => {
        const fDt = formatDateWithDay(f.date);
        const isNat = f.category === 'national';
        return `
          <div class="p-4 rounded-2xl ${isNat ? 'bg-sky-950/35 border border-sky-400/45' : 'bg-amber-950/30 border border-amber-400/40'} space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${isNat ? 'bg-sky-500/20 text-sky-300' : 'bg-amber-500/20 text-amber-300'} font-bold">
                  ${currentLang === 'te' ? (isNat ? '🇮🇳 జాతీయ పండుగ' : '🎉 పండుగ & వ్రతం') : currentLang === 'hi' ? (isNat ? '🇮🇳 राष्ट्रीय पर्व' : '🎉 पर्व एवं व्रत') : (isNat ? '🇮🇳 NATIONAL FESTIVAL' : '🎉 RELIGIOUS FESTIVAL & VRATAM')}
                </span>
                <h4 class="text-base font-bold text-white mt-1">${pureScriptText(f.te, f.hi, f.en)}</h4>
                ${currentLang === 'en' ? `<div class="text-xs text-amber-200">${f.te}</div>` : ''}
              </div>
              <div class="text-right shrink-0">
                <div class="text-[11px] font-mono px-2 py-1 rounded ${isNat ? 'bg-sky-400 text-slate-950' : 'bg-amber-500 text-slate-950'} font-bold">${fDt.datePart}</div>
                <div class="text-[11px] font-semibold text-emerald-300 mt-1">${fDt.dayName}</div>
              </div>
            </div>
            <div class="space-y-2 pt-2 border-t border-white/10">
              <div class="text-[11px] font-bold uppercase tracking-wider text-amber-300">📖 ${currentLang === 'te' ? (isNat ? 'చారిత్రక ప్రాధాన్యత & వేడుకలు' : 'పురాణ గాథ & సంప్రదాయ ఆచారాలు') : currentLang === 'hi' ? (isNat ? 'ऐतिहासिक महत्व एवं उत्सव' : 'पौराणिक कथा एवं परंपराएं') : (isNat ? 'Historical Significance & Celebrations' : 'Puranic Origin, Legend & Traditional Observances')}</div>
              ${((currentLang === 'te' && f.teStory) ? f.teStory : (currentLang === 'hi' && f.hiStory) ? f.hiStory : (f.story || [f.desc])).map(para => {
                const parts = para.split(': ');
                if (parts.length > 1) {
                  return `<p class="text-xs text-slate-200 leading-relaxed"><strong class="text-amber-200">${parts[0]}:</strong> ${parts.slice(1).join(': ')}</p>`;
                }
                return `<p class="text-xs text-slate-200 leading-relaxed">${para}</p>`;
              }).join('')}
            </div>
          </div>
        `;
      }).join('');
    }

    function renderSelectedDateInspector() {
      const iso = datePicker.value;
      const city = cities[selectedCityIndex] || cities[0];
      const sun = calcSunTimes(selectedDate, city.lat, city.lon, city.tz);
      const p = getPanchangam(new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 1, 0, 0)), city.tz);
      const festsOnDate = getFestivalsForDate(iso);
      const dtInfo = formatDateWithDay(iso);

      const panchangFestBox = document.getElementById('panchangFestivalStoryBox');
      if (panchangFestBox) panchangFestBox.innerHTML = buildFestivalStoryHtml(festsOnDate, iso, p);

      const inspector = document.getElementById('selectedDateDetailCard');
      if (!inspector) return;
      inspector.innerHTML = `
        <div class="glass gold-border rounded-2xl p-4 space-y-3">
          <div class="flex items-center justify-between border-b border-white/10 pb-2">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-sky-300 font-bold">📅 SELECTED DATE PANCHANGAM (${city.name})</span>
              <h3 class="text-sm font-bold text-white">${dtInfo.full}</h3>
              <p class="text-[11px] text-amber-200">${p.ayana} • ${p.teluguMonth} • ${p.paksha}</p>
            </div>
            <span class="text-xs font-mono px-2 py-1 rounded bg-white/10 text-amber-300">${iso}</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">Tithi</div>
              <div class="font-bold text-amber-200">${p.tithi}</div>
              <div class="text-[10px] font-mono text-sky-300">Up to ${p.tithiEndStr}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">Nakshatram</div>
              <div class="font-bold text-amber-200">${p.nakshatra}</div>
              <div class="text-[10px] font-mono text-sky-300">Up to ${p.nakEndStr}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">Yogam / Karanam</div>
              <div class="text-white">${p.yoga} • ${p.karana}</div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5">
              <div class="text-[10px] text-slate-400">Chandra Rashi & Sunrise</div>
              <div class="text-white">${p.rashi} • 🌅 ${sun.sr.str12}</div>
            </div>
          </div>
          ${(() => {
            const mList = calcMuhurthams(selectedDate, sun.sr.total, sun.ss.total);
            const subha = mList[0];
            const durm = mList[3];
            const yama = mList[4];
            const rahu = mList[5];
            return `
              <div class="grid grid-cols-1 gap-1.5 text-[11px]">
                <div class="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-between gap-2">
                  <span class="text-emerald-300 font-semibold">✨ ${subha.name}</span>
                  <span class="font-mono text-white">${subha.time}</span>
                </div>
                <div class="p-2 rounded-xl bg-rose-500/10 border border-rose-400/25 flex items-center justify-between gap-2">
                  <span class="text-rose-300 font-semibold">⚠️ ${durm.name}</span>
                  <span class="font-mono text-rose-100">${durm.time}</span>
                </div>
                <div class="grid grid-cols-2 gap-1.5">
                  <div class="p-2 rounded-xl bg-amber-500/10 border border-amber-400/25">
                    <div class="text-[10px] text-amber-300 font-semibold">⏳ ${yama.name}</div>
                    <div class="font-mono text-white mt-0.5">${yama.time}</div>
                  </div>
                  <div class="p-2 rounded-xl bg-rose-500/10 border border-rose-400/25">
                    <div class="text-[10px] text-rose-300 font-semibold">🚫 ${rahu.name}</div>
                    <div class="font-mono text-white mt-0.5">${rahu.time}</div>
                  </div>
                </div>
              </div>
            `;
          })()}
          ${buildFestivalStoryHtml(festsOnDate, iso, p)}
        </div>
      `;
    }

    window.shiftMonth = (delta) => {
      calViewMonth += delta;
      if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
      if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
      renderCalendar();
    };

    function renderCalendar() {
      const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const mLbl = document.getElementById('calMonthLabel');
      if (mLbl) mLbl.textContent = monthNames[calViewMonth];
      const yJump = document.getElementById('calYearJump');
      if (yJump) {
        if (!yJump.options.length) {
          let opts = '';
          for (let yy = 2026; yy <= 2075; yy++) {
            opts += `<option value="${yy}">${yy}</option>`;
          }
          yJump.innerHTML = opts;
        }
        yJump.value = String(calViewYear);
      }
      const firstDay = new Date(calViewYear, calViewMonth, 1).getDay();
      const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
      let html = '';
      for (let i = 0; i < firstDay; i++) html += `<div></div>`;
      for (let d = 1; d <= daysInMonth; d++) {
        const iso = `${calViewYear}-${String(calViewMonth + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const p = getPanchangam(new Date(Date.UTC(calViewYear, calViewMonth, d, 1, 0, 0)));
        const dayFests = getFestivalsForDate(iso);
        const fest = dayFests[0] || null;
        const dot = fest ? (fest.category === 'national' ? '🇮🇳' : '🎉') : p.tithiIdx === 14 ? '🌕' : p.tithiIdx === 29 ? '🌑' : (p.tithiIdx === 10 || p.tithiIdx === 25) ? '🪔' : '';
        const isMatchVrat = activeCalVratFilter === 'ALL'
          || (activeCalVratFilter === 'FEST' && Boolean(fest))
          || (activeCalVratFilter === 'EKADASHI' && (p.tithiIdx === 10 || p.tithiIdx === 25))
          || (activeCalVratFilter === 'POURNAMI' && p.tithiIdx === 14)
          || (activeCalVratFilter === 'AMAVASYA' && p.tithiIdx === 29)
          || (activeCalVratFilter === 'PRADOSHAM' && (p.tithiIdx === 12 || p.tithiIdx === 27));
        const cellStyle = iso === datePicker.value
          ? 'bg-amber-500 text-slate-950 font-bold'
          : (activeCalVratFilter !== 'ALL' && isMatchVrat)
            ? 'bg-emerald-500/25 border border-emerald-400/50 text-white font-semibold'
            : (activeCalVratFilter !== 'ALL' && !isMatchVrat)
              ? 'bg-white/5 text-slate-500 opacity-50'
              : 'bg-white/5 text-slate-200';
        html += `<button type="button" onclick="selectCalDate('${iso}')" class="p-1.5 rounded-xl flex flex-col items-center ${cellStyle}"><span class="text-xs">${d}</span><span class="text-[9px] h-3">${dot}</span></button>`;
      }
      document.getElementById('calendarGrid').innerHTML = html;
    }

    window.selectCalDate = (iso, scrollToDetail = true) => {
      datePicker.value = iso;
      selectedDate = new Date(iso + 'T12:00:00');
      calViewYear = selectedDate.getFullYear();
      calViewMonth = selectedDate.getMonth();
      expandedFestivalDate = iso;
      renderAll();
      if (scrollToDetail) {
        setTimeout(() => document.getElementById('selectedDateDetailCard')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
      }
    };

    function renderFestivals() {
      const listEl = document.getElementById('festivalList');
      if (!listEl) return;

      const filterBar = `
        <div class="flex gap-1.5 pb-1">
          <button type="button" onclick="setFestivalFilter('ALL')" class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${festivalFilterMode==='ALL'?'bg-amber-500 text-slate-950':'bg-white/10 text-slate-200'}">All (${ALL_FESTIVALS.length})</button>
          <button type="button" onclick="setFestivalFilter('religious')" class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${festivalFilterMode==='religious'?'bg-amber-500 text-slate-950':'bg-white/10 text-slate-200'}">🪔 Religious & Vratams</button>
          <button type="button" onclick="setFestivalFilter('national')" class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${festivalFilterMode==='national'?'bg-sky-400 text-slate-950':'bg-white/10 text-slate-200'}">🇮🇳 National Festivals</button>
        </div>
      `;

      renderFiftyYearArchive();
      const filteredFests = ALL_FESTIVALS.filter(f => festivalFilterMode === 'ALL' || f.category === festivalFilterMode);

      listEl.innerHTML = filterBar + filteredFests.map(f => {
        const isExpanded = expandedFestivalDate === f.date;
        const dtInfo = formatDateWithDay(f.date);
        const isNat = f.category === 'national';
        const paras = f.story || [f.desc];
        return `
          <div onclick="toggleFestivalCard('${f.date}')" class="p-3.5 rounded-2xl ${isExpanded ? (isNat ? 'bg-sky-500/15 border border-sky-400/50' : 'bg-amber-500/15 border border-amber-400/50') : 'bg-white/5 border border-white/10'} space-y-2 cursor-pointer transition">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded ${isNat ? 'bg-sky-500/20 text-sky-300' : 'bg-amber-500/20 text-amber-300'}">
                    ${isNat ? '🇮🇳 National' : '🪔 Festival'}
                  </span>
                  <span class="text-[11px] font-semibold text-emerald-300">${dtInfo.dayName}</span>
                </div>
                <div class="text-sm font-bold text-white mt-1">${pureScriptText(f.te, f.hi, f.en)}</div>
                ${currentLang === 'en' ? `<div class="text-xs text-slate-400">${f.te}</div>` : ''}
              </div>
              <div class="text-right shrink-0">
                <span class="text-[11px] font-mono px-2 py-1 rounded bg-white/10 text-amber-200 block">${dtInfo.datePart}</span>
                <span class="text-[10px] text-sky-300 font-semibold mt-1 block">${isExpanded ? (currentLang === 'te' ? '▲ వివరాలు దాచండి' : currentLang === 'hi' ? '▲ विवरण छिपाएं' : '▲ Hide Details') : (currentLang === 'te' ? '▼ వివరాలకు నొక్కండి' : currentLang === 'hi' ? '▼ विवरण देखें' : '▼ Tap for Details')}</span>
              </div>
            </div>
            ${isExpanded ? `
              <div class="space-y-2 pt-2 border-t border-white/10">
                <div class="text-[11px] font-bold uppercase tracking-wider text-amber-300">📖 ${currentLang === 'te' ? (isNat ? 'ప్రాధాన్యత & వేడుకలు' : 'పురాణ గాథ & ఆచారాలు') : currentLang === 'hi' ? (isNat ? 'महत्व एवं उत्सव' : 'पौराणिक कथा एवं परंपराएं') : (isNat ? 'Significance & Celebrations' : 'Puranic Story & Observances')}</div>
                ${((currentLang === 'te' && f.teStory) ? f.teStory : (currentLang === 'hi' && f.hiStory) ? f.hiStory : paras).map(para => {
                  const parts = para.split(': ');
                  if (parts.length > 1) {
                    return `<p class="text-xs text-slate-200 leading-relaxed"><strong class="text-amber-200">${parts[0]}:</strong> ${parts.slice(1).join(': ')}</p>`;
                  }
                  return `<p class="text-xs text-slate-200 leading-relaxed">${para}</p>`;
                }).join('')}
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }
// 9. Master Render Function
    function renderAll() {
      const city = cities[selectedCityIndex] || cities[0];
      const sun = calcSunTimes(selectedDate, city.lat, city.lon, city.tz);
      const panchang = getPanchangam(new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 1, 0, 0)), city.tz);

      document.getElementById('heroCityName').textContent = localizePlaceName(city.name);
      document.getElementById('heroCitySub').textContent = `${city.label} • ${city.lat.toFixed(2)}°N, ${city.lon.toFixed(2)}°E`;
      document.getElementById('svgSunrise').textContent = sun.sr.str24;
      document.getElementById('svgNoon').textContent = sun.nn.str24;
      document.getElementById('svgSunset').textContent = sun.ss.str24;
      document.getElementById('cardSunrise').textContent = sun.sr.str12;
      document.getElementById('cardSunset').textContent = sun.ss.str12;
      document.getElementById('cardDaylight').textContent = sun.spanStr;
      document.getElementById('muhurthamCityTag').textContent = city.name;

      document.getElementById('panchangSub').textContent = `${panchang.ayana} • ${panchang.teluguMonth} • ${panchang.paksha}`;
      updateMoonPhaseFromTithi(panchang.tithiIdx, ((panchang.moonSid - panchang.sunSid) % 360 + 360) % 360);
      updateCelestialTelemetry(new Date(), city, panchang);
      renderTeluguRitualSuitability(selectedDate, panchang);
      const isTe = currentLang === 'te';
      const angas = [
        { label: isTe ? 'తిథి' : 'Tithi', val: panchang.tithi, timing: `Up to ${panchang.tithiEndStr}, then ${panchang.nextTithi}` },
        { label: isTe ? 'నక్షత్రం' : 'Nakshatram', val: panchang.nakshatra, timing: `Up to ${panchang.nakEndStr}, then ${panchang.nextNak}` },
        { label: isTe ? 'యోగం' : 'Yogam', val: panchang.yoga, timing: `Up to ${panchang.yogaEndStr}, then ${panchang.nextYoga}` },
        { label: isTe ? 'కరణం' : 'Karanam', val: panchang.karana, timing: `Up to ${panchang.karanaEndStr}, then ${panchang.nextKarana}` },
        { label: isTe ? 'చంద్ర రాశి' : 'Chandra Rashi', val: panchang.rashi, timing: `Rashi Lord: ${panchang.rashiLord} (${panchang.moonDeg}°)` }
      ];
      document.getElementById('panchaAngasGrid').innerHTML = angas.map(a => `
        <div class="bg-white/5 rounded-xl px-3 py-2 space-y-0.5">
          <div class="flex items-center justify-between"><span class="text-xs text-slate-400">${a.label}</span><span class="text-xs font-bold text-amber-200">${a.val}</span></div>
          <div class="text-[11px] font-mono text-sky-300 text-right">⏱ ${a.timing}</div>
        </div>
      `).join('');

      document.getElementById('muhurthamList').innerHTML = calcMuhurthams(selectedDate, sun.sr.total, sun.ss.total).map(m => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5">
          <span class="text-slate-200">${m.name}</span>
          <span class="font-mono text-[11px] px-2 py-0.5 rounded ${m.type==='shubha'?'text-emerald-300 bg-emerald-500/15':m.type==='ashubha'?'text-rose-300 bg-rose-500/15':'text-amber-200 bg-amber-500/15'}">${m.time}</span>
        </div>
      `).join('');

      const count = ((panchang.nakIdx - parseInt(userNakSelect.value || '0', 10) + 27) % 27) + 1;
      const taraNum = ((count - 1) % 9) + 1;
      const taraNamesEn = ['Janma Tara (Caution)','Sampat Tara (Auspicious)','Vipat Tara (Caution)','Kshema Tara (Good)','Pratyak Tara (Hurdle)','Sadhana Tara (Success)','Naidhana Tara (Avoid)','Mitra Tara (Good)','Parama Mitra Tara (Best)'];
      const taraNamesTe = ['జన్మ తార (జాగ్రత్త)','సంపత్ తార (శుభం)','విపత్ తార (జాగ్రత్త)','క్షేమ తార (మంచిది)','ప్రత్యక్ తార (ఆటంకం)','సాధన తార (సిద్ధి)','నైధన తార (నిషిద్ధం)','మిత్ర తార (అనుకూలం)','పరమ మిత్ర తార (అత్యుత్తమం)'];
      document.getElementById('tarabalamResult').innerHTML = `<div class="font-bold text-amber-300">${isTe ? taraNamesTe[taraNum - 1] : taraNamesEn[taraNum - 1]} (Count: ${count}/27)</div>`;

      renderCalendar();
      renderSelectedDateInspector();
      renderFestivals();
      fetchOriginLiveTemp();
      renderTemples();
      renderLocalSightseeing();
    }

    datePicker.addEventListener('change', () => {
      if (!datePicker.value) return;
      selectedDate = new Date(datePicker.value + 'T12:00:00');
      calViewYear = selectedDate.getFullYear();
      calViewMonth = selectedDate.getMonth();
      renderAll();
    });

    setAppLanguage(currentLang);
    (function openHomeOnFreshLoad() {
      try {
        localStorage.setItem('panchtattva_active_tab', 'clock');
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      } catch (e) {}
      switchTab('clock', true);
    })();
    fetchCityTemperatures();
    tickClocks();
    setInterval(tickClocks, 1000);
    setInterval(fetchCityTemperatures, 600000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) fetchCityTemperatures(); });

// =========================================================================
    // STORAGE VERSIONING, XSS ESCAPING, WEATHER CACHE & UI PREFERENCES
    // =========================================================================
    const PT_STORAGE_VERSION = 'v32.1';
    (function migratePanchTattvaStorage() {
      try {
        const ver = localStorage.getItem('panchtattva_schema_ver');
        if (ver !== PT_STORAGE_VERSION) {
          localStorage.setItem('panchtattva_schema_ver', PT_STORAGE_VERSION);
        }
      } catch (e) {}
    })();

    function escapeHtml(str) {
      return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    window.toggleAppTheme = () => {
      const isLight = document.body.classList.toggle('theme-light');
      try { localStorage.setItem('panchtattva_theme', isLight ? 'light' : 'dark'); } catch (e) {}
      const btn = document.getElementById('themeToggleBtn');
      if (btn) btn.textContent = isLight ? '🌙' : '☀️';
    };

    window.toggleTeluguFontScale = () => {
      const isLg = document.body.classList.toggle('te-font-lg');
      try { localStorage.setItem('panchtattva_te_font', isLg ? 'lg' : 'std'); } catch (e) {}
      const btn = document.getElementById('fontScaleBtn');
      if (btn) btn.textContent = isLg ? 'అ-' : 'అ+';
    };

    // Restore saved theme, font scale & cached temperatures on startup
    (function restoreSavedPrefsAndCache() {
      try {
        if (localStorage.getItem('panchtattva_theme') === 'light') {
          document.body.classList.add('theme-light');
          const btn = document.getElementById('themeToggleBtn');
          if (btn) btn.textContent = '🌙';
        }
        if (localStorage.getItem('panchtattva_te_font') === 'lg') {
          document.body.classList.add('te-font-lg');
          const fBtn = document.getElementById('fontScaleBtn');
          if (fBtn) fBtn.textContent = 'అ-';
        }
        const cachedWeather = JSON.parse(localStorage.getItem('panchtattva_weather_cache_v1') || 'null');
        if (cachedWeather && cachedWeather.temps && (Date.now() - cachedWeather.ts) < 30 * 60 * 1000) {
          Object.assign(cityTempCache, cachedWeather.temps);
        }
      } catch (e) {}
    })();

    // Persist weather cache periodically
    setInterval(() => {
      try {
        if (typeof cityTempCache !== 'undefined' && Object.keys(cityTempCache).length > 0) {
          localStorage.setItem('panchtattva_weather_cache_v1', JSON.stringify({ ts: Date.now(), temps: cityTempCache }));
        }
      } catch (e) {}
    }, 30000);

    // Preload temples in background after initial paint so search/yatra stay responsive
    setTimeout(() => { if (typeof ensureTemplesLoaded === 'function') ensureTemplesLoaded(); }, 1800);
