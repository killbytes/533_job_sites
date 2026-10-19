import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router';
import { Layout } from './Layout';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { VacancyPage } from './pages/VacancyPage/VacancyPage';
import { AboutPage } from './pages/AboutPage/AboutPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/vacancies" replace />} />
                <Route path="vacancies" element={<JobsPage />} />
                <Route path="vacancies/:id" element={<VacancyPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/vacancies" replace />} />
            </Route>
        </>,
    ),
    {
        basename: '/533_job_site',
    },
);