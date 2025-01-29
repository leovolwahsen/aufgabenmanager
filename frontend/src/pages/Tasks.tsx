import { Flex, Typography } from "antd";
const { Title } = Typography;

export const Tasks = () => {
    return (
        <Flex vertical align="center" justify="center" style={{ width: "100%", padding: "20px" }}>
            <Title level={1}>Willkommen beim Aufgabenmanager</Title>
        </Flex>
    );
};