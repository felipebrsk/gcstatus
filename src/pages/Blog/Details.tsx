import { Box, Button, Container, Tooltip, Typography } from '@mui/material'
import { formatRelative } from 'date-fns'
import { useState } from 'react'
import {
  IoChatbubbleOutline,
  IoEyeOutline,
  IoHeart,
  IoHeartOutline,
} from 'react-icons/io5'

import { HeartsUp } from '@/components'
import { MOCK_BLOG_DETAILS } from '@/mocks'

import { CommentsSection } from './modules'

function Details() {
  const post = MOCK_BLOG_DETAILS

  const [hearts, setHearts] = useState<number>(post.hearts_count)
  const [isHearted, setIsHearted] = useState<boolean>(false)
  const [heartPops, setHeartPops] = useState<number[]>([])

  const handleHeartClick = () => {
    setIsHearted((prev) => !prev)

    setHearts(hearts + (isHearted ? -1 : 1))

    if (!isHearted) {
      const newHearts = Array.from({ length: 10 }, (_, i) => i * 10)

      setHeartPops((prev) => [...prev, ...newHearts])
    }
  }

  return (
    <Box className="sm:p-6 p-2 dark:bg-theme-dark-900 bg-transparent flex flex-col justify-between sm:text-start text-center relative">
      <Box className="fixed inset-0 pointer-events-none">
        {heartPops.map((delay, index) => (
          <HeartsUp
            key={index}
            delay={delay}
            setHeartPops={setHeartPops}
          />
        ))}
      </Box>

      <Container maxWidth="xl">
        <Box className="relative mb-6">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full max-h-[50vh] object-cover rounded-lg"
          />
        </Box>

        <Typography
          variant="h1"
          className="text-3xl font-bold text-theme-red-900 mb-4">
          {post.title}
        </Typography>

        <Box className="dark:text-gray-400 text-gray-600 text-sm flex justify-between sm:flex-row flex-col mb-6 items-center sm:items-start">
          <Typography variant="subtitle2">
            {formatRelative(new Date(post.created_at), new Date())} by{' '}
            <Typography component="span" className="text-theme-red-900">
              {post.user.name}
            </Typography>
          </Typography>

          <Box className="flex gap-4 mt-2 md:mt-0 sm:flex-row flex-col items-center">
            <Tooltip title="Hearts count" disableInteractive>
              <Box className="flex items-center gap-1">
                <IoHeartOutline className="w-4 h-4" />
                <Typography component="span">{hearts}</Typography>
              </Box>
            </Tooltip>

            <Tooltip title="Views count" disableInteractive>
              <Box className="flex items-center gap-1">
                <IoEyeOutline className="w-5 h-5" />
                <Typography component="span">
                  {post.views_count}
                </Typography>
              </Box>
            </Tooltip>

            <Tooltip title="Comments count" disableInteractive>
              <Box className="flex items-center gap-1">
                <IoChatbubbleOutline className="w-5 h-5" />
                <Typography component="span">
                  {post.comments_count}
                </Typography>
              </Box>
            </Tooltip>
          </Box>
        </Box>

        <Box className="dark:text-white text-gray-800 text-lg mb-6">
          <Box
            component="div"
            dangerouslySetInnerHTML={{
              __html: post.body,
            }}
          />
        </Box>

        <Box className="mt-4 flex flex-col justify-center sm:items-start items-center">
          <Box className="flex flex-wrap gap-2 mb-4">
            <Typography className="font-bold">Categories:</Typography>
            {post.categories.map((category) => (
              <Typography
                component="span"
                variant="h4"
                key={category.id}
                className="px-3 py-1 text-xs rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors">
                {category.name}
              </Typography>
            ))}
          </Box>

          <Box className="flex flex-wrap gap-2">
            <Typography className="font-bold">Tags:</Typography>
            {post.tags.map((tag) => (
              <Typography
                component="span"
                variant="h4"
                key={tag.id}
                className="px-3 py-1 text-xs rounded-full bg-theme-red-900 text-white hover:bg-theme-red-700 transition-colors">
                #{tag.name}
              </Typography>
            ))}
          </Box>
        </Box>

        <Button
          variant="outlined"
          className={`mt-8 border-2 px-5 py-2 text-lg font-bold transition-all shadow-lg sm:w-auto w-full ${
            isHearted
              ? 'border-red-500 bg-red-500 text-white'
              : 'border-theme-red-900 text-theme-red-900'
          }`}
          startIcon={isHearted ? <IoHeart /> : <IoHeartOutline />}
          onClick={handleHeartClick}>
          {isHearted ? 'Loved it!' : 'Love it!'}
        </Button>

        <Box className="mt-10">
          <CommentsSection comments={post.comments} />
        </Box>
      </Container>
    </Box>
  )
}

export default Details
