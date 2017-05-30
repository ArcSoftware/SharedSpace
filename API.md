# Task view

## GET /getTasks?completed=[boolean]
Returns an array of tasks. If true- returns only complete items, if false, returns all tasks.

#### RESPONSE if true
```
[
  {
    id: <number>,
    taskName: <String>,
    complete: true,
    userName: <String>,
    points: <number>
  },
]
```
#### RESPONSE if false
```
[
  {
    id: <number>,
    taskName: <String>,
    complete: false,
    userName: null,
    points: <number>
  },
]
```
## POST /markComplete
Marking a task as complete and giving points to the user.
```
{
    taskID: <number>
    user: <String>
}
```
## GET /getUser?userName=[userName] (if userName == 'all', return all users and their points)
Query String param of user.
Returns points the user has.

```
[
  {
    userName: <String>,
    points: <number>
  },
]
```

