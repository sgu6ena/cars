import {TypeUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypeUseSelectorHook<RootState> = useSelector;