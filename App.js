import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';  4.2 (gzipped: 1.8k)
import { StyleSheet, Text, View,  } from 'react-native';
import { getlatestGames } from './lib/metacritic';

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getlatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {games.map((game) => 
        <View key={game.slug} style={styles.card}> 
        <image
     <image 
       source={{ uri: game.image }}
       style={{width: 107, height: 147, borderRadius: 10, }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
