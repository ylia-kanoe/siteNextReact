import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'
import recipesSlice from './features/recipes/recipesSlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			products: productSlice,
			recipes: recipesSlice
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

/*
const rootReducer = combineReducers({
	products: productSlice,
	recipes: recipesSlice
})

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})


export const persistor = persistStore(store);
*/