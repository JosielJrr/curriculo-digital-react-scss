import '../styles/components/certificatescontainer.scss';

export const CertificatesContainer = () => {

    const certificates = [
        // {
        //     "id": 1,
        //     "training": "Tecnologia em Análise e Desenvolvimento de Sistemas",
        //     "institution": "UNINASSAU",
        //     "credential": ""
        // },
        {
            "id": 2,
            "training": "Bootcamp: Potência Tech iFood Programação do Zero",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/65852430.pdf"
        },
        {
            "id": 3,
            "training": "Formação Lógica de Programação",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/BXGIQQHL.pdf"
        },
        {
            "id": 4,
            "training": "Formação Github Certification",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/RLFXGTUO.pdf"
        },
        {
            "id": 5,
            "training": "Formação HTML Web Developer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/6CCBFBCF.pdf"
        },
        {
            "id": 6,
            "training": "Formação CSS Web Developer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/ZGHUG5WV.pdf"
        },
        {
            "id": 7,
            "training": "Formação JavaScript Developer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/ZSXV1KZT.pdf"
        },
        {
            "id": 8,
            "training": "Formação TypeScript Fullstack Developer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/1BWGKWZO.pdf"
        },
        {
            "id": 9,
            "training": "Formação React Developer",
            "institution": "DIO",
            "period": {
                "start": "",
                "end": ""
            },
            "credential": "https://hermes.dio.me/certificates/5Y0WKA7I.pdf"
        },
        {
            "id": 10,
            "training": "Formação Next.js Developer",
            "institution": "Hora de Codar",
            "credential": "https://app.horadecodar.com.br/certificates/17/user/545/certificate-authenticity"
        },
        {
            "id": 11,
            "training": "Formação Angular Developer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/AUDMSJ8E.pdf"
        },
        {
            "id": 12,
            "training": "Formação UX Designer",
            "institution": "DIO",
            "credential": "https://hermes.dio.me/certificates/7DNLF7IC.pdf"
        },
        {
            "id": 13,
            "training": "Gestão Ágil de Projetos com Scrum, Kanban & Ágil Escalado",
            "institution": "Udemy",
            "credential": "https://www.udemy.com/certificate/UC-35e92255-cafa-4f22-8261-d79e4d1512b7/"
        }
    ]

    return (
        <section className="certificates-container">
            <h2>Certificações</h2>
            <ul className='certificate-list'>
                {certificates.map((certificate) => (
                    <li key={certificate.id}>
                        <a href={certificate.credential}
                            target="_blank"
                            id={certificate.id}
                            className="credential"
                        >
                            {certificate.training} - {certificate.institution}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
