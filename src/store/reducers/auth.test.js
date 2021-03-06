import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('authreducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined), {}).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});