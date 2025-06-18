import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

const AboutScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/Filips joias.png')} 
          style={styles.image} 
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Acessórios da melhor qualidade</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>Fundado: <Text style={styles.highlight}>2004</Text></Text>
          <Text style={styles.info}>Especialidade: <Text style={styles.highlight}>Acessórios</Text></Text>
          <Text style={styles.info}>Idiomas: <Text style={styles.highlight}>Português, Inglês</Text></Text>
          <Text style={styles.info}>Localização: <Text style={styles.highlight}>Brasília, Brasil</Text></Text>
          <Text style={styles.info}>Disponibilidade: <Text style={styles.highlight}>Segunda a Sábado</Text></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Sobre nós</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statText}>Anos de Experiência</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}> mais de 10 lojas físicas </Text>
          <Text style={styles.statText}>Em toda Brasilia</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}> +100 variades </Text>
          <Text style={styles.statText}>Para serem vendidas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>Top 1</Text>
          <Text style={styles.statText}>Loja de acessórios em Brasilia</Text>
        </View>
      </View>

      {/* Modal de Saiba Mais */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sobre a ClinicalMed</Text>
            <Text style={styles.modalDescription}>
              Quem Somos – Filip’s Joias 💎

Na Filip’s Joias, cada peça é escolhida com cuidado para valorizar ainda mais o seu estilo. Trabalhamos com produtos de qualidade, design moderno e preços acessíveis, para que todos possam ter uma joia especial.

Nosso diferencial?
Além das nossas peças incríveis, temos uma equipe de profissionais apaixonados pelo que fazem. Eles conhecem cada detalhe das nossas joias e estão sempre prontos para oferecer um atendimento atencioso, personalizado e com as melhores dicas para você.

Seja para um presente ou para aquele auto-presente que você merece…
A Filip’s Joias tem a peça certa pra você!

✨ Filip’s Joias – Porque você merece brilhar! ✨


              
              
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#708090', // Marrom claro
    alignItems: 'center',
    minHeight: '100%', // Garantir que a tela ocupe toda a altura
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100, // Borda arredondada
  },
  content: {
    alignItems: 'center',
    flex: 1, // Permite o conteúdo ocupar o espaço restante
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#12122b',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#12122b',
  },
  button: {
    backgroundColor: '#12122b', // Marrom escuro
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%', // Para garantir que os elementos se ajustem bem
  },
  statBox: {
    backgroundColor: '#D8EEF8',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 2,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#12122b',
  },
  statText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#12122b',
  },
  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: '80%', // Limita a altura do modal
    overflow: 'scroll', // Caso o conteúdo ultrapasse o limite, permite rolar
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12122b',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#12122b',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#12122b', // Marrom escuro
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AboutScreen;
