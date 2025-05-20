/**
 * 创建时间: 2025-05-20
 * 作者: jjq
 * 描述: 编写组件
 */

// Header 相关组件
const Navigation = () => (
    <nav>
        <ul>
            <li>
                <a href='#'>首页</a>
            </li>
            <li>
                <a href='#'>关于</a>
            </li>
            <li>
                <a href='#'>联系我们</a>
            </li>
        </ul>
    </nav>
)

const Header = () => (
    <header>
        <h1>欢迎来到我的应用</h1>
        <Navigation />
    </header>
)

// Article 组件
const Article = ({title, content}) => (
    <article>
        <h2>{title}</h2>
        <p>{content}</p>
    </article>
)

// MainContent 组件
class MainContent extends React.Component {
    render() {
        return (
            <main>
                <Article title='React 简介' content='React 是一个用于构建用户界面的 JavaScript 库。' />
                <Article title='组件化开发' content='组件化是 React 的核心概念之一。' />
            </main>
        )
    }
}

// Counter 组件
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>当前计数: {this.state.count}</p>
                <button onClick={this.increment}>增加</button>
            </div>
        )
    }
}

// Footer 组件
const Footer = () => (
    <footer>
        <p>&copy; 2025 我的应用</p>
    </footer>
)

// App 根组件
const App = () => (
    <div className='app'>
        <Header />
        <MainContent />
        <Counter />
        <Footer />
    </div>
)

// 渲染整个应用
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
