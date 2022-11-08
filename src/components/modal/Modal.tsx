
interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void 
}

export const Modal = (props: IProps) => {
    const {title, children, onClose} = props;
    return(
        <div>
            <div>
                <span onClick={onClose}>&times;</span>
                <h2>{title}</h2>
            </div>
        </div>
    )
}
export default Modal;