import { HiOutlineTrash } from 'react-icons/hi';

import css from "./ButtonAgree.module.css";


const ButtonAgree = () => {
return (
    <button className={`${css.modalBtn} ${css.btnAgree}`} >Yes <HiOutlineTrash className={css.icon} /></button>

)
}

export default ButtonAgree;