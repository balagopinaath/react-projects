import ColorPicker from "./ColorPicker/ColorPicker";
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";

function HomeScreen() {
  return (
    <>
      <Todo />
      <Counter />
      <ColorPicker />
    </>
  );
}

export default HomeScreen;
