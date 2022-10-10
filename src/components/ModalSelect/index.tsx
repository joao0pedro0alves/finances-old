import { View, Modal, ModalProps, Pressable, Text } from "react-native"
import { OptionType } from "../../@types"

import { styles } from "./styles"

interface ModalSelectProps extends ModalProps {
    options: OptionType[]
    value: string | null
    onChangeValue: (value: string, option: OptionType) => void
}

export function ModalSelect({
    options,
    value,
    onChangeValue,
    ...props
}: ModalSelectProps) {
    const isActive = (option: OptionType) => option.value === value

    return (
        <Modal animationType="fade" transparent {...props}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {options.map((option, index) => (
                        <Pressable
                            style={[styles.option, index === 0 && styles.first]}
                            key={option.value}
                            onPress={() => onChangeValue(option.value, option)}
                        >
                            <View style={styles.circle}>
                                {isActive(option) && (
                                    <View style={styles.smallCircle} />
                                )}
                            </View>

                            <Text style={styles.optionText}>
                                {option.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </Modal>
    )
}
