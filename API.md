# Task view

## GET /getTasks?completed=<boolean>
Query String param of ?complete=[true/false]
Returns an array of available menu items.

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

## POST /markComplete
Marking a task as complete and giving points to the user.
```
REQUEST
{
    taskID: <number>
    user: <String>
}
```
## GET /getUser?=<user>
Query String param of user.
Returns points the user has.

```
[
  {
    user: <String>,
    points: <number>
  },
]
```

