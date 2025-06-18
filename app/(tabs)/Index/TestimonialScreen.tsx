import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, TextInput, Button, TouchableOpacity } from 'react-native';

// Definição da interface para os depoimentos
interface Testimonial {
  image: any;
  comment: string;
  name: string;
  role: string;
}

// Dados dos depoimentos
const testimonials: Testimonial[] = [
  {
    image: require('../../../assets/images/Roddy rich.jpg'),
    comment:
      '"Great quality and fast delivery! Definitely buying again."',
    name: 'Roddy Rich',
    role: 'Cliente Satisfeito',
  },
  {
    image: require('../../../assets/images/PZ.jpg'),
    comment:
      'Cardique, melhor loja do momento Papo é reto, pode separar a loja toda que vou chegar em peso. ',
    name: 'Poze do Rodo',
    role: 'Cliente Satisfeito',
  },
  {
    image: require('../../../assets/images/JulianaLima.jpg'),
    comment:
      '"Atendimento impecável e os detalhes das peças são perfeitos. Recomendo muito!"',
    name: 'Fernanda',
    role: 'Cliente Satisfeita',
  },
  {
    image: require('../../../assets/images/esquentaaaa.jpg'),
    comment:
      '"Fiz minha primeira compra com um pouco de receio por ser online, mas fui surpreendida positivamente. O atendimento foi super atencioso, tiraram todas as minhas dúvidas antes da compra. Quando chegou, a embalagem estava linda e as peças vieram com um brilho maravilhoso. Dá pra ver que são feitas com muito cuidado e qualidade. Já estou de olho em outras peças da loja!"',
    name: 'Regina Casé',
    role: 'Cliente Satisfeita',
  },
  {
    image: require('../../../assets/images/dada rajada.jpg'),
    comment:
      '"Não tenho palavras para descrever a minha experiência com essa loja. Desde o primeiro contato até o pós-venda, me senti muito bem atendida. Comprei um par de brincos de prata e um colar de ouro, e ambos vieram com acabamento impecável, sem contar o cuidado com a embalagem e o cheirinho delicioso que veio junto! Além disso, os preços são super justos pela qualidade que entregam. Recomendo de olhos fechados para quem busca acessórios de alto nível."',
    name: 'Dada Rajada',
    role: 'Cliente Satisfeita',
  },
];

const TestimonialScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [testimonialsData, setTestimonialsData] = useState(testimonials);

  // Função para adicionar um novo comentário
  const addTestimonial = () => {
    if (newName && newComment) {
      const newTestimonial: Testimonial = {
        image: require('../../../assets/images/Perfil1.png'), // Pode ser uma imagem padrão ou do usuário
        comment: newComment,
        name: newName,
        role: 'Novo Cliente', // Pode permitir o usuário escolher o papel ou definir um valor padrão
      };
      setTestimonialsData([...testimonialsData, newTestimonial]);
      setModalVisible(false);
      setNewName('');
      setNewComment('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.testimonialList}>
        {testimonialsData.map((item, index) => (
          <View key={index} style={styles.testimonialItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.quoteIcon}>“</Text>
            <Text style={styles.comment}>{item.comment}</Text>
            <View style={styles.intro}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botão para abrir o modal de adicionar comentário */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Adicionar Comentário</Text>
      </TouchableOpacity>

      {/* Modal para adicionar um comentário */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Comentário</Text>

            {/* Campo de nome */}
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              value={newName}
              onChangeText={setNewName}
            />

            {/* Campo de comentário */}
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Seu comentário"
              value={newComment}
              onChangeText={setNewComment}
              multiline
            />

            {/* Botões do modal */}
            <Button title="Adicionar" onPress={addTestimonial} color="#12122b"/>
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090', // Cor marrom claro no fundo
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  testimonialList: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  testimonialItem: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
    maxWidth: 350,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  quoteIcon: {
    fontSize: 40,
    color: '#888',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  comment: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 15,
  },
  intro: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  role: {
    fontSize: 14,
    color: '#777',
  },
  addButton: {
    backgroundColor: '#12122b',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
});

export default TestimonialScreen;
