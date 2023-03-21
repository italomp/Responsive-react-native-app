import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PopupMenu(){
    const [visible, setVisible] = useState(false);
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
                                <Text style={styles.itemText} >Perfil</Text>
                                <Ionicons name="person" size={16} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.itemText} >Configurações</Text>
                                <Ionicons name="settings" size={16} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.itemText} >Sair</Text>
                                <Ionicons name="log-out" size={16} color="white" />
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
        borderColor: "white",
        borderRadius: 8,
        backgroundColor: "#B00202",
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
    },
    itemText: {
        color: "white"
    }
});