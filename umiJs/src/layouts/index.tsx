import React from 'react'
import { Link, NavLink } from 'umi'

const Index = (props: any) => {
    return (
        <div>
            <header>header</header>
                <Link to="/user/three">用户1</Link>
                <Link to="/user/four">用户2</Link>
                <h2>{ props.children }</h2>
                <NavLink to="/user/three">用户1</NavLink>
            <footer>footer</footer>
        </div>
    )
}

export default Index