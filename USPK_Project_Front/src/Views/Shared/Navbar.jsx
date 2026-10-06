const Navbar = ({ onNavigate }) => {
    const handleNavClick = (view) => {
        if (onNavigate) {
            onNavigate(view);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" style={{ position: 'relative' }}>
            <div className="container">
                <a
                    className="navbar-brand"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('home');
                    }}
                >
                    USPK<span className="text-primary">Project</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('home');
                                        }}
                                    >
                                        Главная
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('music');
                                        }}
                                    >
                                        Расписание
                                    </a>
                                </li>
                               
                 
                                <ul className="navbar-nav navbar-right">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick('login');
                                            }}
                                        >
                                            Выполнить вход
                                        </a>
                                    </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;