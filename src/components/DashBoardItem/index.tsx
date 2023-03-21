import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type DashboardItemProps = {
    data: {
        iconName: string,
        value: string
    }
}

export default function DashboardItem(props: DashboardItemProps){
    const data = props.data;
    return(
        <View style={styles.container}>
            <Ionicons name={data.iconName} size={48} color="gray"/>
            <Text style={styles.text}>{data.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold"
    }
});