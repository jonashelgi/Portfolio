import React from 'react'
import {
  HStack,
  Text,
  Tag,
  TagLabel,
  Grid,
  useMediaQuery,
  GridItem,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { color, font } from 'utils'

export interface ProgressProps {
  title?: string
  info?: string
  link?: string
  book?: string
  image?: string
}

export const Progress = ({ title, info, link, book, image }: ProgressProps) => {
  const [t] = useTranslation('translation')
  const [isSmall] = useMediaQuery('(max-width: 400px)')

  return (
    <Grid templateColumns={'repeat(7, 1fr)'}>
      <GridItem colSpan={isSmall ? 7 : 5}>
        <Text
          fontSize={font.md}
          color={color.main}
          fontWeight={'semibold'}
          pb={2}
        >
          {title}
        </Text>
        <Text fontSize={font.sm} pb={2} color={color.main}>
          {info}
        </Text>
        <HStack pt={2} pb={5}>
          {link && (
            <a href={link} target='_blank' rel='noreferrer'>
              <Tag
                color={color.main}
                boxShadow={'inset 0 0 0px 1px ' + color.main}
                variant={'outline'}
                transition={'0.2s'}
                _hover={{
                  background: color.main,
                  color: color.second,
                  transition: '0.1s',
                }}
              >
                <TagLabel>{t('button.course')}</TagLabel>
              </Tag>
            </a>
          )}
          {book && (
            <a href={book} target='_blank' rel='noreferrer'>
              <Tag
                color={color.main}
                boxShadow={'inset 0 0 0px 1px ' + color.main}
                variant={'outline'}
                transition={'0.2s'}
                _hover={{
                  background: color.main,
                  color: color.second,
                  transition: '0.1s',
                }}
              >
                <TagLabel>{t('button.book')}</TagLabel>
              </Tag>
            </a>
          )}
        </HStack>
      </GridItem>
      <GridItem
        colSpan={isSmall ? 7 : 2}
        display='flex'
        justifyContent={isSmall ? 'center' : 'flex-end'}
      >
        <img
          src={image}
          alt='book-cover'
          style={{
            display: 'block',
            maxWidth: '100px',
            maxHeight: '150px',
            width: 'auto',
            height: 'auto',
            borderRadius: '10px',
          }}
        />
      </GridItem>
    </Grid>
  )
}

export default Progress
