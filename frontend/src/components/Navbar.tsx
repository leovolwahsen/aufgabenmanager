import { Menu, Typography, Grid, Col, Drawer, Button, Flex, Image } from "antd";
import { FaHome, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { name: "Aufgaben", route: "/", icon: <FaHome /> },
    ];

    const items = navLinks.map((link) => ({
        label: (
            <NavLink to={link.route} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {link.icon}
                {link.name}
            </NavLink>
        ),
        key: link.route,
    }));

    const screens = useBreakpoint();
    const location = useLocation();

    return (
        <nav style={{ backgroundColor: "#001529", padding: "1rem 1.2rem" }}>
            <Flex vertical align="start" justify="space-between" style={{ width: "100vw" }} gap={8}>	
                <Col flex="none">
                    <Flex gap={8} align="center">
                        <Image src={logo} alt="Logo" preview={false} style={{ width: "50px", borderRadius: "1rem" }} />
                        <Title level={3} style={{ margin: 0, color: "white" }}>
                            Aufgabenmanager
                        </Title>
                    </Flex>
                </Col>
                <Col flex="auto" style={{ textAlign: "center" }}>
                    {!screens.md && (
                        <Button
                            icon={<FaBars style={{ fontSize: "1.5rem", color: "white" }} />}
                            type="text"
                            onClick={toggleMenu}
                            style={{
                                background: "transparent",
                                border: "none",
                                boxShadow: "none",
                            }}
                        />
                    )}
                </Col>
            </Flex>

            {screens.md ? (
                <Menu
                    mode="horizontal"
                    theme="dark"
                    selectedKeys={[location.pathname]}
                    defaultSelectedKeys={["/"]}
                    items={items}
                    style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "start",
                        backgroundColor: "#001529",
                        borderBottom: "none",
                        flexWrap: "wrap",
                    }}
                />
            ) : (
                <Drawer
                    placement="left"
                    onClose={toggleMenu}
                    open={menuOpen}
                    styles={{
                        body: {
                            backgroundColor: "#001529",
                        },
                        header: {
                            paddingTop: 44,

                            backgroundColor: "#001529",
                            color: "white",
                            borderBottom: "none",
                        },
                    }}
                    closeIcon={
                        <Flex style={{ fontSize: "2rem", color: "white" }}>
                            <FaXmark />
                        </Flex>
                    }
                >
                    <Menu
                        mode="vertical"
                        theme="dark"
                        selectedKeys={[location.pathname]}
                        defaultSelectedKeys={["/"]}
                        items={items}
                        onClick={toggleMenu}
                        style={{
                            backgroundColor: "#001529",
                            border: "none",
                        }}
                    />
                </Drawer>
            )}
        </nav>
    );
};
