import { Container, Group, Text } from '@mantine/core';
import { NavLink as RouterNavLink } from 'react-router';
import classes from './Header.module.scss';

import Logo from '@/shared/assets/logo.png';
import User from '@/shared/assets/user.png';

export function Header() {
    return (
        <header className={classes.header}>
            <Container size="lg" className={classes.inner}>
                <Group  style={{ width: '100%' }}>
                    <RouterNavLink to="/vacancies" className={classes.link_logo}>
                        <Text className={classes.logo} fw={600}>
                            <img src={Logo} alt="Logo" className={classes.logoimg} />
                            .FrontEnd
                        </Text>
                    </RouterNavLink>

                    <Group gap="md" className={classes.groupLinks}>
                        <RouterNavLink to="/vacancies" end className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}>
                            <span className={classes.vacanciesList}>Вакансии FE</span>
                            <span className={classes.dot} />
                        </RouterNavLink>

                        <RouterNavLink to="/about" className={({ isActive }) => `${classes.about} ${isActive ? classes.active : ''}`}>
                            <img src={User} alt="" className={classes.logoimg} />
                            Обо мне
                        </RouterNavLink>
                    </Group>
                </Group>
            </Container>
        </header>
    );
}