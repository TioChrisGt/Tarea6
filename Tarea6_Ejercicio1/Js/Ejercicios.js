//Templates String

let Curso = 'Desarrollo Web'
let Datos ={
    Estudiantes: ['Juan','Maria','Carlos','Karla'],
    Notas: ['10','30', '20','40']

};

let {Estudiantes,Notas} = Datos
console.log(`Alumno: ${Estudiantes[0]} Nota: ${Notas[0]} Curso: ${Curso}`);
console.log(`Alumno: ${Estudiantes[1]} Nota: ${Notas[1]} Curso: ${Curso}`);
console.log(`Alumno: ${Estudiantes[2]} Nota: ${Notas[2]} Curso: ${Curso}`);
console.log(`Alumno: ${Estudiantes[3]} Nota: ${Notas[3]} Curso: ${Curso}`);



let Contenedor = document.querySelector ('#DesWeb')
let html1= '<h2>'+Curso+'</h2>'+
'<ol>'+
'<li>Nombre: ' + Estudiantes[0] + ' Nota:' + Notas[0] +'</li>'+
'<li>Nombre: ' + Estudiantes[1] + ' Nota:' + Notas[1] +'</li>'+
'<li>Nombre: ' + Estudiantes[2] + ' Nota:' + Notas[2] +'</li>'+
'<li>Nombre: ' + Estudiantes[3] + ' Nota:' + Notas[3] +'</li>'+
'</ol>'

Contenedor.innerHTML=html1

let Curso2 = 'Programacion II'
let Datos2 ={
    Estudiantes2: ['Lili','Cleo','Pedro','Marco'],
    Notas2: ['30','40', '33','21']

};

let {Estudiantes2,Notas2} = Datos2
console.log(`Alumno: ${Estudiantes2[0]} Nota: ${Notas2[0]} Curso: ${Curso2}`);
console.log(`Alumno: ${Estudiantes2[1]} Nota: ${Notas2[1]} Curso: ${Curso2}`);
console.log(`Alumno: ${Estudiantes2[2]} Nota: ${Notas2[2]} Curso: ${Curso2}`);
console.log(`Alumno: ${Estudiantes2[3]} Nota: ${Notas2[3]} Curso: ${Curso2}`);

let Contenedor2 = document.querySelector ('#ProgCurso')
let html2= '<h2>'+Curso2+'</h2>'+
'<ol>'+
'<li>Nombre: ' + Estudiantes2[0] + ' Nota:' + Notas2[0] +'</li>'+
'<li>Nombre: ' + Estudiantes2[1] + ' Nota:' + Notas2[1] +'</li>'+
'<li>Nombre: ' + Estudiantes2[2] + ' Nota:' + Notas2[2] +'</li>'+
'<li>Nombre: ' + Estudiantes2[3] + ' Nota:' + Notas2[3] +'</li>'+
'</ol>'
Contenedor2.innerHTML=html2