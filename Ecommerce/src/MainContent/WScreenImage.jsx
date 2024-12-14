

function WScreenImage({images}) {
  return (
    <div className='max-w-screen-2xl overflow-x-hidden flex gap-3 mb-10 '>
        {
          images.map((item,index)=> (
            <div key={index}>
              <img src={`Images/${item}`} alt={item} />
            </div>
          ))
        }
      </div>
      
  )
}

export default WScreenImage