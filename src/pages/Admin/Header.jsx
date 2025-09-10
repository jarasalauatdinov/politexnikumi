import { ActionIcon, Flex, Title } from '@mantine/core'
import React from 'react'

const Header = () => {
  return (
    <Flex
    h={62}
    w={"calc(100vw - 240px)"}
    style={{borderBottom: "1px solid grey"}}
    px={20}
    align={"center"}
    justify={"space-between"}
    >
        <Title order={4} c="blue">Header</Title>
        <Flex align={"center"} gap={10}>
            <Title fz={13} c="blue">ADMIN</Title>
        <ActionIcon radius={50} p={4}>
          <img src="/img/peoples.svg" alt="" />
            </ActionIcon>
        </Flex>

    </Flex>
  )
}

export default Header