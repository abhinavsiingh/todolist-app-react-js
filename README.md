# React To-Do List

This is a simple React To-Do List application that allows users to add, remove, and mark tasks as complete. It also offers sorting, filtering, and localStorage integration for persistence.

## Features

- Add a new task
- Remove a task
- Mark a task as complete/incomplete
- Edit a task
- Filter tasks (All, Completed, Incomplete)
- Sort tasks (Date, Alphabetical)
- Persistent storage using localStorage

### Testing Guidance

1. **Add a Task**:
   - Enter "Test Task 1" in the input field.
   - Press Enter or click "Add Task".
   - Verify "Test Task 1" appears in the list.

2. **Mark as Complete/Incomplete**:
   - Click on "Test Task 1".
   - Verify the text is struck through, indicating it is completed.
   - Click on "Test Task 1" again.
   - Verify the text is normal, indicating it is incomplete.

3. **Delete a Task**:
   - Click the "Trash" icon next to "Test Task 1".
   - Verify "Test Task 1" is removed from the list.

4. **Edit a Task**:
   - Add "Test Task 2".
   - Click the "Edit" icon next to "Test Task 2".
   - Change the text to "Updated Task 2" and click "Update Task".
   - Verify the task description updates to "Updated Task 2".

5. **Filter Tasks**:
   - Add multiple tasks.
   - Use the filter dropdown to display "Completed" tasks. Verify only completed tasks are displayed.
   - Use the filter dropdown to display "Incomplete" tasks. Verify only incomplete tasks are displayed.
   - Use the filter dropdown to display "All" tasks. Verify all tasks are displayed.

6. **Sort Tasks**:
   - Add tasks in different orders.
   - Use the sort dropdown to sort tasks by "Date". Verify tasks are sorted by the date they were added.
   - Use the sort dropdown to sort tasks by "Alphabetical". Verify tasks are sorted alphabetically.

7. **Persistence**:
   - Add tasks and make changes (mark complete, edit, delete).
   - Refresh the page.
   - Verify the tasks and changes persist.
  
## Installation

1. Clone the repository:
   git clone https://github.com/your-username/react-todo-list.git

2. Navigate to the project directory:
   cd react-todo-list

4. Install dependencies:
   npm install
5. Start the application:
   npm start
