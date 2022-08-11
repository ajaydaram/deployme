import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <title>({ pageTitle})</title>
            <nav>
                <ui>
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/blog'>Blog</Link></li>
                 <li><Link to='/books'>Books</Link></li>
                 <li><Link to='/contact'>Contact</Link></li>
                 <li><Link to='/topics'>Topics</Link></li>
                </ui>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout


