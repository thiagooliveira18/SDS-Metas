import headerImg from '../../assets/img/header-img.svg';
import './styles.css';

export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={headerImg} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                </p>
            </div>
        </header>
    );
}