let gemObjs = [];

const createGemObject = (stone, id, color, heals) => {
  gemObjs.push({
    stone,
    id,
    color,
    heals
  });
  placeGems(id);
  pickUpGem(id);
};

createGemObject(
  "roseQuartz",
  "rose-quartz",
  "pink",
  "love, heart, feminine energy, peace, and compassion"
);

createGemObject(
  "danburite",
  "danburite",
  "pink",
  "easing worries and peace of mind"
);

createGemObject(
  "pinkTopaz",
  "pink-topaz",
  "pink",
  "vitalizing personal energies and creativities"
);

createGemObject(
  "kunzite",
  "kunzite",
  "pink",
  "filling voids with feelings of love and protection"
);

createGemObject(
  "pinkAgate",
  "pink-agate",
  "pink",
  "balance in emotional love swings and supports parental love"
);

createGemObject(
  "carnelian",
  "carnelian",
  "red",
  "motivation, endurance, leadership, boldness"
);

createGemObject(
  "redJasper",
  "red-Jasper",
  "red",
  "empowerment, bringing strength to resist emotional domination by others, and the courage to overcome domestic violence"
);

createGemObject(
  "garnet",
  "garnet",
  "red",
  "protection of self, hurting others, removing inhibition, atrracting love, and dreaming"
);

createGemObject("ruby", "ruby", "red", "abundance, wealth, passion, anger");

createGemObject(
  "sunstone",
  "sunstone",
  "orange",
  "nuturing, self-worth, vitality, regeneration"
);

createGemObject(
  "redAventurine",
  "red-aventurine",
  "red",
  "reproductive organs, balancing male-female energies, metabolism"
);

createGemObject(
  "orangeCalcite",
  "orange-calcite",
  "orange",
  "energizing and cleanses"
);

createGemObject(
  "citrine",
  "citrine",
  "orange",
  "protecting environment, cleansing energies, holding and sharing joys"
);

createGemObject(
  "mookaite",
  "mookaite",
  "yellow",
  "versatility, peace, wholeness"
);

createGemObject("amber", "amber", "orange", "wisdom, memory, cleaning");

createGemObject(
  "septarian",
  "septarian",
  "orange",
  "public speaking, caring for self, others, and the earth"
);

createGemObject(
  "yellowTopaz",
  "yellow-Topaz",
  "yellow",
  "correction of vision, astuteness, problem-solving"
);
createGemObject(
  "yellowAventurine",
  "yellow-aventurine",
  "yellow",
  "compassion, understanding, alleviating grief and centering emotions"
);

createGemObject(
  "sulfur",
  "sulfur",
  "yellow",
  "eruptions (of feelings, fevers, violence, destructive energies)"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "malachite",
  "malachite",
  "green",
  "protection against witchcraft and evil spirits"
);

createGemObject(
  "greenAventurine",
  "green-aventurine",
  "green",
  "a gambler's talisman, fortune, wealth"
);

createGemObject(
  "rainbowObsidian",
  "rainbow-obsidian",
  "green",
  "evolution of spirit and nature, cutting cords of old love"
);

createGemObject(
  "mossAgate",
  "moss-agate",
  "green",
  "a gardener's talisman, seeing beauty in all things, birth"
);

createGemObject(
  "greenFluorite",
  "green-fluorite",
  "green",
  "dissipating trauma, grounding excess energy"
);

createGemObject(
  "bloodstone",
  "bloodstone",
  "green",
  "repeling unwanted energies, signaling weather and recognition of chaos"
);

createGemObject(
  "gaiaStone",
  "gaia-stone",
  "green",
  "the soul of the earth, environmental harmony"
);

createGemObject(
  "chrysophase",
  "chrysophase",
  "green",
  "personal insight and truth"
);

createGemObject(
  "emerald",
  "emerald",
  "green",
  "the talisman of magicians, enchantments"
);

createGemObject(
  "howlite",
  "howlite",
  "white",
  "receiving wisdom, dreams, attunement"
);

createGemObject(
  "greenCalcite",
  "green-calcite",
  "green",
  "fertility and abundance"
);

createGemObject("jade", "jade", "green", "purity, serenity, nurturing");

createGemObject(
  "peridot",
  "peridot",
  "green",
  "detaching from negative influences to acheive fullness of destiny"
);

createGemObject(
  "moldavite",
  "moldavite",
  "green",
  "cosmic energies, releasing fixed ideas"
);

createGemObject("fuschite", "fuschite", "green", "speeding healing process");

createGemObject(
  "amazonite",
  "amazonite",
  "blue",
  "balancing two sides of an argument"
);

createGemObject(
  "apatite",
  "apatite",
  "blue",
  "manifestation attuned to the future, connection to past lives"
);

createGemObject(
  "aquamarine",
  "aquamarine",
  "blue",
  "dynamic change, guarding against figurative and literal drowning"
);

createGemObject(
  "turquoise",
  "turquoise",
  "blue",
  "bridging earth and heaven, communicaiton between worlds"
);

createGemObject(
  "chrysocolla",
  "chrysocolla",
  "blue",
  "speaking truth and balancing the home"
);

createGemObject(
  "smithsonite",
  "smithsonite",
  "blue",
  "healing the inner child"
);

createGemObject(
  "azurite",
  "azurite",
  "blue",
  "psychic developement, metaphysical energies"
);

createGemObject(
  "auraQuartz",
  "aura-quartz",
  "blue",
  "working towards powerful goals"
);

createGemObject(
  "blueCalcite",
  "blue-calcite",
  "blue",
  "healing and restoring personal energies, soothing anxieties"
);

createGemObject(
  "angelite",
  "angelite",
  "blue",
  "peace, brotherhood, and angelic presences"
);

