const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'DEC':
			return state - 1

		case 'INC':
			return state + 1

		case 'RND':
			return state + action.payload

		default: return state
	}
}

export default reducer