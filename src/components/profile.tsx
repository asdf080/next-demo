"use client";

import useProfileQuery from "@/api/use-profile-query";
import Image from "next/image";

export default function Profile() {
  const { data } = useProfileQuery();
  console.log(data);

  return (
    <div>
      <img src={data?.avatar_url} alt="profile" />
      <div>name: {data?.login || "loading..."} </div>
      <div>updated_at: {data?.updated_at}</div>
    </div>
  );
}
