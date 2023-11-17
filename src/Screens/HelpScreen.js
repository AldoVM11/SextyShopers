import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, Animated } from 'react-native';

const HelpScreen = () => {
  const openURL = (url) => {
    Linking.openURL(url);
  };

  // Crear una animación para el fondo en movimiento
  const animatedColor = new Animated.Value(0);

  // Interpolación de color para cambiar entre azul y gris
  const backgroundColor = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#020385', '#999999'],
  });

  // Animar el cambio de color del fondo
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedColor, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedColor, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]),
  ).start();

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}> 
    <ScrollView style={styles.container}>
      
      {/* Information about reporting cybercrime in Mexico */}
      <View style={styles.section}>
        <Text style={styles.title}>Así puedes denunciar un delito cibernético en México</Text>
        <Text style={styles.paragraph}>
          Los crímenes ya no solo se cometen en las calles. Los delitos cibernéticos son comunes hoy en día y aquí te decimos cómo denunciarlos en México.
        </Text>
        <Text style={styles.paragraph}>
          México es el noveno país más impactado por este problema a nivel mundial.
        </Text>
        <Text style={styles.paragraph}>
          En el entorno digital también hay peligros de los que es necesario cuidarse. Fraudes, suplantación de identidad u otros tipos de delitos cibernéticos son cuestiones que afectan a miles de personas en México. Por ello, aquí te decimos cómo reportar estos delitos.
        </Text>
        <Text style={styles.paragraph}>
          De acuerdo con datos de la empresa de ciberseguridad Surfshark, en 2022 se registró un total de 1,100 personas víctimas de delitos cibernéticos. Si bien la cantidad puede no ser tan alta, sí posiciona a México como el noveno país más impactado por este problema a nivel mundial.
        </Text>
        <Text style={styles.paragraph}>
          Las dos dinámicas delictivas más frecuentes en el país a lo largo del año pasado fueron el phishing (robo de datos a través de correos, mensajes o llamadas en los que defraudador se hace pasar por una compañía fidedigna) y el fraude de inversiones, que también fue el más devastador desde el enfoque financiero, pues representó una pérdida promedio de 108,000 dólares por persona.
        </Text>

        <Text style={styles.title}>¿Qué es un delito cibernético?</Text>
        <Text style={styles.paragraph}>
          De acuerdo con la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (Condusef), un delito cibernético son aquellas estafas que utilizan los medios digitales e internet para realizar transacciones ilícitas.
        </Text>
        {/* Agregar el resto del texto proporcionado */}
        {/* ... */}

        {/* Cómo denunciar un delito cibernético */}
        <Text style={styles.title}>Cómo denunciar un delito cibernético</Text>
        <Text style={styles.paragraph}>
          Para alguien que fue víctima de uno de estos delitos puede emprender acciones para denunciar. El primer paso es reportar el perfil de la red social al correo electrónico cert-mx@sspc.gob.mx
        </Text>
        <Text style={styles.paragraph}>
          También es importante que se respalde la información o casos del delito, ya sea guardando las conversaciones, las imágenes o incluso generando capturas de pantalla de estos elementos, además de guardar las páginas electrónicas desde las que se ejecutaron las estafas.
        </Text>
        <Text style={styles.paragraph}>
          En caso de que se requiera, se puede levantar una denuncia ante un Ministerio Público a través del número telefónico 088, en el que las autoridades deben atender la petición y dar seguimiento al caso.
        </Text>
        <Text style={styles.paragraph}>
          Para contactar a la Policía Cibernética de la Ciudad de México hay tres vías de comunicación. Una es el número 55 52 42 50 86, otra es el correo electrónico policia.cibernetica@ssc.cdmx.gob.mx y la tercera es acudir a sus oficinas en Liverpool 136, Colonia Juárez, alcaldía Cuauhtémoc.
        </Text>
        <Text style={styles.paragraph}>
          La Fiscalía General de Justicia de la Ciudad de México también cuenta con la Unidad de Inteligencia Cibernética, a la cual se puede acudir por medio del número 55 52 42 64 89 o por medio del correo ciberneticapdi@fgjcdmx.gob.mx
        </Text>
        <TouchableOpacity onPress={() => openURL('https://expansion.mx/tecnologia/2023/07/28/como-denunciar-delito-cibernetico')}>
          <Text style={styles.linkText}>Report Cyber Attack</Text>
        </TouchableOpacity>

      </View>

      {/* ... Otras secciones ... */}
    </ScrollView>
    </Animated.View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      //backgroundColor: '#f5f5f5', // Color de fondo más claro
    },
    
  contentContainer: {
    paddingVertical: 10,
  },
    section: {
      marginBottom: 17,
      padding: 15,
      backgroundColor: '#ffffff', // Fondo blanco para cada sección
      borderRadius: 10, // Bordes redondeados
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Sombra para efecto de elevación
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#003366', // Color del título
    },
    paragraph: {
      fontSize: 18,
      marginBottom: 10,
      lineHeight: 24, // Espaciado entre líneas
      color: '#333333', // Color del texto principal
      justifyContent: 'center'
    },
    linkText: {
      fontSize: 18,
      color: '#007bff', // Color del enlace
      marginBottom: 5,
      textDecorationLine: 'underline', // Subrayado del enlace
    },
  // Otros estilos...
});

export default HelpScreen;
