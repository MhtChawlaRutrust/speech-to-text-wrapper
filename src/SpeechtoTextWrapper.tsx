import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
    startListening,
    stopListening,
    onSpeechResults,
    onSpeechError,
    requestMicPermission,
} from './utils';

interface SpeechToTextWrapperProps {
    children: React.ReactElement;
    locale?: string;
    renderMic?: (props: { isListening: boolean; toggle: () => void }) => React.ReactNode;
}

export const SpeechToTextWrapper: React.FC<SpeechToTextWrapperProps> = ({
    children,
    locale = 'en-US',
    renderMic,
}) => {
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        const resultSub = onSpeechResults((text) => {
            const childProps = (children as any)?.props;

            if (typeof childProps?.onChangeText === 'function') {
                childProps.onChangeText(text);
            }
            setIsListening(false);
        });

        const errorSub = onSpeechError(console.error);

        return () => {
            resultSub.remove();
            errorSub.remove();
        };
    }, [children]);

    const toggleListening = async () => {
        const hasPermission = await requestMicPermission();
        if (!hasPermission) return;

        if (isListening) {
            stopListening();
        } else {
            startListening(locale);
        }
        setIsListening(!isListening);
    };

    return (
        <View style={{ justifyContent: "center" }}>
            {children}
            {renderMic ? (
                renderMic({ isListening, toggle: toggleListening })
            ) : (
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 10,
                        position: "absolute",
                        right: 10,
                    }}
                    onPress={toggleListening}
                >
                    <Text>{isListening ? "Stop" : "Start"}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};