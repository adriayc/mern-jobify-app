import { FaWpforms } from 'react-icons/fa';
import { MdAdminPanelSettings, MdQueryStats } from 'react-icons/md';
import { IoBarChartSharp } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    text: 'add job',
    path: '.',
    // path: '/', // Error, redirect home
    // path: '/dashboard', // 2nd option
    icon: <FaWpforms />,
  },
  { text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;
