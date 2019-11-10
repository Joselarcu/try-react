//container to wrap component render not using html tag to return one expression
// it's called high order component, only wraps other components
const aux = props => props.children;

export default aux;