import { useQuery, UseQueryResult } from "@tanstack/react-query";

const NAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export default function useProfileQuery(): UseQueryResult<Record<string, any>, Error> {
  return useQuery({
    queryKey: [NAME, "profile"],
    queryFn: async ({ queryKey }) => {
      const [NAME] = queryKey;
      const res = await fetch(`https://api.github.com/users/${NAME}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.json();
    },
    retry: false,
  });
}
