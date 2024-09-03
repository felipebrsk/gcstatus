import { Box, Container, List, Stack, Typography } from '@mui/material'
import { IoStar } from 'react-icons/io5'

import { ReviewForm } from '@/components'
import { MOCK_GAME_DETAILS } from '@/mocks'

import {
  Availables,
  Critics,
  DLCs,
  Galleries,
  Languages,
  MainDetails,
  Requirements,
  ReviewCard,
  Tabs,
  Torrents,
} from './modules'

function Details() {
  const game = MOCK_GAME_DETAILS

  return (
    <Stack className="dark:bg-theme-dark-900 bg-white dark:text-white text-black sm:p-6 p-0">
      <Container maxWidth="xl">
        <Box
          component="section"
          className="my-4 animate-zoom-in relative group">
          <img
            src={game.cover}
            alt={`${game.title} Cover`}
            className="w-full h-auto rounded-md shadow-lg duration-500 group-hover:shadow-theme-red-900/50"
          />
          <Box className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-md" />
        </Box>

        <Box
          component="section"
          className="flex items-center justify-between sm:flex-row flex-col sm:text-left text-center mt-6 mb-8">
          <Typography
            variant="h1"
            className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold animate-pulse tracking-wider drop-shadow-lg mb-4 sm:mb-0 dark:hot-neon-text dark:text-white text-theme-red-900">
            {game.title}
          </Typography>
          <Typography
            component="span"
            className="dark:text-gray-400 text-white bg-gradient-to-r dark:from-zinc-900 dark:via-transparent dark:to-transparent from-theme-red-900 to-theme-dark-900 px-4 py-2 rounded-full shadow-md">
            Release Date: {game.release}
          </Typography>
        </Box>

        <Tabs
          tabs={[
            {
              tab: 'Info',
              element: <MainDetails game={game} />,
            },
            {
              tab: 'Torrents',
              element: (
                <Box component="section" className="flex flex-col gap-4">
                  <Torrents game={game} />
                </Box>
              ),
            },
            {
              tab: 'Gallery',
              element: (
                <Box component="section">
                  <Galleries galleries={game.galleries} />
                </Box>
              ),
            },
            {
              tab: 'Reviews',
              element: (
                <Box component="section" className="flex flex-col gap-4">
                  <Typography
                    variant="h2"
                    className="sm:text-2xl text-xl font-semibold animate-flicker text-theme-red-900 dark:text-white break-words">
                    User reviews
                  </Typography>
                  {game.reviews.length > 0 && (
                    <Box
                      component="span"
                      className="flex items-center gap-1">
                      <IoStar size={18} className="text-yellow-500" />
                      {game.reviews.reduce(
                        (total, curr) => total + curr.rate,
                        0,
                      ) / game.reviews.length}
                    </Box>
                  )}
                  <Box
                    component="section"
                    className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                    {game.reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </Box>

                  <Typography
                    variant="h2"
                    className="sm:text-2xl text-xl font-semibold animate-flicker text-theme-red-900 dark:text-white break-words">
                    Critics
                  </Typography>
                  {game.critics.length > 0 && (
                    <Box
                      component="span"
                      className="flex items-center gap-1">
                      <IoStar size={18} className="text-yellow-500" />
                      {game.critics.reduce(
                        (total, curr) => total + curr.rate,
                        0,
                      ) / game.critics.length}
                    </Box>
                  )}
                  <Box component="section" className="flex flex-col gap-4">
                    {game.critics.map((critic) => (
                      <Critics key={critic.id} critic={critic} />
                    ))}
                  </Box>

                  <Typography
                    variant="h2"
                    className="sm:text-2xl text-xl font-semibold animate-flicker text-theme-red-900 dark:text-white break-words">
                    Leave a review
                  </Typography>

                  <ReviewForm game={game} />
                </Box>
              ),
            },
            {
              tab: 'Purchase',
              element: (
                <Box component="section" className="flex flex-col gap-4">
                  {game.companies.map((company) => (
                    <Availables key={company.id} company={company} />
                  ))}
                </Box>
              ),
            },
            {
              tab: 'DLCs',
              element: (
                <Box component="section">
                  {game.dlcs.length > 0 ? (
                    <List className="flex flex-col gap-4 sm:text-left text-center">
                      {game.dlcs.map((dlc) => (
                        <DLCs key={dlc.id} dlc={dlc} />
                      ))}
                    </List>
                  ) : (
                    <Typography>
                      No one DLC available for this game.
                    </Typography>
                  )}
                </Box>
              ),
            },
            {
              tab: 'Requirements',
              element: (
                <Box component="section" className="flex flex-col gap-4">
                  <Requirements requirements={game.requirements} />
                </Box>
              ),
            },
            {
              tab: 'Languages',
              element: (
                <Box component="section" className="flex flex-col gap-4">
                  <Languages languages={game.languages} />
                </Box>
              ),
            },
          ]}
        />
      </Container>
    </Stack>
  )
}

export default Details
