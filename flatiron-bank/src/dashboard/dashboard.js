import styles from './dashboard.module.css'
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Flatiron Bank</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Transaction Tables</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Portfolio</a></li>
                                    <li><a class="dropdown-item" href="#">Customer Care</a></li>
                                    <li><a class="dropdown-item" href="#">Guildlines and Transparency</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className={styles.dashCont}>
                <div onClick={() => navigate('/new')}>
                    New Customer
                </div>
                <div onClick={() => navigate('/deposit')}>
                    Deposit
                </div>
                <div onClick={() => navigate('/withdraw')}>
                    Withdraw
                </div>
                <div onClick={() => navigate('/transfer')}>
                    Transfer
                </div>
                <div onClick={() => navigate('/balance')}>
                    Balance
                </div>
            </div>
        </div>
    )
}