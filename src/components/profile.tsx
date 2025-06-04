"use client";

import useProfileQuery from "@/api/use-profile-query";

export default function Profile() {
  const { data } = useProfileQuery();
  console.log(data);

  return (
    <div className="flex flex-col justify-center gap-4 p-10">
      <div className="rounded-full overflow-hidden">
        <img src={data?.avatar_url} alt="profile" className="rounded-full" />
      </div>
      <div className="text-2xl font:bold">name: {data?.login || "loading..."} </div>
      <div className="text-xl">updated_at: {data?.updated_at}</div>
    </div>
  );
}
