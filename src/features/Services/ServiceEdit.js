import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeEditFormField, cleanEditForm } from './serviceEditSlice'
import { editService } from './serviceListSlice'

function ServiceEdit() {
	const item = useSelector(state => state.serviceEdit);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const { name, value } = evt.target;
		dispatch(changeEditFormField({ name, value }));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(editService({ name: item.name, price: item.price, id: item.id }));
		dispatch(cleanEditForm());
	}

	const handleCancel = evt => {
		evt.preventDefault();
		dispatch(cleanEditForm());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} placeholder='Название услуги' />
			<input name='price' onChange={handleChange} value={item.price} placeholder='Цена' />
			<input type='hidden' name='id' onChange={handleChange} value={item.id} />
			<button type='submit'>Save</button>
			{
				item.id && <button onClick={handleCancel}>Cancel</button>
			}
		</form>
	);
}

export default ServiceEdit;
