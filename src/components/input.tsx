import { ChangeEvent } from "react";

 export interface IProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export const Input = (props: IProps) => {

    const {label, value, onChange} = props;
    return (
        <div>
            <label>{label} </label>
            <div>
                <input type="text" value={value} onChange={onChange}/>
            </div>
        </div>
    )
}

