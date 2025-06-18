import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Biblioteca de ícones

// Definindo o tipo do componente ServiceItem para aceitar apenas os ícones disponíveis na biblioteca FontAwesome do Expo
interface ServiceItemProps {
  icon: React.ComponentProps<typeof FontAwesome>['name']; // Usando os ícones disponíveis na biblioteca FontAwesome
  title: string;
  description: string;
}

const ServicesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Peça já o seu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceContainer}>
        <ServiceItem
          icon="search"
          title="Prata"
          description="Beleza e Elegância com o Brilho da Prata

Descubra a sofisticação acessível com nossa coleção de joias em prata 925. Peças com acabamento impecável, que combinam brilho sutil com design moderno e atemporal. Perfeitas para o dia a dia ou para ocasiões especiais, as joias de prata são ideais para quem busca estilo, delicadeza e qualidade.
👉 Correntes, anéis, pulseiras e brincos com banho antialérgico e garantia de procedência."
        />
        <ServiceItem
          icon="heart"
          title="Ouro"
          description="Tradição, Luxo e Valor Eterno

Nossa linha de joias em ouro 18k é feita para quem busca sofisticação e investimento. Com um brilho único e durabilidade incomparável, cada peça é um símbolo de elegância e status. Do clássico ao moderno, temos alianças, colares, anéis e pingentes que marcam momentos importantes e tornam qualquer ocasião inesquecível.
👉 Ouro legítimo, com certificado de autenticidade e garantia vitalícia.

"
        />
        <ServiceItem
          icon="cut"
          title="Diamante"
          description="O Brilho que Conta Histórias

Nada simboliza mais luxo e eternidade do que um diamante verdadeiro. Cada pedra da nossa coleção é selecionada com rigor para garantir o máximo de brilho, pureza e corte perfeito. São joias que atravessam gerações, perfeitas para noivados, casamentos ou para eternizar momentos especiais.
👉 Trabalhamos com diamantes de alto padrão, com laudos gemológicos e certificação internacional."
        />
        <ServiceItem
          icon="stethoscope"
          title="Brincos e Anéis"
          description="Detalhes que Fazem Toda Diferença

Destaque-se com nossa seleção de brincos e anéis que combinam design sofisticado com materiais de alta qualidade. Desde os modelos mais delicados até os mais ousados, temos opções para todos os estilos. Peças que vão do casual ao elegante, perfeitas para transformar qualquer look.
👉 Trabalhamos com prata, ouro e pedras naturais, com acabamentos impecáveis e garantia de autenticidade."
        />
        <ServiceItem
          icon="leaf"
          title="Colares e Correntes"
          description="Brilho Que Completa o Seu Estilo

Nada como um colar ou uma corrente para valorizar ainda mais o visual. Nossa coleção vai do minimalismo aos modelos mais impactantes, com designs que acompanham as tendências e também os clássicos que nunca saem de moda.
👉 Opções em prata, ouro e com pingentes personalizados. Perfeitas para presentear ou se presentear!"
        />
        <ServiceItem
          icon="cut"
          title="Piercings e outros acessórios"
          description="Seu Estilo, Sua Atitude

Para quem gosta de ousar e mostrar personalidade, nossa linha de piercings e acessórios é a escolha certa. Peças hipoalergênicas, com design moderno e acabamento de alta qualidade. Seja um piercing delicado ou um acessório marcante, temos o que você precisa para expressar seu estilo de forma única.
👉 Modelos em aço cirúrgico, prata e banhados a ouro. Conforto, segurança e muito estilo em cada detalhe."
        />
      </View>
    </ScrollView>
  );
};

// Componente para representar cada item de serviço
const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <View style={styles.serviceItem}>
      <FontAwesome name={icon} size={40} color="#12122b" style={styles.icon} />
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090', // Cor de fundo marrom claro
    padding: 20,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#12122b', // Cor marrom para o título
  },
  highlight: {
    color: '#12122b', // Cor marrom para destacar a palavra 'serviços'
  },
  button: {
    backgroundColor: '#12122b', // Cor do botão marrom
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  serviceContainer: {
    marginTop: 20,
  },
  serviceItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12122b', // Cor marrom para os títulos dos serviços
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default ServicesScreen;
