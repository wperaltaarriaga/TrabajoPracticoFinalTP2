export const updateModel = (model, data) => {
	const updatedModel = { ...model }; // clona el objeto original
	for (const key in data) {
		// itera sobre las claves del objeto data
		if (Object.hasOwn(updateModel, key)) {
			// verifica si la clave existe en el modelo
			const value = data[key]; // obtiene el valor correspondiente

			if (value !== null && value !== undefined && value !== "") {
				// verifica que el valor no sea nulo, indefinido o cadena vacía
				updatedModel[key] = value; // actualiza el valor en el modelo clonado
			}
		}
	}

	return updatedModel; // devuelve el modelo actualizado
};
