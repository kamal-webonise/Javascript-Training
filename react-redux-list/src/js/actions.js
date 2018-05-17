export function addData(message) {
  return {
    type: 'ADD_DATA',
    payload: message,
  };
}

export function showData(data) {
	return {
		type: 'SHOW_DATA',
		payload: data,
	};
}

export function toogle() {
	return {
		type: 'TOOGLE',
		payload: false,
	};
}