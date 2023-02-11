import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  position: relative;

  background: ${({ theme }) => theme.colors.background};

  z-index: 1;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 24px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  color: white;
`

export const HeaderTitle = styled.div``

export const AddHabitTrackerIconButton = styled.button`
  height: 32px;

  padding: 4px 12px;
  border-radius: 8px;

  background: #643cbb;
  color: white;
  font-weight: bold;

  svg {
    margin-right: 4px;
  }

  transition: all 300ms ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(110%) saturate(130%);
  }
`
