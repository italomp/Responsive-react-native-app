import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PopupMenu(){
    const [visible, setVisible] = useState(false);
    const options = [

    ];
    return(
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Ionicons name="menu" size={26} color="white" />
                <Modal transparent visible={visible}>
                    <SafeAreaView 
                        style={{flex: 1}} 
                        onTouchStart={() => setVisible(false)}>
                        
                        <View style={styles.popup} >
                            <TouchableOpacity style={styles.menuItem} >
                                <Text>Perfil</Text>
                                <Ionicons name="person" size={16} color="#B00202" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text>Configurações</Text>
                                <Ionicons name="settings" size={16} color="#B00202" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text>Sair</Text>
                                <Ionicons name="log-out" size={16} color="#B00202" />
                            </TouchableOpacity>
                        </View>

                    </SafeAreaView>
                </Modal>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    popup: {
        borderWidth: 1,
        borderColor: "#B00202",
        borderRadius: 8,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: "absolute",
        top: 45,
        right: 20
    },
    menuItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 10
    }
});