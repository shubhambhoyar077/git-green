import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepo } from '../redux/repo/repoSlice';
import { postScheduleCommit } from '../redux/repository/repositorySlice';

const Commits = () => {
  const { repo } = useSelector((state) => state.repo);
  const dispatch = useDispatch();

  const { repository } = useSelector((state) => state.repository);
  const [scheduleCommit, setScheuleCommit] = useState({
    repository_id: null,
    commit_message: '',
    file_name: '',
    branch_name: '',
    content: '',
    auto_commit_attributes: { daily_commit: false, weekend_commit: false },
  });

  useEffect(() => {
    dispatch(fetchRepo({ method_data: { method: 'GET' } }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postScheduleCommit(scheduleCommit));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheuleCommit({ ...scheduleCommit, [name]: value });
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create new commit
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Repository
              </label>
              <select
                id="category"
                name="repository_id"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {repo.map((repository) => (
                  <option value={repository.id}>{repository.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="branch_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Branch Name
              </label>
              <input
                type="text"
                name="branch_name"
                id="branch_name"
                onChange={handleChange}
                value={scheduleCommit.branch_name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type branch name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="file_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                File Path
              </label>
              <input
                type="text"
                name="file_name"
                id="file_name"
                onChange={handleChange}
                value={scheduleCommit.file_name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="root/(file path)"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                File Content
              </label>
              <textarea
                id="content"
                name="content"
                onChange={handleChange}
                value={scheduleCommit.content}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Hello World!"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="commit_message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Commit Message
              </label>
              <input
                type="text"
                name="commit_message"
                id="commit_message"
                onChange={handleChange}
                value={scheduleCommit.commit_message}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Commit Message"
                required
              />
            </div>

            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-checkbox-1"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schedule Daily
              </label>
            </div>
            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-checkbox-2"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schedule WeekEnds
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Create Commit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Commits;
