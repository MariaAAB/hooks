import React from 'react'
import { forwardRef ,useImperativeHandle} from 'react'

interface FormProps{
    initialData?:string
}
 export interface FormRef{
submit():void
}
 export const Form :React.RefForwardingComponent<FormRef,FormProps>= (props,ref) => {
    function submit(){
        alert('Submit')
    }
    useImperativeHandle(ref,() =>({
      submit,
    }))
  return (
    <form action=''>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
    </form>
  )
}

export default forwardRef(Form)