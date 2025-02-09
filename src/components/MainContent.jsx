import { AboutContainer } from './AboutContainer';
import { ProjectsContainer } from './ProjectsContainer';
import { TechnologiesContainer } from './TechnologiesContainer';
import { CertificatesContainer } from './CertificatesContainer';
import '../styles/components/maincontent.scss';


export const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <CertificatesContainer />
            <ProjectsContainer />
        </main>
    )
}
