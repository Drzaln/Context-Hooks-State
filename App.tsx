import React, { useContext } from 'react'
import { SafeAreaView, Text, StatusBar, TextInput } from 'react-native'
import { ChangeTextController, ChangeTextContext } from './Controller'

let renderCount = 0

const TextArea = () => {
	// komponen ini bertindak seperti Consumer
	const { text, setText } = useContext(ChangeTextContext)
	renderCount++
	return (
		<React.Fragment>
			<Text>Text will appear here: {text}</Text>
			<TextInput
				style={{ height: 40 }}
				placeholder='Type here to translate!'
				onChangeText={(text) => setText(text)}
				defaultValue={text}
			/>
			<Text>render Count TextArea : {renderCount}</Text>
		</React.Fragment>
	)
}

const App = () => {
	// komponen ini bertindak seperti Provider
	renderCount++
	return (
		<React.Fragment>
			<ChangeTextController>
				<StatusBar barStyle='dark-content' backgroundColor='white' />
				<SafeAreaView>
					<TextArea />
					<Text>render count main screen: {renderCount}</Text>
				</SafeAreaView>
			</ChangeTextController>
		</React.Fragment>
	)
}

export default App
