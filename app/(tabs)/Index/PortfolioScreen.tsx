import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';

type FilterType = 'all' | 'web' | 'design' | 'photography';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para imagem selecionada
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    { id: '1', imgSrc: require('../../../assets/images/diamante.png'), category: 'web', title: 'Diamante', description: 'Pedras que encantam por seu brilho incomparável.' },
    { id: '2', imgSrc: require('../../../assets/images/segundo.png'), category: 'web', title: 'Prata', description: 'Peças delicadas, com brilho discreto e design atemporal.' },
    { id: '3', imgSrc: require('../../../assets/images/lingotes-de-ouro.png'), category: 'design', title: 'Ouro', description: 'Joias clássicas com acabamento luxuoso. Símbolo de elegância, durabilidade e valor.' },
    { id: '4', imgSrc: require('../../../assets/images/estrelas.png'), category: 'design', title: 'Brincos e Anéis', description: 'Desde os modelos minimalistas aos mais sofisticados.' },
    { id: '5', imgSrc: require('../../../assets/images/pingente.png'), category: 'photography', title: 'Colares e Correntes', description: 'Modelos que vão do discreto ao chamativo. Trabalhamos com prata, ouro e com pedras e pingentes exclusivas.' },
    { id: '6', imgSrc: require('../../../assets/images/piercing.png'), category: 'photography', title: 'Piercing e Outros', description: 'Para quem ama ousar e mostrar atitude. Piercings, pulseiras, tornozeleiras e acessórios diferenciados.' },
  ];

  const filteredItems = portfolioItems.filter(item => activeFilter === 'all' || item.category === activeFilter);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalVisible(true);
  };

  const closeImageModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.heading}>              
            </View>
            <View style={styles.filters}>
              <TouchableOpacity style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]} onPress={() => handleFilterChange('all')}>
                <Text style={styles.filterText}>Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, activeFilter === 'web' && styles.activeFilter]} onPress={() => handleFilterChange('web')}>
                <Text style={styles.filterText}>Mais Avaliados</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, activeFilter === 'design' && styles.activeFilter]} onPress={() => handleFilterChange('design')}>
                <Text style={styles.filterText}>Mais Acessados</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, activeFilter === 'photography' && styles.activeFilter]} onPress={() => handleFilterChange('photography')}>
                <Text style={styles.filterText}>Mais Comentados</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.portfolioItem}>
            <Image source={item.imgSrc} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity style={styles.viewButton} onPress={() => openImageModal(item.imgSrc)}>
                <Text style={styles.viewButtonText}>Ampliar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />

      {/* Modal para exibir a imagem ampliada */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade" onRequestClose={closeImageModal}>
  <View style={styles.modalOverlay}>
    <TouchableOpacity style={styles.modalCloseButton} onPress={closeImageModal}>
      <Text style={styles.modalCloseText}>Fechar</Text>
    </TouchableOpacity>
    {/* Verificação para saber se a imagem é local ou remota */}
    {selectedImage && (
      <Image 
        source={typeof selectedImage === 'string' ? { uri: selectedImage } : selectedImage} 
        style={styles.modalImage} 
      />
    )}
  </View>
</Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#708090',
  },
  heading: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  spanText: {
    color: '#3498db',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  filterButton: {
    marginHorizontal: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#12122b',
  },
  activeFilter: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9',
  },
  filterText: {
    fontSize: 16,
    color: '#000',
  },
  portfolioItem: {
    width: '30%',
    marginBottom: 20,
    marginRight: '3%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
    height: 250,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  viewButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  viewButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 50,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Portfolio;
