import {
    OPEN_NAV,
    CLOSE_NAV
} from '@/actions/constants';

const initialState = {
    isNavOpen: true
};

const ui = (state = initialState, {type}) =>
{
    if (type === OPEN_NAV)
    {
        return Object.assign({}, state, {isNavOpen: true});
    }
    else if (type === CLOSE_NAV)
    {
        return Object.assign({}, state, {isNavOpen: false});
    }
    return state;
};

export default ui;