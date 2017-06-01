import expect from 'expect';
import itemsListReducer from '../reducer';

describe('itemsListReducer', () => {
  it('returns the initial state', () => {
    expect(itemsListReducer(undefined, {})).toEqual({});
  });
});
