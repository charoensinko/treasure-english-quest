const levels = [
  {
    title: "ป่าลึกลับ",
    theme: "Jungle Quest",
    npc: "NPC: The jungle chest is hidden near the bright trail. Use arrow keys to reach it.",
    start: { x: 0, y: 6 },
    chest: { x: 7, y: 1 },
    blocked: [
      [2, 5],
      [2, 4],
      [3, 4],
      [5, 3],
      [6, 3],
      [4, 1],
      [1, 2],
    ],
  },
  {
    title: "ทะเลทรายแห่งคำศัพท์",
    theme: "Desert of Words",
    npc: "NPC: Sand dunes can confuse explorers. Read the path, then find the golden chest.",
    start: { x: 1, y: 5 },
    chest: { x: 8, y: 2 },
    blocked: [
      [3, 6],
      [3, 5],
      [3, 4],
      [5, 4],
      [5, 3],
      [6, 1],
      [2, 2],
      [7, 5],
    ],
  },
  {
    title: "เมืองแห่งความรู้",
    theme: "City of Wisdom",
    npc: "NPC: Cross the learning streets and unlock the chest in the city square.",
    start: { x: 0, y: 3 },
    chest: { x: 8, y: 6 },
    blocked: [
      [2, 0],
      [2, 1],
      [2, 2],
      [4, 2],
      [4, 3],
      [6, 3],
      [6, 4],
      [7, 1],
    ],
  },
  {
    title: "ถ้ำน้ำแข็ง",
    theme: "Frozen Cave",
    npc: "NPC: Ice paths are slippery. Move carefully and listen for the frozen chest.",
    start: { x: 1, y: 1 },
    chest: { x: 7, y: 5 },
    blocked: [
      [0, 3],
      [1, 3],
      [2, 3],
      [4, 1],
      [4, 2],
      [5, 4],
      [6, 4],
      [8, 3],
    ],
  },
  {
    title: "เกาะสมบัติ",
    theme: "Treasure Island",
    npc: "NPC: This is the final island. Find the chest and claim the English treasure.",
    start: { x: 0, y: 0 },
    chest: { x: 8, y: 6 },
    blocked: [
      [1, 2],
      [2, 2],
      [3, 2],
      [5, 0],
      [5, 1],
      [5, 2],
      [4, 5],
      [6, 5],
      [7, 3],
    ],
  },
];

