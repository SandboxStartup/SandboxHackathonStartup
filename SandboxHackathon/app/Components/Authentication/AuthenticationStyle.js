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
        backgroundColor: theme.background,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.text,
        marginBottom: 20,
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
});
