# React Native Speech-to-Text Wrapper for TextInput
![license](https://img.shields.io/badge/Licensed-ISC-success)

## @agrigate/speech-to-text-wrapper - ts support (under dev)
Use `// @ts-ignore` when importing `SpeechtoTextWrapper`

### A wrapper to uplift any TextInput in react native, providing speech-to-text support in more than 20 languages
| Language Name             | Code    |
| ------------------------- | ------- |
| English (US)              | `en-US` |
| English (India)           | `en-IN` |
| Hindi (India)             | `hi-IN` |
| Bengali (India)           | `bn-IN` |
| Tamil (India)             | `ta-IN` |
| Telugu (India)            | `te-IN` |
| Kannada (India)           | `kn-IN` |
| Marathi (India)           | `mr-IN` |
| Gujarati (India)          | `gu-IN` |
| Malayalam (India)         | `ml-IN` |
| Punjabi (India)           | `pa-IN` |
| Urdu (India)              | `ur-IN` |
| French                    | `fr-FR` |
| German                    | `de-DE` |
| Spanish (Spain)           | `es-ES` |
| Spanish (Mexico)          | `es-MX` |
| Arabic (UAE)              | `ar-AE` |
| Chinese (Mandarin, China) | `zh-CN` |
| Japanese                  | `ja-JP` |
| Korean                    | `ko-KR` |

# Installation

1. ```pnpm i @agrigate/speech-to-text-wrapper``` </br>
or </br>
```yarn add @agrigate/speech-to-text-wrapper``` </br>
or </br>
```npm i @agrigate/speech-to-text-wrapper```

2. [only supports android]
autolinking - handles automatically.

3. Make sure to add required permissions in `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

# Use

```sh
import SpeechtoTextWrapper from "@agrigate/speech-to-text-wrapper";
```

```sh
      <SpeechtoTextWrapper locale="en-IN">
        # <TextInput style={{ borderWidth: 1, }} value={text} onChangeText={v => settext(v)} /> [ANY TEXT INPUT]
      </SpeechtoTextWrapper>
```

# Props

<table>
<tbody>
<tr>
<td>locale</td>
<td>[optional, default is "en-US"]</td>
<td>give your desired lang locale & it'll render in that </td>
</tr>
</tbody>
</table>

Contact: mohit@theruraltrust.com

Feel free to checkout what we do ![here](https://theruraltrust.com/)
