import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepository } from '../redux/repository/repositorySlice';

const Home = () => {
  const { repository } = useSelector((state) => state.repository);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepository());
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center py-8">
      <table className="w-9/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Commit
            </th>
            <th scope="col" className="px-6 py-3">
              Repository
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {repository.map((repo) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{repo.commit.commit_message}</td>
              <td className="px-6 py-4">{repo.repository.name}</td>
              <td className="px-6 py-4">
                {repo.auto_commit &&
                  (repo.auto_commit.commit_status ? (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      Online
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                      Offline
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
