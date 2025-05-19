// 不再使用import，直接使用全局的React对象
const App = () => React.createElement('div', null, 'Hello Flowdo!')
ReactDOM.render(React.createElement(App), document.getElementById('root'))
