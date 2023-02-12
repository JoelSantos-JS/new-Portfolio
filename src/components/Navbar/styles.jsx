import styled from "styled-components";
import { ImSwitch } from "react-icons/im";
export const NavbarContainer = styled.div`
  display: flex;
  gap: 980px;
`;

export const ButtonSwitch = styled(ImSwitch)`
  color: ${(props) => (props.isactive ? "#F9004D" : "white")};
`;
