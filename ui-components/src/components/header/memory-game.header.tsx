import { Helmet } from 'react-helmet-async';

export const MemoryGameHeader = () => {
  return (
    <Helmet>
      <title>Memory Game</title>
      <meta
        name="description"
        content="A fun and challenging memory game to test your skills."
      />
      <meta name="keywords" content="memory game, fun, challenge, brain game" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Memory Game" />
      <meta
        property="og:description"
        content="A fun and challenging memory game to test your skills."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://nx-react-dashboard.vercel.app/memory-game"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Memory Game" />
      <meta
        name="twitter:description"
        content="A fun and challenging memory game to test your skills."
      />

      <link
        rel="canonical"
        href="https://nx-react-dashboard.vercel.app/memory-game"
      />
    </Helmet>
  );
};
