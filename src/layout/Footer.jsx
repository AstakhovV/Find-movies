import React from 'react'

function Footer() {
    return (
        <footer className="#f3e5f5 purple lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/AstakhovV">AstakhovV</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer