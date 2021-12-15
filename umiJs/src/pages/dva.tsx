// 1.创建Ui组件
// 2.创建model
// 3.将UI组件和model进行

import React from 'react'
import { connect } from 'umi'
import { Button } from 'antd'

const Dva = (props) => {
    const { dispatch } = props
    const list = props.tags.tagsList.list || []
    const getData = () => {
        //使用model，获取数据
        dispatch({
            type: 'tags/fetchTags',    //model的命名空间/方法
            payload: null
        })
    }
    return (
        <div>
            <h3>Dva的使用</h3>
            <Button onClick={getData}>获取标签列表</Button>
            {
                list.map( (item, index) => {
                    return <p key={index}>{item.name}</p>
                })
            }
        </div>
    )
}

export default connect(({tags}) => ({tags}))(Dva);