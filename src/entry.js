import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '@/stores';
import history from '@/history';
import router from '@/router';

const render = async (location) => {
    const element = await router.resolve(location);
    ReactDOM.render(
        <Provider store={store}>
            {element}
        </Provider>,
        document.getElementById('App'),
    );
};

render(history.location);
history.listen(render);