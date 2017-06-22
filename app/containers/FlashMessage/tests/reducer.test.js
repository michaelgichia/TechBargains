import expect from 'expect';
import flashMessageReducer from '../reducer';

describe('flashMessageReducer', () => {
  it('returns the initial state', () => {
    expect(flashMessageReducer(undefined, {})).toEqual({});
  });
});
