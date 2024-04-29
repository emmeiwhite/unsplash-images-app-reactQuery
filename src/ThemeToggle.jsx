import { useGlobalContext } from "./context";

export default function ThemeToggle() {
  const greeting = useGlobalContext();
  console.log(greeting);
  return <div>ThemeToggle</div>;
}
