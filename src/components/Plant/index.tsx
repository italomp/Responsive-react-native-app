import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type PlantProps = {
    data: {
        city: string,
        state: string,
        country: string,
        generationValue: number
    }
}

export default function Plant(props: PlantProps){
    const data = props.data;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.countryText} >{data.country}</Text>
                    <Text>{`${data.city}, ${data.state}`}</Text>
                </View>
                <View style={styles.icons}>
                    <Ionicons name="notifications" size={16} color="gray" />
                    <Ionicons name="settings" size={16} color="gray" />
                </View>
            </View>
            <View style={styles.generationContainer} >
                <Text>Gerando: {`${data.generationValue} kWh`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 10
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#E5E5E5",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    icons: {
        display: "flex",
        flexDirection: "row"
    },
    countryText: {
        fontWeight: "bold"
    },
    generationContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});