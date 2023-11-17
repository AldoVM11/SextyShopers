import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticiasScreen = () => {
  // Aquí podrías añadir la lógica para obtener las noticias, si es necesario

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias</Text>
      {/* Aquí podrías renderizar las noticias */}
      <View style={styles.noticiaContainer}>
        <Text style={styles.noticiaTitle}>Título de la Noticia</Text>
        <Text style={styles.noticiaDescription}>Descripción de la Noticia</Text>
      </View>
      {/* Puedes agregar más componentes de noticias aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  noticiaContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 15,
  },
  noticiaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noticiaDescription: {
    fontSize: 16,
  },
});

export default NoticiasScreen;
