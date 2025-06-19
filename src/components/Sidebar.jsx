import { InformationContainer } from './InformationContainer';
import { SocialNetworks } from './SocialNetworks';
import Avatar from '../img/perfil.png'
import '../styles/components/sidebar.scss';

export const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Josiel Junior" />
            <p className="title">Desenvolvedor Front-End Júnior</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1ij6d_rBtsGfdLmyXkbppCzAxURgueERC/view?usp=sharing" target='_blank' className="btn">
                Download currículo
            </a>
        </aside>
    )
}
