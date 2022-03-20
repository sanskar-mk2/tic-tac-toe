const nav_bar = ({ total_counters }) => {
    return (
        <nav className="navbar navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="##">
                    Navbar
                    <span className="badge badge-pill bg-secondary m-2">
                        {total_counters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default nav_bar;
