import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster.map((mon) => {
        return <Card monster={mon} />;
      })}
    </div>
  );
};
// class CardList extends Component {
//   render() {
//     const { monster } = this.props;
//     return (
//       <div className="card-list">
//         {monster.map((mon) => {
//           return (
//             <Card monster={mon}/>
//           );
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
