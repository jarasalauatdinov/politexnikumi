import { ActionIcon, Button, Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanModule } from '../../components/LanAdmin/LanModule';
import { MdOutlineLogout } from 'react-icons/md';

export const Header = ({ sidebarWidth = 180 }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { logout } = useContext(AuthContext);

    return (
        <Flex
            h={62}
            w={`calc(100vw - ${sidebarWidth}px)`}
            style={{ borderBottom: "1px solid black" }}
            px={20}
            align="center"
            justify="flex-end"
            gap={20}
        >
            <LanModule
                style={{ border: "1px solid gray", background: "red" }}
            />

            <Button
                onClick={() => logout(() => navigate("/", { replace: true }))}
                color="red"
                variant="light"
                size="md"
                leftSection={<MdOutlineLogout />}
            >
                {t("logout")}
            </Button>


        </Flex>
    );
};