import { renderHook, act } from '@testing-library/react';
import { useSemiPersistentState } from './useSemiPersistentState';

describe('useSemiPersistentState', () => {
  it('should return the initial value and a function to update it', () => {
    const { result } = renderHook(() => useSemiPersistentState('testKey', 'initialValue'));

    const [state, setState] = result.current;

    expect(state).toBe('initialValue');
    expect(typeof setState).toBe('function');
  });

  it('should update the state and localStorage when setState is called', () => {
    const { result } = renderHook(() => useSemiPersistentState('testKey', 'initialValue'));

    act(() => {
      result.current[1]('newState');
    });

    const [state] = result.current;

    expect(state).toBe('newState');

    // Check localStorage
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newState'));
  });

  it('should retrieve the stored state from localStorage on initialization', () => {
    localStorage.setItem('testKey', JSON.stringify('storedState'));

    const { result } = renderHook(() => useSemiPersistentState('testKey', 'initialValue'));

    const [state] = result.current;

    expect(state).toBe('storedState');
  });

  it('should handle errors when parsing localStorage data', () => {
    localStorage.setItem('testKey', 'invalidJSON');

    const { result } = renderHook(() => useSemiPersistentState('testKey', 'initialValue'));

    const [state] = result.current;

    // In case of parsing error, it should fallback to the initial value
    expect(state).toBe('initialValue');
  });
});
