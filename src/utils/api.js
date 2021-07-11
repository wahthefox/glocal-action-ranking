import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useEnrollments(id) {
    const { data, error } = useSWR(`https://ga-test.wahthefox.com/api/enrollments/?campaign=${id}&sort=-miles`, fetcher)

    return {
        data: data?.results || [],
        isLoading: !error && !data,
        isError: error
    }
}

export { useEnrollments };
