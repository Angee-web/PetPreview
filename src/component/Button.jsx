/* eslint-disable react/prop-types */
const Button = (props) => {
    const { text="  Test button",bg, color, onClick, disabled, } = props
     return (
         <button disabled={disabled} style={{background: bg, color: color }}
         onClick={onClick}  >
          {text}
          </button>
     )
   }
   
   export default Button;
   