const questionBank = [
  { id: 1, word: "generous", question: "What is the meaning of 'generous'?", choices: ["ใจกว้าง", "ขี้เหนียว", "เฉยเมย"], answer: 0, hint: "A generous person likes sharing and giving help.", unlock: "generous = ใจกว้าง" },
  { id: 2, word: "ancient", question: "Which Thai meaning matches 'ancient'?", choices: ["ทันสมัย", "โบราณ", "รวดเร็ว"], answer: 1, hint: "Ancient things are very old, like pyramids or ruins.", unlock: "ancient = โบราณ" },
  { id: 3, word: "curious", question: "NPC: What does 'curious' mean?", choices: ["เหนื่อยมาก", "อันตราย", "อยากรู้อยากเห็น"], answer: 2, hint: "A curious student asks questions and wants to learn more.", unlock: "curious = อยากรู้อยากเห็น" },
  { id: 4, word: "brave", question: "Which word means 'กล้าหาญ'?", choices: ["brave", "silent", "tiny"], answer: 0, hint: "A brave explorer keeps going even when it is difficult.", unlock: "brave = กล้าหาญ" },
  { id: 5, word: "discover", question: "What is the best Thai meaning of 'discover'?", choices: ["ลืม", "ค้นพบ", "ซ่อน"], answer: 1, hint: "To discover is to find something new.", unlock: "discover = ค้นพบ" },
  { id: 6, word: "honest", question: "What does 'honest' mean?", choices: ["ซื่อสัตย์", "ขี้เกียจ", "ลึกลับ"], answer: 0, hint: "An honest person tells the truth.", unlock: "honest = ซื่อสัตย์" },
  { id: 7, word: "polite", question: "Which meaning matches 'polite'?", choices: ["หยาบคาย", "สุภาพ", "เสียงดัง"], answer: 1, hint: "Polite people say please and thank you.", unlock: "polite = สุภาพ" },
  { id: 8, word: "dangerous", question: "What is the meaning of 'dangerous'?", choices: ["ปลอดภัย", "น่ารัก", "อันตราย"], answer: 2, hint: "Something dangerous can hurt you.", unlock: "dangerous = อันตราย" },
  { id: 9, word: "difficult", question: "Which Thai meaning matches 'difficult'?", choices: ["ยาก", "ง่าย", "ว่างเปล่า"], answer: 0, hint: "A difficult question is not easy.", unlock: "difficult = ยาก" },
  { id: 10, word: "comfortable", question: "What does 'comfortable' mean?", choices: ["เจ็บปวด", "สะดวกสบาย", "มืด"], answer: 1, hint: "A soft chair can be comfortable.", unlock: "comfortable = สะดวกสบาย" },
  { id: 11, word: "enormous", question: "What is the meaning of 'enormous'?", choices: ["เล็กมาก", "ช้ามาก", "ใหญ่มาก"], answer: 2, hint: "Enormous means very large.", unlock: "enormous = ใหญ่มาก" },
  { id: 12, word: "tiny", question: "Which meaning matches 'tiny'?", choices: ["เล็กมาก", "แพงมาก", "เปียก"], answer: 0, hint: "A tiny insect is very small.", unlock: "tiny = เล็กมาก" },
  { id: 13, word: "rapid", question: "What does 'rapid' mean?", choices: ["ช้า", "รวดเร็ว", "กลม"], answer: 1, hint: "Rapid movement happens quickly.", unlock: "rapid = รวดเร็ว" },
  { id: 14, word: "silent", question: "Which Thai meaning matches 'silent'?", choices: ["สดใส", "สกปรก", "เงียบ"], answer: 2, hint: "A silent room has no noise.", unlock: "silent = เงียบ" },
  { id: 15, word: "bright", question: "What is the meaning of 'bright'?", choices: ["สว่าง", "หนัก", "แห้ง"], answer: 0, hint: "The sun is bright.", unlock: "bright = สว่าง" },
  { id: 16, word: "narrow", question: "What does 'narrow' mean?", choices: ["กว้าง", "แคบ", "หวาน"], answer: 1, hint: "A narrow path has little space.", unlock: "narrow = แคบ" },
  { id: 17, word: "wide", question: "Which meaning matches 'wide'?", choices: ["ลึก", "แหลม", "กว้าง"], answer: 2, hint: "A wide road has lots of space.", unlock: "wide = กว้าง" },
  { id: 18, word: "deep", question: "What is the meaning of 'deep'?", choices: ["ลึก", "ตื้น", "เบา"], answer: 0, hint: "A deep cave goes far down.", unlock: "deep = ลึก" },
  { id: 19, word: "shallow", question: "Which Thai meaning matches 'shallow'?", choices: ["สูง", "ตื้น", "เย็น"], answer: 1, hint: "Shallow water is not deep.", unlock: "shallow = ตื้น" },
  { id: 20, word: "valuable", question: "What does 'valuable' mean?", choices: ["ไร้ค่า", "เหนียว", "มีค่า"], answer: 2, hint: "Gold is valuable.", unlock: "valuable = มีค่า" },
  { id: 21, word: "ordinary", question: "What is the meaning of 'ordinary'?", choices: ["ธรรมดา", "มหัศจรรย์", "อันตราย"], answer: 0, hint: "Ordinary means normal or common.", unlock: "ordinary = ธรรมดา" },
  { id: 22, word: "rare", question: "Which meaning matches 'rare'?", choices: ["ธรรมดา", "หายาก", "เปียก"], answer: 1, hint: "A rare item is hard to find.", unlock: "rare = หายาก" },
  { id: 23, word: "certain", question: "What does 'certain' mean?", choices: ["สงสัย", "หิว", "แน่นอน"], answer: 2, hint: "If you are certain, you are sure.", unlock: "certain = แน่นอน" },
  { id: 24, word: "nervous", question: "Which Thai meaning matches 'nervous'?", choices: ["ประหม่า", "อิ่ม", "สดชื่น"], answer: 0, hint: "You may feel nervous before a test.", unlock: "nervous = ประหม่า" },
  { id: 25, word: "calm", question: "What is the meaning of 'calm'?", choices: ["วุ่นวาย", "สงบ", "ร้อน"], answer: 1, hint: "A calm person is peaceful.", unlock: "calm = สงบ" },
  { id: 26, word: "lazy", question: "What does 'lazy' mean?", choices: ["ขยัน", "กล้าหาญ", "ขี้เกียจ"], answer: 2, hint: "A lazy person avoids work.", unlock: "lazy = ขี้เกียจ" },
  { id: 27, word: "diligent", question: "Which meaning matches 'diligent'?", choices: ["ขยัน", "หยิ่ง", "เหงา"], answer: 0, hint: "A diligent student studies hard.", unlock: "diligent = ขยัน" },
  { id: 28, word: "friendly", question: "What is the meaning of 'friendly'?", choices: ["เย็นชา", "เป็นมิตร", "สกปรก"], answer: 1, hint: "A friendly person is kind to others.", unlock: "friendly = เป็นมิตร" },
  { id: 29, word: "selfish", question: "What does 'selfish' mean?", choices: ["ใจกว้าง", "สุภาพ", "เห็นแก่ตัว"], answer: 2, hint: "A selfish person thinks only about themselves.", unlock: "selfish = เห็นแก่ตัว" },
  { id: 30, word: "humble", question: "Which Thai meaning matches 'humble'?", choices: ["ถ่อมตัว", "อวดดี", "รุนแรง"], answer: 0, hint: "A humble person does not brag.", unlock: "humble = ถ่อมตัว" },
  { id: 31, word: "proud", question: "What does 'proud' mean?", choices: ["เศร้า", "ภูมิใจ", "ง่วง"], answer: 1, hint: "You feel proud when you do something well.", unlock: "proud = ภูมิใจ" },
  { id: 32, word: "patient", question: "What is the meaning of 'patient'?", choices: ["ใจร้อน", "เสียงดัง", "อดทน"], answer: 2, hint: "A patient person can wait calmly.", unlock: "patient = อดทน" },
  { id: 33, word: "careless", question: "Which meaning matches 'careless'?", choices: ["สะเพร่า", "ระมัดระวัง", "ขยัน"], answer: 0, hint: "Careless work often has mistakes.", unlock: "careless = สะเพร่า" },
  { id: 34, word: "careful", question: "What does 'careful' mean?", choices: ["ประมาท", "ระมัดระวัง", "เศร้า"], answer: 1, hint: "A careful explorer checks the map.", unlock: "careful = ระมัดระวัง" },
  { id: 35, word: "clever", question: "Which Thai meaning matches 'clever'?", choices: ["เชื่องช้า", "สับสน", "ฉลาด"], answer: 2, hint: "A clever person solves problems well.", unlock: "clever = ฉลาด" },
  { id: 36, word: "wise", question: "What is the meaning of 'wise'?", choices: ["มีปัญญา", "เปียก", "อ่อนแอ"], answer: 0, hint: "A wise person gives good advice.", unlock: "wise = มีปัญญา" },
  { id: 37, word: "foolish", question: "What does 'foolish' mean?", choices: ["ฉลาด", "โง่เขลา", "โชคดี"], answer: 1, hint: "A foolish choice is not wise.", unlock: "foolish = โง่เขลา" },
  { id: 38, word: "excellent", question: "Which meaning matches 'excellent'?", choices: ["แย่มาก", "ธรรมดา", "ยอดเยี่ยม"], answer: 2, hint: "Excellent means very good.", unlock: "excellent = ยอดเยี่ยม" },
  { id: 39, word: "terrible", question: "What does 'terrible' mean?", choices: ["แย่มาก", "ยอดเยี่ยม", "สดใส"], answer: 0, hint: "Terrible means very bad.", unlock: "terrible = แย่มาก" },
  { id: 40, word: "delicious", question: "What is the meaning of 'delicious'?", choices: ["จืด", "อร่อย", "แข็ง"], answer: 1, hint: "Delicious food tastes very good.", unlock: "delicious = อร่อย" },
  { id: 41, word: "bitter", question: "Which Thai meaning matches 'bitter'?", choices: ["หวาน", "เค็ม", "ขม"], answer: 2, hint: "Some medicine tastes bitter.", unlock: "bitter = ขม" },
  { id: 42, word: "sour", question: "What does 'sour' mean?", choices: ["เปรี้ยว", "เผ็ด", "มัน"], answer: 0, hint: "Lemons taste sour.", unlock: "sour = เปรี้ยว" },
  { id: 43, word: "spicy", question: "Which meaning matches 'spicy'?", choices: ["จืด", "เผ็ด", "หวาน"], answer: 1, hint: "Chili is spicy.", unlock: "spicy = เผ็ด" },
  { id: 44, word: "fresh", question: "What is the meaning of 'fresh'?", choices: ["เก่า", "เสีย", "สดใหม่"], answer: 2, hint: "Fresh fruit was picked recently.", unlock: "fresh = สดใหม่" },
  { id: 45, word: "stale", question: "Which Thai meaning matches 'stale'?", choices: ["เก่า/ไม่สด", "สดชื่น", "แพง"], answer: 0, hint: "Stale bread is old and dry.", unlock: "stale = เก่า/ไม่สด" },
  { id: 46, word: "repair", question: "What does 'repair' mean?", choices: ["ทำลาย", "ซ่อมแซม", "ยืม"], answer: 1, hint: "To repair a bike is to fix it.", unlock: "repair = ซ่อมแซม" },
  { id: 47, word: "borrow", question: "Which meaning matches 'borrow'?", choices: ["ให้ยืม", "ขาย", "ยืม"], answer: 2, hint: "You borrow a book and return it later.", unlock: "borrow = ยืม" },
  { id: 48, word: "lend", question: "What is the meaning of 'lend'?", choices: ["ให้ยืม", "ขโมย", "ซื้อ"], answer: 0, hint: "To lend is to let someone use something for a while.", unlock: "lend = ให้ยืม" },
  { id: 49, word: "invite", question: "What does 'invite' mean?", choices: ["ปฏิเสธ", "เชิญ", "หลบหนี"], answer: 1, hint: "You invite a friend to your party.", unlock: "invite = เชิญ" },
  { id: 50, word: "refuse", question: "Which Thai meaning matches 'refuse'?", choices: ["ยอมรับ", "ค้นหา", "ปฏิเสธ"], answer: 2, hint: "To refuse is to say no.", unlock: "refuse = ปฏิเสธ" },
  { id: 51, word: "accept", question: "What is the meaning of 'accept'?", choices: ["ยอมรับ", "ลืม", "ตะโกน"], answer: 0, hint: "To accept is to say yes or receive something.", unlock: "accept = ยอมรับ" },
  { id: 52, word: "protect", question: "Which meaning matches 'protect'?", choices: ["ทำร้าย", "ปกป้อง", "ผลัก"], answer: 1, hint: "A helmet protects your head.", unlock: "protect = ปกป้อง" },
  { id: 53, word: "destroy", question: "What does 'destroy' mean?", choices: ["สร้าง", "ปกป้อง", "ทำลาย"], answer: 2, hint: "To destroy something is to break it badly.", unlock: "destroy = ทำลาย" },
  { id: 54, word: "create", question: "Which Thai meaning matches 'create'?", choices: ["สร้าง", "ลบ", "ขโมย"], answer: 0, hint: "Artists create pictures.", unlock: "create = สร้าง" },
  { id: 55, word: "improve", question: "What is the meaning of 'improve'?", choices: ["แย่ลง", "ปรับปรุง", "ซ่อน"], answer: 1, hint: "To improve is to make something better.", unlock: "improve = ปรับปรุง" },
  { id: 56, word: "reduce", question: "What does 'reduce' mean?", choices: ["เพิ่ม", "ซ่อม", "ลด"], answer: 2, hint: "To reduce sugar is to use less sugar.", unlock: "reduce = ลด" },
  { id: 57, word: "increase", question: "Which meaning matches 'increase'?", choices: ["เพิ่ม", "ลด", "หยุด"], answer: 0, hint: "To increase score is to make it higher.", unlock: "increase = เพิ่ม" },
  { id: 58, word: "collect", question: "What does 'collect' mean?", choices: ["กระจาย", "เก็บรวบรวม", "ลืม"], answer: 1, hint: "In the game, you collect treasure.", unlock: "collect = เก็บรวบรวม" },
  { id: 59, word: "hide", question: "What is the meaning of 'hide'?", choices: ["แสดง", "เดิน", "ซ่อน"], answer: 2, hint: "To hide is to keep something out of sight.", unlock: "hide = ซ่อน" },
  { id: 60, word: "appear", question: "Which Thai meaning matches 'appear'?", choices: ["ปรากฏ", "หายไป", "ซ่อม"], answer: 0, hint: "A popup can appear on the screen.", unlock: "appear = ปรากฏ" },
  { id: 61, word: "vanish", question: "What does 'vanish' mean?", choices: ["ปรากฏ", "หายไป", "จำได้"], answer: 1, hint: "To vanish is to disappear.", unlock: "vanish = หายไป" },
  { id: 62, word: "search", question: "Which meaning matches 'search'?", choices: ["พักผ่อน", "ทำอาหาร", "ค้นหา"], answer: 2, hint: "You search for a hidden chest.", unlock: "search = ค้นหา" },
  { id: 63, word: "choose", question: "What is the meaning of 'choose'?", choices: ["เลือก", "โยน", "นอน"], answer: 0, hint: "You choose one answer in the quiz.", unlock: "choose = เลือก" },
  { id: 64, word: "explain", question: "What does 'explain' mean?", choices: ["ซ่อน", "อธิบาย", "วาด"], answer: 1, hint: "Teachers explain new words.", unlock: "explain = อธิบาย" },
  { id: 65, word: "compare", question: "Which Thai meaning matches 'compare'?", choices: ["หลีกเลี่ยง", "ทำลาย", "เปรียบเทียบ"], answer: 2, hint: "To compare is to look at how things are similar or different.", unlock: "compare = เปรียบเทียบ" },
  { id: 66, word: "describe", question: "What does 'describe' mean?", choices: ["บรรยาย", "ปฏิเสธ", "คัดลอก"], answer: 0, hint: "To describe a place is to tell what it is like.", unlock: "describe = บรรยาย" },
  { id: 67, word: "remember", question: "Which meaning matches 'remember'?", choices: ["ลืม", "จำได้", "ขาย"], answer: 1, hint: "You remember words you have learned.", unlock: "remember = จำได้" },
  { id: 68, word: "forget", question: "What is the meaning of 'forget'?", choices: ["จำได้", "ชนะ", "ลืม"], answer: 2, hint: "To forget is to not remember.", unlock: "forget = ลืม" },
  { id: 69, word: "prepare", question: "Which Thai meaning matches 'prepare'?", choices: ["เตรียม", "ทำหาย", "กระโดด"], answer: 0, hint: "You prepare before a test.", unlock: "prepare = เตรียม" },
  { id: 70, word: "practice", question: "What does 'practice' mean?", choices: ["หยุดพัก", "ฝึกฝน", "บ่น"], answer: 1, hint: "You practice to get better.", unlock: "practice = ฝึกฝน" },
  { id: 71, word: "celebrate", question: "What is the meaning of 'celebrate'?", choices: ["เสียใจ", "หลบ", "เฉลิมฉลอง"], answer: 2, hint: "People celebrate birthdays.", unlock: "celebrate = เฉลิมฉลอง" },
  { id: 72, word: "whisper", question: "Which meaning matches 'whisper'?", choices: ["กระซิบ", "ตะโกน", "วิ่ง"], answer: 0, hint: "To whisper is to speak very quietly.", unlock: "whisper = กระซิบ" },
  { id: 73, word: "shout", question: "What does 'shout' mean?", choices: ["กระซิบ", "ตะโกน", "ยิ้ม"], answer: 1, hint: "To shout is to speak very loudly.", unlock: "shout = ตะโกน" },
  { id: 74, word: "arrive", question: "Which Thai meaning matches 'arrive'?", choices: ["ออกเดินทาง", "นอนหลับ", "มาถึง"], answer: 2, hint: "You arrive when you reach a place.", unlock: "arrive = มาถึง" },
  { id: 75, word: "depart", question: "What is the meaning of 'depart'?", choices: ["ออกเดินทาง", "มาถึง", "ซ่อนตัว"], answer: 0, hint: "A train departs when it leaves.", unlock: "depart = ออกเดินทาง" },
  { id: 76, word: "journey", question: "What does 'journey' mean?", choices: ["คำถาม", "การเดินทาง", "รางวัล"], answer: 1, hint: "A journey is a trip from one place to another.", unlock: "journey = การเดินทาง" },
  { id: 77, word: "island", question: "Which meaning matches 'island'?", choices: ["ภูเขา", "ทะเลทราย", "เกาะ"], answer: 2, hint: "An island has water around it.", unlock: "island = เกาะ" },
  { id: 78, word: "valley", question: "What is the meaning of 'valley'?", choices: ["หุบเขา", "ชายหาด", "สะพาน"], answer: 0, hint: "A valley is low land between hills or mountains.", unlock: "valley = หุบเขา" },
  { id: 79, word: "forest", question: "What does 'forest' mean?", choices: ["ทะเล", "ป่า", "ถนน"], answer: 1, hint: "A forest has many trees.", unlock: "forest = ป่า" },
  { id: 80, word: "cave", question: "Which Thai meaning matches 'cave'?", choices: ["ปราสาท", "แม่น้ำ", "ถ้ำ"], answer: 2, hint: "A cave is a natural hole in rock or a mountain.", unlock: "cave = ถ้ำ" },
  { id: 81, word: "bridge", question: "What is the meaning of 'bridge'?", choices: ["สะพาน", "กำแพง", "ประตู"], answer: 0, hint: "A bridge helps you cross water or roads.", unlock: "bridge = สะพาน" },
  { id: 82, word: "tower", question: "Which meaning matches 'tower'?", choices: ["อุโมงค์", "หอคอย", "ห้องครัว"], answer: 1, hint: "A tower is a tall building or structure.", unlock: "tower = หอคอย" },
  { id: 83, word: "market", question: "What does 'market' mean?", choices: ["โรงเรียน", "สวน", "ตลาด"], answer: 2, hint: "People buy and sell things at a market.", unlock: "market = ตลาด" },
  { id: 84, word: "library", question: "Which Thai meaning matches 'library'?", choices: ["ห้องสมุด", "โรงพยาบาล", "สนามกีฬา"], answer: 0, hint: "You can read and borrow books at a library.", unlock: "library = ห้องสมุด" },
  { id: 85, word: "museum", question: "What is the meaning of 'museum'?", choices: ["ร้านอาหาร", "พิพิธภัณฑ์", "สถานีรถไฟ"], answer: 1, hint: "A museum shows old or important objects.", unlock: "museum = พิพิธภัณฑ์" },
  { id: 86, word: "solution", question: "What does 'solution' mean?", choices: ["ปัญหา", "คำใบ้", "วิธีแก้ปัญหา"], answer: 2, hint: "A solution answers a problem.", unlock: "solution = วิธีแก้ปัญหา" },
  { id: 87, word: "problem", question: "Which meaning matches 'problem'?", choices: ["ปัญหา", "คำตอบ", "ของขวัญ"], answer: 0, hint: "A problem is something you need to solve.", unlock: "problem = ปัญหา" },
  { id: 88, word: "message", question: "What is the meaning of 'message'?", choices: ["แผนที่", "ข้อความ", "กุญแจ"], answer: 1, hint: "You can send a message to a friend.", unlock: "message = ข้อความ" },
  { id: 89, word: "secret", question: "Which Thai meaning matches 'secret'?", choices: ["เปิดเผย", "ธรรมดา", "ความลับ"], answer: 2, hint: "A secret is something not everyone knows.", unlock: "secret = ความลับ" },
  { id: 90, word: "clue", question: "What does 'clue' mean?", choices: ["เบาะแส", "กำแพง", "ความผิด"], answer: 0, hint: "A clue helps you find the answer.", unlock: "clue = เบาะแส" },
  { id: 91, word: "reward", question: "What is the meaning of 'reward'?", choices: ["บทลงโทษ", "รางวัล", "คำถาม"], answer: 1, hint: "A reward is something you get for doing well.", unlock: "reward = รางวัล" },
  { id: 92, word: "challenge", question: "Which meaning matches 'challenge'?", choices: ["วันหยุด", "ของเล่น", "ความท้าทาย"], answer: 2, hint: "A challenge is a difficult task to try.", unlock: "challenge = ความท้าทาย" },
  { id: 93, word: "victory", question: "What does 'victory' mean?", choices: ["ชัยชนะ", "ความพ่ายแพ้", "ความกลัว"], answer: 0, hint: "Victory means winning.", unlock: "victory = ชัยชนะ" },
  { id: 94, word: "defeat", question: "Which Thai meaning matches 'defeat'?", choices: ["ชัยชนะ", "ความพ่ายแพ้", "ความหวัง"], answer: 1, hint: "Defeat is the opposite of victory.", unlock: "defeat = ความพ่ายแพ้" },
  { id: 95, word: "energy", question: "What is the meaning of 'energy'?", choices: ["ความเงียบ", "ความมืด", "พลังงาน"], answer: 2, hint: "You need energy to run and play.", unlock: "energy = พลังงาน" },
  { id: 96, word: "health", question: "What does 'health' mean?", choices: ["สุขภาพ", "ความเร็ว", "ราคา"], answer: 0, hint: "Good health means your body is well.", unlock: "health = สุขภาพ" },
  { id: 97, word: "environment", question: "Which Thai meaning matches 'environment'?", choices: ["การบ้าน", "สิ่งแวดล้อม", "เครื่องดนตรี"], answer: 1, hint: "The environment includes nature around us.", unlock: "environment = สิ่งแวดล้อม" },
  { id: 98, word: "weather", question: "What is the meaning of 'weather'?", choices: ["ฤดูกาล", "ภูเขา", "สภาพอากาศ"], answer: 2, hint: "Rainy and sunny describe weather.", unlock: "weather = สภาพอากาศ" },
  { id: 99, word: "season", question: "Which meaning matches 'season'?", choices: ["ฤดูกาล", "ทิศทาง", "เสื้อผ้า"], answer: 0, hint: "Summer and winter are seasons.", unlock: "season = ฤดูกาล" },
  { id: 100, word: "direction", question: "What does 'direction' mean?", choices: ["สมบัติ", "ทิศทาง", "อาหาร"], answer: 1, hint: "Left and right are directions.", unlock: "direction = ทิศทาง" },
];

