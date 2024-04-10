import "./search-box.style.css";

const SearchBox = ({className,palceholder,onchangeHelper}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={palceholder}
      onChange={onchangeHelper}
    />
  );
};
// class SearchBox extends Component{
//     render(){
//         return(
//             <input className={`search-box ${this.props.className}`}
//            type='search'
//            placeholder={this.props.palceholder}
//            onChange={this.props.onchangeHelper}/>
//         )
//     }
// }
export default SearchBox;
