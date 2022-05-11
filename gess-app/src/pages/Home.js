import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { Link } from "react-router-dom";
import '../App.css';
import {books} from '../books'
import { useNavigate } from 'react-router-dom';

const Book = (props) =>{
  const {title,author} = props.book;
   return (
<div class="book">
<ul>
 <li><div class="child">
   <h2>{title}</h2>
  <a href='#'>{author}</a>
    </div></li>
 <li><div class="empty">
  
   </div></li>
 <li><div className='down'>
 <li>
   <Link to="/nopage">Suivre</Link>
  </li>
     </div></li>

</ul>

</div>
   );
 
}

  const Home = () =>{
    const navigate = useNavigate();
    const [quote, setQuote] = useState('')
    const data1 = [];
  
    async function populateQuote() {
      const req = await fetch('http://localhost:1337/api/quote', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
  
      const data = await req.json()
      if (data.status === 'ok') {
        setQuote(data.quote)
      } else {
        alert(data.error)
      }
      data1=data.status;
    }
  
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        const user = jwt.decode(token)
        if (!user) {
          localStorage.removeItem('token')
          navigate('/login');
        } else {
          populateQuote()
        }
      }
    }, [])
  
   
        return (
          <div>
         {data1}
          <section className='booklist'>{
        books.map((book)=>{
          return (
            <Book key={book.id} book={book}></Book>
          );
      })} 
      </section>
      </div>
       ); 
  }

  export default Home;
