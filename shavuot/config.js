// ============================================================
// TORAH-KERS CONFIG — Shavuot Edition
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
  id: 'shavuot',
  name: 'Torah-kers',
  subtitle: 'Shavuot Edition',
  emoji: '📜',
  categories: ['People', 'Torah & Learning', 'Food & Customs', 'Fun & Silly'],
  categoryLabels: {
    'People': 'PEOPLE',
    'Torah & Learning': 'TORAH & LEARNING',
    'Food & Customs': 'FOOD & CUSTOMS',
    'Fun & Silly': 'FUN & SILLY'
  },
  categoryColors: {
    'People': '#27ae60',
    'Torah & Learning': '#2b7bb9',
    'Food & Customs': '#e67e22',
    'Fun & Silly': '#8e44ad'
  },
  categoryClasses: {
    'People': 'cat-people',
    'Torah & Learning': 'cat-torah',
    'Food & Customs': 'cat-food',
    'Fun & Silly': 'cat-fun'
  },
  cardBackImage: null,
  themeColors: {
    gold: '#4a9e5c',
    goldLight: '#6bc47d',
    headerBg: '#1a3a2e'
  },
  storagePrefix: 'torahkers',
  defaultCards: [

    // ===== PEOPLE (13 cards) =====

    { id: 1, title: "Moshe Rabbeinu", cat: "People", pts: 1,
      desc: "The greatest prophet who ever lived, who ascended Har Sinai to receive the Torah directly from Hashem. Spent 40 days and nights up there without food or water, which makes your Yom Kippur fast look like a light snack.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 2, title: "Ruth The Moavite", cat: "People", pts: 2,
      desc: "The ultimate convert whose story we read on Shavuot. Her famous declaration to Naomi — 'Where you go, I will go' — set the gold standard for loyalty and commitment to the Jewish people.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 3, title: "Naomi Returns Home", cat: "People", pts: 2,
      desc: "After losing her husband and two sons in Moav, Naomi returned to Beit Lechem bitter and broken. She told everyone to call her Mara, but her story was far from over — her daughter-in-law Ruth would change everything.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 4, title: "Boaz The Redeemer", cat: "People", pts: 2,
      desc: "The wealthy landowner of Beit Lechem who noticed Ruth gleaning in his fields and treated her with extraordinary kindness. He married Ruth and became the great-grandfather of King David. Proof that being a mensch pays off.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 5, title: "King David", cat: "People", pts: 1,
      desc: "Born and died on Shavuot according to tradition, making him the ultimate Shavuot baby. Descended from Ruth and Boaz, he authored Tehillim and established Yerushalayim as the eternal capital. Not bad for a shepherd boy.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 6, title: "Rabbi Akiva's Journey", cat: "People", pts: 3,
      desc: "Started learning Torah at age 40, completely illiterate, after watching water wear away stone. Became one of the greatest Torah scholars in history with 24,000 students. The original proof that it's never too late to start learning.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 7, title: "Yitro At Sinai", cat: "People", pts: 2,
      desc: "Moshe's father-in-law and a former idolatrous priest who heard about the miracles and came running to join the Jewish people. The parsha of Matan Torah bears his name, reminding us that the Torah was given for everyone.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 8, title: "Baby Moshe's Test", cat: "People", pts: 3,
      desc: "As an infant in Pharaoh's palace, Moshe reached for the king's crown, alarming the advisors. An angel guided his hand to the hot coal instead, burning his mouth and giving him a speech impediment — but saving his life. The original 'hot take.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 9, title: "Bnei Yisrael Together", cat: "People", pts: 3,
      desc: "The entire nation camped at Har Sinai 'as one person with one heart' — the Torah uses the singular form to describe their unity. Apparently the only time in Jewish history everyone agreed on something.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 10, title: "Shlomo HaMelech", cat: "People", pts: 3,
      desc: "King David's son, who built the Beit HaMikdash and authored Shir HaShirim, which is read as an allegory of Hashem's love for Israel. Traditionally, Shir HaShirim's themes of love and devotion connect deeply to the Shavuot covenant.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 11, title: "Orpah Turns Back", cat: "People", pts: 2,
      desc: "Naomi's other daughter-in-law who kissed her goodbye and returned to Moav, while Ruth clung on. According to the Midrash, she became the ancestor of Goliath — making the David vs. Goliath story a family affair.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 12, title: "Har Sinai Converts", cat: "People", pts: 3,
      desc: "According to tradition, the souls of all future converts were present at Sinai for the giving of the Torah. This is why we read Megillat Ruth on Shavuot — to honor those who choose to join the covenant.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 13, title: "The Kohanim's Role", cat: "People", pts: 2,
      desc: "On Shavuot in the Beit HaMikdash, the Kohanim performed special services including the offering of the Shtei HaLechem. They also blessed the people with Birkat Kohanim, a tradition that continues in shuls to this day.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== TORAH & LEARNING (13 cards) =====

    { id: 14, title: "Matan Torah", cat: "Torah & Learning", pts: 1,
      desc: "The main event — Hashem giving the Torah to Bnei Yisrael at Har Sinai, complete with thunder, lightning, shofar blasts, and a mountain held over their heads. The most dramatic book launch in history.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 15, title: "Aseret HaDibrot", cat: "Torah & Learning", pts: 1,
      desc: "The Ten Commandments, spoken by Hashem directly to the entire nation. We stand during their reading on Shavuot to relive the experience. Covers everything from belief in God to not coveting your neighbor's donkey.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 16, title: "Tikkun Leil Shavuot", cat: "Torah & Learning", pts: 1,
      desc: "The custom of staying up all night learning Torah on Shavuot eve. Established by the Arizal to rectify the fact that Bnei Yisrael overslept on the morning of Matan Torah. We've been compensating ever since.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 17, title: "Megillat Ruth", cat: "Torah & Learning", pts: 1,
      desc: "One of the five Megillot, read on Shavuot. It tells the story of loyalty, conversion, and redemption set during the harvest season. Also the source of every Jewish grandmother's favorite matchmaking advice.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 18, title: "Two Luchot HaBrit", cat: "Torah & Learning", pts: 2,
      desc: "The two stone tablets on which Hashem inscribed the Ten Commandments. The first set was smashed by Moshe when he saw the Golden Calf. The second set was carved by Moshe himself — the original 'second edition, revised.'",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 19, title: "Akdamut Poem", cat: "Torah & Learning", pts: 3,
      desc: "An Aramaic liturgical poem recited in Ashkenazi shuls before the Torah reading on Shavuot. Written by Rabbi Meir ben Yitzchak of Worms in the 11th century, it has 90 lines in a double alphabetical acrostic. Peak medieval poetry nerdery.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 20, title: "Yizkor On Shavuot", cat: "Torah & Learning", pts: 2,
      desc: "The memorial prayer service recited on the second day of Shavuot (and three other festivals). A solemn moment amid the celebration, connecting past generations to the eternal Torah they cherished.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 21, title: "Hallel With Bracha", cat: "Torah & Learning", pts: 1,
      desc: "The full Hallel is recited on both days of Shavuot with a blessing — unlike Pesach where it's abbreviated after the first day. Shavuot doesn't play favorites with its days of joy.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 22, title: "Torah Reading Selection", cat: "Torah & Learning", pts: 2,
      desc: "On the first day of Shavuot, we read the account of Matan Torah from Parshat Yitro. On the second day, we read from Re'eh about the Shalosh Regalim. The Haftarah features Yechezkel's vision of the Divine Chariot — no pressure.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 23, title: "Azharot Liturgy", cat: "Torah & Learning", pts: 3,
      desc: "Sephardi communities recite Azharot, poetic enumerations of all 613 mitzvot, on Shavuot. Because if you're celebrating receiving the Torah, you might as well review the entire syllabus.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 24, title: "Naaseh V'Nishma", cat: "Torah & Learning", pts: 2,
      desc: "The famous declaration 'We will do and we will hear' that Bnei Yisrael proclaimed at Sinai, agreeing to the Torah's commandments before even knowing what they were. History's most enthusiastic terms-of-service acceptance.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 25, title: "Sefirat HaOmer Link", cat: "Torah & Learning", pts: 2,
      desc: "The 49-day count from Pesach leads directly to Shavuot, connecting physical freedom to spiritual purpose. Each day is a step of refinement, like a spiritual countdown calendar — but without the chocolate.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 26, title: "Mountain Over Heads", cat: "Torah & Learning", pts: 3,
      desc: "The Talmud teaches that Hashem held Har Sinai over the people like an upside-down barrel, saying 'Accept the Torah or this will be your burial place.' The ultimate offer you can't refuse. The Gemara debates whether this was literal or metaphorical.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== FOOD & CUSTOMS (12 cards) =====

    { id: 27, title: "Classic Cheesecake", cat: "Food & Customs", pts: 1,
      desc: "The undisputed MVP of Shavuot desserts. Whether New York style, no-bake, or topped with fruit, every family has strong opinions about whose recipe is best. Wars have been fought over less.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 28, title: "Cheese Blintzes", cat: "Food & Customs", pts: 1,
      desc: "Delicate crepes filled with sweetened cheese and pan-fried to golden perfection. Traditionally served with sour cream or fruit compote. The Torah was rolled up in two scrolls like blintzes — or so the minhag claims.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 29, title: "Dairy Foods Tradition", cat: "Food & Customs", pts: 2,
      desc: "Multiple reasons are given for eating dairy on Shavuot: the Torah is compared to milk and honey, Bnei Yisrael didn't yet know the laws of shechita, and the gematria of 'chalav' equals 40. Pick your favorite explanation.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 30, title: "Greenery And Flowers", cat: "Food & Customs", pts: 1,
      desc: "Shuls and homes are decorated with plants and flowers on Shavuot, commemorating the greenery that miraculously sprouted on Har Sinai when the Torah was given. It's the one time your shul looks like a botanical garden.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 31, title: "All Night Learning", cat: "Food & Customs", pts: 3,
      desc: "Communities worldwide stay up the entire first night of Shavuot engaged in Torah study. Shiurim, chavruta sessions, and caffeine flow freely from sundown to sunrise. Sleep is for Sukkot.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 32, title: "Bikkurim First Fruits", cat: "Food & Customs", pts: 2,
      desc: "In Temple times, farmers brought their first fruits to the Beit HaMikdash starting on Shavuot. The seven species of Eretz Yisrael were carried in decorated baskets with great fanfare. The original farm-to-table experience.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 33, title: "Shtei HaLechem", cat: "Food & Customs", pts: 3,
      desc: "The Two Loaves of chametz bread offered in the Beit HaMikdash on Shavuot — the only chametz offering on the mizbeach all year. Made from the new wheat harvest, they were a thanksgiving for the grain season.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 34, title: "Sinai Covered In Grass", cat: "Food & Customs", pts: 2,
      desc: "Tradition holds that the normally barren Har Sinai bloomed with lush greenery when Hashem descended to give the Torah. This miracle is one reason we decorate with plants. Even the desert wanted to dress up for the occasion.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 35, title: "Honey And Torah", cat: "Food & Customs", pts: 2,
      desc: "The custom of eating honey on Shavuot comes from Shir HaShirim: 'Honey and milk are under your tongue.' Some have the tradition of giving children honey-coated letters when they start learning Torah, so Torah should always taste sweet.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 36, title: "Tikun Reading Booklet", cat: "Food & Customs", pts: 3,
      desc: "The Tikun Leil Shavuot booklet, compiled by kabbalists, contains selections from every parsha, Mishnah, and Zohar passage. It's designed as a spiritual sampler platter — a taste of every part of Torah in one epic night.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 37, title: "Second Day Shavuot", cat: "Food & Customs", pts: 3,
      desc: "Outside of Israel, Shavuot is celebrated for two days due to the historical uncertainty of the calendar. In Israel it's just one day, giving Israelis a legitimate reason to feel smug about their chag schedule.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 38, title: "Shavuot Flower Crowns", cat: "Food & Customs", pts: 2,
      desc: "In many communities, children make and wear flower crowns on Shavuot, symbolizing the crowns that the angels placed on each Jew's head when they said 'Naaseh V'Nishma.' Adorable and deeply meaningful.",
      type: "text", img: null, imgPrompt: "", culled: false },

    // ===== FUN & SILLY (12 cards) =====

    { id: 39, title: "Falling Asleep During Tikkun", cat: "Fun & Silly", pts: 1,
      desc: "You swore you'd make it through the whole night. You were doing great at midnight. By 2am the Gemara started getting blurry. By 3am you were using the Tikun booklet as a pillow. No judgement — even Bnei Yisrael overslept.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 40, title: "Cheesecake Competition", cat: "Fun & Silly", pts: 1,
      desc: "Every shul potluck becomes a covert cheesecake bake-off. There's the classic, the 'I added a twist,' the store-bought-pretending-to-be-homemade, and the one that's somehow still frozen in the middle. Everyone votes with their forks.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 41, title: "Coffee At Four AM", cat: "Fun & Silly", pts: 1,
      desc: "The most important beverage in Shavuot history. By 4am, coffee isn't a preference — it's a survival mechanism. The real miracle of Shavuot is that instant coffee can keep an entire shul conscious for Shacharit.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 42, title: "Staying Up For Shacharit", cat: "Fun & Silly", pts: 2,
      desc: "The ultimate Shavuot challenge: you stayed up all night, you can see the sunrise, but can you actually stand for Shemoneh Esrei without swaying from exhaustion rather than kavanah? Bonus points if you don't yawn during kedusha.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 43, title: "Best Dairy Debate", cat: "Fun & Silly", pts: 2,
      desc: "Is cheesecake the true queen of Shavuot, or do blintzes reign supreme? What about lasagna, pizza, or ice cream? This debate has divided more families than the question of gebrokts on Pesach.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 44, title: "Shortest Chag Debate", cat: "Fun & Silly", pts: 2,
      desc: "Shavuot is technically only one day in Israel (two in the diaspora), has no sukkah to build, no matzah to buy, and no shofar to practice. Some call it the 'low-maintenance chag.' Others call it underappreciated. Both are correct.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 45, title: "Kids Flower Crown Chaos", cat: "Fun & Silly", pts: 1,
      desc: "It started as a beautiful craft project. Within minutes, petals are everywhere, glue is on the carpet, and someone is crying because their crown fell apart. But the Instagram photo will look adorable, and that's what matters.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 46, title: "Lactose Intolerant Dilemma", cat: "Fun & Silly", pts: 2,
      desc: "For some, Shavuot is less 'Festival of the Torah' and more 'Festival of the Tums.' The dairy-heavy menu is a spiritual delight but a digestive minefield. Lactaid pills become the real Shavuot essential.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 47, title: "Oversleeping The Alarm", cat: "Fun & Silly", pts: 3,
      desc: "You set three alarms. Your chavruta was supposed to call you. You were only going to close your eyes for five minutes at 3am. Next thing you know, it's 10am and you've missed everything. The Bnei Yisrael at Sinai would be proud.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 48, title: "Post Shavuot Nap", cat: "Fun & Silly", pts: 1,
      desc: "The holiest nap of the Jewish calendar year. After being up all night, davening at sunrise, eating a dairy feast, and possibly a meat meal too, collapsing onto the couch feels like a mitzvah. And maybe it is.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 49, title: "Forgotten Festival Problem", cat: "Fun & Silly", pts: 3,
      desc: "Pesach has the Seder, Sukkot has the Sukkah, Rosh Hashana has the Shofar, Chanukah has the Menorah. Shavuot has... cheesecake? No wonder people forget it's coming. Shavuot's PR team needs a serious overhaul.",
      type: "text", img: null, imgPrompt: "", culled: false },

    { id: 50, title: "Dairy Then Meat Logistics", cat: "Fun & Silly", pts: 3,
      desc: "The Shavuot meal planning puzzle: start with dairy because minhag, then wait the required time, then have the meat seudah because Yom Tov. Requires a spreadsheet, three tablecloths, and military-grade dishwashing coordination.",
      type: "text", img: null, imgPrompt: "", culled: false },

  ]
};
