// Detailed information about rulers - keyed by ruler id
export interface RulerDetail {
  biography: string;
  achievements?: string[];
  sources?: string[];
  suggestedReading?: string;
}

export const rulerDetails: Record<string, RulerDetail> = {
  // Anga Kingdom
  "anga-1": {
    biography: "Maharaj Anga was the legendary founder of the Anga Kingdom, one of the sixteen Mahajanapadas mentioned in ancient Indian texts. According to the Mahabharata, he was born from the thigh of King Vena and was the progenitor of the Anga dynasty. His kingdom covered the regions of modern-day Bhagalpur and Munger in Bihar.",
    achievements: [
      "Founded the Anga Kingdom",
      "Established Champa as the capital city",
      "Created trade routes along the Ganges"
    ],
    suggestedReading: "The History of Bengal, Vol. 1 by R.C. Majumdar"
  },
  "anga-2": {
    biography: "Romapada, also known as Dasharatha or Chitraratha in various texts, was a king of Anga mentioned in the Ramayana. He was a friend of King Dasharatha of Ayodhya and adopted Shanta, daughter of Dasharatha. His reign saw the kingdom face a severe drought which was ended by the sage Rishyasringa.",
    achievements: [
      "Allied with the Kosala Kingdom",
      "Patronized Vedic rituals",
      "Invited sages for spiritual guidance"
    ],
    suggestedReading: "Valmiki's Ramayana - Bala Kanda"
  },
  "anga-3": {
    biography: "Angaraj Karna is one of the most celebrated figures in the Mahabharata. Born to Kunti before her marriage and the Sun God Surya, he was adopted by a charioteer and later became King of Anga when gifted the kingdom by Duryodhana. Known for his generosity, martial prowess, and tragic fate, he fought on the Kaurava side in the Kurukshetra war.",
    achievements: [
      "Considered one of the greatest warriors of the Mahabharata",
      "Known as 'Danveer' (generous giver)",
      "Master of divine weapons including Brahmastra"
    ],
    sources: ["Mahabharata by Vyasa", "Archaeological findings at Bhagalpur"],
    suggestedReading: "Karna: The Great Warrior by Shivaji Sawant (Mrityunjay in Marathi)"
  },
  "anga-4": {
    biography: "Brahmadatta was the last independent king of Anga before it was conquered by Bimbisara of Magadha around 530 BCE. His defeat marked the beginning of Magadha's rise as the dominant power in the Indian subcontinent.",
    achievements: [
      "Last independent ruler of Anga",
      "Maintained the kingdom's traditions until conquest"
    ],
    suggestedReading: "Ancient India by R.S. Sharma"
  },
  
  // Vanga Kingdom
  "vanga-1": {
    biography: "Samudrasena was among the early rulers of the Vanga Kingdom. Historical records about this period are scarce, with most information derived from later Buddhist and Jain texts.",
    suggestedReading: "History of Bengal (Hindu Period) by R.C. Majumdar"
  },
  "vanga-2": {
    biography: "Mahapadmananda belonged to the ruling lineage of Vanga during the ancient period. Information about specific rulers of this era is limited and often mixed with mythology.",
    suggestedReading: "The Land of Two Rivers by Nitish Sengupta"
  },
  
  // Pundra Kingdom
  "pundra-1": {
    biography: "Pundra was the eponymous founder of the Pundra Kingdom (Pundravardhana), mentioned in the Mahabharata as a son of King Vali. The kingdom was located in present-day North Bengal and Bangladesh, with its capital at Mahasthangarh.",
    achievements: [
      "Founded the Pundra Kingdom",
      "Established early settlements in North Bengal"
    ],
    suggestedReading: "Pundravardhana by Dilip Kumar Ganguly"
  },
  "pundra-2": {
    biography: "Vasudeva was a ruler of Pundravardhana during the ancient period. Limited historical records exist from this era, with archaeological excavations at Mahasthangarh providing the primary evidence.",
    suggestedReading: "Archaeological Survey of India Reports on Mahasthangarh"
  },
  
  // Nanda Empire
  "nanda-1": {
    biography: "Mahapadma Nanda was the founder of the Nanda dynasty, ruling from approximately 345-329 BCE. Often called 'Ugrasena' (the terrible army) for his military might, he conquered most of northern India and unified it under one rule. He is noted for being of low birth but rising to become emperor.",
    achievements: [
      "Founded the Nanda Empire",
      "First non-Kshatriya to rule a major Indian empire",
      "Built a massive army with 200,000 infantry and 80,000 cavalry",
      "Extended control over most of northern India"
    ],
    sources: ["Greek accounts of Alexander's campaign", "Puranas"],
    suggestedReading: "The Age of the Nandas and Mauryas by K.A. Nilakanta Sastri"
  },
  "nanda-2": {
    biography: "Dhana Nanda was the last ruler of the Nanda dynasty, defeated by Chandragupta Maurya around 321 BCE with the guidance of Chanakya. Greek sources describe him as a powerful but unpopular ruler who commanded the largest army in India.",
    achievements: [
      "Maintained the vast Nanda treasury",
      "Commanded one of the largest armies of the ancient world"
    ],
    sources: ["Arthashastra by Kautilya", "Greek historians"],
    suggestedReading: "Chanakya's Chant by Ashwin Sanghi"
  },
  
  // Maurya Empire
  "maurya-1": {
    biography: "Chandragupta Maurya (340-298 BCE) was the founder of the Maurya Empire. With the guidance of Chanakya, he overthrew the Nanda dynasty and established an empire that eventually covered most of the Indian subcontinent. He defeated Seleucus Nicator and established diplomatic relations with the Hellenistic world.",
    achievements: [
      "Founded the Maurya Empire, the first pan-Indian empire",
      "Defeated Seleucus Nicator and gained territories in Afghanistan",
      "Established a sophisticated administrative system",
      "Created a standing army of 600,000 soldiers"
    ],
    sources: ["Arthashastra", "Indica by Megasthenes", "Mudrarakshasa by Vishakhadatta"],
    suggestedReading: "Chandragupta Maurya and His Times by Radha Kumud Mookerji"
  },
  "maurya-2": {
    biography: "Ashoka the Great (304-232 BCE) is considered one of the greatest rulers in world history. After the brutal Kalinga War, he converted to Buddhism and promoted non-violence throughout his vast empire. His edicts carved on rocks and pillars throughout India remain important historical documents.",
    achievements: [
      "Expanded the Maurya Empire to its greatest extent",
      "Converted to Buddhism and promoted Dhamma",
      "Built hospitals, roads, and rest houses throughout the empire",
      "Sent Buddhist missionaries across Asia",
      "Created the Ashokan pillars and rock edicts"
    ],
    sources: ["Ashokan Edicts", "Buddhist texts", "Sri Lankan chronicles"],
    suggestedReading: "Ashoka: The Search for India's Lost Emperor by Charles Allen"
  },
  
  // Gupta Empire
  "gupta-1": {
    biography: "Chandragupta I (reign c. 319-335 CE) was the first great Gupta ruler. Through his marriage to the Licchavi princess Kumaradevi, he secured a powerful alliance and established Gupta control over Magadha. He introduced the Gupta era calendar.",
    achievements: [
      "Established Gupta dominance in Magadha",
      "Made strategic alliance with the Licchavis",
      "Introduced the Gupta era for dating"
    ],
    sources: ["Gupta inscriptions", "Coins"],
    suggestedReading: "The Gupta Empire by Radhakumud Mookerji"
  },
  "gupta-2": {
    biography: "Samudragupta (reign c. 335-375 CE) was one of the greatest military commanders in Indian history. Known as the 'Indian Napoleon,' he conquered much of the subcontinent through a series of brilliant military campaigns documented in the Allahabad Pillar inscription.",
    achievements: [
      "Conquered most of northern and eastern India",
      "Extended Gupta influence to southern India",
      "Patronized arts and learning",
      "Performed the Ashwamedha sacrifice"
    ],
    sources: ["Allahabad Pillar inscription", "Gupta coins"],
    suggestedReading: "A History of India by Hermann Kulke and Dietmar Rothermund"
  },
  "gupta-3": {
    biography: "Chandragupta II Vikramaditya (reign c. 375-415 CE) presided over the golden age of India. His court included the legendary Navaratnas (Nine Gems) including Kalidasa. He defeated the Western Kshatrapas and extended Gupta rule to the Arabian Sea.",
    achievements: [
      "Ushered in the Golden Age of India",
      "Patronized Kalidasa and other great scholars",
      "Defeated the Shakas (Western Kshatrapas)",
      "Established diplomatic relations with China"
    ],
    sources: ["Iron Pillar of Delhi inscription", "Chinese pilgrim accounts"],
    suggestedReading: "The Classical Age by R.C. Majumdar"
  },
  "gupta-4": {
    biography: "Skandagupta (reign c. 455-467 CE) was the last great Gupta emperor. He successfully repelled Huna invasions but exhausted the empire's resources in doing so. After his death, the empire rapidly declined.",
    achievements: [
      "Defended India against Huna invasions",
      "Maintained the empire against external threats",
      "Repaired the Sudarshana Lake dam"
    ],
    sources: ["Bhitari and Junagadh inscriptions"],
    suggestedReading: "The Gupta Polity by S.R. Goyal"
  },
  
  // Pala Empire
  "pala-1": {
    biography: "Gopala (reign c. 750-770 CE) was the founder of the Pala dynasty. He was elected king by the people of Bengal to end the period of anarchy (Matsyanyaya). He was a devout Buddhist and established the foundations of Pala rule.",
    achievements: [
      "Founded the Pala dynasty through popular election",
      "Ended the period of anarchy in Bengal",
      "Established Buddhist patronage as state policy"
    ],
    sources: ["Khalimpur copper plate"],
    suggestedReading: "The Pala-Sena Schools of Sculpture by Saraswati"
  },
  "pala-2": {
    biography: "Dharmapala (reign c. 770-810 CE) was one of the greatest Pala emperors. He extended the empire from Bengal to Kannauj and patronized Buddhism extensively, founding the famous Vikramashila and Somapura Mahavihara.",
    achievements: [
      "Extended Pala rule to Kannauj",
      "Founded Vikramashila University",
      "Built Somapura Mahavihara (UNESCO World Heritage Site)",
      "Revived Buddhism in eastern India"
    ],
    sources: ["Khalimpur copper plate", "Tibetan sources"],
    suggestedReading: "Buddhism in Bengal by Jhunu Bagchi"
  },
  "pala-3": {
    biography: "Devapala (reign c. 810-850 CE) was the most powerful Pala emperor, extending the empire from Assam to Orissa and from Nepal to Vindhyas. His court was visited by scholars from across Asia, and he patronized Nalanda University.",
    achievements: [
      "Extended Pala empire to its greatest extent",
      "Patronized Nalanda and Vikramashila universities",
      "Maintained diplomatic relations with Srivijaya",
      "Built numerous Buddhist monasteries"
    ],
    sources: ["Nalanda and Ghosrawa inscriptions", "Arab sources"],
    suggestedReading: "The Palas of Bengal by Bindeshwari Prasad Sinha"
  },
  "pala-4": {
    biography: "Mahipala I (reign c. 988-1038 CE) restored Pala power after a period of Chandela and Chola invasions. He recovered lost territories and rebuilt many monasteries. His reign saw a revival of Pala fortunes.",
    achievements: [
      "Restored Pala dominance in Bengal",
      "Rebuilt Buddhist institutions",
      "Recovered territories lost to Chola raids"
    ],
    sources: ["Bangarh copper plate"],
    suggestedReading: "History of Bengal Vol. 1 by R.C. Majumdar"
  },
  "pala-5": {
    biography: "Ramapala (reign c. 1077-1130 CE) was the last significant Pala ruler. He suppressed the Kaivarta rebellion and temporarily restored Pala authority. The Sanskrit text Ramacharita by Sandhyakar Nandi describes his achievements.",
    achievements: [
      "Suppressed the Kaivarta rebellion",
      "Temporarily restored Pala power",
      "Patronized Sanskrit literature"
    ],
    sources: ["Ramacharita by Sandhyakar Nandi"],
    suggestedReading: "The Age of Imperial Kanauj by R.C. Majumdar"
  },
  
  // Sena Dynasty
  "sena-1": {
    biography: "Vijayasena (reign c. 1097-1160 CE) was the founder of the Sena dynasty's power in Bengal. Originally from Karnataka, he conquered much of Bengal from the declining Palas and established Sena rule.",
    achievements: [
      "Established Sena rule in Bengal",
      "Conquered territories from the Palas",
      "Restored Hindu supremacy in Bengal"
    ],
    sources: ["Deopara inscription"],
    suggestedReading: "The Senas by Puspa Niyogi"
  },
  "sena-2": {
    biography: "Ballala Sena (reign c. 1160-1179 CE) was a great patron of learning. He compiled texts on smriti and is credited with reorganizing the caste system in Bengal. His capital was at Vikramapura.",
    achievements: [
      "Reorganized social structure in Bengal",
      "Authored Danasagara and Adbhutasagara",
      "Patronized Sanskrit scholarship"
    ],
    sources: ["Sena inscriptions", "Literary works"],
    suggestedReading: "Society in the Sena Period by Jhunu Bagchi"
  },
  "sena-3": {
    biography: "Lakshmanasena (reign c. 1179-1206 CE) was the last great Sena ruler. A patron of the arts, his court included the famous poet Jayadeva, author of Gita Govinda. He was defeated by Bakhtiyar Khalji in 1204.",
    achievements: [
      "Patronized Jayadeva and Sanskrit literature",
      "Extended Sena territories",
      "Ruled during a cultural golden age"
    ],
    sources: ["Sena inscriptions", "Tabaqat-i-Nasiri"],
    suggestedReading: "Gita Govinda by Jayadeva"
  },
  
  // Bengal Sultanate
  "sultanate-1": {
    biography: "Shamsuddin Ilyas Shah (reign 1342-1358) was the founder of the Ilyas Shahi dynasty. He unified Bengal for the first time under Muslim rule and took the title 'Shah-i-Bangala'. He successfully defended against Delhi Sultanate attacks.",
    achievements: [
      "Unified Bengal under one rule",
      "Founded the Ilyas Shahi dynasty",
      "Successfully resisted invasions from Delhi",
      "Made Bengali the court language"
    ],
    sources: ["Contemporary inscriptions", "Persian chronicles"],
    suggestedReading: "The Rise of Islam and the Bengal Frontier by Richard Eaton"
  },
  "sultanate-2": {
    biography: "Alauddin Husain Shah (reign 1494-1519) is considered the greatest sultan of Bengal. His reign marked a cultural renaissance with patronage of Bengali literature and construction of numerous monuments.",
    achievements: [
      "Golden age of Bengal Sultanate",
      "Patronized Bengali literature and culture",
      "Built numerous mosques and monuments",
      "Extended territories to Assam and Orissa"
    ],
    sources: ["Portuguese sources", "Bengali literature"],
    suggestedReading: "Medieval Bengal by M.R. Tarafdar"
  },
  
  // Mughal Period
  "mughal-1": {
    biography: "Akbar (1542-1605) was the greatest Mughal emperor and conquered Bengal in 1576. His general, Munim Khan, defeated the last independent sultan of Bengal. Under Akbar, Bengal was integrated into the Mughal Empire.",
    achievements: [
      "Unified India under Mughal rule",
      "Implemented the Din-i-Ilahi",
      "Established an efficient administrative system",
      "Promoted religious tolerance"
    ],
    sources: ["Akbarnama by Abul Fazl", "Ain-i-Akbari"],
    suggestedReading: "Akbar: The Great Mughal by Ira Mukhoty"
  },
  "mughal-2": {
    biography: "Jahangir (1569-1627) inherited Bengal as part of the Mughal Empire. His reign saw relative peace in Bengal, though Afghan rebellions continued. He was known for his justice and patronage of arts.",
    achievements: [
      "Maintained Mughal control over Bengal",
      "Patronized miniature painting",
      "Continued Akbar's administrative policies"
    ],
    sources: ["Tuzuk-i-Jahangiri (Memoirs)"],
    suggestedReading: "The Jahangirnama translated by Wheeler Thackston"
  },
  "mughal-3": {
    biography: "Shah Jahan (1592-1666) ruled during Mughal zenith. He appointed his son Shuja as governor of Bengal. His reign saw the construction of the Taj Mahal and flourishing of Mughal architecture in Bengal.",
    achievements: [
      "Built the Taj Mahal",
      "Expanded Mughal territories",
      "Constructed numerous architectural masterpieces",
      "Peak of Mughal wealth and power"
    ],
    sources: ["Padshahnama"],
    suggestedReading: "Shah Jahan by Fergus Nicoll"
  },
  "mughal-4": {
    biography: "Aurangzeb (1618-1707) was the last great Mughal emperor. He conquered the entire Indian subcontinent but his policies led to revolts. Bengal remained relatively prosperous under his rule, governed by Nawabs.",
    achievements: [
      "Extended Mughal Empire to its greatest extent",
      "Compiled the Fatawa-i-Alamgiri",
      "Maintained law and order throughout the empire"
    ],
    sources: ["Contemporary chronicles", "European accounts"],
    suggestedReading: "Aurangzeb: The Life and Legacy of India's Most Controversial King by Audrey Truschke"
  },
  
  // Nawabs of Bengal
  "nawab-1": {
    biography: "Murshid Quli Khan (c. 1660-1727) was the first Nawab of Bengal. Originally a Brahmin convert to Islam, he established Bengal's semi-independence from the Mughals and created an efficient revenue system. He moved the capital to Murshidabad.",
    achievements: [
      "Established Bengal's autonomy from Delhi",
      "Reformed the revenue system",
      "Built Murshidabad as the new capital",
      "Maintained peace and prosperity"
    ],
    sources: ["Persian chronicles", "British records"],
    suggestedReading: "The Nawabs of Bengal by Abdul Karim"
  },
  "nawab-2": {
    biography: "Alivardi Khan (1671-1756) seized power in 1740 and successfully defended Bengal against Maratha raids. His reign saw repeated invasions which he repelled through military skill and diplomacy.",
    achievements: [
      "Defended Bengal against Maratha invasions",
      "Maintained internal stability",
      "Kept European powers in check"
    ],
    sources: ["Siyar ul-Mutakhkherin"],
    suggestedReading: "Bengal Nawabs by Md. Mohar Ali"
  },
  "nawab-3": {
    biography: "Siraj ud-Daulah (1733-1757) was the last independent Nawab of Bengal. He came into conflict with the British East India Company, leading to the Battle of Plassey in 1757 where he was defeated due to the treachery of Mir Jafar.",
    achievements: [
      "Challenged British encroachment",
      "Attempted to unite Indian powers against Europeans",
      "Symbolizes resistance to colonialism"
    ],
    sources: ["British records", "Indian chronicles"],
    suggestedReading: "The Last Nawab: Siraj ud-Daulah and the Fall of Bengal by Amitav Ghosh"
  },
  
  // British Colonial Period
  "eic-1": {
    biography: "Robert Clive (1725-1774) was the British military officer who established East India Company control over Bengal. His victory at Plassey in 1757 through conspiracy with Mir Jafar marked the beginning of British colonial rule in India.",
    achievements: [
      "Won the Battle of Plassey",
      "Established British control over Bengal",
      "Implemented the Dual System of government"
    ],
    sources: ["British Parliamentary records", "Company archives"],
    suggestedReading: "Clive: The Life and Death of a British Emperor by Robert Harvey"
  },
  "eic-2": {
    biography: "Warren Hastings (1732-1818) was the first Governor-General of India. He implemented significant administrative and judicial reforms but was also involved in controversial actions including the Bengal Famine.",
    achievements: [
      "First Governor-General of India",
      "Reformed judicial and revenue systems",
      "Founded the Asiatic Society"
    ],
    sources: ["Parliamentary proceedings", "Company records"],
    suggestedReading: "Warren Hastings by Jeremy Bernstein"
  },
  "eic-3": {
    biography: "Lord Cornwallis (1738-1805) implemented the Permanent Settlement in Bengal in 1793, which fixed land revenue and created the zamindari system. This had lasting effects on Bengal's agrarian structure.",
    achievements: [
      "Implemented the Permanent Settlement",
      "Reformed the civil service",
      "Introduced the Cornwallis Code"
    ],
    sources: ["Parliamentary records", "Bengal regulations"],
    suggestedReading: "The Permanent Settlement in Bengal by Ranajit Guha"
  },
  "eic-4": {
    biography: "Lord Wellesley (1760-1842) was Governor-General from 1798-1805. He expanded British territories through his Subsidiary Alliance system and founded the Fort William College for training civil servants.",
    achievements: [
      "Expanded British territories",
      "Founded Fort William College",
      "Implemented the Subsidiary Alliance system"
    ],
    sources: ["Company records"],
    suggestedReading: "The Maratha War Papers of Arthur Wellesley"
  },
  "raj-1": {
    biography: "Lord Canning (1812-1862) was the first Viceroy of India after the 1857 revolt. He oversaw the transition from Company rule to Crown rule and the Government of India Act 1858.",
    achievements: [
      "First Viceroy of India",
      "Managed post-mutiny transition",
      "Implemented clemency policies"
    ],
    sources: ["Official records", "Parliamentary papers"],
    suggestedReading: "The Great Revolt by P.C. Joshi"
  },
  "raj-2": {
    biography: "Lord Curzon (1859-1925) was Viceroy from 1899-1905. He implemented significant administrative reforms but is most remembered for the controversial Partition of Bengal in 1905, which sparked nationalist movements.",
    achievements: [
      "Archaeological and heritage preservation",
      "Educational reforms",
      "Partitioned Bengal (1905)"
    ],
    sources: ["Official correspondence", "Parliamentary records"],
    suggestedReading: "Lord Curzon in India by David Dilks"
  },
  "raj-3": {
    biography: "Lord Mountbatten (1900-1979) was the last Viceroy of India, overseeing the partition and independence of India and Pakistan in 1947. His rushed timeline for partition contributed to massive communal violence.",
    achievements: [
      "Oversaw Indian independence",
      "Negotiated partition terms",
      "Last Viceroy of India"
    ],
    sources: ["Transfer of Power documents", "Mountbatten papers"],
    suggestedReading: "Freedom at Midnight by Larry Collins and Dominique Lapierre"
  }
};

export const getDefaultDetail = (rulerName: string): RulerDetail => {
  return {
    biography: `No credible historical information is currently available for ${rulerName}. This ruler is mentioned in historical records but detailed accounts of their reign have not survived or have yet to be discovered through archaeological research.`,
    suggestedReading: "History of Bengal, Vol. 1-2 by R.C. Majumdar"
  };
};
