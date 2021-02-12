student = []; 
var deleteBtn = document.getElementsByClassName('delete');

for( let i=0; i < 5; i++ ) {
  student[i] = {
    id: i,
    name: "Kamal" + i
  }
}

function display() {

  var students_list = document.getElementById('studentList'); 
  var ul = document.createElement('ul');

  while(students_list.firstChild) {
    students_list.removeChild(students_list.firstChild);
  }

  student.map((student_info) => {

    let li = document.createElement('li');
    let name = document.createElement('span');
    let id = document.createElement('span');
    let btn = document.createElement('button');

    name.innerHTML = student_info.name;
    id.innerHTML = student_info.id;
    btn.innerHTML = 'Delete';
    btn.className = 'delete';

    li.appendChild(id);
    li.appendChild(name);
    li.appendChild(btn);

    ul.appendChild(li);  
    console.log(deleteBtn);
  });  
   
  students_list.appendChild(ul);
};

display();

if (deleteBtn.length) {
  debugger;
  for(let i = 0; i < deleteBtn.length ;i++) {
    deleteBtn[i].onclick = (event) => {

      let id;
      let listItem = event.target.parentElement.firstChild.innerHTML;
      
      id=student.findIndex( (id) =>
        id.id == listItem
      );
      
      student.splice(id,1);  
      display();
    }
  }
}
