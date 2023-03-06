import {
  Container,
  useMediaQuery,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import { BsBook } from 'react-icons/bs'
import { Book } from 'components'
import { color, font } from 'utils'
import { useTranslation } from 'react-i18next'

const Addition = () => {
  const [isSmall] = useMediaQuery('(max-width: 767px)')
  const [t] = useTranslation('translation')
  return (
    <Container maxW='8xl' pb={'200px'}>
      <HStack pb={4}>
        <BsBook size={40} color={color.main} />
        <Text fontSize={font.md} color={color.main}>
          {t('addition.books')}
        </Text>
      </HStack>
      <SimpleGrid columns={isSmall ? 1 : 2} spacing={10}>
        <Book
          title='Refactoring UI'
          info="Learn how to design beautiful user interfaces by yourself using specific tactics explained from a developer's point-of-view."
          book='https://www.refactoringui.com/'
          image='https://www.refactoringui.com/_next/static/media/book.5380927448c9872170bbc9fc9e5828c4.png'
        />
        <Book
          title='Laws of UX'
          info='A designer’s guide to using psychology to design better digital products and services.'
          book='https://lawsofux.com/book/'
          image='https://m.media-amazon.com/images/I/410ZGx1mcUL._SX331_BO1,204,203,200_.jpg'
        />
        <Book
          title='Don’t Make Me Think, Revisited'
          info='A Common Sense Approach to Web Usability'
          book='https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515?&linkCode=sl1&tag=alvarotrigobl-20&linkId=819a283034f23952efc7adbcc77b5c3e&language=en_US&ref_=as_li_ss_tl'
          image='https://m.media-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg'
        />
      </SimpleGrid>
    </Container>
  )
}

export default Addition
