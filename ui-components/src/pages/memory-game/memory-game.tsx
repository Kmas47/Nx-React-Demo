import React, { useCallback, useEffect, useState } from 'react';
import { playPrimarySound, playSecondarySound } from '../../utils/utils';
import './memory-game.scss';
import { coloredBoxes, defaultBoxes, IBox } from './memory-game.model';
import { memoryGameThemeColor } from '../../utils/utils.theme';
import { MemoryGameHeader } from '../../components/header/memory-game.header';

// Lazy load Confetti component
const Confetti = React.lazy(() => import('../../components/confetti/confetti'));

export default function MemoryGame() {
  const [difficulty, setDifficulty] = useState(5);
  const [boxes, setBoxes] = useState<IBox[][]>([]);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDifficultyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDifficulty(() => Number(e.target.value));
    },
    []
  );

  const generateMatrix = useCallback(() => {
    const newBoxes: IBox[][] = [];

    for (let i = 0; i < difficulty; i++) {
      const row = [];

      for (let j = 0; j < difficulty; j++) {
        if (Math.floor(Math.random() * difficulty) % 2 === 0) {
          row.push(defaultBoxes);
        } else {
          row.push(coloredBoxes);
        }
      }

      newBoxes.push(row as any);
    }

    return newBoxes;
  }, [difficulty]);

  const resetBoxesAndCount = useCallback((newBoxes: IBox[][]) => {
    setBoxes(() => newBoxes);
    setCount(() => getCount(newBoxes));
  }, []);

  useEffect(() => {
    setStart(() => false);
    const newBoxes = generateMatrix();
    resetBoxesAndCount(newBoxes);
  }, [difficulty, generateMatrix]);

  const handlePlay = useCallback(() => {
    setStart((start) => !start);
  }, []);

  useEffect(() => {
    if (!start) {
      const newBoxes = generateMatrix();
      resetBoxesAndCount(newBoxes);
    }
  }, [start]);

  useEffect(() => {
    let targetCount = 0;
    boxes.forEach((box) => {
      box.forEach((boxItem) => {
        if (boxItem.isColored) {
          targetCount++;
        }
      });
    });
    setTarget(() => targetCount);
  }, [boxes]);

  const getCount = useCallback((boxes: IBox[][]) => {
    let count = 0;
    boxes.forEach((box) => {
      count =
        count + box.filter((box) => box.isClicked && box.isColored).length;
    });
    return count;
  }, []);

  const handleBoxClicked = useCallback(
    (box: IBox, index: number, itemIndex: number) => () => {
      if (start && !box.isClicked) {
        setBoxes((prevBoxes) => {
          const newBoxes = [...prevBoxes];
          if (box.isColored) {
            newBoxes[index][itemIndex] = {
              ...newBoxes[index][itemIndex],
              color: memoryGameThemeColor.correctBox,
              isClicked: true,
            };
            playPrimarySound();
          } else {
            newBoxes[index][itemIndex] = {
              ...newBoxes[index][itemIndex],
              color: memoryGameThemeColor.incorrectBox,
              isClicked: true,
            };
            playSecondarySound();
          }
          setCount(() => getCount(newBoxes));
          return newBoxes;
        });
      } else {
        playSecondarySound();
      }
    },
    [start]
  );

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (target === count && start) {
      setShowConfetti(() => true);
      timer = setTimeout(() => {
        setShowConfetti(() => false);
        setStart(() => !start);
      }, 5000);
    }

    if (!start && showConfetti) {
      setShowConfetti(() => false);
    }

    return () => clearTimeout(timer);
  }, [count, target, start, showConfetti]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        padding: '0px 12px',
      }}
    >
      <div>
        <MemoryGameHeader />
      </div>
      {showConfetti && (
        <div key={showConfetti ? 'show' : 'hide'}>
          <Confetti />
        </div>
      )}
      <div>
        <h1>Memory Game</h1>
      </div>
      <div>
        <label
          htmlFor="difficulty-level"
          style={{ display: 'block', padding: '8px' }}
        >
          Difficulty level - {difficulty}
        </label>
        <input
          type="range"
          min="2"
          max="20"
          value={difficulty}
          onChange={handleDifficultyChange}
          id="difficulty-level"
          name="difficulty-level"
        ></input>
      </div>
      <div style={{ padding: '24px' }}>
        <button onClick={handlePlay} className="play-button">
          {start ? 'reset' : 'Play'}
        </button>
        <p style={{ textAlign: 'center' }}>
          Score: {count}/{target}
        </p>
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
          alignContent: 'flex-start',
        }}
      >
        {boxes.map((box, index) => (
          <div style={{ display: 'flex' }} key={index}>
            {box.map((item, itemIndex) => (
              <div
                key={index + itemIndex}
                style={{
                  width: `calc((100% / ${difficulty}) - 8px ) `,
                  height: `calc((100vw / ${difficulty}) - 8px ) `,
                  maxHeight: `calc((100% / ${difficulty}) - 8px ) `,
                  margin: '4px',
                  borderRadius: 6,
                  backgroundColor:
                    item.isClicked && start
                      ? item.color
                      : start && !item.isClicked
                      ? '#D3D3D3'
                      : item.color,
                  transition:
                    item.isClicked && start
                      ? 'ease-in 0.3s'
                      : start && !item.isClicked
                      ? 'ease-in 3s'
                      : 'ease-in',
                }}
                onClick={handleBoxClicked(item, index, itemIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
