import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <section className='section'>
      <h4>404</h4>
      <p>Page not found!</p>
      <Link to={'/'}>back to home</Link>
    </section>
  );
};
export default Error;
