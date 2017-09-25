// PART II
// Given the following, create a program that prints the following format
// (including number of characters in each name):
//
// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13

var users = {
    'Students': [ 
        {first_name: 'Michael', last_name: 'Jordan'},
        {first_name: 'John', last_name: 'Rosales'},
        {first_name: 'Mark', last_name: 'Guillen'},
        {first_name: 'KB', last_name: 'Tonel'}
     ],
    'Instructors': [
        {first_name: 'Michael', last_name: 'Choi'},
        {first_name: 'Martin', last_name: 'Puryear'}
     ]
}

// NOTE: I didn't create this. Wouldn't have known how! This is for learning.

for (var group in users) {
    console.log(group)
    for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
        var fullname = users[group][i].first_name + users[group].last_name
        console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
    }
}




// PART I
// Given the array, create a program that outputs:
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel

var students = [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'}
]

for (var i = 0; i < students.length; i++){
    console.log(students[i].first_name, students[i].last_name);
}