import { configureStore } from '@reduxjs/toolkit'
import serviceListReducer from '../features/Services/serviceListSlice'
import serviceEditReducer from '../features/Services/serviceEditSlice'
import serviceFilterReducer from '../features/Services/serviceFilterSlice'

const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceEdit: serviceEditReducer,
    serviceFilter: serviceFilterReducer
  }
})

export default store


















