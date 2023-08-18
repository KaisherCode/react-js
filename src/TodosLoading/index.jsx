import './TodosLoading.css'

function TodosLoading() {
  return (
    <div class=" relative mt-6 border border-indigo-300 shadow rounded-md p-6 max-w-lg w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-indigo-300 h-6 w-6 animate-spin"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-indigo-200 rounded"></div>
        </div>
        <div class=" animate-ping rounded-full bg-indigo-300 h-4 w-4 absolute top-0 right-0"></div>
      </div>
    </div>
  )
}
export { TodosLoading }