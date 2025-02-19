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
            <a href="https://drive.google.com/file/d/1ClUK5K1Z765p082soblDqf9aJXx1gdhF/view?usp=sharing" target='_blank' className="btn">
                Download currículo
            </a>
        </aside>
    )
}
