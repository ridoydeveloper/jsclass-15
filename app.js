



// analog clock

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");



setInterval(() => {

   let time = new Date();

   let secs = time.getSeconds();
   let mins = time.getMinutes();
   let hrs = time.getHours();

   sec.style.transform = `rotateZ(${arrows(60,secs)}deg)`;
   min.style.transform = `rotateZ(${arrows(60,mins)}deg)`;
   hr.style.transform = `rotateZ(${arrows(12,hrs)}deg)`;


  
  
}, 1000);

function arrows(time , cuttent){

   return(360* cuttent) / time ;
};




// instant data with checkbox



const skills = document.querySelectorAll('.skill');
const skills_all = document.querySelector('.all-skills');




skills.forEach(skill => {
    
skill.addEventListener('change', function(){

    let all_data = document.querySelectorAll('.skill:checked');


    let skills_arr =[];

  

    all_data.forEach(data => {

        skills_arr.push(data.value);
    })


    
    let list = '';

    skills_arr.map(data => {

        list += `<li class="list-group-item">${data}</li>`;
    });



    skills_all.innerHTML = list;
 


});

});



// calculator





let cal_data = [];

let valGet = (val) => {

 cal_data.push(val);

 document.querySelector('.top-monitor').innerHTML = cal_data.join('');
 document.querySelector('.main-monitor').innerHTML = 0;


};



let allclear = () => {

    cal_data = []

    document.querySelector('.top-monitor').innerHTML = 0;
    document.querySelector('.main-monitor').innerHTML = '';

};

let back = () => {

    cal_data.pop();

    document.querySelector('.top-monitor').innerHTML = cal_data.join('');

};

let finalRes = () => {

    let cal_string = cal_data.join('');
    document.querySelector('.main-monitor').innerHTML = eval(cal_string);
};