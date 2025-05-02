import {Button} from 'antd'
import 'antd/dist/reset.css'
export const App = () => {
    return (
        <>
            hello react
            <Button type='primary' onClick={() => alert('hello')}>
                Primary Button
            </Button>
        </>
    )
}
