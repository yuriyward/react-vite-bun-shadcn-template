import Progress from '@/components/Progress';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="flex flex-col h-screen mx-auto text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 justify-center items-center">
      <h1 className="text-4xl font-bold">Waypass</h1>
      <Progress text="Some progress" />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
