import { Alert, StyleSheet, Text, TextInput, View } from "react-native"
import {Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider} from "react-native-popup-menu";
import Ionicons from "react-native-vector-icons/Ionicons";
import DashboardItem from "../../components/DashBoardItem";
import PopupMenu from "../../components/PopupMenu";
export default function HomeSmartphonePortrait() {
    return (
        <View style={styles.container}>
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
                <DashboardItem data={{iconName: "home", value: "167 KW"}} />
                <DashboardItem data={{iconName: "sunny", value: "210 KW"}} />
                <DashboardItem data={{iconName: "battery-charging", value: "167 KW"}} />
            </View>

            <View style={styles.listItems}>
                <Text>list items</Text>
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
        flexGrow: 1,
        flexShrink: 1,
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
        alignItems: "center",
        zIndex: 2
    },
    mainContent: {
        flexGrow: 8,
        flexShrink: 8,
        backgroundColor: "#F3F3F3",
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        justifyContent: "space-around",
        elevation: 5,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"

    },
    listItems: {
        flexGrow: 10,
        flexShrink: 10,
        backgroundColor: "green",
        marginHorizontal: 10,
        marginBottom: 10
    }
});