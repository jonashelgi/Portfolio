import React from 'react'
import { Badge, Box, Stack, Tag, TagLabel, Text } from '@chakra-ui/react'
import { color, font } from 'utils'

export interface CardProps {
  title?: string
  subTitle?: string
  info?: string
  linkUrl?: string
  githubUrl?: string
  tags?: {
    content: string
  }[]
}

export const Card = ({
  title,
  subTitle,
  info,
  linkUrl,
  githubUrl,
  tags,
}: CardProps) => {
  return (
    <Box bg={color.second} borderRadius={10} p={5} className={'boxShadow'}>
      {title && (
        <Text fontSize={font.md} fontWeight={'semibold'} color={color.main}>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text fontSize={font.sm} fontWeight={'semibold'} color={color.main}>
          {subTitle}
        </Text>
      )}
      {info && (
        <Text fontSize={font.sm} color={color.main} pt={2}>
          {info}
        </Text>
      )}
      {tags && (
        <Text fontSize={font.md}>
          {tags.map((data: any, index: number) => (
            <Badge key={index} color={color.main} bg={color.second}>
              {data.content}
            </Badge>
          ))}
        </Text>
      )}
      <Stack direction={'row'} pt={2}>
        {githubUrl && (
          <a href={githubUrl} target='_blank' rel='noreferrer'>
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
              <TagLabel>Github</TagLabel>
            </Tag>
          </a>
        )}
        {linkUrl && (
          <a href={linkUrl} target='_blank' rel='noreferrer'>
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
              <TagLabel>Vefsíða</TagLabel>
            </Tag>
          </a>
        )}
      </Stack>
    </Box>
  )
}

export default Card
