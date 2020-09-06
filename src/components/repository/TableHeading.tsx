import React from 'react'

type PropType = {
    name:string
}

const TableHeading:React.FC<PropType> = (props:any) => {
    return (
            <td>{props.name}</td>
    )
}
export default TableHeading