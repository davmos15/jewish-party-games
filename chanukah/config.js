// ============================================================
// CHANNUKERS CONFIG — Chanukah Edition
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
  id: 'chanukah',
  name: 'Channukers',
  subtitle: 'Chanukah Edition',
  emoji: '🕎',
  categories: ['People', 'Objects & Symbols', 'Traditions & Customs', 'Fun & Silly'],
  categoryLabels: {
    'People': 'PEOPLE',
    'Objects & Symbols': 'OBJECTS & SYMBOLS',
    'Traditions & Customs': 'TRADITIONS & CUSTOMS',
    'Fun & Silly': 'FUN & SILLY'
  },
  categoryColors: {
    'People': '#2563b0',
    'Objects & Symbols': '#7c3aed',
    'Traditions & Customs': '#0891b2',
    'Fun & Silly': '#0f766e'
  },
  categoryClasses: {
    'People': 'cat-people',
    'Objects & Symbols': 'cat-objects',
    'Traditions & Customs': 'cat-torah',
    'Fun & Silly': 'cat-fun'
  },
  cardBackImage: null,
  themeColors: {
    gold: '#2563b0',
    goldLight: '#3b82f6',
    headerBg: '#0f172a'
  },
  storagePrefix: 'channukers',
  defaultCards: [

    // ===== PEOPLE (12 cards) =====

    { id: 1, title: "Judah Maccabee", cat: "People", pts: 1,
      desc: "The legendary warrior-priest known as 'the Hammer' who led a small band of Jewish rebels to a stunning victory against the mighty Syrian-Greek army. Without him, there is no Chanukah — and probably no dreidel.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 2, title: "Matityahu", cat: "People", pts: 2,
      desc: "Judah's father, the elderly priest from Modiin who started the whole rebellion. When a Jew stepped forward to sacrifice to idols, Matityahu struck him down and sparked the Maccabean revolt. Retirement plans: cancelled.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 3, title: "Antiochus IV Epiphanes", cat: "People", pts: 1,
      desc: "The Seleucid king who banned Torah study, Shabbat, and circumcision, desecrated the Temple with pig sacrifices, and gave himself the title 'God Manifest.' His own people called him Antiochus Epimanes — 'the Madman.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 4, title: "Judith", cat: "People", pts: 3,
      desc: "The Jewish heroine who fed an enemy general salty cheese until he was thirsty, plied him with wine until he passed out, then beheaded him. Some say the Chanukah dairy tradition honours her bravery. Ancient. Iconic.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 5, title: "Chana and Her Seven Sons", cat: "People", pts: 2,
      desc: "A mother and her seven sons who were each offered their lives if they would bow to an idol. Every single one refused, even the youngest. Their story is one of the defining acts of Jewish martyrdom in history.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 6, title: "Shimon Maccabee", cat: "People", pts: 3,
      desc: "Judah's brother who eventually became High Priest and ruler, founding the Hasmonean dynasty. He brought the Syrian garrison out of the Jerusalem citadel and established genuine Jewish independence. The family business, expanded.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 7, title: "Jonathan Maccabee", cat: "People", pts: 3,
      desc: "Another of Judah's brothers who succeeded him as military leader and became the first Hasmonean High Priest through cunning diplomacy. Proved that the Maccabees could negotiate as well as they could fight.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 8, title: "Adam Sandler", cat: "People", pts: 1,
      desc: "The comedian who in 1994 performed a simple SNL song listing famous Jewish celebrities and accidentally created the most-recognised Chanukah anthem of the modern era. Eight crazy nights, indeed.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 9, title: "Ross Geller", cat: "People", pts: 2,
      desc: "The Friends character who rented an armadillo costume because there were no Santas left, dressed as 'the Holiday Armadillo,' and somehow taught his son about the Maccabees. Peak Jewish dad energy.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 10, title: "The Maccabees", cat: "People", pts: 1,
      desc: "The priestly family from Modiin who led a guerrilla campaign against one of the ancient world's most powerful armies — and won. Their victory is why Jews around the world light candles every winter.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 11, title: "The Kohen Gadol", cat: "People", pts: 2,
      desc: "The High Priest whose sealed jug of pure olive oil was found in the desecrated Temple. With only enough for one day, the oil burned for eight — which is either a miracle or the best inventory management in history.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 12, title: "Elazar the Elephant Rider", cat: "People", pts: 3,
      desc: "Judah's brother who charged under an enemy war elephant, stabbed it from beneath to kill it, and was crushed by its falling body. The Talmud records his heroic death. He went out on a low note, but made his mark.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== OBJECTS & SYMBOLS (12 cards) =====

    { id: 13, title: "Chanukiah", cat: "Objects & Symbols", pts: 1,
      desc: "The nine-branched candelabra used on Chanukah — distinct from the Temple's seven-branched Menorah. Eight branches for the miracle, plus a shamash helper candle. It must be displayed publicly, ideally in a window.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 14, title: "Dreidel", cat: "Objects & Symbols", pts: 1,
      desc: "A four-sided spinning top with Hebrew letters: Nun, Gimel, Hey, Shin — 'A great miracle happened there.' Legend says Jews played with it to disguise Torah study from Greek soldiers. Now used mainly to win chocolate.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 15, title: "Hanukkah Gelt", cat: "Objects & Symbols", pts: 1,
      desc: "Gold foil-wrapped chocolate coins given to children on Chanukah. Historically, actual coins were given to reward Torah teachers. Today it fuels dreidel games and disappears at a rate that defies the eight-night schedule.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 16, title: "The Jug of Pure Oil", cat: "Objects & Symbols", pts: 1,
      desc: "The single sealed flask of ritually pure olive oil found in the Temple — enough to last one day. It burned for eight days instead. Whether you see it as divine miracle or a very efficient wick, it launched a holiday.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 17, title: "Shamash", cat: "Objects & Symbols", pts: 2,
      desc: "The helper candle on the chanukiah, used to light all the others and kept burning separately so the Chanukah lights themselves aren't used for regular illumination. The most hardworking candle of the season.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 18, title: "The Temple Menorah", cat: "Objects & Symbols", pts: 2,
      desc: "The seven-branched golden candelabra that stood in the Beit HaMikdash. When the Maccabees recaptured the Temple, it had been desecrated. The Chanukah miracle was restoring its light — which is why we light today.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 19, title: "Blue and Silver", cat: "Objects & Symbols", pts: 1,
      desc: "The iconic colour scheme of Chanukah decorations, drawn from the colours of the Israeli flag and Jewish tradition. Walk into any Jewish household in December and you'll find these colours competing with everyone else's red and green.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 20, title: "Star of David", cat: "Objects & Symbols", pts: 1,
      desc: "The six-pointed Jewish symbol that appears on Chanukah decorations, wrapping paper, and every 'Happy Hanukkah' greeting card. Origin debated by historians; adoption as a universal Jewish symbol is relatively recent.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 21, title: "The Beit HaMikdash", cat: "Objects & Symbols", pts: 2,
      desc: "The Holy Temple in Jerusalem whose rededication after the Maccabean victory is the entire reason for the holiday. 'Chanukah' literally means 'dedication' — it's a celebration of a building, not a battle.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 22, title: "Chanukah Wrapping Paper", cat: "Objects & Symbols", pts: 2,
      desc: "The distinctly blue-and-silver festive paper that appears in every gift shop in December, right next to the Christmas wrapping paper. A modern invention that would have baffled Judah Maccabee entirely.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 23, title: "The Dreydl Letters", cat: "Objects & Symbols", pts: 3,
      desc: "Nun, Gimel, Hey, Shin — in Israel the last letter is Pey (Poh, 'here'). Each letter is an acronym for 'a great miracle happened there/here.' They also dictate the rules of the dreidel game: nothing, all, half, put in.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 24, title: "The Talmudic Debate", cat: "Objects & Symbols", pts: 3,
      desc: "Beit Shammai said to start with eight candles and count down. Beit Hillel said to start with one and count up. We follow Beit Hillel — increasing in holiness, never decreasing. It's the founding argument of the holiday.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== TRADITIONS & CUSTOMS (11 cards) =====

    { id: 25, title: "Lighting the Chanukiah", cat: "Traditions & Customs", pts: 1,
      desc: "The central mitzvah of Chanukah: lighting one more candle each night for eight nights, after nightfall, with blessings. The chanukiah should be placed in a window or doorway to publicise the miracle. One flame at a time.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 26, title: "Latkes", cat: "Traditions & Customs", pts: 1,
      desc: "Crispy Ashkenazi potato pancakes fried in oil — the oil commemorating the Chanukah miracle. Served with sour cream or applesauce, the debate between these toppings is fiercer than anything the Maccabees faced.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 27, title: "Sufganiyot", cat: "Traditions & Customs", pts: 1,
      desc: "Israeli jelly doughnuts fried in oil and dusted with powdered sugar. The official food of Chanukah in Israel, where bakeries start selling them weeks in advance. A religious experience in powdered form.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 28, title: "Playing Dreidel", cat: "Traditions & Customs", pts: 1,
      desc: "The traditional Chanukah gambling game, played with a spinning top and a pot of gelt. Spin Nun — nothing happens. Gimel — take everything. Hey — take half. Shin — add to the pot. Rules simple; stakes surprisingly emotional.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 29, title: "Chanukah Gifts", cat: "Traditions & Customs", pts: 1,
      desc: "A tradition that grew dramatically in the 20th century, partly in response to the proximity of Christmas. In some families it's one gift per night; in others it escalates to full gift-exchange territory. The Maccabees are blameless.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 30, title: "Al HaNisim", cat: "Traditions & Customs", pts: 2,
      desc: "The prayer of thanks for the Chanukah miracles, inserted into the Amidah and Birkat HaMazon throughout the holiday. It recounts the victory of the few over the many — without even mentioning the oil.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 31, title: "Maoz Tzur", cat: "Traditions & Customs", pts: 2,
      desc: "'Rock of Ages' — the Ashkenazi hymn sung after candle-lighting. Written in medieval Germany, its five stanzas recount Jewish persecutions and redemptions from Egypt to Persia to the Chanukah story. The tune is extremely catchy.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 32, title: "Eating Fried Foods", cat: "Traditions & Customs", pts: 1,
      desc: "The entire point of Chanukah cuisine: oil. Latkes, sufganiyot, bimuelos — everything is fried in oil to commemorate the miracle of the oil that lasted eight days. Eight nights of guilt-free frying. Halacha says so.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 33, title: "Hallel", cat: "Traditions & Customs", pts: 2,
      desc: "The full Hallel is recited every day of Chanukah — an unusual distinction for a rabbinically-ordained holiday. It marks all eight days as equally joyous, unlike holidays where Hallel is abbreviated after the first day.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 34, title: "Bimuelos and Sfenj", cat: "Traditions & Customs", pts: 3,
      desc: "Sephardic and North African fried fritters served on Chanukah, drizzled with honey or syrup. The Sephardic equivalent of sufganiyot, they predate the modern jelly doughnut and are arguably superior. Arguments accepted.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 35, title: "Chag HaBanot", cat: "Traditions & Customs", pts: 3,
      desc: "The Festival of Daughters — a Yemenite and North African tradition held on Rosh Chodesh Tevet during Chanukah. Women and girls gather to sing, celebrate, and honour the heroines of the Chanukah story, especially Judith.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== FUN & SILLY (10 cards) =====

    { id: 36, title: "Chrismukkah", cat: "Fun & Silly", pts: 1,
      desc: "The portmanteau coined by Seth Cohen in The O.C. for families with one Jewish and one Christian parent. Blue-and-silver tinsel on a tree, latkes beside the stockings. Compromise never looked so festive.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 37, title: "The Chanukah Song", cat: "Fun & Silly", pts: 1,
      desc: "Adam Sandler's 1994 SNL sketch that listed famous Jewish celebrities to prove 'you're not alone.' It has been updated several times, is performed to a klezmer riff, and remains the anthem of every Jew who grew up near Christmas.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 38, title: "Eating All the Gelt at Once", cat: "Fun & Silly", pts: 1,
      desc: "The universal childhood experience of receiving eight nights' worth of chocolate coins and eating them all by night two. Portion control is a four-letter word when gold foil is involved.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 39, title: "Forgetting What Night It Is", cat: "Fun & Silly", pts: 1,
      desc: "By night four of eight, at least one family member cannot remember whether to light four or five candles without checking. The chanukiah exists partly to count for us. We still check our phones anyway.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 40, title: "The Hanukkah Bush", cat: "Fun & Silly", pts: 2,
      desc: "A small decorated tree that some secular Jewish households adopt in December, described as 'definitely not a Christmas tree.' It is a Christmas tree. The tinsel is blue. Everyone is doing their best.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 41, title: "Latke vs. Sufganiyah", cat: "Fun & Silly", pts: 2,
      desc: "The great Chanukah food debate: crispy Ashkenazi potato pancake or pillowy Israeli jelly doughnut? Ask at a Chanukah party and watch the room divide immediately. There is no neutral position on this.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 42, title: "Gift Inflation", cat: "Fun & Silly", pts: 2,
      desc: "The tradition started as one small gift per night. Somehow it became eight large gifts per night. Parents who started this in 1985 are now locked into an arms race they cannot escape. The Maccabees fought for freedom; this is its consequence.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 43, title: "The Dreidel Game Nobody Finishes", cat: "Fun & Silly", pts: 2,
      desc: "Every Chanukah party: someone suggests dreidel, everyone agrees enthusiastically, the game starts, someone wins all the gelt in two spins, and the whole thing is over in four minutes. A beloved tradition.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 44, title: "Explaining Chanukah to Coworkers", cat: "Fun & Silly", pts: 3,
      desc: "Every December, Jewish employees across the world explain that no, Chanukah is not 'Jewish Christmas,' yes it involves candles, no it's not the most important holiday, yes there is a song, no not that one, the other one.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 45, title: "The Wax That Gets Everywhere", cat: "Fun & Silly", pts: 2,
      desc: "You used the nice chanukiah this year. Now there is coloured wax embedded in the tablecloth, the windowsill, the floor, and somehow the ceiling. The miracle of Chanukah is that the candles stayed lit. The tragedy is what they dripped on.",
      type: "text", img: null, imgPrompt: "", culled: false },

  ]
};
