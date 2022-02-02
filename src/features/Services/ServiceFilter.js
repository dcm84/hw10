import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './serviceFilterSlice'

function ServiceFilter() {
	const filter = useSelector(state => state.serviceFilter.filter);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const { name, value } = evt.target;
		dispatch(changeFilter(value));
	}

	return (
		<input name='filter' onChange={handleChange} value={filter} placeholder='Поиск' />
	);
}

export default ServiceFilter;
