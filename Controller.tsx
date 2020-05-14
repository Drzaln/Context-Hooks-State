import React, { useState, ReactNode } from 'react'

interface InitialState {
	text: string
	setText: Function
}

interface Props {
	children: ReactNode
}

const initialState = {
	text: '',
	setText: () => {}
}

export const ChangeTextContext = React.createContext<InitialState>(initialState)

export const { Provider: ChangeTextProvider, Consumer: ChangeTextConsumer } = ChangeTextContext

export const ChangeTextController = ({ children }: Props) => {
	const [ text, setText ] = useState<string>('')

	return <ChangeTextProvider value={{ text, setText }}>{children}</ChangeTextProvider>
}
