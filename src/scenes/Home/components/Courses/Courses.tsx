import React from 'react'
import {
  Container,
  HStack,
  SimpleGrid,
  Box,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

import { Progress } from 'components'
import { color, font } from 'utils'

const Projects = () => {
  const [t] = useTranslation('translation')
  const [isSmall] = useMediaQuery('(max-width: 767px)')

  return (
    <Container maxW='8xl' pb={'28'}>
      <HStack paddingBottom={6}>
        <BsJournalBookmarkFill size={40} color={color.second} />
        <Text fontSize={font.lg} color={color.second}>
          {t('addition.courses')}
        </Text>
      </HStack>
      <SimpleGrid columns={isSmall ? 1 : 2} spacing={10}>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='.NET 7 Web API & Entity Framework Jumpstart'
            info='Build the back-end of a .NET 7 web application with a Web API, Entity Framework 7 & SQL Server in no time!'
            progress={10}
            link='https://www.udemy.com/course/net-core-31-web-api-entity-framework-core-jumpstart/'
          />
        </Box>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='Docker and Kubernetes: The Complete Guide'
            info='Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows.'
            progress={30}
            link='https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/'
          />
        </Box>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='Vue Mastery'
            info='As the ultimate resource for Vue.js developers, Vue Mastery produces weekly lessons so you can learn what you need to succeed as a Vue.js Developer.'
            progress={100}
            link='https://www.vuemastery.com/'
          />
        </Box>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='Complete C# Masterclass'
            info='Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. More than just the C# basics!'
            progress={100}
            link='https://www.udemy.com/course/complete-csharp-masterclass/'
            cert='https://www.udemy.com/certificate/UC-4fb1ecdc-bff4-47e9-bd2b-7b42ac3542ff/'
          />
        </Box>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='The Complete 2021 Web Development Bootcamp'
            info='Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, build real projects.'
            progress={100}
            link='https://www.udemy.com/course/the-complete-web-development-bootcamp/'
            cert='https://www.udemy.com/certificate/UC-10471ff1-f7dd-4142-af02-a1e33a151341/'
          />
        </Box>
        <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
          <Progress
            title='Tableau 2020 A-Z: Hands-On Tableau Training for Data Science'
            info='Learn Tableau 2020 for data science step by step. Real-life data analytics exercises & quizzes included. Learn by doing!'
            progress={100}
            link='https://www.udemy.com/course/tableau10/'
            cert='https://www.udemy.com/certificate/UC-3c163630-9a06-4ea5-8221-14e07bf856bc/'
          />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
