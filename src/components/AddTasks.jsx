function AddTasks() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-column">
      <input type="text" placeholder="Digite o título da tarefa" />
      <input type="text" placeholder="Digite a descrição da tarefa" />
    </div>
  );
}

export default AddTasks;
