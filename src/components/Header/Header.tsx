import React from 'react'
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { color } from 'utils'

export const Header = () => {
  const [isSmall] = useMediaQuery('(max-width: 500px)')
  const [t, i18n] = useTranslation('translation')
  return (
    <Container maxW='8xl' pt={'10'}>
      <SimpleGrid minChildWidth='200px'>
        <HStack gap={'3'}>
          <a
            href={'https://github.com/jonashelgi'}
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub
              size={46}
              color={color.main}
              aria-label='Link to Github'
              title='Link to Github'
            />
          </a>
          <a
            href={'https://www.linkedin.com/in/jonashelgi/'}
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin
              size={46}
              color={color.main}
              aria-label='Link to Linkedin'
              title='Link to Linkedin'
            />
          </a>
          <a
            href={'https://stackoverflow.com/users/14008605/icejonas'}
            target='_blank'
            rel='noreferrer'
          >
            <BsStackOverflow
              size={46}
              color={color.main}
              aria-label='Link to StackOverflow'
              title='Link to StackOverflow'
            />
          </a>
        </HStack>
        <HStack
          style={
            isSmall
              ? { paddingTop: '15px' }
              : { display: 'flex', justifyContent: 'flex-end' }
          }
        >
          <Box
            background={color.main}
            p={2}
            pl={4}
            pr={4}
            borderRadius={4}
            cursor={'pointer'}
            transition={'0.2s'}
            _hover={{
              filter: 'contrast(130%)',
              transition: '0.2s',
            }}
            onClick={() =>
              i18n.changeLanguage(t('navigation.language') as string)
            }
          >
            <Text color={color.second} fontSize={'xl'}>
              {t('navigation.language')}
            </Text>
          </Box>
          <ScrollLink to='Projects'>
            <Box
              background={color.main}
              p={2}
              pl={4}
              pr={4}
              borderRadius={4}
              cursor={'pointer'}
              transition={'0.2s'}
              _hover={{
                filter: 'contrast(130%)',
                transition: '0.2s',
              }}
            >
              <Text color={color.second} fontSize={'xl'}>
                {t('navigation.projects')}
              </Text>
            </Box>
          </ScrollLink>
          <ScrollLink to='Addition'>
            <Box
              background={color.main}
              p={2}
              pl={4}
              pr={4}
              borderRadius={4}
              cursor={'pointer'}
              transition={'0.2s'}
              _hover={{
                filter: 'contrast(130%)',
                transition: '0.2s',
              }}
            >
              <Text color={color.second} fontSize={'xl'}>
                {t('navigation.addition')}
              </Text>
            </Box>
          </ScrollLink>
        </HStack>
      </SimpleGrid>
    </Container>
  )
}

export default Header
