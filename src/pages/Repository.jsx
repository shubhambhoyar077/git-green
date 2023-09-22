import { useSelector, useDispatch } from 'react-redux';
import { fetchRepo } from '../redux/repo/repoSlice';
import { useState } from 'react';

const Repository = () => {
  const [reponame, setReponame] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      method_data: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repository: { name: reponame } }),
      },
    };
    dispatch(fetchRepo(data));
  };

  const handleChange = (e) => {
    setReponame(e.target.value);
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="UserName"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Repository Name
              </label>
              <input
                type="text"
                name="RepoName"
                id="Repository Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Repository Name"
                value={reponame}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800"
          >
            Add Repository
          </button>
        </form>
      </div>
    </section>
  );
};
export default Repository;
