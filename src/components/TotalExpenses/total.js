import Card from "../UI/Card";
import "./total.css"
const Total = (props) => {

    return <div className="main-total" >Total: <span>${props.total}</span>
        <input id="show" type="checkbox" />
        <label htmlFor="show" ></label>
    </div>

}
export default Total