import styled from "styled-components";

import Board from "./components/board/Board.tsx";
import NewGameControls from "./components/NewGameControls.tsx";
import UserInputs from "./components/UserInputs.tsx";
import useClickAway from "./hooks/useClickAway.tsx";
import useKeyPress from "./hooks/useKeyPressed.tsx";
import useSudokuStateManager from "./hooks/useSudokuStateManager.tsx";
import { keyboardInput } from "./utils/keyboardInputLogic.ts";
import { mobileBreakpoint } from "./utils/styles.ts";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  & * {
    font-family: "Roboto", arial, sans-serif;
    transition: all 0.15s ease-out;
  }

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 0.5rem;
`;

function SudokuApp() {
  const sudokuStateManager = useSudokuStateManager();
  const { setSelectedCell } = sudokuStateManager;

  useKeyPress((e) => keyboardInput(e, sudokuStateManager));
  const ref = useClickAway(() => setSelectedCell(null));

  return (
    <Wrapper ref={ref}>
      <Col>
        <NewGameControls sudokuStateManager={sudokuStateManager} />
        <Board sudokuStateManager={sudokuStateManager} />
      </Col>
      <Col>
        <UserInputs sudokuStateManager={sudokuStateManager} />
      </Col>
    </Wrapper>
  );
}

export default SudokuApp;
