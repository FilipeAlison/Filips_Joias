import React from "react";
import { View, Text, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

const ContactScreen = () => {
    return (
        <ScrollView style={{ padding: 20, backgroundColor: "#708090" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>
            <Text style={{ color: "#12122b" }}>𝓕𝓲𝓵𝓲𝓹`𝓼 𝓙𝓸𝓲𝓪𝓼 </Text>
            </Text>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Fale conosco</Text>
                <Text style={{ fontSize: 16, color: "#12122b", marginTop: 5 }}>
                    Entre em contato para mais informações, dúvidas ou problemas.
                </Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Phone:</Text>
                <Text style={{ fontSize: 16 }}>+55 61 3457-7273</Text>
                <Text style={{ fontSize: 16 }}>+55 61 99616-2979</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email:</Text>
                <Text style={{ fontSize: 16 }}>filipsjoias1@hotmail.com.br</Text>
                <Text style={{ fontSize: 16 }}>ouvidoriajoias@gmail.com.br</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Instagram:</Text>
                <Text style={{ fontSize: 16, color: "blue" }} onPress={() => Linking.openURL("https://www.instagram.com/FilipJoias")}>https://www.instagram.com/FilipJoias</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Facebook:</Text>
                <Text style={{ fontSize: 16, color: "blue" }} onPress={() => Linking.openURL("https://www.facebook.com/FilipJoias")}>https://www.facebook.com/FilipJoias</Text>
            </View>

            <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }} placeholder="Nome" />
            <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }} placeholder="Email" keyboardType="email-address" />
            <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }} placeholder="Assunto" />
            <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, height: 100, textAlignVertical: "top" }} placeholder="Mensagem" multiline />

            <TouchableOpacity style={{ backgroundColor: "#12122b", padding: 15, borderRadius: 5, alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Enviar mensagem</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ContactScreen;
