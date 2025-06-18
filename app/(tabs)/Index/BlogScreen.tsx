import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, Linking } from 'react-native';

const images = {
  w1: require('../../../assets/images/nova coleção1.png'),
  w2: require('../../../assets/images/escolha seus acessorios2.png'),
  w3: require('../../../assets/images/limpar correntes3.png'),
  w4: require('../../../assets/images/Promoção4.png'),
};

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  image: any;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Nova Coleção de Acessórios 2025 a espera acabou! Chegaram as novas peças da nossa coleção de acessórios 2025. Designs modernos, pedras naturais, acabamentos diferenciados e muita personalidade.',
    date: '15 de Janeiro de 2025',
    author: 'Vogue News',
    image: images.w1,
    link: 'https://veja.abril.com.br/coluna/letra-de-medico/marco-roxo-desde-o-berco-e-preciso-pensar-na-prevencao-a-epilepsia/',
  },
  {
    id: '2',
    title: 'Misturar Ouro, Prata e Aço? Sim, é Tendência!O mundo da moda está cada vez mais livre de regras, e a mistura de metais virou febre entre fashionistas! Combinar acessórios dourados com prateados.',
    date: '03 de Março de 2025',
    author: 'CNN Brasil',
    image: images.w2,
    link: 'https://www.cnnbrasil.com.br/saude/e-possivel-aumentar-a-testosterona-naturalmente-medico-da-4-dicas/',
  },
  {
    id: '3',
    title: 'Sabia que pequenos cuidados podem fazer suas peças durarem muito mais? Evite contato com perfumes e produtos químicos, guarde suas joias em locais secos e limpe com flanela macia regularmente.',
    date: '05 de Junho de 2025',
    author: 'Globo News',
    image: images.w3,
    link: 'https://www.bbc.com/portuguese/articles/cq8y14z71x9o',
  },
  {
    id: '4',
    title: '"Semana do Brilho: Descontos Imperdíveis em Toda a Loja!"Para celebrar nossos clientes, estamos com uma promoção exclusiva: até 30% OFF em brincos, colares, anéis e piercings!',
    date: '21 de Abril de 2025',
    author: '𝓕𝓲𝓵𝓲𝓹`𝓼 𝓙𝓸𝓲𝓪𝓼',
    image: images.w4,
    link: 'https://jornal.usp.br/ciencias/ciencias-da-saude/perda-auditiva-e-associada-a-declinio-cognitivo-mais-acelerado-confirma-estudo-com-brasileiros/',
  },

];

const BlogScreen: React.FC = () => {
  const renderItem: ListRenderItem<BlogPost> = ({ item }) => (
    <View style={styles.blogItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.button}>
          <Text style={styles.buttonText}>Leia mais →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={blogPosts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090', // Marrom claro
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  highlight: {
    color: '#27ae60',
  },
  flatList: {
    flexGrow: 0,
  },
  blogItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 370,
    height: 500,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  intro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  author: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#12122b',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BlogScreen;
