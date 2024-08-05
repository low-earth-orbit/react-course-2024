export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // default ButtonsContainer value
  // const ButtonsContainer = buttonsContainer; // 68. setting component types dynamically

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
