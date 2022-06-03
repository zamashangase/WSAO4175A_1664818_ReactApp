const element = <a href="https://www.reactjs.org"> link </a>;
function formatName(user){
return user.firstName + '' + user.lastName;

}

const user={
    firstName: 'Zamashuku',

    lastName: 'Shangase'
}

function Welcome(props) {
    return <h1>InternetArt {props.name}</h1>;
  } 
const str = "myName";
const result = str.replace(/([A-Z])/g,' $1');

function camelCase(str){
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const [width, setWindowWidth] = useState(0)
    useEffect(() => { 
 
      updateDimensions();
 
      window.addEventListener('resize', updateDimensions);
      return () => 
        window.removeEventListener('resize',updateDimensions);
     }, [])
     const updateDimensions = () => {
       const width = window.innerWidth
       setWindowWidth(width)
     }
console.log(final);
