import Button from "../Button";
import Input from "../Input";

const ByTeam = ({ setText, submit, text }) => {
    return (
        <div className='flex flex-col'>
            <Input label="Filter By Team" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Team name" required />
            <Button onClick={submit}>Submit</Button>
        </div>
    );
}


export default ByTeam;
