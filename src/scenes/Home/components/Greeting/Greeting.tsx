import React from 'react'
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import avatar from 'utils/images/avatar.png'
import { color, font } from 'utils'

const Greeting = () => {
  const [isSmall] = useMediaQuery('(max-width: 767px)')
  const [t] = useTranslation('translation')
  return (
    <Container maxW='8xl' pb={40} pt={isSmall ? 10 : 40}>
      <Grid templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={{ base: 5, md: 3 }}>
          <Stack>
            <Stack>
              <Text fontSize={font.md} color={color.main}>
                {t('greeting.title')}
              </Text>
              <Text fontSize={font.sm} color={color.main}>
                {t('greeting.text')}
              </Text>
            </Stack>
            <Box pt={10}>
              <Text fontSize={font.sm} color={color.main}>
                {t('greeting.currentlyUsing')}
              </Text>
              <Box display={'flex'} flexWrap={'wrap'}>
                <Image
                  src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
                  alt='React'
                  height='30px'
                />
                <Image
                  src='https://img.shields.io/badge/vuejs-168363.svg?style=for-the-badge&logo=vuedotjs&logoColor=white'
                  alt='Vue3'
                  height='30px'
                />
                <Image
                  src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
                  alt='Typescript'
                  height='30px'
                />
                <Image
                  src='https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white'
                  alt='Storybook'
                  height='30px'
                />
                <Image
                  src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'
                  alt='Git'
                  height='30px'
                />{' '}
                <Image
                  src='https://img.shields.io/badge/figma-A435F0.svg?style=for-the-badge&logo=figma&logoColor=white'
                  alt='Figma'
                  height='30px'
                />
              </Box>
            </Box>
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Center pt={isSmall ? 10 : 0}>
            <Image src={avatar} alt='Avatar of Jonas' width='300px' />
          </Center>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Greeting
