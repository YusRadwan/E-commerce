//Import React
    import { Fragment } from "react"
    import { Outlet } from "react-router-dom";

//Import File
    import Header from './Header';
    import Footer from './Footer';

const Layout = () => {
    return (
        <Fragment>
            {/* Import File Header */}
                <Header />

            {/* Import Home, Contact, Blogs, ... */}
                <Outlet />

            {/* Import File Footer */}
                <Footer />
        </Fragment>
    )
}

export default Layout;