import { Container, Paper, Stack, Text, Title } from '@mantine/core';

export function AboutPage() {
    return (
        <Container size="md" mt={24}>
            <Stack gap="md">
                <Paper radius="xl" p={24}>
                    <Stack gap={10}>
                        <Title ta="left" order={2} c="#000">
                            Кирилл Яковчик
                        </Title>
                        <Text ta="left">
                            Привет! Я — Frontend-разработчик. Пишу приложения
                            на React + TypeScript + Redux Toolkit.
                        </Text>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
}