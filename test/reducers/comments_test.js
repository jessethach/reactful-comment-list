import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    const reducer = commentReducer(undefined, {});
    expect(reducer).to.be.empty;
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    const reducer = commentReducer([], action);
    expect(reducer).to.eql(['new comment'])
  });
});
