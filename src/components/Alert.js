import React from 'react'

function Alert(props) {
    const Capitalize = (word)=> {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)} :</strong> {props.alert.message}
    </div>
  )
}

export default Alert