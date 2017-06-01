import expect from 'expect';
import registerPageReducer from '../reducer';

describe('registerPageReducer', () => {
  it('returns the initial state', () => {
    expect(registerPageReducer(undefined, {})).toEqual({});
  });
});
