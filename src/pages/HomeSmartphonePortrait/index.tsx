import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";
import DashboardItem from "../../components/DashBoardItem";
import Plant from "../../components/Plant";
import PopupMenu from "../../components/PopupMenu";
export default function HomeSmartphonePortrait() {
    const plants = [
        {
            id: 1,
            city: "Araripina",
            state: "Pernambuco",
            country: "Brasil",
            generationValue: 100
        },
        {
            id: 2,
            city: "Teresina",
            state: "Piauí",
            country: "Brasil",
            generationValue: 300
        },
        {
            id: 3,
            city: "Fortaleza",
            state: "Ceará",
            country: "Brasil",
            generationValue: 180
        },
        {
            id: 4,
            city: "São Luís",
            state: "Maranhão",
            country: "Brasil",
            generationValue: 110
        },
        {
            id: 5,
            city: "Makurdi",
            state: "Benui",
            country: "Nigéria",
            generationValue: 250
        },
        {
            id: 6,
            city: "Lafia",
            state: "Plateau",
            country: "Brasil",
            generationValue: 100
        },
        {
            id: 7,
            city: "Cidade do Cabo",
            state: "Cabo Oriental",
            country: "Africa do Sul",
            generationValue: 100
        },
        {
            id: 8,
            city: "Calama",
            state: "El leoa",
            country: "Chile",
            generationValue: 100
        },
        {   
            id: 9,
            city: "Vallenar",
            state: "Huasco",
            country: "Chile",
            generationValue: 100
        },
        {   
            id: 10,
            city: "Quilpué",
            state: "Marga Marga",
            country: "Chile",
            generationValue: 100
        }
    ];

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={styles.headerIconContainer} >
                    <Ionicons name="globe-outline" size={35} color="white"/>
                </View>
                
                <View style={styles.headerTextInputContainer} >
                    <TextInput placeholder="Pesquise por..." style={styles.headerTextInput} />
                </View>
                
                <PopupMenu />
            </View>
        
            <View style={styles.mainContent}>
                <Text style={styles.titles} >Dashboard</Text>
                <View style={styles.dashboard} >
                    <DashboardItem data={{iconName: "home", value: "167 KW"}} />
                    <DashboardItem data={{iconName: "sunny", value: "210 KW"}} />
                    <DashboardItem data={{iconName: "battery-charging", value: "167 KW"}} />
                </View>
            </View>
            
            <View style={styles.listItems}>
                <Text style={styles.titles} >Plantas</Text>
                <FlatList 
                    data={plants}
                    renderItem={({item}) => <Plant data={item}/>}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%"
    },
    header: {
        backgroundColor: "#B00202",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"  
    },
    headerIconContainer: {
        width: "10%"
    },
    headerTextInputContainer: {
        width: "70%"
    },
    headerTextInput: {
        borderWidth: 1, 
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 0, 
        borderColor: "white",
        backgroundColor: "white"
    },
    headerMenuContainer: {
        width: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainContent: {
        backgroundColor: "#F3F3F3",
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        elevation: 5,
        borderRadius: 5,
        justifyContent: "center",
        height: "20%"
    },
    dashboard: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    },
    listItems: {
        backgroundColor: "#F3F3F3",
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        gap: 10,
        elevation: 5,
        borderRadius: 5,
        height: "65%"
    },
    titles: {
        fontWeight: "bold"
    }
});