import React from 'react'

interface ILayout {
    children: JSX.Element | JSX.Element[] | Element | Element[]
}
export default function Layout({children} : ILayout) {
    return <div>{children}</div>
}