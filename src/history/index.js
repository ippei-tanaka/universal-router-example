import createBrowserHistory from 'history/createBrowserHistory';
import parse from 'url-parse';
import deepEqual from 'deep-equal';

const history = createBrowserHistory();

const _push = history.push;

history.push = function(path, state)
{
    const parsedPath = parse(path);
    const location = history.location;
    if (parsedPath.pathname === location.pathname
        && parsedPath.query === location.search
        && parsedPath.hash === location.hash
        && deepEqual(state, location.state)) {
        return;
    }

    const args = Array.from(arguments);
    args.splice(0, 2);
    return _push.apply(history, [path, state, ...args]);
};

export default history;