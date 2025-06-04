import { NativeModules, NativeEventEmitter, PermissionsAndroid, Platform } from "react-native";

const { SpeechToText } = NativeModules;
const emitter = new NativeEventEmitter(SpeechToText);

export const requestMicPermission = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Microphone Permission',
                message: 'This app needs access to your microphone for speech recognition.',
                buttonPositive: 'OK',
            },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
};

export const startListening = (language: string = 'en-US') => {
    SpeechToText.startListening(language);
};

export const stopListening = () => {
    SpeechToText.stopListening();
};

export const onSpeechResults = (callback: (text: string) => void) => {
    return emitter.addListener('onSpeechResults', callback);
};

export const onSpeechError = (callback: (error: string) => void) => {
    return emitter.addListener('onSpeechError', callback);
};