interface TaskListProps {
  tasks: string[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="mt-4 list-disc pl-6">
      {tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  );
}
