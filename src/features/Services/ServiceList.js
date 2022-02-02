import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService } from './serviceListSlice'
import { setEditForm, cleanEditForm } from './serviceEditSlice'

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter.filter);
  const dispatch = useDispatch();

  return (
    <ul>
      {items
        .filter(o => !filter || o.name.includes(filter))
        .map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => dispatch(setEditForm({ name: o.name, price: o.price, id: o.id }))}>edit</button>
            <button onClick={() => {
              dispatch(removeService(o.id));
              dispatch(cleanEditForm())
            }}>✕</button>
          </li>
        ))}
    </ul>
  )
}

export default ServiceList;
