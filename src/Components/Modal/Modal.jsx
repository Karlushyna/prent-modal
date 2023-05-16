// import React, { useState, useEffect } from "react";
// // import { BsBoxArrowLeft } from 'react-icons/bs';
// import { AiOutlineClose } from 'react-icons/ai';
// import ButtonAgree from "./Button/ButtonAgree";

// import css from "./Modal.module.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   useEffect(() => {
//     function handleKeyDown(event) {
//       if (event.key === 'Escape') {
//         setModal(false);
//       }
//     }

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   // const closeEscape = event => {
//   //   if(event.code === 'Escape'){
//   //     toggleModal();
//   //   }
//   // }
//   // window.addEventListener('keydown', closeEscape);

//   return (
//     <>
//       <button onClick={toggleModal} className={css.btn-modal}>
//         Open
//       </button>

//       {modal && (
//         <div className={css.modal}>
//           <div onClick={toggleModal} className={css.overlay}></div>
//           <div className={css.modalContent}>
//             <h2 className={css.title}>Delete adverstiment?</h2>
//             <p>Are you sure you want to delete  BACKEND? 
// You can`t undo this action.</p>
        
//             <div className={css.buttonWrap}>
//               <button className={css.modalBtn} onClick={toggleModal}>Cancel</button>
//               {/* <button className={`${css.modalBtn} ${css.btnAgree}`} >Yes <BsBoxArrowLeft className={css.icon} /></button> */}
//             <ButtonAgree/>
//             </div>
//             <button className={css.closeBtn} onClick={toggleModal}>
//               <AiOutlineClose className={css.closeIcon}/>
//             </button>
//           </div>
//         </div>
//       )}
//       <p>content.</p>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
// import ButtonAgree from "./Button/ButtonAgree";

import css from "./Modal.module.css";

function ModalApproveAction({option, onClose}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setModal(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLogout = () => {
    // Perform logout logic
    onClose();
  };

  // const handleDelete = () => {
  //   // Perform delete form logic
  //   onClose();
  // };

  return (
    <>
      <button onClick={toggleModal} className={css.btn-modal}>
        Open
      </button>

      {modal && (
        <div className={css.modal}>
          <div onClick={toggleModal} className={css.overlay}></div>
          
          {option === 'logout' &&(
            <div className={css.modalContent}>
            <h2 className={css.title}>Delete adverstiment?</h2>
            <p>Are you sure you want to delete  BACKEND? 
You can`t undo this action.</p>
        
            <div className={css.buttonWrap}>
              <button className={css.modalBtn} onClick={toggleModal}>Cancel</button>
              <button className={`${css.modalBtn} ${css.btnAgree}`} onClick={handleLogout} >Yes <BsBoxArrowLeft className={css.icon} /></button>
            {/* <ButtonAgree/> */}
            </div>
            <button className={css.closeBtn} onClick={toggleModal}>
              <AiOutlineClose className={css.closeIcon}/>
            </button>
          </div>
          )}
          
        </div>
      )}
      
    </>
  );
}

export default ModalApproveAction;