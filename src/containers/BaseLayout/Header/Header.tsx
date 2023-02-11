import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AddHabitTrackerIconButton,
  Container,
  HeaderContainer,
  HeaderTitle,
} from './styled'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Habit Tracker</HeaderTitle>
        <AddHabitTrackerIconButton type="button" onClick={() => {}}>
          <FontAwesomeIcon icon={faPlus} />
          Add New Track
        </AddHabitTrackerIconButton>
      </HeaderContainer>
    </Container>
  )
}
