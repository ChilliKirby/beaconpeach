import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
    title: string;
    onPress: () => void;
    variant?: string;
    disabled?: boolean;
}

export function AppButton({ title, onPress, variant, disabled}: AppButtonProps){
    const isSecondary = variant === 'secondary';

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.base,
                isSecondary ? styles.secondary : styles.primary,
                pressed && !disabled && styles.pressed,
                disabled && styles.disabled,
            ]}
            >
                <Text style={[
                    styles.textBase,
                    isSecondary ? styles.secondaryText : styles.primaryText,
                    disabled && styles.disabledText,
                ]}>
                    {title}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    base: {
        minHeight: 48,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    primary: {
        backgroundColor: '#FcBE6A',
        shadowColor: '#2563EB',

        //iOS shadow. Ignored on Android
        shadowOffset: {width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,

        //Android
        elevation: 3,
    },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: 'CBD5E1',
    },
    pressed: {
        opacity: 0.85,
        transform: [{scale: 0.98 }],
    },
    disabled: {
        backgroundColor: '#E5E7EB',
        borderColor: 'trasparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    textBase: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    primaryText: {
        color: '#FFFFFF',
    },
    secondaryText: {
        color: '#1E293B'
    },
    disabledText: {
        color: '#94a3B8'
    }
})