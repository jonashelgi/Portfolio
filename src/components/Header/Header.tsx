import React from 'react'
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useMediaQuery,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { FiMenu } from 'react-icons/fi'

import { color } from 'utils'

export const Header = () => {
  const [t, i18n] = useTranslation('translation')
  const [isSmall] = useMediaQuery('(max-width: 767px)')
  const [showConnections] = useMediaQuery('(max-width: 250px)')

  return (
    <Container maxW='8xl' pt={'10'}>
      <SimpleGrid minChildWidth='100px'>
        {!showConnections && (
          <HStack gap={'3'}>
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
          </HStack>
        )}
        {!isSmall && (
          <HStack style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            <ScrollLink to='Courses'>
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
                  {t('navigation.courses')}
                </Text>
              </Box>
            </ScrollLink>
            <ScrollLink to='Books'>
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
                  {t('navigation.books')}
                </Text>
              </Box>
            </ScrollLink>
          </HStack>
        )}
        {isSmall && (
          <Box display='flex' justifyContent='flex-end'>
            <Menu closeOnSelect={false}>
              <MenuButton
                as={IconButton}
                variant='outline'
                icon={<FiMenu size={30} />}
                color={color.second}
                bg={color.main}
                _active={{ bg: color.main }}
                _hover={{ bg: color.main }}
                height={'46px'}
                width={'70px'}
              />
              <MenuList minWidth={showConnections ? '100px' : '150px'}>
                {showConnections && (
                  <>
                    <MenuOptionGroup title={t('header.menu.contact') as string}>
                      <MenuItem>
                        <a
                          href={'https://www.linkedin.com/in/jonashelgi/'}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Linkedin
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href={'https://github.com/jonashelgi'}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Github
                        </a>
                      </MenuItem>
                    </MenuOptionGroup>
                    <MenuDivider />
                  </>
                )}
                <MenuOptionGroup title={t('header.menu.language') as string}>
                  <MenuItem
                    onClick={() =>
                      i18n.changeLanguage(t('navigation.language') as string)
                    }
                  >
                    {t('navigation.language')}
                  </MenuItem>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title={t('header.menu.information') as string}>
                  <MenuItem>
                    <ScrollLink to='Projects'>
                      {t('navigation.courses')}
                    </ScrollLink>
                  </MenuItem>
                  <MenuItem>
                    <ScrollLink to='Addition'>
                      {t('navigation.books')}
                    </ScrollLink>
                  </MenuItem>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
        )}
      </SimpleGrid>
    </Container>
  )
}

export default Header
