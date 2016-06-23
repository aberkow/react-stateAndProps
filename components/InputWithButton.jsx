// import React from 'react';
//
// class InputWithButton extends React.Component {
//   constructor(){
//     super();
//     this.onButtonClick = this.onButtonClick.bind(this);
//   }
//   onButtonClick(evt){
//     evt.preventDefault();
//     console.log(this.textInput.value);
//   }
//   render(){
//     return(
//       <div>
//         <form>
//           <input type='text'
//             ref={function(element){
//               this.textInput = element;
//             }.bind(this)} />
//           <input type='submit' onClick={this.onButtonClick} />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default InputWithButton;
