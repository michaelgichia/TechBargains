import expect from 'expect';
import editItemReducer from '../reducer';

describe('editItemReducer', () => {
  it('returns the initial state', () => {
    expect(editItemReducer(undefined, {})).toEqual({});
  });
});
