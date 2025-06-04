"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSpeechError = exports.onSpeechResults = exports.stopListening = exports.startListening = exports.requestMicPermission = void 0;
var react_native_1 = require("react-native");
var SpeechToText = react_native_1.NativeModules.SpeechToText;
var emitter = new react_native_1.NativeEventEmitter(SpeechToText);
var requestMicPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
    var granted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(react_native_1.Platform.OS === 'android')) return [3 /*break*/, 2];
                return [4 /*yield*/, react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
                        title: 'Microphone Permission',
                        message: 'This app needs access to your microphone for speech recognition.',
                        buttonPositive: 'OK',
                    })];
            case 1:
                granted = _a.sent();
                return [2 /*return*/, granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED];
            case 2: return [2 /*return*/, true];
        }
    });
}); };
exports.requestMicPermission = requestMicPermission;
var startListening = function (language) {
    if (language === void 0) { language = 'en-US'; }
    SpeechToText.startListening(language);
};
exports.startListening = startListening;
var stopListening = function () {
    SpeechToText.stopListening();
};
exports.stopListening = stopListening;
var onSpeechResults = function (callback) {
    return emitter.addListener('onSpeechResults', callback);
};
exports.onSpeechResults = onSpeechResults;
var onSpeechError = function (callback) {
    return emitter.addListener('onSpeechError', callback);
};
exports.onSpeechError = onSpeechError;
