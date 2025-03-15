import {StyleSheet} from "react-native";

export const theme = {
    primary: "#007AFF", // Standard Blue for Both Platforms
    secondary: "#6200EE",
    background: "#FFFFFF",
    text: "#000000",
    buttonBackground: "#007AFF",
    buttonText: "#FFFFFF",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    workoutContainer: {
        marginTop: 20,
        width: '100%',
    },
    dayButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    activeDayButton: {
        // backgoundColor: '#f9a825',
    },
    activeDayButtonText: {
        color: '#fff',
    },
    dayButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    dayButtonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
    exerciseList: {
        paddingBottom: 20,
    },
    dayTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        // marginBottom-10,
    },
    regContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    logo: {
        fontSize: 80,
        marginBottom: 10,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    headerBackground: {
        width: "100%",
        height: "45%",
        backgroundColor: "#FFA726",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginVertical: 10,
    },
    appButton: {
        backgroundColor: "#FFA726",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 20,
    },
    appButtonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
        // textAlign: "center",
        alignSelf: "center",
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: theme.text,
    },
    button: {
        backgroundColor: theme.buttonBackground,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: theme.buttonText,
        fontSize: 16,
        fontWeight: "bold",
    },
    image: {
        width: 400,
        height: 400,
        borderRadius: 50,
        marginTop: 20,
    },
    navBar: {
        flexDirection: 'row', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            backgroundColor: '#fff', 
            paddingVertical: 10, 
            borderTopWidth: 1, 
            borderTopColor: '#ccc',
            position: 'absolute',
            bottom: 0,
            width: '100%',
    },
    form: {
        width: '100%',
        alignItems: 'center',
    },
    exerciseContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    exerciseName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    }
});
