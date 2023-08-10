const Persons = ({people}) => {
  return (
    <section>
     {people.map((person)=>{
      const{id,name,age,image}=person
      return<article key={id}>
      <h1>{name}</h1>
      <img src={image} alt={name}className='img' />
      <p>{age}</p>
     </article>
     })}
    </section>
  )
}
export default Persons