createGemObject(
  "celestite",
  "celestite",
  "blue",
  "spiritual developement, metaphysical powers and energies"
);

createGemObject(
  "blueChalcedony",
  "blue-chalcedony",
  "blue",
  "weather and pressure changes"
);

createGemObject(
  "blueAventurine",
  "blue-aventurine",
  "blue",
  "masculine energy"
);

createGemObject(
  "blueLaceAgate",
  "blue-lace-agate",
  "blue",
  "counteracting fears of rejection"
);

createGemObject(
  "sapphire",
  "sapphire",
  "blue",
  "resists imprisonment, helpful in legal matters"
);

createGemObject(
  "larimar",
  "larimar",
  "blue",
  "soothing and calm, like dolphins in the sea"
);

createGemObject(
  "lapisLazuli",
  "lapis-lazuli",
  "blue",
  "transportation, travel, public speaking, and thought amplification. The royal stone."
);

createGemObject(
  "sodalite",
  "sodalite",
  "blue",
  "higher mind, integrity, urge toward idealism"
);
createGemObject(
  "lithiumQuartz",
  "lithium-quartz",
  "purple",
  "natural antidepressant, combats roots of mental and emotional disease"
);
createGemObject(
  "amethyst",
  "amethyst",
  "purple",
  "the sobriety stone, a natural tranquilizer and cleanser"
);
createGemObject(
  "smokyAmethyst",
  "smoky-amethyst",
  "purple",
  "grounds spiritual energy, reaching highest potentials"
);
createGemObject(
  "smokyHerkimer",
  "smoky-herkimer",
  "brown",
  "soul-shielding, emphasizing meditation"
);
createGemObject(
  "argonite",
  "argonite",
  "brown",
  "overcoming stress and anxiety"
);
createGemObject(
  "fluorite",
  "fluorite",
  "purple",
  "strength, overcoming disorganization"
);
createGemObject(
  "lepidolite",
  "lepidolite",
  "purple",
  "the stone of transition, brings about reconciliation and forward progress"
);
createGemObject(
  "smokyQuartz",
  "smoky-quartz",
  "brown",
  "efficiency, concentration, acceptance of the uncontrolables"
);
createGemObject(
  "agate",
  "agate",
  "brown",
  "bringing information to light, balancing yin and yang"
);
createGemObject(
  "desertRose",
  "desert-rose",
  "brown",
  "sacred moments, helping with secrets or hiding"
);
createGemObject(
  "lodestone",
  "lodestone",
  "brown",
  "earth healing and flow of energy, magnetic forces"
);
createGemObject(
  "serpentine",
  "serpentine",
  "brown",
  "aiding meditation and understanding the spiritual basis of life"
);

createGemObject(
  "tigersEye",
  "tigers-eye",
  "brown",
  "heals self-worth, self-criticism, and blocked creativity"
);
createGemObject(
  "shungite",
  "shungite",
  "black",
  "restores your connection to the ancient earth"
);
createGemObject(
  "tourmaline",
  "tourmaline",
  "black",
  "dense energy protection against negative forces and self-doubts, promoting laid-back attitudes"
);
createGemObject(
  "blackSpinnel",
  "black-spinnel",
  "black",
  "offering insight to material problems"
);
createGemObject(
  "obsidian",
  "obsidian",
  "black",
  "divination, exposing flaws, protecting against untruths"
);
createGemObject(
  "snowflakeObsidian",
  "snowflake-obsidian",
  "black",
  "the stone of purity, empowerment from isolation"
);

createGemObject(
  "dalmationJasper",
  "dalmation-jasper",
  "black",
  "promting relationship ties, family and loyalty, calming for children and animals"
);
createGemObject(
  "tektite",
  "tektite",
  "black",
  "a fertility talisman, seeing into other planes"
);
createGemObject(
  "hawksEye",
  "hawks-eye",
  "black",
  "clairvoyance, surfacing blocked emotions"
);
createGemObject(
  "onyx",
  "onyx",
  "black",
  "protection in dark nights and lonely places"
);
createGemObject("black-opal", "black-opal", "black", "ritual magic");
createGemObject(
  "galena",
  "galena",
  "black",
  "holistic healing and harmonizing"
);
createGemObject(
  "labradorite",
  "labradorite",
  "black",
  "seeing into other worlds, preventing energy leakage"
);
createGemObject(
  "pumice",
  "pumice",
  "black",
  "helping you see solutions in difficult situations"
);
createGemObject(
  "quartz",
  "quartz",
  "white",
  "cleansing, clarity of thought, bringing in rich and new energies"
);
createGemObject(
  "spiritQuartz",
  "spirit-quartz",
  "white",
  "bathing in the combined radiance of a whole being and spiritual growth"
);
createGemObject(
  "phantomQuartz",
  "phantom-quartz",
  "white",
  "wisdom, learning and extending, a transition phase"
);
createGemObject("chalcedony", "chalcedony", "white", "calming and trust");
createGemObject("selenite", "selenite", "white", "good luck and protection");
createGemObject(
  "abaloneShell",
  "abalone-shell",
  "white",
  "getting through touch emotional issues"
);
createGemObject(
  "moonstone",
  "moonstone",
  "white",
  "deep and nourishing feminine energies, whole healing"
);
createGemObject(
  "opal",
  "opal",
  "white",
  "loyalty and faithfulness, intensifies emotional states"
);
createGemObject(
  "diamond",
  "diamond",
  "white",
  "strength of character and faithfulness"
);
createGemObject(
  "clearTopaz",
  "clearTopaz",
  "white",
  "confidence and positive intent, talisman of pyschics"
);

console.log(gemObjs.length);
