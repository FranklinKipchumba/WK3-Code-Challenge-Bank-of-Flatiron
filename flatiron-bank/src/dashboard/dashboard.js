import styles from './dashboard.module.css';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2019-12-01</td>
                    <td>Income</td>
                    <td>Paycheck from Bob's Burgers</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2019-12-02</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>2019-12-04</td>
                    <td>Fashion</td>
                    <td>Sunglasses, Urban Outfitters</td>
                    <td>-24.99</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-12-01</td>
                    <td>Food</td>
                    <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                    <td>-10.55</td>
                </tr>
            </table>

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