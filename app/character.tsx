import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
  'Artificer', 'Barbarian', 'Bard', 'Blood Hunter', 'Cleric', 'Druid', 'Fighter',
  'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
];

const levels = Array.from({ length: 20 }, (_, i) => `${i + 1}`);

export default function CharacterScreen() {
  const [race, setRace] = useState(races[0]);
  const [gender, setGender] = useState(genders[0]);
  const [customGender, setCustomGender] = useState('');
  const [charClass, setCharClass] = useState(classes[0]);
  const [level, setLevel] = useState('1');

  const handleGenerate = () => {
    const finalGender = gender === 'Custom' ? customGender : gender;
    console.log('Generating character with:', {
      race,
      gender: finalGender,
      charClass,
      level,
    });
    // Later: call AI to generate stats, backstory, image
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧝 Character Generator</Text>

      <Text style={styles.label}>Race</Text>
      <Picker selectedValue={race} onValueChange={setRace} style={styles.picker}>
        {races.map((r) => <Picker.Item key={r} label={r} value={r} />)}
      </Picker>

      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(value) => {
          setGender(value);
          if (value !== 'Custom') setCustomGender('');
        }}
        style={styles.picker}
      >
        {genders.map((g) => <Picker.Item key={g} label={g} value={g} />)}
      </Picker>

      {gender === 'Custom' && (
        <>
          <Text style={styles.label}>Enter Custom Gender</Text>
          <TextInput
            value={customGender}
            onChangeText={(text) => {
              if (text.length <= 50) setCustomGender(text);
            }}
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

      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generate Character</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});


