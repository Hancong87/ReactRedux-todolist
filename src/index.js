import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';

// Provider使得每一个内部组件，都可以使用store
const App = (
    <Provider store={store}>
        <TodoList/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
