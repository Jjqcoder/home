// 使用全局的React对象（由CDN提供）
const App = () => React.createElement('div', null, 'Hello Flowdo!')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(App))
