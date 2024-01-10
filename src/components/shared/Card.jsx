function Card({ children, reverse }) {
  // Condition class
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
  // Conditional styling
//   return (
//     <div className='card' style={{
//       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '#000'
//     }}
//     >
//       {children}
//     </div>
//   )
}

Card.defaultProps = {
  reverse: true,
}

export default Card