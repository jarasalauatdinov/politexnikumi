import { Flex, Stack, Title, NavLink, ScrollArea } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import {
    Building,
    Users,
    Image as ImageIcon,
    User,
    Briefcase,
    Newspaper,
    FileText,
    Home,
    BookOpen,
    Star,
    Clock,
    Target,
    File,
    Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaQuestion } from "react-icons/fa6"; 


export const Sidebar = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const links = [
        {
            to: "school", label: t("school"),
            icon: <Building size={16} />
        },
        {
            to: "position", label: t("position"),
            icon: <Briefcase size={16} />
        },
        {
            to: "album", label: t("album"),
            icon: <ImageIcon size={16} />
        },
        {
            to: "user", label: t("user"),
            icon: <User size={16} />
        },
        {
            to: "employee", label: t("employee"),
            icon: <Users size={16} />
        },
        {
            to: "news", label: t("news"),
            icon: <Newspaper size={16} />
        },
        {
            to: "document", label: t("document"),
            icon: <FileText size={16} />
        },
        {
            to: "rules", label: t("rules"),
            icon: <BookOpen size={16} />
        },
        {
            to: "club", label: t("club"),
            icon: <Users size={16} />
        },
        {
            to: "value", label: t("value"),
            icon: <Star size={16} />
        },
        {
            to: "faq", label: "FAQ",
            icon: <FaQuestion />
        },
        {
            to: "hours", label: t("choolhours"),
            icon: <Clock size={16} />
        },
        {
            to: "target", label: t("target"),
            icon: <Target size={16} />
        },
        {
            to: "history", label: t("history"),
            icon: <BookOpen size={16} />
        },
        {
            to: "information", label: t("information"),
            icon: <File size={16} />
        },
        {

            to: "vacancy", label: t("vacancy"),
            icon: <FileText size={16} />
        },
        {
            to: "admin-schedule", label: t("schedule"),
            icon: <FileText size={16} />
        }
    ];

    return (
        <Stack
            gap={20}
            h="100vh"
            w="180px"
            p={12}
            style={{ borderRight: "1px solid #2C2E33" }}
        >
            <Title order={4} align="center" style={{ fontSize: 16 }}>
                {t("politechnicum")}
            </Title>

            <ScrollArea w={"auto"} h={"100%"} scrollbarSize={"hidden"} scrollbars="y">
                <Stack gap={6}>
                    {links.map((item) => (
                        <NavLink
                            key={item.to}
                            label={item.label}
                            component={Link}
                            to={item.to}
                            bdrs={4}
                            leftSection={item.icon}
                            active={location.pathname.includes(item.to)}
                            styles={(theme) => ({
                                active: {
                                    backgroundColor: theme.colors.blue[7],
                                    color: "white",
                                },
                                root: {
                                    padding: "6px 10px",
                                },
                                label: {
                                    fontSize: 14,
                                },
                            })}
                        />
                    ))}
                </Stack>
            </ScrollArea>
        </Stack>
    );
};