import React, { useState } from "react";
import { MainColor, flexing } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { CategoryProps } from "../types";
import { Url, en, fr } from "../hooks";

const Category = () => {
  const { isPending, error, data } = useQuery<CategoryProps[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${Url}/${en}/categories`).then((res) =>
        res.json()
      ),
  });

  if (isPending) return <div className={`${flexing}`}>
    Loading...
  </div>;

  if (error) return "An error has occurred: " + error?.message;
  
  return (
    <section
      className={`${flexing} gap-8 text-white Rubik  w4 text-sm relative`}
      style={{ background: MainColor }}
    >
      {data?.map((item, index) => (
        <Link
          key={index}
          className="hover:text-gray-200 p-2 text-md"
          to={`/${item?.id}`}
        >
          {item?.name}
        </Link>
      ))}
    </section>
  );
};

export default Category;