const boardWidth = 9;
const boardHeight = 7;
const extraDistractors = [
  "รวดเร็ว",
  "ช้า",
  "สดใส",
  "มืด",
  "ปลอดภัย",
  "อันตราย",
  "ธรรมดา",
  "หายาก",
  "สุภาพ",
  "หยาบคาย",
  "ขยัน",
  "ขี้เกียจ",
  "สว่าง",
  "เงียบ",
  "กว้าง",
  "แคบ",
  "สูง",
  "ต่ำ",
  "ซ่อน",
  "ค้นพบ",
  "เลือก",
  "ปฏิเสธ",
  "รางวัล",
  "ปัญหา",
  "สะพาน",
  "ตลาด",
  "เกาะ",
  "ถ้ำ",
  "ความลับ",
  "เบาะแส",
];
const state = {
  levelIndex: 0,
  player: { x: 0, y: 0 },
  score: 0,
  hints: 2,
  unlockedWords: [],
  usedQuestionIds: [],
  activeQuiz: null,
  currentBlocked: [],
  lastRouteSignatures: [],
  quizOpen: false,
};

const elements = {
  board: document.getElementById("board"),
  avatar: document.getElementById("avatar"),
  treasure: document.getElementById("treasure"),
  toast: document.getElementById("toast"),
  levelNumber: document.getElementById("levelNumber"),
  score: document.getElementById("score"),
  hintCount: document.getElementById("hintCount"),
  themeBadge: document.getElementById("themeBadge"),
  levelTitle: document.getElementById("levelTitle"),
  npcLine: document.getElementById("npcLine"),
  vocabList: document.getElementById("vocabList"),
  leaderboardList: document.getElementById("leaderboardList"),
  hintButton: document.getElementById("hintButton"),
  restartButton: document.getElementById("restartButton"),
  quizModal: document.getElementById("quizModal"),
  questionText: document.getElementById("questionText"),
  answers: document.getElementById("answers"),
  hintText: document.getElementById("hintText"),
  finishModal: document.getElementById("finishModal"),
  finishText: document.getElementById("finishText"),
  playAgainButton: document.getElementById("playAgainButton"),
};

