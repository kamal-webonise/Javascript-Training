  student = []; 

  for( let i=0; i < 20; i++ ) {
    student[i] = {
      id: i,
      name: "Kamal" + i
    }
  }

  var students_list = document.getElementById('studentList');  
  var ul = document.createElement('ul');
  
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
  });  
   
  students_list.appendChild(ul);

  var deleteBtn = document.getElementsByClassName('delete');

  findStudent() {
    let count = 0;
    let id;
    let listItem = event.target.parentElement.firstChild.innerHTML;
    student.map( (stud) => { 
      if( stud.id == listItem ) {
        id = count;
        return id;
      }
      count++;
    });
  }

  if (deleteBtn.length) {
    for(let i = 0; i < deleteBtn.length ;i++) {
      deleteBtn[i].onclick = (event) => {
        let id = findStudent();
        student.splice(id,1);
        event.target.parentElement.classList.add('hide');
      }
    }
  }