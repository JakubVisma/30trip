import styled from "styled-components";

import { SudokuStateManager } from "../hooks/useSudokuStateManager.tsx";
import { InputMode } from "../models.ts";
import { mobileBreakpoint } from "../utils/styles.ts";

import Button from "./Button.tsx";

interface UserInputsProps {
  sudokuStateManager: SudokuStateManager;
}

const UserInputButton = styled(Button)`
  width: 100%;
  aspect-ratio: 1;

  @media (max-width: ${mobileBreakpoint}) {
    padding-inline: 0.5rem;
    aspect-ratio: 2.7;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 0.5rem;
  flex-basis: auto;
  justify-items: center;
  align-items: center;
`;

const UserInputs = ({ sudokuStateManager }: UserInputsProps) => {
  const {
    addCellNote,
    clearCellNotes,
    hasWon,
    inputMode,
    selectedCell,
    setCellValue,
    toggleInputMode,
    undoHistory,
  } = sudokuStateManager;
  return (
    <Wrapper>
      <UserInputButton
        onClick={toggleInputMode}
        active={inputMode === InputMode.Notes}
      >
        Notes {inputMode === InputMode.Notes ? "On" : "Off"}
      </UserInputButton>
      <UserInputButton disabled={hasWon} onClick={undoHistory}>
        Undo
      </UserInputButton>
      <UserInputButton
        onClick={() => {
          if (!selectedCell) {
            return;
          }
          setCellValue(null);
          clearCellNotes();
        }}
      >
        Erase
      </UserInputButton>

      {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
        <UserInputButton
          key={number}
          onClick={() => {
            if (!selectedCell) {
              return;
            }
            addCellNote(number);
            setCellValue(number);
          }}
        >
          {number}
        </UserInputButton>
      ))}
    </Wrapper>
  );
};

export default UserInputs;
