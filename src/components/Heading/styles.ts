import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 32,
    },
    title: {
        textAlign: "center",
        fontSize: THEME.FONT_SIZE.LG_32,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.TEXT,
    },
    subtitle: {
        textAlign: "center",
        fontSize: THEME.FONT_SIZE.MD_18,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.CAPTION_400,
    },


});