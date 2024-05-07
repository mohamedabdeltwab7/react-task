function Product(props) {
  const{product} = props;
    return(
<>
<div className="card">
               <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                 <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.desctiption}
                    </p>
                   <button className="btn btn-primary">Details</button>
                 </div>
               </div> 
</>

    );
}  
export default Product;

//  console.log(props);