import {
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import {
  IoEyeOutline,
  IoHeartOutline,
  IoNotificationsOutline,
} from 'react-icons/io5'

import { GameList } from '@/types'

import { HeartsUp } from '..'

export interface GameCardProps {
  game: GameList
  view: 'list' | 'grid'
}

function GameCard(props: GameCardProps) {
  const { game, view } = props

  const [hearts, setHearts] = useState<number>(game.hearts_count)
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
    <>
      <Box className="fixed inset-0 pointer-events-none z-50">
        {heartPops.map((delay, index) => (
          <HeartsUp
            key={index}
            delay={delay}
            setHeartPops={setHeartPops}
          />
        ))}
      </Box>

      <Stack
        className={`${
          view === 'grid' ? 'w-full' : 'w-full flex flex-col sm:flex-row'
        } dark:bg-theme-dark-900 bg-gray-50 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 relative group`}
        style={{
          border: '2px solid #333',
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
        }}>
        <Box
          position="relative"
          className={`${view === 'list' ? 'sm:w-1/3' : ''} flex-shrink-0`}>
          {game.badge && (
            <Chip
              label={game.badge}
              className="absolute top-2 left-2 z-10 bg-gradient-to-r from-theme-red-900 to-yellow-500 text-sm font-bold text-white"
              style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
              }}
            />
          )}
          <Box className="relative h-full overflow-hidden">
            <img
              src={game.cover}
              alt={game.title}
              className={`object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${view === 'grid' ? 'max-h-72' : 'sm:h-full h-auto'}`}
            />
            <Box className="absolute bottom-0 left-0 w-full px-4 py-2 flex md:flex-row flex-col md:text-left text-center justify-between items-center backdrop-blur-sm bg-gradient-to-r from-black via-black to-red-400 opacity-85">
              <Link href={`/games/${game.slug}`}>
                <Typography
                  variant="h6"
                  className="text-lg font-bold text-white hover:text-theme-red-900 transition duration-500">
                  {game.title}
                </Typography>
              </Link>
              <Box className="flex items-center sm:flex-row flex-col sm:gap-2 gap-0">
                <Box display="flex" alignItems="center">
                  <IconButton
                    aria-label="heart"
                    color="primary"
                    size="small"
                    onClick={handleHeartClick}
                    data-qa="heart">
                    <IoHeartOutline
                      className={
                        isHearted ? 'text-theme-red-900' : 'text-white'
                      }
                    />
                  </IconButton>
                  <Typography variant="caption">{hearts}</Typography>
                </Box>
                <Box className="flex items-center gap-1">
                  <IoEyeOutline className="text-white" />
                  <Typography variant="caption">
                    {game.views_count}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton
              aria-label="notifications"
              className="absolute top-1 right-1 z-10">
              <IoNotificationsOutline
                className="animate-pulse text-white"
                size={24}
              />
            </IconButton>
          </Box>
        </Box>

        <Box
          padding={2}
          className={`flex flex-col justify-between ${
            view === 'list' ? 'sm:w-2/3' : ''
          } h-full gap-4`}>
          <Box className="flex flex-col flex-grow">
            <Typography variant="body2" className="text-gray-400">
              Release Date: {game.release}
            </Typography>
            <Box className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center my-2 sm:gap-1 gap-2 w-full">
              {game.platforms.map((platform) => (
                <Link
                  href={`/platforms/${platform.slug}`}
                  className="dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-400 bg-gray-300 dark:text-white text-black px-3 py-1 rounded-full sm:w-auto w-full text-center transition-colors duration-300"
                  key={platform.id}>
                  <Typography
                    component="span"
                    fontSize={13}
                    fontWeight="bold">
                    {platform.name}
                  </Typography>
                </Link>
              ))}
            </Box>

            <Box className="flex justify-between items-center">
              <Typography
                variant="h6"
                className="dark:text-white text-gray-600 font-bold">
                {game.sale ? (
                  <div className="flex flex-col">
                    <span className="text-red-500 line-through text-sm">
                      {(game.commom_price / 100).toLocaleString('en-US', {
                        currency: 'USD',
                        style: 'currency',
                      })}
                    </span>
                    <span className="dark:text-white text-gray-600">
                      {(game.best_price / 100).toLocaleString('en-US', {
                        currency: 'USD',
                        style: 'currency',
                      })}
                    </span>
                  </div>
                ) : (
                  (game.best_price / 100).toLocaleString('en-US', {
                    currency: 'USD',
                    style: 'currency',
                  })
                )}
              </Typography>
            </Box>
          </Box>

          <Box className="flex flex-wrap gap-2 my-2 w-full mt-auto">
            {game.genres.map((genre) => (
              <Link href={`/genres/${genre.slug}`} key={genre.id}>
                <Chip
                  className="font-bold border border-theme-red-900 dark:text-gray-300 text-gray-700 sm:w-auto w-full hover:bg-theme-red-900 hover:text-white hover:border-none hover:outline-none"
                  label={genre.name}
                  variant="outlined"
                />
              </Link>
            ))}
          </Box>

          <Button
            fullWidth
            className="bg-theme-red-900 dark:bg-opacity-10 dark:hover:bg-opacity-40 bg-opacity-60 hover:bg-opacity-80 text-white transition-all"
            href={`/games/${game.slug}`}
            data-qa="more-btn">
            View more
          </Button>
        </Box>

        <Box
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, #ff1b6b, #45caff)',
            opacity: 0.1,
            transition: 'opacity 0.5s',
          }}
        />
      </Stack>
    </>
  )
}

export default GameCard
