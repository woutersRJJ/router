export default function About() {
    return <>
        <h1>About This Demo</h1>
            <p>Router maps URL's to components</p>
            <ul>
                <li>#/ -> home</li>
                <li>#/about -> about</li>
                <li>#/products -> products</li>
            </ul>
            <p>Example full URL</p>
            <p>http://localhost:3000/#/products</p>
        </>
}

