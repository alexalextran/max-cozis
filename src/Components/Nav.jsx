import React, { useEffect } from 'react';

const Nav = () => {


useEffect(() => {
 
  

  var sections = document.getElementsByTagName('section')
  var nav_li = document.getElementsByClassName('nav-li')
  
  const observer0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      nav_li[0].classList.toggle("navObserver", entry.isIntersecting)
    })
  },
  {
    rootMargin: "-50%",
  })

  const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        nav_li[1].classList.toggle("navObserver", entry.isIntersecting)
      })
    },
    {
      rootMargin: "-50%",
    })

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        nav_li[2].classList.toggle("navObserver", entry.isIntersecting)
      })
    },
    {
      rootMargin: "-50%",
    })
    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        nav_li[3].classList.toggle("navObserver", entry.isIntersecting)
      })
    },
    {
      threshold: 0.7,
    })
    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        nav_li[4].classList.toggle("navObserverW", entry.isIntersecting)
      })
    },
    {
      threshold: 0.7,
    })
    const observer5 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        nav_li[5].classList.toggle("navObserver", entry.isIntersecting)
      })
    },
    {
      threshold: 0.7,
    })

 

    observer0.observe(sections[0])
    observer1.observe(sections[1])
    observer2.observe(sections[2])
    observer3.observe(sections[3])
    observer4.observe(sections[4])
    observer5.observe(sections[5])
   

    
},[])



    

  
  
    

   
    return (
        <>
          <nav>
            <ul>
              <a href="#video-header">
              <li className='nav-li'>
            </li>
              </a>
            
              <a href="#aboutMe">
            <li className='nav-li'>
            </li>
            </a>

            <a href="#skills">
            <li className='nav-li'> 
            </li>
            </a>

            <a href="#myworks">
            <li className='nav-li'> 
            </li>
            </a>

            <a href="#values">
            <li className='nav-li'> 
            </li>
            </a>

            <a href="#contact">
            <li className='nav-li'> 
            </li>
            </a>

            </ul>
            </nav>  
        </>
    );
}

export default Nav;
