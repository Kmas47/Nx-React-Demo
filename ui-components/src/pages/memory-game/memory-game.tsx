import React, { useCallback, useEffect, useState } from 'react';

const defaultBoxes: IBox = {
  color: 'grey',
  isColored: false,
  isClicked: false,
};

const coloredBoxes: IBox = {
  color: 'blue',
  isColored: true,
  isClicked: false,
};

interface IBox {
  color: string;
  isColored: boolean;
  isClicked: boolean;
}

export default function MemoryGame() {
  const [difficulty, setDifficulty] = useState(5);
  const [boxes, setBoxes] = useState<IBox[]>([]);
  const [start, setStart] = useState(false);

  const handleDifficultyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDifficulty(() => Number(e.target.value));
    },
    []
  );

  const generateMatrix = useCallback(() => {
    const newBoxes: IBox[] = [];

    for (let i = 0; i < difficulty * difficulty; i++) {
      if (Math.floor(Math.random() * difficulty) % 2 === 0) {
        newBoxes.push(defaultBoxes);
      } else {
        newBoxes.push(coloredBoxes);
      }
    }

    return newBoxes;
  }, [difficulty]);

  useEffect(() => {
    setStart(() => false);
    const newBoxes = generateMatrix();
    setBoxes(() => newBoxes);
  }, [difficulty, generateMatrix]);

  const handlePlay = useCallback(() => {
    setStart((start) => !start);
  }, []);

  useEffect(() => {
    if (!start) {
      const newBoxes = generateMatrix();
      setBoxes(() => newBoxes);
    }
  }, [start]);

  const handleBoxClicked = useCallback(
    (box: IBox, index: number) => () => {
      if (start && !box.isClicked) {
        setBoxes((prevBoxes) => {
          const newBoxes = [...prevBoxes];

          if (box.isColored) {
            newBoxes[index] = {
              ...newBoxes[index],
              color: 'green',
              isClicked: true,
            };
          } else {
            newBoxes[index] = {
              ...newBoxes[index],
              color: 'red',
              isClicked: true,
            };
          }

          return newBoxes;
        });
      }
    },
    [start]
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <input
          type="range"
          min="2"
          max="20"
          value={difficulty}
          onChange={handleDifficultyChange}
          id="difficulty-level"
          name="difficulty-level"
        ></input>
        <label htmlFor="difficulty-level" style={{ padding: '8px' }}>
          Difficulty level - {difficulty}
        </label>
      </div>

      <div>
        <h1>Memory Game</h1>
      </div>
      <div style={{ padding: '24px' }}>
        <button
          onClick={handlePlay}
          style={{ padding: '12px 32px', margin: '4px' }}
        >
          {start ? 'reset' : 'Play'}
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          maxWidth: 720 + 8 * difficulty,
          flexWrap: 'wrap',
          height: '100%',
          width: '100%',
          alignContent: 'flex-start',
        }}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: `calc((100% / ${difficulty}) - 8px ) `,
              height: `calc((100vw / ${difficulty}) - 8px ) `,
              maxHeight: `calc((100% / ${difficulty}) - 8px ) `,
              margin: '4px',
              backgroundColor:
                box.isClicked && start
                  ? box.color
                  : start && !box.isClicked
                  ? 'grey'
                  : box.color,
              transition:
                box.isClicked && start
                  ? 'ease-in 0.3s'
                  : start && !box.isClicked
                  ? 'ease-in 3s'
                  : 'ease-in',
            }}
            onClick={handleBoxClicked(box, index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
