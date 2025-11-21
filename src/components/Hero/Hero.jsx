// import React, { useEffect } from 'react'
// import { FaBehance, FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
// import { scrollToSection } from '../../utils/animations'
// import './Hero.css'
// import myphoto from "../../assets/kaiffavimg.jpg";


// const Hero = () => {
//   useEffect(() => {
//     // Initialize animations
//     const timer = setTimeout(() => {
//       const elements = document.querySelectorAll('.hero-fade-in')
//       elements.forEach((el, index) => {
//         setTimeout(() => {
//           el.classList.add('visible')
//         }, index * 150)
//       })
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section id="hero" className="hero section">
//       <div className="hero-container">
//         {/* Header */}
//         <header className="hero-header">
//           <div className="hero-header-brand">
//             {/* <div className="hero-brand-logo"></div>
//             <span className="hero-brand-name">PEREZ</span> */}
//           </div>
//           <div className="hero-header-actions">
//             {/* <button 
//               className="hero-header-cta"
//               onClick={() => scrollToSection('contact')}
//             >
//               Let's Talk
//               <span className="arrow">↗</span>
//             </button> */}
//             {/* <button className="hero-menu-btn" aria-label="Menu">
//               <span></span>
//               <span></span>
//             </button> */}
//           </div>
//         </header>

//         <div className="hero-content">
//           {/* Left Side - Text Content */}
//           <div className="hero-left">
//             <div className="hero-greeting hero-fade-in">
//               Hello, I'm <span className="peace">✌</span>
//             </div>
            
//             <h1 className="hero-name hero-fade-in">
//               <span className="name-highlight">M</span>ohamed Kaif
//             </h1>
            
//             <p className="hero-title hero-fade-in">
//               MERN Stack Developer | Actively Seeking Opportunities
//             </p>

//             <div className="hero-buttons hero-fade-in">
//               <button 
//                 className="btn-primary"
//                 onClick={() => scrollToSection('contact')}
//               >
//                 Let's Talk
//                 <span className="arrow">↗</span>
//               </button>
//               <button 
//                 className="btn-secondary"
//                 onClick={() => scrollToSection('specialities')}
//               >
//                 My Work
//                 <span className="arrow">↗</span>
//               </button>
//             </div>

//             <div className="hero-footer hero-fade-in">
//               <div className="hero-stats">
//                 <span>Learning. Building. Improving.</span>
//               </div>
//               <div className="hero-divider"></div>
//               <div className="hero-social">
//                 <a 
//                   href="https://wa.me/+918778117440" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label="Whatsapp"
//                 >
//                   <FaWhatsapp />
//                 </a>
//                 <a 
//                   href="www.linkedin.com/in/mohamed-kaif-38a20723a" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//                 <a 
//                   href="https://github.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Image */}
//           <div className="hero-right">
//             <div className="hero-image-wrapper">
//               <div className="hero-yellow-shape"></div>
//               <div className="hero-image-placeholder">
//                 <div className="hero-image-content">
//                   <div className="hero-image-text">Mohd kaif</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero









import React, { useEffect } from 'react'
import { FaBehance, FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
import { scrollToSection } from '../../utils/animations'
import './Hero.css'
import myphoto from "../../assets/kaiffavimg.jpg";

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.hero-fade-in')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible')
        }, index * 150)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="hero-container">

        <header className="hero-header">
          <div className="hero-header-brand"></div>
          <div className="hero-header-actions"></div>
        </header>

        <div className="hero-content">

          {/* LEFT SIDE */}
          <div className="hero-left">
            <div className="hero-greeting hero-fade-in">
              Hello, I'm <span className="peace">✌</span>
            </div>
            
            <h1 className="hero-name hero-fade-in">
              <span className="name-highlight">M</span>ohamed Kaif
            </h1>
            
            <p className="hero-title hero-fade-in">
              MERN Stack Developer | Actively Seeking Opportunities
            </p>

            <div className="hero-buttons hero-fade-in">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk <span className="arrow">↗</span>
              </button>

              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('specialities')}
              >
                My Work <span className="arrow">↗</span>
              </button>
            </div>

            <div className="hero-footer hero-fade-in">
              <div className="hero-stats">
                <span>Learning. Building. Improving.</span>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-social">
                <a href="https://wa.me/+918778117440" target="_blank">
                  <FaWhatsapp />
                </a>

                <a href="https://www.linkedin.com/in/mohamed-kaif-38a20723a" target="_blank">
                  <FaLinkedinIn />
                </a>

                <a href="https://github.com" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              
              <div className="hero-yellow-shape"></div>

              <div className="hero-image-placeholder">
                <img src={myphoto} alt="Mohamed Kaif" className="hero-img" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero;