const themeColors = ["#168b5a", "#d9822b", "#2364aa", "#31a9c9", "#008f7a"];

function currentLevel() {
  return levels[state.levelIndex];
}

function availableQuestions() {
  return questionBank.filter((quiz) => !state.usedQuestionIds.includes(quiz.id));
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalizeQuizChoices(quiz) {
  const correctChoice = quiz.choices[quiz.answer];
  const distractor = shuffled(extraDistractors).find((choice) => !quiz.choices.includes(choice));
  const choices = shuffled([...quiz.choices, distractor]);

  return {
    ...quiz,
    choices,
    answer: choices.indexOf(correctChoice),
  };
}

function pickRandomQuiz() {
  const available = availableQuestions();
  if (available.length === 0) {
    return null;
  }
  const quiz = normalizeQuizChoices(available[Math.floor(Math.random() * available.length)]);
  state.usedQuestionIds.push(quiz.id);
  state.activeQuiz = quiz;
  return quiz;
}

function positionKey(x, y) {
  return `${x},${y}`;
}

function neighbors(position) {
  return shuffled([
    { x: position.x + 1, y: position.y },
    { x: position.x - 1, y: position.y },
    { x: position.x, y: position.y + 1 },
    { x: position.x, y: position.y - 1 },
  ]).filter((next) => isInsideBoard(next.x, next.y));
}

function createRandomPath(start, chest) {
  const visited = new Set([positionKey(start.x, start.y)]);
  const path = [{ ...start }];

  function walk(position) {
    if (position.x === chest.x && position.y === chest.y) {
      return true;
    }

    const options = neighbors(position).sort(() => Math.random() - 0.5);
    for (const next of options) {
      const key = positionKey(next.x, next.y);
      if (visited.has(key)) continue;
      visited.add(key);
      path.push(next);
      if (walk(next)) return true;
      path.pop();
    }

    return false;
  }

  walk(start);
  return path;
}

function generateRandomBlocked(level, levelIndex) {
  const path = createRandomPath(level.start, level.chest);
  const pathKeys = new Set(path.map((position) => positionKey(position.x, position.y)));
  const candidates = [];

  for (let y = 0; y < boardHeight; y += 1) {
    for (let x = 0; x < boardWidth; x += 1) {
      if (!pathKeys.has(positionKey(x, y))) {
        candidates.push([x, y]);
      }
    }
  }

  const blockedCount = Math.min(candidates.length, 10 + levelIndex * 2 + Math.floor(Math.random() * 5));
  return shuffled(candidates).slice(0, blockedCount);
}

function routeSignature(blockedCells) {
  return blockedCells
    .map(([x, y]) => positionKey(x, y))
    .sort()
    .join("|");
}

function generateFreshBlocked(level, levelIndex) {
  let blockedCells = generateRandomBlocked(level, levelIndex);
  let signature = routeSignature(blockedCells);
  let attempts = 0;

  while (signature === state.lastRouteSignatures[levelIndex] && attempts < 60) {
    blockedCells = generateRandomBlocked(level, levelIndex);
    signature = routeSignature(blockedCells);
    attempts += 1;
  }

  state.lastRouteSignatures[levelIndex] = signature;
  return blockedCells;
}

function buildBoard() {
  elements.board.innerHTML = "";
  for (let y = 0; y < boardHeight; y += 1) {
    for (let x = 0; x < boardWidth; x += 1) {
      const tile = document.createElement("div");
      tile.className = `tile ${isBlocked(x, y) ? "blocked" : "path"}`;
      tile.dataset.x = x;
      tile.dataset.y = y;
      elements.board.appendChild(tile);
    }
  }
}

function isBlocked(x, y) {
  return state.currentBlocked.some(([blockedX, blockedY]) => blockedX === x && blockedY === y);
}

function isInsideBoard(x, y) {
  return x >= 0 && y >= 0 && x < boardWidth && y < boardHeight;
}

function tileCenter(position) {
  const tile = elements.board.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
  const tileRect = tile.getBoundingClientRect();
  const mapRect = elements.board.parentElement.getBoundingClientRect();

  return {
    left: tileRect.left - mapRect.left + tileRect.width / 2,
    top: tileRect.top - mapRect.top + tileRect.height / 2,
  };
}

function placePiece(element, position) {
  const center = tileCenter(position);
  element.style.left = `${center.left}px`;
  element.style.top = `${center.top}px`;
}

function renderLevel() {
  const level = currentLevel();
  state.player = { ...level.start };
  state.currentBlocked = generateFreshBlocked(level, state.levelIndex);
  elements.themeBadge.textContent = level.theme;
  elements.themeBadge.style.background = themeColors[state.levelIndex];
  elements.levelTitle.textContent = level.title;
  elements.npcLine.textContent = level.npc;
  elements.levelNumber.textContent = `${state.levelIndex + 1}/5`;
  document.body.style.setProperty("--accent-2", themeColors[state.levelIndex]);
  buildBoard();
  renderHud();
  requestAnimationFrame(() => {
    placePiece(elements.avatar, state.player);
    placePiece(elements.treasure, level.chest);
  });
  showToast(`${level.theme}: Find the treasure chest.`);
}

function renderHud() {
  elements.score.textContent = state.score;
  elements.hintCount.textContent = state.hints;
  renderVocab();
  renderLeaderboard();
}

function renderVocab() {
  elements.vocabList.innerHTML = "";
  if (state.unlockedWords.length === 0) {
    const item = document.createElement("li");
    item.textContent = "เริ่มเดินทางเพื่อเก็บคำศัพท์แรก";
    elements.vocabList.appendChild(item);
    return;
  }
  state.unlockedWords.forEach((word) => {
    const item = document.createElement("li");
    item.textContent = word;
    elements.vocabList.appendChild(item);
  });
}

function move(direction) {
  if (state.quizOpen) return;
  const deltas = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };
  const delta = deltas[direction];
  if (!delta) return;

  const next = { x: state.player.x + delta.x, y: state.player.y + delta.y };
  if (!isInsideBoard(next.x, next.y) || isBlocked(next.x, next.y)) {
    state.score = Math.max(0, state.score - 1);
    renderHud();
    showToast("ทางตัน! ลองเปลี่ยนทิศทาง คะแนนลด 1");
    playTone(150, "sawtooth", 0.06);
    return;
  }

  state.player = next;
  placePiece(elements.avatar, state.player);
  elements.avatar.classList.add("bounce");
  window.setTimeout(() => elements.avatar.classList.remove("bounce"), 170);
  checkTreasure();
}

