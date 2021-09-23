import React from 'react'

export const useInputValue = (initialValue: string)=>{
    const [value, setValue] = React.useState('')
    const onChange = (e: any) => setValue(e.target.value)

    return {value, onChange};
}