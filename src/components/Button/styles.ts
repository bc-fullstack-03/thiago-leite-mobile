import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BUTTON,
        padding: 12,
        minWidth: "100%",
        alignItems: "center",
        borderRadius: 12,
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.SEMIBOLD,
        fontSize: THEME.FONT_SIZE.MD,
    }
});