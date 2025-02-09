import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiSass,
    SiTailwindcss,
    SiBootstrap,
    SiFigma,
    SiGit
} from "react-icons/si";

import '../styles/components/technologiescontainer.scss';

export const TechnologiesContainer = () => {

    const technologies = [
        {
            id: "html",
            name: "HTML5",
            icon: <SiHtml5 />,
            description: "Linguagem de marcação para estruturação de conteúdo web."
        },
        {
            id: "css",
            name: "CSS3",
            icon: <SiCss3 />,
            description: "Linguagem de estilização para definir o visual de páginas web."
        },
        {
            id: "js",
            name: "JavaScript",
            icon: <SiJavascript />,
            description: "Linguagem de programação para criar interatividade em páginas web."
        },
        {
            id: "ts",
            name: "TypeScript",
            icon: <SiTypescript />,
            description: "Superset do JavaScript com tipagem estática e segurança adicional."
        },
        {
            id: "react",
            name: "React",
            icon: <SiReact />,
            description: "Biblioteca JavaScript para construção de interfaces de usuário interativas."
        },
        {
            id: "next",
            name: "Next.js",
            icon: <SiNextdotjs />,
            description: "Framework React para criação de aplicações web otimizadas e com renderização no lado servidor."
        },
        {
            id: "angular",
            name: "Angular",
            icon: <SiAngular />,
            description: "Framework JavaScript para construção de interfaces de usuário dinâmicas."
        },
        {
            id: "sass",
            name: "SASS",
            icon: <SiSass />,
            description: "Pré-processador CSS que permite o uso de variáveis, aninhamento e mais."
        },
        {
            id: "tailwind",
            name: "Tailwind.css",
            icon: <SiTailwindcss />,
            description: "Framework CSS utilitário para criar designs personalizados rapidamente."
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            icon: <SiBootstrap />,
            description: "Framework CSS para criar interfaces responsivas e componentes prontos para uso."
        },
        {
            id: "figma",
            name: "Figma",
            icon: <SiFigma />,
            description: "Ferramenta de design colaborativo para prototipagem e criação de interfaces."
        },
        {
            id: "git",
            name: "Git",
            icon: <SiGit />,
            description: "Sistema de controle de versão para gerenciamento e colaboração em código."
        },
    ];

    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
