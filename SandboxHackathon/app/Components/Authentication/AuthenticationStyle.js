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
    headerBackground: {
        width: "100%",
        height: "45%",
        backgroundColor: "#FFA726",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: "center",
        justifyContent: "center",
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
    }
});
