import { DatePicker } from 'antd';
import styles from './index.less';
import { useEffect } from 'react';
import { history, request } from 'umi';

export default function IndexPage(props: any) {
  //console.log(props)
  // useEffect( () => {
  //   setTimeout(() => {
  //     history.push('/user/three')
  //   },2000)
  // },[])  //加一个空数组可以让代码不出现无限循环

  const getData = () => {
    //请求数据
    request('/api/index').then( res => {
      console.log(res)
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <DatePicker />
      <button onClick={getData}>点击获取数据</button>
    </div>
  );
}
