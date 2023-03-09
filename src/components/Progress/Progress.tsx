import React from 'react'
import {
  Box,
  HStack,
  Progress as ProgressBar,
  Text,
  Tag,
  TagLabel,
  useMediaQuery,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { color, font } from 'utils'

export interface ProgressProps {
  title?: string
  info?: string
  progress?: number
  link?: string
  cert?: string
  book?: string
  image?: string
}

export const Progress = ({
  title,
  info,
  progress,
  link,
  cert,
  book,
  image,
}: ProgressProps) => {
  const [t] = useTranslation('translation')
  const [isSmall] = useMediaQuery('(max-width: 767px)')
  const fontTitle = isSmall ? font.sm : font.md
  const fontInfo = isSmall ? font.xs : font.sm
  return (
    <HStack style={{ overflow: 'hidden' }}>
      <Box>
        {title && (
          <Text
            fontSize={fontTitle}
            color={color.main}
            fontWeight={'semibold'}
            pb={2}
          >
            {title}
          </Text>
        )}
        {info && (
          <Text fontSize={fontInfo} pb={2} color={color.main}>
            {info}
          </Text>
        )}
        {progress && (
          <>
            <Text fontWeight={'semibold'} color={color.main} pb={2}>
              Progress: {progress}%{' '}
            </Text>
            <ProgressBar
              value={progress}
              colorScheme={'main'}
              bg={color.red}
              mb={1}
            />
          </>
        )}
        <HStack pt={2}>
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
          {cert && (
            <a href={cert} target='_blank' rel='noreferrer'>
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
                <TagLabel>{t('button.certification')}</TagLabel>
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
      </Box>
      {image && (
        <img
          src={image}
          width='100px'
          alt='book-cover'
          style={{ borderRadius: '10px' }}
        />
      )}
    </HStack>
  )
}

export default Progress
