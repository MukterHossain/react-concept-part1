

const Products = ({item}) => {
    // console.log(item)
    const {id, title} = item;
    // console.log(title)
    
    return (
        <div>
            <h4> Id: {id}</h4>
            <h1>Hello {title}: </h1>
        </div>
    );
};

export default Products;