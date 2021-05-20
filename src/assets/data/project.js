import { v4 as uuidv4 } from 'uuid';
import Movie from '../images/movies.jpg';
import OurDoors from '../images/outdoors.jpg';
import Housing from '../images/housing.jpg';
import Honda from '../images/honda.jpg';

const project = [
  {
    id: uuidv4(),
    name: 'Housing',
    desc: 'An application to track your all data from one place. I developed the website and the mobile app',
    img: Movie,
  },
  {
    id: uuidv4(),
    name: 'Honda',
    desc: 'An application to track your all data from one place. I developed the website and the mobile app',
    img: OurDoors,
  },
  {
    id: uuidv4(),
    name: 'OutDoors',
    desc: 'An application to track your all data from one place. I developed the website and the mobile app',
    img: Housing,
  },
  {
    id: uuidv4(),
    name: 'Cinema',
    desc: 'An application to track your all data from one place. I developed the website and the mobile app',
    img: Honda,
  },
];
export default project;
