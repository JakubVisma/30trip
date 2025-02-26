import styled from "styled-components";

import { SudokuStateManager } from "../hooks/useSudokuStateManager.tsx";
import { InputMode } from "../models.ts";
import { mobileBreakpoint } from "../utils/styles.ts";

import Button from "./Button.tsx";
import React from "react";

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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 0.5rem;
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
        Notatki {inputMode === InputMode.Notes ? "On" : "Off"}
      </UserInputButton>
      <UserInputButton disabled={hasWon} onClick={undoHistory}>
        Cofnij
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
        Usuń
      </UserInputButton>
    
    </Wrapper>
  );
};

export default UserInputs;
