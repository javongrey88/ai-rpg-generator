// app/index.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧙 AI RPG Generator</Text>

      <Pressable style={styles.button} onPress={() => router.push('/character')}>
        <Text style={styles.buttonText}>Generate Character</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/monster')}>
        <Text style={styles.buttonText}>Generate Monster</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7f5af0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
