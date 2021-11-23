import React from 'react'

const Index = (props: any) => {
    return (
        <div>
            <header>header</header>
                <h2>{ props.children }</h2>
            <footer>footer</footer>
        </div>
    )
}

export default Index