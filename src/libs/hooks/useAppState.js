import { store } from '../../store/store.js';
import { useContext } from 'react';

const useAppState = () => useContext(store);

/**
 * Return app store dispatch and state
 * @returns {state, dispatch}
 */
export default useAppState;
