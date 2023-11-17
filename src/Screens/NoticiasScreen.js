import { View, StyleSheet  } from 'react-native';
import { WebView } from 'react-native-webview';

const NoticiasScreen = () => {
 // const [noticias, setNoticias] = useState([]);

//   useEffect(() => {
//     const fetchNoticias = async () => {
//       try {
//         const response = await fetch('https://cybermap.kaspersky.com/es');
//         const data = await response.json();
//         // Aquí ajusta la estructura de datos según la respuesta de la API
//         setNoticias(data.articles); // Por ejemplo, si la respuesta tiene un array de artículos
//       } catch (error) {
//         console.error('Error al obtener las noticias:', error);
//       }
//     };

//     fetchNoticias();
//   }, []); // Se ejecuta solo una vez al montar el componente

return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://cybermap.kaspersky.com/es' }} style={styles.webView} />
    </View>
  );
};


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Noticias</Text>
//       {noticias.map((noticia, index) => (
//         <View style={styles.noticiaContainer} key={index}>
//           <Text style={styles.noticiaTitle}>{noticia.title}</Text>
//           <Text style={styles.noticiaDescription}>{noticia.description}</Text>
//         </View>
//       ))}
//     </View>
//   );

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webView: {
      flex: 1,
    },
  });
// Estilos (los mismos que tenías)
// const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       padding: 20,
// //       backgroundColor: 'white',
// //     },
// //     title: {
// //       fontSize: 24,
// //       fontWeight: 'bold',
// //       marginBottom: 20,
// //       textAlign: 'center',
// //     },
// //     noticiaContainer: {
// //       borderWidth: 1,
// //       borderColor: 'lightgray',
// //       padding: 10,
// //       marginBottom: 15,
// //     },
// //     noticiaTitle: {
// //       fontSize: 18,
// //       fontWeight: 'bold',
// //       marginBottom: 5,
// //     },
// //     noticiaDescription: {
// //       fontSize: 16,
// //     },
// //   });

export default NoticiasScreen;
