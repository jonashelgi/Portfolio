import React from 'react'
import { Container, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { BsKanban } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { Card } from 'components'
import { color, font } from 'utils'

const Projects = () => {
  const [t] = useTranslation('translation')
  return (
    <Container maxW='8xl' pb={'28'}>
      <Stack direction={'row'} pt={5} pb={5}>
        <BsKanban size={40} color={color.second} />
        <Text fontSize={font.md} color={color.second}>
          {t('projects.title')}
        </Text>
      </Stack>
      <SimpleGrid minChildWidth={'300px'} gap={5}>
        <Card
          title={t('projects.curriculum.title') as string}
          subTitle={t('projects.curriculum.company') as string}
          info={t('projects.curriculum.text') as string}
          linkUrl='https://adalnamskra.is/'
          tags={[
            { content: 'React' },
            { content: 'Typescript' },
            { content: 'Prismic' },
            { content: 'Jest' },
            { content: 'Ísland.is UI library' },
          ]}
        />
        <Card
          title={t('projects.portfolio.title') as string}
          subTitle={t('projects.portfolio.company') as string}
          info={t('projects.portfolio.text') as string}
          githubUrl='https://github.com/jonashelgi/portfolio'
          tags={[
            { content: 'React' },
            { content: 'Typescript ' },
            { content: 'ChakraUI' },
            { content: 'Firebase' },
          ]}
        />
        <Card
          title={t('projects.epic.title') as string}
          subTitle={t('projects.epic.comapny') as string}
          info={t('projects.epic.text') as string}
          linkUrl='https://gamestore-clone.web.app/'
          githubUrl='https://github.com/jonashelgi/epicstore-clone'
          tags={[
            { content: 'React' },
            { content: 'Typescript ' },
            { content: 'React-Bootstrap' },
            { content: 'Firebase' },
          ]}
        />
      </SimpleGrid>
    </Container>
  )
}

export default Projects