function checkTreasure() {
  const chest = currentLevel().chest;
  if (state.player.x === chest.x && state.player.y === chest.y) {
    state.quizOpen = true;
    playTreasureSound();
    openQuiz();
  }
}

function openQuiz() {
  const quiz = pickRandomQuiz();
  if (!quiz) {
    finishGame();
    return;
  }
  elements.questionText.textContent = quiz.question;
  elements.hintText.textContent = "";
  elements.answers.innerHTML = "";

  quiz.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(97 + index)}) ${choice}`;
    button.addEventListener("click", () => answerQuiz(index, button));
    elements.answers.appendChild(button);
  });

  elements.quizModal.classList.remove("hidden");
}

function answerQuiz(index, button) {
  const quiz = state.activeQuiz;
  if (!quiz) return;
  const buttons = [...elements.answers.querySelectorAll("button")];
  buttons.forEach((answerButton) => {
    answerButton.disabled = true;
  });

  if (index === quiz.answer) {
    button.classList.add("correct");
    state.score += 20;
    state.unlockedWords.push(quiz.unlock);
    renderHud();
    showToast(`Correct! +20 points. New word: ${quiz.word}`);
    playTone(660, "sine", 0.12);
    window.setTimeout(nextLevel, 900);
  } else {
    button.classList.add("wrong");
    buttons[quiz.answer].classList.add("correct");
    state.score = Math.max(0, state.score - 8);
    state.hints += 1;
    renderHud();
    elements.hintText.textContent = `ผิดนิดเดียว! ${quiz.hint} ได้ Hint เพิ่ม 1`;
    showToast("Wrong answer: -8 points, but you gained one hint.");
    playTone(210, "triangle", 0.13);
    window.setTimeout(() => {
      elements.quizModal.classList.add("hidden");
      state.quizOpen = false;
      state.activeQuiz = null;
      resetPlayerNearStart();
    }, 1800);
  }
}

function nextLevel() {
  elements.quizModal.classList.add("hidden");
  state.quizOpen = false;
  state.activeQuiz = null;

  if (state.levelIndex === levels.length - 1) {
    finishGame();
    return;
  }

  state.levelIndex += 1;
  renderLevel();
}

function resetPlayerNearStart() {
  state.player = { ...currentLevel().start };
  placePiece(elements.avatar, state.player);
}

function finishGame() {
  state.activeQuiz = null;
  state.quizOpen = false;
  elements.quizModal.classList.add("hidden");
  saveScore(state.score);
  elements.finishText.textContent = `คุณปลดล็อกสมบัติครบ 5 ด่าน ได้คะแนนรวม ${state.score} คะแนน และเรียนรู้คำศัพท์ใหม่ ${state.unlockedWords.length} คำ`;
  elements.finishModal.classList.remove("hidden");
  renderLeaderboard();
}

function useHint() {
  if (state.quizOpen) {
    elements.hintText.textContent = state.activeQuiz?.hint || "";
    return;
  }

  if (state.hints <= 0) {
    showToast("Hint หมดแล้ว หา treasure เพื่อตอบคำถามและรับโอกาสใหม่");
    return;
  }

  state.hints -= 1;
  renderHud();
  showToast(`Dictionary Magic: ยังเหลือคำถามใหม่ ${availableQuestions().length} ข้อในคลัง`);
  playTone(520, "sine", 0.1);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

function playTone(frequency, type = "sine", duration = 0.08) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.045, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

function playTreasureSound() {
  [440, 554, 659].forEach((note, index) => {
    window.setTimeout(() => playTone(note, "sine", 0.09), index * 95);
  });
}

function getScores() {
  try {
    return JSON.parse(localStorage.getItem("treasureEnglishScores") || "[]");
  } catch {
    return [];
  }
}

function saveScore(score) {
  const scores = getScores();
  scores.push({
    name: "Explorer",
    score,
    date: new Date().toLocaleDateString("th-TH"),
  });
  const topScores = scores.sort((a, b) => b.score - a.score).slice(0, 5);
  localStorage.setItem("treasureEnglishScores", JSON.stringify(topScores));
}

function renderLeaderboard() {
  const scores = getScores();
  elements.leaderboardList.innerHTML = "";
  if (scores.length === 0) {
    const item = document.createElement("li");
    item.textContent = "ยังไม่มีคะแนนสูงสุด";
    elements.leaderboardList.appendChild(item);
    return;
  }
  scores.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = `${entry.name}: ${entry.score} pts`;
    elements.leaderboardList.appendChild(item);
  });
}

function restartGame() {
  state.levelIndex = 0;
  state.player = { ...levels[0].start };
  state.score = 0;
  state.hints = 2;
  state.unlockedWords = [];
  state.usedQuestionIds = [];
  state.activeQuiz = null;
  state.quizOpen = false;
  elements.quizModal.classList.add("hidden");
  elements.finishModal.classList.add("hidden");
  renderLevel();
}

document.addEventListener("keydown", (event) => {
  const keyMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
  };
  if (keyMap[event.key]) {
    event.preventDefault();
    move(keyMap[event.key]);
  }
});

document.querySelectorAll(".control-btn").forEach((button) => {
  button.addEventListener("click", () => move(button.dataset.move));
});

elements.avatar.addEventListener("click", () => {
  showToast("Hi! Use arrow keys or the buttons below to guide me.");
  playTone(480, "sine", 0.08);
});

elements.avatar.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    elements.avatar.click();
  }
});

elements.hintButton.addEventListener("click", useHint);
elements.restartButton.addEventListener("click", restartGame);
elements.playAgainButton.addEventListener("click", restartGame);
window.addEventListener("resize", () => {
  placePiece(elements.avatar, state.player);
  placePiece(elements.treasure, currentLevel().chest);
});

renderLevel();
