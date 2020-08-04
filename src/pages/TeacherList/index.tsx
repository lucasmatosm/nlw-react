import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader'


import  './styles.css'
function TeacherList() {
  return (
  <div id="page-teacher-list" className="container">
     <PageHeader title="Esses são os proffys disponíveis">
         <form id="search-teachers">
         <div className="input-block">
             <label htmlFor="subject">Matéria</label>
             <input type="text" id="subject"></input>
         </div>
         <div className="input-block">
             <label htmlFor="week_day">Dia da semana</label>
             <input type="text" id="week_day"></input>
         </div>
         <div className="input-block">
             <label htmlFor="time">Hora</label>
             <input type="text" id="time"></input>
         </div>

         </form>
     </PageHeader>
     <main>
         <article className="teacher-item">
             <header>
                 
                 <img src="https://avatars1.githubusercontent.com/u/11799061?s=460&u=88c909ddb05de215ae0e76050443ea7b9eef097a&v=4"/>
             <div>
                 <strong>Lucas Matos</strong>
                 <span>Química</span>
             </div>
             </header>
         </article>
     </main>
  </div>
  );
}

export default TeacherList;