import expect from 'expect';
import reactModalReducer from '../reducer';

describe('reactModalReducer', () => {
  it('returns the initial state', () => {
    expect(reactModalReducer(undefined, {})).toEqual({});
  });
});
