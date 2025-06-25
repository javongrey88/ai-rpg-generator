export const raceFeatures: {
    [race: string]: {
        abilityScoreIncrease: string[];
        traits: string[];
    };
} = {
    Aarakocra: {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Wisdom'],
        traits: [
            'Flight (You have a flying speed of 50 feet. You can’t wear medium or heavy armor.)',
            'Talons (Unarmed strike does 1d4 slashing damage)'
        ]
    },

    Aasimar: {
        abilityScoreIncrease: ['+2 Charisma', '+1 Constitution'],
        traits: [
            'Darkvision',
            'Celestial Resistance (Resistance to necrotic and radiant damage)',
            'Healing Hands (Action: heal HP equal to your level)',
            'Light Bearer (Know the *light* cantrip)',
            'Subrace: Protector, Scourge, or Fallen (each with a unique transformation feature)'
        ]
    },

    Bugbear: {
        abilityScoreIncrease: ['+2 Strength', '+1 Dexterity'],
        traits: [
            'Darkvision (60 ft)',
            'Long-Limbed (Melee attacks have +5 ft reach)',
            'Powerful Build (Count as one size larger for carrying, pushing, dragging)',
            'Sneaky (Proficient in Stealth)',
            'Surprise Attack (Extra 2d6 damage on first hit if attacking a surprised creature)'
        ]
    },

    Centaur: {
        abilityScoreIncrease: ['+2 Strength', '+1 Wisdom'],
        traits: [
            'Fey Creature Type',
            'Charge (If you move 30 ft straight and hit with a melee weapon attack, bonus action hooves attack)',
            'Hooves (Unarmed strike does 1d4 bludgeoning damage)',
            'Equine Build (You count as one size larger for carrying, can’t climb with hands/feet)',
            'Survivor’s Speed (Base walking speed 40 ft)'
        ]
    },

    Changeling: {
        abilityScoreIncrease: ['+2 Charisma', '+1 to any other ability score of your choice'],
        traits: [
            'Shapechanger (Can use action to transform appearance and voice)',
            'Changeling Instincts (Gain proficiency in two of the following: Deception, Insight, Intimidation, Persuasion)',
            'Unsettling Visage (Reaction to impose disadvantage when hit — usable once per long rest)',
            'Divergent Persona (One extra persona with a different personality trait, ideal, bond, and flaw)'
        ]
    },

    Dragonborn: {
        abilityScoreIncrease: ['+2 Strength', '+1 Charisma'],
        traits: [
            'Draconic Ancestry (Choose a dragon type for breath weapon and damage resistance)',
            'Breath Weapon (Exhale destructive energy — shape and damage type based on ancestry)',
            'Damage Resistance (Resistance to the damage type of your Draconic Ancestry)',
            'Languages (Common, Draconic)'
        ]
    },

    Dwarf: {
        abilityScoreIncrease: ['+2 Constitution'],
        traits: [
            'Darkvision (60 feet)',
            'Dwarven Resilience (Advantage on saving throws against poison, resistance to poison damage)',
            'Dwarven Combat Training (Proficiency with battleaxe, handaxe, light hammer, warhammer)',
            'Tool Proficiency (Choose one: smith’s tools, brewer’s supplies, mason’s tools)',
            'Stonecunning (Double proficiency bonus on History checks related to stonework)',
            'Languages (Common, Dwarvish)'
        ]
    },

    Elf: {
        abilityScoreIncrease: ['+2 Dexterity'],
        traits: [
            'Darkvision (60 feet)',
            'Keen Senses (Proficiency in Perception)',
            'Fey Ancestry (Advantage on saving throws against being charmed, and can’t be put to sleep by magic)',
            'Trance (Don’t need to sleep — meditate 4 hours for long rest)',
            'Languages (Common, Elvish)'
        ]
    },

    Fairy: {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Charisma'],
        traits: [
            'Fey (Creature type: Fey, not Humanoid)',
            'Flight (Magical wings, flying speed equal to walking speed)',
            'Fairy Magic (Known spells: druidcraft, faerie fire [once per long rest])',
            'Languages (Common, Sylvan)'
        ]
    },

    Firbolg: {
        abilityScoreIncrease: ['+2 Wisdom', '+1 Strength'],
        traits: [
            'Firbolg Magic (Detect Magic and Disguise Self once per long rest)',
            'Hidden Step (Bonus action to turn invisible until start of next turn)',
            'Powerful Build (Counts as one size larger for carry capacity, pushing/lifting)',
            'Speech of Beast and Leaf (Can communicate with beasts and plants)',
            'Languages (Common, Elvish, Giant)'
        ]
    },

    'Genasi (Air)': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Dexterity'],
        traits: [
            'Unending Breath (Can hold breath indefinitely while not incapacitated)',
            'Mingle with the Wind (Cast levitate once per long rest)',
            'Languages (Common, Primordial)'
        ]
    },

    'Genasi (Earth)': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Strength'],
        traits: [
            'Earth Walk (Can move across difficult terrain made of earth/stone without extra movement cost)',
            'Merge with Stone (Can cast pass without trace once per long rest)',
            'Languages (Common, Primordial)'
        ]
    },

    'Genasi (Fire)': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Intelligence'],
        traits: [
            'Darkvision (60 feet)',
            'Fire Resistance',
            'Reach to the Blaze (Can cast produce flame cantrip; at 3rd level, burning hands once per long rest)',
            'Languages (Common, Primordial)'
        ]
    },

    'Genasi (Water)': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Wisdom'],
        traits: [
            'Acid Resistance',
            'Amphibious (Can breathe air and water)',
            'Swim Speed (30 feet)',
            'Call to the Wave (Can cast shape water cantrip; at 3rd level, create or destroy water once per long rest)',
            'Languages (Common, Primordial)'
        ]
    },

    'Githyanki': {
        abilityScoreIncrease: ['+2 Strength', '+1 Intelligence'],
        traits: [
            'Decadent Mastery (One additional language and tool proficiency of choice)',
            'Martial Prodigy (Proficient with light and medium armor and shortswords, longswords, greatswords)',
            'Githyanki Psionics (Mage Hand cantrip; at 3rd level, jump once per long rest; at 5th level, misty step once per long rest)',
            'Languages (Common, Gith)'
        ]
    },

    'Githzerai': {
        abilityScoreIncrease: ['+2 Wisdom', '+1 Intelligence'],
        traits: [
            'Mental Discipline (Advantage on saving throws against charm and fear)',
            'Githzerai Psionics (Mage Hand cantrip; at 3rd level, shield once per long rest; at 5th level, detect thoughts once per long rest)',
            'Languages (Common, Gith)'
        ]
    },

    'Gnome': {
        abilityScoreIncrease: ['+2 Intelligence'],
        traits: [
            'Darkvision (60 ft)',
            'Gnome Cunning (Advantage on all Intelligence, Wisdom, and Charisma saves against magic)',
            'Languages (Common, Gnomish)',
            'Subraces: Forest Gnome, Rock Gnome'
        ]
    },

    'Goblin': {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Constitution'],
        traits: [
            'Darkvision (60 ft)',
            'Fury of the Small (Once per short rest, add level in damage to a creature larger than you)',
            'Nimble Escape (Disengage or Hide as a bonus action each turn)',
            'Languages (Common, Goblin)'
        ]
    },

    'Goliath': {
        abilityScoreIncrease: ['+2 Strength', '+1 Constitution'],
        traits: [
            'Natural Athlete (Proficiency in Athletics)',
            'Stone’s Endurance (Reduce damage once per short rest as a reaction)',
            'Powerful Build (Counts as one size larger for carrying, pushing, dragging, lifting)',
            'Mountain Born (Resistance to cold damage; acclimated to high altitude)',
            'Languages (Common, Giant)'
        ]
    },

    'Half-Elf': {
        abilityScoreIncrease: ['+2 Charisma', '+1 to two other ability scores of your choice'],
        traits: [
            'Darkvision (60 ft)',
            'Fey Ancestry (Advantage on saving throws against being charmed; immune to magical sleep)',
            'Skill Versatility (Proficiency in two skills of your choice)',
            'Languages (Common, Elvish, plus one extra of your choice)'
        ]
    },

    'Half-Orc': {
        abilityScoreIncrease: ['+2 Strength', '+1 Constitution'],
        traits: [
            'Darkvision (60 ft)',
            'Menacing (Proficiency in Intimidation)',
            'Relentless Endurance (Once per long rest, drop to 1 HP instead of 0)',
            'Savage Attacks (Extra damage dice on a crit with melee weapon)',
            'Languages (Common, Orc)'
        ]
    },

    'Halfling': {
        abilityScoreIncrease: ['+2 Dexterity'],
        traits: [
            'Lucky (Reroll 1s on attack roll, ability check, or saving throw)',
            'Brave (Advantage on saving throws against being frightened)',
            'Halfling Nimbleness (Can move through the space of larger creatures)',
            'Languages (Common, Halfling)'
        ]
    },

    'Hobgoblin': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Intelligence'],
        traits: [
            'Darkvision (60 ft)',
            'Martial Training (Proficiency with two martial weapons of your choice and light armor)',
            'Saving Face (Add bonus to a missed attack/saving/check based on number of allies within 30 ft)',
            'Languages (Common, Goblin)'
        ]
    },
    'Human': {
        abilityScoreIncrease: ['+1 to all ability scores'],
        traits: [
            'Versatile and adaptable',
            'Languages (Common and one extra language of your choice)'
        ]
    },

    'Human (Variant)': {
        abilityScoreIncrease: ['+1 to two ability scores of your choice'],
        traits: [
            'Gain one feat of your choice',
            'Gain proficiency in one skill of your choice',
            'Languages (Common and one extra language of your choice)'
        ]
    },

    'Kenku': {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Wisdom'],
        traits: [
            'Expert Forgery (Advantage on checks to duplicate writing/craftwork)',
            'Kenku Training (Proficiency in two of: Acrobatics, Deception, Stealth, Sleight of Hand)',
            'Mimicry (Can mimic sounds and voices)',
            'Languages (Common, Auran)'
        ]
    },

    'Kobold': {
        abilityScoreIncrease: ['+2 Dexterity'],
        traits: [
            'Darkvision (60 ft)',
            'Draconic Cry (Bonus action: Grant advantage on attack rolls to allies within 10 ft)',
            'Crafty (Proficiency in one of: Arcana, Investigation, Medicine, Sleight of Hand, or Survival)',
            'Languages (Common, Draconic)'
        ]
    },

    'Leonin': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Strength'],
        traits: [
            'Darkvision (60 ft)',
            'Claws (Unarmed strike deals 1d4 + STR slashing damage)',
            'Hunter’s Instincts (Proficiency in one of: Athletics, Intimidation, Perception, or Survival)',
            'Daunting Roar (Once per short rest, frighten enemies within 10 ft; DC = 8 + CON + proficiency)',
            'Languages (Common, Leonin)'
        ]
    },

    'Lizardfolk': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Wisdom'],
        traits: [
            'Bite (1d6 + STR piercing damage)',
            'Cunning Artisan (Create basic items from slain creatures)',
            'Hold Breath (Up to 15 minutes)',
            'Hunter’s Lore (Proficiency in two of: Animal Handling, Nature, Perception, Stealth, or Survival)',
            'Natural Armor (AC = 13 + DEX modifier)',
            'Languages (Common, Draconic)'
        ]
    },

    'Loxodon': {
        abilityScoreIncrease: ['+2 Constitution', '+1 Wisdom'],
        traits: [
            'Powerful Build (Count as one size larger when determining carrying capacity)',
            'Loxodon Serenity (Advantage on saving throws against being charmed or frightened)',
            'Natural Armor (AC = 12 + CON modifier)',
            'Trunk (Can lift, carry, and manipulate objects; can’t wield weapons or use tools)',
            'Keen Smell (Advantage on Perception checks that rely on smell)',
            'Languages (Common, Loxodon)'
        ]
    },

    'Minotaur': {
        abilityScoreIncrease: ['+2 Strength', '+1 Constitution'],
        traits: [
            'Horns (1d6 + STR piercing damage as melee weapon attack)',
            'Goring Rush (Dash → Melee horn attack as bonus action)',
            'Hammering Horns (Attack action → bonus shove with horns; STR save DC = 8 + proficiency + STR)',
            'Imposing Presence (Proficiency in Intimidation or Persuasion)',
            'Languages (Common, Minotaur)'
        ]
    },

    'Orc': {
        abilityScoreIncrease: ['+2 Strength', '+1 Constitution'],
        traits: [
            'Darkvision (60 ft)',
            'Aggressive (Bonus action to move up to your speed toward an enemy)',
            'Menacing (Proficiency in Intimidation)',
            'Powerful Build (Count as one size larger for carrying capacity)',
            'Languages (Common, Orc)'
        ]
    },

    'Satyr': {
        abilityScoreIncrease: ['+2 Charisma', '+1 Dexterity'],
        traits: [
            'Fey (Type: Fey)',
            'Magic Resistance (Advantage on saving throws vs spells)',
            'Mirthful Leaps (Add 1d8 to jump distance once per turn)',
            'Ram (Unarmed strike with horns, 1d4 + STR bludgeoning)',
            'Reveler (Proficiency in Performance and Persuasion)',
            'Languages (Common, Sylvan)'
        ]
    },

    'Shadar-kai': {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Constitution'],
        traits: [
            'Darkvision (60 ft)',
            'Necrotic Resistance (Resistance to necrotic damage)',
            'Blessing of the Raven Queen (1/day: teleport 30 ft as bonus action, gain resistance to all damage until start of next turn)',
            'Fey Ancestry (Advantage on saves against being charmed, can’t be magically put to sleep)',
            'Languages (Common, Elvish)'
        ]
    },

    'Shifter': {
        abilityScoreIncrease: ['+2 Dexterity', '+1 to another stat depending on subrace'],
        traits: [
            'Darkvision (60 ft)',
            'Shifting (Bonus action to shift for 1 minute, gain temporary HP and additional benefit depending on subrace)',
            'Languages (Common)'
        ]
    },

    'Tabaxi': {
        abilityScoreIncrease: ['+2 Dexterity', '+1 Charisma'],
        traits: [
            'Darkvision (60 ft)',
            'Feline Agility (Double movement until you move 0 on a turn)',
            'Cat’s Claws (Unarmed strike, 1d4 slashing damage)',
            'Cat’s Talent (Proficiency in Perception and Stealth)',
            'Languages (Common, one other of your choice)'
        ]
    },

    'Tiefling': {
        abilityScoreIncrease: ['+2 Charisma', '+1 Intelligence'],
        traits: [
            'Darkvision (60 ft)',
            'Hellish Resistance (Resistance to fire damage)',
            'Infernal Legacy (Thaumaturgy cantrip; 3rd level: Hellish Rebuke; 5th level: Darkness)',
            'Languages (Common, Infernal)'
        ]
    },

    'Tortle': {
        abilityScoreIncrease: ['+2 Strength', '+1 Wisdom'],
        traits: [
            'Claws (Unarmed strike, 1d6 slashing damage)',
            'Hold Breath (Up to 1 hour)',
            'Natural Armor (AC = 17 + Dex modifier; can’t wear armor)',
            'Shell Defense (Bonus action: +4 AC but prone, can’t move or take reactions)',
            'Languages (Common, Aquan)'
        ]
    },

    'Triton': {
        abilityScoreIncrease: ['+1 Strength', '+1 Constitution', '+1 Charisma'],
        traits: [
            'Amphibious (Can breathe air and water)',
            'Control Air and Water (Can cast Fog Cloud, Gust of Wind, and Wall of Water at certain levels)',
            'Emissary of the Sea (Can communicate simple ideas with aquatic beasts)',
            'Guardians of the Depths (Cold resistance and ignore penalties for deep underwater)',
            'Languages (Common, Primordial)'
        ]
    },

    'Warforged': {
        abilityScoreIncrease: ['+2 Constitution', '+1 to any other stat'],
        traits: [
            'Constructed Resilience (Advantage vs poison, immune to disease, doesn’t need to eat, drink, or breathe)',
            'Sentry’s Rest (Can take a long rest while remaining semi-conscious)',
            'Integrated Protection (Can integrate armor into body)',
            'Specialized Design (Tool proficiency of choice)',
            'Languages (Common, one of your choice)'
        ]
    },

    'Yuan-ti Pureblood': {
        abilityScoreIncrease: ['+2 Charisma', '+1 Intelligence'],
        traits: [
            'Darkvision (60 ft)',
            'Innate Spellcasting (Poison Spray cantrip; 1/day: Animal Friendship (snakes only), Suggestion)',
            'Magic Resistance (Advantage on saves against spells and magical effects)',
            'Poison Immunity',
            'Languages (Common, Abyssal, Draconic)'
        ]
    }


};

