export const addNewFeature = (feature) => {
	return {
		type: 'ADD_ITEM', payload: feature
	}
}

export const deleteFeature = (feature) => {
	return {
		type: 'DELETE_ITEM', payload: feature
	}
}