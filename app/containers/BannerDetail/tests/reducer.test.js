import expect from 'expect';
import bannerDetailReducer from '../reducer';

describe('bannerDetailReducer', () => {
  it('returns the initial state', () => {
    expect(bannerDetailReducer(undefined, {})).toEqual({});
  });
});
