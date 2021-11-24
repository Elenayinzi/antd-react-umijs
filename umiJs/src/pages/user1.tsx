import React from 'react'
import { Button } from 'antd'

const User = (props: any) => {
    return (
        <div>
            <h3>User pages 1</h3>
            <Button onClick={ ()=> {props.history.push('/')} }>点我回首页</Button>
        </div>
    )
}

export default User