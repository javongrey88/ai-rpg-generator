import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, Pressable, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { classFeatures } from '../data/classFeatures';
import { raceFeatures } from '../data/raceFeatures';

const races = [
  'Aarakocra', 'Aasimar', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn',
  'Dwarf', 'Elf', 'Fairy', 'Firbolg', 'Genasi (Air)', 'Genasi (Earth)',
  'Genasi (Fire)', 'Genasi (Water)', 'Githyanki', 'Githzerai', 'Gnome', 'Goblin',
  'Goliath', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kenku',
  'Kobold', 'Leonin', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Satyr',
  'Shadar-kai', 'Shifter', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Warforged',
  'Yuan-ti Pureblood'
];

const genders = ['Male', 'Female', 'Non-binary', 'Custom'];
const classes = [
  'Artificer', 'Barbarian', 'Bard', 'BloodHunter', 'Cleric', 'Druid', 'Fighter',
  'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
];
const levels = Array.from({ length: 20 }, (_, i) => `${i + 1}`);

type StatBlock = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};

export default function CharacterScreen() {
  const [race, setRace] = useState(races[0]);
  const [gender, setGender] = useState(genders[0]);
  const [customGender, setCustomGender] = useState('');
  const [charClass, setCharClass] = useState(classes[0]);
  const [level, setLevel] = useState('1');
  const [stats, setStats] = useState<StatBlock>({ STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 });
  const [savedStats, setSavedStats] = useState<StatBlock | null>(null);
  const [charClassFeatures, setCharClassFeatures] = useState<string[]>([]);
  const [charRaceFeatures, setCharRaceFeatures] = useState<{ abilityScoreIncrease: string[]; traits: string[] }>({
    abilityScoreIncrease: [],
    traits: []
  });

  const handleGenerateStats = () => {
    const newStats: StatBlock = {
      STR: rollStat(),
      DEX: rollStat(),
      CON: rollStat(),
      INT: rollStat(),
      WIS: rollStat(),
      CHA: rollStat()
    };

    // Add level-based bonus points
    const bonusPoints = Math.floor(parseInt(level, 10) / 4);
    const statKeys: (keyof StatBlock)[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

    for (let i = 0; i < bonusPoints; i++) {
      const randomKey = statKeys[Math.floor(Math.random() * statKeys.length)];
      newStats[randomKey] += 1;
    }

    setStats(newStats);
  };

  const handleSave = () => {
    setSavedStats({ ...stats });
  };

  const getClassAndRaceFeatures = () => {
    const selectedLevel = parseInt(level, 10);
    const baseClass = classFeatures[charClass]?.base || [];
    const levelClass = Object.entries(classFeatures[charClass] || {})
      .filter(([lvl]) => !isNaN(Number(lvl)) && Number(lvl) <= selectedLevel)
      .flatMap(([, feats]) => feats);
    setCharClassFeatures([...baseClass, ...levelClass]);
    setCharRaceFeatures(raceFeatures[race] || { abilityScoreIncrease: [], traits: [] });
  };

  useEffect(() => {
    getClassAndRaceFeatures();
  }, [race, charClass, level]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧝 Character Generator</Text>

      <Text style={styles.label}>Race</Text>
      <Picker selectedValue={race} onValueChange={setRace} style={styles.picker}>
        {races.map((r) => <Picker.Item key={r} label={r} value={r} />)}
      </Picker>

      <Text style={styles.label}>Gender</Text>
      <Picker selectedValue={gender} onValueChange={(value) => { setGender(value); if (value !== 'Custom') setCustomGender(''); }} style={styles.picker}>
        {genders.map((g) => <Picker.Item key={g} label={g} value={g} />)}
      </Picker>

      {gender === 'Custom' && (
        <>
          <Text style={styles.label}>Enter Custom Gender</Text>
          <TextInput
            value={customGender}
            onChangeText={(text) => text.length <= 50 && setCustomGender(text)}
            placeholder="Type custom gender..."
            placeholderTextColor="#aaa"
            style={styles.input}
            maxLength={50}
          />
          <Text style={styles.charCount}>{customGender.length}/50</Text>
        </>
      )}

      <Text style={styles.label}>Class</Text>
      <Picker selectedValue={charClass} onValueChange={setCharClass} style={styles.picker}>
        {classes.map((c) => <Picker.Item key={c} label={c} value={c} />)}
      </Picker>

      <Text style={styles.label}>Level</Text>
      <Picker selectedValue={level} onValueChange={setLevel} style={styles.picker}>
        {levels.map((lvl) => <Picker.Item key={lvl} label={lvl} value={lvl} />)}
      </Picker>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Race Features</Text>
        <Text style={styles.subheading}>Ability Score Increases</Text>
        {charRaceFeatures.abilityScoreIncrease.map((asi, idx) => (
          <Text key={`asi-${idx}`} style={styles.featureItem}>• {asi}</Text>
        ))}
        <Text style={styles.subheading}>Traits</Text>
        {charRaceFeatures.traits.map((trait, idx) => (
          <Text key={`trait-${idx}`} style={styles.featureItem}>• {trait}</Text>
        ))}
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Class Features</Text>
        {charClassFeatures.map((f, idx) => (
          <Text key={idx} style={styles.featureItem}>• {f}</Text>
        ))}
      </View>

      <Pressable style={styles.button} onPress={handleGenerateStats}>
        <Text style={styles.buttonText}>Generate Attributes</Text>
      </Pressable>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Stats</Text>
        {Object.entries(stats).map(([key, value]) => (
          <Text key={key} style={styles.statText}>{key}: {value}</Text>
        ))}
      </View>

      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Character</Text>
      </Pressable>
    </ScrollView>
  );
}

function rollStat(): number {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  return rolls.slice(1).reduce((sum, val) => sum + val, 0);
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#2c2c44',
    color: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2c2c44',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  charCount: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#7f5af0',
    padding: 15,
    borderRadius: 10,
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#00b894',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  statsContainer: {
    marginTop: 30,
    backgroundColor: '#2c2c44',
    padding: 15,
    borderRadius: 10,
  },
  statsTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  statText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
  featuresContainer: {
    marginTop: 30,
    backgroundColor: '#2c2c44',
    padding: 15,
    borderRadius: 10,
  },
  featuresTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subheading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  featureItem: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 5,
  },
});














