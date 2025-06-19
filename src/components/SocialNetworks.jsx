import { FaLinkedinIn, FaGithub, FaDiscord, FaFolderOpen } from "react-icons/fa";
import '../styles/components/socialnetworks.scss';

export const SocialNetworks = () => {

    const socialNetworks = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/josiel-alves/",
            icon: <FaLinkedinIn />
        },
        {
            name: "Github",
            link: "https://github.com/JosielJrr",
            icon: <FaGithub />
        },
        {
            name: "Discord",
            link: "https://discordapp.com/users/josieljrr.",
            icon: <FaDiscord />
        },
        {
            name: "Portfólio",
            link: "https://josieljrr.github.io/portfolio-react/",
            icon: <FaFolderOpen />
        },
    ];

    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link}
                    title={network.name}
                    id={network.name}
                    key={network.name}
                    target="_blank"
                    className="social-btn"
                >
                    {network.icon}
                </a>
            ))}
        </section>
    )
}
