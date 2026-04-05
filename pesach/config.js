// ============================================================
// MATZAH-KERS CONFIG — Pesach Edition
// ============================================================
// To edit default cards, find the card below and update:
//   title  — the card title (keep it short, 1-5 words)
//   cat    — must be one of the categories listed above
//   pts    — difficulty: 1 = Easy, 2 = Medium, 3 = Hard
//   desc   — the description shown on the card (1-3 sentences)
//
// To ADD a card: copy any block, give it a unique id, fill in fields.
// To REMOVE a card: delete the whole { ... }, block.
// Leave type/img/imgPrompt/culled as-is unless you know what you're doing.
// ============================================================

window.FESTIVAL_CONFIG = {
  id: 'pesach',
  name: 'Matzah-kers',
  subtitle: 'Pesach Edition',
  emoji: '🍷',
  categories: ['People', 'Objects', 'Phrases', 'Fun'],
  categoryLabels: {
    'People': 'PEOPLE',
    'Objects': 'OBJECTS & SEDER',
    'Phrases': 'PHRASES & CONCEPTS',
    'Fun': 'FUN & SILLY'
  },
  categoryColors: {
    'People': '#27ae60',
    'Objects': '#e67e22',
    'Phrases': '#2b7bb9',
    'Fun': '#8e44ad'
  },
  categoryClasses: {
    'People': 'cat-people',
    'Objects': 'cat-objects',
    'Phrases': 'cat-phrases',
    'Fun': 'cat-fun'
  },
  cardBackImage: 'Matzah-kers-background.png',
  themeColors: {
    gold: '#c8962a',
    goldLight: '#e8b84b',
    headerBg: '#1a1a2e'
  },
  storagePrefix: 'matzahkers',
  defaultCards: [

    // ===== PEOPLE =====

    { id: 1, title: "Moshe Rabbeinu", cat: "People", pts: 1,
      desc: "The greatest prophet in Jewish history, who led the Israelites out of Egyptian slavery. He received the Torah at Sinai and is the central figure of the Pesach story — yet his name appears only once in the Haggadah.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 2, title: "Pharaoh", cat: "People", pts: 1,
      desc: "The king of ancient Egypt whose repeated refusal to free the Israelites brought ten devastating acts upon his kingdom. His declaration — 'Who is Hashem that I should listen to Him?' — opens the Exodus narrative.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 3, title: "Miriam HaNeviah", cat: "People", pts: 1,
      desc: "The prophetess and sister of Moshe who watched over him as an infant on the Nile. After the sea was divided, she led the women in song and dance with tambourines — one of the most celebrated moments in the Exodus.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 4, title: "Yocheved", cat: "People", pts: 2,
      desc: "The mother of Moshe, Aharon, and Miriam. When Pharaoh decreed all newborn Hebrew boys be drowned, she placed infant Moshe in a waterproofed basket on the Nile and saved his life.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 5, title: "Nachshon ben Aminadav", cat: "People", pts: 3,
      desc: "Prince of the tribe of Yehudah who, according to the Midrash, jumped into the Red Sea before it split — wading in up to his nose until the waters parted. The definitive symbol of faith in action.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 6, title: "Batya (Bityah)", cat: "People", pts: 3,
      desc: "Pharaoh's daughter who drew infant Moshe from the Nile and raised him in the royal palace. Her name — meaning 'daughter of God' — was given by Hashem as a divine reward for her compassion.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 7, title: "Aharon HaKohen", cat: "People", pts: 1,
      desc: "Moshe's older brother and the first Kohen Gadol. Appointed as Moshe's spokesman before Pharaoh, he performed several of the devastating acts and became the ancestor of all kohanim throughout history.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 8, title: "Rabban Gamliel", cat: "People", pts: 2,
      desc: "The Nasi of the Sanhedrin who ruled that every person at the Seder must explain Pesach, matzah, and maror — or has not fulfilled the obligation. His ruling is central to the Haggadah's Maggid section.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 9, title: "Rabbi Akiva", cat: "People", pts: 2,
      desc: "One of the greatest Tannaim, present at the all-night Seder in Bnei Brak. He taught that love of one's neighbour is the foundational principle of the Torah. Ultimately martyred by the Romans.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 10, title: "Elazar ben Azaryah", cat: "People", pts: 3,
      desc: "The Tanna who could not resolve whether the Exodus must be mentioned at night — until a drashah settled it. Appointed head of the Sanhedrin at a young age, he famously said he was 'like a man of seventy.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 11, title: "Zipporah", cat: "People", pts: 2,
      desc: "Moshe's wife and daughter of Yitro. She plays a crucial, enigmatic role at a wayside inn where she circumcises their son, seemingly saving Moshe's life from a divine threat on the journey back to Egypt.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 12, title: "Yitro", cat: "People", pts: 2,
      desc: "Moshe's father-in-law, a Midianite priest. He sheltered Moshe after he fled Egypt and later advised him to delegate judicial authority — perhaps the Torah's first management consultant.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 51, title: "The Splitting of the Sea", cat: "People", pts: 1,
      desc: "The miraculous dividing of the Yam Suf as the Israelites fled Egypt. The Midrash teaches twelve separate paths opened — one for each tribe — with walls of water transparent as glass.",
      type: "picture", img: null, imgPrompt: "", culled: false },

    { id: 52, title: "The Burning Bush", cat: "People", pts: 2,
      desc: "The site where Hashem first spoke to the great leader at Har Chorev and commanded him to return to Egypt. The shrub was aflame but was not consumed — a symbol of the Jewish people persisting through every persecution.",
      type: "picture", img: null, imgPrompt: "", culled: false },

    { id: 59, title: "The Wicked Son", cat: "People", pts: 1,
      desc: "One of the Haggadah's four children. He asks 'What is this service to you?' — excluding himself. The Haggadah's suggested response — blunt his teeth — has launched a thousand sermons on inclusive parenting.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 60, title: "The Son Who Doesn't Know How to Ask", cat: "People", pts: 2,
      desc: "The fourth child of the Haggadah. Silent, possibly confused, possibly just done. The instruction is simply to open the conversation for him — a surprisingly modern pedagogical insight from a 2,000-year-old text.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 71, title: "Moshe's Speech Impediment", cat: "People", pts: 3,
      desc: "Moshe tells God he is 'heavy of mouth and heavy of tongue.' Various Midrashim explain: he burned his tongue on hot coals as a child, testing Pharaoh's suspicion. God's solution: your brother Aharon will speak for you.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 72, title: "Shifra and Puah", cat: "People", pts: 3,
      desc: "The two Hebrew midwives who defied Pharaoh's decree to kill newborn boys. When questioned, they claimed Hebrew women gave birth too quickly for them to arrive. History's first recorded act of civil disobedience.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 78, title: "Eliyahu HaNavi", cat: "People", pts: 1,
      desc: "The great figure who never died but ascended to heaven in a chariot of fire. He visits every Seder, every brit milah, and will herald the Messiah. The busiest personality in Jewish tradition.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 97, title: "The Simple Son", cat: "People", pts: 1,
      desc: "The third of the Haggadah's four children. He asks directly: 'What is this?' The answer is equally direct: 'With a strong hand God took us out of Egypt.' Sometimes the most straightforward question gets the best answer.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 103, title: "Dasan & Aviram", cat: "People", pts: 3,
      desc: "The two Israelites who constantly opposed Moshe's leadership. They quarreled, informed on him to Pharaoh, complained about the manna, and joined Korach's rebellion. The original contrarians.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 104, title: "Calev ben Yefuneh", cat: "People", pts: 3,
      desc: "One of only two people from the generation of the Exodus to enter the Land of Israel. He stood firm when the other scouts gave a negative report, declaring 'We can surely go up and take possession of it.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 105, title: "Eldad & Meidad", cat: "People", pts: 3,
      desc: "Two elders who prophesied in the camp rather than at the Tent of Meeting. When Yehoshua wanted Moshe to stop them, Moshe famously replied, 'Would that all of Hashem's people were prophets!'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 106, title: "The Erev Rav", cat: "People", pts: 3,
      desc: "The 'mixed multitude' of non-Israelites who joined the Exodus. Tradition blames them for instigating the Golden Calf. Their status — sincere converts or opportunistic tagalongs — remains debated.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== OBJECTS & SEDER =====

    { id: 13, title: "Afikoman", cat: "Objects", pts: 1,
      desc: "The piece of matzah hidden at the start of the Seder and held ransom by children for a prize. Nothing may be eaten after it, ensuring it is the last taste of the night. Its etymology remains debated by scholars.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 14, title: "Maror", cat: "Objects", pts: 1,
      desc: "Eaten at the Seder to recall the harshness of Egyptian slavery. Romaine lettuce or horseradish are most common. Listed in the Torah alongside the Pesach offering as a required element.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 15, title: "Charoset", cat: "Objects", pts: 1,
      desc: "A sweet paste of fruits, nuts, and wine representing the building material used by Jewish slaves. Ashkenazic versions use apples and walnuts; Sephardic versions often include dates, figs, and spices.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 16, title: "Karpas", cat: "Objects", pts: 2,
      desc: "A vegetable — often a potato — dipped in salty water at the start of the Seder. The salty water represents tears of slavery. The act of dipping prompts one of the Mah Nishtanah questions.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 17, title: "Zeroa", cat: "Objects", pts: 2,
      desc: "A roasted limb placed on the Seder's ceremonial dish, recalling the Korban Pesach. It is not eaten but serves as a visual symbol. Vegetarians sometimes substitute a roasted beet.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 18, title: "Beitzah", cat: "Objects", pts: 2,
      desc: "A roasted or hard-boiled item on the Seder's ceremonial dish, symbolising the festival offering brought to the Temple. Some interpret it as a symbol of mourning for the Temple's destruction.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 19, title: "Ke'arah", cat: "Objects", pts: 2,
      desc: "The Seder plate itself, holding six symbolic items: zeroa, beitzah, maror, charoset, karpas, and chazeret. Its arrangement is debated by kabbalists; the Arizal's layout is most widely followed.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 20, title: "Kos Eliyahu", cat: "Objects", pts: 1,
      desc: "A fifth vessel of wine filled but not drunk, left for the great prophet. The door is opened during Shfoch Chamatcha. Its origin lies in an unresolved Talmudic debate about whether five servings are required.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 21, title: "Matzah Shmurah", cat: "Objects", pts: 2,
      desc: "A specially supervised flatbread protected from harvest (or kneading) against contact with water that could cause rising. Many Ashkenazim use round hand-made varieties specifically for the Seder mitzvah.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 22, title: "Staff of Moshe", cat: "Objects", pts: 2,
      desc: "The miraculous wooden rod used by the great leader and his brother to bring the ten devastating acts and part the Red Sea. The Mishna in Avot lists it among items created on the eve of the first Shabbat at twilight.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 23, title: "Korech", cat: "Objects", pts: 3,
      desc: "The Hillel combination — unleavened flatbread and bitter vegetable eaten together — based on Hillel's practice of fulfilling the verse 'with unleavened bread and bitterness they shall eat it' in its most literal sense.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 53, title: "The Seder Plate", cat: "Objects", pts: 1,
      desc: "The ceremonial dish holding six symbolic foods: a roasted limb, a roasted item, a bitter vegetable, a sweet paste, a dipped vegetable, and chazeret. Its arrangement follows kabbalistic traditions, most famously that of the Arizal.",
      type: "picture", img: null, imgPrompt: "", culled: false },

    { id: 67, title: "Dam — Blood", cat: "Objects", pts: 1,
      desc: "The first of the devastating acts. The Nile and all waters turned red. The aquatic life perished, the water was undrinkable, and the Egyptians had to dig around the river for fresh water. Pharaoh, unmoved, went back inside.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 68, title: "Tzfardea — Frogs", cat: "Objects", pts: 1,
      desc: "The second of the devastating acts. The Torah says 'the amphibian came up' — singular. The Midrash debates: was it one enormous creature, or one that multiplied when struck? Either way, they were everywhere.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 69, title: "Choshech — Darkness", cat: "Objects", pts: 2,
      desc: "The ninth of the devastating acts. A gloom so thick it was tangible — the Midrash says Egyptians could not move. Meanwhile, the Israelites had light in their dwellings. Lasted three days.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 82, title: "The Four Cups of Wine", cat: "Objects", pts: 1,
      desc: "Corresponding to expressions of deliverance, these must be drunk while reclining. By the third serving, most participants are reclining involuntarily. By the final one, the hymns become noticeably more enthusiastic.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 86, title: "Miriam's Well", cat: "Objects", pts: 3,
      desc: "A miraculous source of water that, according to the Talmud, accompanied the Israelites through the desert in a certain prophetess's merit. When she died, it vanished and the people thirsted.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 93, title: "Pharaoh's Chariots", cat: "Objects", pts: 2,
      desc: "Six hundred elite horse-drawn vehicles plus the entire Egyptian army, deployed to recapture the Israelites. All swallowed by the waters. The Midrash says the Egyptians' own horses refused to enter but were compelled.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 96, title: "Gefilte Fish", cat: "Objects", pts: 1,
      desc: "A ground seafood preparation served at Ashkenazi Seders, available in the homemade or jarred varieties. The jarred version sits in a jelly whose origin nobody questions. Opinions are strongly held and never revised.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 98, title: "Yachatz — Breaking the Middle Matzah", cat: "Objects", pts: 2,
      desc: "The moment early in the Seder when the leader snaps the centre of three flat supervised breads, wraps the larger piece as the afikoman, and attempts to hide it without the children noticing. The children always notice.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 112, title: "Tzafun", cat: "Objects", pts: 2,
      desc: "The step in the Seder when the hidden piece of matzah is retrieved and eaten as dessert. Its name means 'hidden,' and its recovery can involve extensive negotiation with whichever child has it.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 115, title: "Blood on the Doorposts", cat: "Objects", pts: 2,
      desc: "The sign placed by the Israelites on the night of the final plague so their homes would be passed over. It is the origin of the holiday's English name and one of the Torah's most vivid images.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 117, title: "Korban Pesach", cat: "Objects", pts: 2,
      desc: "The lamb or goat offering brought on the 14th of Nisan and eaten that night with matzah and bitter herbs. It had to be consumed in groups, roasted whole, and none could remain until morning.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== PHRASES & CONCEPTS =====

    { id: 24, title: "Dayenu", cat: "Phrases", pts: 1,
      desc: "The beloved Seder hymn listing fifteen acts of divine kindness during the Exodus, each declared sufficient on its own. Its structure teaches gratitude for every individual blessing.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 25, title: "Mah Nishtanah", cat: "Phrases", pts: 1,
      desc: "The opening questions asked by the youngest child at the Seder, designed to prompt the telling of the Exodus story. The Talmud rules even two scholars must ask each other.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 26, title: "Ha Lachma Anya", cat: "Phrases", pts: 2,
      desc: "The Aramaic declaration opening Maggid, inviting all who are in need to come and eat. Its use of Aramaic is debated; one view is it was said so the angels would not understand and object.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 27, title: "B'chol Dor VaDor", cat: "Phrases", pts: 2,
      desc: "'In every generation' — the obligation for each person at the Seder to personally identify with the Exodus, as if they themselves left Egypt. Derived from the verse 'you shall tell your child on that day.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 28, title: "Avadim Hayinu", cat: "Phrases", pts: 1,
      desc: "The opening of the main Haggadah narrative. Per Rav in the Talmud, beginning with shame before praise is the correct structure for the retelling of the departure from servitude.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 29, title: "Vehi She'amda", cat: "Phrases", pts: 2,
      desc: "'And this is what has stood for our fathers' — declaring that in every generation enemies rise to destroy the Jewish people, yet God saves them. Often the moment the Seder falls into quiet reflection.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 30, title: "L'Shanah Haba'ah biYerushalayim", cat: "Phrases", pts: 1,
      desc: "'Next year in Jerusalem' — the closing declaration of the Seder, expressing hope for redemption. Also said at the end of Yom Kippur. Those in Jerusalem say 'Next year in the rebuilt Jerusalem.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 31, title: "Eser HaMakkot", cat: "Phrases", pts: 1,
      desc: "The Ten Plagues — blood, frogs, lice, wild animals, pestilence, boils, hail, locusts, darkness, and death of the firstborn. A drop of wine is removed at the Seder for each one, reducing joy at others' suffering.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 32, title: "Sippur Yetziat Mitzrayim", cat: "Phrases", pts: 2,
      desc: "The Torah obligation to recount the departure from servitude on Pesach night. The Rambam rules it applies even alone. The more one expands the narrative, the more praiseworthy.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 33, title: "Leil Shimurim", cat: "Phrases", pts: 3,
      desc: "The Torah's description of the Exodus evening (Shemot 12:42). The Midrash teaches it is also a time of divine safeguarding, which is why no Shema al HaMita is recited on Seder evening.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 34, title: "Arba Leshonot Geulah", cat: "Phrases", pts: 3,
      desc: "The expressions of deliverance in Shemot 6:6-7 — 'I will take you out, save you, restore you, take you as My people' — the source for the vessels of wine consumed at the Seder.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 58, title: "Pharaoh's Hardened Heart", cat: "Phrases", pts: 2,
      desc: "The theological puzzle at the centre of the Exodus. God stiffens Pharaoh's resolve — raising the question of free will that has occupied commentators for millennia and undergraduates for a single essay.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 64, title: "Dipping Twice", cat: "Phrases", pts: 1,
      desc: "On all other nights we don't even submerge once — but tonight, we do it two times. The first (vegetable in salty water) prompts the Mah Nishtanah. The second (bitter vegetable in sweet paste) provides sweet relief.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 80, title: "Betzet Yisrael MiMitzrayim", cat: "Phrases", pts: 2,
      desc: "'When Israel went out of Egypt' — the opening of Hallel's Psalm 114. The sea saw and fled, the Jordan turned back, the mountains skipped like rams. One of the most vivid poems in all of Tanach.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 81, title: "Kol Dichfin", cat: "Phrases", pts: 3,
      desc: "'All who are hungry, come and eat' — the Aramaic invitation at the start of Maggid. Technically issued after the door is already closed and the guests are already seated. The Talmud notes the irony.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 91, title: "Acharon Shel Pesach", cat: "Phrases", pts: 2,
      desc: "The final day of the holiday, when the parting of the waters is read. For many, it marks the beginning of the countdown to leavened goods. A certain Italian-style food shop reports a surge in orders approximately 45 seconds after nightfall.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 95, title: "Counting the Omer", cat: "Phrases", pts: 2,
      desc: "The 49-day tally from Pesach to Shavuot, beginning on the second evening. Most people remember for approximately 11 days before forgetting one evening. A spiritual marathon with a high dropout rate.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 100, title: "Arami Oved Avi", cat: "Phrases", pts: 3,
      desc: "The passage from Devarim that forms the backbone of the Maggid section. The Haggadah unpacks it word by word in a textual analysis so thorough it would satisfy a doctoral committee.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 107, title: "Hallel", cat: "Phrases", pts: 1,
      desc: "The collection of psalms of praise recited on festivals. On Seder night it is split: half before the meal, half after. The Talmud records that the Levites sang it while the Pesach offering was being prepared.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 110, title: "Ma Nishtana", cat: "Phrases", pts: 1,
      desc: "The youngest child's recitation of four contrasts between this evening and all others. Its melody is among the most recognised in Jewish liturgy. Stage fright at age four is a rite of passage.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 111, title: "Heseiba", cat: "Phrases", pts: 2,
      desc: "The practice of leaning at the Seder table as a symbol of aristocratic freedom. In ancient times the wealthy reclined on couches; today we lean on pillows, often precariously.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 114, title: "Maggid", cat: "Phrases", pts: 1,
      desc: "The longest section of the Seder — the retelling of the Exodus story. It moves from shame to praise, includes the Four Questions, and is meant to feel as if one personally experienced the liberation.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 116, title: "Leaving in Haste", cat: "Phrases", pts: 1,
      desc: "The Israelites departed so quickly that their dough had no time to rise — the reason we eat matzah. The Torah emphasises the urgency: they were driven out and could not delay.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 119, title: "Splitting of the Sea", cat: "Phrases", pts: 1,
      desc: "The miracle that allowed Bnei Yisrael to escape the Egyptian army.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== FUN & SILLY =====

    { id: 35, title: "The Afikoman Ransom", cat: "Fun", pts: 1,
      desc: "The Seder's annual hostage negotiation, in which children who have stolen the hidden matzah refuse to return it until adults agree to their demands. Prizes promised under duress have historically included bicycles.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 36, title: "Falling Asleep Before Nirtzah", cat: "Fun", pts: 1,
      desc: "The near-universal Seder experience in which at least one participant loses consciousness somewhere between Shulchan Orech and Hallel, only to wake up insisting they were simply resting their eyes.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 37, title: "Chad Gadya", cat: "Fun", pts: 1,
      desc: "The cumulative nursery rhyme about a young animal purchased for two coins, set upon by ever-more-powerful forces. Kabbalists interpret it as an allegory for all of world history leading to the Messianic era.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 38, title: "Echad Mi Yodea", cat: "Fun", pts: 1,
      desc: "'Who Knows One?' — the counting song racing through Jewish numbers from one to thirteen. Tests memory, lung capacity, and exactly how fast the leader can sing by the time verse thirteen arrives.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 39, title: "The Seder That Goes Too Long", cat: "Fun", pts: 1,
      desc: "A recurring phenomenon in which the host's commitment to a 'full Haggadah' collides with guests' biological needs and the soup cooling. Distinguished by how many people checked their watches during Maggid.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 40, title: "Kitniyot Wars", cat: "Fun", pts: 2,
      desc: "The annual Ashkenazic-Sephardic diplomatic incident in which certain grains and legume-adjacent foods become flashpoints. A committee of Ashkenazic Rabbis technically permitted them in 2016 — a ruling ignored by most grandmothers.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 41, title: "Bedikat Chametz", cat: "Fun", pts: 2,
      desc: "The ceremonial hunt for forbidden crumbs by candlelight with a feather and wooden spoon — a combination seemingly designed by someone who enjoyed both ancient tradition and a mild but present fire hazard.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 42, title: "The Bitter Herb Eating Contest", cat: "Fun", pts: 1,
      desc: "An unofficial Seder competition — unrecorded in the Shulchan Aruch — in which participants attempt to eat an heroic amount of freshly grated horseradish without visible tears. Points deducted for reaching for wine.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 43, title: "Reclining to the Left", cat: "Fun", pts: 2,
      desc: "The halachic requirement to lean in a specific direction while eating and drinking at the Seder as a sign of freedom. In practice, this is performed via a right-angle tilt using a cushion borrowed from the living room sofa.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 44, title: "Ten Plagues Finger Dip", cat: "Fun", pts: 1,
      desc: "The custom of removing a drop of wine for each of the devastating acts visited upon Egypt, symbolising diminished joy at others' suffering. The only moment at most Seders when red wine reliably ends up on the white tablecloth.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 45, title: "Elijah's Cup Left Untouched", cat: "Fun", pts: 1,
      desc: "The annual Seder debate over whether the wine level dropped slightly after the door was opened. Families divide: the faithful (definitely lower), the sceptics (physics), and those too full to engage.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 46, title: "Selling Chametz", cat: "Fun", pts: 2,
      desc: "The legal transaction in which forbidden grain products are sold to a non-Jew before the holiday and repurchased after. Performed via a rabbi's power of attorney, it may be the world's most universally anticipated contractual reversal.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 47, title: "Matzah Ball Density Dispute", cat: "Fun", pts: 1,
      desc: "The fiercely contested debate between the floaty dumpling (light, airy, achieved through beaten whites) and the sinker (dense, heavy). The correct position is a matter of family inheritance. Marriages have been tested.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 48, title: "The Haggadah Collector", cat: "Fun", pts: 3,
      desc: "A fixture at some Seders: the uncle with seventeen Haggadot stacked at his place, cross-referencing at every paragraph. Associated with Seders ending at 2am and soup that has long achieved room temperature.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 49, title: "Biur Chametz", cat: "Fun", pts: 2,
      desc: "The incineration of forbidden grain products on the morning before Pesach — one of the rare halachic obligations fulfilled with actual fire. Children universally enjoy this mitzvah. Local fire codes have a complicated relationship with it.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 50, title: "Shir HaShirim at the Seder", cat: "Fun", pts: 3,
      desc: "The custom of reading Shlomo's romantic poetry on Pesach, whose overt themes are reinterpreted as an allegory for God and Israel — a reframing that reliably confuses first-time readers.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 54, title: "The Ten Plagues", cat: "Fun", pts: 1,
      desc: "The devastating acts visited upon Egypt: river of red, amphibians, lice, wild animals, pestilence, boils, hail, locusts, impenetrable gloom, and death of the firstborn. A drop of wine is spilled at the Seder for each one.",
      type: "picture", img: null, imgPrompt: "", culled: false },

    { id: 55, title: "The Fifth Son", cat: "Fun", pts: 3,
      desc: "The hypothetical child who didn't make it into the Haggadah. Variously identified as the one who left, the one on their phone, or the one who showed up late and is still eating soup during Hallel.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 56, title: "Pesach Hotel Guest", cat: "Fun", pts: 2,
      desc: "A species found annually in Miami, Cancun, and various Alpine resorts. Distinguished by the all-inclusive wristband, the afternoon tea-room complaint, and the confident assertion that the program is not as good as last year.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 57, title: "The Gebrokts Truther", cat: "Fun", pts: 3,
      desc: "A person who will not allow matzah to touch liquid under any circumstances — including soup, saliva, and ambient humidity. Can spot a matzah ball from across the room and will make their feelings known.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 61, title: "Cleaning Behind the Fridge", cat: "Fun", pts: 1,
      desc: "The annual Pesach scrubbing ritual that somehow escalates from 'removing leavened crumbs' to 'pulling out every appliance and confronting remnants from a geological era.' Often reveals objects thought permanently lost.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 62, title: "Matzah Dust Everywhere", cat: "Fun", pts: 1,
      desc: "The fine particulate residue that coats every surface, pocket, and keyboard within 24 hours of Pesach beginning. Scientists have yet to explain how it penetrates sealed containers. It persists until Shavuot.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 63, title: "The Cousin Who Brings Kitniyot", cat: "Fun", pts: 2,
      desc: "A Sephardi relative who arrives at the Ashkenazi Seder with a grain-based side dish, producing a brief constitutional crisis. Resolution depends entirely on whose grandmother is present and how recently she was consulted.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 65, title: "Pesach Shopping List", cat: "Fun", pts: 2,
      desc: "A document of extraordinary length and cost, featuring seven types of Pesachdik oil, four brands of potato starch, and the quiet resignation of whoever is holding the receipt.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 66, title: "The Matzah Cemented to the Oven", cat: "Fun", pts: 1,
      desc: "The inevitable outcome of reheating shmurah flatbread. It bonds to the rack at a molecular level, creating an archaeological artifact that requires tools to remove. Some families simply buy a new rack.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 70, title: "The 11th Plague: Pesach Prices", cat: "Fun", pts: 1,
      desc: "An unofficial addition to the Haggadah. Manifests annually in the kosher-for-holiday aisle, where a box of cake meal costs roughly what a family sedan did in 1987.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 73, title: "The Person Reading Every Commentary", cat: "Fun", pts: 2,
      desc: "An individual at the Seder table who insists on sharing insights from Abarbanel, the Vilna Gaon, and a podcast they heard last week. Unaware the children left the table 20 minutes ago.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 74, title: "Leaning the Wrong Way", cat: "Fun", pts: 1,
      desc: "The moment someone leans right instead of left during the four cups, triggering a brief halachic intervention from across the table. The intervener has been waiting all year for this opportunity.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 75, title: "The Haggadah with Transliteration", cat: "Fun", pts: 2,
      desc: "A text with phonetic English rendering of the Hebrew, enabling full participation by guests who cannot read Hebrew but can pronounce 'Baruch' as 'Ba-ROOKH' with impressive confidence.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 76, title: "Dayenu — But Was It Actually Enough?", cat: "Fun", pts: 2,
      desc: "The philosophical tension at the heart of a beloved Seder hymn: 'If He had brought us to Sinai but not given us the Torah — it would have been sufficient.' Really? The hymn teaches gratitude. The footnotes teach theology.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 77, title: "Matzah Pizza", cat: "Fun", pts: 1,
      desc: "The holiday culinary innovation of putting sauce and cheese on flat supervised bread and calling it a classic Italian dish. Structurally it is a cracker with toppings. It shatters on the first bite.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 79, title: "The Dog That Ate the Chametz", cat: "Fun", pts: 3,
      desc: "A classic halachic case study: if an animal eats forbidden crumbs you sold, who is liable? Also, the actual experience of a family pet discovering an unsupervised box of crackers approximately 90 seconds before the holiday begins.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 83, title: "The Pesach Kitchen Takeover", cat: "Fun", pts: 1,
      desc: "The annual transformation in which every surface is covered in foil, every utensil is swapped, and the food-prep area becomes an unrecognisable landscape. Someone immediately touches something.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 84, title: "The Uncle Arguing with the Haggadah", cat: "Fun", pts: 2,
      desc: "A recurring Seder character who disagrees with the text itself. 'Actually, the simple son isn't simple at all.' 'I think the wicked son makes a fair point.' Will not be hurried through Maggid.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 85, title: "Pesach Candy", cat: "Fun", pts: 1,
      desc: "A genre of confectionery defined primarily by what it cannot contain. The result: fruit jellies of uncertain provenance, coconut macaroons, and chocolate that tastes as if it is commemorating something.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 87, title: "Spilling Wine on the White Tablecloth", cat: "Fun", pts: 1,
      desc: "A Seder night certainty with a probability approaching 1.0. Usually occurs during the Ten Plagues recitation, adding an unplanned eleventh plague.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 88, title: "The Pesach Brisket", cat: "Fun", pts: 1,
      desc: "A cut of meat whose holiday preparation varies by family but whose emotional significance does not. Recipes are inherited, never written down, and always described as 'not as good as Bubby's.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 89, title: "Letting the Guests Read", cat: "Fun", pts: 1,
      desc: "The Seder leader's democratic gesture of assigning paragraphs around the table, producing a rich tapestry of reading speeds, pronunciation styles, and the inevitable moment when someone reads the wrong paragraph.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 90, title: "Kashering the Sink", cat: "Fun", pts: 2,
      desc: "The procedure of pouring boiling water over every surface of a basin to render it kosher for the holiday. Involves a large pot, an element of danger, and the distinct feeling that one is performing a chemistry experiment.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 92, title: "Stealing vs. Hiding the Afikoman", cat: "Fun", pts: 2,
      desc: "The great minhag divide: in some families the children steal it from the leader; in others, the leader hides it and children search. Both systems produce the same result: protracted negotiations.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 94, title: "The Baby Who Stays Up", cat: "Fun", pts: 1,
      desc: "A child under four who, against all laws of biology, remains alert through the entire Seder, sustained by grape juice, curiosity, and the specific energy that comes from being allowed to stay up far past bedtime.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 99, title: "The Post-Pesach Chametz Binge", cat: "Fun", pts: 1,
      desc: "The phenomenon occurring at the end of the holiday, when bread, pasta, and cereal are consumed with an intensity normally reserved for people who have been stranded.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 101, title: "The Magic Number", cat: "Fun", pts: 2,
      desc: "Everything at the Seder comes in multiples: three matzot, ten plagues, fifteen steps, and one very long night. The obsession with numbering is either deeply symbolic or evidence that the rabbis loved lists.",
      type: "text", img: null, imgPrompt: "", culled: false },

  ]
};
