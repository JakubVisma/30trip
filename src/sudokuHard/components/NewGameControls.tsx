import styled from "styled-components";

import { SudokuStateManager } from "../hooks/useSudokuStateManager.tsx";
import { Difficulty } from "../models.ts";
import { mobileBreakpoint } from "../utils/styles.ts";

import Button from "./Button.tsx";

const Difficulties = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-evenly;

  @media (max-width: ${mobileBreakpoint}) {
    & > button {
      padding-inline: 0.5rem;
    }
  }
`;

interface NewGameControlsProps {
  sudokuStateManager: SudokuStateManager;
}
function NewGameControls({ sudokuStateManager }: NewGameControlsProps) {
  const { difficulty, setNewGame, hasWon } = sudokuStateManager;

  return (
    <>
      {hasWon && <p>No i znowu się udało. Literka na dziś to "B"</p>}
    </>
  );
}

export default NewGameControls;
